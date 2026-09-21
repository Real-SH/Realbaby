"use client";

import Image from "next/image";
import { FormEvent, useMemo, useRef, useState } from "react";
import { LocationMap } from "../components/LocationMap";
import { companyLocation } from "./data";

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
    title: "Baby Activity Gyms",
    text: "Soft play mats, arches, hanging toys, tummy-time details, and retail packaging.",
    detail: "Developmental Play",
    image: "/mega/p01.png",
    alt: "Realbaby 2-in-1 Bear Activity Nest"
  },
  {
    title: "High-Contrast Play Mats",
    text: "Visual discovery concepts for early-stage infant play and sensory routines.",
    detail: "Infant Visual Play",
    image: "/mega/p02.png",
    alt: "Realbaby Space Explorer Activity Gym"
  },
  {
    title: "Comfort Blankets",
    text: "Soft character comfort products for baby stores, gift sets, and nursery ranges.",
    detail: "Soothing Products",
    image: "/mega/p03.png",
    alt: "Realbaby Dream Bunny Activity Gym"
  },
  {
    title: "Soft Quiet Books",
    text: "Cloth learning books with custom themes, page structures, and safe details.",
    detail: "Soft Learning",
    image: "/mega/p06.png",
    alt: "Realbaby My Quiet Book"
  },
  {
    title: "Interactive Play Concepts",
    text: "Wearable, sensory, and smart-play directions for differentiated collections.",
    detail: "Innovation",
    image: "/mega/p13.png",
    alt: "Realbaby Cuddle Shirt"
  },
  {
    title: "Retail Packaging Support",
    text: "Hang tags, inserts, gift boxes, display-ready packs, and export cartons.",
    detail: "Capability",
    image: "/mega/p15.png",
    alt: "Realbaby quality and packaging support"
  }
];

const featuredProducts: ProductCard[] = [
  {
    title: "Baby Activity Gym Programs",
    text: "OEM/ODM play gyms with arches, mat shapes, toy attachments, fabrics, and packaging adapted for retail programs.",
    image: "/mega/p04.png",
    alt: "Realbaby Bunny Plush product presentation"
  },
  {
    title: "Comfort Blanket Collections",
    text: "Character comfort blankets built for gift channels, baby stores, subscription boxes, and private-label ranges.",
    image: "/mega/p10.png",
    alt: "Realbaby Dino Comfort Blanket product presentation"
  },
  {
    title: "Soft Quiet Books",
    text: "Hands-on cloth books with custom educational themes, stitching details, and market-specific content.",
    image: "/mega/p12.png",
    alt: "Realbaby Sunflower Comfort Blanket product presentation"
  },
  {
    title: "Plush Soothers & Soft Characters",
    text: "Baby-safe plush companions and soothing products with fabric, embroidery, and label customization.",
    image: "/mega/p09.png",
    alt: "Realbaby Crocodile Comfort Blanket product presentation"
  },
  {
    title: "Wearable / Parent-Child Play",
    text: "Soft wearable interaction concepts for brands that want a more differentiated baby product line.",
    image: "/mega/p11.png",
    alt: "Realbaby Puppy Comfort Blanket product presentation"
  },
  {
    title: "Gift-Ready Baby Sets",
    text: "Collection planning across product, packaging, insert cards, labels, and buyer presentation assets.",
    image: "/mega/p08.png",
    alt: "Realbaby Butterfly Comfort Blanket product presentation"
  }
];

const seriesCards: ProductCard[] = [
  {
    title: "Developmental Activity Play",
    text: "Activity gyms, play mats, arches, and hanging toys designed around early sensory and motor development.",
    image: "/mega/p03.png",
    alt: "Realbaby First Play baby activity gym series"
  },
  {
    title: "Soft Learning & Quiet Books",
    text: "Cloth books and tactile learning pages that help buyers build education-focused baby collections.",
    image: "/mega/p06.png",
    alt: "Realbaby Learning Play quiet book series"
  },
  {
    title: "Comfort & Soothing Companions",
    text: "Comfort blankets, plush soothers, and soft characters for calm routines, gift sets, and nursery channels.",
    image: "/mega/p10.png",
    alt: "Realbaby comfort blanket and plush soother series"
  },
  {
    title: "Smart / Wearable Play",
    text: "Interactive soft product concepts for brands exploring parent-child engagement beyond generic plush.",
    image: "/mega/p13.png",
    alt: "Realbaby Smart Wearable Play cuddle shirt series"
  }
];

