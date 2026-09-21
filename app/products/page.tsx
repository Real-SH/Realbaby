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
            <div><p className="section-kicker">Realbaby Product Collection</p><h1>Designed around how childhood really happens.</h1><p className="inner-lead">Explore fifteen developed directions across first play, hands-on learning, and everyday comfort. Each can be adapted for your market, channel, and brand.</p></div>
            <div className="fact-panel"><strong>3 focused series · 15 directions</strong><span>Typical custom MOQ: 500 pieces</span><span>Private label and custom packaging</span><span>Market-specific testing support</span></div>
          </div>
        </section>

        {productSeries.map((series) => {
          const seriesProducts = products.filter((product) => product.series === series.name);
          return (
            <section className="section product-series-block" key={series.name}>
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

        <section className="section band"><div className="container quote-banner"><div><p className="section-kicker">Build Your Collection</p><h2>Need a tailored product direction?</h2><p>Tell us your market, channel, target quantity, and customization priorities.</p></div><Link className="btn btn-primary" href="/contact">Request a Product Proposal</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
