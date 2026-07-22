export interface NavigationItem {
  label: string;
  href: `#${string}`;
  sectionId: string;
}

// Navigation data is shared by desktop and mobile menus to keep section links consistent.
export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "#home",
    sectionId: "home",
  },
  {
    label: "About",
    href: "#about",
    sectionId: "about",
  },
  {
    label: "Skills",
    href: "#skills",
    sectionId: "skills",
  },
  {
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  {
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
  },
];
