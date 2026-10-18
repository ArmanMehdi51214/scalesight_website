"use client";

import { siteConfig } from "@/lib/site-config";

export type AnalyticsEvent = "example_open" | "pilot_cta_click" | "contact_form_start" | "contact_submit_success" | "booking_link_click" | "booking_completed";

export function trackEvent(event: AnalyticsEvent, details: { route?: string; ctaLocation?: string; exampleId?: string } = {}) {
  if (!siteConfig.analytics.enabled || typeof window === "undefined") return;
  const environment = siteConfig.staging ? "staging" : process.env.NODE_ENV === "production" ? "production" : "test";
  window.dispatchEvent(new CustomEvent("scalesight:analytics", {
    detail: { event, route: details.route || window.location.pathname, ctaLocation: details.ctaLocation, exampleId: details.exampleId, trafficType: environment },
  }));
}
