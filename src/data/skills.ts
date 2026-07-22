import type { SkillGroupData } from "../types/skill";

// Skills are grouped around the areas I use most in my projects.
export const skillGroups: SkillGroupData[] = [
  {
    title: "Software development",
    description:
      "I work across web systems, data structures, and foundational programming.",
    skills: ["C#", ".NET", "C", "Java", "Python", "Racket"],
  },
  {
    title: "Frontend development",
    description:
      "I build interfaces with React, service modules, HTML, CSS, and JavaScript.",
    skills: ["React", "Vite", "JavaScript", "CSS Modules", "Bootstrap"],
  },
  {
    title: "Backend and APIs",
    description: "I build and connect backend services for full-stack academic systems.",
    skills: ["ASP.NET Core", "REST APIs", "Dependency injection", "Service layers"],
  },
  {
    title: "Databases and data",
    description:
      "I work with SQL, database design, relational scripts, MongoDB, and custom storage practice.",
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
      "I use AI-assisted workflows for prompt evaluation, agents, automation, and prototyping.",
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
      "I also practice hardware description, processor simulation, assembly, and networking fundamentals.",
    skills: ["SystemVerilog", "FPGA workflows", "Assembly", "Client-server protocols"],
  },
];
