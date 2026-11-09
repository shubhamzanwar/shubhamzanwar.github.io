import { GithubIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

// 192px copy of me-square.png (3x the 64px display size). Static export can't
// resize images at request time, so the small file is generated ahead of time.
import photo from "@/public/img/me-square-192.jpg"

export function Profile() {
  return (
    <section className="flex items-center gap-4">
      <Image
        src={photo}
        alt="Shubham Zanwar"
        width={64}
        height={64}
        loading="eager"
        placeholder="blur"
        className="size-16 shrink-0 rounded-full object-cover"
      />
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
