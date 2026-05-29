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
  productRequirement?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

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

function errorResponse(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(request: NextRequest) {
  let body: RawInquiryPayload;
  try {
    body = (await request.json()) as RawInquiryPayload;
  } catch {
    return errorResponse("Invalid request payload.");
  }

  const name = cleanString(body.name);
  const email = cleanString(body.email);
  const phone = cleanString(body.phone);
  const company = cleanString(body.company);
  const country = cleanString(body.country);
  const productRequirement = cleanString(body.productRequirement);
  const message = cleanString(body.message);
  const website = cleanString(body.website);
  const startedAt = Number(body.startedAt);

  if (website) {
    return NextResponse.json({
      ok: true,
      message: "Inquiry submitted successfully."
    });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2000) {
    return errorResponse(
      "Submission blocked by anti-spam verification. Please wait 2 seconds and try again.",
      429
    );
  }

  if (!name || !email || !phone) {
    return errorResponse("Please complete all required fields: Name, Email, and Phone.");
  }

  if (!isValidEmail(email)) {
    return errorResponse("Please enter a valid email address.");
  }

  if (!isValidInternationalPhone(phone)) {
    return errorResponse("Please enter a valid international phone number.");
  }

  const record = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    destinationEmail: process.env.INQUIRY_TARGET_EMAIL || "real@realbaby.cn",
    name,
    email,
    phone,
    company: company || null,
    country: country || null,
    productRequirement: productRequirement || null,
    message: message || null,
    sourcePath: "/contact",
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
    userAgent: request.headers.get("user-agent") || null
  };

  const storageDir =
    process.env.INQUIRY_STORAGE_DIR?.trim() || path.join(process.cwd(), "outputs", "inquiries");
  const filePath = path.join(storageDir, "inquiries.jsonl");

  try {
    await mkdir(storageDir, { recursive: true });
    await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    return errorResponse("Submission failed while saving data. Please try again later.", 500);
  }

  const forwardWebhook = process.env.INQUIRY_FORWARD_WEBHOOK_URL?.trim();
  if (forwardWebhook) {
    try {
      await fetch(forwardWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(record)
      });
    } catch {
      // Optional forwarding channel; ignore failures and keep database record.
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry submitted successfully. Our sales team will contact you soon."
  });
}
