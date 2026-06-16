import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border">
      <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading eyebrow="About" title="Current focus and background" />
        <div className="grid gap-5 text-base leading-8 text-text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
