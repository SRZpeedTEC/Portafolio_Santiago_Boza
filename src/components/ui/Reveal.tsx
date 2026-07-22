import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

// Reveal standardizes short entrance animation while respecting reduced-motion settings.
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.42, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
