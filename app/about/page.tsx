import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { companyProfile } from "../data";

export const metadata: Metadata = {
  title: "About RealBaby",
  description: "Meet RealBaby, an OEM/ODM partner focused on baby soft play, comfort, sensory, and early-learning products.",
  alternates: { canonical: "/about" }
};

const values = [
  ["01", "Safe by Design", "Materials, construction, attachments, labeling, and packaging are reviewed around the real product and market."],
  ["02", "Developmental Play", "Sensory discovery, motor skills, cognition, comfort, and interaction shape each product direction."],
  ["03", "Made with Care", "Embroidery, sewing, finishing, quality checks, and packing are managed through clear approval points."],
  ["04", "Retail Ready", "Gift boxes, hang tags, labels, barcodes, and export cartons are developed for the buyer channel."],
  ["05", "OEM/ODM Friendly", "Support ranges from adapting an existing style to custom sampling, private label, and collection development."]
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero about-hero">
          <div className="container inner-hero-grid">
            <div>
              <p className="section-kicker">Behind RealBaby</p>
              <h1>A focused partner, not a generic toy supplier.</h1>
              <p className="inner-lead">We help importers, baby brands, education channels, retailers, and e-commerce buyers turn thoughtful soft-product ideas into practical, market-ready collections.</p>
              <div className="cta-row about-actions">
                <Link className="btn btn-primary" href="/contact">Start a Project</Link>
                <a className="btn btn-outline" href="/realbaby-company-profile-2026.pdf">Download Company Profile</a>
              </div>
            </div>
            <div className="fact-panel">
              <strong>Founded {companyProfile.foundedYear}</strong>
              <span>{companyProfile.positioning}</span>
              <span>Founder: {companyProfile.founder} · {companyProfile.founderExperience}</span>
              <span>Typical MOQ: 500 pcs+</span>
              <span>Typical sampling: 10-15 days</span>
              <span>Typical production: 40-70 days</span>
              <small>Reference values only. Final terms depend on product, customization, packaging, quantity, and market.</small>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container about-story-grid">
            <div>
              <p className="section-kicker">Our Belief</p>
              <h2>Children grow through real touch, exploration, companionship, and play.</h2>
              <p>In a world full of screens and overstimulation, we focus on soft play and developmental products that support sensory discovery, early learning, emotional comfort, and meaningful parent-child interaction.</p>
              <p>Our role is to connect product ideas with manufacturing reality, balancing experience, age direction, materials, construction, workmanship, cost, safety, packaging, production stability, and destination-market needs.</p>
              <blockquote className="about-quote">We are not here to help children grow faster. We are here to help them grow more naturally.</blockquote>
            </div>
            <Image className="about-team-image" src="/images/company/team.webp" alt="RealBaby product development and buyer support team" width={1448} height={1086} />
          </div>
        </section>

        <section className="section band">
          <div className="container values-grid values-grid-5">
            {values.map(([number, title, description]) => (
              <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container founder-grid">
            <Image src="/images/company/karen.webp" alt="Karen, RealBaby project contact" width={849} height={849} />
            <div>
              <p className="section-kicker">Your RealBaby Contact</p>
              <h2>Meet Karen.</h2>
              <p>Karen founded RealBaby in 2021 and brings 15+ years of experience in baby toys and related products. She connects the buyer's vision with manufacturing reality across product direction, feasibility, materials, workmanship, cost, safety risk, sample revisions, production resources, quality risk, packaging, and key customer communication.</p>
              <p>Her approach is not to say “yes” to every request, but to explain what is workable, what should change, why it matters, and what each option may lead to.</p>
              <div className="cta-row"><a className="btn btn-primary" href="mailto:real@realbaby.cn">Email Karen</a><a className="btn btn-outline" href="https://wa.me/8617317800686">WhatsApp</a></div>
            </div>
          </div>
        </section>

        <section className="section about-cta">
          <div className="container quote-banner">
            <div><p className="section-kicker">Build Your Collection</p><h2>Let’s create real value for real children.</h2><p>Share your market, target product, quantity, and packaging direction.</p></div>
            <Link className="btn btn-primary" href="/contact">Start a Project</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
