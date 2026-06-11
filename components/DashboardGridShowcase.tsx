import Image from "next/image";

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
];

export default function DashboardGridShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {dashboardCards.map((card) => (
        <article key={card.title} className="dashboard-card">
          <div className="dashboard-card__header">
            <div>
              <p className="dashboard-card__title">{card.title}</p>
              <p className="dashboard-card__subtle">{card.subtitle}</p>
            </div>
            <span className="dashboard-pill dashboard-pill--cyan">{card.metric}</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-white">
            <Image
              alt={card.alt}
              className="h-[15.5rem] w-full object-cover"
              height={1024}
              src={card.src}
              style={{ objectPosition: card.objectPosition }}
              width={1536}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
