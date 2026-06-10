import type { Metadata } from "next";

import ForecastingPage from "@/components/pages/ForecastingPage";

export const metadata: Metadata = {
  title: "ScaleSight | Revenue & Demand Forecasting",
  description: "Forecasting, inventory visibility, and demand planning for ecommerce operators.",
};

export default function ServicesPage() {
  return <ForecastingPage />;
}
