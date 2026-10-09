import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  /**
   * Permanent redirects for retired routes.
   *
   * @returns The redirect table; /legal was split into /privacy and /terms in v1.5.
   */
  async redirects() {
    return [{ source: "/legal", destination: "/privacy", permanent: true }];
  },
};

export default nextConfig;
