import { NextRequest, NextResponse } from 'next/server';
import { safeRedirectPath } from '@workspace/core/utils';

const authApiUrl = process.env.API_INTERNAL_URL ?? "http://localhost:4000";

type ProxySession = {
    user?: {
        id?: string;
    };
};

type ProxyCookie = {
    name: string;
    value: string;
};

const AuthRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/set-password",
    "/verify-2fa",
    "/verify-email",
    "/error",
    "/magic-link"
];

// หน้ากลุ่ม (home) — สาธารณะ/การตลาด ดูได้โดยไม่ต้อง login (ตาม route tree ใน apps/web/Readme.md)
// "/" แยกไปจัดการเองใน handleRootPath เพราะมี logic พิเศษ (เด้งผู้ใช้ที่ login แล้วออกตาม callbackUrl ฯลฯ)
const PublicRoutes = [
    "/features",
    "/pricing",
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/legal",
];

const Auth2FARoute = "/verify-2fa";

export async function proxy(req: NextRequest) {
    const pathName = req.nextUrl.pathname;

    // 1. Get Authentication State
    // ไม่ผูกกับ cookie prefix ของแต่ละ environment; API จะเป็นผู้ตรวจ token จริงอีกครั้ง
    const cookies = req.cookies.getAll();
    const sessionCookie = cookies.find(({ name }) => name.endsWith(".session_token"));
    const twoFactorCookie = cookies.find(({ name }) => name.endsWith(".two_factor"));

    const session = sessionCookie ? await getSession(req) : null;
    // 2. Identify Route Types
    const isOAuthCallback = pathName.startsWith('/oauth-callback');
    const isAuthRoute = AuthRoutes.some(route => pathName.startsWith(route));
    const isPublicRoute = PublicRoutes.some(route => pathName.startsWith(route));

    // 3. Construct URLs
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || req.nextUrl.host;
    const protocol = req.headers.get("x-forwarded-proto") || req.nextUrl.protocol.replace(":", "") || "http";
    const currentUrl = `${protocol}://${host}${req.nextUrl.pathname}${req.nextUrl.search}`;
    const accountsUrl = `${protocol}://${host}`;

    // 4. Process Routing Logic
    const response = getRoutingDecision(req, {
        pathName, session, twoFactorCookie, isAuthRoute, isPublicRoute, isOAuthCallback, currentUrl, accountsUrl
    });

    // 5. Post-process: Persist referral cookie (?ref=xxx) — first click wins, อายุ 7 วัน
    // response = appendReferralCookie(req, response);

    // 6. Post-process: Persist callbackUrl cookie if navigating to Auth Routes
    return appendCallbackCookie(req, response, isAuthRoute);
}

async function getSession(req: NextRequest): Promise<ProxySession | null> {
    const startedAt = performance.now();
    let responseStatus: number | "network-error" = "network-error";

    try {
        const headers = new Headers();
        headers.set("cookie", req.headers.get("cookie") ?? "");

        const userAgent = req.headers.get("user-agent");
        if (userAgent) headers.set("user-agent", userAgent);

        const response = await fetch(new URL("/api/auth/get-session", authApiUrl), {
            method: "GET",
            headers,
            cache: "no-store",
        });
        responseStatus = response.status;

        if (!response.ok) {
            return null;
        }

        return await response.json() as ProxySession | null;
    } catch (error) {
        console.error("[Proxy] Failed to retrieve auth session", error);
        return null;
    } finally {
        const durationMs = Math.round(performance.now() - startedAt);
        console.info(
            `[Proxy] getSession took ${durationMs}ms status=${responseStatus} path=${req.nextUrl.pathname}`,
        );
    }
}

// ==========================================
// Helper Functions for Routing Logic
// ==========================================

