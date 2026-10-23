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
    title: "How ScaleSight Works | Managed Planning",
    description:
      "See how ScaleSight investigates demand signals, compares practical options and brings your team a reviewed planning recommendation.",
    canonical: "/how-we-work",
  },
  examples: {
    title: "Illustrative Planning Examples | ScaleSight",
    description:
      "Explore synthetic examples of supply timing, launch demand and size-depth decisions. See the evidence and trade-offs behind a planning brief.",
    canonical: "/examples",
  },
  pilot: {
    title: "30-Day Planning Pilot | ScaleSight",
    description:
      "Test managed analytical planning on one upcoming buy, production run or allocation decision with an agreed scope and review process.",
    canonical: "/30-day-planning-pilot",
  },
  about: {
    title: "About ScaleSight | Analysis Behind the Commitment",
    description:
      "Meet the founder and understand how ScaleSight connects data-science analysis with planning review for growing consumer brands.",
    canonical: "/about",
  },
  partners: {
    title: "Partner with ScaleSight | Analytical Planning Support",
    description:
      "Discuss scoped planning analysis and decision support for consumer-brand clients, with clear roles and delivery boundaries.",
    canonical: "/partners",
  },
  contact: {
    title: "Discuss a Planning Decision | ScaleSight",
    description: "Book a 30-minute conversation about your next buying, production or allocation decision. Choose a time directly with ScaleSight.",
    canonical: "/contact",
  },
  privacy: {
    title: "Privacy Notice | ScaleSight",
    description: "How ScaleSight collects, uses and protects personal information, and how to make a privacy-related request.",
    canonical: "/privacy",
  },
  designSystem: {
    title: "ScaleSight Design System",
    description: "Visual primitives and brand tokens used by the ScaleSight website.",
    canonical: "/design-system",
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
