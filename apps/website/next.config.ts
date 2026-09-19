import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const repoBasePath = "/ai-sdk-tools";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@ai-sdk-tools/store",
    "@ai-sdk-tools/devtools",
    "@ai-sdk-tools/artifacts",
  ],
  // Performance optimizations for SEO
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // GitHub Pages serves this app from https://<user>.github.io/ai-sdk-tools/,
  // so it needs a static export with the repo name as basePath.
  ...(isGithubPages && {
    output: "export",
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
    trailingSlash: true,
  }),

  // Image optimization (the optimizer API isn't available on a static export)
  images: {
    unoptimized: isGithubPages,
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for better SEO and performance. Not supported on a static
  // export (there's no server to apply them), so they're skipped there;
  // Vercel/other server deploys still get them.
  ...(!isGithubPages && {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
            {
              key: "X-XSS-Protection",
              value: "1; mode=block",
            },
            {
              key: "Referrer-Policy",
              value: "origin-when-cross-origin",
            },
          ],
        },
        {
          source: "/static/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  }),
};

export default nextConfig;
