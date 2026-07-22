export type ProjectStatus =
  | "Academic project"
  | "Functional prototype"
  | "In development"
  | "Repository review needed";

export type RepositoryVisibility = "Public" | "Private" | "Link withheld pending review";

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  problem: string;
  mainFunctionality: string[];
  technologies: string[];
  architecture: string;
  role: string;
  collaboration: string;
  challenge: string;
  takeaway: string;
  imageLabel: string;
  imageAlt: string;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  status: ProjectStatus;
  visibility: RepositoryVisibility;
  featured: boolean;
}
