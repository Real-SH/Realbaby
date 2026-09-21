export type Product = {
  slug: string;
  name: string;
  category: string;
  series: "First Play" | "Learning Play" | "Comfort Companions";
  age: string;
  image: string;
  imageAlt: string;
  summary: string;
  features: string[];
  applications: string[];
  customOptions: string[];
  specs: { key: string; value: string }[];
};

export const companyProfile = {
  brandName: "Realbaby",
  foundedYear: "2015",
  positioning: "Baby soft play and developmental products OEM/ODM partner",
  markets: ["Europe", "North America", "Australia"]
};


const commonSpecs = [
  { key: "MOQ", value: "500 pieces for most custom projects; confirmed by design" },
  { key: "Sampling", value: "Available after artwork, material, and function review" },
  { key: "Packaging", value: "Private label, hang tag, insert, gift box, and export carton" },
  { key: "Testing Support", value: "Planned for the product and destination market" }
];

export const products: Product[] = [
  {
    slug: "bear-activity-nest",
    name: "2-in-1 Bear Activity Nest",
    category: "Activity Gyms & Baby Mats",
    series: "First Play",
    age: "0-18M",
    image: "/images/products/bear-activity-nest.webp",
    imageAlt: "Realbaby 2-in-1 bear activity nest with soft arches and hanging toys",
    summary: "A cushioned bear-shaped nest designed for tummy time, early reaching, and calm floor play.",
    features: ["Supportive padded nest", "Detachable activity arches", "Character hanging toys"],
    applications: ["Baby stores", "Nursery ranges", "E-commerce brands"],
    customOptions: ["Fabric and color", "Hanging toy set", "Embroidery", "Gift packaging"],
    specs: commonSpecs
  },
  {
    slug: "space-explorer-activity-gym",
    name: "Space Explorer Activity Gym",
    category: "Activity Gyms & Baby Mats",
    series: "First Play",
    age: "0-18M",
    image: "/images/products/space-explorer-gym.webp",
    imageAlt: "Realbaby Space Explorer infant activity gym",
    summary: "A high-contrast space-themed activity gym with soft arches and discovery toys for early visual play.",
    features: ["High-contrast visual theme", "Detachable arches", "Multi-texture hanging toys"],
    applications: ["Importers", "Baby brands", "Gift channels"],
    customOptions: ["Theme artwork", "Toy assortment", "Mat shape", "Retail packaging"],
    specs: commonSpecs
  },
  {
    slug: "dream-bunny-activity-gym",
    name: "Dream Bunny Activity Gym",
    category: "Activity Gyms & Baby Mats",
    series: "First Play",
    age: "0-18M",
    image: "/images/products/dream-bunny-gym.webp",
    imageAlt: "Realbaby pink Dream Bunny soft activity gym",
    summary: "A gentle bunny-themed play gym developed for soft nursery collections and gift-ready programs.",
    features: ["Soft pastel direction", "Cushioned play mat", "Coordinated hanging characters"],
    applications: ["Baby boutiques", "Private label", "Gift collections"],
    customOptions: ["Palette", "Character design", "Labels", "Packaging set"],
    specs: commonSpecs
  },
  {
    slug: "bunny-plush",
    name: "Bunny Plush",
    category: "Plush Toys & Comfort Dolls",
    series: "Comfort Companions",
    age: "Baby & Toddler",
    image: "/images/products/bunny-plush.webp",
    imageAlt: "Realbaby soft grey bunny plush toy",
    summary: "A classic soft bunny character for nursery gifting, seasonal ranges, and coordinated comfort collections.",
    features: ["Soft-touch plush", "Embroidered facial details", "Gift-ready character styling"],
    applications: ["Gift stores", "Baby retailers", "Subscription boxes"],
    customOptions: ["Plush texture", "Scarf or accessory", "Embroidery", "Swing tag"],
    specs: commonSpecs
  },
  {
    slug: "teether-soother",
    name: "Teether Soother",
    category: "Comfort Blankets & Teethers",
    series: "First Play",
    age: "0M+",
    image: "/images/products/teether-soother.webp",
    imageAlt: "Realbaby puppy plush teether soother",
    summary: "A compact soft companion combining an easy-grip teething ring with a comforting plush character.",
    features: ["Easy-grip ring", "Soft companion body", "Compact stroller-friendly format"],
    applications: ["Newborn gifting", "Baby care retail", "Travel ranges"],
    customOptions: ["Character", "Ring shape", "Fabric", "Logo label"],
    specs: commonSpecs
  },
  {
    slug: "my-quiet-book",
    name: "My Quiet Book",
    category: "Quiet Books & Busy Boards",
    series: "Learning Play",
    age: "18M-4Y",
    image: "/images/products/my-quiet-book.webp",
    imageAlt: "Realbaby My Quiet Book soft learning activity book",
    summary: "A portable fabric activity book with hands-on tasks designed for calm learning at home or on the go.",
    features: ["Multi-page activities", "Zip carry format", "Fine-motor learning prompts"],
    applications: ["Education channels", "Online marketplaces", "Travel retail"],
    customOptions: ["Page theme", "Activity level", "Language", "Cover branding"],
    specs: commonSpecs
  },
  {
    slug: "cloth-book",
    name: "Cloth Book",
    category: "Soft Books & Cloth Books",
    series: "Learning Play",
    age: "6M-3Y",
    image: "/images/products/cloth-book.webp",
    imageAlt: "Realbaby shape learning cloth book",
    summary: "A soft first book format that turns color, shape, animal, or everyday themes into tactile discovery.",
    features: ["Soft washable pages", "Tactile learning details", "Theme-led storytelling"],
    applications: ["Baby brands", "Book and toy retail", "Early education"],
    customOptions: ["Artwork", "Page count", "Textures", "Language"],
    specs: commonSpecs
  },
  {
    slug: "busy-board",
    name: "Busy Board",
    category: "Quiet Books & Busy Boards",
    series: "Learning Play",
    age: "18M-4Y",
    image: "/images/products/busy-board.webp",
    imageAlt: "Realbaby fabric busy board with flower learning activities",
    summary: "A fabric activity board combining familiar fasteners, matching, and tactile tasks for hands-on practice.",
    features: ["Fine-motor activities", "Portable soft construction", "Age-adaptable task design"],
    applications: ["Preschool suppliers", "Retail chains", "E-commerce"],
    customOptions: ["Skill set", "Theme", "Closures", "Carry format"],
    specs: commonSpecs
  },
  {
    slug: "cuddle-shirt",
    name: "Cuddle Shirt",
    category: "Parent-Child Interactive Play",
    series: "Learning Play",
    age: "Parent & Child",
    image: "/images/products/cuddle-shirt.webp",
    imageAlt: "Realbaby Cuddle Shirt for parent-child interactive play",
    summary: "A wearable sensory play concept that invites storytelling, matching, and shared parent-child interaction.",
    features: ["Wearable play surface", "Detachable soft characters", "Guided shared-play concept"],
    applications: ["Education brands", "Innovation collections", "Family gifting"],
    customOptions: ["Activity theme", "Character set", "Size", "Instruction card"],
    specs: commonSpecs
  },
  {
    slug: "cat-comfort-blanket",
    name: "Cat Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/cat-comfort-blanket.webp",
    imageAlt: "Realbaby green cat comfort blanket",
    summary: "A soft character comfort blanket for quiet moments, stroller routines, and baby gift assortments.",
    features: ["Lightweight comfort format", "Soft character head", "Easy-to-pack size"],
    applications: ["Nursery retail", "Gift sets", "Baby brands"],
    customOptions: ["Animal character", "Fabric", "Embroidery", "Packaging"],
    specs: commonSpecs
  },
  {
    slug: "butterfly-comfort-blanket",
    name: "Butterfly Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/butterfly-comfort-blanket.webp",
    imageAlt: "Realbaby pink butterfly comfort blanket",
    summary: "A bright tactile blanket with a soft butterfly centerpiece for cheerful comfort ranges.",
    features: ["Tactile wing details", "Soft square blanket", "Bright gift-friendly palette"],
    applications: ["Baby gifting", "Seasonal retail", "Private label"],
    customOptions: ["Colorway", "Applique", "Texture mix", "Gift box"],
    specs: commonSpecs
  },
  {
    slug: "crocodile-comfort-blanket",
    name: "Crocodile Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/crocodile-comfort-blanket.webp",
    imageAlt: "Realbaby green crocodile comfort blanket",
    summary: "A friendly crocodile comfort blanket combining expressive character design with a calm, soft base.",
    features: ["Character-led design", "Soft stitched details", "Everyday comfort size"],
    applications: ["DTC baby brands", "Baby stores", "Gift boxes"],
    customOptions: ["Character expression", "Color", "Label", "Insert card"],
    specs: commonSpecs
  },
  {
    slug: "dino-comfort-blanket",
    name: "Dino Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/dino-comfort-blanket.webp",
    imageAlt: "Realbaby blue dinosaur comfort blanket",
    summary: "A playful dinosaur lovey designed for calm cuddles, naps, and character-led nursery collections.",
    features: ["Soft plush dinosaur", "Wide comfort blanket base", "Nap and bedtime appeal"],
    applications: ["Nursery chains", "Online retail", "Gift channels"],
    customOptions: ["Dinosaur style", "Fabric weight", "Embroidery", "Packaging"],
    specs: commonSpecs
  },
  {
    slug: "puppy-comfort-blanket",
    name: "Puppy Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/puppy-comfort-blanket.webp",
    imageAlt: "Realbaby puppy character comfort blanket",
    summary: "A loyal puppy character developed as a familiar companion for cuddles, travel, and quiet routines.",
    features: ["Expressive puppy head", "Soft easy-hold corners", "Warm neutral color direction"],
    applications: ["Baby boutiques", "Gift sets", "E-commerce"],
    customOptions: ["Breed direction", "Color", "Ear detail", "Brand label"],
    specs: commonSpecs
  },
  {
    slug: "sunflower-comfort-blanket",
    name: "Sunflower Comfort Blanket",
    category: "Comfort Blankets & Teethers",
    series: "Comfort Companions",
    age: "0M+",
    image: "/images/products/sunflower-comfort-blanket.webp",
    imageAlt: "Realbaby sunflower comfort blanket",
    summary: "A cheerful sunflower lovey with soft petals and a vivid blanket base for standout shelf presentation.",
    features: ["Soft layered petals", "Happy sensory character", "Strong retail color story"],
    applications: ["Gift retail", "Baby stores", "Seasonal collections"],
    customOptions: ["Flower theme", "Face embroidery", "Palette", "Gift packaging"],
    specs: commonSpecs
  }
];

