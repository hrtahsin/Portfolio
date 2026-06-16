import { projects, profile } from "@/data/portfolio";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: profile.role,
    email: `mailto:${siteConfig.email}`,
    url: absoluteUrl("/"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. John's",
      addressRegion: "Newfoundland and Labrador",
      addressCountry: "CA",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Kafka",
      "PostgreSQL",
      "Cloud deployment",
      "Flutter",
      "Software testing",
    ],
  };

  const creativeWorks = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: project.caseStudy ? absoluteUrl(`/projects/${project.slug}`) : absoluteUrl("/#work"),
    keywords: project.technologies.join(", "),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, ...creativeWorks]),
      }}
    />
  );
}
