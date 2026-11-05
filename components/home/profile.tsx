import { GithubIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function Profile() {
  return (
    <section className="flex items-center gap-4">
      <div aria-hidden className="size-16 shrink-0 rounded-full bg-muted" />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium">Shubham Zanwar</h3>
        <sub className="text-sm text-muted-foreground">
          Full stack software engineer
        </sub>
      </div>
      <a
        href="https://github.com/shubhamzanwar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="ml-auto text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={GithubIcon} className="size-5" />
      </a>
    </section>
  )
}
