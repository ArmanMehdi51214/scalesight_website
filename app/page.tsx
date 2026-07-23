import {
  ArrowRight,
  CheckCircle2,
  PackageX,
  TriangleAlert,
  TrendingDown,
  Clock,
  X,
  Check,
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
  "Shopify Brands",
  "Sales Forecasting",
  "Inventory Planning",
  "Weekly Decision Support",
];

const problemCards = [
  {
    icon: PackageX,
    title: "Stockouts",
    copy: "Lose revenue when products run out at the worst time.",
    accentClass: "bg-[#f43f5e]",
    iconClass: "bg-[#f43f5e]/12 text-[#fda4af]",
    labelClass: "text-[#fda4af]",
  },
  {
    icon: TriangleAlert,
    title: "Overstock",
    copy: "Cash trapped in inventory that isn't moving.",
    accentClass: "bg-[#f59e0b]",
    iconClass: "bg-[#f59e0b]/12 text-[#fcd34d]",
    labelClass: "text-[#fcd34d]",
  },
  {
    icon: TrendingDown,
    title: "Unpredictable Revenue",
    copy: "Hard to plan purchasing without a clear forward view.",
    accentClass: "bg-[#04b4fd]",
    iconClass: "bg-[#04b4fd]/12 text-[#8dd9ff]",
    labelClass: "text-[#8dd9ff]",
  },
  {
    icon: Clock,
    title: "Reactive Decisions",
    copy: "Always fixing problems instead of preventing them.",
    accentClass: "bg-[#8b5cf6]",
    iconClass: "bg-[#8b5cf6]/12 text-[#c4b5fd]",
    labelClass: "text-[#c4b5fd]",
  },
];

const processSteps = [
  ["01", "Connect Your Data", "We connect to your Shopify store and operational data sources."],
  ["02", "Build Your Planning Workspace", "We build a forecasting and planning system tailored to your business."],
  ["03", "Receive Weekly Insights", "Every week you receive clear recommendations and planning priorities."],
  ["04", "Make Better Decisions", "Your team plans inventory, purchasing, and growth with confidence."],
];

const pilotWeeks = [
  { week: "Week 1", title: "Business Review", copy: "We review your operations, data, and planning challenges." },
  { week: "Week 2", title: "Forecasting", copy: "We build your demand and revenue forecasting models." },
  { week: "Week 3", title: "Planning Workspace", copy: "We deliver your inventory and planning dashboard." },
  { week: "Week 4", title: "Executive Review", copy: "We present findings, insights, and your ongoing planning system." },
];

const deliverables = [
  "Revenue Forecast",
  "Inventory Health",
  "SKU Forecast",
  "Stockout Alerts",
  "Overstock Analysis",
  "Reorder Priorities",
  "Executive Dashboard",
  "Decision Report",
];

const beforeItems = [
  "Guessing inventory levels",
  "Spreadsheet-based planning",
  "Reactive purchasing decisions",
  "Manual weekly reports",
];

const afterItems = [
  "Forecast-driven planning",
  "Weekly recommendations",
  "Clear inventory priorities",
  "Better purchasing decisions",
];

const outcomes = [
  "Plan inventory with confidence",
  "Reduce stockouts",
  "Improve cash flow",
  "Know revenue before it happens",
  "Save hours every week",
  "Make faster decisions",
];

const comparisonRows = [
  { others: "Dashboard Freelancer", scalesight: "Managed Planning" },
  { others: "Software Tool", scalesight: "Weekly Recommendations" },
  { others: "Internal Analyst", scalesight: "Platform + Analyst" },
  { others: "BI Agency", scalesight: "Productized System" },
];

const afterPilotSteps = [
  "Platform stays active",
  "Weekly analyst review",
  "Weekly reports",
  "Monthly planning meetings",
  "Continuous forecasting",
];

