import {
  briefFields,
  proofAssets,
  syntheticDisclosure,
} from "@/content/proofAssets";
export function DecisionBrief() {
  return (
    <article
      className="decision-brief"
      aria-label="Illustrative six-field planning brief"
    >
      <div className="brief-header">
        <p className="eyebrow">{proofAssets["GEN-01"].scenarioName}</p>
        <span className="synthetic-badge">{syntheticDisclosure}</span>
      </div>
      <div className="brief-title">
        <h3>A weekly recommendation you can actually discuss.</h3>
        <span className="brief-stamp" aria-hidden="true">
          THE
          <br />
          DECISION
          <br />
          BRIEF ↗
        </span>
      </div>
      <dl className="brief-fields">
        {briefFields.map((field, i) => (
          <div key={field.label}>
            <dt>
              <span aria-hidden="true">0{i + 1}</span>
              {field.label}
            </dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>
      <p className="brief-footnote">
        Decision owner and commitment date are agreed during scoping.
        Assumptions remain visible; your team makes the final call.
      </p>
    </article>
  );
}
