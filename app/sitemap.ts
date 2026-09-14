import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luiskaiser.com/",
      lastModified: "2026-09-13",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://luiskaiser.com/images/luis-kaiser.webp",
        "https://luiskaiser.com/images/wave-propagation.png",
        "https://luiskaiser.com/images/ice-hockey.png",
        "https://luiskaiser.com/images/deep-rl-agents.png",
      ],
    },
  ];
}
