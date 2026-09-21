import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.realbabytoy.com"),
  title: {
    default: "Realbaby | Baby Soft Play & Developmental Products OEM/ODM",
    template: "%s | Realbaby"
  },
  description:
    "Realbaby develops OEM/ODM baby soft play and developmental products including activity gyms, soft quiet books, comfort blankets, plush soothers, and retail packaging for global B2B buyers.",
  keywords: [
    "Realbaby",
    "baby activity gym manufacturer",
    "soft quiet books supplier",
    "OEM baby soft toys",
    "ODM developmental baby products",
    "comfort blanket manufacturer",
    "baby product OEM ODM China"
  ],
  icons: { icon: "/favicon-512.png", apple: "/favicon-512.png" },
  openGraph: {
    title: "Realbaby | Baby Soft Play & Developmental Products OEM/ODM",
    description:
      "B2B development partner for baby activity gyms, soft quiet books, comfort blankets, plush soothers, and retail-ready baby collections.",
    url: "https://www.realbabytoy.com",
    siteName: "Realbaby",
    locale: "en_US",
    type: "website"
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
  foundingDate: "2017",
  email: "real@realbaby.cn",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shanghai",
    addressCountry: "CN"
  },
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
