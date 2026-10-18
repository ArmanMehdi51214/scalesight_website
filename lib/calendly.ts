"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; prefill: { name: string; email: string } }) => void;
      closePopupWidget?: () => void;
    };
  }
}

let widgetPromise: Promise<void> | undefined;

export function loadCalendlyWidget(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("Calendly is only available in the browser."));
  if (window.Calendly) return Promise.resolve();
  if (widgetPromise) return widgetPromise;

  widgetPromise = new Promise<void>((resolve, reject) => {
    const existingStyle = document.querySelector<HTMLLinkElement>('link[data-calendly-widget="true"]');
    if (!existingStyle) {
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "https://assets.calendly.com/assets/external/widget.css";
      style.dataset.calendlyWidget = "true";
      document.head.appendChild(style);
    }

    let settled = false;
    let timeout = 0;
    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      if (error) {
        widgetPromise = undefined;
        reject(error);
      } else {
        resolve();
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-calendly-widget="true"]');
    if (existingScript) {
      timeout = window.setTimeout(() => finish(new Error("Calendly load timed out.")), 8000);
      existingScript.addEventListener("load", () => window.Calendly ? finish() : finish(new Error("Calendly did not initialize.")), { once: true });
      existingScript.addEventListener("error", () => finish(new Error("Calendly failed to load.")), { once: true });
      if (window.Calendly) finish();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyWidget = "true";
    timeout = window.setTimeout(() => finish(new Error("Calendly load timed out.")), 8000);
    script.onload = () => window.Calendly ? finish() : finish(new Error("Calendly did not initialize."));
    script.onerror = () => finish(new Error("Calendly failed to load."));
    document.head.appendChild(script);
  });

  return widgetPromise;
}
