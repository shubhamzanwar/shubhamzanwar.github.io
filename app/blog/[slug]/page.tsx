import type { Metadata } from "next"

import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"
import { formatDate, getPost, getPostSlugs } from "@/lib/blog"

import "../markdown.css"

// Every post is rendered to static HTML at build time (and on request in
// `next dev`); unknown slugs 404 instead of rendering on demand.
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <PageContainer>
      <article className="flex flex-col gap-8">
        <PageTitle page="blog" />
        <header className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </header>
        {post.coverImage && (
          <figure className="flex flex-col gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer */}
            <img src={post.coverImage} alt="" className="w-full rounded-lg" />
            {post.coverCredit && (
              <figcaption
                className="text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-4"
                dangerouslySetInnerHTML={{ __html: post.coverCredit }}
              />
            )}
          </figure>
        )}
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </PageContainer>
  )
}
