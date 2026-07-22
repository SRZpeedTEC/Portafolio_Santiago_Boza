export interface SocialProfile {
  label: string;
  url: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface ProfileData {
  fullName: string;
  title: string;
  heroSummary: string;
  location: string;
  email: string;
  github: SocialProfile;
  linkedin: SocialProfile;
  footerNote: string;
}

// Profile data keeps the public contact and hero content in one place.
export const profile: ProfileData = {
  fullName: "Santiago Boza Quirós",
  title: "Computer Engineering student and full-stack software developer",
  heroSummary:
    "I build user-centered web systems with C#, Python, SQL, and frontend technologies, while exploring AI-assisted workflows for analysis, prototyping, and automation.",
  location: "Cartago, Costa Rica",
  email: "s.boza.1@estudiantec.cr",
  github: {
    label: "GitHub",
    url: "https://github.com/SRZpeedTEC",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/santiago-boza-quir%C3%B3s-b06332371",
  },
  footerNote: "Computer Engineering student at Tecnológico de Costa Rica.",
};

// Contact items include the channels I want to share publicly.
export const contactItems: ContactItem[] = [
  {
    label: "Professional email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/SRZpeedTEC",
    href: profile.github.url,
  },
  {
    label: "LinkedIn",
    value: "santiago-boza-quirós",
    href: profile.linkedin.url,
  },
  {
    label: "Location",
    value: profile.location,
    href: "#contact",
  },
];
