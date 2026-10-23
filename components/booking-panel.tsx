"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { loadCalendlyWidget } from "@/lib/calendly";
import { trackEvent } from "@/lib/analytics";

const unavailableMessage = "Your enquiry has been received. The booking calendar is unavailable here. Open the booking page or email us to arrange a time.";

export default function BookingPanel({ name, email }: { name: string; email: string }) {
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [booked, setBooked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const url = siteConfig.calendar.url;

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event === "calendly.popup_closed") {
        buttonRef.current?.focus();
        return;
      }
      if (event.data?.event !== "calendly.event_scheduled") return;
      window.Calendly?.closePopupWidget?.();
      setBooked(true);
      trackEvent("booking_completed", { route: "/contact", ctaLocation: "booking-panel" });
      buttonRef.current?.focus();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  async function openCalendar() {
    if (!url || loading) return;
    setUnavailable(false);
    setLoading(true);
    trackEvent("booking_link_click", { route: "/contact", ctaLocation: "booking-panel" });
    try {
      await loadCalendlyWidget();
      const calendlyUrl = new URL(url);
      window.Calendly?.initPopupWidget({ url: calendlyUrl.toString(), prefill: { name, email } });
      if (!window.Calendly) throw new Error("Calendly is unavailable.");
    } catch {
      setUnavailable(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="surface-card rounded-3xl p-6 md:p-9" aria-labelledby="enquiry-success">
      <h2 id="enquiry-success" className="text-2xl font-semibold text-white">Thanks - your enquiry has been received. You can now choose a time for a conversation.</h2>
      {url ? <div className="mt-6 flex flex-wrap gap-3">
        <button ref={buttonRef} className="primary-button min-h-11" type="button" onClick={openCalendar} disabled={loading || booked}>
          Choose a 30-minute conversation
        </button>
        <a className="secondary-button min-h-11" href={url} target="_blank" rel="noopener noreferrer" aria-label="Open the booking page (opens in a new tab)" onClick={() => trackEvent("booking_link_click", { route: "/contact", ctaLocation: "booking-fallback" })}>Open the booking page</a>
      </div> : null}
      <div className="mt-4 text-sm text-[var(--text-secondary)]" aria-live="polite">
        {booked ? <p><span className="font-semibold text-white">Meeting booked</span></p> : null}
        {unavailable || !url ? <p>{unavailableMessage}{siteConfig.contactEmail ? <> <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</> : null}</p> : null}
      </div>
    </section>
  );
}
