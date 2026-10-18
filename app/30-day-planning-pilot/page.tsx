import ForecastingPage from "@/components/pages/ForecastingPage";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("pilot");

export default function ForecastingRoutePage() {
  return <ForecastingPage />;
}
