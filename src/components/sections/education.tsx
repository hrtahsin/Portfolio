import { Award, ExternalLink, GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { credentials, education } from "@/data/portfolio";

export function EducationAndCredentials() {
  return (
    <section className="border-b border-border">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading title="Education" />
          <article className="mt-8 rounded-lg border border-border bg-surface p-6">
            <div className="flex gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface-muted text-accent">
                <GraduationCap aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-text">{education.school}</h3>
                <p className="mt-2 text-base font-medium text-text">{education.degree}</p>
                <p className="mt-1 text-sm text-text-muted">{education.minor}</p>
                <p className="mt-4 text-sm text-text-muted">
                  {education.completed} · {education.location}
                </p>
              </div>
            </div>
          </article>
        </div>

        <div>
          <SectionHeading title="Certifications" />
          <div className="mt-8 grid gap-3">
            {credentials.map((credential) => (
              <a
                key={credential.title}
                href={credential.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <article className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-accent">
                    <Award aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-text">{credential.title}</h3>
                      <ExternalLink
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-text-muted transition group-hover:text-accent"
                      />
                    </div>
                    {credential.issuer ? (
                      <p className="mt-1 text-sm text-text-muted">{credential.issuer}</p>
                    ) : null}
                    {credential.note ? (
                      <p className="mt-2 text-sm leading-6 text-text-muted">{credential.note}</p>
                    ) : null}
                    <p className="mt-3 text-sm font-semibold text-accent">View credential</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
