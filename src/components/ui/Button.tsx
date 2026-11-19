"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { buttonClass, type ButtonVariant } from "@/lib/button";
import { Icon } from "@/components/Icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
};

/** Animated link styled as a button. */
export function ButtonLink({ href, children, variant = "primary", className, arrow = true }: ButtonLinkProps) {
  return (
    <motion.span className="inline-block" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link href={href} className={buttonClass(variant, className)}>
        {children}
        {arrow && <Icon name="arrow-up-right" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </Link>
    </motion.span>
  );
}
