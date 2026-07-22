import airtecCover from "../assets/images/AirTEC.png";
import computerArchitectureCover from "../assets/images/computer-architecture-foundations-cover.png";
import donceyCover from "../assets/images/DonCEy Kong.png";
import geneticCover from "../assets/images/Genetic.png";
import nutritecCover from "../assets/images/NutriTEC.png";
import tinySqlCover from "../assets/images/TinySQL.png";
import type { Project } from "../types/project";

// Featured projects are the strongest examples I want to show first.
export const projects: Project[] = [
  {
    id: "nutritec",
    title: "NutriTEC",
    category: "Nutrition-management platform",
    summary:
      "Full-stack academic platform for nutrition workflows, including user and patient management, nutritional plans, measurements, progress tracking, recipes, and client/admin interfaces.",
    collaboration:
      "I worked across backend service integration, databases, and client/admin interfaces in this collaborative academic project.",
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
      "I built this with a four-person university team, contributing to backend integration, web interfaces, and database work.",
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
      "I worked on this collaborative academic game using C client code, Java server logic, networking, and gameplay systems.",
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
      "I worked on gameplay systems, pathfinding, custom data structures, and simulation logic for this collaborative academic project.",
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
      "I used this project to practice database internals, storage management, query processing, and data structures.",
    technologies: ["C#", ".NET", "SQL parsing", "File storage", "B-tree", "BST"],
    imageSrc: tinySqlCover,
    imageAlt: "TinySQL educational SQL engine project cover",
    repositoryUrl: "https://github.com/SRZpeedTEC/TinySQLDbOFICIAL",
  },
  {
    id: "computer-architecture-foundations",
    title: "Computer Architecture Foundations",
    category: "Computer Architecture & Digital Systems",
    summary:
      "An interactive RISC-V processor simulator and FPGA elevator system developed to explore processor execution, digital logic, finite-state machines, and hardware-software integration.",
    collaboration:
      "I worked on this collaborative university project to connect processor simulation, digital logic, and hardware-oriented problem solving.",
    technologies: ["SystemVerilog", "Python", "PySide6", "RISC-V", "FPGA"],
    imageSrc: computerArchitectureCover,
    imageAlt:
      "Computer Architecture Foundations RISC-V processor simulator and FPGA elevator project cover",
    repositoryUrl: "https://github.com/SRZpeedTEC/-sboza-compu-archi-found-G1-2026",
  },
];
