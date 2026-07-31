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
    // ✅ Add quality configuration for Next.js 16+
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

  // ✅ Add conditional redirects
  async redirects() {
    // Only redirect in production, not in development
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/',
          destination: 'https://www.connectskool.com',
          permanent: true,
          basePath: false,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'connectskool.com',
            },
          ],
          destination: 'https://www.connectskool.com/:path*',
          permanent: true,
        },
      ];
    }
    return []; // No redirects in development
  },

  // ✅ Remove powered by header for security
  poweredByHeader: false,

  // ✅ Compress for better performance
  compress: true,
};

export default nextConfig;