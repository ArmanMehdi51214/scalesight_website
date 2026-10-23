import Image from "next/image";
import decision from "@/public/images/planning-decision.webp";

/** A real single-decision crop, with its disclosure included in the image. */
export default function ProductFrame() {
  return <div className="product-frame">
    <div className="product-frame__bar" aria-hidden="true"><i /><i /><i /></div>
    <div className="product-frame__canvas">
      <Image src={decision} alt="Recovery options" sizes="(max-width: 767px) 92vw, (max-width: 1200px) 85vw, 1040px" preload />
    </div>
  </div>;
}
