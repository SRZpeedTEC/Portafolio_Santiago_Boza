import styles from "./SkillTag.module.css";

interface SkillTagProps {
  label: string;
}

// SkillTag avoids artificial scoring and presents each capability as editable text.
export function SkillTag({ label }: SkillTagProps) {
  return <span className={styles.tag}>{label}</span>;
}
