import Image from "next/image";
import Link from "next/link";
import { HomeInquiryForm } from "../components/HomeInquiryForm";
import { LocationMap } from "../components/LocationMap";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { buyerChannels, companyLocation, playMoments, products, productSeries } from "./data";
import styles from "./home.module.css";

const proofPoints = [
  ["15", "developed product directions"],
  ["500 pcs", "typical custom project MOQ"],
  ["EN71 · ASTM · CPC", "market-specific testing support"]
];

const customCapabilities = [
  "Existing style selection",
  "Custom product design",
  "Fabric and material selection",
  "Embroidery and printing",
  "Private label development",
  "Custom packaging",
  "Sample development",
  "Quality inspection",
  "Export support"
];

const processSteps = [
  ["01", "Brief", "Share target market, channel, quantity, and product direction."],
  ["02", "Design", "Align function, artwork, material, labeling, and packaging."],
  ["03", "Sample", "Develop and revise a physical sample before bulk approval."],
  ["04", "Production", "Coordinate production, quality checks, and project documents."],
  ["05", "Delivery", "Complete packing and export support for the agreed destination."]
];

const complianceDocs = [
  ["ASTM F963", "/images/compliance/astm.webp"],
  ["CPC", "/images/compliance/cpc.webp"],
  ["EN71", "/images/compliance/en71.webp"],
  ["CE / DoC", "/images/compliance/ce.webp"]
];

