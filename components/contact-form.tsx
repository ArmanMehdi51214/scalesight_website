"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

type Intent = "planning" | "pilot" | "partner";
type FormValues = { name: string; email: string; brand: string; website: string; role: string; channels: string[]; decision: string; companyFax: string };
type Status = "idle" | "sending" | "success" | "failure";
const initialValues: FormValues = { name: "", email: "", brand: "", website: "", role: "", channels: [], decision: "", companyFax: "" };

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

export default function ContactForm({ intent }: { intent: Intent }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [calendarUnavailable, setCalendarUnavailable] = useState(false);
  const [meetingBooked, setMeetingBooked] = useState(false);
  const sending = useRef(false);
  const started = useRef(false);
  const partner = intent === "partner";
  const durationMatches = siteConfig.calendar.durationLabel === "30-minute discovery call";
  const bookingLabel = `Choose a ${durationMatches ? "30-minute " : ""}conversation`;

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      let host = "";
      try { host = new URL(event.origin).hostname; } catch { return; }
      if (!(host === "calendly.com" || host.endsWith(".calendly.com")) || event.data?.event !== "calendly.event_scheduled") return;
      setMeetingBooked(true);
      trackEvent("booking_completed", { route: "/contact", ctaLocation: "booking-panel" });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = values.email.trim() ? "Enter a valid email address." : "Enter your email address.";
    if (!values.brand.trim()) nextErrors.brand = partner ? "Enter your company." : "Enter your brand or company.";
    if (values.website.trim()) {
      try {
        const website = /^https?:\/\//i.test(values.website) ? values.website : `https://${values.website}`;
        if (!new URL(website).hostname.includes(".")) throw new Error();
      } catch { nextErrors.website = "Enter a valid website address."; }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      return;
    }
    sending.current = true;
    setStatus("sending");
    const idempotencyKey = crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify({ ...values, intent }),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        setStatus("success");
        trackEvent("contact_submit_success", { route: "/contact", ctaLocation: "contact-form" });
      } else {
        setErrors(result.errors || {});
        setStatus("failure");
      }
    } catch {
      setStatus("failure");
    } finally {
      sending.current = false;
    }
  }

  async function openCalendar() {
    setCalendarUnavailable(false);
    trackEvent("booking_link_click", { route: "/contact", ctaLocation: "booking-panel" });
    try {
      if (!window.Calendly) {
        if (!document.querySelector('link[data-calendly-widget="true"]')) {
          const stylesheet = document.createElement("link");
          stylesheet.rel = "stylesheet";
          stylesheet.href = "https://assets.calendly.com/assets/external/widget.css";
          stylesheet.dataset.calendlyWidget = "true";
          document.head.appendChild(stylesheet);
        }
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector<HTMLScriptElement>('script[data-calendly-widget="true"]');
          if (existing) {
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error("calendar unavailable")), { once: true });
            window.setTimeout(() => window.Calendly ? resolve() : reject(new Error("calendar unavailable")), 5000);
            return;
          }
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.dataset.calendlyWidget = "true";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("calendar unavailable"));
          document.head.appendChild(script);
          window.setTimeout(() => window.Calendly ? resolve() : reject(new Error("calendar unavailable")), 5000);
        });
      }
      if (!window.Calendly) throw new Error("calendar unavailable");
      window.Calendly.initPopupWidget({ url: siteConfig.calendar.url });
    } catch {
      setCalendarUnavailable(true);
    }
  }

  const fieldProps = (key: keyof FormValues) => ({
    id: key,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onFocus: () => {
      if (!started.current) {
        started.current = true;
        trackEvent("contact_form_start", { route: "/contact", ctaLocation: "contact-form" });
      }
    },
  });

  if (status === "success") return (
    <section className="surface-card rounded-3xl p-6 md:p-9" aria-labelledby="enquiry-success">
      <h2 id="enquiry-success" className="text-2xl font-semibold text-white">Thanks - your enquiry has been received. You can now choose a time for a conversation.</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="primary-button min-h-11" type="button" onClick={openCalendar}>{bookingLabel}</button>
        <a className="secondary-button min-h-11" href={siteConfig.calendar.url} target="_blank" rel="noreferrer" onClick={() => trackEvent("booking_link_click", { route: "/contact", ctaLocation: "booking-panel" })}>Open booking page</a>
      </div>
      {meetingBooked ? <p className="mt-4 font-semibold text-white" role="status">Meeting booked</p> : null}
      {calendarUnavailable ? <p className="mt-4 text-sm text-[var(--text-secondary)]" role="status">Your enquiry has been received. The booking calendar is unavailable here. Open the booking page or email us to arrange a time.</p> : null}
    </section>
  );

  const field = (key: keyof FormValues, label: string, control: ReactNode) => <div className="field-group" key={key}><label htmlFor={key}>{label}{["name", "email", "brand"].includes(key) ? <span aria-hidden="true"> *</span> : null}</label>{control}{errors[key] ? <p id={`${key}-error`} className="text-sm text-rose-300" role="alert">{errors[key]}</p> : null}</div>;

  return <form noValidate onSubmit={submit} className="grid gap-5 md:grid-cols-2" aria-busy={status === "sending"}>
    <p className="sr-only" aria-live="polite">{status === "sending" ? "Sending…" : ""}</p>
    <div className="md:col-span-2" aria-live="polite" role={status === "failure" || Object.keys(errors).length ? "alert" : "status"}>
      {Object.values(errors).filter(Boolean).length ? <div className="mb-4 rounded-xl border border-rose-400/40 p-4 text-sm text-rose-200"><p className="font-semibold">Please check the following:</p><ul className="mt-2 list-disc pl-5">{Object.entries(errors).filter(([, message]) => message).map(([key, message]) => <li key={key}><a className="underline" href={`#${key}`}>{message}</a></li>)}</ul></div> : null}
      {status === "failure" ? <p className="mb-4 text-sm text-rose-200">We could not send your enquiry. Please try again or email us directly.</p> : null}
    </div>
    {field("name", "Name", <input {...fieldProps("name")} className="field-input" name="name" autoComplete="name" placeholder="e.g. Sam Lee" value={values.name} onChange={(event) => update("name", event.target.value)} required />)}
    {field("email", "Work email", <input {...fieldProps("email")} className="field-input" name="email" type="email" autoComplete="email" placeholder="e.g. sam@brand.com" value={values.email} onChange={(event) => update("email", event.target.value)} required />)}
    {field("brand", partner ? "Company" : "Brand or company", <input {...fieldProps("brand")} className="field-input" name="brand" autoComplete="organization" placeholder="e.g. Your brand" value={values.brand} onChange={(event) => update("brand", event.target.value)} required />)}
    {field("website", "Website", <input {...fieldProps("website")} className="field-input" name="website" type="text" autoComplete="url" inputMode="url" placeholder="e.g. brand.com" value={values.website} onChange={(event) => update("website", event.target.value)} />)}
    {field("role", "Your role", <input {...fieldProps("role")} className="field-input" name="role" placeholder="e.g. Founder or Operations lead" value={values.role} onChange={(event) => update("role", event.target.value)} />)}
    <fieldset className="field-group"><legend>Sales channels</legend><div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">{["DTC", "Retail", "Wholesale", "Marketplace", "Other"].map((channel) => <label className="inline-flex min-h-11 items-center gap-2" key={channel}><input type="checkbox" checked={values.channels.includes(channel)} onChange={(event) => update("channels", event.target.checked ? [...values.channels, channel] : values.channels.filter((item) => item !== channel))} />{channel}</label>)}</div></fieldset>
    {field("decision", partner ? "What support does your client need?" : "What decision is coming up?", <textarea {...fieldProps("decision")} className="field-input min-h-32" name="decision" placeholder="e.g. Next production run, timing and the choice you are weighing." value={values.decision} onChange={(event) => update("decision", event.target.value)} />)}
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"><label htmlFor="companyFax">Fax</label><input id="companyFax" name="companyFax" tabIndex={-1} autoComplete="off" value={values.companyFax} onChange={(event) => update("companyFax", event.target.value)} /></div>
    <input type="hidden" name="intent" value={intent} />
    <div className="md:col-span-2">
      <p className="text-sm leading-6 text-[var(--text-secondary)]">We use these details to respond to your enquiry. Read our <Link className="underline underline-offset-4" href="/privacy">Privacy Notice</Link>.</p>
      <button className="primary-button mt-5 min-h-11 w-full justify-center md:w-auto" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send planning enquiry"}</button>
    </div>
  </form>;
}
