const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const siteConfig = {
  name: "Hasan Rohan Tahsin",
  title: "Hasan Rohan Tahsin | Software Engineer",
  description:
    "Portfolio of Hasan Rohan Tahsin, a software engineer focused on Java, Spring Boot, APIs, event-driven systems, cloud, and practical product development.",
  url: siteUrl,
  locale: "en_CA",
  email: "hassanrohan025@gmail.com",
  location: "St. John's, NL, Canada",
  github: "https://github.com/hrtahsin",
  linkedin: "https://www.linkedin.com/in/hasan-rohan-tahsin-a59062206/",
  resumePath: "/resume/hasan-rohan-resume.pdf",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
