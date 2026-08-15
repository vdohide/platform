import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full rounded-lg absolute fixed inset-0 min-h-full min-w-full z-0 opacity-70">
                <img
                    src="/assets/images/world-map.svg"
                    className="h-full w-full pointer-events-none select-none object-cover"
                    alt="world map" height="495" width="1056" draggable="false"
                    style={{ filter: "none", opacity: "var(--map-opacity)" }}
                />
            </div>
            <div className="flex w-full max-w-md flex-col gap-6 z-10">
                {children}
            </div>
        </div>
    )
}