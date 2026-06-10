import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  CirclePlay,
  Megaphone,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import DashboardGridShowcase from "@/components/DashboardGridShowcase";
import ShaderBackdrop from "@/components/ShaderBackdrop";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { PrimaryButton, SectionHeader, SecondaryButton } from "@/components/marketing-primitives";

const problemChips = [
  "Unpredictable revenue",
  "Inventory shortages",
  "Overstocking",
  "Reactive planning",
  "Poor visibility",
];

const audienceCards = [
  {
    icon: ShieldAlert,
    title: "Inventory Uncertainty",
    copy: "Predict lead times, stock coverage, and safety stock with less manual reconciliation.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising Decisions",
    copy: "Sync traffic plans with inventory constraints before campaigns create fulfillment pain.",
  },
  {
    icon: Sparkles,
    title: "Demand Fluctuations",
    copy: "Surface SKU-level demand shifts earlier so teams can act before the window closes.",
  },
  {
    icon: Boxes,
    title: "Scaling Operations",
    copy: "Move from firefighting to a weekly operating rhythm that keeps finance and ops aligned.",
  },
];

const faqs = [
  {
    question: "How accurate are the forecasting models?",
    answer:
      "Most brands see useful accuracy gains within the first month, with models improving as more demand, inventory, and campaign context is connected.",
  },
  {
    question: "Does ScaleSight integrate with Shopify?",
    answer:
      "Yes. The operating model is built for Shopify-first brands and can extend into ERP, inventory, and paid media systems.",
  },
  {
    question: "How far ahead can ScaleSight forecast?",
    answer:
      "Teams typically use short-horizon operational forecasts alongside longer planning views for purchasing, promotions, and growth scenarios.",
  },
];

export default function ForecastingPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <section className="relative px-6 py-20 md:py-28">
          <ShaderBackdrop />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="eyebrow-chip">Revenue Forecasting</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                Forecast Future Revenue And Demand{" "}
                <span className="text-gradient-primary">With More Confidence.</span>
              </h1>
              <p className="section-copy mt-7 max-w-2xl">
                Turn historical data into a practical operating signal. ScaleSight
                helps inventory, revenue, and demand planning stay coordinated
                instead of reactive.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
                <SecondaryButton href="/case-studies">View Case Studies</SecondaryButton>
              </div>
            </div>

            <div className="hero-frame p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[rgba(6,12,21,0.85)] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-white">Weekly Planning Board</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    Strategic dashboards
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Live intelligence
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(4,8,18,0.94)] p-3">
                <div className="rounded-[1.4rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.18),rgba(5,10,21,0.96)_58%)] p-4">
                  <Image
                    alt="ScaleSight dashboard preview"
                    className="h-auto w-full rounded-[1.2rem] border border-white/8 object-cover"
                    height={286}
                    priority
                    src="/stitch/05-dashboard-grid.jpg"
                    width={512}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/6 bg-[rgba(18,28,40,0.72)] px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
            {problemChips.map((chip) => (
              <div key={chip} className="signal-chip signal-chip--danger">
                <span className="text-rose-300">x</span>
                {chip}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <SectionHeader
              align="center"
              title="See ScaleSight in Action"
              copy="A premium forecasting surface for operators who need to move quickly without losing strategic context."
            />

            <div className="surface-card mt-12 overflow-hidden rounded-[2rem] p-5">
              <div className="relative aspect-video overflow-hidden rounded-[1.6rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(6,15,27,0.96),rgba(10,19,33,0.88))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.16),transparent_58%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--blue-primary),var(--blue-secondary))] text-white shadow-[0_24px_60px_rgba(0,94,240,0.35)]">
                    <CirclePlay size={34} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                  Product walkthrough
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(10,20,31,0.88)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Deep Granularity, Total Control."
              copy="Specialized dashboard surfaces for finance, inventory, merchandising, and executive teams."
            />
            <div className="mt-14">
              <DashboardGridShowcase />
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                title="Built For Ecommerce Brands Managing Complexity"
                copy="ScaleSight is the intelligence layer between your growth ambitions and the real operational limits underneath them."
              />

              <div className="surface-card mt-10 overflow-hidden rounded-[2rem] p-4">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.14),rgba(7,17,31,0.96)_64%)] p-3">
                  <Image
                    alt="Perspective dashboard planning view"
                    className="h-auto w-full rounded-[1rem] object-cover opacity-88"
                    height={286}
                    src="/stitch/02-perspective-dashboard-visualization.jpg"
                    width={512}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {audienceCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="surface-card rounded-[1.6rem] p-7">
                    <div className="flex items-start gap-4">
                      <div className="icon-badge">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(5,15,26,0.94)] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeader align="center" title="Frequently Asked Questions" />
            <div className="mt-12 space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item group">
                  <summary className="faq-summary">
                    <span>{item.question}</span>
                    <ArrowRight className="faq-arrow" size={18} />
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="cta-panel mx-auto max-w-6xl">
            <SectionHeader
              align="center"
              title="Ready to Predict Your Future?"
              copy="Bring revenue plans, inventory reality, and demand signals into one decision layer."
            />

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
              <SecondaryButton href="/case-studies">View Case Studies</SecondaryButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
