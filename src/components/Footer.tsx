import Link from "next/link";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";
import { services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-line bg-ink/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-tritium">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-mist transition-colors hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-tritium">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-mist transition-colors hover:text-bone"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-tritium">
            Connect
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-mist transition-colors hover:text-bone"
              >
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist transition-colors hover:text-bone"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-4 text-center font-display text-[17vw] font-bold leading-[0.8] tracking-tight text-gradient opacity-[0.07]"
      >
        TRITIUM
      </div> */}

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-6 text-xs text-mist sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
