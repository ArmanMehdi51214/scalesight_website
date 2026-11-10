import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/planning-workspace",
    "/how-we-work",
    "/examples",
    "/30-day-planning-pilot",
    "/about",
    "/contact",
    "/privacy",
    ...(siteConfig.partnersActive ? ["/partners"] : []),
  ].map((path) => ({ url: `${siteConfig.url}${path === "/" ? "" : path}` }));
}
