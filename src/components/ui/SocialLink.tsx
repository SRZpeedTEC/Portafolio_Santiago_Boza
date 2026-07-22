import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styles from "./SocialLink.module.css";

interface SocialLinkProps
  extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

// SocialLink provides a consistent accessible target for external profile links.
export function SocialLink({ children, label, ...anchorProps }: SocialLinkProps) {
  return (
    <a className={styles.link} aria-label={label} {...anchorProps}>
      {children}
    </a>
  );
}
