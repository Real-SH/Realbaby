export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  updated: string;
  readTime: string;
  relatedProductSlug: string;
  relatedProductLabel: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "buyer-rfq-checklist",
    category: "Sourcing Guide",
    title: "How to Write a Better RFQ for Baby Soft Products",
    summary: "A practical brief for importers and brands requesting prices for cloth books, activity gyms, comfort products, and plush collections.",
    image: "/images/company/capability-overview.webp",
    imageAlt: "RealBaby OEM and ODM product development workflow",
    updated: "September 2026",
    readTime: "5 min read",
    relatedProductSlug: "my-quiet-book",
    relatedProductLabel: "Explore My Quiet Book",
    sections: [
      {
        heading: "Start with the sales context",
        paragraphs: [
          "A useful RFQ explains where the product will be sold, who the buyer is, and how the item should sit within the range. This helps the development team evaluate construction, packaging, testing, and price direction together rather than quoting an incomplete specification."
        ],
        bullets: ["Destination market and sales channel", "Target age and intended play pattern", "Target retail or landed-cost direction", "Expected launch date and first-order quantity"]
      },
      {
        heading: "Define the product before asking for a final price",
        paragraphs: [
          "Reference images are helpful, but they are not a complete specification. Provide dimensions, fabric direction, filling, page count, detachable parts, sound or crinkle elements, logo method, labels, and packaging requirements where known."
        ],
        bullets: ["Product size and construction", "Materials, colors, artwork, and accessories", "Logo, care label, tracking label, and barcode needs", "Individual pack, display pack, and export-carton expectations"]
      },
      {
        heading: "Separate estimates from confirmed terms",
        paragraphs: [
          "RealBaby commonly discusses projects from 500 pieces, standard sampling around 10-15 days, and production around 40-70 days. These are planning references only. Final MOQ, cost, and timing depend on the approved design, material availability, testing, packaging, quantity, and delivery plan."
        ]
      },
      {
        heading: "Ask for a clear quotation package",
        paragraphs: [
          "A buyer-ready quotation should state what is included, what remains provisional, sample charges, tooling or artwork costs, packaging assumptions, testing scope, payment terms, and quotation validity. A clear brief reduces revisions and makes supplier comparisons more meaningful."
        ]
      }
    ]
  },
  {
    slug: "baby-toy-compliance",
    category: "Quality & Compliance",
    title: "EN71, ASTM F963 and CPSIA: A Buyer's Starting Checklist",
    summary: "What B2B buyers should clarify before arranging testing for soft baby toys and developmental products.",
    image: "/images/compliance/astm-redacted.png",
    imageAlt: "Representative baby product compliance document",
    updated: "September 2026",
    readTime: "6 min read",
    relatedProductSlug: "teether-soother",
    relatedProductLabel: "Explore Teether Soother",
    sections: [
      {
        heading: "Compliance follows the actual product",
        paragraphs: [
          "Testing should be based on the final construction, intended age, destination market, materials, attachments, packaging, and labeling. A report for a similar item does not automatically cover a new design or a changed component."
        ]
      },
      {
        heading: "Confirm the market and age grade first",
        paragraphs: [
          "EN71 is commonly discussed for European toy projects, while ASTM F963 and CPSIA-related requirements are central to many US children's product programs. The exact scope depends on the product and current market requirements."
        ],
        bullets: ["Destination country or countries", "Intended age grade and play pattern", "Small parts, cords, attachments, and accessible components", "Fabric, filling, coating, ink, plastic, and metal components", "Label, warning, traceability, and language requirements"]
      },
      {
        heading: "Build testing into development",
        paragraphs: [
          "Testing should not be treated as a final administrative step. Material selection, embroidery, attachment strength, seam construction, care labels, warnings, and packaging decisions should be reviewed before the pre-production sample is approved."
        ]
      },
      {
        heading: "Request project-specific documentation",
        paragraphs: [
          "Ask which sample was tested, which standard and clauses were covered, which laboratory issued the report, and whether the report matches the production materials. RealBaby can coordinate project-specific testing and documentation support. For US projects, CPSIA-related requirements and CPC preparation are confirmed for the actual product and agreed scope."
        ]
      },
      {
        heading: "Important note",
        paragraphs: [
          "This guide is a commercial starting point, not legal or regulatory advice. Buyers should confirm current requirements with an accredited laboratory, importer of record, retailer, or qualified compliance adviser for the destination market."
        ]
      }
    ]
  },
  {
    slug: "soft-product-sampling",
    category: "Product Development",
    title: "From Brief to Approved Sample: A Practical Development Timeline",
    summary: "A structured sampling workflow for custom baby soft products, from buyer brief to production approval.",
    image: "/images/products/space-explorer-gym.webp",
    imageAlt: "RealBaby custom activity gym product development direction",
    updated: "September 2026",
    readTime: "5 min read",
    relatedProductSlug: "space-explorer-activity-gym",
    relatedProductLabel: "Explore Space Explorer Activity Gym",
    sections: [
      {
        heading: "1. Commercial and product brief",
        paragraphs: [
          "The first review aligns the market, channel, target age, function, quantity, target cost, packaging, and launch timing. Missing decisions at this stage usually return later as sample revisions."
        ]
      },
      {
        heading: "2. Artwork and material alignment",
        paragraphs: [
          "The team confirms dimensions, color references, artwork files, embroidery or print method, fabrics, filling, accessories, labels, and packaging direction. Complex interactive features may require a construction mock-up before the full sample."
        ]
      },
      {
        heading: "3. First physical sample",
        paragraphs: [
          "A standard soft-product sample is often planned around 10-15 days after the brief and materials are confirmed. Custom fabrics, new tooling, complex activity pages, electronics, or multiple matching items can take longer."
        ]
      },
      {
        heading: "4. Review and revision",
        paragraphs: [
          "Review size, proportion, hand feel, color, stitching, attachments, functionality, branding, labels, packaging fit, and photo requirements. Consolidated feedback is faster and more reliable than separate comments from multiple reviewers."
        ]
      },
      {
        heading: "5. Approval and production preparation",
        paragraphs: [
          "The approved sample should be linked to a signed specification, artwork files, packaging details, testing plan, inspection criteria, quantity, and delivery terms. Typical production planning may be 40-70 days, subject to final project conditions."
        ]
      }
    ]
  },
  {
    slug: "retail-ready-packaging",
    category: "Packaging",
    title: "Retail-Ready Packaging for Baby Soft Products",
    summary: "How gift boxes, hang tags, labels, inserts, and export cartons work together for retail and e-commerce programs.",
    image: "/images/packaging/signature-red-box.webp",
    imageAlt: "RealBaby custom red retail gift box",
    updated: "September 2026",
    readTime: "5 min read",
    relatedProductSlug: "bunny-plush",
    relatedProductLabel: "Explore Bunny Plush",
    sections: [
      {
        heading: "Design for the sales channel",
        paragraphs: [
          "A baby boutique gift set, supermarket shelf item, subscription box, and e-commerce parcel need different packaging. Start with how the buyer receives, displays, scans, stores, and ships the product."
        ]
      },
      {
        heading: "Build the information hierarchy",
        paragraphs: [
          "The pack should make the product, age direction, key benefit, brand, and required safety information easy to understand. Keep marketing copy separate from mandatory labels and traceability information."
        ],
        bullets: ["Brand and product name", "Age grade and play direction", "Barcode and buyer item number", "Materials, care, warnings, and country-of-origin information", "Importer, manufacturer, batch, or tracking information where required"]
      },
      {
        heading: "Choose a structure that protects the product",
        paragraphs: [
          "Soft products can crease, deform, collect dust, or lose shelf shape. Inserts, sleeves, belly bands, window boxes, tissue, reusable bags, and gift boxes should be evaluated against presentation, material use, shipping volume, and cost."
        ]
      },
      {
        heading: "Do not stop at the individual pack",
        paragraphs: [
          "Master-carton dimensions, quantity per carton, gross and net weight, carton marks, moisture protection, and drop or transit expectations affect delivery performance. Packaging approval should include both retail presentation and export handling."
        ]
      }
    ]
  },
  {
    slug: "soft-product-quality-control",
    category: "Manufacturing",
    title: "Quality Control for Cloth Books, Plush and Comfort Products",
    summary: "A buyer-focused framework for checking soft construction, appearance, function, packing, and production consistency.",
    image: "/images/company/capability-overview.webp",
    imageAlt: "RealBaby manufacturing and quality workflow overview",
    updated: "September 2026",
    readTime: "6 min read",
    relatedProductSlug: "cloth-book",
    relatedProductLabel: "Explore Cloth Book",
    sections: [
      {
        heading: "Translate the approved sample into measurable checks",
        paragraphs: [
          "An approved sample is useful, but production also needs written tolerances and inspection points. Define dimensions, color references, stitch and embroidery expectations, attachment methods, filling, functionality, labels, and packaging before bulk production."
        ]
      },
      {
        heading: "Incoming material review",
        paragraphs: [
          "Check fabric color and hand feel, print registration, embroidery thread, filling, trims, plastic parts, labels, and packaging components against approved references. Material substitutions should require buyer approval."
        ]
      },
      {
        heading: "In-line production checks",
        paragraphs: [
          "Early checks can identify recurring problems before the full order is completed. Focus on seam security, exposed threads, skipped stitches, asymmetry, loose attachments, page order, functional parts, stuffing consistency, and contamination control."
        ]
      },
      {
        heading: "Final inspection and packing",
        paragraphs: [
          "Final inspection should cover workmanship, dimensions, function, quantity, labels, barcodes, retail packaging, carton marks, and agreed sampling level. Testing reports and inspection results answer different questions and should not be treated as interchangeable."
        ]
      },
      {
        heading: "Use product-specific criteria",
        paragraphs: [
          "A cloth book, activity gym, teether soother, plush toy, and comfort blanket have different risk points. Inspection criteria should be matched to the actual construction and intended use rather than copied from a generic checklist."
        ]
      }
    ]
  },
  {
    slug: "cloth-book-development-guide",
    category: "Collection Planning",
    title: "Developing a Cloth Book Collection Buyers Can Scale",
    summary: "A collection-planning guide covering age direction, sensory features, page architecture, construction, and line extension.",
    image: "/images/products/cloth-book.webp",
    imageAlt: "RealBaby soft cloth book for early learning",
    updated: "September 2026",
    readTime: "6 min read",
    relatedProductSlug: "cloth-book",
    relatedProductLabel: "Explore Cloth Book",
    sections: [
      {
        heading: "Start with one clear developmental purpose",
        paragraphs: [
          "A strong cloth book is not a list of every possible feature. Decide whether the main purpose is high-contrast visual discovery, tactile exploration, first words, tummy-time engagement, fine-motor practice, or calm travel play."
        ]
      },
      {
        heading: "Match complexity to the age direction",
        paragraphs: [
          "Younger baby formats may focus on contrast, simple shapes, crinkle sound, mirrors, and easy-grip pages. Older toddler formats can introduce matching, fasteners, counting, storytelling, and multi-step activities. Age direction also affects construction and testing decisions."
        ]
      },
      {
        heading: "Plan the page architecture",
        paragraphs: [
          "Map each spread before artwork begins. Alternate visual, tactile, sound, and interaction moments so the experience has rhythm without becoming crowded. Confirm page count, binding, closure, handle, and storage for detachable parts."
        ]
      },
      {
        heading: "Build a collection, not isolated SKUs",
        paragraphs: [
          "A scalable range can reuse an illustration system, color palette, character family, package structure, and learning framework across several themes. This creates stronger shelf recognition while preserving meaningful product differences."
        ]
      },
      {
        heading: "Confirm production details early",
        paragraphs: [
          "Artwork resolution, color references, fabric, print method, embroidery, mirrors, crinkle film, squeakers, ribbons, closures, care labels, and packaging should be documented before sampling. Every detachable or accessible component needs project-specific review."
        ]
      }
    ]
  }
];

export function findInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
