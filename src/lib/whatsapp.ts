const DEFAULT_WHATSAPP_NUMBER = "8801700000000";
const DEFAULT_WHATSAPP_MESSAGE = "Hi Neoventis Medicines";

/**
 * Returns a sanitized digits-only WhatsApp number for Click-to-Chat URLs.
 */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
  const digits = raw.replace(/\D/g, "");
  return digits || DEFAULT_WHATSAPP_NUMBER;
}

/**
 * Builds a WhatsApp Click-to-Chat URL with the pre-filled greeting message.
 */
export function buildWhatsAppOrderUrl(): string {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`;
}
