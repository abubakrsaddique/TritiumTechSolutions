import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected web, mobile, AI and SaaS products designed and engineered by Tritium Tech Solution.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work that <span className="text-gradient">stands out</span>
          </>
        }
        description="A selection of the products we design and build across web, mobile, AI and SaaS. Filter by category to explore."
      />
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <ProjectGrid />
        </div>
      </section>
      <CtaBand title="Want to be our next success story?" />
    </>
  );
}
