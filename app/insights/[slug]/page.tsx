import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { findInsight, insights } from "../data";
import { siteUrl } from "../../site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) return { title: "Buyer Insight" };
  return {
    title: insight.title,
    description: insight.summary,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.summary,
      type: "article",
      images: [{ url: insight.image, alt: insight.imageAlt }]
    }
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) notFound();

  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.summary,
    image: `${siteUrl}${insight.image}`,
    dateModified: "2026-09-22",
    author: { "@type": "Organization", name: "RealBaby" },
    publisher: {
      "@type": "Organization",
      name: "RealBaby",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo-primary.png` }
    },
    mainEntityOfPage: `${siteUrl}/insights/${insight.slug}`
  };

  return (
    <>
      <SiteHeader />
      <main className="insight-detail-page">
        <div className="container breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/insights">Insights</Link><span>/</span><span>{insight.category}</span></div>
        <section className="container insight-detail-hero">
          <div>
            <p className="section-kicker">{insight.category}</p>
            <h1>{insight.title}</h1>
            <p className="inner-lead">{insight.summary}</p>
            <div className="insight-meta insight-meta-large"><span>Updated {insight.updated}</span><span>{insight.readTime}</span></div>
          </div>
          <div className="insight-detail-image"><Image src={insight.image} alt={insight.imageAlt} width={1100} height={760} priority sizes="(max-width: 900px) 100vw, 44vw" unoptimized={insight.image.includes("/images/compliance/")} /></div>
        </section>

        <section className="section insight-article-section">
          <div className="container insight-article-layout">
            <aside className="insight-aside">
              <p className="section-kicker">Buyer Note</p>
              <p>Use this guide to prepare your brief. Final materials, testing, MOQ, cost, and timing must be confirmed for the actual project.</p>
              <Link className="btn btn-primary" href="/contact">Discuss a Project</Link>
            </aside>
            <article className="insight-copy">
              {insight.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              ))}
              <div className="insight-next-step">
                <p className="section-kicker">Related Product Direction</p>
                <h2>Apply this guide to a real product.</h2>
                <Link className="text-link" href={`/products/${insight.relatedProductSlug}`}>{insight.relatedProductLabel} <span aria-hidden="true">-&gt;</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section related-section">
          <div className="container">
            <div className="section-heading compact"><span>More Buyer Guides</span><h2>Continue your sourcing review.</h2></div>
            <div className="related-grid">
              {related.map((item) => (
                <Link className="related-card" href={`/insights/${item.slug}`} key={item.slug}>
                  <Image src={item.image} alt={item.imageAlt} width={640} height={460} />
                  <div><p className="product-category">{item.category}</p><h3>{item.title}</h3></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
