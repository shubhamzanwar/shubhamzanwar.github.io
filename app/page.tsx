import { Blog } from "@/components/home/blog"
import { Intro } from "@/components/home/intro"
import { Profile } from "@/components/home/profile"
import { Projects } from "@/components/home/projects"
import { PageContainer } from "@/components/page-container"

export default function Page() {
  return (
    <PageContainer>
      <Profile />
      <Intro />
      <Projects />
      <Blog />
    </PageContainer>
  )
}
