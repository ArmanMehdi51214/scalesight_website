export default function ScenarioComparison() {
  return (
    <div className="scenario-comparison">
      <div className="comparison-header">
        <span className="eyebrow">Exploratory assumption</span>
      </div>
      <div className="comparison-grid">
        <article className="comparison-text">
          <h3>Baseline</h3>
          <p className="section-copy">
            Available inventory, weekly demand, incoming PO timing and protected
            commitments.
          </p>
        </article>
        <article className="comparison-text">
          <h3>Alternative</h3>
          <p className="section-copy">
            Compare accepting the delay, bringing all stock forward, splitting
            the shipment or reducing optional promotional demand.
          </p>
        </article>
      </div>
      <p className="recommendation">
        <strong>ScaleSight-reviewed recommendation</strong>The reviewed
        recommendation stays separate from exploratory assumptions. Your team
        validates the constraints, approves or changes the decision, and
        executes through its existing systems.
      </p>
    </div>
  );
}
