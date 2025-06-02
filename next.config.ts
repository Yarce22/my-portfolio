import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd33wubrfki0l68.cloudfront.net',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/4721kof1h75k/**',
        search: '',
      }
    ]
  }
};

export default nextConfig;