const capabilityCards: ProductCard[] = [
  {
    title: "Development From Sketch to Sample",
    text: "Product direction, materials, structure, sample revision, and buyer-ready presentation support.",
    image: "/mega/p14.png",
    alt: "Realbaby materials details and packaging support"
  },
  {
    title: "Compliance Documentation Support",
    text: "EN71, ASTM, CPC-related testing documentation can be prepared according to product and market requirements.",
    image: "/mega/p15.png",
    alt: "Realbaby production and quality assurance workflow"
  },
  {
    title: "Retail-Ready Packaging",
    text: "Gift boxes, hang tags, inserts, display packaging, and export cartons for private-label baby programs.",
    image: "/mega/p17.png",
    alt: "Realbaby brand packaging and retail presentation"
  }
];

const advantageCards = [
  {
    title: "Focused baby product development",
    text: "A clear specialization in soft play, comfort, learning, and developmental products for babies and toddlers."
  },
  {
    title: "B2B-ready OEM / ODM support",
    text: "Product structure, materials, labels, packaging, sampling, and buyer communication are planned as one practical workflow."
  },
  {
    title: "Verifiable quality communication",
    text: "Testing and compliance information is shared according to the actual product, destination market, and available documentation."
  }
];

const processSteps = [
  "Share idea, target market, and quantity",
  "Confirm product structure, materials, and packaging direction",
  "Develop sample and revise details",
  "Prepare compliance and quality documentation as required",
  "Move to production, inspection, packing, and shipment support"
];

const buyerScenarios = [
  "Baby Product Importers",
  "Private-Label Baby Brands",
  "Supermarkets",
  "Baby Stores",
  "E-commerce & DTC Brands",
  "Early Education Channels",
  "Gift & Subscription Boxes"
];

const faqItems = [
  {
    question: "What is the MOQ for custom baby products?",
    answer: "MOQ depends on product structure, materials, packaging, and customization depth. Share your target quantity and we will recommend a practical development route."
  },
  {
    question: "Can you develop samples before bulk production?",
    answer: "Yes. We confirm the concept, materials, artwork, and packaging direction before sampling, then revise key details with your team."
  },
  {
    question: "How long does sampling and production take?",
    answer: "Timing varies by product complexity and approval rounds. A project-specific schedule is provided after requirements are reviewed."
  },
  {
    question: "Do you support private labels and custom packaging?",
    answer: "Yes. We support labels, embroidery, colors, hang tags, inserts, gift boxes, display packs, and export cartons according to project needs."
  },
  {
    question: "Can you support EN71, ASTM, or CPC documentation?",
    answer: "Testing and documentation support is planned according to the product and destination market. Only authentic, project-relevant files are shared."
  }
];

function track(eventName: string, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };
  analyticsWindow.dataLayer?.push({ event: eventName, ...payload });
}

