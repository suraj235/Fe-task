import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Allow images from Unsplash
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
