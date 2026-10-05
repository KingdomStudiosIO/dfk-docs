import type { MetadataRoute } from "next";
import { getNav } from "@/lib/nav";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getNav().pages.map((p) => ({ url: site.url + (p.url === "/" ? "" : p.url) }));
}
