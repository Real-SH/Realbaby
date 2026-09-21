import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { companyProfile } from "../data";

export const metadata: Metadata = {
  title: "About Realbaby",
  description:
    "Meet Realbaby, a Shanghai-based OEM/ODM partner for baby activity gyms, soft quiet books, comfort products, and retail-ready collections."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="container inner-hero-grid">
            <div>
              <p className="section-kicker">Behind Realbaby</p>
              <h1>Real people building products for real childhood.</h1>
              <p className="inner-lead">
                Realbaby works with importers, retailers, distributors, and e-commerce brands to
                develop baby soft play, comfort, and learning collections.
              </p>
            </div>
            <div className="fact-panel">
              <strong>Founded {companyProfile.foundedYear}</strong>
              <span>{companyProfile.positioning}</span>
              <span>Main markets: {companyProfile.markets.join(", ")}</span>
              <span>Based in Shanghai, China</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container about-story-grid">
            <div>
              <p className="section-kicker">Our Focus</p>
              <h2>A narrower category. A clearer sourcing conversation.</h2>
              <p>
                We focus on baby activity play, soft learning, comfort companions, and the retail
                packaging that turns individual products into coherent collections.
              </p>
              <ul className="check-list">
                <li>Product planning and sample development</li>
                <li>Materials, colors, embroidery, labels, and packaging customization</li>
                <li>Quality and compliance coordination by target market</li>
                <li>Export communication for B2B buying teams</li>
              </ul>
            </div>
            <Image
              className="about-team-image"
              src="/mega/p19.png"
              alt="Realbaby team and cooperation process"
              width={1600}
              height={900}
            />
          </div>
        </section>

        <section className="section band">
          <div className="container values-grid">
            <article><span>01</span><h3>Real partnership</h3><p>Clear communication from inquiry through delivery.</p></article>
            <article><span>02</span><h3>Real product value</h3><p>Developmental purpose, practical construction, and shelf appeal.</p></article>
            <article><span>03</span><h3>Real documentation</h3><p>Only verifiable quality and compliance claims.</p></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
