export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  collaboration: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
}
