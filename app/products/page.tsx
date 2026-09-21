import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { products } from "../data";

export const metadata: Metadata = {
  title: "Baby Soft Play Product Lines",
  description:
    "Explore Realbaby OEM/ODM baby activity gyms, soft quiet books, comfort blankets, plush soothers, interactive play concepts, and retail packaging."
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="container inner-hero-grid">
            <div>
              <p className="section-kicker">Realbaby Product Architecture</p>
              <h1>Baby soft play collections built for B2B growth.</h1>
              <p className="inner-lead">
                Start with a proven product direction, then adapt materials, color, character,
                function, labeling, and packaging to your market.
              </p>
            </div>
            <div className="fact-panel">
              <strong>OEM / ODM</strong>
              <span>Sample development</span>
              <span>Private-label packaging</span>
              <span>Market-specific compliance support</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container product-catalog-grid">
            {products.map((product) => (
              <article className="catalog-card" key={product.slug}>
                <Link className="catalog-card-image" href={`/products/${product.slug}`}>
                  <Image src={product.image} alt={product.imageAlt} width={900} height={1125} />
                </Link>
                <div className="catalog-card-body">
                  <p className="product-category">{product.category}</p>
                  <h2>{product.name}</h2>
                  <p>{product.summary}</p>
                  <Link className="text-link" href={`/products/${product.slug}`}>
                    Explore product line <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section band">
          <div className="container quote-banner">
            <div>
              <p className="section-kicker">Build Your Collection</p>
              <h2>Need a tailored product direction?</h2>
              <p>Tell us your market, channel, target quantity, and customization priorities.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">Request a Product Proposal</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
