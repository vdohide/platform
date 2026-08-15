import { AuthFallback, EmailPasswordLogin } from "@/components/auth";
import { SocialLoginButtons } from "@/components/auth/section/social-login";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components";
import React from "react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata() {

    return {
        title: "Login to your account",
    }
}

export default async function Loginpage() {
    return (
        <>
            <Card className="lg:border-0">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Login</CardTitle>
                    <CardDescription>Login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <React.Suspense fallback={<AuthFallback />}>
                        <EmailPasswordLogin />
                    </React.Suspense>
                    <React.Suspense>
                        <SocialLoginButtons
                            onlySocial={false}
                            google={true}
                            github={true}
                        />
                    </React.Suspense>
                </CardContent>
            </Card>
        </>
    )
}