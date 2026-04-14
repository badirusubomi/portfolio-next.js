import { Hero } from "@/components/Hero";
import { ProjectStack } from "@/components/ProjectStack";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { getAllProjects } from "@/lib/sanity.queries";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Hero />
      <ProjectStack projects={projects} />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
