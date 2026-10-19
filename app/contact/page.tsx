import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactForm from "@/components/contact-form";
import manifest from "@/docs/content-manifest.json";
import { siteConfig } from "@/lib/site-config";

const validIntents = new Set(["planning", "pilot", "partner"]);
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ intent?: string | string[] }> }) {
  const params = await searchParams;
  const queryIntent = Array.isArray(params.intent) ? params.intent[0] : params.intent;
  const intent = validIntents.has(queryIntent || "") ? queryIntent as "planning" | "pilot" | "partner" : "planning";
  const sections = manifest.routes['/contact'];
  return <><SiteHeader/><main id="main-content" tabIndex={-1} className="content-page page-contact content-shell">
    <section data-section="C01" id="C01" className="contact-heading"><h1>{sections[0].blocks[0].text}</h1><p>{sections[0].blocks[1].text}</p></section>
    <section data-section="C02" id="C02" className="contact-expectations"><ul>{sections[1].blocks.map(block=><li key={block.text}>{block.text}</li>)}</ul></section>
    <section data-section="C03" id="C03" className="contact-form-card"><p className="form-intro">{sections[2].blocks[0].text}</p><ContactForm intent={intent}/></section>
    <section data-section="C04" id="C04" aria-label="Booking"/>
    <section data-section="C05" id="C05" className="direct-contact"><p>{sections[4].blocks[0].text}{siteConfig.contactEmail && <> <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></>}</p></section>
  </main><SiteFooter/></>;
}
