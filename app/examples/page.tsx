import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { CTABand, DecisionBrief, DecisionCard, Hero } from "@/components/revamp-components";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("examples");

const syntheticDisclosure = "Illustrative · synthetic data";

export default function ExamplesPage() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <Hero eyebrow="ILLUSTRATIVE PLANNING EXAMPLES" heading="See how a planning question becomes a decision." body="These are illustrative workspaces built with synthetic data. They show how ScaleSight may structure an investigation. They are not client results or client operating data." primary={{ href: "/contact?intent=planning", label: "Talk through a planning decision" }} />

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="brief-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow-chip">ILLUSTRATIVE · SYNTHETIC DATA</p>
          <h2 className="section-title mt-4 max-w-3xl" id="brief-heading">What a reviewed planning brief can contain</h2>
          <div className="mt-8"><DecisionBrief /></div>
        </div>
      </section>

      <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="comparison-heading">
        <p className="eyebrow-chip">EVIDENCE → OPTIONS → OUTPUT</p>
        <h2 className="section-title mt-4 max-w-3xl" id="comparison-heading">Three questions. Three different trade-offs.</h2>
        <div className="mt-9 space-y-6">
          <DecisionCard
            anchorId="supply-timing"
            tag="CPG / supply timing"
            question="When supply timing changes, what should happen to the promotion?"
            evidence="Available stock, committed orders, revised arrival dates and expected promotion demand."
            options="Expedite eligible supply, split the receipt, reallocate usable stock or adjust the promotion."
            output="A timing recommendation with cash, service and feasibility trade-offs."
            disclosure={syntheticDisclosure}
            demoKey="supplyTiming"
            approvedDemo
          />
          <DecisionCard
            anchorId="launch-demand"
            tag="Food / launch demand"
            question="Is the launch adding demand or shifting the flavor mix?"
            evidence="Total portfolio sales, availability, opening fill, repeat orders and shared production capacity."
            options="Increase total output, change the mix within the planned run or hold until repeat demand is clearer."
            output="A next-run recommendation with component, capacity and cash implications."
            disclosure={syntheticDisclosure}
            demoKey="launchDemand"
            approvedDemo
          />
          <DecisionCard
            anchorId="size-depth"
            tag="Apparel / size depth"
            question="Which size demand should shape the next buy?"
            evidence="Sales by size, in-stock exposure, returns, exchanges and retained demand."
            options="Deepen selected sizes, rebalance the size curve or hold depth pending better evidence."
            output="A size-depth recommendation with lead-time, stock and cash trade-offs."
            disclosure={syntheticDisclosure}
            demoKey="sizeDepth"
            approvedDemo
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]">
        <div className="content-shell px-4 py-10 sm:px-6 md:py-12">
          <p className="max-w-4xl text-base leading-7 text-[var(--text-secondary)]">The workspace shows how the investigation may be structured. In an engagement, ScaleSight maintains the agreed analysis and brings a reviewed recommendation. Your team makes the final decision.</p>
        </div>
      </section>

      <CTABand eyebrow="YOUR PLANNING QUESTION" heading="Bring us a planning question." primary={{ href: "/contact?intent=planning", label: "Talk through a planning decision" }} />
    </main>
    <SiteFooter />
  </>;
}
