import type { Variants, Transition } from "framer-motion";

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export function staggerContainer(delay: number = 0.1): Variants {
  return {
    initial: {},
    animate: {
      transition: { staggerChildren: delay },
    },
  };
}

export const spring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const smooth: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};
