"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  PackageX,
  TriangleAlert,
  TrendingDown,
  Clock,
  X,
  Check,
  HelpCircle,
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react";

import ShaderBackdrop from "@/components/ShaderBackdrop";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  PrimaryButton,
  SectionHeader,
  SecondaryButton,
} from "@/components/marketing-primitives";
import executiveDashboard from "@/public/dashboards for website/visual 1.png";
import scenarioPlanning from "@/public/dashboards for website/visual 2s.png";
import inventoryDashboard from "@/public/dashboards for website/viusal 3.png";
import executiveOverview from "@/public/dashboards for website/visual 111.png";
import skuDemandForecast from "@/public/dashboards for website/visual 2.png";

const problemCards = [
  {
    icon: PackageX,
    title: "Stockouts",
    copy: "Lose revenue when products run out at the worst time.",
    borderClass: "border-l-[#f43f5e]/60",
    iconClass: "bg-[#f43f5e]/12 text-[#fda4af]",
  },
  {
    icon: TriangleAlert,
    title: "Overstock",
    copy: "Cash trapped in inventory that isn't moving.",
    borderClass: "border-l-[#f59e0b]/60",
    iconClass: "bg-[#f59e0b]/12 text-[#fcd34d]",
  },
  {
    icon: TrendingDown,
    title: "Unpredictable Revenue",
    copy: "Hard to plan purchasing without a clear forward view.",
    borderClass: "border-l-[#04b4fd]/60",
    iconClass: "bg-[#04b4fd]/12 text-[#8dd9ff]",
  },
  {
    icon: Clock,
    title: "Reactive Decisions",
    copy: "Always fixing problems instead of preventing them.",
    borderClass: "border-l-[#8b5cf6]/60",
    iconClass: "bg-[#8b5cf6]/12 text-[#c4b5fd]",
  },
] as const;

const pilotWeeks = [
  {
    week: "Week 1",
    title: "Business Review",
    copy: "We review your operations, data sources, and planning challenges.",
  },
  {
    week: "Week 2",
    title: "Forecasting",
    copy: "We forecast future demand, revenue, and inventory requirements.",
  },
  {
    week: "Week 3",
    title: "Planning Workspace",
    copy: "We build your operational planning workspace with complete visibility into revenue, inventory, and purchasing priorities.",
  },
  {
    week: "Week 4",
    title: "Executive Review",
    copy: "We review your results, present strategic recommendations, and hand over a planning system your team can immediately begin using.",
  },
] as const;

const deliverables = [
  {
    title: "Executive Decision Dashboard",
    subtitle:
      "High-level operational picture across revenue, demand alerts, and inventory health.",
    image: executiveOverview,
    alt: "Executive Decision Dashboard screenshot",
  },
  {
    title: "Projected Revenue",
    subtitle:
      "Forward view of revenue, sales trends, and 13-week confidence boundaries.",
    image: executiveDashboard,
    alt: "Projected Revenue forecast screenshot",
  },
  {
    title: "Inventory Health Dashboard",
    subtitle:
      "Stock posture, overstock analysis, category risk, and inventory health score.",
    image: inventoryDashboard,
    alt: "Inventory Health Dashboard screenshot",
  },
  {
    title: "SKU Demand Forecast",
    subtitle:
      "Granular product-level demand forecasting, velocity, and reorder point calculations.",
    image: skuDemandForecast,
    alt: "SKU Demand Forecast screenshot",
  },
  {
    title: "Scenario Planning",
    subtitle:
      "Interactive simulation for ad spend shifts, promo planning, and supplier lead times.",
    image: scenarioPlanning,
    alt: "Scenario Planning screenshot",
  },
];

const planningQuestions = [
  {
    question: "Will we stock out next month?",
    answer: "We identify products at risk before they become expensive.",
  },
  {
    question: "Which products should we reorder first?",
    answer: "Prioritized recommendations based on demand.",
  },
  {
    question: "Can inventory support our next campaign?",
    answer: "Scenario planning before promotions launch.",
  },
  {
    question: "Are we on track to hit revenue goals?",
    answer: "Weekly revenue outlook and executive summaries.",
  },
  {
    question: "Should we change purchasing plans?",
    answer: "Strategic recommendations backed by your business data.",
  },
];

