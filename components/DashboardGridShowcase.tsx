"use client";

import Image from "next/image";
import { useState } from "react";

const dashboardCards = [
  {
    title: "Revenue Forecast",
    subtitle: "13-week outlook",
    metric: "+18% growth trend",
    src: "/dashboards%20for%20website/visual%201.png",
    alt: "Revenue forecasting dashboard visual",
    objectPosition: "center top",
  },
  {
    title: "Inventory Health",
    subtitle: "Risk, value, and stock posture",
    metric: "78 / 100 health score",
    src: "/dashboards%20for%20website/viusal%203.png",
    alt: "Inventory health dashboard visual",
    objectPosition: "center top",
  },
  {
    title: "SKU Demand Forecast",
    subtitle: "Product-level visibility",
    metric: "245 active SKUs",
    src: "/dashboards%20for%20website/visual%202.png",
    alt: "SKU demand forecast dashboard visual",
    objectPosition: "center top",
  },
  {
    title: "Scenario Planning",
    subtitle: "Promo and ad spend decisions",
    metric: "+22% upside case",
    src: "/dashboards%20for%20website/visual%202s.png",
    alt: "Scenario planning dashboard visual",
    objectPosition: "center top",
  },
] as const;

export default function DashboardGridShowcase() {
  const [selectedCard, setSelectedCard] = useState<
    (typeof dashboardCards)[number] | null
  >(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {dashboardCards.map((card) => (
          <article key={card.title} className="dashboard-card">
            <div className="dashboard-card__header">
              <div>
                <p className="dashboard-card__title">{card.title}</p>
                <p className="dashboard-card__subtle">{card.subtitle}</p>
              </div>
              <span className="dashboard-pill dashboard-pill--cyan">
                {card.metric}
              </span>
            </div>

            <button
              aria-label={`Preview ${card.title}`}
              className="dashboard-card__media mt-6"
              onClick={() => setSelectedCard(card)}
              type="button"
            >
              <Image
                alt={card.alt}
                className="h-[15.5rem] w-full object-cover"
                height={1024}
                src={card.src}
                style={{ objectPosition: card.objectPosition }}
                width={1536}
              />
            </button>
          </article>
        ))}
      </div>

      {selectedCard ? (
        <div
          aria-label={`Expanded preview of ${selectedCard.title}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(4,10,18,0.82)] px-6 py-10 backdrop-blur-md"
          onClick={() => setSelectedCard(null)}
          role="dialog"
        >
          <div
            className="w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[rgba(7,17,31,0.94)] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">
                  {selectedCard.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {selectedCard.subtitle}
                </p>
              </div>
              <span className="dashboard-pill dashboard-pill--cyan">
                {selectedCard.metric}
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white">
              <Image
                alt={selectedCard.alt}
                className="h-auto max-h-[75vh] w-full object-contain"
                height={1024}
                priority
                src={selectedCard.src}
                style={{ objectPosition: selectedCard.objectPosition }}
                width={1536}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
