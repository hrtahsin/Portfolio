import type { MetadataRoute } from "next";

import { projects } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const caseStudyRoutes = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyRoutes,
  ];
}
