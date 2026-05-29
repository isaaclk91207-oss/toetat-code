"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeUp, smooth } from "@/lib/animations";

export default function CTASection() {
  return (
    <Section className="bg-primary/5">
      <Container>
        <motion.div
          variants={fadeUp}
          transition={smooth}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left"
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Ready to Build Something Great?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Let&apos;s discuss your project and find the perfect solution for your business.
            </p>
          </div>

          <div className="shrink-0">
            <Button variant="primary" size="lg" href="/contact">
              Start a Project
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
