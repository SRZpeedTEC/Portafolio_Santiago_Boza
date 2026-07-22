import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { SkillGroup } from "../../components/ui/SkillGroup";
import { skillGroups } from "../../data/skills";
import styles from "./Skills.module.css";

// Skills keeps the technical overview simple and easy to scan.
export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className={styles.section}>
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Technical areas"
          description="The tools and areas I use across my academic and personal projects."
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
