import { Action } from "@/components/sections";
export default function NotFound() {
  return (
    <section className="hero container">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>Let’s find the next decision.</h1>
      <p className="section-copy">
        This page isn’t available. Explore the planning approach or tell us what
        your team is weighing.
      </p>
      <div className="hero-actions">
        <Action href="/">Return to ScaleSight</Action>
      </div>
    </section>
  );
}
