"use client";

import Image, { type StaticImageData } from "next/image";
import { startTransition, useEffect, useState } from "react";
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  ChartSpline,
  CirclePlay,
  Eye,
  Gauge,
  Megaphone,
  PackageSearch,
  SearchCheck,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingDown,
  Warehouse,
  Workflow,
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
import demandPlanning from "@/public/dashboards for website/visual 2.png";
import scenarioPlanning from "@/public/dashboards for website/visual 2s.png";
import inventoryDashboard from "@/public/dashboards for website/viusal 3.png";

const walkthroughVideoId =
  process.env.NEXT_PUBLIC_SCALESIGHT_WALKTHROUGH_VIDEO_ID;

const trustItems = [
  "Revenue visibility",
  "Inventory planning",
  "Demand forecasting",
  "Operational clarity",
];

const problemCards = [
  {
    icon: TrendingDown,
    title: "Revenue Uncertainty",
    copy: "Can we realistically hit next month's target?",
    borderClass: "border-l-[#f43f5e]/60",
    iconClass: "bg-[#f43f5e]/12 text-[#fda4af]",
  },
  {
    icon: Boxes,
    title: "Inventory Pressure",
    copy: "Will inventory support expected demand?",
    borderClass: "border-l-[#f59e0b]/60",
    iconClass: "bg-[#f59e0b]/12 text-[#fcd34d]",
  },
  {
    icon: Workflow,
    title: "Reactive Planning",
    copy: "Are we making decisions too late?",
    borderClass: "border-l-[#22c55e]/60",
    iconClass: "bg-[#22c55e]/12 text-[#86efac]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Disconnected Operations",
    copy: "Are marketing, inventory, and operations working from the same information?",
    borderClass: "border-l-[#04b4fd]/60",
    iconClass: "bg-[#04b4fd]/12 text-[#8dd9ff]",
  },
  {
    icon: SearchCheck,
    title: "Demand Uncertainty",
    copy: "What products need attention next?",
    borderClass: "border-l-[#8b5cf6]/60",
    iconClass: "bg-[#8b5cf6]/12 text-[#c4b5fd]",
  },
  {
    icon: ShieldAlert,
    title: "Decision Blindness",
    copy: "What should we focus on right now?",
    borderClass: "border-l-white/20",
    iconClass: "bg-white/8 text-white",
  },
] as const;

const visibilityCards = [
  {
    icon: Eye,
    title: "Revenue Visibility",
    copy: "See likely revenue trends before they happen.",
  },
  {
    icon: Warehouse,
    title: "Inventory Planning",
    copy: "Identify inventory risks before they impact sales.",
  },
  {
    icon: ChartSpline,
    title: "Demand Intelligence",
    copy: "Understand future demand patterns.",
  },
  {
    icon: Sparkles,
    title: "Planning Recommendations",
    copy: "Receive insights that support better decisions.",
  },
] as const;

const decisionQuestions = [
  "Should we increase ad spend?",
  "Will inventory support future demand?",
  "Which products require attention?",
  "Are we likely to hit targets?",
  "How much inventory should we reorder?",
  "Should we prepare for seasonal demand?",
  "Are we carrying too much stock?",
  "What should operations focus on next?",
];

const showcaseTabs = [
  {
    id: "revenue",
    label: "Revenue Visibility",
    title: "Revenue visibility before targets slip.",
    description:
      "A forward view of likely revenue, confidence, and weekly movement so growth decisions are grounded in what is most likely to happen next.",
    image: executiveDashboard,
  },
  {
    id: "inventory",
    label: "Inventory Planning",
    title: "Inventory risk before it becomes a sales problem.",
    description:
      "Stock posture, category exposure, and product-level risk in one view so teams can protect revenue without tying up excess capital.",
    image: inventoryDashboard,
  },
  {
    id: "demand",
    label: "Demand Trends",
    title: "Demand patterns that show what needs attention next.",
    description:
      "SKU-level demand visibility that helps teams spot pressure early and prioritize the products that matter most.",
    image: demandPlanning,
  },
  {
    id: "executive",
    label: "Executive Overview",
    title: "An executive view built for faster alignment.",
    description:
      "A clean operating picture across revenue, inventory, and demand so teams can move from fragmented reporting to coordinated decisions.",
    image: executiveDashboard,
  },
  {
    id: "planning",
    label: "Planning Recommendations",
    title: "Planning recommendations that turn visibility into action.",
    description:
      "Scenario-based views that help operators pressure test spend, timing, and inventory choices before committing.",
    image: scenarioPlanning,
  },
] as const;

