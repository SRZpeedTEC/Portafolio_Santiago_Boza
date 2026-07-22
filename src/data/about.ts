export interface AboutDetail {
  title: string;
  items: string[];
}

export const aboutIntro = [
  "I am a sixth-semester Computer Engineering student at Tecnologico de Costa Rica, currently building a portfolio around full-stack academic systems and computer-engineering foundations.",
  "My work connects backend services, relational and non-relational data, frontend interfaces, and user-centered workflows. I also work with AI-assisted processes for prompt design, agent configuration, task automation, analysis, and prototyping.",
  "I am interested in contributing to real projects, expanding my technical judgment, gaining professional experience, and collaborating with new teams.",
];

// About details keep the profile factual while avoiding temporary review language in the UI.
export const aboutDetails: AboutDetail[] = [
  {
    title: "Academic background",
    items: [
      "Computer Engineering degree program at Tecnologico de Costa Rica.",
      "Currently in the sixth semester, with academic progress started in 2024.",
    ],
  },
  {
    title: "Academic highlights",
    items: [
      "Weighted general average: 92.95.",
      "34 approved courses and no failed courses.",
    ],
  },
  {
    title: "Professional interests",
    items: [
      "Data structures and database-oriented systems.",
      ".NET and application development.",
      "Embedded systems, artificial intelligence, and cybersecurity.",
    ],
  },
  {
    title: "Working principles",
    items: [
      "Prioritize user experience, needs, and ease of use.",
      "Coordinate work through version control, task distribution, testing, and problem solving.",
      "Use documentation and structured review to make projects easier to maintain.",
    ],
  },
  {
    title: "Leadership and involvement",
    items: [
      "IntegraTEC Computer Engineering leader in 2025.",
      "Supported orientation and academic communication for new Computer Engineering students.",
      "Coordinated with other student leaders, strengthening listening, leadership, and collaborative work.",
    ],
  },
  {
    title: "Languages",
    items: [
      "Spanish: native.",
      "English: B2 listening and reading; B1 writing and speaking.",
    ],
  },
];
