"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@workspace/auth/client";
import { Button, buttonVariants, Skeleton } from "@workspace/ui/components";

export function UserSession() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [signOutError, setSignOutError] = useState<string | null>(null);

    const handleSignOut = async () => {
        setIsSigningOut(true);
        setSignOutError(null);

        try {
            const { error } = await authClient.signOut();
            if (error) {
                setSignOutError(error.message ?? "Unable to sign out");
                return;
            }

            router.refresh();
        } catch (error) {
            setSignOutError(
                error instanceof Error ? error.message : "Unable to sign out",
            );
        } finally {
            setIsSigningOut(false);
        }
    };

    if (isPending) {
        return (
            <div className="space-y-2" aria-label="Loading user session">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-56" />
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="space-y-2">
                <p className="text-muted-foreground">You are not signed in.</p>
                <Link href="/login" className={buttonVariants()}>
                    Login
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-3 rounded-lg border p-4">
            <div>
                <p className="font-medium">{session.user.name || "Signed-in user"}</p>
                <p className="text-muted-foreground text-xs">{session.user.email}</p>
                <p className="text-muted-foreground font-mono text-xs">
                    {session.user.id}
                </p>
            </div>
            <Button
                type="button"
                variant="outline"
                onClick={handleSignOut}
                disabled={isSigningOut}
            >
                {isSigningOut ? "Logging out..." : "Logout"}
            </Button>
            {signOutError && (
                <p className="text-destructive text-xs" role="alert">
                    {signOutError}
                </p>
            )}
        </div>
    );
}
