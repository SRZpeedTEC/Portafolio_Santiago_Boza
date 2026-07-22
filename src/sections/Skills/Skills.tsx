import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { SkillGroup } from "../../components/ui/SkillGroup";
import { skillGroups } from "../../data/skills";
import styles from "./Skills.module.css";

// Skills renders verified capability groups without arbitrary scores or progress indicators.
export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className={styles.section}>
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Technical areas"
          description="Grouped by public profile information and source-code evidence from the repository audit."
        />
      </Reveal>
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <SkillGroup group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
