import type { Metadata } from "next"

import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"
import { PostList } from "@/components/post-list"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <PageContainer>
      <section className="flex flex-col gap-6">
        <PageTitle page="blog" />
        <PostList posts={posts} />
      </section>
    </PageContainer>
  )
}
