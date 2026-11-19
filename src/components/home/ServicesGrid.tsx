import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icons";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything you need to <span className="text-gradient">ship great software</span>
              </>
            }
            description="One team across strategy, design, engineering and operations, so nothing gets lost between handoffs."
          />
          <Reveal>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <Link href="/services" className="block h-full">
                <GlowCard className="h-full p-7">
                  <div className="grid size-12 place-items-center rounded-xl border border-line bg-ink text-tritium transition-colors duration-300 group-hover:border-tritium/50">
                    <Icon name={service.icon} className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-bone">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-tritium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <Icon name="arrow-right" className="size-3.5" />
                  </span>
                </GlowCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
