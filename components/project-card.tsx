import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  // Landing pages bundled under public/ open in place; other sites open in a new tab.
  const external = /^https?:\/\//.test(project.href)
  return (
    <a
      href={project.href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full bg-transparent transition-colors hover:bg-card">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}
