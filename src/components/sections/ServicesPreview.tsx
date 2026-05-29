"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Cloud, Lightbulb, Brain } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon size={20} />
          </div>
        )}
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <Section>
      <Container>
        <SectionHeading
          label="Services"
          title="What We Do"
          description="We deliver end-to-end software solutions that drive business growth and digital transformation."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {previewServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" href="/services">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
