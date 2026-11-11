import LegalNotice from "@/components/legal-notice";
import { privacyDraft } from "@/content/privacy";
import { pageMetadata } from "@/lib/metadata";
export const metadata = {
  ...pageMetadata(
    "Privacy Notice | ScaleSight",
    "Privacy information for ScaleSight website enquiries and business communications. Existing draft pending owner and legal confirmation.",
    "/privacy",
  ),
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">SCALESIGHT / LEGAL</p>
          <h1>Privacy Notice</h1>
          <p className="section-copy">
            Clear information about how ScaleSight collects, uses and handles
            personal information through the website, enquiries and business
            communications.
          </p>
          <p className="scope-note">
            Existing draft last updated: {privacyDraft.lastUpdated}.
            Owner-approved publication date pending.
          </p>
        </div>
      </section>
      <LegalNotice />
    </>
  );
}
