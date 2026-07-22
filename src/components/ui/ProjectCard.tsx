import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../../types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

// ProjectCard keeps the overview concise and reveals evidence-backed details on demand.
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
      <div className={styles.visual} role="img" aria-label={project.imageAlt}>
        <span>{project.imageLabel}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{project.status}</span>
          <span>{project.visibility}</span>
        </div>
        <p className={styles.category}>{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.tags} aria-label={`Technologies for ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <details className={styles.details}>
          <summary>Project details</summary>
          <p>{project.description}</p>
          <dl>
            <div>
              <dt>Context</dt>
              <dd>{project.problem}</dd>
            </div>
            <div>
              <dt>Architecture</dt>
              <dd>{project.architecture}</dd>
            </div>
            <div>
              <dt>Contribution</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Collaboration</dt>
              <dd>{project.collaboration}</dd>
            </div>
            <div>
              <dt>Challenge</dt>
              <dd>{project.challenge}</dd>
            </div>
            <div>
              <dt>Takeaway</dt>
              <dd>{project.takeaway}</dd>
            </div>
          </dl>
          <ul>
            {project.mainFunctionality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
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
