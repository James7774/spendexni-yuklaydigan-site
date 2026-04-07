import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, // Statik export uchun cleaner URL/hosting support
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