const whoItsFor = [
  { icon: Store, label: "Shopify Brands" },
  { icon: ShoppingBag, label: "DTC Brands" },
  { icon: Target, label: "Founders" },
  { icon: Workflow, label: "Operations Teams" },
  { icon: Megaphone, label: "Growth Teams" },
  { icon: PackageSearch, label: "Inventory Managers" },
] as const;

const commonChallenges = [
  "Inventory uncertainty",
  "Scaling operations",
  "Demand fluctuations",
  "Paid advertising decisions",
  "Planning complexity",
];

const faqs = [
  {
    question: "What data do you need?",
    answer:
      "We usually start with Shopify sales, inventory, product, and marketing context.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most brands are live in a few weeks, depending on data access and team availability.",
  },
  {
    question: "Do you work with Shopify?",
    answer:
      "Yes. ScaleSight is built for Shopify brands and the teams around them.",
  },
  {
    question: "Can this help inventory planning?",
    answer:
      "Yes. It helps teams see stock risk, reorder timing, and demand pressure earlier.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We stay involved as your planning needs evolve and decisions get more complex.",
  },
  {
    question: "How accurate are the forecasts?",
    answer:
      "They are designed to support better decisions, with confidence improving as more business context is connected.",
  },
  {
    question: "Can this work with multiple channels?",
    answer:
      "Yes. We can help unify visibility across channels when the data is available.",
  },
] as const;

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

