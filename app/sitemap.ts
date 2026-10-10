import type { MetadataRoute } from "next";
import { nav, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: new URL(item.href, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
