"use client";

import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { LocationMap } from "../../components/LocationMap";
import { companyLocation } from "../data";
import styles from "./contact.module.css";

type InquiryFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productRequirement: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof InquiryFormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialFormState: InquiryFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productRequirement: "",
  message: "",
  website: ""
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidInternationalPhone(value: string): boolean {
  const digitsOnly = value.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }
  return /^\+?[0-9()\-\s]{7,25}$/.test(value.trim());
}

function validateForm(values: InquiryFormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email.trim())) {
    errors.email = "Please enter a valid email format.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidInternationalPhone(values.phone.trim())) {
    errors.phone = "Use a valid international format, e.g. +1 415 555 0123.";
  }

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<InquiryFormState>(initialFormState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const startedAtRef = useRef<number>(Date.now());

  const missingRequired = useMemo(
    () => !form.name.trim() || !form.email.trim() || !form.phone.trim(),
    [form.name, form.email, form.phone]
  );

  function updateField(key: keyof InquiryFormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = event.target.name as keyof InquiryFormState;
    updateField(key, event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setFeedback("Please complete all required fields and fix invalid values.");
      return;
    }

    setStatus("submitting");
    setFeedback("Submitting your inquiry...");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          startedAt: startedAtRef.current
        })
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFeedback(
        result.message ||
          "Inquiry submitted successfully. Our team will contact you as soon as possible."
      );
      setForm(initialFormState);
      setErrors({});
      startedAtRef.current = Date.now();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Submission failed. Please try again later."
      );
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <div className={styles.headingWrap}>
          <p className={styles.eyebrow}>B2B Inquiry Form</p>
          <h1>Send Your Product Sourcing Request</h1>
          <p className={styles.intro}>
            Complete the form below and our sales team will follow up quickly. Required fields are
            clearly marked, and your submission is stored in our lead database for secure tracking.
          </p>
        </div>

        <div className={styles.mapBlock}>
          <LocationMap
            title="Visit Our Shanghai Office"
            address={companyLocation.address}
            viewUrl={companyLocation.googleMapsUrl}
            zoom={14}
          />
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
          <div className={styles.requiredInfo}>
            Fields marked with <span className={styles.requiredMark}>*</span> are required.
          </div>
          {missingRequired ? (
            <p className={styles.requiredAlert}>Please complete all required fields before submit.</p>
          ) : null}

          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="name">
                Name <span className={styles.requiredMark}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Sophia Chen"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              <p className={errors.name ? styles.errorHint : styles.hint}>
                {errors.name || "Enter your full name."}
              </p>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                Email <span className={styles.requiredMark}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="e.g. buyer@company.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              <p className={errors.email ? styles.errorHint : styles.hint}>
                {errors.email || "Use a business email for faster quotation support."}
              </p>
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">
                Phone <span className={styles.requiredMark}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="e.g. +1 415 555 0123"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
              />
              <p className={errors.phone ? styles.errorHint : styles.hint}>
                {errors.phone || "International number format is supported."}
              </p>
            </div>

            <div className={styles.field}>
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="e.g. ABC Baby Imports"
                value={form.company}
                onChange={handleChange}
              />
              <p className={styles.hint}>Optional: helps us prepare a better proposal.</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="country">Country / Region</label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                placeholder="e.g. United States"
                value={form.country}
                onChange={handleChange}
              />
              <p className={styles.hint}>Optional: used for logistics and compliance context.</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="productRequirement">Product Requirement</label>
              <input
                id="productRequirement"
                name="productRequirement"
                type="text"
                placeholder="e.g. Quiet Books, OEM logo, 5,000 units"
                value={form.productRequirement}
                onChange={handleChange}
              />
              <p className={styles.hint}>Optional: key product details, MOQ target, and timeline.</p>
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your target market, channel, and custom requirements."
                value={form.message}
                onChange={handleChange}
              />
              <p className={styles.hint}>Optional: add anything your sourcing team cares about.</p>
            </div>
          </div>

          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
            </button>
            <p className={styles.spamNote}>Anti-spam protection is enabled.</p>
          </div>

          {feedback ? (
            <p
              className={`${styles.feedback} ${
                status === "success"
                  ? styles.feedbackSuccess
                  : status === "error"
                    ? styles.feedbackError
                    : styles.feedbackNeutral
              }`}
              role={status === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
