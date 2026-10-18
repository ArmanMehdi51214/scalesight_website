import { siteConfig } from "@/lib/site-config";

export const sampleBrief = {
  disclosure: "Illustrative · synthetic data",
  context:
    "Synthetic beverage example. Next production slot: 12 November. Decision owner: Brand operations.",
  fields: [
    {
      label: "What changed",
      value:
        "Flavor A sold 1,200 units over four weeks; B sold 800. B was unavailable for six days.",
    },
    {
      label: "What we checked",
      value:
        "Total sales, availability, repeat orders, incoming supply and shared run capacity. A faster observed rate alone does not establish incremental demand.",
    },
    {
      label: "Recommended action",
      value:
        "Investigate B availability before increasing total volume. Compare an unchanged total run with a revised mix.",
    },
    {
      label: "Quantity and timing",
      value:
        "Compare 6,000 units at 3,000 A / 3,000 B with 3,600 A / 2,400 B before the next slot is committed.",
    },
    {
      label: "Cash and service trade-off",
      value:
        "At an assumed $2 unit cost, both total $12,000 in product cost. Timing, packaging, freight and lost-sales risk still require review.",
    },
    {
      label: "Assumptions and next signal",
      value:
        "Synthetic figures; equal unit costs assumed. Recheck B after seven in-stock days and validate MOQ, committed stock and lead time.",
    },
  ],
  decisionOwner: "Brand operations",
  reviewDate: siteConfig.sampleBriefReviewDate,
} as const;