const planningSystemDeliverables = [
  "Executive Overview",
  "Revenue Outlook",
  "Inventory Health",
  "SKU Planning",
  "Scenario Planning",
];

const ongoingDecisionSupport = [
  "Weekly Business Analysis",
  "Executive Reports",
  "Planning Recommendations",
  "Strategy Meetings",
  "Operational Guidance",
];

const systemVsServiceLeft = [
  "Planning workspace",
  "Revenue forecasting",
  "Inventory visibility",
  "Scenario planning",
];

const systemVsServiceRight = [
  "Analyze your latest business performance",
  "Identify inventory and demand risks",
  "Deliver executive summaries and recommendations",
  "Review priorities with your team",
  "Help you make better operational decisions",
];

const scaleSightDifferences = [
  "Review your business performance",
  "Analyze demand trends",
  "Identify inventory risks",
  "Prioritize planning decisions",
  "Deliver executive recommendations",
  "Meet with your team",
];

const showcaseTabs = [
  {
    id: "executive",
    label: "Executive Overview",
    title: "An executive view built for faster alignment.",
    description:
      "A clean operating picture across revenue, inventory, and demand so teams can move from fragmented reporting to coordinated decisions.",
    image: executiveOverview,
  },
  {
    id: "revenue",
    label: "Revenue Forecast",
    title: "Revenue visibility before targets slip.",
    description:
      "A forward view of likely revenue, confidence, and weekly movement so growth decisions are grounded in what is most likely to happen next.",
    image: executiveDashboard,
  },
  {
    id: "inventory",
    label: "Inventory Health",
    title: "Inventory risk before it becomes a sales problem.",
    description:
      "Stock posture, category exposure, and product-level risk in one view so teams can protect revenue without tying up excess capital.",
    image: inventoryDashboard,
  },
] as const;

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
  {
    others: "Build dashboards",
    scalesight: "Build + monitor your planning system",
  },
  {
    others: "Deliver reports",
    scalesight: "Deliver recommendations and guidance",
  },
  { others: "Project-based", scalesight: "Ongoing planning partner" },
  { others: "Show data", scalesight: "Help you decide what to do next" },
];

const afterPilotSteps = [
  "Platform stays active",
  "Weekly business review",
  "Weekly reports",
  "Monthly planning meetings",
  "Continuous forecasting",
];

