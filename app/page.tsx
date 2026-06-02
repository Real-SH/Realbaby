"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type ProductCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

type MegaItem = ProductCard & {
  detail: string;
};

const megaItems: MegaItem[] = [
  {
    title: "2-in-1 Bear Activity Nest",
    text: "Ultra-soft comfort with detachable arches and sensory toys.",
    detail: "First Play",
    image: "/mega/p01.png",
    alt: "Realbaby 2-in-1 Bear Activity Nest"
  },
  {
    title: "Space Explorer Activity Gym",
    text: "High-contrast visual play with interactive hanging toys.",
    detail: "First Play",
    image: "/mega/p02.png",
    alt: "Realbaby Space Explorer Activity Gym"
  },
  {
    title: "Dream Bunny Activity Gym",
    text: "Nursery-ready pastel style for cuddly discovery moments.",
    detail: "First Play",
    image: "/mega/p03.png",
    alt: "Realbaby Dream Bunny Activity Gym"
  },
  {
    title: "My Quiet Book",
    text: "Hands-on learning pages built for little hands.",
    detail: "Learning Play",
    image: "/mega/p06.png",
    alt: "Realbaby My Quiet Book"
  },
  {
    title: "Cuddle Shirt",
    text: "Wearable sensory interaction for parent-child routines.",
    detail: "Smart Play",
    image: "/mega/p13.png",
    alt: "Realbaby Cuddle Shirt"
  },
  {
    title: "Quality & Packaging",
    text: "Production workflow, audit support, and branded packaging.",
    detail: "Capability",
    image: "/mega/p15.png",
    alt: "Realbaby quality and packaging support"
  }
];

const featuredProducts: ProductCard[] = [
  {
    title: "Bunny Plush",
    text: "Ultra-soft feel and gift-ready comfort character.",
    image: "/mega/p04.png",
    alt: "Realbaby Bunny Plush product presentation"
  },
  {
    title: "Dino Comfort Blanket",
    text: "Calm cuddle design for bedtime and daily routines.",
    image: "/mega/p10.png",
    alt: "Realbaby Dino Comfort Blanket product presentation"
  },
  {
    title: "Sunflower Comfort Blanket",
    text: "Cheerful color and lightweight comfort for little ones.",
    image: "/mega/p12.png",
    alt: "Realbaby Sunflower Comfort Blanket product presentation"
  },
  {
    title: "Crocodile Comfort Blanket",
    text: "Friendly character comfort for cuddles and travel.",
    image: "/mega/p09.png",
    alt: "Realbaby Crocodile Comfort Blanket product presentation"
  },
  {
    title: "Puppy Comfort Blanket",
    text: "Loyal little comfort friend for calm everyday moments.",
    image: "/mega/p11.png",
    alt: "Realbaby Puppy Comfort Blanket product presentation"
  },
  {
    title: "Butterfly Comfort Blanket",
    text: "Bright sensory colors with soft cuddle companionship.",
    image: "/mega/p08.png",
    alt: "Realbaby Butterfly Comfort Blanket product presentation"
  }
];

const seriesCards: ProductCard[] = [
  {
    title: "First Play",
    text: "Sensory, safe, and soft activity-focused products.",
    image: "/mega/p03.png",
    alt: "Realbaby First Play baby activity gym series"
  },
  {
    title: "Learning Play",
    text: "Hands-on materials for cognitive and discovery moments.",
    image: "/mega/p06.png",
    alt: "Realbaby Learning Play quiet book series"
  },
  {
    title: "Smart / Wearable Play",
    text: "Interactive products for parent-child learning scenes.",
    image: "/mega/p13.png",
    alt: "Realbaby Smart Wearable Play cuddle shirt series"
  }
];

const capabilityCards: ProductCard[] = [
  {
    title: "Audit & Compliance Support",
    text: "EN71 / ASTM / CPC and audit-ready documentation support.",
    image: "/mega/p15.png",
    alt: "Realbaby production and quality assurance workflow"
  },
  {
    title: "Materials & Packaging",
    text: "Eco-focused fabrics, detail finishing, and custom pack solutions.",
    image: "/mega/p14.png",
    alt: "Realbaby materials details and packaging support"
  },
  {
    title: "Custom Packaging Support",
    text: "Gift box, hang tag, shopping bag, and insert solutions.",
    image: "/mega/p17.png",
    alt: "Realbaby brand packaging and retail presentation"
  }
];

const buyerScenarios = [
  "Importers",
  "Wholesalers",
  "Supermarkets",
  "Baby Stores",
  "E-commerce Brands",
  "Early Education Channels"
];

function track(eventName: string, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  // Placeholder for future ad/SEO attribution events.
  console.log("[tracking]", { event: eventName, ...payload });
}

