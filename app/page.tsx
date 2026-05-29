"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type Category = {
  name: string;
  shortDesc: string;
  url: string;
  imageAlt: string;
};

type Advantage = {
  title: string;
  proof: string;
};

type Faq = {
  question: string;
  answer: string;
};

const categories: Category[] = [
  {
    name: "Play Gym",
    shortDesc:
      "Soft and engaging activity mats designed for early sensory development.",
    url: "/products/play-gym",
    imageAlt: "Realbaby Play Gym product category for infant sensory development"
  },
  {
    name: "Quiet Books",
    shortDesc:
      "Interactive fabric learning books supporting cognitive and fine motor skills.",
    url: "/products/quiet-books",
    imageAlt: "Realbaby Quiet Books category for toddler educational play"
  },
  {
    name: "AI Friends",
    shortDesc:
      "Smart companion toys developed for modern family interaction experiences.",
    url: "/products/ai-friends",
    imageAlt: "Realbaby AI Friends category for interactive baby toy solutions"
  }
];

const advantages: Advantage[] = [
  {
    title: "OEM & ODM Customization",
    proof:
      "From concept, fabric, and packaging to final shipment, we support custom development."
  },
  {
    title: "Global Delivery Capability",
    proof:
      "Export-oriented team with practical experience serving Europe, North America, and Australia."
  },
  {
    title: "Quality Control Workflow",
    proof:
      "Production quality checks are integrated from material selection to final packing."
  },
  {
    title: "B2B Buyer-Focused Service",
    proof:
      "Fast quotation and structured communication for importers, wholesalers, and retail channels."
  }
];

const faqs: Faq[] = [
  {
    question: "What is your MOQ for OEM or private label orders?",
    answer:
      "MOQ depends on product type and customization depth. Please send your target model and market, and we will share a practical MOQ range."
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer:
      "Yes. Sample support is available for product testing and internal review before mass production."
  },
  {
    question: "What is your typical lead time?",
    answer:
      "Lead time varies by product complexity, order quantity, and customization needs. Exact timeline will be confirmed in quotation."
  },
  {
    question: "Can you support product customization and packaging design?",
    answer:
      "Yes. We provide OEM/ODM customization including product details, material selection, labels, and package solutions."
  },
  {
    question: "What certifications are available?",
    answer:
      "Certification availability depends on each product line. We only provide authentic and verifiable compliance documents."
  }
];

