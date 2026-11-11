import { validateEnquiry } from "@/lib/contact-validation";
export const runtime = "nodejs";
const reply = (body: object, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const expectedHost = request.headers.get("host") || new URL(request.url).host;
  let sameOrigin = false;
  try {
    sameOrigin =
      !!origin &&
      new URL(origin).host === expectedHost &&
      ["https:", "http:"].includes(new URL(origin).protocol);
  } catch {
    /* Invalid origins are rejected. */
  }
  if (!sameOrigin || request.headers.get("sec-fetch-site") === "cross-site")
    return reply({ error: "Please send the enquiry from this website." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json"))
    return reply({ error: "Unsupported form format." }, 415);
  if (Number(request.headers.get("content-length")) > 16000)
    return reply({ error: "The enquiry is too long." }, 413);
  let payload: unknown;
  try {
    const text = await request.text();
    if (text.length > 16000)
      return reply({ error: "The enquiry is too long." }, 413);
    payload = JSON.parse(text);
  } catch {
    return reply({ error: "The enquiry could not be read." }, 400);
  }
  const { data, errors } = validateEnquiry(payload);
  if (data.companyContact)
    return reply({ error: "The enquiry could not be sent." }, 400);
  if (Object.keys(errors).length) return reply({ errors }, 422);
  const endpoint = process.env.CONTACT_DELIVERY_URL;
  const token = process.env.CONTACT_DELIVERY_TOKEN;
  const inbox = process.env.CONTACT_DELIVERY_INBOX;
  if (!endpoint || !token || !inbox)
    return reply(
      {
        error:
          "We could not send your enquiry. Please try again or contact us directly by email.",
      },
      503,
    );
  try {
    if (new URL(endpoint).protocol !== "https:")
      throw new Error("Invalid adapter configuration");
    // Adapter must durably accept the message and explicitly confirm receipt.
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to: inbox,
        enquiry: {
          name: data.name,
          email: data.email,
          company: data.company,
          website: data.website,
          role: data.role,
          channels: data.channels,
          decision: data.decision,
          intent: data.intent,
        },
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    const result: unknown = await response.json();
    if (
      !result ||
      typeof result !== "object" ||
      !("accepted" in result) ||
      result.accepted !== true
    )
      throw new Error("Receipt not confirmed");
    return reply({ received: true }, 200);
  } catch {
    return reply(
      {
        error:
          "We could not send your enquiry. Please try again or contact us directly by email.",
      },
      502,
    );
  }
}
