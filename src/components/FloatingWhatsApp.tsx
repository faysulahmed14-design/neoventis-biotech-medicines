import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Neoventis Medicines on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/30 ring-2 ring-white/80 transition hover:scale-105 hover:from-emerald-700 hover:to-teal-800 active:scale-95"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Chat to Order</span>
    </a>
  );
}
