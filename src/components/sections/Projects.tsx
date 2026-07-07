import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="proyek" className="bg-gradient-to-b from-[#FBFDFC] to-white py-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-4 gap-6 px-6 sm:px-10 md:grid-cols-8 lg:grid-cols-12">
        <Reveal className="col-span-full">
          <SectionHeading title="Proyek Terpilih" />
        </Reveal>

        <div className="col-span-4 grid grid-cols-1 gap-7 md:col-span-8 md:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
