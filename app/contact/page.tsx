"use client";

import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import styles from "./contact.module.css";

type InquiryFormState = {
  name: string; email: string; phone: string; company: string; country: string;
  buyerType: string; productRequirement: string; quantity: string; message: string; website: string;
};
type FieldErrors = Partial<Record<keyof InquiryFormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialFormState: InquiryFormState = {
  name: "", email: "", phone: "", company: "", country: "", buyerType: "",
  productRequirement: "", quantity: "", message: "", website: ""
};
const requiredFields: Array<keyof InquiryFormState> = [
  "name", "email", "country", "buyerType", "productRequirement", "message"
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function isValidPhone(value: string) {
  if (!value.trim()) return true;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15 && /^\+?[0-9()\-\s]{7,25}$/.test(value);
}
function validateForm(values: InquiryFormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!isValidEmail(values.email.trim())) errors.email = "Please enter a valid email.";
  if (!values.country.trim()) errors.country = "Please enter your country or region.";
  if (!values.productRequirement.trim()) errors.productRequirement = "Please tell us which product you need.";
  if (!values.message.trim()) errors.message = "Please share your sourcing requirements.";
  if (!isValidPhone(values.phone)) errors.phone = "Use a valid international number.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const startedAtRef = useRef(Date.now());
  const missingRequired = useMemo(
    () => requiredFields.some((field) => !form[field].trim()), [form]
  );

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = event.target.name as keyof InquiryFormState;
    setForm((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status !== "idle") { setStatus("idle"); setFeedback(""); }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors); setStatus("error"); setFeedback("Please complete the required fields."); return;
    }
    setStatus("submitting"); setFeedback("Submitting your inquiry...");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePath: "/contact", startedAt: startedAtRef.current })
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!response.ok || !result?.ok) throw new Error(result?.message || "Submission failed. Please try again.");
      setForm(initialFormState); setErrors({}); setStatus("success");
      setFeedback(result.message || "Inquiry submitted successfully."); startedAtRef.current = Date.now();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Submission failed. Please email real@realbaby.cn.");
    }
  }

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "e.g. Sophia Chen", required: true },
    { name: "email", label: "Business Email", type: "email", placeholder: "e.g. buyer@company.com", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. +1 415 555 0123", required: false },
    { name: "company", label: "Company Name", type: "text", placeholder: "e.g. ABC Baby Imports", required: false },
    { name: "country", label: "Country / Region", type: "text", placeholder: "e.g. United States", required: true },
    { name: "buyerType", label: "Sales Channel / Buyer Type", type: "text", placeholder: "e.g. Importer, retailer, DTC brand", required: true },
    { name: "productRequirement", label: "Product Requirement", type: "text", placeholder: "e.g. Quiet Books with OEM logo", required: true },
    { name: "quantity", label: "Expected Quantity", type: "text", placeholder: "e.g. 3,000 pieces", required: false }
  ] as const;

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.container}>
          <div className={styles.headingWrap}>
            <p className={styles.eyebrow}>B2B Product Inquiry</p>
            <h1>Tell us what you want to build.</h1>
            <p className={styles.intro}>Share your product direction, market, channel, and expected quantity. Our team will review the request and reply with practical next steps.</p>
          </div>
          <div className={styles.directContact}>
            <div><strong>Prefer direct contact?</strong><span>Monday to Friday · Shanghai, China</span></div>
            <a href="mailto:real@realbaby.cn">real@realbaby.cn</a>
            <a href="https://wa.me/8617317800686" target="_blank" rel="noreferrer">WhatsApp +86 173 1780 0686</a>
          </div>
          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            <p className={styles.requiredInfo}>Fields marked with <span className={styles.requiredMark}>*</span> are required.</p>
            {missingRequired ? <p className={styles.requiredAlert}>Complete the required details for a useful quotation.</p> : null}
            <div className={styles.grid}>
              {fields.map((field) => {
                const name = field.name as keyof InquiryFormState;
                return (
                  <div className={styles.field} key={field.name}>
                    <label htmlFor={field.name}>{field.label} {field.required ? <span className={styles.requiredMark}>*</span> : null}</label>
                    <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} value={form[name]} onChange={handleChange} aria-invalid={Boolean(errors[name])} />
                    {errors[name] ? <p className={styles.errorHint}>{errors[name]}</p> : null}
                  </div>
                );
              })}
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="message">Message <span className={styles.requiredMark}>*</span></label>
                <textarea id="message" name="message" rows={6} placeholder="Target market, product features, packaging preferences, and timeline..." value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
                {errors.message ? <p className={styles.errorHint}>{errors.message}</p> : null}
              </div>
            </div>
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>{status === "submitting" ? "Submitting..." : "Submit Inquiry"}</button>
              <p className={styles.spamNote}>Your details are used only to answer this inquiry.</p>
            </div>
            {feedback ? (
              <p className={`${styles.feedback} ${status === "success" ? styles.feedbackSuccess : status === "error" ? styles.feedbackError : styles.feedbackNeutral}`} role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>
            ) : null}
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
