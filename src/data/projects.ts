import airtecCover from "../assets/images/AirTEC.png";
import donceyCover from "../assets/images/DonCEy Kong.png";
import geneticCover from "../assets/images/Genetic.png";
import nutritecCover from "../assets/images/NutriTEC.png";
import tinySqlCover from "../assets/images/TinySQL.png";
import type { Project } from "../types/project";

// Featured projects are manually curated from CV context and repository evidence.
export const projects: Project[] = [
  {
    id: "nutritec",
    title: "NutriTEC",
    category: "Nutrition-management platform",
    summary:
      "Full-stack academic platform for nutrition workflows, including user and patient management, nutritional plans, measurements, progress tracking, recipes, and client/admin interfaces.",
    collaboration:
      "Collaborative academic project with work across backend service integration, databases, and client/admin interfaces.",
    technologies: ["ASP.NET Core", "C#", "React", "Vite", "SQL Server", "MongoDB"],
    imageSrc: nutritecCover,
    imageAlt: "NutriTEC nutrition-management platform project cover",
    repositoryUrl: "https://github.com/SRZpeedTEC/NutriTEC",
  },
  {
    id: "tecair",
    title: "TECAir",
    category: "Airport and flight-management platform",
    summary:
      "Full-stack academic platform for flight and itinerary management, reservations, passenger check-in, seat assignment, baggage handling, promotions, and administrative/client-facing interfaces.",
    collaboration:
      "Developed as part of a four-person university team, with contributions to backend integration, web interfaces, and database work.",
    technologies: ["ASP.NET Core", "C#", "PostgreSQL", "React", "Vite", "Capacitor"],
    imageSrc: airtecCover,
    imageAlt:
      "AirTEC interface cover for the TECAir airport and flight-management platform",
    repositoryUrl: "https://github.com/SRZpeedTEC/TECAir",
  },
  {
    id: "doncey-kong-jr",
    title: "DonCEy Kong Jr",
    category: "Networked retro platform game",
    summary:
      "Academic game project with Raylib-based player and spectator clients, client-server communication, server administration, and retro platform gameplay.",
    collaboration:
      "Collaborative academic project combining C client code, Java server logic, networking, and gameplay systems.",
    technologies: ["C", "Raylib", "Java", "CMake", "Client-server networking", "TLV"],
    imageSrc: donceyCover,
    imageAlt: "DonCEy Kong Jr retro networked platform game project cover",
    repositoryUrl: "https://github.com/SRZpeedTEC/DonCEy_Kong_Jr",
  },
  {
    id: "genetic-kingdom",
    title: "Genetic Kingdom",
    category: "Evolutionary strategy simulation",
    summary:
      "C++ and SFML academic strategy project that combines tower-defense style gameplay with pathfinding, wave management, tower placement, and genetic-algorithm concepts.",
    collaboration:
      "Collaborative academic project focused on gameplay systems, pathfinding, custom data structures, and simulation logic.",
    technologies: ["C++", "SFML", "Pathfinding", "Genetic algorithms", "Data structures"],
    imageSrc: geneticCover,
    imageAlt: "Genetic Kingdom evolutionary strategy simulation project cover",
    repositoryUrl: "https://github.com/SebKoreano/Genetic-Kingdom",
  },
  {
    id: "tinysql",
    title: "TinySQL",
    category: "Educational SQL engine",
    summary:
      "Educational C# database-engine implementation with SQL-like parsing, query execution, file-based storage, system catalogs, and tree-based indexes.",
    collaboration:
      "Academic project focused on database internals, storage management, query processing, and data-structure practice.",
    technologies: ["C#", ".NET", "SQL parsing", "File storage", "B-tree", "BST"],
    imageSrc: tinySqlCover,
    imageAlt: "TinySQL educational SQL engine project cover",
    repositoryUrl: "https://github.com/SRZpeedTEC/TinySQLDbOFICIAL",
  },
];
