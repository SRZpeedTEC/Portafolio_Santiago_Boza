import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../../types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

// ProjectCard supports future real content while keeping placeholder values explicit today.
export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={styles.card}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div
        className={styles.visual}
        role="img"
        aria-label={project.accessibilityDescription ?? project.imageLabel}
      >
        <span>{project.imageLabel}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.tags} aria-label={`Technologies for ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={project.repositoryUrl} aria-label={`Repository for ${project.title}`}>
            Repository
          </a>
          <a href={project.liveDemoUrl} aria-label={`Live demo for ${project.title}`}>
            Live demo
          </a>
          <a href={project.caseStudyUrl} aria-label={`Case study for ${project.title}`}>
            Case study
          </a>
        </div>
      </div>
    </motion.article>
  );
}
