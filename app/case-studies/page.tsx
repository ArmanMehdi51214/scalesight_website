import type { Metadata } from "next";
import Image from "next/image";
import { Activity, Leaf } from "lucide-react";

import { absoluteUrl, createPageMetadata, jsonLdMarkup } from "@/app/seo";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { PrimaryButton, SecondaryButton, SectionHeader } from "@/components/marketing-primitives";

export const metadata: Metadata = createPageMetadata({
  title: "Ecommerce Forecasting Case Studies | ScaleSight",
  description:
    "See how ScaleSight helped Shopify and DTC brands gain revenue visibility, inventory planning, and demand forecasting clarity.",
  path: "/case-studies",
  image: "/dashboards%20for%20website/visual%202.png",
});

const studies = [
  {
    tag: "Direct-to-Consumer / Health & Wellness",
    title: "VeloVitality Performance",
    challenge:
      "Rapid scaling created fragmented ecommerce forecasting and planning. Seasonal peaks in hero SKUs regularly triggered stockouts while slower lines soaked up capital.",
    gap:
      '"We were flying blind between production lead times and live sales velocity. Our spreadsheets were already behind reality."',
    outcome:
      "A shared planning view plus real-time SKU heatmaps helped the team gain demand visibility, reduce stockout exposure, and tighten weekly decisions.",
    lessons:
      "The biggest return came from avoiding missed demand, not from more reporting.",
    metric: "+34%",
    label: "Forecast Accuracy",
    icon: Activity,
    visual: "image",
  },
  {
    tag: "Enterprise / Sustainable Apparel",
    title: "EcoThread Collective",
    challenge:
      "Longer supply chain lead times made Shopify inventory planning too slow for shifting demand in core apparel lines.",
    gap:
      '"We had no clear line of sight into how a logistics delay would change our Black Friday inventory position."',
    outcome:
      "Scenario modeling allowed the team to move production earlier, protect revenue visibility, and reduce cash trapped in slow-moving SKUs.",
    lessons:
      "Visibility across finance, merchandising, and supply chain made growth tradeoffs explicit instead of political.",
    metric: "$1.2M",
    label: "Risk Avoided",
    icon: Leaf,
    visual: "chart",
  },
] as const;

function StudyVisual({ visual }: { visual: "image" | "chart" }) {
  if (visual === "image") {
    return (
      <div className="overflow-hidden rounded-[1rem] border border-white/8">
        <Image
          alt="Shopify demand forecasting dashboard preview with SKU-level inventory planning"
          className="h-auto w-full object-cover"
          height={1024}
          src="/dashboards%20for%20website/visual%202.png"
          width={1536}
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1rem] border border-white/8">
      <Image
        alt="Ecommerce revenue visibility dashboard preview for forecasting case study"
        className="h-auto w-full object-cover"
        height={1024}
        src="/dashboards%20for%20website/visual%201.png"
        width={1536}
      />
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-20 md:px-6 md:py-24">
        <section className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="Success Stories"
            align="center"
            level="h1"
            title="Visibility Creates Better Outcomes."
            copy="Real examples of ecommerce brands replacing fragmented planning with revenue visibility, inventory planning, demand forecasting, and ecommerce decision intelligence."
          />
        </section>

        <section className="mx-auto mt-20 flex max-w-4xl flex-col gap-10">
          {studies.map((study) => {
            const Icon = study.icon;

            return (
              <article key={study.title} className="surface-card relative overflow-hidden rounded-[2rem] p-7 md:p-10">
                <div className="flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8dd9ff]">
                        {study.tag}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {study.title}
                      </h3>
                    </div>
                    <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-3 text-[#8dd9ff] md:inline-flex">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="story-label">The Challenge</p>
                      <p className="story-copy">{study.challenge}</p>
                    </div>

                    <div>
                      <p className="story-label text-[#8dd9ff]">Visibility Gap</p>
                      <p className="story-copy italic">{study.gap}</p>
                    </div>

                    <div>
                      <p className="story-label">Solution Implementation</p>
                      <div className="mt-4">
                        <StudyVisual visual={study.visual} />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="story-label">Outcome</p>
                        <p className="story-copy">{study.outcome}</p>
                      </div>
                      <div>
                        <p className="story-label">Lessons Learned</p>
                        <p className="story-copy">{study.lessons}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end md:absolute md:bottom-8 md:right-8 md:mt-0">
                  <div className="rounded-[1.25rem] bg-[linear-gradient(135deg,var(--blue-primary),var(--blue-secondary))] px-6 py-5 text-right shadow-[0_20px_60px_rgba(0,94,240,0.28)]">
                    <p className="text-4xl font-semibold tracking-tight text-white">
                      {study.metric}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/78">
                      {study.label}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mx-auto mt-24 max-w-5xl">
          <div className="cta-panel text-center">
            <SectionHeader
              align="center"
              title="Ready to build your success story?"
              copy="Bring your team, your planning pain points, and your growth targets. We will help shape the next operating layer."
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
              <SecondaryButton href="/plan-with-confidence">
                Explore ecommerce planning
              </SecondaryButton>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdMarkup({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ecommerce Forecasting Case Studies",
            url: absoluteUrl("/case-studies"),
            description:
              "ScaleSight case studies covering revenue visibility, inventory planning, demand forecasting, and ecommerce decision intelligence.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: studies.map((study, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: study.title,
                  description: `${study.challenge} ${study.outcome}`,
                },
              })),
            },
          }),
        }}
      />
      <SiteFooter />
    </>
  );
}
