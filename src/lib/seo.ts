import { getMedicineImageUrl } from "@/lib/cloudinary";
import { MEDICINES } from "@/data/medicines";
import type { Medicine } from "@/types/medicine";

const DEFAULT_SITE_URL = "https://www.neoventisbiotechmed.com";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (configured && configured.trim()) {
    const normalized = configured.trim().startsWith("http")
      ? configured.trim()
      : `https://${configured.trim()}`;
    return normalized.replace(/\/+$/, "");
  }

  return DEFAULT_SITE_URL;
}

export function getShortMedicineName(name: string): string {
  return name.replace(/^(Cap\.|Tab\.)\s+/i, "").trim();
}

export function getMedicineKeywords(medicine: Medicine): string[] {
  const shortName = getShortMedicineName(medicine.name);
  const form = medicine.category === "Capsules" ? "capsule" : "tablet";
  const formPlural = medicine.category === "Capsules" ? "capsules" : "tablets";

  return [
    shortName, // Exact short name (e.g. "Otubic", "Utamin", "Fattycid")
    shortName.toLowerCase(),
    medicine.name,
    `${shortName} ${form}`,
    `${shortName} ${formPlural}`,
    `${shortName} medicine`,
    `${shortName} Bangladesh`,
    `${shortName} price in Bangladesh`,
    `buy ${shortName} online`,
    `order ${shortName} WhatsApp`,
    `${shortName} Neoventis`,
    `${medicine.name} Bangladesh`,
    "Neoventis Biotech Medicines",
    "Neoventis Medicines",
  ];
}

export const ALL_MEDICINE_KEYWORDS: string[] = Array.from(
  new Set([
    "Neoventis Biotech Medicines",
    "Neoventis Medicines",
    "Neoventis Bangladesh",
    "Biotech Medicines Bangladesh",
    "Order medicine on WhatsApp Bangladesh",
    ...MEDICINES.flatMap((medicine) => [
      medicine.name,
      getShortMedicineName(medicine.name),
    ]),
  ]),
);

export function toAbsoluteImageUrl(image: string, siteUrl: string): string {
  const resolved = getMedicineImageUrl(image, 1200);
  if (resolved.startsWith("http://") || resolved.startsWith("https://")) {
    return resolved;
  }
  return `${siteUrl}${resolved.startsWith("/") ? "" : "/"}${resolved}`;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildHomeJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Neoventis Biotech Medicines",
        alternateName: "Neoventis Medicines",
        url: siteUrl,
        logo: `${siteUrl}/images/nb-logo.png`,
        areaServed: {
          "@type": "Country",
          name: "Bangladesh",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Neoventis Biotech Medicines",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#catalog`,
        name: "Neoventis Biotech Medicines Catalog",
        numberOfItems: MEDICINES.length,
        itemListElement: MEDICINES.map((medicine, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/medicines/${medicine.id}`,
          name: medicine.name,
          image: toAbsoluteImageUrl(medicine.image, siteUrl),
        })),
      },
    ],
  };
}

export function buildMedicineJsonLd(siteUrl: string, medicine: Medicine) {
  const shortName = getShortMedicineName(medicine.name);
  const productUrl = `${siteUrl}/medicines/${medicine.id}`;
  const imageUrl = toAbsoluteImageUrl(medicine.image, siteUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: medicine.category,
            item: `${siteUrl}/#catalog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: medicine.name,
            item: productUrl,
          },
        ],
      },
      {
        "@type": "Product",
        name: medicine.name,
        alternateName: shortName,
        category: medicine.category,
        image: [imageUrl],
        url: productUrl,
        brand: {
          "@type": "Brand",
          name: "Neoventis Biotech Medicines",
        },
        description: `${medicine.name} (${shortName}) from Neoventis Biotech Medicines. Available to deliver all over Bangladesh via direct WhatsApp order.`,
        areaServed: {
          "@type": "Country",
          name: "Bangladesh",
        },
      },
    ],
  };
}
