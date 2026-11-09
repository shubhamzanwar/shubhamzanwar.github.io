import Image from "next/image"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  // Landing pages bundled under public/ open in place; other sites open in a new tab.
  const external = /^https?:\/\//.test(project.href)
  const { image } = project

  return (
    <HoverCard>
      <HoverCardTrigger
        href={project.href}
        closeDelay={0}
        delay={80}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Card className="h-full bg-transparent transition-colors hover:bg-card">
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
        </Card>
      </HoverCardTrigger>
      {image && (
        <HoverCardContent
          side="top"
          sideOffset={12}
          // Slower, eased fade/zoom/slide than the default 100ms pop-in.
          className="w-100 overflow-hidden p-0 duration-300"
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            sizes="320px"
            className="h-auto w-full"
          />
        </HoverCardContent>
      )}
    </HoverCard>
  )
}
