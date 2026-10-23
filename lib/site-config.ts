export const siteConfig = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "arman@scalesight.org",
  notificationDestination: process.env.CONTACT_NOTIFICATION_DESTINATION || undefined,
  calendar: {
    url: getCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL),
    durationLabel: "30-minute discovery call",
  },
  partners: {
    active: process.env.NEXT_PUBLIC_PARTNERS_ACTIVE !== "false",
  },
  exampleDemoLinks: {
    supplyTiming: {
      enabled: false,
      url: "https://scalesight-fishwife-demo.vercel.app/po-intervention",
      label: "Open illustrative workspace",
    },
    launchDemand: {
      enabled: false,
      url: "https://scalesight-alecs-demo.vercel.app/incrementality",
      label: "Open illustrative workspace",
    },
    sizeDepth: {
      enabled: false,
      url: "https://scalesight-understatement-demo.vercel.app/",
      label: "Open illustrative workspace",
    },
  },
  analytics: {
    enabled:
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" &&
      process.env.NEXT_PUBLIC_PRIVACY_NOTICE_APPROVED === "true",
  },
  staging: process.env.NEXT_PUBLIC_SITE_ENV === "staging" || process.env.VERCEL_ENV === "preview",
  locationText: "Lahore, Pakistan",
  sampleBriefReviewDate: process.env.NEXT_PUBLIC_SAMPLE_BRIEF_REVIEW_DATE || undefined,
} as const;

function getCalendlyUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "calendly.com" && url.pathname.length > 1
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}