export default function HomePage() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [formFeedback, setFormFeedback] = useState("");
  const startedAtRef = useRef(Date.now());

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

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const requiredFields = ["name", "email", "country", "buyerType", "requirement", "message"];
    const missing = requiredFields.some((field) => !String(formData.get(field) || "").trim());

    if (missing) {
      setFormError("Please complete all required fields before submission.");
      setSubmitStatus("error");
      return;
    }

    setFormError("");
    setFormFeedback("Submitting your inquiry...");
    setSubmitStatus("submitting");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("whatsapp"),
          country: formData.get("country"),
          buyerType: formData.get("buyerType"),
          productRequirement: formData.get("requirement"),
          quantity: formData.get("quantity"),
          message: formData.get("message"),
          utm,
          sourcePath: "/",
          startedAt: startedAtRef.current
        })
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!response.ok || !result?.ok) throw new Error(result?.message || "Submission failed. Please try again.");

      setSubmitStatus("success");
      setFormFeedback(result.message || "Thank you. Our sales team will contact you soon.");
      track("form_submit", { source: "home_inquiry_form", utm });
      form.reset();
      startedAtRef.current = Date.now();
    } catch (error) {
      setSubmitStatus("error");
      setFormFeedback(error instanceof Error ? error.message : "Submission failed. Please email real@realbaby.cn.");
    }
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
                      <h3>Baby soft play sourcing</h3>
                      <p>Focused product directions from developmental play to retail packaging.</p>
                    </div>
                    <div className="mega-pill-row">
                      <span>Activity Gyms</span>
                      <span>Quiet Books</span>
                      <span>Comfort Blankets</span>
                      <span>OEM / ODM</span>
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
                        Fabric selection, embroidery, labels, hang tags, gift boxes, and
                        export-ready retail presentation can be adapted to your baby collection.
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
            <p className="eyebrow">Baby Soft Play OEM / ODM Partner</p>
            <h1>
              Baby soft play products for real retail programs.
              <span>From activity gyms to quiet books.</span>
            </h1>
            <p className="hero-copy">
              Realbaby helps importers, baby brands, supermarkets, and e-commerce sellers develop
              soft developmental products with practical customization, retail packaging, and
              export-ready quality workflows.
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
              <span>Founded 2017</span>
              <span>OEM / ODM Baby Soft Goods</span>
              <span>EN71 / ASTM / CPC Support</span>
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
            <h2>Core product directions for baby sourcing teams</h2>
            <p>
              Explore a focused range for sourcing teams:
              soft developmental play, comfort, learning, and retail-ready baby collections.
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
            <h2>A focused category architecture buyers can understand quickly</h2>
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
            <h2>From baby product concept to retail-ready packaging</h2>
            <p>
              Realbaby supports product planning, sampling, material sourcing, embroidery,
              sewing, quality checks, packaging, and delivery coordination for market-ready baby
              collections.
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
          <div className="capability-map">
            <LocationMap title="Realbaby Business Location" address={companyLocation.address} viewUrl={companyLocation.googleMapsUrl} zoom={10} />
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

      <section className="section band" id="advantages">
        <div className="container">
          <div className="section-heading">
            <span>Positioning Advantage</span>
              <h2>A sourcing partner built around clarity</h2>
              <p>
                Product focus, practical development steps, transparent customization, and
                verifiable quality support help buying teams move from idea to quotation faster.
              </p>
          </div>
          <div className="advantage-grid">
            {advantageCards.map((item) => (
              <article className="advantage-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container process-grid">
          <div>
            <span className="section-kicker">OEM / ODM Development Process</span>
            <h2>A practical path from idea to shipment</h2>
            <p>
              Buyers know what information to send, what our team will confirm, and how a project
              moves from concept and sampling through production and delivery.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="compliance">
        <div className="container">
          <div className="section-heading">
            <span>Safety & Compliance</span>
            <h2>Keep claims verifiable and buyer-friendly</h2>
            <p>
              Selected Realbaby products can be supported with EN71, ASTM, and CPC-related testing
              documentation. Factory audit and compliance files can be shared according to buyer
              requirements and actual project scope.
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
              Real people, practical product development, and reliable follow-up. Our team supports
              design, sampling, production, quality, and export coordination for your baby soft
              product collection.
            </p>
            <ul className="contact-list">
              <li><strong>Website:</strong> realbabytoy.com</li>
              <li><strong>Email:</strong> <a href="mailto:real@realbaby.cn">real@realbaby.cn</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/8617317800686" target="_blank" rel="noreferrer">+86 173 1780 0686</a></li>
              <li><strong>Contact:</strong> Karen</li>
              <li><strong>Location:</strong> Shanghai</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div>
            <span className="section-kicker">Buyer FAQ</span>
            <h2>Practical answers before you request a quote</h2>
            <p>Final terms are confirmed against the actual product, market, and order scope.</p>
            <a className="btn btn-outline" href="#contact">Ask a Project Question</a>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker">Request a Product Proposal</span>
            <h2>Tell us your target market and collection plan</h2>
            <p>
              Share your product direction, buyer type, expected quantity, and target market. We
              will reply with a practical sourcing plan and quotation support.
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
              <input name="requirement" type="text" placeholder="Activity gym, quiet book, comfort blanket..." required />
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
            <button type="submit" className="btn btn-primary" disabled={submitStatus === "submitting"}>
              {submitStatus === "submitting" ? "Submitting..." : "Get a Quote"}
            </button>
            {formError ? <p className="error" role="alert">{formError}</p> : null}
            {formFeedback ? (
              <p className={submitStatus === "success" ? "success" : submitStatus === "error" ? "error" : ""} aria-live="polite">
                {formFeedback}
              </p>
            ) : null}
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
            <p>Email: <a href="mailto:real@realbaby.cn">real@realbaby.cn</a></p>
            <p>WhatsApp: <a href="https://wa.me/8617317800686" target="_blank" rel="noreferrer">+86 173 1780 0686</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
