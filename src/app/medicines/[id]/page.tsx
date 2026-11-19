import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { MEDICINES } from "@/data/medicines";
import { getMedicineImageUrl } from "@/lib/cloudinary";
import {
  buildMedicineJsonLd,
  getMedicineKeywords,
  getShortMedicineName,
  getSiteUrl,
  toAbsoluteImageUrl,
} from "@/lib/seo";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

interface MedicineDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return MEDICINES.map((medicine) => ({
    id: medicine.id,
  }));
}

export async function generateMetadata({
  params,
}: MedicineDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const medicine = MEDICINES.find((item) => item.id === id);

  if (!medicine) {
    return {
      title: "Medicine Not Found",
    };
  }

  const siteUrl = getSiteUrl();
  const shortName = getShortMedicineName(medicine.name);
  const title = {
    absolute: `${shortName} - Neoventis Biotech Medicines`,
  };
  const description = `${shortName} (${medicine.name}) by Neoventis Biotech Medicines. Genuine ${medicine.category.toLowerCase()} available for delivery all over Bangladesh. Order directly on WhatsApp.`;
  const imageUrl = toAbsoluteImageUrl(medicine.image, siteUrl);

  return {
    title,
    description,
    keywords: getMedicineKeywords(medicine),
    alternates: {
      canonical: `${siteUrl}/medicines/${medicine.id}`,
    },
    openGraph: {
      title: `${shortName} (${medicine.name}) | Neoventis Biotech Medicines`,
      description,
      type: "website",
      url: `${siteUrl}/medicines/${medicine.id}`,
      images: [
        {
          url: imageUrl,
          alt: `${shortName} - ${medicine.name} - Neoventis Biotech Medicines`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${shortName} (${medicine.name}) | Neoventis Biotech Medicines`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function MedicineDetailPage({
  params,
}: MedicineDetailPageProps) {
  const { id } = await params;
  const medicine = MEDICINES.find((item) => item.id === id);

  if (!medicine) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const shortName = getShortMedicineName(medicine.name);
  const imageUrl = getMedicineImageUrl(medicine.image, 900);
  const whatsappUrl = buildWhatsAppOrderUrl();
  const jsonLd = buildMedicineJsonLd(siteUrl, medicine);

  return (
    <SiteShell
      jsonLd={jsonLd}
      mainClassName="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mb-6">
            <Link
              href="/#catalog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-orange-300 hover:bg-orange-50/70 hover:text-orange-700 sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Medicines
            </Link>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.14)] backdrop-blur-sm md:grid md:grid-cols-2">
            <div className="medicine-stage-3d flex aspect-[4/3] w-full items-center justify-center overflow-hidden border-b border-slate-100 p-6 md:aspect-auto md:min-h-[360px] md:border-r md:border-b-0">
              <div className="medicine-stage-floor-3d" aria-hidden="true" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-6 h-48 w-48 rounded-full bg-white/90 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 h-4 w-1/2 rounded-full bg-slate-900/18 blur-md"
              />
              <Image
                src={imageUrl}
                alt={`${medicine.name} (${shortName}) - Neoventis Biotech Medicines`}
                width={640}
                height={480}
                priority
                className="relative z-10 h-full max-h-72 w-full object-contain mix-blend-multiply drop-shadow-[0_18px_22px_rgba(15,23,42,0.18)]"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  {medicine.category}
                </span>

                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {medicine.name}
                </h1>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong className="font-semibold text-slate-800">
                    {medicine.name}
                  </strong>{" "}
                  ({shortName}) by{" "}
                  <strong className="font-semibold text-slate-800">
                    Neoventis Biotech Medicines
                  </strong>
                  . Order directly on WhatsApp for fast confirmation and
                  delivery anywhere in Bangladesh.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 rounded-xl border border-orange-200/70 bg-gradient-to-r from-orange-50/75 via-amber-50/45 to-slate-50/80 px-3.5 py-2.5 text-xs font-medium text-slate-700 sm:text-sm">
                    <Truck className="h-4 w-4 shrink-0 text-orange-600" />
                    <span>Available to deliver all over Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2.5 text-xs font-medium text-slate-700 sm:text-sm">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-slate-600" />
                    <span>Direct WhatsApp order support — no online payment required</span>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${medicine.name} on WhatsApp`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98] sm:text-base"
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Order on WhatsApp
              </a>
            </div>
          </article>
    </SiteShell>
  );
}
