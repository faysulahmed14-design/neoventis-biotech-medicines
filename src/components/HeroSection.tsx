import { ArrowDown, CheckCircle2 } from "lucide-react";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white/35 backdrop-blur-[2px]">
      {/* Subtle NB Orange & Slate Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-1/4 h-72 w-72 rounded-full bg-slate-300/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-gradient-to-r from-orange-50 via-amber-50/70 to-slate-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-800 shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
            Fast & Direct Medicine Ordering via WhatsApp
          </div>

          <h1 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-4xl md:whitespace-nowrap lg:text-[2.75rem]">
            Welcome to{" "}
            <span className="brand-gradient-text">
              Neoventis Biotech Medicines
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-relaxed">
            Browse our medicine catalog below and tap{" "}
            <strong className="font-semibold text-slate-900">
              Order on WhatsApp
            </strong>{" "}
            on any product to connect directly with our team.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#catalog"
              className="brand-gradient group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98]"
            >
              Browse Medicines
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-5 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/70 hover:shadow-sm active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
              Chat Directly on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
