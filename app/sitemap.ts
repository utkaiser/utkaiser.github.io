import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luiskaiser.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