const faqItems = [
  ["What is the MOQ for a custom project?", "The typical MOQ is 500 pieces for most custom projects. The final quantity depends on construction, materials, packaging, and customization depth."],
  ["Can Realbaby develop a sample before production?", "Yes. We align the brief, artwork, materials, functions, and packaging direction before sampling, then revise agreed details before bulk approval."],
  ["Which parts of a product can be customized?", "Options can include character design, colors, fabric, activity details, embroidery or printing, labels, instruction cards, gift packaging, and export cartons."],
  ["Do you support EN71, ASTM, or CPC requirements?", "Testing and documentation support is planned for the actual product and destination market. Representative documents can be reviewed during the project."],
  ["How long do sampling and bulk production take?", "Timing varies by product complexity, testing needs, and approval rounds. We provide a project-specific schedule after reviewing your requirements."],
  ["Which buyers do you work with?", "Realbaby works with importers, distributors, baby brands, retail chains, e-commerce sellers, education channels, and gift or subscription programs."]
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  };
  return (
    <>
      <div className={styles.topline}>
        <div className="container">
          <span>Baby soft play & developmental products</span>
          <a href="/realbaby-product-catalog.pdf">Download 2026 Catalog</a>
        </div>
      </div>
      <SiteHeader />
      <main>
        <section className={styles.hero} id="top">
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>OEM / ODM PARTNER · SHANGHAI</p>
              <h1>Soft play made for <span>real childhood.</span></h1>
              <p className={styles.slogan}>Real play. Real growth.</p>
              <p className={styles.heroLead}>
                Realbaby helps importers, baby brands, retailers, and education channels build
                thoughtful soft play, comfort, and early-learning collections.
              </p>
              <div className={styles.heroActions}>
                <Link className="btn btn-primary" href="/contact">Start a Project</Link>
                <Link className="btn btn-outline" href="/products">Explore Products</Link>
              </div>
              <div className={styles.heroNotes} aria-label="Key service facts">
                <span>Product development</span>
                <span>Private label</span>
                <span>Export-ready support</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/hero/realbaby-collection.webp"
                  alt="Realbaby soft play collection in a warm nursery setting"
                  width={1672}
                  height={941}
                  priority
                  sizes="(max-width: 900px) 100vw, 54vw"
                />
              </div>
              <div className={styles.heroStamp}>
                <Image src="/brand/real-smile.svg" alt="" width={46} height={46} />
                <span>Keep<br />childhood real.</span>
              </div>
            </div>
          </div>
          <div className={`container ${styles.proofRail}`}>
            {proofPoints.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className={styles.audience} aria-label="Who we serve">
          <div className={`container ${styles.audienceInner}`}>
            <strong>Built for professional buyers</strong>
            <span>Importers</span><span>Baby Brands</span><span>Retail Chains</span>
            <span>E-commerce</span><span>Education</span>
          </div>
        </section>

        <section className={styles.section} id="series">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>FOCUSED PRODUCT SERIES</p><h2>Three clear ways to build your range.</h2></div>
              <p>Start with an age, a play purpose, or a retail opportunity. Then tailor the details to your market.</p>
            </div>
            <div className={styles.seriesGrid}>
              {productSeries.map((series, index) => (
                <article className={styles.seriesCard} key={series.name}>
                  <div className={styles.seriesImage}>
                    <Image src={series.image} alt={`Realbaby ${series.name} product series`} width={900} height={1200} sizes="(max-width: 720px) 100vw, 33vw" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className={styles.seriesBody}>
                    <div><span>{series.age}</span><h3>{series.name}</h3></div>
                    <p>{series.description}</p><small>{series.products}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.momentSection}`} id="moments">
          <div className="container">
            <div className={`${styles.sectionHead} ${styles.lightHead}`}>
              <div><p>EXPLORE BY PLAY MOMENT</p><h2>Products make more sense in real life.</h2></div>
              <p>Organize assortments around the moments parents understand: play, learning, travel, connection, and calm.</p>
            </div>
            <div className={styles.momentGrid}>
              {playMoments.map((moment, index) => (
                <article className={index === 0 ? styles.momentFeature : styles.momentCard} key={moment.name}>
                  <Image src={moment.image} alt={`Realbaby ${moment.name} play moment`} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 40vw" />
                  <div><span>0{index + 1}</span><h3>{moment.name}</h3><p>{moment.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="products">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>PRODUCT COLLECTION</p><h2>Fifteen developed directions. One coherent brand world.</h2></div>
              <Link className={styles.arrowLink} href="/products">View all products <span>↗</span></Link>
            </div>
            <div className={styles.productGrid}>
              {products.slice(0, 8).map((product) => (
                <Link className={styles.productCard} href={`/products/${product.slug}`} key={product.slug}>
                  <div><Image src={product.image} alt={product.imageAlt} width={900} height={1200} sizes="(max-width: 620px) 50vw, 25vw" /></div>
                  <span>{product.series} · {product.age}</span>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </Link>
              ))}
            </div>
            <div className={styles.centerAction}><Link className="btn btn-outline" href="/products">Browse all 15 products</Link></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.channelSection}`} id="channels">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>SOLUTIONS BY SALES CHANNEL</p><h2>Different shelves need different answers.</h2></div>
              <p>We shape product mix, packaging, and communication around how your customers buy.</p>
            </div>
            <div className={styles.channelGrid}>
              {buyerChannels.map(([name, text], index) => (
                <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.oemSection} id="oem">
          <div className={`container ${styles.oemGrid}`}>
            <div className={styles.packagingCollage}>
              <Image className={styles.packageMain} src="/images/packaging/product-gift-box.webp" alt="Realbaby retail-ready product gift box" width={1448} height={1086} />
              <Image className={styles.packageSmallOne} src="/images/packaging/signature-red-box.webp" alt="Realbaby custom red signature gift box" width={1254} height={1254} />
              <Image className={styles.packageSmallTwo} src="/images/packaging/shopping-bag.webp" alt="Realbaby branded shopping bag" width={1254} height={1254} />
            </div>
            <div className={styles.oemCopy}>
              <p className={styles.eyebrow}>OEM / ODM & PACKAGING</p>
              <h2>Your idea, developed as one retail-ready collection.</h2>
              <p>Product, label, packaging, and buyer presentation are planned together so the final range feels intentional, not assembled.</p>
              <div className={styles.capabilityList}>
                {customCapabilities.map((item) => <span key={item}>{item}</span>)}
              </div>
              <Link className="btn btn-primary" href="/contact">Discuss Your Collection</Link>
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="capability">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>FROM IDEA TO DELIVERY</p><h2>A practical five-step workflow.</h2></div>
              <p>Realbaby coordinates experienced manufacturing partners and keeps buyers aligned at each approval point.</p>
            </div>
            <div className={styles.processGrid}>
              {processSteps.map(([number, title, text]) => (
                <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className={styles.capabilityMedia}>
              <video controls playsInline preload="metadata" poster="/images/company/capability-overview.webp">
                <source src="/videos/realbaby-brand-film.mp4" type="video/mp4" />
              </video>
              <div>
                <p className={styles.eyebrow}>MATERIALS · DETAILS · PACKAGING</p>
                <h3>Development support with clear checkpoints.</h3>
                <p>Fabric selection, embroidery, printing, construction, quality checks, packaging, and export preparation are confirmed against the approved project brief.</p>
                <div className={styles.materialTags}><span>Soft textiles</span><span>Embroidery</span><span>Private label</span><span>Export packing</span></div>
              </div>
            </div>
            <div className={styles.capabilityMap}>
              <LocationMap address={companyLocation.address} viewUrl={companyLocation.googleMapsUrl} title="Realbaby · Shanghai, China" zoom={10} />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.qualitySection}`} id="quality">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>QUALITY & SAFETY SUPPORT</p><h2>Evidence for the product and market in front of us.</h2></div>
              <p>Selected products have supporting documentation for EN71, ASTM, and CPC-related requirements. Files are shared by project and destination market.</p>
            </div>
            <div className={styles.qualityLayout}>
              <div className={styles.documentGrid}>
                {complianceDocs.map(([name, image]) => (
                  <article key={name}><Image src={image} alt={`Representative ${name} compliance document`} width={900} height={1180} /><strong>{name}</strong><span>Representative document</span></article>
                ))}
              </div>
              <aside className={styles.auditCard}>
                <p className={styles.eyebrow}>AUDIT-READY SUPPORT</p>
                <h3>Documentation without overclaiming.</h3>
                <p>Audit and compliance availability varies by manufacturing partner, product construction, and buyer program. We confirm the applicable scope before quotation.</p>
                <div>
                  <Image src="/images/compliance/costco-audit.webp" alt="Representative Costco audit document" width={1188} height={1107} />
                  <Image src="/images/compliance/sedex-report.webp" alt="Representative Sedex report document" width={888} height={1170} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.storySection} id="about">
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyImage}><Image src="/images/company/team.webp" alt="Realbaby team presentation" width={1448} height={1086} /></div>
            <div>
              <p className={styles.eyebrow}>BEHIND REALBABY</p>
              <h2>Real people. Real passion. Real dedication.</h2>
              <p>Founded in 2017, Realbaby focuses on baby soft play and developmental products for international buyers. Our work connects product thinking, commercial clarity, and reliable follow-through.</p>
              <blockquote>“We are not here to make children grow faster. We are here to help them grow more naturally.”</blockquote>
              <Link className={styles.arrowLink} href="/about">Meet Realbaby <span>↗</span></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={`container ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>BUYER FAQ</p><h2>Useful answers before you send a brief.</h2><p>Every quotation is product-specific, but these are the questions sourcing teams ask first.</p><Link className={styles.arrowLink} href="/contact">Ask a different question <span>↗</span></Link></div>
            <div className={styles.faqList}>{faqItems.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.inquirySection} id="inquiry">
          <div className={`container ${styles.inquiryGrid}`}>
            <div>
              <p className={styles.eyebrow}>BUILD YOUR REALBABY COLLECTION</p>
              <h2>Tell us what your market needs next.</h2>
              <p>Share the product direction, sales channel, target quantity, market, and timeline. Karen and the sales team will review the brief and respond with practical next steps.</p>
              <div className={styles.contactFacts}>
                <a href="mailto:real@realbaby.cn">real@realbaby.cn</a>
                <a href="https://wa.me/8617317800686">WhatsApp +86 173 1780 0686</a>
                <span>Shanghai, China</span>
              </div>
            </div>
            <HomeInquiryForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
