import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark active:bg-secondary-dark",
  outline:
    "border border-primary text-primary hover:bg-primary/10 active:bg-primary/15",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface active:bg-surface-light",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className,
  disabled = false,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );

  return (
    <motion.div
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="contents"
    >
      {content}
    </motion.div>
  );
}
