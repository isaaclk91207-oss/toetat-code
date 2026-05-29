"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Cloud, Lightbulb, Brain } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { services } from "@/lib/constants/services";
import { fadeUp, smooth } from "@/lib/animations";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  smartphone: Smartphone,
  palette: Palette,
  cloud: Cloud,
  lightbulb: Lightbulb,
  brain: Brain,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...smooth, delay: index * 0.1 }}
    >
      <Card className="h-full">
        {Icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon size={24} />
          </div>
        )}
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Services"
          title="What We Offer"
          description="Comprehensive software solutions tailored to your business needs."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
