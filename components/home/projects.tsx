import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <p className="leading-7">Featured work</p>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
