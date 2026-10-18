"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsListener() {
  const pathname = usePathname();
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const ctaLocation = anchor.closest("header") ? "header" : anchor.closest("footer") ? "footer" : "main";
      if (href.startsWith("/examples")) trackEvent("example_open", { route: pathname, ctaLocation, exampleId: anchor.getAttribute("data-example-id") || "examples" });
      if (href.startsWith("/30-day-planning-pilot")) trackEvent("pilot_cta_click", { route: pathname, ctaLocation });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);
  return null;
}
