import type { MetadataRoute } from "next";

import { siteUrl } from "@/app/seo";

const routes = [
  {
    path: "/",
    priority: 1,
    lastModified: "2026-06-19T00:00:00.000Z",
  },
  {
    path: "/plan-with-confidence",
    priority: 0.9,
    lastModified: "2026-06-19T00:00:00.000Z",
  },
  {
    path: "/about",
    priority: 0.7,
    lastModified: "2026-06-18T00:00:00.000Z",
  },
  {
    path: "/contact",
    priority: 0.8,
    lastModified: "2026-06-19T00:00:00.000Z",
  },
  {
    path: "/case-studies",
    priority: 0.7,
    lastModified: "2026-06-19T00:00:00.000Z",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
