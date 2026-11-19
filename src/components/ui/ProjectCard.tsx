import Image from "next/image";
import type { Project } from "@/lib/data";
import GlowCard from "./GlowCard";

/** Real project screenshot, cropped to the same 16:10 frame as the generated cover. */
function CoverImage({ project, src }: { project: Project; src: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
      <Image
        src={src}
        alt={`${project.title} website screenshot`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

/** Abstract UI mock-up generated from the project's accent colours, so no image assets are required. */
function Cover({ project }: { project: Project }) {
  const [a, b] = project.accent;

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden border-b border-line"
      style={{
        background: `radial-gradient(circle at 25% 20%, ${a}40, transparent 55%), radial-gradient(circle at 85% 90%, ${b}33, transparent 50%), #0a1017`,
      }}
    >
      <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-xl border border-white/10 bg-[#070a13]/70 p-4 backdrop-blur transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div
          className="mt-4 h-3 w-2/5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${a}, ${b})` }}
        />
        <div className="mt-3 h-2 w-4/5 rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="h-14 rounded-lg border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </div>
      <span className="absolute left-4 top-4 font-display text-4xl font-bold tracking-tight text-white/10">
        {project.title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard className="h-full">
      {project.image ? (
        <CoverImage project={project} src={project.image} />
      ) : (
        <Cover project={project} />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-tritium">
            {project.category}
          </span>
          {project.concept && (
            <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mist">
              Concept
            </span>
          )}
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-bone">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-plasma">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-ink px-3 py-1 font-mono text-[11px] text-mist"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </GlowCard>
  );
}
