export type ProofAsset = {
  asset_id: string;
  path: string | null;
  width: number;
  height: number;
  classification: "synthetic";
  scenarioName: string;
  captureDescription: string;
  alt: string;
  caption: string;
  mobileFocus: string;
  mobileScale: number;
  desktopFocus: string;
  ctaTarget: string;
  sourcePath: string | null;
  publicationStatus: "reviewed" | "needs-recapture";
  sourceRoute: null;
  captureDate: null;
  scrubApproval: "pending";
};
const asset = (
  asset_id: string,
  file: string | null,
  scenarioName: string,
  captureDescription: string,
  alt: string,
  caption: string,
  mobileFocus: string,
  ctaTarget: string,
  mobileScale = 1.5,
): ProofAsset => ({
  asset_id,
  path: file ? `/images/proof/${file}.png` : null,
  width: 1920,
  height: 845,
  classification: "synthetic",
  scenarioName,
  captureDescription,
  alt,
  caption,
  mobileFocus,
  mobileScale,
  desktopFocus: "50% 50%",
  ctaTarget,
  sourcePath: file ? `public/images/proof/${file}.png` : null,
  publicationStatus: "reviewed",
  sourceRoute: null,
  captureDate: null,
  scrubApproval: "pending",
});
const suppliedAssets = {
  "SF-01": asset(
    "SF-01",
    "supply-weekly-brief",
    "Illustrative seafood brand",
    "Weekly planning brief with four decision cards.",
    "Illustrative seafood planning brief with review-buy, reallocate, split and resequence decisions.",
    "Four decisions. The changed signal, the evidence and the next action to review.",
    "26% 58%",
    "/examples#supply-timing",
  ),
  "SF-02": asset(
    "SF-02",
    "supply-intervention",
    "Supply-timing concept",
    "Supply intervention capture showing a selected split response and recommendation.",
    "Synthetic supply intervention showing projected stock and the recommendation to split supply and reduce promotional demand.",
    "The selected response: split supply and reduce optional promotional demand. Read the evidence alongside the reviewed call.",
    "95% 48%",
    "/examples#supply-timing",
  ),
  "SF-03": asset(
    "SF-03",
    "supply-allocation",
    "Supply-timing concept",
    "Allocation view showing commitments, channel allocation and a recommendation.",
    "Synthetic allocation view comparing protected commitments, available stock and a reviewed allocation recommendation.",
    "Limited stock, visible commitments and the allocation choice to review.",
    "95% 62%",
    "/examples#supply-timing",
  ),
  "SF-04": asset(
    "SF-04",
    "supply-managed-cycle",
    "Supply-timing concept",
    "Managed planning cycle and division of responsibilities.",
    "Illustrative managed planning cycle from refreshed inputs through review, weekly brief and team decision.",
    "Maintained analysis, specialist review and a decision that stays with the client team.",
    "49% 48%",
    "/how-we-work",
  ),
  "SF-05": asset(
    "SF-05",
    "supply-responsibilities",
    "Supply-timing concept",
    "Existing systems, maintained analysis and client execution architecture.",
    "Illustrative diagram connecting existing operating inputs, maintained analysis and client planning ownership.",
    "A proposed decision layer around the systems and team already in place.",
    "57% 46%",
    "/planning-workspace",
  ),
  "IC-01": asset(
    "IC-01",
    "production-demand-evidence",
    "Illustrative ice cream brand",
    "Launch incrementality view with flavor mix evidence; not a separate repeat-order screen.",
    "Synthetic ice cream launch analysis comparing opening stock, additional demand and changes in the flavor mix.",
    "A launch is only part of the story. Examine the demand signal before increasing the next run.",
    "85% 50%",
    "/examples#production-mix",
  ),
  "IC-02": asset(
    "IC-02",
    "production-commitments",
    "Production-mix concept",
    "Production priorities table comparing existing and proposed flavor quantities.",
    "Synthetic ice cream production table comparing the starting flavor mix and proposed next-run mix.",
    "Compare a different flavor mix within the production commitment.",
    "72% 27%",
    "/examples#production-mix",
    1.05,
  ),
  "IC-03": asset(
    "IC-03",
    "production-detail",
    "Production-mix concept",
    "Selected-product demand and proposed production detail.",
    "Synthetic selected-product view showing demand evidence and proposed production quantities.",
    "Product-level evidence supporting the next-run comparison.",
    "93% 55%",
    "/examples#production-mix",
  ),
  "IC-04": asset(
    "IC-04",
    "production-cash-exposure",
    "Production-mix concept",
    "Cash calendar and production commitment timing.",
    "Synthetic cash calendar showing when production-related commitments leave the business.",
    "The timing of a commitment matters as well as its total cost.",
    "34% 53%",
    "/examples#production-mix",
  ),
  "GEN-01": asset(
    "GEN-01",
    null,
    "Illustrative planning brief",
    "Selectable six-field HTML brief from the PDF; no screenshot was supplied.",
    "Illustrative six-field planning brief with evidence, reviewed action, timing and trade-offs.",
    "A reusable decision brief. Illustrative content, with no asserted operating figures.",
    "50% 50%",
    "/examples#sample-brief",
  ),
} satisfies Record<string, ProofAsset>;
export type ProofId = keyof typeof suppliedAssets;
const withheld = new Set<ProofId>([
  "SF-01",
  "SF-02",
  "SF-03",
  "SF-05",
  "IC-02",
  "IC-03",
]);
export const proofAssets = Object.fromEntries(
  Object.entries(suppliedAssets).map(([id, value]) => [
    id,
    withheld.has(id as ProofId)
      ? {
          ...value,
          sourcePath:
            value.path?.replace("/images/proof/", "docs/proof-originals/") ??
            null,
          path: null,
          publicationStatus: "needs-recapture",
        }
      : value,
  ]),
) as Record<ProofId, ProofAsset>;
export const syntheticDisclosure =
  "Illustrative · Synthetic data · Not a client result";
export const briefFields = [
  {
    label: "What changed",
    value: "A demand or supply signal worth investigating.",
  },
  {
    label: "What we checked",
    value: "Availability, commitments and relevant context.",
  },
  {
    label: "Reviewed recommendation",
    value: "Make, buy, move, split, hold or investigate.",
  },
  {
    label: "Quantity & timing",
    value: "The size of the decision and deadline.",
  },
  {
    label: "Cash & service trade-off",
    value: "Cash commitment, feasibility and potential service exposure.",
  },
  {
    label: "What to validate next",
    value: "The evidence that could change the call.",
  },
] as const;
