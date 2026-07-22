import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

// SectionHeader keeps the heading hierarchy visually consistent without hiding semantics.
export function SectionHeader({ description, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
