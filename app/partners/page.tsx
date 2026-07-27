import type { Metadata } from "next";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  CheckCircle2,
  Cpu,
  FileText,
  Handshake,
  LayoutDashboard,
  Megaphone,
  Radio,
  ShoppingBag,
  Sparkles,
  Truck,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import ShaderBackdrop from "@/components/ShaderBackdrop";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
} from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "Partner with ScaleSight | Managed Ecommerce Intelligence",
  description:
    "ScaleSight helps consultants, agencies, and fractional operators deliver better planning, forecasting, and operational insights without adding analysts or building dashboards from scratch.",
  alternates: {
    canonical: "/partners",
  },
  keywords: [
    "ecommerce partner program",
    "consultant partnership",
    "managed ecommerce intelligence",
    "Shopify agency partner",
    "fractional COO tools",
    "inventory planning for agencies",
    "demand forecasting service",
    "ecommerce advisory",
  ],
  openGraph: {
    title: "Partner with ScaleSight | Managed Ecommerce Intelligence",
    description:
      "Strengthen your advisory with managed ecommerce intelligence. Partner with ScaleSight to deliver executive planning and forecasting to your clients.",
    type: "website",
    siteName: "ScaleSight",
    url: "https://scalesight.org/partners",
  },
};

const partnerTypes = [
  {
    icon: Briefcase,
    title: "Ecommerce Consultants",
    copy: "Drive strategic growth for client brands with deep operational, inventory, and demand intelligence.",
  },
  {
    icon: UserCheck,
    title: "Fractional COOs / Operations Leaders",
    copy: "Streamline inventory decisions, prevent costly stockouts, and protect working capital across client portfolios.",
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    copy: "Align ad spend and promotion calendars with realistic inventory velocity to maximize return on ad spend.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Agencies",
    copy: "Enhance merchant retention and success with executive-level revenue and demand forecasting.",
  },
  {
    icon: Truck,
    title: "Supply Chain Consultants",
    copy: "Optimize reorder points, lead times, and supplier planning with continuous forward-looking data.",
  },
  {
    icon: Cpu,
    title: "ERP / Systems Consultants",
    copy: "Turn static ERP and database records into actionable, executive-ready decision systems.",
  },
];

const helpPoints = [
  {
    icon: Activity,
    title: "We continuously monitor client data",
    copy: "We connect directly to your clients' operational data and track key sales and stock signals 24/7.",
  },
  {
    icon: AlertTriangle,
    title: "We identify inventory and demand risks before they happen",
    copy: "Our system flags potential stockouts, overstock posture, and sales trajectory shifts weeks in advance.",
  },
  {
    icon: FileText,
    title: "We prepare executive-ready planning reports",
    copy: "Clear, crisp, polished executive summaries ready for your client board meetings and strategy reviews.",
  },
  {
    icon: Sparkles,
    title: "We deliver weekly recommendations",
    copy: "Actionable weekly reorder priorities, purchasing guidance, and velocity alerts delivered directly to you.",
  },
  {
    icon: Handshake,
    title: "We support your ongoing client planning discussions",
    copy: "Our analytical team stands behind you, ensuring you have the data backings needed for high-stakes decisions.",
  },
];

const planningSystemDeliverables = [
  "Revenue Forecasting",
  "Inventory Planning",
  "Executive Dashboard",
  "Scenario Planning",
  "Planning Workspace",
];

const ongoingIntelligenceDeliverables = [
  "Weekly Business Analysis",
  "Executive Reports",
  "Planning Recommendations",
  "Strategy Meetings",
  "Continuous Monitoring",
];

const comparisonItems = [
  {
    without: "Manual spreadsheets",
    with: "Managed operational intelligence",
  },
  {
    without: "Time-consuming reporting",
    with: "Continuous analysis",
  },
  {
    without: "Reactive planning",
    with: "Executive reporting",
  },
  {
    without: "Limited scalability",
    with: "Better planning decisions",
  },
  {
    without: "Heavy operational overhead",
    with: "More scalable consulting engagements",
  },
];

