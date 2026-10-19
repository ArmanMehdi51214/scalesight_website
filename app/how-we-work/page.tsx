import ContentPage from "@/components/content-page";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("howWeWork");

export default function Page() { return <ContentPage route="/how-we-work" />; }
