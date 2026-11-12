import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 shadow-[0_8px_30px_-16px_rgba(15,23,42,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <div className="brand-gradient h-1 w-full" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 transition-opacity duration-200 hover:opacity-95 sm:gap-3"
          aria-label="Neoventis Biotech Medicines Home"
        >
          <Image
            src="/images/nb-logo.png"
            alt="Neoventis Biotech Medicines Logo"
            width={180}
            height={180}
            priority
            className="h-11 w-auto shrink-0 object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.03] sm:h-16"
          />
          <span className="truncate text-sm font-extrabold tracking-tight text-slate-900 sm:text-xl">
            Neoventis{" "}
            <span className="text-orange-600">Biotech Medicines</span>
          </span>
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-emerald-600/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/25 active:scale-[0.97] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
