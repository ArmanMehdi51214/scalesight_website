import type { Metadata } from "next";

import ForecastingPage from "@/components/pages/ForecastingPage";

export const metadata: Metadata = {
  title: "ScaleSight | The 30-Day Planning Pilot",
  description:
    "The 30-Day Planning Pilot builds your first ecommerce planning system in one month — demand forecasting, inventory planning, and weekly decision support for Shopify brands.",
  alternates: {
    canonical: "/30-day-planning-pilot",
  },
  keywords: [
    "30-day planning pilot",
    "ecommerce planning system",
    "inventory planning",
    "demand forecasting",
    "Shopify inventory planning",
    "sales forecasting",
    "reorder priorities",
    "stockout prevention",
    "weekly decision support",
    "managed planning partner",
  ],
  openGraph: {
    title: "ScaleSight | The 30-Day Planning Pilot",
    description:
      "Build your first ecommerce planning system in 30 days. Forecasting, inventory planning, and weekly decision support for Shopify brands.",
    type: "website",
    siteName: "ScaleSight",
    url: "https://scalesight.org/30-day-planning-pilot",
  },
};

export default function ForecastingRoutePage() {
  return <ForecastingPage />;
}
