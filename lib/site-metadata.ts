import type { Metadata } from "next";

const siteUrl = "https://scalesight.org";

export const routeMetadata = {
  home: {
    title: "ScaleSight | Managed Planning for Consumer Brands",
    description:
      "Maintained demand, inventory and supply analysis with reviewed recommendations on quantity, timing and cash. Explore a focused planning pilot.",
    canonical: "/",
  },
  howWeWork: {
    title: "How we work | ScaleSight",
    description:
      "See how ScaleSight maintains analysis and review while the client decides and executes.",
    canonical: "/how-we-work",
  },
  examples: {
    title: "Illustrative examples | ScaleSight",
    description:
      "Review synthetic examples of demand, inventory and supply decisions for growing consumer brands.",
    canonical: "/examples",
  },
  pilot: {
    title: "30-day planning pilot | ScaleSight",
    description:
      "Explore ScaleSight’s 30-day planning pilot for growing consumer brands.",
    canonical: "/30-day-planning-pilot",
  },
  about: {
    title: "About | ScaleSight",
    description:
      "ScaleSight helps growing consumer brands review decisions about demand, inventory and incoming supply.",
    canonical: "/about",
  },
  partners: {
    title: "Partners | ScaleSight",
    description:
      "Learn about working with ScaleSight to support planning decisions for growing consumer brands.",
    canonical: "/partners",
  },
  contact: {
    title: "Contact | ScaleSight",
    description: "Talk through a planning decision with ScaleSight.",
    canonical: "/contact",
  },
  privacy: {
    title: "Privacy | ScaleSight",
    description: "Read the ScaleSight privacy policy.",
    canonical: "/privacy",
  },
} as const;

export type RouteMetadataKey = keyof typeof routeMetadata;

export function getRouteMetadata(key: RouteMetadataKey): Metadata {
  const route = routeMetadata[key];
  const url = new URL(route.canonical, siteUrl).toString();

  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: route.canonical },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      type: "website",
      siteName: "ScaleSight",
    },
  };
}
