"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  salesChannels,
  validateEnquiry,
  type FieldErrors,
} from "@/lib/contact-validation";
export default function ContactForm({
  intent,
  email,
  bookingUrl,
}: {
  intent: string;
  email: string;
  bookingUrl: string;
}) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [received, setReceived] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const values = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(values),
      channels: values.getAll("channels"),
    };
    const validation = validateEnquiry(payload);
    setErrors(validation.errors);
    setError("");
    if (Object.keys(validation.errors).length) {
      const key = Object.keys(validation.errors)[0];
      form.current?.querySelector<HTMLInputElement>(`[name="${key}"]`)?.focus();
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json();
      if (!response.ok || body.received !== true) {
        setErrors(body.errors || {});
        setError(
          body.error ||
            "We could not send your enquiry. Please try again or contact us directly by email.",
        );
      } else {
        setReceived(true);
      }
    } catch {
      setError(
        "We could not send your enquiry. Please try again or contact us directly by email.",
      );
    } finally {
      setPending(false);
    }
  }
  if (received)
    return (
      <div className="success-panel" role="status">
        <h3>Thank you - your enquiry has been received.</h3>
        {bookingUrl ? (
          <>
            <p>You can now choose a time for a conversation.</p>
            <a
              className="button"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Choose a conversation time{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="scope-note">
              Your enquiry is received. A meeting is booked only after the
              booking provider confirms your chosen time.
            </p>
          </>
        ) : (
          <p>
            Online booking is currently unavailable. We will respond to your
            enquiry to agree the next step.
          </p>
        )}
      </div>
    );
  return (
    <form
      ref={form}
      onSubmit={submit}
      className="contact-form"
      noValidate
      aria-busy={pending}
    >
      <input type="hidden" name="intent" value={intent} />
      <div hidden aria-hidden="true">
        <input
          name="companyContact"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {(
        [
          {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            autocomplete: "name",
            limit: 120,
          },
          {
            name: "email",
            label: "Work email",
            type: "email",
            required: true,
            autocomplete: "email",
            limit: 254,
          },
          {
            name: "company",
            label: "Brand or company",
            type: "text",
            required: true,
            autocomplete: "organization",
            limit: 160,
          },
          {
            name: "website",
            label: "Website",
            type: "url",
            required: false,
            autocomplete: "url",
            limit: 500,
          },
          {
            name: "role",
            label: "Role",
            type: "text",
            required: false,
            autocomplete: "organization-title",
            limit: 120,
          },
        ] as const
      ).map((field) => (
        <div className="form-field" key={field.name}>
          <label htmlFor={`contact-${field.name}`}>
            {field.label}
            {field.required ? (
              <span aria-hidden="true"> *</span>
            ) : (
              <span className="optional">Optional</span>
            )}
          </label>
          <input
            id={`contact-${field.name}`}
            name={field.name}
            type={field.type}
            required={field.required}
            autoComplete={field.autocomplete}
            maxLength={field.limit}
            aria-invalid={!!errors[field.name]}
            aria-describedby={
              errors[field.name] ? `${field.name}-error` : undefined
            }
          />
          {errors[field.name] && (
            <p className="field-error" id={`${field.name}-error`} role="alert">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}
      <fieldset className="channel-field form-wide">
        <legend>
          Sales channels <span className="optional">Optional</span>
        </legend>
        <div className="channel-options">
          {salesChannels.map((channel) => (
            <label key={channel}>
              <input type="checkbox" name="channels" value={channel} />
              {channel}
            </label>
          ))}
        </div>
        {errors.channels && (
          <p className="field-error" role="alert">
            {errors.channels}
          </p>
        )}
      </fieldset>
      <div className="form-field form-wide">
        <label htmlFor="contact-decision">
          What decision is coming up? <span className="optional">Optional</span>
        </label>
        <textarea
          id="contact-decision"
          name="decision"
          maxLength={3000}
          rows={4}
          aria-invalid={!!errors.decision}
          aria-describedby={errors.decision ? "decision-error" : undefined}
        />
        {errors.decision && (
          <p id="decision-error" className="field-error" role="alert">
            {errors.decision}
          </p>
        )}
      </div>
      <p className="privacy-line form-wide">
        We use these details to respond to your enquiry. Read our{" "}
        <Link href="/privacy">Privacy Notice</Link>.
      </p>
      {error && (
        <div className="form-alert form-wide" role="alert">
          {error}
          {email && (
            <>
              {" "}
              <a href={`mailto:${email}`}>Email {email}</a>
            </>
          )}
        </div>
      )}
      <button type="submit" className="button form-wide" disabled={pending}>
        {pending ? "Sending enquiry…" : "Send planning enquiry"}
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <div className="confidential-note form-wide">
        <strong>Please do not send confidential records in this form.</strong>
        <p>
          We first discuss the question and agree an appropriate method for
          sharing any operational data required for a scoped engagement.
        </p>
      </div>
    </form>
  );
}
