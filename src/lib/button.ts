import { cn } from "./utils";

export type ButtonVariant = "primary" | "ghost";

/** Class names shared by link-buttons and real <button> elements. */
export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tritium disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" &&
      "bg-linear-to-r from-tritium to-plasma text-void shadow-[0_0_32px_-6px_rgba(57,255,156,0.55)] hover:shadow-[0_0_44px_-4px_rgba(34,229,255,0.65)]",
    variant === "ghost" &&
      "border border-line bg-panel/50 text-bone backdrop-blur hover:border-tritium/60 hover:text-tritium",
    className,
  );
}
