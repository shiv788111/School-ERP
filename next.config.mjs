import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(process.cwd()),

  transpilePackages: ["three"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // ✅ Quality configuration for Next.js 16+
    qualities: [75, 80, 85, 90, 95],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:all*(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ❌ REMOVE redirects completely - handled by hosting provider
  // async redirects() {
  //   return [];
  // },

  // ✅ Remove powered by header for security
  poweredByHeader: false,

  // ✅ Compress for better performance
  compress: true,
};

export default nextConfig;