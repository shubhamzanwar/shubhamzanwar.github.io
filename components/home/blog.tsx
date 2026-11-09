import { PostList } from "@/components/post-list"
import { getAllPosts } from "@/lib/blog"

export async function Blog() {
  const posts = await getAllPosts()

  return (
    <section className="flex flex-col gap-4">
      <p className="leading-7">Blog</p>
      <PostList posts={posts} />
    </section>
  )
}
