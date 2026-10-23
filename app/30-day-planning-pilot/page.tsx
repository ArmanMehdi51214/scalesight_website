import ContentPage from "@/components/content-page";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("pilot");

export default function Page() { return <ContentPage route="/30-day-planning-pilot" />; }
