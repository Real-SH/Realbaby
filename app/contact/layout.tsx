import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Send Realbaby your baby product sourcing requirements for OEM/ODM development, samples, packaging, and quotation support."
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
