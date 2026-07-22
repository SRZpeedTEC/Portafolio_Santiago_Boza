import type { SkillGroupData } from "../types/skill";

// Skills are grouped by verified profile information and repository source evidence.
export const skillGroups: SkillGroupData[] = [
  {
    title: "Software development",
    description:
      "CV and repository evidence show academic development across web systems, data structures, and foundational programming.",
    skills: ["C#", ".NET", "C", "Java", "Python", "Racket"],
  },
  {
    title: "Frontend development",
    description:
      "CV and repositories show frontend work through React views, service modules, HTML, CSS, and JavaScript interfaces.",
    skills: ["React", "Vite", "JavaScript", "CSS Modules", "Bootstrap"],
  },
  {
    title: "Backend and APIs",
    description:
      "CV-backed projects include backend construction and integration for full-stack academic systems.",
    skills: ["ASP.NET Core", "REST APIs", "Dependency injection", "Service layers"],
  },
  {
    title: "Databases and data",
    description:
      "Project evidence includes SQL, database design, relational scripts, MongoDB API structure, and custom storage practice.",
    skills: [
      "SQL",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "B-trees",
      "Binary search trees",
    ],
  },
  {
    title: "Artificial intelligence and automation",
    description:
      "The CV verifies practical work with AI-assisted workflows, prompt evaluation, agents, and automation.",
    skills: [
      "Prompt design",
      "Prompt evaluation",
      "Agent configuration",
      "Task automation",
      "AI-assisted prototyping",
    ],
  },
  {
    title: "Computer-engineering foundations",
    description:
      "Academic repositories include hardware description, processor simulation, assembly examples, and networking practice.",
    skills: ["SystemVerilog", "FPGA workflows", "Assembly", "Client-server protocols"],
  },
];
