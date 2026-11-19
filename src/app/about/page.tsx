import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading, { Eyebrow } from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";
import { techStack, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tritium Tech Solutions: a modern software house that builds with craft, clarity and an ownership mindset.",
};

const whyTritium = [
  {
    title: "Enterprise-grade engineering, startup speed",
    text: "We bring startups and growing businesses the same standard of engineering and design that large companies expect, without the overhead, the jargon or the surprises.",
  },
  {
    title: "A deliberately small team",
    text: "You work directly with the people building your product. Decisions are fast, communication is clear, and every project gets our full attention.",
  },
  {
    title: "Built to last",
    text: "Clean architecture, documented code and ongoing support, so your product keeps running smoothly as your business grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A software house with a{" "}
            <span className="text-gradient">glow of its own</span>
          </>
        }
        description="We are a new, focused team of designers and engineers who care about building software that is fast, beautiful and built to last."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-bone sm:text-5xl">
                Why &ldquo;<span className="text-gradient">Tritium</span>
                &rdquo;?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                Tritium Tech Solutions is a rare isotope that glows on its own
                for years, with no battery and no cable. It is the idea behind
                everything we build: software that keeps performing long after
                launch day.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-8 border-l border-line pl-7">
              {whyTritium.map((item, i) => (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[34px] top-1.5 size-3 rounded-full border border-tritium bg-void shadow-[0_0_12px_2px_rgba(57,255,156,0.55)]"
                  />
                  <Reveal delay={0.08 * (i + 1)}>
                    <h3 className="font-display text-xl font-semibold text-bone">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-mist">
                      {item.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <GlowCard className="grid place-items-center p-10">
              <Image
                src="/logo-hd.png"
                alt="Tritium Tech Solution logo"
                width={1024}
                height={1024}
                className="size-64 animate-float object-contain sm:size-80 lg:size-96"
              />
            </GlowCard>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our values"
            title={
              <>
                How we <span className="text-gradient">show up</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08}>
                <GlowCard className="h-full p-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-tritium">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-bone">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mist">{value.text}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto mb-10 max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our toolkit"
            title={
              <>
                Modern tools,{" "}
                <span className="text-gradient">chosen with care</span>
              </>
            }
            description="We pick proven technologies that keep your product fast, secure and easy to maintain."
          />
        </div>
        <Marquee items={techStack} />
      </section>

      <section className="px-6 py-24">
        <Reveal className="mx-auto max-w-6xl">
          <GlowCard className="p-10 sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-3xl font-semibold text-bone sm:text-4xl">
                  Join the founding crew
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-mist">
                  We are always interested in meeting talented developers,
                  designers and project managers who love craft and clear
                  communication. Send us a note and a link to your best work.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-bone transition-colors hover:border-tritium/60 hover:text-tritium"
              >
                Get in touch
              </Link>
            </div>
          </GlowCard>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
