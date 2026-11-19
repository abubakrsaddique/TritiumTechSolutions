import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";
import ContactForm from "@/components/contact/ContactForm";
import { Icon } from "@/components/Icons";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig } from "@/lib/site";
import { hasWhatsApp, whatsappLink } from "@/lib/whatsapp";
import type { IconName } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Tritium Tech Solution about your project. We reply to every enquiry within 24 hours.",
};

const details: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: "mail",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "clock",
    label: "Response time",
    value: `We reply ${siteConfig.responseTime}`,
  },
  { icon: "pin", label: "Where we work", value: siteConfig.location },
];

const nextSteps = [
  "We read your message and reply with a few clarifying questions.",
  "We book a free 30-minute discovery call.",
  "You receive a clear proposal with scope, timeline and price.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">brilliant</span>
          </>
        }
        description="Share a few details about your project and we will get back to you with honest advice and next steps."
      />

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            {details.map((item, i) => (
              <Reveal key={item.label} delay={0.08 * (i + 1)}>
                <GlowCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-ink text-tritium">
                      <Icon name={item.icon} className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-bone transition-colors hover:text-tritium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-bone">{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}

            {hasWhatsApp && (
              <Reveal delay={0.32}>
                <GlowCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                      <WhatsAppIcon className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                        WhatsApp
                      </p>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-bone transition-colors hover:text-tritium"
                      >
                        Chat with us now
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            )}

            <Reveal delay={0.4}>
              <GlowCard className="p-6">
                <h2 className="font-display text-xl font-semibold text-bone">
                  What happens next?
                </h2>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-4 text-sm leading-relaxed text-mist"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-tritium/40 font-mono text-xs text-tritium">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </GlowCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
