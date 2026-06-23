export type ProjectStatus = "completed" | "in-development" | "planned";

export interface ProjectLink {
  label: "Live Demo" | "Repository" | "Case Study";
  href: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  summary: string;
  statusLine: string;
}

export interface PersonalProfile {
  name: string;
  role: string;
  location: string;
  email: string;
  hero: HeroContent;
  about: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: "mobile" | "desktop" | "poster";
}

export interface ProjectCaseStudy {
  role: string;
  context: string;
  solution: string;
  architectureImage?: ProjectImage;
  decisions: string[];
  challenges: string[];
  outcome: string;
  nextSteps: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  status: ProjectStatus;
  statusLabel?: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  contribution?: string;
  image?: ProjectImage;
  screenshots?: ProjectImage[];
  screenshotLayout?: "mobile" | "desktop" | "poster";
  links: ProjectLink[];
  caseStudy?: ProjectCaseStudy;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Credential {
  title: string;
  issuer?: string;
  date?: string;
  href?: string;
  note?: string;
}

export interface Education {
  school: string;
  degree: string;
  minor: string;
  completed: string;
  location: string;
}
