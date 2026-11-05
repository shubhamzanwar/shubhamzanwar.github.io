import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const placeholders = [1, 2, 3]

export function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4">
        <p className="leading-7">Featured work</p>
        <Link
          href="/projects"
          className="text-xs font-medium text-muted-foreground underline underline-offset-4"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {placeholders.map((n) => (
          <Card
            key={n}
            className="bg-transparent transition-colors hover:bg-card"
          >
            <CardHeader>
              <CardTitle>Project {n}</CardTitle>
              <CardDescription>Project description goes here.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
