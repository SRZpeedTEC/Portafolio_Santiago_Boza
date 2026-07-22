import type { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

// Container centralizes the readable page width used across sections and navigation.
export function Container({ children, className }: ContainerProps) {
  const classNames = [styles.container, className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}
