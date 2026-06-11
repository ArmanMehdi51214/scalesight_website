import {
  ArrowRight,
  CheckCircle2,
  Link2Off,
  Sparkles,
  TrendingDown,
  TriangleAlert,
} from "lucide-react";

import DashboardGridShowcase from "@/components/DashboardGridShowcase";
import PerspectiveShowcase from "@/components/PerspectiveShowcase";
import ShaderBackdrop from "@/components/ShaderBackdrop";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
} from "@/components/marketing-primitives";

const trustItems = [
  "Shopify",
  "DTC Brands",
  "Operations Teams",
  "Inventory Managers",
  "Growth Teams",
];

const problemCards = [
  {
    icon: TrendingDown,
    category: "Revenue Risk",
    title: "Revenue Uncertainty",
    copy: "Without a reliable forward view, teams commit budget, inventory, and hiring against assumptions that can shift too late. Missed targets rarely happen all at once. They build quietly through weak planning and slower reactions.",
    question: "How do you plan confidently when the number keeps moving?",
    accentClass: "bg-[#f43f5e]",
    iconClass: "bg-[#f43f5e]/12 text-[#fda4af]",
    labelClass: "text-[#fda4af]",
  },
  {
    icon: TriangleAlert,
    category: "Inventory Pressure",
    title: "Inventory Risk",
    copy: "Inventory mistakes create pain on both sides. Overstock ties up working capital and compresses margins, while stockouts quietly erase demand, customer trust, and campaign efficiency at the exact moment growth should compound.",
    question:
      "Are you protecting service levels, or just reacting after the damage?",
    accentClass: "bg-[#f59e0b]",
    iconClass: "bg-[#f59e0b]/12 text-[#fcd34d]",
    labelClass: "text-[#fcd34d]",
  },
  {
    icon: Sparkles,
    category: "Planning Velocity",
    title: "Reactive Planning",
    copy: "When planning depends on static reports and manual updates, teams spend the week chasing yesterday's issues instead of shaping the next decision window. That slows execution and turns every decision into a catch-up exercise.",
    question: "Are you steering the business ahead, or scrambling to catch up?",
    accentClass: "bg-[#04b4fd]",
    iconClass: "bg-[#04b4fd]/12 text-[#8dd9ff]",
    labelClass: "text-[#8dd9ff]",
  },
  {
    icon: Link2Off,
    category: "Cross-Team Alignment",
    title: "Disconnected Decisions",
    copy: "Growth, finance, and operations often work from different versions of reality. When reporting is fragmented, each team makes a reasonable decision locally, but the combined outcome creates friction, waste, and missed timing.",
    question: "What happens when every team is right, but no one is aligned?",
    accentClass: "bg-[#8b5cf6]",
    iconClass: "bg-[#8b5cf6]/12 text-[#c4b5fd]",
    labelClass: "text-[#c4b5fd]",
  },
];

const visibilityCards = [
  {
    label: "Forecasted Revenue",
    value: "$2.4M",
    copy: "Projected for Q4 based on current demand velocity and campaign pacing.",
  },
  {
    label: "Inventory Risk",
    value: "Low Risk",
    copy: "98.2% fulfillment confidence across top-performing SKU clusters.",
  },
  {
    label: "Demand Trends",
    value: "+18.5%",
    copy: "Rising demand in high-contribution assortment lines detected early.",
  },
  {
    label: "Recommendations",
    value: "6 New",
    copy: "Planning actions are ready for review before the week begins.",
  },
];

const questionChips = [
  "Should we increase ad spend?",
  "Will inventory support demand?",
  "Which products need attention?",
  "Are we likely to hit targets?",
  "How much stock should we reorder?",
  "Will a promotion create stockouts?",
  "Should we prepare for seasonal demand?",
];

const processSteps = [
  [
    "01",
    "Review Your Business Data",
    "Understand current operations and available data.",
  ],
  [
    "02",
    "Build Forecasting Models",
    "Develop forecasting systems tailored to the business.",
  ],
  [
    "03",
    "Create Visibility Dashboard",
    "Build decision-focused visibility tools.",
  ],
  ["04", "Deliver Actionable Insights", "Translate data into recommendations."],
  ["05", "Support Planning Decisions", "Help teams plan with confidence."],
];

