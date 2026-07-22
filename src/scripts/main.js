import { projects } from "../data/projects.js";

const projectsList = document.querySelector("#projects-list");

/* Renders project data from a single source so portfolio content stays easy to maintain. */
const renderProjects = () => {
  if (!projectsList) {
    return;
  }

  projectsList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags" aria-label="Technologies used in ${project.title}">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
};

renderProjects();