export const productSeries = [
  {
    name: "First Play",
    age: "0-18M",
    description: "Soft, sensory, and soothing formats for the earliest months of discovery.",
    image: "/images/products/bear-activity-nest.webp",
    products: "Activity gyms · Baby mats · Teethers · First cloth books"
  },
  {
    name: "Learning Play",
    age: "18M-4Y",
    description: "Hands-on activity formats that turn everyday moments into calm learning.",
    image: "/images/products/my-quiet-book.webp",
    products: "Quiet books · Busy boards · Soft learning · Interactive play"
  },
  {
    name: "Comfort Companions",
    age: "Baby & Toddler",
    description: "Character-led soft products for comfort, gifting, and coordinated nursery ranges.",
    image: "/images/products/bunny-plush.webp",
    products: "Comfort blankets · Plush toys · Soothers · Gift collections"
  }
];

export const playMoments = [
  { name: "Tummy Time", image: "/images/moments/tummy-time.webp", text: "Floor-play formats for reaching, rolling, and early discovery." },
  { name: "Bedtime Comfort", image: "/images/moments/bedtime-comfort.webp", text: "Soft companions that support calm nursery routines." },
  { name: "Travel Calm", image: "/images/moments/travel-calm.webp", text: "Portable activities for strollers, car seats, and family trips." },
  { name: "Early Learning", image: "/images/moments/early-learning.webp", text: "Tactile books and tasks that reward curious hands." },
  { name: "Parent-Child Interaction", image: "/images/moments/parent-child.webp", text: "Shared-play ideas designed to bring families into the story." }
];

export const buyerChannels = [
  ["Importers & Distributors", "Coherent assortments, export communication, and documentation support."],
  ["Baby Brands", "OEM/ODM development, private labels, and collection-level storytelling."],
  ["Baby Stores", "Shelf-friendly products, gift sets, and clear age or play-moment positioning."],
  ["Retail Chains", "Scalable programs, market-ready packaging, and inspection coordination."],
  ["E-commerce Sellers", "Distinctive hero products, compact packaging, and content-ready collections."],
  ["Education Channels", "Hands-on formats for preschool, parent-child, and early-learning programs."]
];
