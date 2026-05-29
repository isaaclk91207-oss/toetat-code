"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants/site";
import { fadeUp, staggerContainer, smooth } from "@/lib/animations";
import { spring } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center md:min-h-[calc(100vh-5rem)]">
      <Container>
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer(0.15)}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={fadeUp}
            transition={smooth}
            className="mb-6 block text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Welcome to {siteConfig.name}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={smooth}
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={smooth}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={spring}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" href="/contact">
              Get Started
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