const faqs = [
  {
    question: "What exactly do you do every week?",
    answer:
      "Every week we review your business performance, update forecasts, identify inventory risks, prepare executive reports, prioritize planning decisions, and meet with your team to discuss recommendations.",
  },
  {
    question: "How long does the pilot take?",
    answer:
      "The 30-Day Planning Pilot runs for exactly 30 days. By the end of week four you have a working planning system, a completed executive review, and a clear picture of how ScaleSight supports your business going forward.",
  },
  {
    question: "How much time does this require from my team?",
    answer:
      "Most clients spend 1–2 hours during onboarding, then around 30–60 minutes each week reviewing recommendations.",
  },
  {
    question: "What data do you need?",
    answer:
      "We connect to your Shopify store and operational systems using secure, read-only API access to analyze sales history, inventory posture, purchase orders, and product velocity.",
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
    question: "What happens after the pilot?",
    answer:
      "After the pilot your planning workspace stays active. We continue with weekly business reviews, weekly reports, monthly planning meetings, and continuous forecasting — so your business always has a forward view.",
  },
];

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={className ? `reveal-up ${className}` : "reveal-up"}
      data-reveal="true"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ForecastingPage() {
  const [activeShowcase, setActiveShowcase] = useState<
    (typeof showcaseTabs)[number]
  >(showcaseTabs[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal='true']")
        .forEach((el) => el.classList.add("reveal-up--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-up--visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal='true']")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        {/* ── 1. Hero Section ── */}
        <section className="relative px-6 pb-20 pt-8 md:pb-24 md:pt-10">
          <ShaderBackdrop />
          <div className="pointer-events-none absolute inset-x-0 top-8 z-0 mx-auto h-[26rem] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.16),rgba(0,94,240,0.06),transparent_70%)] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-4xl pt-6 text-center lg:pt-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#04B4FD]/28 bg-[rgba(0,94,240,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                <span className="h-2 w-2 rounded-full bg-[#04B4FD] shadow-[0_0_10px_rgba(4,180,253,0.8)]" />
                30-Day Planning Pilot
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl lg:text-[5.35rem] lg:leading-[0.95]">
                Build Your First{" "}
                <span className="text-gradient-primary">Planning System</span>{" "}
                in 30 Days
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                We build your planning system, continuously analyze your
                business, and deliver the insights, recommendations, and
                strategic guidance your team needs to make better decisions
                every week.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="/contact">
                  Book Discovery Call
                </PrimaryButton>
                <SecondaryButton href="#how-it-works">
                  See How It Works
                </SecondaryButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Who We Help ── */}
        <section className="border-y border-white/6 bg-[rgba(5,15,26,0.88)] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionHeader
                align="center"
                eyebrow="Who We Help"
                title="Built for Growing & Established DTC Brands"
                copy="Designed specifically for Shopify merchants navigating complex inventory, scaling catalog lines, and multi-channel demand forecasting."
              />
            </Reveal>

            <Reveal className="mt-12" delay={60}>
              <div className="mx-auto max-w-4xl space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="surface-card flex items-start gap-4 rounded-[1.5rem] border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#04B4FD]/12 text-[#04B4FD]">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8dd9ff]">
                        Platform Fit
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        Shopify & DTC Brands
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        Built natively around Shopify data, multi-channel
                        workflows, and direct-to-consumer operations.
                      </p>
                    </div>
                  </div>

                  <div className="surface-card flex items-start gap-4 rounded-[1.5rem] border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#04B4FD]/12 text-[#04B4FD]">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8dd9ff]">
                        Operating Profile
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        Scaling Operations
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        Active brands managing inventory commitments, cash flow
                        planning, and weekly purchasing decisions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#04B4FD]/20 bg-[linear-gradient(180deg,rgba(0,94,240,0.08),rgba(8,15,26,0.96))] p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                    Ideal Operating Criteria
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      "$50k+ Monthly Revenue",
                      "Active Ad & Growth Spend",
                      "Expanding SKU Catalog",
                      "Weekly Purchasing Needs",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-[#04B4FD]/30"
                      >
                        <Check size={16} className="shrink-0 text-[#04B4FD]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Problems We Solve ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                title="Growing is hard when you're planning with yesterday's data."
                copy="These are the problems we solve every week for ecommerce brands."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {problemCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 60}>
                    <article
                      className={`surface-card flex gap-5 rounded-[1.6rem] border-l-2 p-7 ${card.borderClass}`}
                    >
                      <div
                        className={`mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.iconClass}`}
                      >
                        <Icon size={22} strokeWidth={1.9} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                          {card.copy}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section
          className="bg-[rgba(18,28,40,0.9)] px-6 py-24"
          id="how-it-works"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="The Process"
                title="How ScaleSight Works"
              />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                [
                  "01",
                  "Connect Your Data",
                  "We connect to your Shopify store and operational data sources.",
                ],
                [
                  "02",
                  "Build Your Planning Workspace",
                  "We build a forecasting and planning system tailored to your business.",
                ],
                [
                  "03",
                  "Receive Weekly Insights",
                  "Every week you receive clear recommendations and planning priorities.",
                ],
                [
                  "04",
                  "Make Better Decisions",
                  "Your team plans inventory, purchasing, and growth with confidence.",
                ],
              ].map(([number, title, copy], index) => (
                <Reveal key={title} delay={index * 80}>
                  <article className="relative text-center">
                    {index < 3 && (
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 30-Day Pilot Timeline ── */}
        <section className="px-6 py-24" id="pilot">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="30-Day Planning Pilot"
                title="Your First Planning System, Built in 30 Days"
                copy="No long contracts. No guesswork. A complete planning system delivered in one month."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {pilotWeeks.map((item, index) => (
                <Reveal key={item.week} delay={index * 80}>
                  <article className="story-card h-full">
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
                </Reveal>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <PrimaryButton href="/contact">Book Discovery Call</PrimaryButton>
            </div>
          </div>
        </section>

        {/* ── 3. Deliverables Section Restructure ("What You'll Receive") ── */}
        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Deliverables"
                title="What You'll Receive"
                copy="Every pilot includes the planning system and the intelligence your team needs to use it effectively."
              />
            </Reveal>

            {/* Split into clear 2-Column comparison/grid container */}
            <Reveal className="mt-14" delay={60}>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Column 1: Your Planning System */}
                <div className="surface-card overflow-hidden rounded-[1.8rem] border border-white/8 p-8 transition duration-300 hover:border-[#04B4FD]/35">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04B4FD]/14 text-[#8dd9ff]">
                      <LayoutDashboard size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        Your Planning System
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        Platform Infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3.5">
                    {planningSystemDeliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3.5 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-[#04B4FD]"
                        />
                        <span className="text-base font-medium text-white">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Ongoing Decision Support */}
                <div className="surface-card overflow-hidden rounded-[1.8rem] border border-white/8 p-8 transition duration-300 hover:border-[#04B4FD]/35">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005EF0]/20 text-[#8dd9ff]">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        Ongoing Decision Support
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        Analyst & Insights Layer
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3.5">
                    {ongoingDecisionSupport.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3.5 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-[#8dd9ff]"
                        />
                        <span className="text-base font-medium text-white">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Visual Screenshot Cards */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {deliverables.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 60}
                  className={
                    index === 4
                      ? "md:col-span-2 md:mx-auto md:w-full md:max-w-2xl"
                      : ""
                  }
                >
                  <div className="group surface-card flex flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35 h-full">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#04B4FD]/12 text-[#8dd9ff]">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-white/8 bg-white">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          title={`${item.title} - ScaleSight Deliverable`}
                          placeholder="blur"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. NEW SECTION (Placed immediately after "What You'll Receive"): "Every Week, We Help You Answer Questions Like..." ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Weekly Intelligence"
                title="Every Week, We Help You Answer Questions Like..."
                copy="Clear answers to your team's most critical weekly operational decisions."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {planningQuestions.map((q, index) => (
                <Reveal key={q.question} delay={index * 60}>
                  <div className="group surface-card relative h-full overflow-hidden rounded-[1.6rem] border border-white/8 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#04B4FD] to-[#005EF0] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#04B4FD]/12 text-[#8dd9ff]">
                      <HelpCircle size={20} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-[#8dd9ff]">
                      &ldquo;{q.question}&rdquo;
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white">
                      {q.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. NEW SECTION: "More Than a Dashboard. An Ongoing Planning Partner." ── */}
        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="System + Service"
                title="More Than a Dashboard. An Ongoing Planning Partner."
                copy="Software tools give you charts. ScaleSight combines tailored planning software with weekly operational analysis."
              />
            </Reveal>

            <Reveal className="mt-14" delay={60}>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column: What You Receive */}
                <div className="surface-card rounded-[1.8rem] border border-white/8 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04B4FD]/14 text-[#8dd9ff]">
                      <LayoutDashboard size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        What You Receive
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        The System
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {systemVsServiceLeft.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3.5 text-base font-medium text-white"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-[#04B4FD]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: What We Do Every Week */}
                <div className="rounded-[1.8rem] border border-[#04B4FD]/28 bg-[linear-gradient(180deg,rgba(0,94,240,0.12),rgba(8,15,26,0.98))] p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04B4FD]/20 text-[#8dd9ff]">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        What We Do Every Week
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#8dd9ff]">
                        The Managed Service
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {systemVsServiceRight.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3.5 text-base font-medium text-white"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[#04B4FD]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 5. NEW SECTION: "What Makes ScaleSight Different?" ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Core Commitments"
                title="What Makes ScaleSight Different?"
                copy="We combine software precision with dedicated weekly analyst guidance."
              />
            </Reveal>

            <Reveal className="mt-14" delay={60}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {scaleSightDifferences.map((item) => (
                  <div
                    key={item}
                    className="group surface-card flex items-center gap-4 rounded-[1.4rem] border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#04B4FD]/14 text-[#04B4FD] transition duration-300 group-hover:bg-[#04B4FD] group-hover:text-white">
                      <Check size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Why Businesses Choose ScaleSight (Outcome Comparison) ── */}
        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Why ScaleSight"
                title="Why Businesses Choose ScaleSight"
                copy="More than dashboards—Managed Ecommerce Intelligence focused on outcomes."
              />
            </Reveal>
            <Reveal className="mt-14" delay={60}>
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.98),rgba(8,15,26,0.96))] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="grid grid-cols-2 border-b border-white/8 bg-white/[0.03]">
                  <div className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    Others
                  </div>
                  <div className="border-l border-white/8 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                    ScaleSight
                  </div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.others}
                    className="grid grid-cols-2 border-b border-white/6 last:border-0 transition hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3 px-8 py-5 text-sm text-[var(--text-secondary)]">
                      <X size={16} className="shrink-0 text-[#f43f5e]/70" />
                      {row.others}
                    </div>
                    <div className="flex items-center gap-3 border-l border-white/8 px-8 py-5 text-sm font-medium text-white">
                      <Check size={16} className="shrink-0 text-[#04B4FD]" />
                      {row.scalesight}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Dashboard Showcase ── */}
        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Workspace"
                title="Your Planning Workspace"
                copy="Three views that give your team a complete picture every week."
              />
            </Reveal>

            <Reveal
              className="mt-10 flex flex-wrap justify-center gap-3"
              delay={60}
            >
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={
                    activeShowcase.id === tab.id
                      ? "tab-pill tab-pill--active"
                      : "tab-pill"
                  }
                  onClick={() => startTransition(() => setActiveShowcase(tab))}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </Reveal>

            <Reveal className="mt-10" delay={100}>
              <div className="surface-card overflow-hidden rounded-[2rem] p-4 md:p-6">
                <div className="mb-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {activeShowcase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {activeShowcase.description}
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white">
                  <Image
                    alt={`${activeShowcase.label} - ScaleSight Planning Workspace`}
                    title={activeShowcase.title}
                    className="h-auto w-full"
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    src={activeShowcase.image}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Business Outcomes ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="Business Outcomes"
                title="From Reactive to Planned"
              />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.98),rgba(8,15,26,0.96))] p-8">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#fda4af]">
                    Before ScaleSight
                  </p>
                  <div className="space-y-4">
                    {beforeItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <X size={16} className="shrink-0 text-[#f43f5e]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="rounded-[1.6rem] border border-[#04B4FD]/20 bg-[linear-gradient(180deg,rgba(0,94,240,0.08),rgba(8,15,26,0.96))] p-8">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff]">
                    After ScaleSight
                  </p>
                  <div className="space-y-4">
                    {afterItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white"
                      >
                        <Check size={16} className="shrink-0 text-[#04B4FD]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal
              className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
              delay={60}
            >
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-base text-white"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#8dd9ff]" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── After the Pilot ── */}
        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                align="center"
                eyebrow="After the Pilot"
                title="What Happens Next"
                copy="The pilot is just the beginning. Your planning system keeps running."
              />
            </Reveal>
            <div className="mt-14 flex flex-col items-center gap-0">
              <Reveal>
                <div className="rounded-2xl border border-[#04B4FD]/30 bg-[rgba(0,94,240,0.12)] px-8 py-4 text-sm font-semibold text-white">
                  Pilot Complete
                </div>
              </Reveal>
              {afterPilotSteps.map((step, index) => (
                <Reveal key={step} delay={index * 60}>
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-px bg-gradient-to-b from-[#04B4FD]/40 to-[#04B4FD]/10" />
                    <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-8 py-4 text-sm text-[var(--text-secondary)]">
                      {step}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative overflow-hidden bg-[rgba(5,15,26,0.94)] px-6 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-48 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.16),rgba(0,94,240,0.08),transparent_72%)] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionHeader
                align="center"
                title="Frequently Asked Questions"
              />
            </Reveal>
            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => (
                <Reveal key={item.question} delay={index * 70}>
                  <details className="faq-item group">
                    <summary className="faq-summary">
                      <span>{item.question}</span>
                      <ArrowRight className="faq-arrow" size={18} />
                    </summary>
                    <p className="faq-answer">{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="cta-panel relative mx-auto max-w-6xl text-center">
                <div className="absolute inset-0 overflow-hidden rounded-[2.2rem]">
                  <Image
                    alt="ScaleSight Scenario Planning CTA Background"
                    title="ScaleSight Scenario Planning"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                    placeholder="blur"
                    src={scenarioPlanning}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.56),rgba(7,17,31,0.92))]" />
                  <div className="absolute right-[-8rem] top-[-6rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.2),transparent_64%)] blur-3xl" />
                </div>
                <div className="relative z-10">
                  <SectionHeader
                    align="center"
                    title="Ready to Plan Growth With Confidence?"
                    copy="Let's build your first planning system."
                  />
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <PrimaryButton href="/contact">
                      Book Strategy Call
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
