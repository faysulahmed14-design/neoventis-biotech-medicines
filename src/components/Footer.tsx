import Image from "next/image";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const whatsappUrl = buildWhatsAppOrderUrl();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/75 bg-gradient-to-b from-white/85 via-white/90 to-orange-50/40 shadow-[0_-8px_30px_-18px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-9 text-center sm:flex-row sm:px-6 sm:py-10 sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/nb-logo.png"
              alt="Neoventis Biotech Medicines Logo"
              width={160}
              height={160}
              className="h-14 w-auto object-contain mix-blend-multiply sm:h-16"
            />
            <span className="text-base font-bold tracking-tight text-slate-900">
              Neoventis{" "}
              <span className="text-orange-600">Biotech Medicines</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Always consult a licensed physician or pharmacist before taking any
            medication.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:text-emerald-700"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
            Order Directly via WhatsApp
          </a>
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Neoventis Medicines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
