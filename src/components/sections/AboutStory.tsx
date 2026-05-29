"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/constants/site";
import { fadeUp, smooth } from "@/lib/animations";

export default function AboutStory() {
  return (
    <Section>
      <Container>
        <motion.div
          className="mx-auto max-w-3xl"
          variants={fadeUp}
          transition={smooth}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Who We Are
          </h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              {siteConfig.name} was founded with a simple mission: help businesses leverage
              technology to solve real problems. We are a team of passionate engineers,
              designers, and strategists who believe great software starts with understanding
              people.
            </p>
            <p>
              From startups to established enterprises, we partner with organizations to
              build digital products that make an impact. Our approach combines technical
              excellence with clear communication — no jargon, no black boxes, just honest
              work delivered on time.
            </p>
            <p>
              Every project begins with listening. We take the time to understand your
              business, your users, and your goals before writing a single line of code.
              This foundation ensures the solutions we build are not just technically sound,
              but strategically aligned with your vision.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
