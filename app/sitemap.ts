import type { MetadataRoute } from "next";
import { products } from "./data";
import { insights } from "./insights/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.realbabytoy.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...insights.map((insight) => ({
      url: `${base}/insights/${insight.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65
    })),
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];
}
