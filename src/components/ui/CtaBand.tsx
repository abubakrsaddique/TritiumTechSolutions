import Reveal from "./Reveal";
import { ButtonLink } from "./Button";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export default function CtaBand({
  title = "Have an idea? Let's make it glow.",
  text = "Tell us what you are building. We reply to every enquiry within 24 hours with honest next steps.",
}: CtaBandProps) {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/70 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-linear-to-r from-tritium/25 to-plasma/25 blur-[110px]"
          />
          <h2 className="relative mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{text}</p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-sm tracking-wider text-mist underline decoration-line underline-offset-8 transition-colors hover:text-tritium"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
