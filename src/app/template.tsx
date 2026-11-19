"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

/** A template re-mounts on every navigation, which gives each page a soft entrance. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
