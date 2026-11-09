import Link from "next/link"

import { formatDate, type PostMeta } from "@/lib/blog"

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.slug} className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <Link
              href={`/blog/${post.slug}`}
              className="leading-7 font-medium underline-offset-4 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-muted-foreground">{post.description}</p>
          </div>
          <time
            dateTime={post.date}
            className="shrink-0 text-sm leading-7 text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
        </li>
      ))}
    </ul>
  )
}