const faqs = [
  {
    question: "How long does the pilot take?",
    answer:
      "The 30-Day Planning Pilot runs for exactly 30 days. By the end of week four you have a working planning system, a completed executive review, and a clear picture of how ScaleSight supports your business going forward.",
  },
  {
    question: "Do I need Shopify?",
    answer:
      "Shopify is our primary platform and where we do our best work. If you run a DTC ecommerce business on Shopify, you are a strong fit. Reach out if you are on a different platform and we can discuss what is possible.",
  },
  {
    question: "Do you replace my analyst?",
    answer:
      "No. ScaleSight works alongside your team. We provide the planning system, the weekly insights, and the analyst support — so your team can focus on decisions rather than data preparation.",
  },
  {
    question: "Can you connect my data?",
    answer:
      "Yes. We connect to your Shopify store, inventory data, and other operational sources during onboarding. Most connections are set up within the first week.",
  },
  {
    question: "What happens after the pilot?",
    answer:
      "After the pilot your planning workspace stays active. We continue with weekly analyst reviews, weekly reports, monthly planning meetings, and continuous forecasting — so your business always has a forward view.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">

        {/* ── 1. Hero ── */}
        <section className="relative px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <ShaderBackdrop />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[38%] overflow-hidden">
            <div className="absolute left-1/2 bottom-[-42%] h-[420px] w-[1200px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(4,180,253,0.95)_0%,rgba(0,94,240,0.75)_28%,rgba(0,94,240,0.28)_48%,rgba(7,17,31,0)_72%)] blur-2xl" />
            <div className="absolute left-1/2 bottom-[-58%] h-[360px] w-[900px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.42)_0%,rgba(4,180,253,0.22)_32%,transparent_68%)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#04B4FD]/28 bg-[rgba(0,94,240,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                <span className="h-2 w-2 rounded-full bg-[#04B4FD] shadow-[0_0_10px_rgba(4,180,253,0.8)]" />
                30-Day Planning Pilot
              </div>

              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-white md:text-6xl lg:text-[5.25rem]">
                Stop Guessing.{" "}
                <span className="text-gradient-primary">Start Planning.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                Help your ecommerce team forecast demand, identify inventory risks, and make better business decisions with a managed planning system.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
                <SecondaryButton href="/plan-with-confidence">
                  See How the Pilot Works
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

        {/* ── 2. Trust Strip ── */}
        <section className="relative overflow-hidden border-y border-white/6 bg-[#07111F] px-6 py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-40 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(4,180,253,0.14),rgba(0,94,240,0.06),transparent_70%)] blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-[#04B4FD] shadow-[0_0_18px_rgba(4,180,253,0.9)]" />
                  <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-[#B7C1D1] transition group-hover:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Who We Help ── */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Who We Help"
              title="Built for Growing Ecommerce Brands"
              copy="We work with Shopify and DTC brands doing $50k–$500k/month in revenue, running paid ads, and managing a growing SKU catalog."
            />
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                { label: "✅ Shopify Brands" },
                { label: "✅ DTC Ecommerce" },
                { label: "✅ $50k–$500k/month revenue" },
                { label: "✅ Running paid ads" },
                { label: "✅ Growing SKU catalog" },
                { label: "✅ Planning inventory every week" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Problems We Solve ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Growing is hard when you're planning with yesterday's data."
              copy="These are the problems we solve every week for ecommerce brands."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {problemCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.98),rgba(8,15,26,0.96))] p-8 transition duration-300 hover:border-white/16"
                  >
                    <div className={`absolute inset-x-0 top-0 h-[3px] opacity-0 transition duration-300 group-hover:opacity-100 ${card.accentClass}`} />
                    <div className="flex h-full min-h-[14rem] flex-col">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconClass}`}>
                        <Icon size={28} strokeWidth={1.9} />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                        {card.copy}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. How ScaleSight Works ── */}
        <section className="bg-[rgba(18,28,40,0.9)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              title="How ScaleSight Works"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {processSteps.map(([number, title, copy], index) => (
                <article key={title} className="relative text-center">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-[#04B4FD]/40 to-transparent md:block" />
                  )}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,28,40,0.92)] text-xl font-semibold text-[#8dd9ff]">
                    {number}
                  </div>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">
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

        {/* ── 6. 30-Day Planning Pilot ── */}
        <section className="px-6 py-24" id="pilot">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="30-Day Planning Pilot"
              title="Build Your First Planning System in 30 Days"
              copy="We set up your entire planning system in one month. No long contracts. No guesswork."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {pilotWeeks.map((item, index) => (
                <article key={item.week} className="story-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                    {item.week}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <PrimaryButton href="/contact">Book Discovery Call</PrimaryButton>
            </div>
          </div>
        </section>

        {/* ── 7. What You'll Receive ── */}
        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Deliverables"
              title="What You'll Receive"
              copy="Every pilot includes a complete set of planning tools and reports."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-4 transition duration-300 hover:border-[#04B4FD]/35 hover:bg-white/[0.06]"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#04B4FD]" />
                  <p className="text-sm font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Business Outcomes (Before / After) ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Business Outcomes"
              title="From Reactive to Planned"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.98),rgba(8,15,26,0.96))] p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#fda4af]">
                  Before ScaleSight
                </p>
                <div className="space-y-4">
                  {beforeItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                      <X size={16} className="shrink-0 text-[#f43f5e]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-[#04B4FD]/20 bg-[linear-gradient(180deg,rgba(0,94,240,0.08),rgba(8,15,26,0.96))] p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                  After ScaleSight
                </p>
                <div className="space-y-4">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white">
                      <Check size={16} className="shrink-0 text-[#04B4FD]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base text-white">
                  <CheckCircle2 size={18} className="shrink-0 text-[#8dd9ff]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Dashboard Showcase ── */}
        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <SectionHeader
              align="center"
              eyebrow="Platform"
              title="Your Planning Workspace"
              copy="Three views that give your team a complete picture every week."
            />
            <div className="mt-14">
              <DashboardGridShowcase />
            </div>
          </div>
        </section>

        {/* ── 10. Why ScaleSight ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              align="center"
              eyebrow="Why ScaleSight"
              title="Not a Tool. A Planning Partner."
            />
            <div className="mt-14 overflow-hidden rounded-[1.6rem] border border-white/8">
              <div className="grid grid-cols-2 border-b border-white/8 bg-white/[0.03]">
                <div className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">Others</div>
                <div className="border-l border-white/8 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">ScaleSight</div>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.others} className="grid grid-cols-2 border-b border-white/6 last:border-0 transition hover:bg-white/[0.02]">
                  <div className="flex items-center gap-3 px-8 py-5 text-sm text-[var(--text-secondary)]">
                    <X size={14} className="shrink-0 text-[#f43f5e]/70" />
                    {row.others}
                  </div>
                  <div className="flex items-center gap-3 border-l border-white/8 px-8 py-5 text-sm font-medium text-white">
                    <Check size={14} className="shrink-0 text-[#04B4FD]" />
                    {row.scalesight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. What Happens After the Pilot ── */}
        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="After the Pilot"
              title="What Happens Next"
              copy="The pilot is just the beginning. Your planning system keeps running."
            />
            <div className="mt-14 flex flex-col items-center gap-0">
              <div className="rounded-2xl border border-[#04B4FD]/30 bg-[rgba(0,94,240,0.12)] px-8 py-4 text-sm font-semibold text-white">
                Pilot Complete
              </div>
              {afterPilotSteps.map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="h-8 w-px bg-gradient-to-b from-[#04B4FD]/40 to-[#04B4FD]/10" />
                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-8 py-4 text-sm text-[var(--text-secondary)]">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. FAQ ── */}
        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-48 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.1),transparent_70%)] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl">
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

        {/* ── 13. Final CTA ── */}
        <section className="px-6 py-24">
          <div className="cta-panel mx-auto max-w-6xl">
            <SectionHeader
              align="center"
              title="Ready to Plan Growth With Confidence?"
              copy="Let's build your first planning system."
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Book Strategy Call</PrimaryButton>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
