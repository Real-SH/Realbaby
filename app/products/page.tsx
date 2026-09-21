import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { products, productSeries } from "../data";

export const metadata: Metadata = {
  title: "Baby Soft Play Product Collection",
  description: "Explore 15 Realbaby OEM/ODM activity gyms, cloth books, quiet books, comfort blankets, plush companions, and interactive soft-play products."
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero product-index-hero">
          <div className="container inner-hero-grid">
            <div><p className="section-kicker">Realbaby Product Collection</p><h1>Designed around how childhood really happens.</h1><p className="inner-lead">Explore fifteen developed directions across first play, hands-on learning, and everyday comfort. Each can be adapted for your market, sales channel, price direction, and brand.</p><div className="cta-row about-actions"><Link className="btn btn-primary" href="/contact">Request a Proposal</Link><a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Download 2026 Catalog</a></div></div>
            <div className="fact-panel"><strong>3 focused series · 15 directions</strong><span>Typical MOQ: 500 pcs+</span><span>Typical sampling: 10-15 days</span><span>Typical production: 40-70 days</span><span>EN71 / ASTM F963 / CPSIA-CPC coordination</span><small>Reference values only. Final terms are confirmed for the actual product and project.</small></div>
          </div>
        </section>

        {productSeries.map((series) => {
          const seriesProducts = products.filter((product) => product.series === series.name);
          return (
            <section className="section product-series-block" id={series.name.toLowerCase().replaceAll(" ", "-")} key={series.name}>
              <div className="container">
                <div className="product-series-heading"><div><p className="section-kicker">{series.age}</p><h2>{series.name}</h2></div><p>{series.description}</p></div>
                <div className="product-catalog-grid">
                  {seriesProducts.map((product) => (
                    <article className="catalog-card" key={product.slug}>
                      <Link className="catalog-card-image" href={`/products/${product.slug}`}><Image src={product.image} alt={product.imageAlt} width={900} height={1200} sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw" /><span className="age-badge">{product.age}</span></Link>
                      <div className="catalog-card-body"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p>{product.summary}</p><Link className="text-link" href={`/products/${product.slug}`}>View product details <span aria-hidden="true">→</span></Link></div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="section band"><div className="container quote-banner"><div><p className="section-kicker">Build Your Collection</p><h2>Need a tailored product direction?</h2><p>Tell us your market, channel, target quantity, packaging, and customization priorities.</p></div><div className="cta-row"><Link className="btn btn-primary" href="/contact">Request a Product Proposal</Link><a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Download Catalog</a></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
