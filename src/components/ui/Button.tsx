import type { PropsWithChildren } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "motion/react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren, Omit<HTMLMotionProps<"a">, "children"> {
  variant?: "primary" | "secondary";
}

// Button uses native links for section navigation and Motion only for subtle interaction feedback.
export function Button({
  children,
  className,
  variant = "primary",
  ...anchorProps
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.a
      className={classNames}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      {...anchorProps}
    >
      {children}
    </motion.a>
  );
}
