import type { MetadataRoute } from "next";
import { CHANGELOG } from "@/lib/changelog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Both pages show the changelog, so they last changed with its newest
  // entry. The array is ordered newest first.
  const lastModified = CHANGELOG[0].date;

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/zmeny`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
