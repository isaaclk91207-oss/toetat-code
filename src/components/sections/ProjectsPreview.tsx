"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/constants/projects";
import { fadeUp, smooth } from "@/lib/animations";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...smooth, delay: index * 0.1 }}
    >
      <Card className="flex h-full flex-col">
        <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-surface-light">
          <span className="text-sm text-muted">{project.category}</span>
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

export default function ProjectsPreview() {
  const previewProjects = projects.slice(0, 3);

  return (
    <Section>
      <Container>
        <SectionHeading
          label="Projects"
          title="Recent Work"
          description="Some of the projects we've delivered for our clients."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {previewProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" href="/projects">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
