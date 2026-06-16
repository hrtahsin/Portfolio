import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";
import type { Project, ProjectStatus } from "@/types/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-development": "In development",
  planned: "Planned",
};

const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const externalLinks = project.links.filter((link) => link.href.startsWith("http"));

  return (
    <main id="main-content">
      <article>
        <section className="border-b border-border">
          <Container className="py-12 sm:py-16">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-text-muted transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to selected work
            </Link>

            <div className="mt-10 max-w-4xl">
              <Badge>{statusLabels[project.status]}</Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-text sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-text-muted">{project.summary}</p>
            </div>
          </Container>
        </section>

        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-10">
            <CaseStudySection title="Role and Contribution">
              <p>{project.caseStudy.role}</p>
            </CaseStudySection>

            <CaseStudySection title="Problem and Context">
              <p>{project.caseStudy.context}</p>
            </CaseStudySection>

            <CaseStudySection title="Solution Overview">
              <p>{project.caseStudy.solution}</p>
            </CaseStudySection>

            <CaseStudySection title="Architecture View">
              <ArchitectureDiagram project={project} />
            </CaseStudySection>

            <CaseStudySection title="Engineering Decisions">
              <CaseStudyList items={project.caseStudy.decisions} />
            </CaseStudySection>

            <CaseStudySection title="Technical Challenges">
              <CaseStudyList items={project.caseStudy.challenges} />
            </CaseStudySection>

            <CaseStudySection title="Outcome and Current Status">
              <p>{project.caseStudy.outcome}</p>
            </CaseStudySection>

            <CaseStudySection title="Lessons and Next Steps">
              <CaseStudyList items={project.caseStudy.nextSteps} />
            </CaseStudySection>
          </div>

          <aside className="h-fit rounded-lg border border-border bg-surface p-5 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-text">Project Details</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-text">Status</dt>
                <dd className="mt-1 text-text-muted">{statusLabels[project.status]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-text">Technologies</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </dd>
              </div>
            </dl>

            {externalLinks.length > 0 ? (
              <div className="mt-6 grid gap-3">
                {externalLinks.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </aside>
        </Container>
      </article>
    </main>
  );
}

function getCaseStudyProject(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-normal text-text">{title}</h2>
      <div className="mt-4 text-base leading-8 text-text-muted">{children}</div>
    </section>
  );
}

function CaseStudyList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ArchitectureDiagram({ project }: { project: Project }) {
  const nodes =
    project.slug === "ifixit-ticketing-app"
      ? ["Customer", "Flutter App", "Firebase Auth", "Firestore", "Cloud Function", "Dashboard"]
      : ["Order API", "Kafka Events", "Inventory", "Payment", "Shipping", "Notifications"];

  return (
    <div
      role="img"
      aria-label={`${project.title} high-level architecture diagram`}
      className="rounded-lg border border-border bg-surface p-4"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {nodes.map((node) => (
          <div
            key={node}
            className="flex min-h-16 items-center justify-center rounded-md border border-border bg-surface-muted px-3 text-center text-sm font-semibold text-text"
          >
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
