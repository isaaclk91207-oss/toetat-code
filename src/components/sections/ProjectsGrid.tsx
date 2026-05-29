"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projects } from "@/lib/constants/projects";
import { fadeUp, smooth } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const categories = ["all", ...new Set(projects.map((p) => p.category))];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...smooth, delay: index * 0.1 }}
    >
      <Card className="flex h-full flex-col">
        <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-surface-light">
          <span className="text-sm capitalize text-muted">{project.category}</span>
        </div>

        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <Section>
      <Container>
        <SectionHeading
          label="Projects"
          title="Our Work"
          description="A selection of projects we've delivered across different industries."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-surface text-muted hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          key={activeCategory}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
