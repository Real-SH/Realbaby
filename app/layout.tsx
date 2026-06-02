import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.realbabytoy.com"),
  title: "Realbaby | OEM & ODM Baby Products Manufacturer",
  description:
    "Realbaby is a source manufacturer and OEM/ODM solution provider for baby products including Play Gym, Quiet Books, and AI Friends.",
  keywords: [
    "Realbaby",
    "OEM baby products",
    "ODM baby products",
    "Play Gym manufacturer",
    "Quiet Books supplier",
    "baby product manufacturer China"
  ],
  icons: {
    icon: "/favicon-512.png"
  },
  openGraph: {
    title: "Realbaby | OEM & ODM Baby Products Manufacturer",
    description:
      "B2B baby product supplier for importers, wholesalers, supermarkets, and e-commerce brands.",
    url: "https://www.realbabytoy.com",
    siteName: "Realbaby",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
