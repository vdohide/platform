import type { NextConfig } from "next"

const apiUrl =
  process.env.API_INTERNAL_URL ?? "http://localhost:4000";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@workspace/auth",
    "@workspace/core",
    "@workspace/ui"
  ],
  allowedDevOrigins: ['vdohide.org'],
  rewrites: async () => {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${apiUrl}/api/auth/:path*`,
      },
      {
        source: "/api/v2/:path*",
        destination: `${apiUrl}/v2/:path*`,
      },
    ]
  },
}

export default nextConfig
