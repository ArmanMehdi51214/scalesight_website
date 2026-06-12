import type { Metadata } from "next";

import ForecastingPage from "@/components/pages/ForecastingPage";

export const metadata: Metadata = {
  title: "ScaleSight | Plan With Confidence",
  description:
    "Operational visibility for ecommerce teams across revenue, inventory, demand, and planning decisions.",
};

export default function ForecastingRoutePage() {
  return <ForecastingPage />;
}
