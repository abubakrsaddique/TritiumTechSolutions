/** Shared easing curve (expo-out feel) used across Framer Motion transitions. */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** True when the visitor has asked their OS to reduce motion. Safe to call on the server. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
