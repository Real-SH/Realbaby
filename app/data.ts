export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  features: string[];
  applications: string[];
  specs: { key: string; value: string }[];
};

export const companyProfile = {
  brandName: "Realbaby",
  foundedYear: "2017",
  positioning: "Baby soft play and developmental product OEM/ODM partner",
  markets: ["Europe", "North America", "Australia"]
};

export const companyLocation = {
  address: "Shanghai, China",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shanghai%2C%20China"
};

export const products: Product[] = [
  {
    slug: "baby-activity-gym",
    name: "Baby Activity Gym",
    category: "Soft Developmental Play",
    image: "/mega/p03.png",
    imageAlt: "Realbaby baby activity gym for sensory and tummy-time play",
    summary:
      "Soft, sensory-focused baby activity gyms designed for infant tummy time, visual discovery, and parent-child play routines.",
    features: [
      "OEM/ODM customization for fabric, accessories, and packaging",
      "Developmental concept support for sensory, motor, and visual engagement",
      "Suitable for baby product importers, retail private-label programs, and gift channels"
    ],
    applications: ["Baby stores", "E-commerce brands", "Gift channels"],
    specs: [
      { key: "Material", value: "Fabric, filling, and accessories confirmed by project" },
      { key: "Age Range", value: "Configured according to market and testing requirements" },
      { key: "Packaging", value: "Custom packaging available" }
    ]
  },
  {
    slug: "soft-quiet-books",
    name: "Soft Quiet Books",
    category: "Soft Learning Products",
    image: "/mega/p06.png",
    imageAlt: "Realbaby custom soft quiet book for hands-on learning",
    summary:
      "Interactive cloth and quiet books for toddlers, preschool programs, and educational retail collections.",
    features: [
      "Supports private-label and market-specific educational themes",
      "Custom page design options based on buyer requirements",
      "Export-ready approach for wholesalers and importers"
    ],
    applications: ["Early education centers", "Wholesalers", "Online marketplaces"],
    specs: [
      { key: "Theme", value: "Customizable by market request" },
      { key: "Page Count", value: "Confirmed during sample development" },
      { key: "MOQ", value: "Depends on structure, materials, and customization level" }
    ]
  },
  {
    slug: "comfort-blankets",
    name: "Baby Comfort Blankets",
    category: "Comfort & Soothing Products",
    image: "/mega/p10.png",
    imageAlt: "Realbaby character comfort blanket private-label collection",
    summary:
      "Soft comfort blanket collections for baby gift channels, nursery retail, private-label brands, and e-commerce sellers.",
    features: [
      "Character, fabric, embroidery, label, and color customization",
      "Suitable for gift sets, baby stores, and online baby product ranges",
      "Can be developed with matching packaging and insert cards"
    ],
    applications: ["Baby gift channels", "Nursery retail", "Private-label collections"],
    specs: [
      { key: "Style", value: "Animal, character, seasonal, or buyer-specific theme" },
      { key: "Branding", value: "Logo label, hang tag, insert card, and packaging options" },
      { key: "Compliance", value: "Testing support according to destination market" }
    ]
  },
  {
    slug: "plush-soothers",
    name: "Plush Soothers & Soft Characters",
    category: "Baby Soft Goods",
    image: "/mega/p09.png",
    imageAlt: "Realbaby plush soother and soft character collection",
    summary:
      "Baby-oriented plush soothers and soft character products developed for comfort, gifting, and retail shelf presentation.",
    features: [
      "Soft touch, embroidery details, and baby-focused product structure",
      "Private-label support for importers, retailers, and DTC baby brands",
      "Packaging and product story can be aligned with a wider collection"
    ],
    applications: ["Baby stores", "Gift boxes", "DTC baby brands"],
    specs: [
      { key: "Customization", value: "Character, color, fabric, label, and packaging" },
      { key: "Sample", value: "Developed after confirming artwork and target market" },
      { key: "Documentation", value: "Prepared according to project requirements" }
    ]
  },
  {
    slug: "interactive-play-concepts",
    name: "Interactive Play Concepts",
    category: "Smart / Wearable Play",
    image: "/mega/p13.png",
    imageAlt: "Realbaby interactive wearable parent-child play concept",
    summary:
      "Future-ready interactive soft product concepts for brands exploring modern parent-child engagement.",
    features: [
      "Supports collaborative concept development",
      "Adaptable roadmap for different regional preferences",
      "Suitable for innovation-focused distributors"
    ],
    applications: ["Innovation product lines", "E-commerce", "Premium toy channels"],
    specs: [
      { key: "Function Modules", value: "Confirmed through product feasibility review" },
      { key: "Compliance", value: "Only authentic and verifiable documents" },
      { key: "ODM", value: "Supported for selected projects" }
    ]
  },
  {
    slug: "retail-packaging",
    name: "Retail Packaging Support",
    category: "Collection Presentation",
    image: "/mega/p17.png",
    imageAlt: "Realbaby custom gift box hang tag and shopping bag packaging",
    summary:
      "Packaging support for baby product importers and brands that need gift-ready, display-ready, or private-label presentation.",
    features: [
      "Gift box, hang tag, insert, shopping bag, and export carton coordination",
      "Packaging direction can be planned together with product development",
      "Designed for smoother buyer review and retail shelf presentation"
    ],
    applications: ["Private-label programs", "Retail buyers", "Gift-ready baby sets"],
    specs: [
      { key: "Packaging Types", value: "Gift box, hang tag, insert card, display pack, export carton" },
      { key: "Branding", value: "Buyer logo and collection-specific visual direction" },
      { key: "Output", value: "Confirmed according to order quantity and buyer standards" }
    ]
  }
];
