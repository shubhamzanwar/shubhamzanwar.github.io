import { Blog } from "@/components/home/blog"
import { Intro } from "@/components/home/intro"
import { Profile } from "@/components/home/profile"
import { Projects } from "@/components/home/projects"

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[800px] flex-col gap-16 px-[100px] pt-16 pb-32">
      <Profile />
      <Intro />
      <Projects />
      <Blog />
    </main>
  )
}
