import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="tt-logo-grad"
          gradientUnits="userSpaceOnUse"
          x1="4"
          y1="4"
          x2="44"
          y2="44"
        >
          <stop stopColor="#39ff9c" />
          <stop offset="1" stopColor="#22e5ff" />
        </linearGradient>
      </defs>
      <g stroke="url(#tt-logo-grad)" strokeWidth="1.8">
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      </g>
      <circle cx="24" cy="24" r="4.5" fill="url(#tt-logo-grad)" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tritium Tech Solution home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <Image
        src="/newlogo.png"
        alt=""
        width={50}
        height={50}
        priority
        className="size-10 rounded-lg transition-transform duration-500 group-hover:scale-110"
      />
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold tracking-[0.2em] text-bone">
          TRITIUM
        </span>
        <span className="mt-1 block font-mono text-[9px] tracking-[0.34em] text-mist">
          TECH SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
