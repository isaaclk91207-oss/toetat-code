import type { Metadata } from "next";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <ProjectsGrid />;
}
