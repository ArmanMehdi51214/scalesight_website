import Image, { type StaticImageData } from "next/image";

import visualTwo from "@/public/dashboards for website/visual 2.png";
import visualTwos from "@/public/dashboards for website/visual 2s.png";
// import visualThree from "@/public/dashboards for website/viusal 3.png";
import visualoneone from "@/public/dashboards for website/visual 111.png";

const showcaseCards = [
  {
    image: visualTwo,
    alt: "Revenue forecasting dashboard preview",
    className:
      "left-[1%] top-[4.5rem] z-10 w-[54%] origin-left -rotate-[10deg] sm:w-[50%] md:left-[5%] md:top-[4.25rem] md:w-[42%]",
    priority: false,
  },
  {
    image: visualoneone,
    alt: "Executive decision dashboard preview",
    className:
      "left-1/2 top-2 z-20 w-[62%] -translate-x-1/2 sm:w-[58%] md:top-0 md:w-[47%]",
    priority: true,
  },
  {
    image: visualTwos,
    alt: "Inventory health dashboard preview",
    className:
      "right-[1%] top-[4.5rem] z-10 w-[54%] origin-right rotate-[10deg] sm:w-[50%] md:right-[5%] md:top-[4.25rem] md:w-[42%]",
    priority: false,
  },
] satisfies Array<{
  alt: string;
  className: string;
  image: StaticImageData;
  priority: boolean;
}>;

function ShowcaseCard({
  image,
  alt,
  className,
  priority,
}: (typeof showcaseCards)[number]) {
  return (
    <div className={`absolute ${className}`}>
      <Image
        alt={alt}
        className="h-auto w-full object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.28)]"
        placeholder="blur"
        priority={priority}
        sizes="(max-width: 640px) 62vw, (max-width: 1024px) 48vw, 34vw"
        src={image}
      />
    </div>
  );
}

export default function PerspectiveShowcase() {
  return (
    <div className="relative h-[21rem] overflow-hidden sm:h-[24rem] md:h-[27rem] lg:h-[29rem]">
      <div className="absolute bottom-[-6rem] left-1/2 h-[18rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,180,253,0.34),rgba(0,94,240,0.2),transparent_72%)] blur-3xl md:bottom-[-7rem] md:h-[24rem] md:w-[34rem] lg:bottom-[-8rem] lg:h-[28rem] lg:w-[42rem]" />
      <div className="absolute bottom-[2.5rem] left-1/2 h-[14rem] w-[16rem] -translate-x-1/2 rounded-full border border-white/6 opacity-30 [background-image:linear-gradient(rgba(4,180,253,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(4,180,253,0.14)_1px,transparent_1px)] [background-size:22px_22px] md:bottom-[3rem] md:h-[18rem] md:w-[22rem] lg:bottom-[3.5rem] lg:h-[22rem] lg:w-[28rem]" />
      <div className="absolute bottom-[1rem] left-1/2 h-[18rem] w-[20rem] -translate-x-1/2 rounded-full border border-[rgba(141,217,255,0.08)] md:bottom-[1.5rem] md:h-[24rem] md:w-[28rem] lg:bottom-[2rem] lg:h-[28rem] lg:w-[34rem]" />

      {showcaseCards.map((card) => (
        <ShowcaseCard key={card.alt} {...card} />
      ))}
    </div>
  );
}
