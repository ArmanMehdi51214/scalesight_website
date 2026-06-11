import type { Metadata } from "next";

import ForecastingPage from "@/components/pages/ForecastingPage";

export const metadata: Metadata = {
  title: "ScaleSight | Revenue & Demand Forecasting",
  description: "A detailed forecasting and planning page based on the Stitch design export.",
};

export default function ForecastingRoutePage() {
  return <ForecastingPage />;
}
