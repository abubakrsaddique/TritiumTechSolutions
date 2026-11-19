"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectFilters, projects, type ProjectCategory } from "@/lib/data";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectFilters.map((item) => {
          const active = item === filter;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                active ? "text-void" : "text-mist hover:text-bone",
              )}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-tritium to-plasma"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-12 text-center font-mono text-xs tracking-wider text-mist">
        Projects marked &ldquo;Concept&rdquo; are illustrative examples of the work we build.
      </p>
    </div>
  );
}
