"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lightbulb, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { values } from "@/lib/constants/about";
import { fadeUp, smooth } from "@/lib/animations";
import type { CompanyValue } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  eye: Eye,
  lightbulb: Lightbulb,
  handshake: Handshake,
};

function ValueCard({ value, index }: { value: CompanyValue; index: number }) {
  const Icon = iconMap[value.icon];

  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...smooth, delay: index * 0.1 }}
    >
      <Card className="h-full text-center">
        {Icon && (
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon size={24} />
          </div>
        )}
        <h3 className="text-lg font-semibold">{value.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {value.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function ValuesSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          label="Values"
          title="What We Believe In"
          description="These principles guide every decision we make and every project we deliver."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
