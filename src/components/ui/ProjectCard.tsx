import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../../types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

// ProjectCard keeps each project concise so visitors can scan the selected work quickly.
export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const projectLinks = [
    project.repositoryUrl
      ? {
          label: "Repository",
          url: project.repositoryUrl,
        }
      : undefined,
    project.liveDemoUrl
      ? {
          label: "Live demo",
          url: project.liveDemoUrl,
        }
      : undefined,
    project.documentationUrl
      ? {
          label: "Documentation",
          url: project.documentationUrl,
        }
      : undefined,
  ].filter((link): link is { label: string; url: string } => Boolean(link));

  return (
    <motion.article
      className={styles.card}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className={styles.visual}>
        <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className={styles.collaboration}>{project.collaboration}</p>
        <div className={styles.tags} aria-label={`Technologies for ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        {projectLinks.length > 0 ? (
          <div className={styles.links}>
            {projectLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                aria-label={`${link.label} for ${project.title}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
