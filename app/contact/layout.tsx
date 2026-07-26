import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleSight | Book Your Strategy Call",
  description:
    "Schedule a discovery call with ScaleSight to walk through the 30-Day Planning Pilot, demand forecasting, and inventory planning for your Shopify brand.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "book strategy call",
    "ScaleSight contact",
    "ecommerce discovery call",
    "30-day pilot strategy call",
    "inventory planning consultation",
  ],
  openGraph: {
    title: "ScaleSight | Book Your Strategy Call",
    description:
      "Schedule a strategy call to discuss demand forecasting, inventory planning, and operating visibility for your ecommerce brand.",
    type: "website",
    siteName: "ScaleSight",
    url: "https://scalesight.org/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
