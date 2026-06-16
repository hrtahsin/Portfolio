import { Github, Linkedin, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <div className="rounded-lg border border-border bg-text p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to practical engineering work"
            description="I am interested in software engineering, backend, cloud, QA automation, and technical analyst opportunities. Reach out by email or connect with me on LinkedIn."
            tone="inverse"
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email
            </ButtonLink>
            <ButtonLink
              href={siteConfig.linkedin}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink
              href={siteConfig.github}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink
              href={siteConfig.resumePath}
              variant="secondary"
              className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              Resume
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
