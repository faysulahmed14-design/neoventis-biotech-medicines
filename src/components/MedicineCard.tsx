import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { getMedicineImageUrl } from "@/lib/cloudinary";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import type { Medicine } from "@/types/medicine";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface MedicineCardProps {
  medicine: Medicine;
  priority?: boolean;
}

export function MedicineCard({ medicine, priority = false }: MedicineCardProps) {
  const imageUrl = getMedicineImageUrl(medicine.image, 700);
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/75 bg-white ring-1 ring-slate-900/[0.03] shadow-[0_4px_20px_-6px_rgba(15,23,42,0.08),0_12px_28px_-14px_rgba(15,23,42,0.1)] transition-all duration-300 ease-out [contain-intrinsic-size:380px] [content-visibility:auto] hover:-translate-y-1.5 hover:border-orange-300/90 hover:shadow-[0_20px_40px_-14px_rgba(249,115,22,0.22),0_8px_20px_-10px_rgba(15,23,42,0.12)]">
      <Link
        href={`/medicines/${medicine.id}`}
        aria-label={`View ${medicine.name} details`}
        className="medicine-stage-3d flex aspect-[4/3] w-full items-center justify-center overflow-hidden border-b border-slate-100 p-4"
      >
        {/* 3D Studio Perspective Floor */}
        <div className="medicine-stage-floor-3d" aria-hidden="true" />

        {/* Ambient Studio Ring Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 h-40 w-40 rounded-full bg-white/90 blur-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-orange-50/90"
        />

        {/* 3D Floor Contact Shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3.5 h-3.5 w-1/2 rounded-full bg-slate-900/18 blur-md transition-all duration-500 ease-out group-hover:scale-95 group-hover:bg-orange-950/18"
        />

        <Image
          src={imageUrl}
          alt={`${medicine.name} - Neoventis Biotech Medicines`}
          width={480}
          height={360}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="relative z-10 h-full w-full object-contain mix-blend-multiply drop-shadow-[0_16px_20px_rgba(15,23,42,0.16)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.06]"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5">
        <div className="space-y-2.5">
          <h2 className="text-base font-bold leading-snug tracking-tight text-slate-900 sm:text-[1.0625rem]">
            <Link
              href={`/medicines/${medicine.id}`}
              className="transition-colors hover:text-orange-600"
            >
              {medicine.name}
            </Link>
          </h2>

          <div className="flex items-center gap-2 rounded-lg border border-orange-200/70 bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700">
            <Truck className="h-3.5 w-3.5 shrink-0 text-orange-600" />
            <span>Available to deliver all over Bangladesh</span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${medicine.name} on WhatsApp`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/25 active:scale-[0.97]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
