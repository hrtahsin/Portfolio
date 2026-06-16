import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <SectionHeading title="Skills" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.title} className="rounded-lg border border-border bg-background p-5">
              <h3 className="text-lg font-semibold text-text">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
