import ContentPage from "@/components/content-page";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("partners");

export default function Page() { return <ContentPage route="/partners" />; }