function HeroDashboardCard({
  image,
  alt,
  title,
  className,
  priority = false,
}: {
  alt: string;
  className: string;
  image: StaticImageData;
  priority?: boolean;
  title: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
        <div className="border-b border-slate-200/90 bg-white px-4 py-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {title}
          </p>
        </div>
        <Image
          alt={alt}
          className="h-auto w-full object-cover"
          placeholder="blur"
          priority={priority}
          sizes="(max-width: 768px) 75vw, 34vw"
          src={image}
        />
      </div>
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
        .forEach((element) => element.classList.add("reveal-up--visible"));

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("reveal-up--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal='true']",
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <section className="relative px-6 pb-20 pt-8 md:pb-24 md:pt-10">
          <ShaderBackdrop />
          <div className="pointer-events-none absolute inset-x-0 top-8 z-0 mx-auto h-[26rem] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.16),rgba(0,94,240,0.06),transparent_70%)] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal className="pt-6 lg:pt-10">
              <p className="eyebrow-chip">
                Decision Intelligence For Ecommerce
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl lg:text-[5.35rem] lg:leading-[0.95]">
                See The Business{" "}
                <span className="text-gradient-primary">
                  Before It Happens.
                </span>
              </h1>
              <p className="section-copy mt-7 max-w-2xl text-base md:text-lg">
                ScaleSight gives ecommerce teams a complete decision system for
                revenue visibility, inventory planning, demand forecasting, and
                smarter operational decisions.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#video">
                  Watch The 90-Second Walkthrough
                </PrimaryButton>
                <SecondaryButton href="/contact">
                  Book A Strategy Call
                </SecondaryButton>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                Built for growing ecommerce brands managing inventory, demand,
                and operational complexity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <span key={item} className="signal-chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative" delay={120}>
              <div className="hero-frame relative min-h-[23rem] overflow-hidden p-4 sm:min-h-[28rem] md:p-6 lg:min-h-[34rem]">
                <div className="absolute inset-x-10 top-6 z-30 flex flex-wrap justify-center gap-3">
                  {[
                    "Revenue Forecast",
                    "Inventory Risk",
                    "Executive Dashboard",
                    "Demand Planning",
                  ].map((item) => (
                    <span
                      key={item}
                      className="floating-chip !bg-[rgba(7,17,31,0.86)] text-xs tracking-[0.14em] text-white/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.18),transparent_58%)]" />

                <HeroDashboardCard
                  alt="Demand planning dashboard"
                  className="left-[2%] top-[6.75rem] z-10 w-[49%] origin-bottom-left -rotate-[8deg] sm:left-[5%] sm:w-[42%] lg:top-[7rem]"
                  image={demandPlanning}
                  title="Demand Planning"
                />
                <HeroDashboardCard
                  alt="Revenue forecast dashboard"
                  className="left-1/2 top-[4.5rem] z-20 w-[58%] -translate-x-1/2 sm:w-[52%] lg:top-[4.75rem]"
                  image={executiveDashboard}
                  priority
                  title="Revenue Forecast"
                />
                <HeroDashboardCard
                  alt="Inventory risk dashboard"
                  className="right-[2%] top-[6.75rem] z-10 w-[49%] origin-bottom-right rotate-[8deg] sm:right-[5%] sm:w-[42%] lg:top-[7rem]"
                  image={inventoryDashboard}
                  title="Inventory Risk"
                />

                <div className="absolute inset-x-8 bottom-5 z-30 rounded-[1.4rem] border border-cyan-400/18 bg-[rgba(7,17,31,0.78)] px-4 py-4 backdrop-blur-md sm:px-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Operational visibility built for ecommerce teams.
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Revenue, demand, inventory, and planning signals in one
                        decision layer.
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      Executive clarity
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="relative scroll-mt-28 border-y border-white/6 bg-[rgba(5,15,26,0.88)] px-6 py-20 md:py-24"
          id="video"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.12),transparent_42%)]" />
          <div className="relative mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-4xl text-center">
              <SectionHeader
                align="center"
                title="Watch The 90-Second Walkthrough"
                copy="See how ScaleSight helps ecommerce teams gain visibility into revenue, inventory, demand, and planning decisions."
              />
            </Reveal>

            <Reveal className="mx-auto mt-12 max-w-5xl" delay={80}>
              <div className="surface-card overflow-hidden rounded-[2rem] p-3 md:p-5">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(6,15,27,0.96),rgba(10,19,33,0.88))]">
                  {walkthroughVideoId ? (
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={`https://www.youtube-nocookie.com/embed/${walkthroughVideoId}?rel=0`}
                      title="ScaleSight walkthrough"
                    />
                  ) : (
                    <>
                      <Image
                        alt="ScaleSight walkthrough preview"
                        className="h-full w-full object-cover"
                        placeholder="blur"
                        priority
                        src={executiveDashboard}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,18,0.18),rgba(3,10,18,0.54))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.24),transparent_58%)]" />
                    </>
                  )}

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--blue-primary),var(--blue-secondary))] text-white shadow-[0_24px_60px_rgba(0,94,240,0.35)] md:h-24 md:w-24">
                      <CirclePlay size={34} />
                    </div>
                  </div>

                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-[rgba(7,17,31,0.78)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--blue-soft)]">
                    90 second walkthrough
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <PrimaryButton href="/contact">
                  Book A Strategy Call
                </PrimaryButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-5xl text-center">
              <p className="eyebrow-chip justify-center">The Real Problem</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                Most Ecommerce Teams Don&apos;t Have A Forecasting Problem.
              </h2>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-gradient-primary md:text-5xl">
                They Have A Visibility Problem.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {problemCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 80}>
                    <article
                      className={`surface-card h-full rounded-[1.7rem] border-l-4 p-7 transition-transform duration-200 hover:-translate-y-1 ${card.borderClass}`}
                    >
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-[1rem] ${card.iconClass}`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                        {card.copy}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(10,20,31,0.82)] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-4xl text-center">
              <SectionHeader
                align="center"
                eyebrow="What ScaleSight Helps You See"
                title="Visibility Creates Better Decisions."
                copy="Transform business data into operational visibility."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {visibilityCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 90}>
                    <article className="surface-card h-full rounded-[1.65rem] p-7">
                      <div className="icon-badge">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                        {card.copy}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <Reveal>
                <SectionHeader
                  eyebrow="Decision System"
                  title="Decisions Become Easier."
                  copy="The goal is not more reporting. It is clearer answers to the business questions that shape growth, inventory, and operations."
                />
              </Reveal>

              <Reveal className="relative" delay={100}>
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.14),transparent_62%)] blur-3xl" />
                <div className="relative grid gap-4 sm:grid-cols-2">
                  {decisionQuestions.map((question, index) => (
                    <div
                      key={question}
                      className={`surface-card rounded-[1.4rem] p-5 transition-transform duration-200 hover:-translate-y-1 ${
                        index % 2 === 0
                          ? "sm:translate-y-3"
                          : "sm:-translate-y-3"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="max-w-[16rem] text-base font-medium leading-7 text-white">
                          {question}
                        </p>
                        <ArrowRight
                          className="mt-1 shrink-0 text-[var(--blue-soft)]"
                          size={18}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(5,15,26,0.94)] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-4xl text-center">
              <SectionHeader
                align="center"
                eyebrow="Dashboard Showcase"
                title="See What Your Business Data Is Trying To Tell You."
                copy="Examples of visibility generated by ScaleSight."
              />
            </Reveal>

            <Reveal className="mt-12" delay={100}>
              <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-full border border-white/8 bg-[rgba(12,23,39,0.82)] p-2">
                {showcaseTabs.map((tab) => {
                  const active = tab.id === activeShowcase.id;

                  return (
                    <button
                      key={tab.id}
                      className={
                        active ? "tab-pill tab-pill--active" : "tab-pill"
                      }
                      onClick={() =>
                        startTransition(() => setActiveShowcase(tab))
                      }
                      type="button"
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="mt-10" delay={160}>
              <div className="surface-card overflow-hidden rounded-[2rem] p-4 md:p-5">
                <div className="mb-6 flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--blue-soft)]">
                      {activeShowcase.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                      {activeShowcase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                      {activeShowcase.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100">
                    <ChartColumnIncreasing size={14} />
                    Strongest visibility surfaces
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <Image
                    alt={activeShowcase.label}
                    className="h-auto w-full object-cover"
                    placeholder="blur"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1120px"
                    src={activeShowcase.image}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <Reveal>
                <SectionHeader
                  eyebrow="Who It's For"
                  title="Built For Growing Ecommerce Brands."
                  copy="ScaleSight is built for operators who need clearer visibility across revenue, inventory, demand, and planning decisions."
                />

                <div className="surface-card mt-10 rounded-[1.8rem] p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--blue-soft)]">
                    Revenue Range
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,var(--blue-primary),var(--blue-secondary))] text-white shadow-[0_18px_48px_rgba(0,94,240,0.24)]">
                      <Gauge size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white md:text-3xl">
                        $50K-$500K
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        Monthly revenue
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="space-y-8" delay={100}>
                <div>
                  <p className="eyebrow-chip">Ideal Audience</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {whoItsFor.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="surface-card flex items-center gap-3 rounded-[1.35rem] px-5 py-4"
                        >
                          <div className="icon-badge !h-10 !w-10 !rounded-[0.9rem]">
                            <Icon size={18} />
                          </div>
                          <p className="text-sm font-medium text-white">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="eyebrow-chip">Common Challenges</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {commonChallenges.map((challenge) => (
                      <span
                        key={challenge}
                        className="floating-chip animate-none"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(5,15,26,0.94)] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
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

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="cta-panel relative mx-auto max-w-6xl text-center">
                <div className="absolute inset-0 overflow-hidden rounded-[2.2rem]">
                  <Image
                    alt="ScaleSight dashboard background"
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
                    title="Stop Making Important Decisions Without Visibility."
                    copy="Get clarity on revenue, inventory, demand, and planning before your next growth decision."
                  />

                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <PrimaryButton href="/contact">
                      Book A Strategy Call
                    </PrimaryButton>
                    <SecondaryButton href="#video">
                      Watch The Walkthrough Again
                    </SecondaryButton>
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
