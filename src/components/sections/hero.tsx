import { ArrowDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-text sm:text-6xl">
            {profile.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            {profile.hero.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#work" variant="dark">
              View selected work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary">
              Resume
            </ButtonLink>
            <ButtonLink
              href={siteConfig.github}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink
              href={siteConfig.linkedin}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-text-muted">
            {profile.hero.statusLine}
          </p>
        </div>

        <div
          aria-label="Compact profile summary"
          className="rounded-lg border border-border bg-surface p-6 shadow-soft"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/profile/hasan-rohan.jpeg"
              alt="Portrait of Hasan Rohan Tahsin"
              width={180}
              height={180}
              priority
              className="h-40 w-40 rounded-full border border-border object-cover shadow-sm"
              sizes="160px"
            />
            <p className="mt-5 text-lg font-semibold text-text">{profile.name}</p>
            <p className="mt-1 text-sm leading-6 text-text-muted">
              Backend systems · APIs · cloud-ready products
            </p>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
            Current Direction
          </p>
          <dl className="mt-5 grid gap-4">
            <div>
              <dt className="text-sm font-medium text-text-muted">Focus</dt>
              <dd className="mt-1 text-base font-semibold text-text">
                Backend systems, APIs, and cloud-ready product development
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Core stack</dt>
              <dd className="mt-1 text-base font-semibold text-text">
                Java · Spring Boot · Kafka · PostgreSQL · Flutter
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Location</dt>
              <dd className="mt-1 text-base font-semibold text-text">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
