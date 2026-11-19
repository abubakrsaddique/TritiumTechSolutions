"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/Button";

const lines = ["Turning Ideas", "Into Innovation."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const tilt = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = ".hero-line, .hero-fade, .orbit-wrap";

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-line",
        { yPercent: 115, opacity: 1 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 },
      )
        .fromTo(
          ".hero-fade",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.7",
        )
        .fromTo(
          ".orbit-wrap",
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "expo.out" },
          0.15,
        );

      gsap.to(".hero-content", {
        yPercent: -10,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const el = tilt.current;
      if (!el) return;
      const rotateX = gsap.quickTo(el, "rotationX", {
        duration: 0.8,
        ease: "power3.out",
      });
      const rotateY = gsap.quickTo(el, "rotationY", {
        duration: 0.8,
        ease: "power3.out",
      });

      const onMove = (e: PointerEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        rotateY(x * 20);
        rotateX(-y * 20);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-svh items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="hero-content mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <span className="hero-fade reveal-init inline-flex items-center gap-3 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-mist opacity-0 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-tritium opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-tritium" />
            </span>
            Now taking new projects
          </span>

          <h1 className="mt-8 font-display text-[clamp(2.5rem,5.6vw,6rem)] font-semibold leading-[0.98] tracking-tight">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.12em]">
                <span
                  className={`hero-line reveal-init block opacity-0 ${i === lines.length - 1 ? "text-gradient" : "text-bone"}`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade reveal-init mt-8 max-w-xl text-lg leading-relaxed text-mist opacity-0 sm:text-xl">
            Tritium Tech Solutions is a software house building web, mobile, AI
            and cloud products for startups and growing businesses. Clean code,
            bold design and honest delivery.
          </p>

          <div className="hero-fade reveal-init mt-10 flex flex-wrap items-center gap-4 opacity-0">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href="/portfolio" variant="ghost">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="orbit-wrap reveal-init opacity-0 [perspective:1100px]">
          <div ref={tilt} className="[transform-style:preserve-3d]">
            <Image
              src="/tritium-heroo.png"
              alt="Tritium Tech Solution: a robotic hand holding a glowing globe with the Tritium logo, surrounded by web development, AI, automation, digital solutions and business growth"
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="mx-auto h-auto w-full max-w-[560px] animate-float "
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hero-fade reveal-init pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist opacity-0"
      >
        Scroll
        <span className="h-10 w-px animate-glow bg-linear-to-b from-tritium to-transparent" />
      </div>
    </section>
  );
}
