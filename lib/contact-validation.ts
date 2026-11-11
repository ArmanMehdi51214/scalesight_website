export const salesChannels = [
  "DTC",
  "Retail",
  "Wholesale",
  "Marketplace",
  "Other",
] as const;
export type Enquiry = {
  name: string;
  email: string;
  company: string;
  website: string;
  role: string;
  channels: string[];
  decision: string;
  intent: string;
  companyContact: string;
};
export type FieldErrors = Partial<Record<keyof Enquiry, string>>;
export function validateEnquiry(value: unknown): {
  data: Enquiry;
  errors: FieldErrors;
} {
  const source =
    value && typeof value === "object"
      ? (value as Record<string, unknown>)
      : {};
  const get = (key: string) =>
    typeof source[key] === "string" ? (source[key] as string).trim() : "";
  const data: Enquiry = {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    website: get("website"),
    role: get("role"),
    channels: Array.isArray(source.channels)
      ? source.channels.filter((v): v is string => typeof v === "string")
      : [],
    decision: get("decision"),
    intent: get("intent"),
    companyContact: get("companyContact"),
  };
  const errors: FieldErrors = {};
  if (!data.name || data.name.length > 120)
    errors.name = "Enter your name (up to 120 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)
    errors.email = "Enter a valid work email address.";
  if (!data.company || data.company.length > 160)
    errors.company = "Enter your brand or company (up to 160 characters).";
  if (data.website) {
    try {
      const url = new URL(data.website);
      if (
        !["https:", "http:"].includes(url.protocol) ||
        url.username ||
        url.password ||
        data.website.length > 500
      )
        throw new Error();
    } catch {
      errors.website =
        "Enter a complete website address beginning with https://.";
    }
  }
  if (data.role.length > 120)
    errors.role = "Keep your role under 120 characters.";
  if (data.decision.length > 3000)
    errors.decision = "Keep your decision description under 3,000 characters.";
  if (
    data.channels.some((x) => !salesChannels.some((c) => c === x)) ||
    data.channels.length > 5
  )
    errors.channels = "Choose from the listed sales channels.";
  if (!["", "pilot", "partner"].includes(data.intent))
    errors.intent = "Choose a supported enquiry type.";
  return { data, errors };
}
