import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <PageContainer>
      <section>
        <PageTitle page="projects" />
        <div className="mt-4 grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
