import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Send RealBaby your baby product sourcing requirements for OEM/ODM development, samples, packaging, and quotation support.",
  alternates: { canonical: "/contact" }
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
