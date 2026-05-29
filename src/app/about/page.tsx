import type { Metadata } from "next";
import AboutStory from "@/components/sections/AboutStory";
import StatsSection from "@/components/sections/StatsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <AboutStory />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