function track(eventName: string, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const event = { event: eventName, ...payload };
  // eslint-disable-next-line no-console
  console.log("[tracking]", event);
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const utm = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const values = keys
      .map((key) => {
        const value = params.get(key);
        return value ? `${key}=${value}` : "";
      })
      .filter(Boolean);
    return values.join("&");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requiredFields = [
      "name",
      "email",
      "country",
      "salesChannel",
      "productRequirement",
      "message"
    ];

    const missing = requiredFields.some((field) => !String(formData.get(field) || "").trim());
    if (missing) {
      setFormError("Please complete all required fields before submission.");
      return;
    }

    setFormError("");
    setSubmitted(true);
    track("form_submit", {
      source: "home_inquiry_form",
      utm
    });
    event.currentTarget.reset();
  }

  return (
    <main>
      <section className="hero section" id="top">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Source Manufacturer | OEM & ODM</p>
            <h1>Realbaby Baby Products Built for Global B2B Growth</h1>
            <p className="hero-copy">
              Realbaby is an OEM/ODM solution provider for baby products including Play Gym,
              Quiet Books, and AI Friends. We help importers and wholesalers launch reliable
              product lines with clear communication and steady delivery support.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="#inquiry-form"
                onClick={() => track("cta_click", { cta: "get_a_quote", position: "hero" })}
              >
                Get a Quote
              </a>
              <Link
                className="btn btn-outline"
                href="/products"
                onClick={() => track("cta_click", { cta: "browse_products", position: "hero" })}
              >
                Browse Products
              </Link>
            </div>
            <ul className="trust-list">
              <li>OEM/ODM customization support</li>
              <li>Global delivery capability</li>
              <li>Quality control workflow</li>
            </ul>
            <a
              className="catalog-link"
              href="/realbaby-product-catalog.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => track("catalog_download", { position: "hero" })}
            >
              Download Catalog (Leave inquiry for full version support)
            </a>
          </div>
          <div className="hero-visual">
            <Image
              src="/logo-primary.png"
              alt="Realbaby logo in China Red for OEM and ODM baby product brand"
              width={840}
              height={360}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <h2>Core Product Categories</h2>
          <p className="section-intro">
            Focused category structure for fast buyer understanding and better ad landing reuse.
          </p>
          <div className="card-grid">
            {categories.map((category) => (
              <article className="card" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.shortDesc}</p>
                <Image
                  src="/favicon-512.png"
                  alt={category.imageAlt}
                  width={72}
                  height={72}
                  loading="lazy"
                />
                <Link
                  href={category.url}
                  className="text-link"
                  onClick={() =>
                    track("cta_click", { cta: "category_view", category: category.name })
                  }
                >
                  View category
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-realbaby">
        <div className="container">
          <h2>Why Buyers Work With Realbaby</h2>
          <div className="fact-grid">
            {advantages.map((item) => (
              <article className="fact-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="applications">
        <div className="container">
          <h2>Application and Buyer Scenarios</h2>
          <div className="pill-row">
            <span>Importers</span>
            <span>Wholesalers</span>
            <span>Supermarkets</span>
            <span>Maternity and baby stores</span>
            <span>Early education centers</span>
            <span>E-commerce brands</span>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="about-snapshot">
        <div className="container">
          <h2>Company Snapshot</h2>
          <div className="snapshot">
            <p>
              <strong>Company:</strong> Real International Trading(Shanghai) Co., Ltd
            </p>
            <p>
              <strong>Brand:</strong> Realbaby
            </p>
            <p>
              <strong>Founded:</strong> 2017
            </p>
            <p>
              <strong>Positioning:</strong> Source manufacturer / OEM & ODM solution provider
            </p>
            <p>
              <strong>Main Markets:</strong> Europe, North America, Australia
            </p>
            <p className="placeholder-note">
              Some factory and team details are marked as pending updates and will be completed
              with verified materials only.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="factory-qc">
        <div className="container">
          <h2>Factory and Quality Process</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Workshop and Production</h3>
              <p>Pending verified factory photos.</p>
            </article>
            <article className="card">
              <h3>Inspection and QA Control</h3>
              <p>Pending verified QC process visuals and records.</p>
            </article>
            <article className="card">
              <h3>Packing and Delivery</h3>
              <p>Pending verified export packing and shipment visuals.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="faq">
        <div className="container">
          <h2>FAQ for B2B Buyers</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <a
            className="btn btn-primary"
            href="#inquiry-form"
            onClick={() => track("cta_click", { cta: "get_a_quote", position: "faq" })}
          >
            Get a Quote
          </a>
        </div>
      </section>

      <section className="section" id="inquiry-form">
        <div className="container">
          <h2>Send Your Inquiry</h2>
          <p className="section-intro">
            Please share your target market, sales channel, and product plan. Our sales team will
            contact you soon.
          </p>
          <form className="inquiry-form" onSubmit={handleSubmit}>
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
              <input name="salesChannel" type="text" required />
            </label>
            <label>
              Product Requirement *
              <input name="productRequirement" type="text" required />
            </label>
            <label>
              WhatsApp (Optional)
              <input name="whatsapp" type="text" />
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
            {submitted ? (
              <p className="success">
                Thank you. Our sales team will contact you soon.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">Realbaby</p>
            <p>Real International Trading(Shanghai) Co., Ltd</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#top">Home</a>
            <a href="#products">Products</a>
            <a href="#faq">FAQ</a>
            <a href="#inquiry-form">Contact</a>
          </nav>
          <div>
            <p>Email: Pending update</p>
            <p>WhatsApp: Pending update</p>
            <p>Address: Pending update</p>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
