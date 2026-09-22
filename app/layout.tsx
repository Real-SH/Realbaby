import type { Metadata } from "next";
import "./globals.css";
import { allowIndexing, siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RealBaby | Baby Soft Play & Developmental Products OEM/ODM",
    template: "%s | RealBaby"
  },
  description:
    "RealBaby is a baby soft play and developmental products OEM/ODM partner for importers, baby brands, education channels, retailers, and e-commerce buyers.",
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true, nocache: true },
  keywords: [
    "RealBaby",
    "baby activity gym manufacturer",
    "soft quiet books supplier",
    "OEM baby soft toys",
    "ODM developmental baby products",
    "comfort blanket manufacturer",
    "baby product OEM ODM supplier"
  ],
  icons: { icon: "/favicon-512.png", apple: "/favicon-512.png" },
  openGraph: {
    title: "RealBaby | Baby Soft Play & Developmental Products OEM/ODM",
    description:
      "B2B development partner for baby activity gyms, soft quiet books, comfort blankets, plush soothers, and retail-ready baby collections.",
    url: siteUrl,
    siteName: "RealBaby",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/images/hero/realbaby-collection.webp",
      width: 1672,
      height: 941,
      alt: "RealBaby baby soft play and developmental product collection"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "RealBaby | Baby Soft Play OEM/ODM",
    description: "Baby soft play and developmental product development for global B2B buyers."
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RealBaby",
  url: siteUrl,
  logo: `${siteUrl}/logo-primary.png`,
  foundingDate: "2021",
  founder: { "@type": "Person", name: "Karen", jobTitle: "Founder" },
  description: "Baby soft play and developmental products OEM/ODM partner for global B2B buyers.",
  email: "real@realbaby.cn",
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
