import { LogoMark } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <LogoMark className="size-24 animate-float" />
      <p className="mt-8 font-mono text-sm tracking-[0.3em] text-tritium">ERROR 404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
        Signal <span className="text-gradient">lost</span>
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">
        The page you are looking for has decayed, moved, or never existed. Let&apos;s get you back to the glow.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