export default function HomePage() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const utm = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams(window.location.search);
    return ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
      .map((key) => {
        const value = params.get(key);
        return value ? `${key}=${value}` : "";
      })
      .filter(Boolean)
      .join("&");
  }, []);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requiredFields = ["name", "email", "country", "buyerType", "requirement", "message"];
    const missing = requiredFields.some((field) => !String(formData.get(field) || "").trim());

    if (missing) {
      setFormError("Please complete all required fields before submission.");
      return;
    }

    setFormError("");
    setSubmitted(true);
    track("form_submit", { source: "home_inquiry_form", utm });
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-lockup" href="#top" aria-label="Realbaby home">
            <Image src="/favicon-512.png" alt="Realbaby icon" width={50} height={50} priority />
            <span>
              <strong>realbaby</strong>
              <em>Real play. Real growth.</em>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              <li
                className={`mega-root ${megaOpen ? "open" : ""}`}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className="nav-btn"
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="mega-panel"
                  onClick={() => setMegaOpen((value) => !value)}
                >
                  Products
                </button>
                <div className="mega-panel" id="mega-panel" aria-label="Product mega menu">
                  <div className="mega-top">
                    <div>
                      <h3>Real play. Real growth.</h3>
                      <p>Buyer-ready product directions from soft play to packaging support.</p>
                    </div>
                    <div className="mega-pill-row">
                      <span>OEM / ODM</span>
                      <span>Materials Ready</span>
                      <span>QC Workflow</span>
                      <span>Export Packaging</span>
                    </div>
                  </div>
                  <div className="mega-grid">
                    <div className="mega-left">
                      {megaItems.map((item) => (
                        <a className="mega-card" href="#products" key={item.title}>
                          <Image src={item.image} alt={item.alt} width={420} height={315} />
                          <div>
                            <small>{item.detail}</small>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <aside className="mega-feature">
                      <Image
                        src="/mega/p14.png"
                        alt="Realbaby materials details and packaging"
                        width={520}
                        height={680}
                      />
                      <h4>Materials, Details & Packaging</h4>
                      <p>
                        Fabric selection, embroidery, hang tags, gift boxes, and export-ready
                        retail presentation can be adapted to your collection.
                      </p>
                      <div className="mega-actions">
                        <a className="btn btn-primary" href="#contact">
                          Get a Quote
                        </a>
                        <a className="btn btn-outline" href="/realbaby-product-catalog.pdf">
                          Catalog
                        </a>
                      </div>
                    </aside>
                  </div>
                </div>
              </li>
              <li><a href="#series">Series</a></li>
              <li><a href="#capability">Capability</a></li>
              <li><a href="#compliance">Compliance</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a className="btn btn-outline" href="/realbaby-product-catalog.pdf">Catalog</a>
            <a className="btn btn-primary" href="#contact">Get a Quote</a>
          </div>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="container hero-grid">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Source Manufacturer | OEM & ODM</p>
            <h1>
              Made for real childhood.
              <span>Real play. Real growth.</span>
            </h1>
            <p className="hero-copy">
              Realbaby develops practical and premium baby products for importers,
              distributors, and e-commerce brands. We combine emotional design with scalable
              manufacturing and export-ready quality workflows.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="#contact"
                onClick={() => track("cta_click", { cta: "get_a_quote", position: "hero" })}
              >
                Get a Quote
              </a>
              <a
                className="btn btn-outline"
                href="#products"
                onClick={() => track("cta_click", { cta: "browse_product_lines", position: "hero" })}
              >
                Browse Product Lines
              </a>
            </div>
            <div className="hero-proof">
              <span>OEM / ODM Support</span>
              <span>Quality Workflow</span>
              <span>Export Packaging</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/mega/p02.png"
              alt="Realbaby Space Explorer Activity Gym hero product visual"
              width={900}
              height={1125}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section band" id="products">
        <div className="container">
          <div className="section-heading">
            <span>Featured Collection</span>
            <h2>Product presentations adapted from your latest collection visuals</h2>
            <p>
              A stronger product area for B2B buyers, ad landing pages, and SEO-readable product
              discovery.
            </p>
          </div>
          <div className="cards-3 cards-collection">
            {featuredProducts.map((product) => (
              <article className="card product-card" key={product.title}>
                <Image src={product.image} alt={product.alt} width={720} height={900} />
                <div className="card-body">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="series">
        <div className="container">
          <div className="section-heading compact">
            <span>Product Series Architecture</span>
            <h2>Three clear directions for buyer sourcing</h2>
          </div>
          <div className="cards-3">
            {seriesCards.map((series) => (
              <article className="card" key={series.title}>
                <Image src={series.image} alt={series.alt} width={720} height={540} />
                <div className="card-body">
                  <h3>{series.title}</h3>
                  <p>{series.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" id="capability">
        <div className="container">
          <div className="section-heading">
            <span>Production & Quality Capability</span>
            <h2>From product concept to retail-ready packaging</h2>
            <p>
              Realbaby supports sampling, material sourcing, embroidery, sewing, quality checks,
              packaging, and delivery for market-ready collections.
            </p>
          </div>
          <div className="cards-3">
            {capabilityCards.map((item) => (
              <article className="card" key={item.title}>
                <Image src={item.image} alt={item.alt} width={900} height={1170} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="applications">
        <div className="container application-panel">
          <div>
            <span className="section-kicker">Application & Buyer Scenarios</span>
            <h2>Built for practical B2B sourcing conversations</h2>
          </div>
          <div className="pill-row">
            {buyerScenarios.map((scenario) => (
              <span key={scenario}>{scenario}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="compliance">
        <div className="container">
          <div className="section-heading">
            <span>Safety & Compliance</span>
            <h2>You can trust the documents behind the collection</h2>
            <p>
              Selected Realbaby products can be supported with EN71, ASTM, and CPC-related
              testing documentation. Factory audit and compliance files can be shared according to
              buyer requirements.
            </p>
          </div>
          <div className="trust-grid">
            <article className="trust-card">
              <Image
                src="/mega/p18.png"
                alt="Realbaby safety and compliance certificate showcase"
                width={1400}
                height={900}
              />
              <div>
                <h3>Certificates & Test Documentation</h3>
                <p>
                  Representative test reports and product compliance files are prepared for
                  distributor and retail review.
                </p>
              </div>
            </article>
            <article className="trust-card">
              <Image
                src="/mega/p15.png"
                alt="Realbaby production and factory audit workflow visual"
                width={900}
                height={1170}
              />
              <div>
                <h3>Factory Audit Readiness</h3>
                <p>
                  Practical production workflow from inquiry and sampling to sewing, QC testing,
                  and packaging delivery.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section band" id="team">
        <div className="container team-grid">
          <article className="team-photo">
            <Image
              src="/mega/p19.png"
              alt="Realbaby team introduction and cooperation process"
              width={1600}
              height={900}
            />
          </article>
          <article className="team-side">
            <span className="section-kicker">Behind Realbaby</span>
            <h2>Build Your Realbaby Collection</h2>
            <p>
              Real people, real passion, and real dedication. Our team supports design, sampling,
              production, quality, and export coordination for your collection growth.
            </p>
            <ul className="contact-list">
              <li><strong>Website:</strong> realbabytoy.com</li>
              <li><strong>Email:</strong> real@realbaby.cn</li>
              <li><strong>WhatsApp:</strong> +86 17317800686</li>
              <li><strong>Contact:</strong> Karen</li>
              <li><strong>Location:</strong> Shanghai</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker">Request a Product Proposal</span>
            <h2>Tell us your target market and collection plan</h2>
            <p>
              Share your product direction, buyer type, and expected market. We will reply with a
              practical sourcing plan and quotation support.
            </p>
            <a className="catalog-link" href="/realbaby-product-catalog.pdf">
              Download Realbaby Catalog
            </a>
          </div>
          <form className="inquiry-form" onSubmit={submitInquiry}>
            <label>
              Name *
              <input name="name" type="text" required />
            </label>
            <label>
              Email *
              <input name="email" type="email" required />
            </label>
            <label>
              Country *
              <input name="country" type="text" required />
            </label>
            <label>
              Sales Channel / Buyer Type *
              <input name="buyerType" type="text" required />
            </label>
            <label className="full-width">
              Product Requirement *
              <input name="requirement" type="text" required />
            </label>
            <label>
              WhatsApp
              <input name="whatsapp" type="text" />
            </label>
            <label>
              Expected Quantity
              <input name="quantity" type="text" />
            </label>
            <label className="full-width">
              Message *
              <textarea name="message" rows={5} required />
            </label>
            <input type="hidden" name="utm" value={utm} />
            <button type="submit" className="btn btn-primary">
              Get a Quote
            </button>
            {formError ? <p className="error">{formError}</p> : null}
            {submitted ? <p className="success">Thank you. Our sales team will contact you soon.</p> : null}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">realbaby</p>
            <p>Real play. Real growth.</p>
            <p>Made for real childhood.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#products">Products</a>
            <a href="#series">Series</a>
            <a href="#capability">Capability</a>
            <a href="#compliance">Compliance</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <p>Real International Trading(Shanghai) Co., Ltd</p>
            <p>Email: real@realbaby.cn</p>
            <p>WhatsApp: +86 17317800686</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
