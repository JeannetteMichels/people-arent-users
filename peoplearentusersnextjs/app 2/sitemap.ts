import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jeannettemichels.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/chapter-one`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
