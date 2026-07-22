import type { Project } from "../types/project";

// Featured projects are manually curated from repository evidence, not generated from GitHub metadata.
export const projects: Project[] = [
  {
    id: "nutritec",
    title: "NutriTEC",
    category: "Full-stack nutrition platform",
    summary:
      "Academic platform with role-based React frontends, layered ASP.NET Core APIs, SQL Server scripts, and MongoDB API structure.",
    description:
      "NutriTEC demonstrates a larger academic system with separate administrator, client, and nutritionist interfaces, backend projects split by responsibility, database scripts, REST Client test files, and deployment folders.",
    problem:
      "The project models nutrition workflows that require multiple user roles, product management, daily consumption, measurements, plans, billing, and feedback surfaces.",
    mainFunctionality: [
      "Role-oriented frontend applications for administrator, client, and nutritionist workflows.",
      "Separate API surfaces for relational data and MongoDB-backed feedback features.",
      "SQL Server schema, seed, view, trigger, and stored-procedure scripts.",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "React",
      "Vite",
      "SQL Server",
      "MongoDB",
      "Docker",
    ],
    architecture:
      "Layered backend projects for API, application, domain, infrastructure, and MongoDB-specific modules.",
    role: "CV states participation in backend service integration, databases, and client/admin interfaces.",
    collaboration:
      "Academic project; exact team size should be confirmed by Santiago before stronger wording is published.",
    challenge:
      "Coordinating multiple user roles, database surfaces, and API test artifacts in one academic system.",
    takeaway:
      "Shows experience organizing a larger codebase around typed request/response contracts, database scripts, and role-specific interfaces.",
    imageLabel: "Nutrition platform architecture",
    imageAlt:
      "Abstract placeholder for a nutrition platform with API and database layers.",
    status: "Repository review needed",
    visibility: "Link withheld pending review",
    featured: true,
  },
  {
    id: "tecair",
    title: "TECAir",
    category: "Airline reservation and operations system",
    summary:
      "Full-stack academic airline system with reservation flows, admin management, PostgreSQL persistence, and mobile packaging support.",
    description:
      "TECAir includes an ASP.NET Core API with controllers for airports, flights, itineraries, reservations, check-ins, baggage, users, seats, and promotions, plus React frontends and Capacitor-based mobile packaging.",
    problem:
      "The project addresses booking and airline-management workflows that connect customer reservations with operational administration.",
    mainFunctionality: [
      "Flight, itinerary, reservation, passenger, seat, baggage, and check-in API areas.",
      "React web flows for reservation search, passenger details, seat selection, confirmation, and trip review.",
      "Admin documentation for itinerary-management endpoints and frontend/backend coordination.",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "Npgsql",
      "React",
      "Vite",
      "Capacitor",
    ],
    architecture:
      "Layered backend with API, application, infrastructure, repository interfaces, services, and DTOs.",
    role: "CV states participation in backend construction and integration, web interfaces, and database work.",
    collaboration:
      "CV states the project was developed by a four-person team using task distribution, version control, testing, and problem solving.",
    challenge:
      "Keeping reservation, itinerary, and administrative data flows consistent across backend and frontend surfaces.",
    takeaway:
      "Demonstrates API layering, PostgreSQL-backed workflows, and practical frontend service integration.",
    imageLabel: "Airline workflow system",
    imageAlt: "Abstract placeholder for an airline reservation and operations platform.",
    status: "Repository review needed",
    visibility: "Link withheld pending review",
    featured: true,
  },
  {
    id: "cinetec",
    title: "CineTEC",
    category: "Cinema management and ticket sales prototype",
    summary:
      "React and ASP.NET Core prototype for cinema administration, movie browsing, purchases, and ticket/report workflows.",
    description:
      "CineTEC combines a React/Vite frontend with an ASP.NET Core Web API, file-based XML/JSON/TXT storage folders, generated report outputs, and deployment scripts.",
    problem:
      "The project models cinema operations that need both administrator management views and customer-facing ticket-purchase flows.",
    mainFunctionality: [
      "Controllers for cinemas, clients, functions, movies, purchases, and rooms.",
      "Frontend pages for login, administration, and client movie browsing.",
      "PDF ticket and report-related utilities in backend/frontend code.",
    ],
    technologies: ["ASP.NET Core", "C#", "React", "Vite", "Bootstrap", "XML", "JSON"],
    architecture:
      "Backend organized with controllers, models, repositories, and services; frontend organized with routes, pages, services, hooks, and reusable components.",
    role: "Academic project in the owner account; exact individual contribution requires Santiago's confirmation.",
    collaboration:
      "Collaboration context is not documented in the README and should be confirmed.",
    challenge:
      "Connecting admin and client-facing workflows while keeping persistence and generated reports understandable.",
    takeaway:
      "Shows full-stack workflow modeling and practical separation between API, service, repository, and frontend service layers.",
    imageLabel: "Cinema ticketing prototype",
    imageAlt: "Abstract placeholder for a cinema management and ticket-sales prototype.",
    repositoryUrl: "https://github.com/SRZpeedTEC/CineTEC",
    status: "Functional prototype",
    visibility: "Public",
    featured: true,
  },
  {
    id: "computer-architecture",
    title: "Computer Architecture Foundations",
    category: "FPGA and processor-simulation project",
    summary:
      "Collaborative academic project combining FPGA modules, an applause-controlled elevator, and Python processor simulations.",
    description:
      "The repository includes SystemVerilog modules for an FPGA elevator system and a Python simulator with assembler, ALU, control-unit, pipeline, and UI modules.",
    problem:
      "The project explores how hardware modules and processor execution models can be represented, tested, and visualized.",
    mainFunctionality: [
      "SystemVerilog modules for ALU, PWM, microphone control, buzzer, elevator FSM, and testbenches.",
      "Python simulator for single-cycle, multi-cycle, and pipeline processor variants.",
      "Test files for parser behavior, core flow, pipeline forwarding, stalls, and processor output.",
    ],
    technologies: ["SystemVerilog", "Python", "Assembly", "FPGA", "Unit tests"],
    architecture:
      "Hardware modules and testbenches are separated from the Python processor simulator, UI, and test suite.",
    role: "Collaborative academic project; individual contribution requires Santiago's confirmation.",
    collaboration:
      "The README identifies it as a group project for Computer Architecture Foundations.",
    challenge:
      "Bridging low-level hardware behavior with software simulation and visual feedback.",
    takeaway:
      "Demonstrates computer-engineering foundations beyond typical web application work.",
    imageLabel: "FPGA and processor simulation",
    imageAlt: "Abstract placeholder for FPGA modules and processor simulation workflows.",
    repositoryUrl: "https://github.com/SRZpeedTEC/-sboza-compu-archi-found-G1-2026",
    status: "Academic project",
    visibility: "Public",
    featured: true,
  },
  {
    id: "tinysqldb",
    title: "TinySQLDbOFICIAL",
    category: "Database engine and query-processing practice",
    summary:
      "C# academic database project with request processing, SQL operation modules, file storage, and tree-based indexes.",
    description:
      "TinySQLDbOFICIAL contains separate projects for API interface, entities, query processing, tests, and storage management.",
    problem:
      "The project explores how simplified database commands can be parsed, executed, stored, and indexed.",
    mainFunctionality: [
      "SQL-like operations for create database, set database, create table, insert, select, update, delete, and indexes.",
      "System catalog and file-based storage manager.",
      "Binary search tree and B-tree index structures.",
    ],
    technologies: ["C#", ".NET", "File storage", "SQL parsing", "B-tree", "BST"],
    architecture:
      "Multi-project solution split into API interface, entities, query processor, store data manager, and project tests.",
    role: "Academic project in the owner account; exact individual contribution requires Santiago's confirmation.",
    collaboration:
      "Collaboration context is not documented and should be confirmed before stronger wording is used.",
    challenge:
      "Coordinating parsing, operation execution, system catalog state, and index structures.",
    takeaway:
      "Shows low-level data-structure and database-system thinking that complements full-stack projects.",
    imageLabel: "Query processor and indexes",
    imageAlt: "Abstract placeholder for a SQL-like query processor and index structures.",
    repositoryUrl: "https://github.com/SRZpeedTEC/TinySQLDbOFICIAL",
    status: "Academic project",
    visibility: "Public",
    featured: true,
  },
];
