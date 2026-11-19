import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export default function FeaturedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Products we love <span className="text-gradient">building</span>
              </>
            }
            description="A look at the kinds of products we design and engineer, from health and finance to AI and logistics."
          />
          <Reveal>
            <ButtonLink href="/portfolio" variant="ghost">
              View portfolio
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
