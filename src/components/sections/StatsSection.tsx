"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { stats } from "@/lib/constants/about";
import { fadeUp, smooth } from "@/lib/animations";

export default function StatsSection() {
  return (
    <Section>
      <Container>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ ...smooth, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
