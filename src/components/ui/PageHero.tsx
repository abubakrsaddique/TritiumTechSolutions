import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

/** Compact hero used at the top of inner pages. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative px-6 pb-16 pt-40 sm:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-tritium/10 blur-[110px]"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
