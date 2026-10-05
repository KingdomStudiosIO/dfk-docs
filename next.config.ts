import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old home page addresses.
    const homeSlug = process.env.SITE === "devs" ? "/dfk-developer-docs" : "/readme";
    return [{ source: homeSlug, destination: "/", permanent: true }];
  },
};

export default nextConfig;
