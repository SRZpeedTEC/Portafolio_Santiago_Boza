import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { Reveal } from "../../components/ui/Reveal";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

// Projects displays manually selected cards backed by an explicit Project interface.
export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <Reveal>
        <SectionHeader
          eyebrow="Relevant projects"
          title="Selected technical work"
          description="A curated set of academic projects chosen for scope, differentiation, and verifiable repository evidence."
        />
      </Reveal>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
