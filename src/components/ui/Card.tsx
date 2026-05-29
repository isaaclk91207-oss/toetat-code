import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={spring}
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        hover && "transition-colors hover:border-primary/50",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
