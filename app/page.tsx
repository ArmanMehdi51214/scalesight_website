import { ArrowLeftRight, PackageOpen, Layers3, Check } from "lucide-react";
import { HeroSection, ContentSection, DemoShowcase, DecisionBrief, ProcessSteps, ResponsibilityGrid, PilotBand, FAQ } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("ScaleSight | Managed Inventory Planning for Food & Beverage", "Weekly specialist-reviewed recommendations on what to buy, make or replenish, how much, when and the cash each option commits. Your team makes the final call.", "/");
export default function Home() {return <>
  <HeroSection id="H01" assetId="SF-01" center><div className="hero-micro"><span><Check size={14} aria-hidden="true" />Maintained analysis</span><span><Check size={14} aria-hidden="true" />Specialist-reviewed recommendations</span><span><Check size={14} aria-hidden="true" />Your team’s final call</span></div></HeroSection>
  <ContentSection id="H02"><div className="question-grid">{[{icon:Layers3,q:"Do we make more or change the mix?"},{icon:PackageOpen,q:"Do we split the shipment or wait?"},{icon:ArrowLeftRight,q:"Which channel gets limited stock?"}].map(({icon:Icon,q})=><article className="question-card" key={q}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><h3>{q}</h3></article>)}</div></ContentSection>
  <ContentSection id="H03" tone="white-section"><ProcessSteps compact steps={[{title:"Agreed inputs"},{title:"Analysis"},{title:"Specialist review"},{title:"Client decision"}]} /></ContentSection>
  <DemoShowcase id="H04" assetId="SF-01" annotations />
  <DemoShowcase id="H05" assetId="SF-02" />
  <DemoShowcase id="H06" assetId="IC-01" reverse />
  <ContentSection id="H07" tone="white-section"><DecisionBrief /></ContentSection>
  <ContentSection id="H08"><ResponsibilityGrid /></ContentSection>
  <PilotBand />
  <ContentSection id="H10"><FAQ items={[{question:"Do we replace your planning software?",answer:"No. ScaleSight works within an agreed analytical scope alongside the team and systems you already have."},{question:"Can we test another option?",answer:"In the scoped workspace, selected scenarios may be explored. The reviewed recommendation stays visible."},{question:"Who approves?",answer:"Your team makes the final call and executes through its existing systems."}]} /></ContentSection>
</>;}
