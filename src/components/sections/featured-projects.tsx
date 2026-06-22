import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="scroll-mt-24 border-b border-border">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with visible engineering decisions"
          description="A focused set of projects across backend systems, mobile product development, data storytelling, reliability planning, and Java desktop work."
        />

        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
