import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ALL_MEDICINE_KEYWORDS, getSiteUrl } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neoventis Biotech Medicines | Direct WhatsApp Medicine Catalog",
    template: "%s | Neoventis Biotech Medicines",
  },
  description:
    "Browse medicines at Neoventis Biotech Medicines (Cap. Otubic, Cap. Otucid, Tab. Utamin, Cap. Eberry, Cap. Xymotac, and more) and place orders directly via WhatsApp across Bangladesh.",
  keywords: ALL_MEDICINE_KEYWORDS,
  authors: [{ name: "Neoventis Biotech Medicines" }],
  creator: "Neoventis Biotech Medicines",
  publisher: "Neoventis Biotech Medicines",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/nb-logo.png",
  },
  openGraph: {
    title: "Neoventis Biotech Medicines",
    description:
      "Browse our medicine catalog and order directly on WhatsApp across Bangladesh.",
    url: siteUrl,
    siteName: "Neoventis Biotech Medicines",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/nb-logo.png",
        alt: "Neoventis Biotech Medicines Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neoventis Biotech Medicines",
    description:
      "Browse our medicine catalog and order directly on WhatsApp across Bangladesh.",
    images: ["/images/nb-logo.png"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
