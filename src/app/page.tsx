import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { EducationAndCredentials } from "@/components/sections/education";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <EducationAndCredentials />
      <Contact />
      <StructuredData />
    </main>
  );
}
