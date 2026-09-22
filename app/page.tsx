import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeInquiryForm } from "../components/HomeInquiryForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { buyerChannels, playMoments, products, productSeries } from "./data";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

const proofPoints = [
  ["500 pcs+", "typical MOQ for many custom soft-product projects"],
  ["10-15 days", "typical standard sampling reference"],
  ["40-70 days", "typical production lead-time reference"],
  ["US · CA · AU · UK · EU", "current market focus"]
];

const customCapabilities = [
  "Existing style selection",
  "Custom product design",
  "Fabric and material selection",
  "Embroidery and printing",
  "Private label development",
  "Custom packaging",
  "Sample development",
  "Quality inspection coordination",
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
  ["ASTM F963", "/images/compliance/astm-redacted.png"],
  ["CPC", "/images/compliance/cpc-redacted.png"],
  ["EN71", "/images/compliance/en71-redacted.png"],
  ["CE / DoC", "/images/compliance/ce-redacted.png"]
];

const buyerFeedback = [
  {
    quote: "The bear was absolutely perfect. Quality and service were outstanding.",
    buyer: "C***a, USA",
    project: "Custom mini plush set"
  },
  {
    quote: "Very nice supplier and good quality. We have started long-term cooperation.",
    buyer: "S***r, Netherlands",
    project: "My Quiet Book"
  }
];

const feedbackThemes = [
  "Product quality and finish",
  "Responsive development communication",
  "Repeat and long-term cooperation",
  "Delivery follow-through"
];

