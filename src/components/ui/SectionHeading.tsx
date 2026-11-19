import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-tritium">
      <span className="size-1.5 animate-glow rounded-full bg-tritium shadow-[0_0_10px_2px_rgba(57,255,156,0.8)]" />
      {children}
    </span>
  );
}

export default function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-bone sm:text-5xl">{title}</h2>
        {description && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{description}</p>}
      </Reveal>
    </div>
  );
}