const partnershipSteps = [
  {
    step: "01",
    title: "Discovery Call",
    copy: "We discuss your advisory model, client profile, and operational needs to align on partnership goals.",
  },
  {
    step: "02",
    title: "Identify Suitable Clients",
    copy: "Select key ecommerce brands in your portfolio that need better forecasting and inventory clarity.",
  },
  {
    step: "03",
    title: "ScaleSight Builds the Planning System",
    copy: "We connect data sources and construct tailored revenue, inventory, and demand workspaces.",
  },
  {
    step: "04",
    title: "Ongoing Intelligence & Recommendations",
    copy: "We continuously monitor data, surfacing weekly analysis, risk alerts, and planning priorities.",
  },
  {
    step: "05",
    title: "You Continue Delivering Strategic Advisory",
    copy: "You lead client meetings and high-level strategy backed by bulletproof operational intelligence.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        {/* ── 1. Hero Section ── */}
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
                PARTNER WITH SCALESIGHT
              </div>

              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-white md:text-6xl lg:text-[5.25rem]">
                Strengthen Your Advisory with{" "}
                <span className="text-gradient-primary">
                  Managed Ecommerce Intelligence
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                ScaleSight helps consultants, agencies, and fractional operators
                deliver better planning, forecasting, and operational insights
                without adding analysts or building dashboards from scratch.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="/contact">
                  Schedule a Partnership Call
                </PrimaryButton>
                <SecondaryButton href="#partnership-model">
                  Explore Partnership Model
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Who We Partner With ── */}
        <section className="relative border-t border-white/6 bg-[#07111F] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Target Advisors"
              title="Who We Partner With"
              copy="We partner with leading growth advisors, fractional executives, and specialist agencies who guide ecommerce brands."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partnerTypes.map((partner) => {
                const Icon = partner.icon;
                return (
                  <article
                    key={partner.title}
                    className="group surface-card relative overflow-hidden rounded-[1.6rem] border border-white/8 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#04B4FD]/35 hover:shadow-[0_24px_64px_rgba(0,0,0,0.32)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#04B4FD] to-[#005EF0] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="icon-badge mb-6 transition duration-300 group-hover:scale-110 group-hover:bg-[#04B4FD]/20 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                      {partner.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {partner.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. How We Help You ── */}
        <section className="bg-[rgba(5,15,26,0.96)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Invisible Intelligence Layer"
              title="How We Help You"
              copy="ScaleSight acts as your backend operational intelligence engine so you can focus on high-impact strategic advisory."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
              {/* Left 5 help points */}
              <div className="space-y-4 lg:col-span-7">
                {helpPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="group flex items-start gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.035] p-5 transition duration-300 hover:border-[#04B4FD]/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#04B4FD]/12 text-[#8dd9ff] transition duration-300 group-hover:scale-105 group-hover:bg-[#04B4FD]/22 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {point.copy}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Highlight Box for Key Message */}
              <div className="flex flex-col justify-between rounded-[2rem] border border-[#04B4FD]/28 bg-[radial-gradient(circle_at_top,rgba(0,94,240,0.18),rgba(12,23,39,0.98))] p-8 md:p-10 lg:col-span-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#04B4FD]/30 bg-[#04B4FD]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8dd9ff]">
                    <Sparkles size={14} className="text-[#04B4FD]" />
                    Key Value Proposition
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold leading-snug tracking-[-0.02em] text-white md:text-3xl">
                    Behind the Scenes Intelligence. Front and Center Advisory.
                  </h3>

                  <div className="my-6 h-px bg-gradient-to-r from-[#04B4FD]/40 via-white/10 to-transparent" />

                  <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                    <strong className="font-semibold text-white">
                      You continue leading the client relationship
                    </strong>{" "}
                    while ScaleSight provides the operational intelligence behind
                    the scenes.
                  </p>
                </div>

                <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    Partner Advantage
                  </p>
                  <p className="mt-2 text-sm text-[#8dd9ff]">
                    Zero extra analyst headcount required for your firm. Instant enterprise-grade reporting capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. What Your Clients Receive ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Deliverables"
              title="What Your Clients Receive"
              copy="A dual-layer intelligence package combining dedicated software infrastructure with ongoing analyst reviews."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Column 1: Planning System */}
              <div className="group surface-card overflow-hidden rounded-[1.8rem] border border-white/8 p-8 transition duration-300 hover:border-[#04B4FD]/35">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04B4FD]/14 text-[#8dd9ff]">
                    <LayoutDashboard size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Planning System
                    </h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Platform Infrastructure
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {planningSystemDeliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3.5 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5 transition group-hover:border-white/12"
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

              {/* Column 2: Ongoing Intelligence */}
              <div className="group surface-card overflow-hidden rounded-[1.8rem] border border-white/8 p-8 transition duration-300 hover:border-[#04B4FD]/35">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005EF0]/20 text-[#8dd9ff]">
                    <Radio size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Ongoing Intelligence
                    </h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Human + Analyst Layer
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {ongoingIntelligenceDeliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3.5 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5 transition group-hover:border-white/12"
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
          </div>
        </section>

        {/* ── 5. Why Partner with ScaleSight ── */}
        <section className="bg-[rgba(18,28,40,0.56)] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              align="center"
              eyebrow="Side-by-Side Comparison"
              title="Why Partner with ScaleSight"
              copy="Transform your advisory practice from manual spreadsheet management into a high-margin, scalable intelligence offering."
            />

            <div className="mt-14 overflow-hidden rounded-[1.8rem] border border-white/8 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <div className="grid grid-cols-2 border-b border-white/8 bg-white/[0.04]">
                <div className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#fda4af] md:px-8">
                  Without ScaleSight
                </div>
                <div className="border-l border-white/8 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8dd9ff] md:px-8">
                  With ScaleSight
                </div>
              </div>

              {comparisonItems.map((row) => (
                <div
                  key={row.without}
                  className="grid grid-cols-2 border-b border-white/6 last:border-0 transition hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3 px-6 py-5 text-sm text-[var(--text-secondary)] md:px-8 md:text-base">
                    <X size={16} className="shrink-0 text-[#f43f5e]" />
                    <span>{row.without}</span>
                  </div>
                  <div className="flex items-center gap-3 border-l border-white/8 px-6 py-5 text-sm font-semibold text-white md:px-8 md:text-base">
                    <Check size={16} className="shrink-0 text-[#04B4FD]" />
                    <span>{row.with}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Partnership Model ── */}
        <section className="px-6 py-24" id="partnership-model">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              eyebrow="Step-by-Step Flow"
              title="Partnership Model"
              copy="A streamlined, 5-step process from initial alignment to ongoing advisory delivery."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-5">
              {partnershipSteps.map((stepItem, index) => (
                <article
                  key={stepItem.step}
                  className="story-card flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,28,40,0.92)] text-sm font-semibold text-[#8dd9ff]">
                        {stepItem.step}
                      </span>
                      {index < partnershipSteps.length - 1 && (
                        <ArrowRight
                          size={16}
                          className="hidden text-white/20 md:block"
                        />
                      )}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
                      {stepItem.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                      {stepItem.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Final CTA Banner ── */}
        <section className="px-6 py-24">
          <div className="cta-panel mx-auto max-w-6xl text-center">
            <SectionHeader
              align="center"
              eyebrow="Get Started"
              title="Ready to Strengthen Your Advisory?"
              copy="Let's discuss how ScaleSight can become the intelligence layer behind your consulting practice."
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">
                Book a Partnership Call
              </PrimaryButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
