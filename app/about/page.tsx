import type { Metadata } from "next"
import {
  Download04Icon,
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
}

const linkClass =
  "font-medium text-foreground underline underline-offset-4"

const socials: { label: string; href: string; icon: IconSvgElement }[] = [
  { label: "GitHub", href: "https://github.com/shubhamzanwar", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zanwarshubham/",
    icon: Linkedin01Icon,
  },
  { label: "Twitter", href: "https://twitter.com/szanwar22", icon: NewTwitterIcon },
]

export default function AboutPage() {
  return (
    <PageContainer>
      <section>
        <PageTitle page="about" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I&apos;m a software engineer currently based in Stockholm, Sweden 🇸🇪.
          I have spent the past few years at early stage startups / scale ups as
          a Member of Technical Staff. I like staying close to hands-on
          implementation in all my roles even when I have had teams or product
          areas to lead—in environments that can otherwise be filled with
          chaos, having deep knowledge and clarity about ground-level execution
          helps me make calmer and more prudent decisions.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I was born in India 🇮🇳 and grew up in Bangalore, a city dubbed the
          silicon valley of India. Growing up, I was fascinated by
          technology, electronics and video games. This fascination compelled
          me to try and build my own games. It&apos;s safe to say that I never
          built a video game—at least not a good one—but the experience got me
          hooked to the instant feedback loop of writing a line of code and
          knowing if it worked or not. This addiction stuck with me through my
          Electrical Engineering bachelors and is still the fuel that powers
          late night coding adventures today.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Since{" "}
          <a
            href="https://news.ycombinator.com/item?id=35285047"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            mid 2024
          </a>
          , I&apos;ve been living and reflecting on what it means to be a
          software engineer with the prevalence of AI agents. It is no longer
          valuable to only produce code while also not valuable to produce
          none—the sweet spot is somewhere in between and nobody knows where. Today, I work at{" "}
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Lovable
          </a>
          , where I&apos;m trying to figure it out; on our mission to also help
          the world figure it out. What a time to be alive!
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you&apos;d rather like to look deeper into my past work or
          experiences, hit one of the links below or download my resume. Say
          hello on LinkedIn if you&apos;d like to connect.
        </p>
        <div className="mt-6 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <HugeiconsIcon icon={social.icon} className="size-5" />
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          download="shubham-zanwar-resume.pdf"
          className={buttonVariants({ variant: "outline", className: "mt-6" })}
        >
          <HugeiconsIcon icon={Download04Icon} strokeWidth={1.75} />
          Download resume
        </a>
      </section>
    </PageContainer>
  )
}
