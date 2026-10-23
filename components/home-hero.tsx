import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, Layers3 } from "lucide-react";
import manifest from "@/docs/content-manifest.json";
import styles from "./home-hero.module.css";

type Block = { text: string; href?: string };

export default function HomeHero({ blocks }: { blocks: Block[] }) {
  const preview = manifest.heroPreview;
  const [eyebrow, title, intro, primary, secondary, note] = blocks;
  const [lead, ending] = title.text.split(". ");

  return <div className={styles.hero}>
    <div className={styles.copy}>
      <p className={styles.eyebrow}><span aria-hidden="true" />{eyebrow.text}</p>
      <h1 className={styles.title}>{lead}.<br /><span>{ending}</span></h1>
      <p className={styles.intro}>{intro.text}</p>
      <div className={styles.actions}>
        <Link className="primary-button" href={primary.href!}>{primary.text}<ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className={styles.secondary} href={secondary.href!}>{secondary.text}<ArrowDownRight size={17} aria-hidden="true" /></Link>
      </div>
      <p className={styles.note}><Check size={14} aria-hidden="true" />{note.text}</p>
    </div>

    <article className={styles.workspace} aria-labelledby="hero-brief-title">
      <div className={styles.toolbar}>
        <span className={styles.workspaceLabel}><Layers3 size={16} aria-hidden="true" />{preview.label}</span>
        <span className={styles.disclosure}>{preview.disclosure}</span>
      </div>
      <div className={styles.briefHeading}>
        <h2 id="hero-brief-title">{preview.title}</h2>
        <p>{preview.context}</p>
      </div>
      <div className={styles.briefBody}>
        <div className={styles.signal}>
          <p className={styles.label}>{preview.signal.label}</p>
          <h3>{preview.signal.title}</h3>
          <dl className={styles.sales}>
            <div><dt>{preview.signal.aLabel}</dt><dd>{preview.signal.aValue}</dd><span className={styles.barA} aria-hidden="true" /></div>
            <div><dt>{preview.signal.bLabel}</dt><dd>{preview.signal.bValue}</dd><span className={styles.barB} aria-hidden="true" /></div>
          </dl>
          <p className={styles.signalNote}>{preview.signal.note}</p>
        </div>
        <div className={styles.review}>
          <p className={styles.label}>{preview.review.label}</p>
          <h3>{preview.review.title}</h3>
          <p className={styles.reviewCopy}>{preview.review.copy}</p>
        </div>
        <div className={styles.decision}>
          <p className={styles.label}>{preview.decision.label}</p>
          <h3>{preview.decision.title}</h3>
          <p className={styles.volume}>{preview.decision.volume}<span>{preview.decision.volumeLabel}</span></p>
          <dl className={styles.mix}>
            <div><dt>{preview.decision.firstLabel}</dt><dd>{preview.decision.firstValue}</dd></div>
            <div><dt>{preview.decision.secondLabel}</dt><dd>{preview.decision.secondValue}</dd></div>
          </dl>
        </div>
      </div>
      <div className={styles.briefFooter}>
        <p><strong>{preview.footerLabel}</strong>{preview.footerCopy}</p>
        <span><Check size={14} aria-hidden="true" />{preview.ownership}</span>
      </div>
    </article>
  </div>;
}

export function HomeSignals({ blocks }: { blocks: Block[] }) {
  return <div className={styles.signals}>
    <h2>{blocks[0].text}</h2>
    <div className={styles.signalRows}>
      {blocks.slice(1).filter((_, i) => i % 2 === 0).map((block, i) => <article className={styles.signalRow} key={block.text}>
        <span className={styles.rowNumber} aria-hidden="true" data-number={`0${i + 1}`} />
        <div><h3>{block.text}</h3><p>{blocks[i * 2 + 2].text}</p></div>
        <ArrowDownRight size={22} aria-hidden="true" />
      </article>)}
    </div>
  </div>;
}
