import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type RawInquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  country?: unknown;
  buyerType?: unknown;
  productRequirement?: unknown;
  quantity?: unknown;
  message?: unknown;
  utm?: unknown;
  sourcePath?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function cleanString(value: unknown, maxLength = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidInternationalPhone(value: string): boolean {
  if (!value) return true;
  const digitsOnly = value.replace(/\D/g, "");
  return (
    digitsOnly.length >= 7 &&
    digitsOnly.length <= 15 &&
    /^\+?[0-9()\-\s]{7,25}$/.test(value)
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

function errorResponse(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function deliverWithWebhook(record: Record<string, unknown>) {
  const webhook = process.env.INQUIRY_FORWARD_WEBHOOK_URL?.trim();
  if (!webhook) return false;

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
    cache: "no-store"
  });
  if (!response.ok) throw new Error(`Inquiry webhook returned ${response.status}.`);
  return true;
}

async function deliverWithResend(record: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const destinationEmail = process.env.INQUIRY_TARGET_EMAIL?.trim() || "real@realbaby.cn";
  const fromEmail =
    process.env.INQUIRY_FROM_EMAIL?.trim() || "Realbaby Website <website@realbabytoy.com>";
  const safe = Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      escapeHtml(value === null || value === undefined ? "" : String(value))
    ])
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [destinationEmail],
      reply_to: record.email,
      subject: `New Realbaby inquiry from ${record.name}`,
      html: `
        <h2>New Realbaby website inquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${safe.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${safe.company || "Not provided"}</p>
        <p><strong>Country:</strong> ${safe.country}</p>
        <p><strong>Buyer type:</strong> ${safe.buyerType || "Not provided"}</p>
        <p><strong>Product requirement:</strong> ${safe.productRequirement}</p>
        <p><strong>Expected quantity:</strong> ${safe.quantity || "Not provided"}</p>
        <p><strong>Message:</strong><br />${safe.message}</p>
        <p><strong>Source:</strong> ${safe.sourcePath}</p>
        <p><strong>UTM:</strong> ${safe.utm || "None"}</p>
      `
    }),
    cache: "no-store"
  });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}.`);
  return true;
}

async function saveDevelopmentCopy(record: Record<string, unknown>) {
  const configuredDirectory = process.env.INQUIRY_STORAGE_DIR?.trim();
  if (process.env.NODE_ENV === "production" && !configuredDirectory) return false;

  const storageDirectory =
    configuredDirectory || path.join(process.cwd(), "outputs", "inquiries");
  await mkdir(storageDirectory, { recursive: true });
  await appendFile(
    path.join(storageDirectory, "inquiries.jsonl"),
    `${JSON.stringify(record)}\n`,
    "utf8"
  );
  return true;
}

export async function POST(request: NextRequest) {
  let body: RawInquiryPayload;
  try {
    body = (await request.json()) as RawInquiryPayload;
  } catch {
    return errorResponse("Invalid request payload.");
  }

  const name = cleanString(body.name, 120);
  const email = cleanString(body.email, 200);
  const phone = cleanString(body.phone, 40);
  const company = cleanString(body.company, 200);
  const country = cleanString(body.country, 120);
  const buyerType = cleanString(body.buyerType, 120);
  const productRequirement = cleanString(body.productRequirement, 500);
  const quantity = cleanString(body.quantity, 120);
  const message = cleanString(body.message, 3000);
  const utm = cleanString(body.utm, 1000);
  const sourcePath = cleanString(body.sourcePath, 200) || "/contact";
  const website = cleanString(body.website, 200);
  const startedAt = Number(body.startedAt);

  if (website) {
    return NextResponse.json({ ok: true, message: "Inquiry submitted successfully." });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500) {
    return errorResponse(
      "Submission blocked by anti-spam verification. Please wait a moment and try again.",
      429
    );
  }

  if (!name || !email || !country || !buyerType || !productRequirement || !message) {
    return errorResponse(
      "Please complete Name, Email, Country, Buyer Type, Product Requirement, and Message."
    );
  }
  if (!isValidEmail(email)) return errorResponse("Please enter a valid email address.");
  if (!isValidInternationalPhone(phone)) {
    return errorResponse("Please enter a valid international phone or WhatsApp number.");
  }

  const record = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    name,
    email,
    phone: phone || null,
    company: company || null,
    country,
    buyerType: buyerType || null,
    productRequirement,
    quantity: quantity || null,
    message,
    utm: utm || null,
    sourcePath,
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
    userAgent: request.headers.get("user-agent") || null
  };

  const hasDeliveryConfiguration = Boolean(
    process.env.INQUIRY_FORWARD_WEBHOOK_URL?.trim() || process.env.RESEND_API_KEY?.trim()
  );
  let delivered = false;

  try {
    delivered = await deliverWithWebhook(record);
  } catch {
    delivered = false;
  }

  if (!delivered) {
    try {
      delivered = await deliverWithResend(record);
    } catch {
      delivered = false;
    }
  }

  let stored = false;
  try {
    stored = await saveDevelopmentCopy(record);
  } catch {
    stored = false;
  }

  if (!delivered && !stored) {
    return errorResponse(
      hasDeliveryConfiguration
        ? "We could not deliver your inquiry. Please email real@realbaby.cn or contact us on WhatsApp."
        : "Online inquiry delivery is being configured. Please email real@realbaby.cn or contact us on WhatsApp.",
      hasDeliveryConfiguration ? 502 : 503
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry submitted successfully. Our sales team will contact you soon."
  });
}
