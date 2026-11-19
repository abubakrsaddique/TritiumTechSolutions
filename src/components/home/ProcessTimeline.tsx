"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { processSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessTimeline() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trackEl = track.current;
      const line = root.current?.querySelector<HTMLElement>(".tl-line");
      if (!trackEl || !line) return;

      const steps = gsap.utils.toArray<HTMLElement>(".tl-step");
      const dots = gsap.utils.toArray<HTMLElement>(".tl-dot");

      const reduced = prefersReducedMotion();

      const LINE_TOP = 8;
      const TRIGGER_AT = 0.6;

      let trackTop = 0;
      let stepY: number[] = [];
      let dotY: number[] = [];

      const measure = () => {
        trackTop = trackEl.getBoundingClientRect().top + window.scrollY;
        stepY = steps.map(
          (s) => s.getBoundingClientRect().top + window.scrollY - trackTop,
        );
        dotY = dots.map((d) => {
          const r = d.getBoundingClientRect();
          return r.top + window.scrollY - trackTop + r.height / 2;
        });
      };

      const setHeight = gsap.quickTo(line, "height", {
        duration: reduced ? 0 : 0.35,
        ease: "power2.out",
      });

      const update = () => {
        if (!stepY.length) return;
        const ref = window.scrollY + window.innerHeight * TRIGGER_AT - trackTop;
        const last = stepY.length - 1;
        let fill: number;

        if (ref <= stepY[0]) {
          fill =
            dotY[0] * gsap.utils.clamp(0, 1, (ref - (stepY[0] - 160)) / 160);
        } else if (ref >= stepY[last]) {
          fill = dotY[last];
        } else {
          let i = 0;
          while (i < last && ref >= stepY[i + 1]) i++;
          const t = (ref - stepY[i]) / (stepY[i + 1] - stepY[i]);
          fill = gsap.utils.interpolate(dotY[i], dotY[i + 1], t);
        }

        setHeight(Math.max(0, fill - LINE_TOP));
        steps.forEach((step, i) =>
          step.classList.toggle("is-active", ref >= stepY[i]),
        );
      };

      ScrollTrigger.create({
        trigger: trackEl,
        start: "top bottom",
        end: "bottom top",
        onRefresh: () => {
          measure();
          update();
        },
        onUpdate: update,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A clear path from{" "}
                <span className="text-gradient">idea to launch</span>
              </>
            }
            description="A predictable process with demos every two weeks, so you are never guessing what is happening with your project."
          />
        </div>

        <div ref={track} className="relative pl-10 sm:pl-14">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-px bg-line sm:left-[15px]"
          />
          <span
            aria-hidden="true"
            className="tl-line absolute left-[11px] top-2 h-0 w-px bg-linear-to-b from-tritium to-plasma shadow-[0_0_14px_2px_rgba(57,255,156,0.55)] sm:left-[15px]"
          />

          <ol className="space-y-14">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="tl-step group relative translate-x-9 opacity-25 transition-[opacity,transform] duration-700 ease-out [&.is-active]:translate-x-0 [&.is-active]:opacity-100"
              >
                <span className="tl-dot absolute -left-10 top-1.5 grid size-6 place-items-center rounded-full border border-line bg-void transition-all duration-500 group-[.is-active]:border-tritium group-[.is-active]:shadow-[0_0_18px_2px_rgba(57,255,156,0.7)] sm:-left-14 sm:size-8">
                  <span className="size-2 rounded-full bg-line transition-colors duration-500 group-[.is-active]:bg-tritium" />
                </span>
                <span className="font-mono text-xs tracking-[0.3em] text-tritium">
                  STEP {step.step}
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-mist">
                  {step.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wider text-mist"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
