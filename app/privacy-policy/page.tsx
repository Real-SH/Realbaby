import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RealBaby handles website inquiries and business contact information.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container legal-content">
          <p className="section-kicker">Last updated: September 21, 2026</p>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how RealBaby handles information submitted through this website.
            It applies to business inquiries, quotation requests, and normal website usage.
          </p>

          <h2>Information we collect</h2>
          <p>
            We may collect your name, business email, phone or WhatsApp number, company, country,
            buyer type, product requirements, expected quantity, message, and basic technical
            information used for security and attribution.
          </p>

          <h2>How we use information</h2>
          <p>
            We use this information to answer inquiries, prepare quotations, evaluate product
            feasibility, coordinate samples, prevent spam, and improve our B2B website.
          </p>

          <h2>Sharing and retention</h2>
          <p>
            We do not sell inquiry data. Information may be shared with service providers involved
            in email delivery, website hosting, analytics, or project fulfilment when necessary.
            We retain business correspondence only as long as reasonably needed for these purposes.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            The website may use essential cookies and, when configured, analytics or advertising
            measurement tools. Any future tracking tools will be configured with appropriate
            consent controls where required.
          </p>

          <h2>Your choices</h2>
          <p>
            You may request access, correction, or deletion of your inquiry information by emailing
            us. Legal or contractual retention requirements may limit some deletion requests.
          </p>

          <h2>Contact</h2>
          <p>
            Email <a className="text-link" href="mailto:real@realbaby.cn">real@realbaby.cn</a> for
            privacy questions.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
