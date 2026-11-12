import type { MetadataRoute } from "next";
import { MEDICINES } from "@/data/medicines";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const medicineEntries: MetadataRoute.Sitemap = MEDICINES.map((medicine) => ({
    url: `${siteUrl}/medicines/${medicine.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...medicineEntries,
  ];
}
