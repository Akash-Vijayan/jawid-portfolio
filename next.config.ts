import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  /* Don't advertise the framework in the `X-Powered-By` response header. */
  poweredByHeader: false,

  /* Surface React's extra development checks (double-invoked effects,
     stale-state warnings) in production too — they catch real bugs. */
  reactStrictMode: true,

  /* Tailwind emits a small, atomic stylesheet (~7 KB gzipped). Inlining it
     into the HTML removes a render-blocking round trip, which improves
     First Contentful Paint / LCP for first-time visitors. */
  experimental: {
    inlineCss: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