const storyCards = [
  {
    step: "CARD 1",
    title: "Business Problem",
    copy: "Unpredictable demand and inventory uncertainty.",
  },
  {
    step: "CARD 2",
    title: "Visibility Gap",
    copy: "Lack of forecasting and operational visibility.",
  },
  {
    step: "CARD 3",
    title: "Dashboard Insight",
    copy: "Demand forecast highlighted future inventory risk.",
  },
  {
    step: "CARD 4",
    title: "Planning Outcome",
    copy: "Improved inventory planning and better operational decisions.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <section className="relative px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <ShaderBackdrop />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[38%] overflow-hidden">
            <div className="absolute left-1/2 bottom-[-42%] h-[420px] w-[1200px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(4,180,253,0.95)_0%,rgba(0,94,240,0.75)_28%,rgba(0,94,240,0.28)_48%,rgba(7,17,31,0)_72%)] blur-2xl" />
            <div className="absolute left-1/2 bottom-[-58%] h-[360px] w-[900px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.42)_0%,rgba(4,180,253,0.22)_32%,transparent_68%)] blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl"></div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-[rgba(17,31,49,0.8)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#8dd9ff]">
                <span className="h-2 w-2 rounded-full bg-[#8dd9ff]" />
                New intelligence engine v2.0
              </div> */}

              <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-white md:text-6xl lg:text-[5.25rem]">
                Plan Growth With More{" "}
                <span className="text-gradient-primary">Confidence.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                Turn sales, inventory, and customer data into clearer forecasts,
                smarter planning, and better business decisions.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="/contact">
                  Book a Strategy Call
                </PrimaryButton>
                <SecondaryButton href="/services">
                  Watch 90-Second Walkthrough
                </SecondaryButton>
              </div>
            </div>

            <div className="mt-12 md:mt-14">
              <div className="mx-auto max-w-6xl">
                <PerspectiveShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="border-y border-white/6 bg-[rgba(18,28,40,0.52)] px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-center">
            {trustItems.map((item) => (
              <p
                key={item}
                className="min-w-[120px] text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.34)]"
              >
                {item}
              </p>
            ))}
          </div>
        </section> */}

        <section className="relative overflow-hidden border-y border-white/6 bg-[#07111F] px-6 py-16 md:py-20">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-40 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(4,180,253,0.14),rgba(0,94,240,0.06),transparent_70%)] blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#04B4FD]/35 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#04B4FD]/80 md:text-[0.95rem]">
                Trusted Ecosystem
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl lg:text-[3.2rem]">
                Trusted by Scaling Ecommerce Brands
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35 hover:bg-white/[0.06] md:px-6"
                >
                  {/* Animated shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Small glowing dot */}
                  <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-[#04B4FD] shadow-[0_0_18px_rgba(4,180,253,0.9)]" />

                  <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-[#B7C1D1] transition group-hover:text-white">
                    {item}
                  </p>

                  {/* Bottom glow line */}
                  <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#04B4FD]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Growth Creates Complexity"
              copy="As your business grows, making decisions becomes harder. More products, more channels, more uncertainty."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {problemCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.98),rgba(8,15,26,0.96))] p-8 transition duration-300 hover:border-white/16"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-[3px] opacity-0 transition duration-300 group-hover:opacity-100 ${card.accentClass}`}
                    />

                    <div className="flex h-full min-h-[20rem] flex-col">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconClass}`}
                      >
                        <Icon size={28} strokeWidth={1.9} />
                      </div>

                      <p
                        className={`mt-6 text-xs font-semibold uppercase tracking-[0.24em] ${card.labelClass}`}
                      >
                        {card.category}
                      </p>

                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
                        {card.copy}
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="h-px w-full bg-white/8" />
                        <p className="mt-5 text-sm italic leading-7 text-white/72">
                          {card.question}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(18,28,40,0.9)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow="Platform Core"
                title="What ScaleSight Helps You See"
                copy="Transform business data into operational visibility."
              />
              <a
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8dd9ff] transition hover:text-white"
                href="/services"
              >
                Explore all modules
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {visibilityCards.map((card) => (
                <article key={card.label} className="metric-panel">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {card.label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    {card.value}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {card.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                title="Decisions Become Easier"
                copy="When visibility improves, decision-making improves."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Reduce manual data cleaning by 90%",
                  "Improve forecast accuracy with tighter weekly alignment",
                  "Sync marketing spend with real inventory constraints",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-base text-white"
                  >
                    <CheckCircle2 size={18} className="text-[#8dd9ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[320px] flex-wrap content-center gap-4">
              {questionChips.map((chip, index) => (
                <div
                  key={chip}
                  className={
                    index === 2
                      ? "floating-chip floating-chip--active"
                      : "floating-chip"
                  }
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <SectionHeader
              align="center"
              title="See The Business Before It Happens"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Revenue Forecasting",
                "Inventory Visibility",
                "Demand Forecasting",
                "Executive Overview",
                "Operational Planning",
              ].map((item, index) => (
                <div
                  key={item}
                  className={
                    index === 0 ? "tab-pill tab-pill--active" : "tab-pill"
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-14">
              <DashboardGridShowcase />
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              title="How ScaleSight Works"
              // copy="Five steps for transforming fragmented data into a predictable operating rhythm."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-5">
              {processSteps.map(([number, title, copy]) => (
                <article key={title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,28,40,0.92)] text-xl font-semibold text-[#8dd9ff]">
                    {number}
                  </div>
                  <h3 className="mt-6 text-xs uppercase tracking-[0.22em] text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Visibility Creates Better Outcomes" />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {storyCards.map((card) => (
                <article key={card.title} className="story-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                    {card.step}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {card.copy}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <SecondaryButton href="/case-studies">
                View Case Studies
              </SecondaryButton>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="cta-panel mx-auto max-w-6xl">
            <SectionHeader
              align="center"
              title="Stop Making Important Decisions Without Visibility."
              copy="Get clarity on revenue, inventory, and planning before making your next big decision."
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">
                Book a Strategy Call
              </PrimaryButton>
              {/* <SecondaryButton href="/services">
                Talk to an Expert
              </SecondaryButton> */}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
