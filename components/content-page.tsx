import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero, { HomeSignals } from "@/components/home-hero";
import manifest from "@/docs/content-manifest.json";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

type Block = { text: string; href?: string };
type Section = { id: string; kind: string; blocks: Block[] };
export type ContentRoute = keyof typeof manifest.routes;

function Action({ block, secondary = false }: { block: Block; secondary?: boolean }) {
  return <Link className={secondary ? "secondary-button" : "primary-button"} href={block.href!}>{block.text}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
export function PlanningBrief() {
  const brief = manifest.sampleBrief;
  const fields = brief.fields;
  return <article className="planning-brief">
    <p className="brief-disclosure">{brief.disclosure}</p>
    <p className="brief-context">{brief.context}</p>
    <dl className="brief-fields">{fields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>)}</dl>
    <dl className="brief-signoff"><div><dt>{brief.ownerLabel}</dt><dd>{brief.owner}</dd></div>{siteConfig.sampleBriefReviewDate && <div><dt>Review date</dt><dd>{siteConfig.sampleBriefReviewDate}</dd></div>}</dl>
  </article>;
}
function Pairs({ blocks, className = "copy-grid" }: { blocks: Block[]; className?: string }) {
  return <div className={className}>{blocks.filter((_,i) => i % 2 === 0).map((block,i) => <article key={block.text}><h3>{block.text}</h3><p>{blocks[i*2+1]?.text}</p></article>)}</div>;
}
function SectionContent({ section, route }: { section: Section; route: ContentRoute }) {
  const {id,kind,blocks:b} = section;
  const heading = <h2>{b[0].text}</h2>;
  if(id === "H01") return <HomeHero blocks={b}/>;
  if(id === "H02") return <HomeSignals blocks={b}/>;
  if(kind === "hero") {
    const headingIndex = id === "P01" ? 1 : 0;
    const guide = manifest.pageGuides[route as keyof typeof manifest.pageGuides];
    return <div className="page-masthead"><div className="hero-copy">
      <p className="page-kicker">{guide.label}</p>
      {b.slice(0,headingIndex).map(block => <p className="eyebrow" key={block.text}>{block.text}</p>)}
      <h1>{b[headingIndex].text}</h1>
      {b.slice(headingIndex+1).filter(block => !block.href).map(block => <p className="hero-intro" key={block.text}>{block.text}</p>)}
      <div className="actions">{b.filter(block => block.href).map((block,i) => <Action block={block} secondary={i>0} key={block.text}/>)}</div>
    </div><nav className="page-guide" aria-label={`${guide.label} sections`}>
      {guide.links.map((link, index) => <Link href={link.href} key={link.href}><span className="guide-number" aria-hidden="true" data-number={`0${index + 1}`} /><span>{link.text}</span><ArrowUpRight size={15} aria-hidden="true" /></Link>)}
    </nav></div>;
  }
  if(kind === "faq") return <div className="faq-list">{b.filter((_,i)=>i%2===0).map((block,i) => <details key={block.text}><summary>{block.text}</summary><p>{b[i*2+1].text}</p></details>)}</div>;
  if(kind === "brief") return <>{heading}{b[1] && <p className="section-intro">{b[1].text}</p>}<div id={id==='E02' ? 'sample-brief' : undefined} className="brief-wrap"><PlanningBrief/></div></>;
  if(kind === "cards" || kind === "process" || kind === "timeline" || kind === "deliverables") return <>{heading}<Pairs blocks={b.slice(1)} className={kind === 'process' ? 'process-grid' : kind === 'timeline' ? 'week-grid' : 'copy-grid'}/>{kind==='deliverables' && <div className="brief-wrap"><PlanningBrief/></div>}</>;
  if(kind === "audiences" || kind === "inputs") return <>{heading}<Pairs blocks={b.slice(1,-1)}/><p className="ownership-note">{b.at(-1)?.text}</p></>;
  if(kind === "steps") return <>{heading}<ol className="step-list">{b.slice(1,-1).map(block=><li key={block.text}>{block.text}</li>)}</ol><Link className="text-link" href={b.at(-1)!.href!}>{b.at(-1)!.text}</Link></>;
  if(kind === "links") return <>{heading}<p className="section-intro">{b[1].text}</p><div className="example-links">{b.slice(2).filter((_,i)=>i%3===0).map((block,i)=><article key={block.text}><Link href={block.href!}><h3>{block.text}</h3></Link><p>{b[i*3+3].text}</p><p>{b[i*3+4].text}</p></article>)}</div></>;
  if(kind === "roles") return <>{heading}<div className="roles-table"><div className="roles-head"><h3>{b[1].text}</h3><h3>{b[2].text}</h3></div>{[3,5,7].map(i=><div className="roles-row" key={i}><p>{b[i].text}</p><p>{b[i+1].text}</p></div>)}</div></>;
  if(kind === "example") {
    const key = id === 'E03' ? 'supplyTiming' : id === 'E04' ? 'launchDemand' : 'sizeDepth';
    const demo = siteConfig.exampleDemoLinks[key];
    return <article className="example-detail"><div><h2>{b[0].text}</h2><p className="example-category">{b[1].text}</p></div><div className="example-evidence">{b.slice(2,5).map(block=><p key={block.text}>{block.text}</p>)}<p className="brief-disclosure">{manifest.sampleBrief.disclosure}</p>{demo.enabled && demo.url && <a className="secondary-button" href={demo.url} target="_blank" rel="noopener noreferrer" aria-label={`${b[5].text} (opens in a new tab)`}>{b[5].text}</a>}</div></article>;
  }
  if(kind === "cta") return <div className="closing-copy">{b.filter(block=>!block.href).map((block,i)=>i===0?<h2 key={block.text}>{block.text}</h2>:<p key={block.text}>{block.text}</p>)}<div className="actions">{b.filter(block=>block.href).map(block=><Action block={block} key={block.text}/>)}</div></div>;
  if(kind === "list" || kind === "principles") return <ul className={kind==='principles'?'principles':'step-list'}>{b.map(block=><li key={block.text}>{block.text}</li>)}</ul>;
  if(kind === "signature") return <div className="founder-signature">{b.map(block=><p key={block.text}>{block.text}</p>)}</div>;
  if(kind === "narrative" || kind === "note") return <div className="reading-copy">{b.map(block=><p key={block.text}>{block.text}</p>)}</div>;
  if(kind === "link") return <Link className="text-link" href={b[0].href!}>{b[0].text}</Link>;
  if(kind === "fit") return <>{heading}<p className="section-intro">{b[1].text}</p><ul className="fit-list">{b.slice(2).map(block=><li key={block.text}>{block.text}</li>)}</ul></>;
  return <div className="editorial-grid">{heading}<div>{b.slice(1).map(block=><p key={block.text}>{block.text}</p>)}</div></div>;
}
export default function ContentPage({route}: {route: ContentRoute}) {
  const sections: Section[] = manifest.routes[route];
  const anchors: Record<string,string> = { W05:'inputs', E03:'supply-timing',E04:'launch-demand',E05:'size-depth' };
  return <><SiteHeader/><main id="main-content" tabIndex={-1} className={`content-page ${route === "/" ? "page-home" : `interior-page page-${route.slice(1)}`}`}>
    {sections.map(section=><section key={section.id} id={anchors[section.id] || section.id} data-section={section.id} className={`page-section section-${section.kind} section-${section.id}`}><div className="content-shell"><SectionContent section={section} route={route}/></div></section>)}
  </main><SiteFooter/></>;
}
