import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // GitBook also served the home page under its own slug.
    const homeSlug = process.env.SITE === "devs" ? "/dfk-developer-docs" : "/readme";
    return [{ source: homeSlug, destination: "/", permanent: true }];
  },
};

export default nextConfig;