function getRoutingDecision(
    req: NextRequest,
    ctx: {
        pathName: string, session: ProxySession | null, twoFactorCookie: ProxyCookie | undefined,
        isAuthRoute: boolean, isPublicRoute: boolean, isOAuthCallback: boolean,
        currentUrl: string, accountsUrl: string
    }
): NextResponse {
    const { pathName, session, twoFactorCookie, isAuthRoute, isPublicRoute, isOAuthCallback, currentUrl, accountsUrl } = ctx;

    // Handle Social Login Errors
    if (pathName.startsWith('/api/auth/error')) {
        const errorParam = req.nextUrl.searchParams.get('error') || 'unknown';
        const url = new URL('/login', accountsUrl);
        url.searchParams.set('error', errorParam);
        return NextResponse.redirect(url);
    }

    // Allow /v1 API routes for unauthenticated users
    if (pathName.startsWith('/v1') && !session) {
        return NextResponse.next();
    }

    // Handle Missing 2FA Cookie when accessing 2FA Route
    if (pathName.startsWith(Auth2FARoute) && !twoFactorCookie) {
        return redirectTo(accountsUrl, "/login", getCallbackUrl(req, currentUrl));
    }

    // Force 2FA verification if 2FA cookie exists but session is not established
    if (twoFactorCookie && !pathName.startsWith(Auth2FARoute) && !session) {
        const callbackUrl = req.nextUrl.searchParams.get("callbackUrl") || (!isAuthRoute ? currentUrl : null);
        return redirectTo(accountsUrl, Auth2FARoute, callbackUrl);
    }

    // Restrict access to Protected Routes for unauthenticated users
    if (!session && !isAuthRoute && !isPublicRoute) {
        return redirectTo(accountsUrl, "/login", currentUrl);
    }

    // Redirect authenticated users away from Auth Routes (e.g. /login)
    if (session && isAuthRoute && !isOAuthCallback) {
        // safeRedirectPath: รับเฉพาะ path ภายใน กัน ?callbackUrl=https://evil.com พาออกนอกเว็บ
        const callbackUrl = safeRedirectPath(req.nextUrl.searchParams.get("callbackUrl") || req.cookies.get("auth_callback_url")?.value);
        const res = NextResponse.redirect(new URL(callbackUrl || "/", currentUrl));
        if (callbackUrl) {
            res.cookies.delete("auth_callback_url");
            res.headers.set("x-auth-resolved", "1"); // Flag to prevent appendCallbackCookie from re-setting it
        }
        return res;
    }

    // Default: Allow request
    return NextResponse.next();
}

function redirectTo(baseUrl: string, path: string, callbackUrl?: string | null) {
    const url = new URL(path, baseUrl);
    if (callbackUrl) url.searchParams.set("callbackUrl", callbackUrl);
    return NextResponse.redirect(url);
}

function getCallbackUrl(req: NextRequest, fallback: string) {
    return req.nextUrl.searchParams.get("callbackUrl") || fallback;
}

// function appendReferralCookie(req: NextRequest, response: NextResponse) {
//     const ref = req.nextUrl.searchParams.get("ref");
//     if (!ref || !isValidReferralCode(ref)) return response;
//     // first click wins — มี cookie เดิมอยู่แล้วไม่ทับ
//     if (req.cookies.get(REFERRAL_COOKIE_NAME)) return response;

//     response.cookies.set(REFERRAL_COOKIE_NAME, ref, {
//         path: "/",
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         maxAge: REFERRAL_COOKIE_MAX_AGE,
//     });
//     return response;
// }

function appendCallbackCookie(req: NextRequest, response: NextResponse, isAuthRoute: boolean) {
    if (response.headers.has("x-auth-resolved")) {
        response.headers.delete("x-auth-resolved");
        return response; // Skip setting because it was explicitly deleted
    }

    const qCallbackUrl = req.nextUrl.searchParams.get("callbackUrl");
    if (qCallbackUrl && isAuthRoute) {
        response.cookies.set("auth_callback_url", qCallbackUrl, {
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60, // 1 hour
        });
    }
    return response;
}

export const config = {
    matcher: [
        '/api/auth/error',
        '/((?!$|api|locales|assets|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|opengraph-image|twitter-image|icon|apple-icon|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp|.*\\.ico|.*\\.json|\\.well-known).*)',
    ],
};
