import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: '/image/:path*', // This hides the /api part
        destination: '/api/image?path=:path*', // Internally rewrites to your API
      },
    ];
  },
};

export default nextConfig;
