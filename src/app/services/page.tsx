import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import Faq from "@/components/services/Faq";
import { Icon } from "@/components/Icons";
import { engagementModels, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI and automation, cloud and DevOps, UI/UX design and software consulting from Tritium Tech Solution.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Full-Stack Product team,{" "}
            <span className="text-gradient">on demand</span>
          </>
        }
        description="From the first sketch to the thousandth deploy, we cover design, engineering and operations so you can focus on your customers."
      />

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.id}>
              <GlowCard>
                <div
                  id={service.id}
                  className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="grid size-14 place-items-center rounded-2xl border border-line bg-ink text-tritium">
                        <Icon name={service.icon} className="size-7" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.3em] text-mist">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold text-bone sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-mist">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between gap-8">
                    <ul className="space-y-4">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-bone"
                        >
                          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-tritium/10 text-tritium">
                            <Icon name="check" className="size-3.5" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-ink px-3 py-1 font-mono text-[11px] text-mist"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Engagement models"
            title={
              <>
                Work with us <span className="text-gradient">your way</span>
              </>
            }
            description="Pick the structure that fits your stage and budget. You can switch models as your needs change."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={i * 0.08}>
                <GlowCard className="h-full p-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-tritium">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-bone">
                    {model.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mist">{model.text}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient">answered</span>
              </>
            }
            description="Can't find what you are looking for? Send us a message and we will get back to you within a day."
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
