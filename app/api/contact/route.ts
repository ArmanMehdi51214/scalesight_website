import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type Inquiry = {
  name: string;
  email: string;
  brand: string;
  website: string;
  role: string;
  channels: string[];
  decision: string;
  intent: "planning" | "pilot" | "partner";
};

const requests = new Map<string, number[]>();
const submissions = new Map<string, number>();
const windowMs = 15 * 60 * 1000;
const allowedChannels = new Set(["DTC", "Retail", "Wholesale", "Marketplace", "Other"]);

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, max) : "";
}

function response(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return response(403, { ok: false, error: "origin_rejected" });
  const now = Date.now();
  const forwarded = request.headers.get("x-forwarded-for")?.split(",").map((part) => part.trim()).filter(Boolean) || [];
  const ip = request.headers.get("x-real-ip") || forwarded.at(-1) || "unknown";
  const recent = (requests.get(ip) || []).filter((time) => now - time < windowMs);
  if (recent.length >= 5) return response(429, { ok: false, error: "rate_limited" });
  requests.set(ip, [...recent, now]);

  let body: Record<string, unknown>;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).byteLength > 20_000) return response(413, { ok: false, error: "too_large" });
    body = JSON.parse(text);
  } catch {
    return response(400, { ok: false, error: "invalid_request" });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return response(400, { ok: false, error: "invalid_request" });

  if (clean(body.companyFax, 200)) return response(400, { ok: false, error: "invalid_request" });

  const inquiry: Inquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 254).toLowerCase(),
    brand: clean(body.brand, 160),
    website: clean(body.website, 300),
    role: clean(body.role, 120),
    channels: Array.isArray(body.channels) ? body.channels.filter((item): item is string => typeof item === "string" && allowedChannels.has(item)) : [],
    decision: clean(body.decision, 3000),
    intent: body.intent === "pilot" || body.intent === "partner" ? body.intent : "planning",
  };
  const errors: Record<string, string> = {};
  if (!inquiry.name) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) errors.email = "Enter a valid email address.";
  if (!inquiry.brand) errors.brand = "Enter your brand or company.";
  if (inquiry.website) {
    try {
      const parsed = new URL(/^https?:\/\//i.test(inquiry.website) ? inquiry.website : `https://${inquiry.website}`);
      if (!parsed.hostname.includes(".")) throw new Error("invalid host");
      inquiry.website = parsed.toString();
    } catch {
      errors.website = "Enter a valid website address.";
    }
  }
  if (Object.keys(errors).length) return response(422, { ok: false, errors });

  const idempotencyKey = clean(request.headers.get("idempotency-key"), 100);
  if (!idempotencyKey) return response(400, { ok: false, error: "missing_key" });
  for (const [key, time] of submissions) if (now - time > windowMs) submissions.delete(key);
  const submissionKey = `${ip}:${idempotencyKey}`;
  if (submissions.has(submissionKey)) return response(409, { ok: false, error: "duplicate" });
  submissions.set(submissionKey, now);

  const stub = process.env.CONTACT_SUBMISSION_MODE === "stub" && process.env.NODE_ENV !== "production";
  if (!stub && (!siteConfig.notificationDestination || process.env.PRIVACY_NOTICE_APPROVED !== "true")) {
    submissions.delete(submissionKey);
    console.error("Contact delivery is unavailable: approved privacy notice or notification destination is missing.");
    return response(503, { ok: false, error: "delivery_unavailable" });
  }

  if (stub && process.env.CONTACT_STUB_RESULT === "failure") {
    submissions.delete(submissionKey);
    console.error("Local contact stub simulated delivery failure.");
    return response(502, { ok: false, error: "delivery_failed" });
  }

  if (!stub) {
    try {
      const result = await fetch(siteConfig.notificationDestination!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
        signal: AbortSignal.timeout(8000),
      });
      if (!result.ok) throw new Error(`notification endpoint returned ${result.status}`);
    } catch (error) {
      console.error("Contact delivery failed.", error);
      submissions.delete(submissionKey);
      return response(502, { ok: false, error: "delivery_failed" });
    }
  }

  return response(200, { ok: true });
}
