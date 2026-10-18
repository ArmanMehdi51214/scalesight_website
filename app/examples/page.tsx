import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { DecisionBrief, Hero } from "@/components/revamp-components";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("examples");

export default function ExamplesPage() {
  return <><SiteHeader /><main>
    <Hero eyebrow="Illustrative examples" heading="Compare the decision before committing the run." body="A synthetic beverage example shows how availability, incoming supply and shared capacity can shape a review of quantity and timing." primary={{ href: "/contact", label: "Talk through a decision" }} />
    <section className="content-shell px-4 pb-16 sm:px-6"><DecisionBrief /></section>
  </main><SiteFooter /></>;
}
