"use client";

import { FormEvent, useRef, useState } from "react";
import styles from "../app/home.module.css";

type Status = "idle" | "submitting" | "success" | "error";

function currentAttribution() {
  const source = new URLSearchParams(window.location.search);
  const attribution = new URLSearchParams();
  source.forEach((value, key) => {
    if (key.startsWith("utm_") || key === "gclid" || key === "fbclid") attribution.set(key, value);
  });
  return attribution.toString();
}

export function HomeInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const startedAt = useRef(Date.now());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setFeedback("Sending your project brief...");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          country: data.get("country"),
          buyerType: data.get("buyerType"),
          productRequirement: data.get("productRequirement"),
          quantity: data.get("quantity"),
          message: data.get("message"),
          utm: currentAttribution(),
          website: data.get("website"),
          sourcePath: "/#inquiry",
          startedAt: startedAt.current
        })
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!response.ok || !result?.ok) throw new Error(result?.message || "Submission failed. Please try again.");
      setStatus("success");
      setFeedback(result.message || "Thank you. Our team will contact you soon.");
      form.reset();
      startedAt.current = Date.now();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Please email real@realbaby.cn.");
    }
  }

  return (
    <form className={styles.inquiryForm} onSubmit={submit}>
      <div className={styles.formRow}>
        <label>Name *<input name="name" required placeholder="Your name" /></label>
        <label>Business Email *<input name="email" required type="email" placeholder="buyer@company.com" /></label>
      </div>
      <div className={styles.formRow}>
        <label>Country / Region *<input name="country" required placeholder="Target market" /></label>
        <label>Buyer Type *<select name="buyerType" required defaultValue=""><option value="" disabled>Select channel</option><option>Importer / Distributor</option><option>Baby Brand</option><option>Retail Chain</option><option>E-commerce Seller</option><option>Education Channel</option><option>Gift / Subscription Box</option></select></label>
      </div>
      <div className={styles.formRow}>
        <label>Product Requirement *<input name="productRequirement" required placeholder="e.g. OEM quiet book" /></label>
        <label>Expected Quantity<input name="quantity" placeholder="e.g. 2,000 pcs" /></label>
      </div>
      <div className={styles.formRow}>
        <label>Company<input name="company" placeholder="Company name" /></label>
        <label>WhatsApp<input name="phone" placeholder="+ country code" /></label>
      </div>
      <label>Project Message *<textarea name="message" required rows={4} placeholder="Product features, packaging, timeline, and any compliance needs..." /></label>
      <label className={styles.honeypot}>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className={styles.formSubmit}>
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : "Get a Quote"}</button>
        <span>Your information is used only to respond to this inquiry.</span>
      </div>
      {feedback ? <p className={status === "error" ? styles.formError : styles.formSuccess} role={status === "error" ? "alert" : "status"}>{feedback}</p> : null}
    </form>
  );
}