const faqItems = [
  ["What is the MOQ for a custom project?", "Many custom soft-product projects start from a typical reference of 500 pieces. Final MOQ depends on construction, materials, packaging, quantity, and customization depth."],
  ["Can RealBaby develop a sample before production?", "Yes. We align the brief, artwork, materials, functions, and packaging direction before sampling, then revise agreed details before bulk approval."],
  ["Which parts of a product can be customized?", "Depending on the product, options may include size, shape, structure, materials, colors, artwork, printing, embroidery, selected functions, labels, private label, and packaging. Feasibility is confirmed for each project."],
  ["Do you support EN71, ASTM F963, CPSIA-related requirements, or CPC preparation?", "Yes, on a project-specific basis. Testing scope and documentation are matched to the actual product, intended age, destination market, and agreed requirements. A CPC applies to a specific US children's product and is not a general company certification."],
  ["How long do sampling and bulk production take?", "Standard soft-product sampling is typically 10-15 days, while production is typically 40-70 days. Final timing depends on construction, materials, packaging, testing, order quantity, and approval rounds."],
  ["Which buyers do you work with?", "RealBaby works with baby brands, importers, distributors, specialty retailers, e-commerce businesses, education channels, and selected retail programs."]
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
              <p className={styles.eyebrow}>OEM / ODM DEVELOPMENT PARTNER</p>
              <h1>Soft play made for <span>real childhood.</span></h1>
              <p className={styles.slogan}>Real play. Real growth.</p>
              <p className={styles.heroLead}>
                RealBaby connects overseas buyers' product ideas with manufacturing reality, helping baby brands, importers, distributors, specialty retailers, e-commerce businesses, and education channels build practical soft-play and developmental collections.
              </p>
              <div className={styles.heroActions}>
                <Link className="btn btn-primary" href="/contact">Get a Quote</Link>
                <a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Download 2026 Catalog</a>
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
                  alt="RealBaby soft play collection in a warm nursery setting"
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
          <div className={`container ${styles.proofBlock}`}>
            <div className={styles.proofHeading}>
              <span>REAL CAPABILITY. CLEAR NUMBERS.</span>
              <p>Reference values for buyer planning. Final terms are confirmed by product and project.</p>
            </div>
            <div className={styles.proofRail} aria-label="RealBaby commercial reference data">
              {proofPoints.map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.audience} aria-label="Who we serve">
          <div className={`container ${styles.audienceInner}`}>
            <strong>Built for professional buyers</strong>
            <span>Importers & Distributors</span><span>Baby Brands</span><span>Education Channels</span>
            <span>Baby Stores</span><span>E-commerce Businesses</span><span>Retail Chains</span>
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
                    <Image src={series.image} alt={`RealBaby ${series.name} product series`} width={900} height={1200} sizes="(max-width: 720px) 100vw, 33vw" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className={styles.seriesBody}>
                    <div><span>Series direction · {series.age}</span><h3>{series.name}</h3></div>
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
                  <Image src={moment.image} alt={`RealBaby ${moment.name} play moment`} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 40vw" />
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
                  <span>{product.series} · age direction {product.age}</span>
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
              <Image className={styles.packageMain} src="/images/packaging/product-gift-box.webp" alt="RealBaby retail-ready product gift box" width={1448} height={1086} />
              <Image className={styles.packageSmallOne} src="/images/packaging/signature-red-box.webp" alt="RealBaby custom red signature gift box" width={1254} height={1254} />
              <Image className={styles.packageSmallTwo} src="/images/packaging/shopping-bag.webp" alt="RealBaby branded shopping bag" width={1254} height={1254} />
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
              <p>RealBaby coordinates specialized production resources and keeps buyers aligned at each approval point.</p>
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
                <div className={styles.materialTags}><span>Material preparation</span><span>Embroidery</span><span>Sewing</span><span>Assembly & finishing</span><span>Quality check</span><span>Packing & warehouse</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.qualitySection}`} id="quality">
          <div className="container">
            <div className={styles.sectionHead}>
              <div><p>QUALITY & SAFETY SUPPORT</p><h2>Evidence for the product and market in front of us.</h2></div>
              <p>Representative, product-specific files are shown for EN71, ASTM F963, CPC, and declaration-related support. Testing and documentation scope must be confirmed for the actual product, intended age, destination market, and project.</p>
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
                <p>The displayed retailer assessment and SMETA-related materials are representative supply-chain evidence. They do not certify RealBaby itself or imply that every production resource has the same audit status. Applicable scope is confirmed before quotation, and sensitive details are redacted in public previews.</p>
                <div>
                  <Image src="/images/compliance/retailer-audit-redacted.png" alt="Redacted representative retailer audit document" width={1188} height={1107} />
                  <Image src="/images/compliance/sedex-report.webp" alt="Representative SMETA-related supply-chain document" width={888} height={1170} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.feedbackSection} aria-labelledby="buyer-feedback-title">
          <div className="container">
            <div className={`${styles.sectionHead} ${styles.feedbackHead}`}>
              <div><p>SELECTED BUYER FEEDBACK</p><h2 id="buyer-feedback-title">What buyers value after delivery.</h2></div>
              <p>Names remain masked as shown in the supplied review evidence. Quotes represent selected completed projects.</p>
            </div>
            <div className={styles.feedbackLayout}>
              <div className={styles.feedbackQuotes}>
                {buyerFeedback.map((item) => (
                  <blockquote key={item.buyer}>
                    <span aria-hidden="true">“</span>
                    <p>{item.quote}</p>
                    <footer><strong>{item.buyer}</strong><small>{item.project}</small></footer>
                  </blockquote>
                ))}
              </div>
              <aside className={styles.feedbackThemes}>
                <p className={styles.eyebrow}>RECURRING THEMES</p>
                {feedbackThemes.map((theme, index) => <div key={theme}><span>0{index + 1}</span><strong>{theme}</strong></div>)}
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.storySection} id="about">
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyImage}><Image src="/images/company/team.webp" alt="RealBaby team presentation" width={1448} height={1086} /></div>
            <div>
              <p className={styles.eyebrow}>BEHIND REALBABY</p>
              <h2>Real people. Real passion. Real dedication.</h2>
              <p>Founded in 2021, RealBaby is a Baby Soft Play & Developmental Products OEM/ODM Partner for overseas B2B buyers.</p>
              <p>Founder Karen brings 15+ years of experience in baby toys and related products, connecting each buyer's vision with practical manufacturing decisions.</p>
              <p>We believe children grow through real touch, real exploration, real companionship, and real play. Our work connects developmental thinking with commercially practical OEM/ODM execution.</p>
              <blockquote>“We are not here to make children grow faster. We are here to help them grow more naturally.”</blockquote>
              <div className={styles.storyActions}>
                <Link className={styles.arrowLink} href="/about">Meet RealBaby <span>↗</span></Link>
                <a className={styles.documentLink} href="/realbaby-company-profile-2026.pdf">Download Company Profile</a>
              </div>
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
              <p>Share the product direction, sales channel, target quantity, market, and timeline. Karen and the team will review the brief for product feasibility, materials, construction, safety, packaging, cost direction, and practical next steps.</p>
              <div className={styles.contactFacts}>
                <a href="mailto:real@realbaby.cn">real@realbaby.cn</a>
                <a href="https://wa.me/8617317800686">WhatsApp +86 173 1780 0686</a>
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
