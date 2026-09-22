import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { products } from "../../data";
import { siteUrl } from "../../site-config";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product | RealBaby" };
  return { title: `${product.name} OEM/ODM`, description: product.summary, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} OEM/ODM`, description: product.summary, images: [{ url: product.image, alt: product.imageAlt }] } };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.slug !== product.slug && (item.series === product.series || item.category === product.category)).slice(0, 3);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${siteUrl}${product.image}`,
    category: product.category,
    brand: { "@type": "Brand", name: "RealBaby" },
    audience: { "@type": "BusinessAudience", audienceType: "B2B buyers" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Series", value: product.series },
      { "@type": "PropertyValue", name: "Age direction", value: `${product.age}; final grading is project-specific` },
      ...product.specs.map((spec) => ({ "@type": "PropertyValue", name: spec.key, value: spec.value }))
    ]
  };
  return (
    <>
      <SiteHeader />
      <main className="product-detail-page">
        <div className="container breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></div>
        <section className="container product-detail-hero">
          <div className="product-detail-image"><Image src={product.image} alt={product.imageAlt} width={1100} height={1375} priority sizes="(max-width: 860px) 100vw, 50vw" /></div>
          <div className="product-detail-copy"><p className="section-kicker">{product.series} · age direction {product.age}</p><h1>{product.name}</h1><p className="product-detail-category">{product.category}</p><p className="inner-lead">{product.summary}</p><small className="scope-note">Final age grade, materials, dimensions, functions, testing scope, and labeling are confirmed for the actual project.</small><ul className="check-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="cta-row"><Link className="btn btn-primary" href={`/contact?product=${encodeURIComponent(product.name)}`}>Get a Quote</Link><a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Download Catalog</a></div><div className="detail-proof"><span>OEM / ODM</span><span>Sampling Support</span><span>Custom Packaging</span></div></div>
        </section>

        <section className="section band"><div className="container detail-content-grid"><article><p className="section-kicker">Procurement Notes</p><h2>Built around your buyer brief.</h2><div className="spec-table" role="table" aria-label="Product procurement notes">{product.specs.map((spec) => <div className="spec-row" role="row" key={spec.key}><strong role="rowheader">{spec.key}</strong><span role="cell">{spec.value}</span></div>)}</div></article><aside className="application-card"><p className="section-kicker">Customization</p><h3>Options for this direction</h3><ul>{product.customOptions.map((item) => <li key={item}>{item}</li>)}</ul><p>Final dimensions, materials, age grading, testing scope, MOQ, and lead time are confirmed after project review.</p></aside></div></section>
        <section className="section"><div className="container detail-content-grid"><div><p className="section-kicker">Best Fit For</p><h2>Channel applications</h2><div className="application-pill-grid">{product.applications.map((item) => <span key={item}>{item}</span>)}</div></div><div><p className="section-kicker">Safety & Compliance</p><h3>Project-specific support</h3><p>Testing and documentation support is matched to the actual construction, intended age, and destination market. Representative EN71 and ASTM F963 reports can be reviewed; CPSIA-related requirements and product-specific CPC preparation for US projects are confirmed during quotation.</p><Link className="text-link" href="/#quality">See our quality approach <span>→</span></Link></div></div></section>
        <section className="section related-section"><div className="container"><div className="section-heading compact"><span>Related Products</span><h2>Continue the collection</h2></div><div className="related-grid">{relatedProducts.map((item) => <Link className="related-card" href={`/products/${item.slug}`} key={item.slug}><Image src={item.image} alt={item.imageAlt} width={640} height={760} /><div><p className="product-category">{item.series}</p><h3>{item.name}</h3></div></Link>)}</div></div></section>
        <section className="section band"><div className="container quote-banner"><div><p className="section-kicker">Procurement Inquiry</p><h2>Get a project-specific proposal.</h2><p>Share your market, quantity, timeline, and required customizations.</p></div><Link className="btn btn-primary" href={`/contact?product=${encodeURIComponent(product.name)}`}>Talk to RealBaby</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      </main>
      <SiteFooter />
    </>
  );
}
