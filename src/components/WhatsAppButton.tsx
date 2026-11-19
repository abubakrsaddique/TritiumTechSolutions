"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { hasWhatsApp, whatsappLink } from "@/lib/whatsapp";
import { easeOut } from "@/lib/motion";

/** Floating "chat on WhatsApp" button, shown in the bottom-right corner of every page. */
export default function WhatsAppButton() {
  if (!hasWhatsApp) return null;

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 24, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: easeOut }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-line bg-panel/90 px-4 py-2 text-sm font-medium text-bone opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)]">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"
        />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </motion.a>
  );
}
