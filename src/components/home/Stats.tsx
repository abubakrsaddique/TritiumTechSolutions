"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { stats } from "@/lib/data";

/** Count-up numbers driven by GSAP ScrollTrigger. */
export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-count]");

      counters.forEach((el) => {
        const end = Number(el.dataset.count ?? 0);

        if (prefersReducedMotion()) {
          el.textContent = String(end);
          return;
        }

        const counter = { value: 0 };
        gsap.to(counter, {
          value: end,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-6 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-panel/50 backdrop-blur-sm">
        <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 sm:p-10">
              <div className="font-display text-5xl font-semibold tracking-tight text-gradient sm:text-6xl">
                <span data-count={stat.value}>0</span>
                {stat.suffix}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
