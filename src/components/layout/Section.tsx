import type { PropsWithChildren } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

interface SectionProps extends PropsWithChildren {
  id: string;
  labelledBy: string;
  className?: string;
}

// Section provides consistent spacing and semantic landmarks for the scrolling page.
export function Section({ children, className, id, labelledBy }: SectionProps) {
  const classNames = [styles.section, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classNames} aria-labelledby={labelledBy}>
      <Container>{children}</Container>
    </section>
  );
}
