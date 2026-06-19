import type { MetadataRoute } from "next";

import { siteUrl } from "@/app/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/plan-with-confidence", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/case-studies", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
