import { redirect } from "next/navigation";
import { HeroSection, ContentSection, PilotBand } from "@/components/sections";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Partner with ScaleSight | Analytical Planning Support",
  "Scoped analytical planning capacity for operating advisors. Agree the decision, client permissions, review responsibilities and working arrangement before delivery.",
  "/partners",
);
export default function Partners() {
  if (!siteConfig.partnersActive) redirect("/contact?intent=partner");
  return (
    <>
      <HeroSection id="R01" />
      <ContentSection id="R02" tone="white-section" />
      <ContentSection id="R03" />
      <PilotBand id="R04" />
    </>
  );
}
