import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { products } from "../../data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return { title: "Product Line | Realbaby" };

  return {
    title: `${product.name} OEM/ODM`,
    description: product.summary,
    openGraph: {
      title: `${product.name} OEM/ODM`,
      description: product.summary,
      images: [{ url: product.image, alt: product.imageAlt }]
    }
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="product-detail-page">
        <div className="container breadcrumb">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <span>{product.name}</span>
        </div>

        <section className="container product-detail-hero">
          <div className="product-detail-image">
            <Image src={product.image} alt={product.imageAlt} width={1100} height={1375} priority />
          </div>
          <div className="product-detail-copy">
            <p className="section-kicker">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="inner-lead">{product.summary}</p>
            <ul className="check-list">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">Get a Quote</Link>
              <a className="btn btn-outline" href="/realbaby-product-catalog.pdf">View Catalog</a>
            </div>
            <div className="detail-proof">
              <span>OEM / ODM</span>
              <span>Sampling Support</span>
              <span>Export-Ready Packaging</span>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container detail-content-grid">
            <article>
              <p className="section-kicker">Procurement Information</p>
              <h2>What your sourcing team needs to know</h2>
              <div className="spec-table" role="table" aria-label="Product procurement notes">
                {product.specs.map((spec) => (
                  <div className="spec-row" role="row" key={spec.key}>
                    <strong role="rowheader">{spec.key}</strong>
                    <span role="cell">{spec.value}</span>
                  </div>
                ))}
              </div>
            </article>
            <aside className="application-card">
              <p className="section-kicker">Best Fit For</p>
              <h3>Buyer applications</h3>
              <ul>
                {product.applications.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>
                MOQ, lead time, sample cost, and testing scope are confirmed after product
                structure and customization requirements are reviewed.
              </p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading compact">
              <span>Related Directions</span>
              <h2>Build a coordinated baby collection</h2>
            </div>
            <div className="related-grid">
              {relatedProducts.map((item) => (
                <Link className="related-card" href={`/products/${item.slug}`} key={item.slug}>
                  <Image src={item.image} alt={item.imageAlt} width={640} height={480} />
                  <div>
                    <p className="product-category">{item.category}</p>
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container quote-banner">
            <div>
              <p className="section-kicker">Procurement Inquiry</p>
              <h2>Get a project-specific proposal.</h2>
              <p>Share your target market, quantity, timeline, and required customizations.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">Talk to Realbaby</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
