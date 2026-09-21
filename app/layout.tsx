import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.realbabytoy.com"),
  title: {
    default: "Realbaby | Baby Soft Play & Developmental Products OEM/ODM",
    template: "%s | Realbaby"
  },
  description:
    "Realbaby is a baby soft play and developmental products OEM/ODM partner for importers, baby brands, education channels, retailers, and e-commerce buyers.",
  robots: { index: true, follow: true },
  keywords: [
    "Realbaby",
    "baby activity gym manufacturer",
    "soft quiet books supplier",
    "OEM baby soft toys",
    "ODM developmental baby products",
    "comfort blanket manufacturer",
    "baby product OEM ODM supplier"
  ],
  icons: { icon: "/favicon-512.png", apple: "/favicon-512.png" },
  openGraph: {
    title: "Realbaby | Baby Soft Play & Developmental Products OEM/ODM",
    description:
      "B2B development partner for baby activity gyms, soft quiet books, comfort blankets, plush soothers, and retail-ready baby collections.",
    url: "https://www.realbabytoy.com",
    siteName: "Realbaby",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/images/hero/realbaby-collection.webp",
      width: 1672,
      height: 941,
      alt: "Realbaby baby soft play and developmental product collection"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Realbaby | Baby Soft Play OEM/ODM",
    description: "Baby soft play and developmental product development for global B2B buyers."
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Realbaby",
  url: "https://www.realbabytoy.com",
  logo: "https://www.realbabytoy.com/logo-primary.png",
  foundingDate: "2015",
  description: "Baby soft play and developmental products OEM/ODM partner for global B2B buyers.",
  email: "real@realbaby.cn",
  areaServed: ["United States", "Canada", "Australia", "United Kingdom", "Europe"],
  knowsAbout: [
    "Baby activity gyms and play mats",
    "Soft books and cloth books",
    "Quiet books and busy play",
    "Comfort blankets and plush companions",
    "Sensory soft toys",
    "Private label and retail packaging"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+86-173-1780-0686",
    email: "real@realbaby.cn",
    availableLanguage: ["English", "Chinese"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
