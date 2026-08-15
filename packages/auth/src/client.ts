import { createAuthClient } from "better-auth/react"
import { twoFactorClient, magicLinkClient, customSessionClient } from "better-auth/client/plugins"
import type { auth } from "./config";

export const authClient = createAuthClient({
    /** แต่ละเว็บเรียก Better Auth ผ่าน same-origin /api/auth rewrite */
    baseURL: process.env.NEXT_PUBLIC_URL,
    fetchOptions: {
        credentials: "include",
    },
    plugins: [
        twoFactorClient({
            onTwoFactorRedirect() {
                // จะ redirect ไปหน้า verify 2FA
                window.location.href = "/verify-2fa";
            },
        }),
        magicLinkClient(),
        customSessionClient<typeof auth>()
    ],
})
