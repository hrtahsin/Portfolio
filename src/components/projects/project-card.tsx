import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project, ProjectStatus } from "@/types/portfolio";

const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-development": "In development",
  planned: "Planned",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article className="grid gap-6 rounded-lg border border-border bg-surface p-5 shadow-sm motion-safe:transition motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-6">
      <div className={isReversed ? "min-w-0 md:order-2" : "min-w-0"}>
        <ProjectPreview project={project} />
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{project.statusLabel ?? statusLabels[project.status]}</Badge>
          <span className="text-sm text-text-muted">{project.technologies.slice(0, 3).join(" · ")}</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-normal text-text">{project.title}</h3>
        <p className="mt-3 text-base leading-7 text-text-muted">{project.shortDescription}</p>

        <div className="mt-5 grid gap-4">
          <div>
            <p className="text-sm font-semibold text-text">Purpose</p>
            <p className="mt-1 text-sm leading-6 text-text-muted">{project.summary}</p>
          </div>
          {project.contribution ? (
            <div>
              <p className="text-sm font-semibold text-text">Contribution</p>
              <p className="mt-1 text-sm leading-6 text-text-muted">{project.contribution}</p>
            </div>
          ) : null}
        </div>

        <ul className="mt-5 grid gap-2 text-sm leading-6 text-text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant="secondary">
                {link.label}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.screenshots?.length) {
    const isDesktopScreenshot = project.screenshotLayout === "desktop";
    const isPosterScreenshot = project.screenshotLayout === "poster";

    if (isPosterScreenshot) {
      const [poster] = project.screenshots;

      return (
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-border bg-surface shadow-sm">
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(min-width: 768px) 40vw, calc(100vw - 2.5rem)"
            className="object-cover"
          />
        </div>
      );
    }

    return (
      <div className="min-w-0 overflow-hidden rounded-md border border-border bg-surface-muted p-4">
        <div
          aria-label={`${project.title} screenshots`}
          className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
        >
          {project.screenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className={cn(
                "relative shrink-0 snap-start overflow-hidden rounded-md border border-border bg-surface shadow-sm",
                isDesktopScreenshot
                  ? "aspect-[16/9] w-full sm:aspect-auto sm:h-72 sm:w-[34rem]"
                  : "h-[28rem] w-56",
              )}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes={isDesktopScreenshot ? "(min-width: 640px) 544px, calc(100vw - 7rem)" : "224px"}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-surface-muted shadow-sm">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 768px) 40vw, calc(100vw - 2.5rem)"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} architecture-style project preview`}
      className="flex aspect-[16/11] min-h-56 flex-col justify-between overflow-hidden rounded-md border border-border bg-surface-muted p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
          {statusLabels[project.status]}
        </span>
        <span className="h-2 w-2 rounded-full bg-accent" />
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <PreviewNode label="API" />
        <PreviewLine />
        <PreviewNode label={project.status === "completed" ? "App" : "Events"} />
        <PreviewNode label="Data" />
        <PreviewLine />
        <PreviewNode label="Ops" />
      </div>
      <span className="sr-only">Architecture-style project preview, not a product screenshot.</span>
    </div>
  );
}

function PreviewNode({ label }: { label: string }) {
  return (
    <div className="flex min-h-14 items-center justify-center rounded-md border border-border bg-surface px-3 text-center text-xs font-semibold text-text">
      {label}
    </div>
  );
}

function PreviewLine() {
  return <div aria-hidden="true" className="h-px bg-border" />;
}
