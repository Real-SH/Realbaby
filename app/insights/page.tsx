import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { insights } from "./data";

export const metadata: Metadata = {
  title: "Buyer Insights for Baby Soft Products",
  description: "Practical B2B guidance for sourcing, developing, testing, packaging, and inspecting baby soft play and developmental products.",
  alternates: { canonical: "/insights" }
};

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero insights-index-hero">
          <div className="container inner-hero-grid">
            <div>
              <p className="section-kicker">RealBaby Buyer Insights</p>
              <h1>Clear answers for better product decisions.</h1>
              <p className="inner-lead">Focused guidance for importers, baby brands, education channels, retailers, and e-commerce buyers developing soft play and developmental products.</p>
            </div>
            <div className="fact-panel">
              <strong>Useful, product-led guidance</strong>
              <span>Sourcing briefs and quotation preparation</span>
              <span>Sampling, packaging, and quality control</span>
              <span>Market-specific compliance starting points</span>
              <small>Commercial guidance only. Final requirements are confirmed for the actual product and destination market.</small>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading compact insights-heading">
              <span>Selected Resources</span>
              <h2>Built for B2B buyers, not keyword volume.</h2>
              <p>Each guide focuses on a decision buyers need to make before sampling or production.</p>
            </div>
            <div className="insights-grid">
              {insights.map((insight) => (
                <article className="insight-card" key={insight.slug}>
                  <Link className="insight-card-image" href={`/insights/${insight.slug}`}>
                    <Image src={insight.image} alt={insight.imageAlt} width={900} height={620} sizes="(max-width: 720px) 100vw, 50vw" />
                  </Link>
                  <div className="insight-card-body">
                    <div className="insight-meta"><span>{insight.category}</span><span>{insight.readTime}</span></div>
                    <h2><Link href={`/insights/${insight.slug}`}>{insight.title}</Link></h2>
                    <p>{insight.summary}</p>
                    <Link className="text-link" href={`/insights/${insight.slug}`}>Read buyer guide <span aria-hidden="true">-&gt;</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container quote-banner">
            <div><p className="section-kicker">Have a Live Project?</p><h2>Turn the checklist into a product brief.</h2><p>Share your market, target product, quantity, packaging, and timing for a project-specific review.</p></div>
            <Link className="btn btn-primary" href="/contact">Get a Quote</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
