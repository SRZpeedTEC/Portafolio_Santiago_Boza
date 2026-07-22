import type { SkillGroupData } from "../../types/skill";
import { SkillTag } from "./SkillTag";
import styles from "./SkillGroup.module.css";

interface SkillGroupProps {
  group: SkillGroupData;
}

// SkillGroup renders one reusable category sourced from typed skill data.
export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className={styles.group}>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className={styles.tags} aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </article>
  );
}
