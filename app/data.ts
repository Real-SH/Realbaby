export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  features: string[];
  applications: string[];
  specs: { key: string; value: string }[];
};

export const companyProfile = {
  companyName: "Real International Trading(Shanghai) Co., Ltd",
  brandName: "Realbaby",
  foundedYear: "2017",
  positioning: "Source manufacturer / OEM & ODM solution provider",
  markets: ["Europe", "North America", "Australia"]
};

export const companyLocation = {
  address: "No. 485 Xingmei Road, Shanghai, China",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=No.%20485%20Xingmei%20Road%2C%20Shanghai%2C%20China"
};

export const products: Product[] = [
  {
    slug: "play-gym",
    name: "Play Gym",
    category: "Infant Activity",
    summary:
      "Soft and sensory-focused infant play gym designed for early-stage development and parent-child interaction.",
    features: [
      "OEM/ODM customization for fabric, accessories, and packaging",
      "Designed for sensory engagement and safe touch experience",
      "Suitable for importer and retail private-label programs"
    ],
    applications: ["Baby stores", "E-commerce brands", "Gift channels"],
    specs: [
      { key: "Material", value: "Pending verified update" },
      { key: "Age Range", value: "Pending verified update" },
      { key: "Packaging", value: "Custom packaging available" }
    ]
  },
  {
    slug: "quiet-books",
    name: "Quiet Books",
    category: "Educational Soft Toys",
    summary:
      "Interactive soft learning books for toddlers and preschool programs, supporting fine motor and cognitive learning.",
    features: [
      "Supports private-label and market-specific educational themes",
      "Custom page design options based on buyer requirements",
      "Export-ready approach for wholesalers and importers"
    ],
    applications: ["Early education centers", "Wholesalers", "Online marketplaces"],
    specs: [
      { key: "Theme", value: "Customizable by market request" },
      { key: "Page Count", value: "Pending verified update" },
      { key: "MOQ", value: "Depends on customization level" }
    ]
  },
  {
    slug: "ai-friends",
    name: "AI Friends",
    category: "Interactive Baby Companion",
    summary:
      "Emerging smart toy direction for modern parent-child interaction, developed for future-ready product lines.",
    features: [
      "Supports collaborative concept development",
      "Adaptable roadmap for different regional preferences",
      "Suitable for innovation-focused distributors"
    ],
    applications: ["Innovation product lines", "E-commerce", "Premium toy channels"],
    specs: [
      { key: "Function Modules", value: "Pending verified update" },
      { key: "Compliance", value: "Only authentic and verifiable documents" },
      { key: "ODM", value: "Supported for selected projects" }
    ]
  }
];
