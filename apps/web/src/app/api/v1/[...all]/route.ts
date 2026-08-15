import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

type Context = {
    params: Promise<{ all: string[] }>;
};

async function proxy(request: NextRequest, context: Context) {
    const { all } = await context.params;

    const apiBaseUrl = "http://localhost:4000";
    if (!apiBaseUrl) {
        return Response.json(
            { error: "API_INTERNAL_URL is not configured" },
            { status: 500 },
        );
    }

    const targetUrl = new URL(
        `/${all.map(encodeURIComponent).join("/")}`,
        apiBaseUrl,
    );

    targetUrl.search = request.nextUrl.search;

    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.delete("connection");
    headers.delete("content-length");

    const body =
        request.method === "GET" || request.method === "HEAD"
            ? undefined
            : await request.arrayBuffer();

    try {
        const upstream = await fetch(targetUrl, {
            method: request.method,
            headers,
            body,
            redirect: "manual",
            cache: "no-store",
        });

        const responseHeaders = new Headers(upstream.headers);

        // fetch อาจถอด compression แล้ว จึงไม่ควรส่ง header เดิมกลับไป
        responseHeaders.delete("content-encoding");
        responseHeaders.delete("content-length");

        return new Response(upstream.body, {
            status: upstream.status,
            headers: responseHeaders,
        });
    } catch (error) {
        console.error("[api/v1 proxy]", error);

        return Response.json(
            { error: "API service unreachable" },
            { status: 502 },
        );
    }
}

export {
    proxy as GET,
    proxy as POST,
    proxy as PUT,
    proxy as PATCH,
    proxy as DELETE,
    proxy as HEAD,
    proxy as OPTIONS,
};