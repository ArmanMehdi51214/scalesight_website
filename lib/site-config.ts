export const siteConfig = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
  notificationDestination: process.env.CONTACT_NOTIFICATION_DESTINATION || undefined,
  calendar: {
    url:
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/kazmiarmanmehdi/30min",
    durationLabel: "30-minute discovery call",
  },
  partners: {
    active: process.env.NEXT_PUBLIC_PARTNERS_ACTIVE !== "false",
  },
  exampleDemoLinks: {
    supplyTiming: { enabled: false, url: "", label: "" },
    launchDemand: { enabled: false, url: "", label: "" },
    sizeDepth: { enabled: false, url: "", label: "" },
  },
  analytics: {
    enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true",
  },
  locationText: "Lahore, PK",
  sampleBriefReviewDate: process.env.NEXT_PUBLIC_SAMPLE_BRIEF_REVIEW_DATE || undefined,
} as const;
