"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { loadCalendlyWidget } from "@/lib/calendly";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function InlineCalendly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const url = siteConfig.calendar.url;

  useEffect(() => {
    const container = containerRef.current;
    if (!url || !container) return;
    let active = true;
    let iframe: HTMLIFrameElement | null = null;
    const ready = () => { if (active) { setStatus("ready"); window.clearTimeout(timeout); } };
    const timeout = window.setTimeout(() => { if (active) setStatus("error"); }, 15_000);
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com" || !iframe || event.source !== iframe.contentWindow) return;
      if (["calendly.event_type_viewed", "calendly.profile_page_viewed"].includes(event.data?.event)) ready();
      if (event.data?.event === "calendly.event_scheduled") {
        ready();
        trackEvent("booking_completed", { route: "/contact", ctaLocation: "inline-calendar" });
      }
    };
    window.addEventListener("message", onMessage);
    loadCalendlyWidget().then(() => {
      if (!active) return;
      const bookingUrl = new URL(url);
      bookingUrl.searchParams.set("primary_color", "4f49f3");
      bookingUrl.searchParams.set("text_color", "142139");
      bookingUrl.searchParams.set("background_color", "ffffff");
      window.Calendly!.initInlineWidget({ url: bookingUrl.toString(), parentElement: container, resize: false });
      iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.title = "Book a 30-minute conversation with ScaleSight";

      }
    }).catch(() => { if (active) { setStatus("error"); window.clearTimeout(timeout); } });
    return () => {
      active = false;
      window.clearTimeout(timeout);
      window.removeEventListener("message", onMessage);

      container.replaceChildren();
    };
  }, [url]);

  return <div className="inline-booking">
    <div className="booking-status" role="status" aria-live="polite">
      {!url ? <p>The booking calendar is unavailable. Email us to arrange a conversation.</p> : status === "loading" ? <p>Loading available times…</p> : status === "error" ? <p>The calendar could not load here. Open the booking page to choose a time.</p> : null}
    </div>
    {url && <div ref={containerRef} className="inline-booking-widget" hidden={status === "error"} />}
    <div className="booking-footer">
      <p>Booking is provided by Calendly. Read our <Link href="/privacy">Privacy Notice</Link>.</p>
      {url ? <a className="text-link" href={url} target="_blank" rel="noopener noreferrer" aria-label="Open booking page (opens in a new tab)" onClick={() => trackEvent("booking_link_click", { route: "/contact", ctaLocation: "inline-calendar-fallback" })}>Open booking page<ArrowUpRight size={15} aria-hidden="true"/></a> : <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>}
    </div>
  </div>;
}
