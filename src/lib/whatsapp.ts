import { siteConfig } from "./site";

export const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

export const hasWhatsApp = whatsappNumber.length >= 8;

export function whatsappLink(
  message: string = siteConfig.whatsappMessage,
): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
