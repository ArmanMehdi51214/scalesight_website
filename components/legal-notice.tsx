import { privacyDraft } from "@/content/privacy";
import { siteConfig } from "@/lib/site-config";
export default function LegalNotice() {
  return (
    <div className="container legal-layout">
      <nav className="legal-index" aria-label="Privacy notice sections">
        <ol>
          {privacyDraft.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      <article className="legal-content">
        <div className="legal-warning">
          <strong>Draft notice</strong>
          <p>
            Publication details are awaiting confirmation. Fields in brackets
            below are retained from the existing draft. This notice requires
            owner and legal review.
          </p>
        </div>
        {privacyDraft.intro.map((p) => (
          <p className="section-copy" key={p}>
            {p}
          </p>
        ))}
        {privacyDraft.sections.map((section, index) => (
          <section key={section.id} id={section.id}>
            <h2>
              {index + 1}. {section.title}
            </h2>
            {section.blocks.map((block, i) =>
              block.type === "list" ? (
                <ul key={i}>
                  {block.text.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : block.type === "heading" ? (
                <h3 key={i}>{block.text}</h3>
              ) : (
                <p key={i}>
                  {block.text.includes("__CANONICAL_EMAIL__") ? (
                    <>
                      {block.text.split("__CANONICAL_EMAIL__")[0]}
                      <a href={`mailto:${siteConfig.email}`}>
                        {siteConfig.email}
                      </a>
                      {block.text.split("__CANONICAL_EMAIL__")[1]}
                    </>
                  ) : (
                    block.text
                  )}
                </p>
              ),
            )}
          </section>
        ))}
      </article>
    </div>
  );
}
