export type ProjectStatus = "Planned" | "In progress" | "Completed" | "Archived";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  imageLabel: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  caseStudyUrl: string;
  status: ProjectStatus;
  accessibilityDescription?: string;
}
