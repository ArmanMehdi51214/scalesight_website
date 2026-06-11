import Image from "next/image";

import visualOne from "@/public/dashboards for website/visual 1.png";
import visualTwo from "@/public/dashboards for website/visual 2.png";
import visualThree from "@/public/dashboards for website/viusal 3.png";

const showcaseCards = [
  {
    title: "Revenue Forecasting Dashboard",
    label: "Forecast view",
    image: visualTwo,
    alt: "Revenue forecasting dashboard preview",
    className:
      "left-0 top-16 w-[68%] origin-left -rotate-[9deg] scale-[0.9] md:w-[62%]",
    imageClassName: "object-cover object-left-top",
  },
  {
    title: "Executive Decision Dashboard",
    label: "Hero dashboard",
    image: visualOne,
    alt: "Executive decision dashboard preview",
    className:
      "left-1/2 top-5 z-20 w-[74%] -translate-x-1/2 md:w-[66%] lg:w-[62%]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Inventory Health Dashboard",
    label: "Operations view",
    image: visualThree,
    alt: "Inventory health dashboard preview",
    className:
      "right-0 top-[4.5rem] w-[68%] origin-right rotate-[10deg] scale-[0.9] md:w-[62%]",
    imageClassName: "object-cover object-right-top",
  },
] as const;

function ShowcaseCard({
  title,
  label,
  image,
  alt,
  className,
  imageClassName,
}: (typeof showcaseCards)[number]) {
  return (
    <article
      className={`fan-panel absolute aspect-[3/2] overflow-hidden rounded-[30px] border border-white/10 bg-[#08111c] shadow-[0_24px_80px_rgba(0,0,0,0.36)] ${className}`}
    >
      <Image
        alt={alt}
        className={imageClassName}
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 68vw, (max-width: 1280px) 42vw, 36vw"
        src={image}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.05),rgba(7,17,31,0.4))]" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 md:p-5">
        <div className="rounded-[18px] border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-3 backdrop-blur-md">
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            {label}
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.72)] px-3 py-1 text-[11px] text-[var(--text-secondary)] backdrop-blur-md">
          Live data
        </span>
      </div>
    </article>
  );
}

export default function PerspectiveShowcase() {
  return (
    <div className="relative h-[34rem] perspective-[1800px]">
      <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(4,180,253,0.18),transparent_58%)] blur-3xl" />

      {showcaseCards.map((card) => (
        <ShowcaseCard key={card.title} {...card} />
      ))}
    </div>
  );
}
