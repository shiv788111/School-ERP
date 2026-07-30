import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(process.cwd()),

  transpilePackages: ["three"],

  images: {
    // ─── QUALITY CONFIGURATION ──────────────────────────────────────
    // Required for Next.js 16+ to avoid "unconfigured qualities" warnings
    qualities: [75, 80, 85, 90, 95],
    
    // ─── REMOTE PATTERNS ────────────────────────────────────────────
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    
    // ─── ADDITIONAL IMAGE OPTIMIZATIONS ────────────────────────────
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
};

export default nextConfig;