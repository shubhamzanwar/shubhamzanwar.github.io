import fs from "node:fs/promises"
import path from "node:path"

import matter from "gray-matter"
import rehypeExternalLinks from "rehype-external-links"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

// Posts are markdown files in content/blog/. The filename is the URL slug:
// content/blog/<slug>.md -> /blog/<slug>
const POSTS_DIR = path.join(process.cwd(), "content/blog")

export type PostMeta = {
  slug: string
  title: string
  description: string
  /** YYYY-MM-DD */
  date: string
  coverImage?: string
  /** HTML attribution for the cover photo. */
  coverCredit?: string
}

export type Post = PostMeta & { html: string }

async function readPost(slug: string) {
  const file = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), "utf8")
  const { data, content } = matter(file)
  const meta: PostMeta = {
    slug,
    title: data.title,
    description: data.subTitle,
    // YAML parses unquoted dates as Date objects.
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date),
    coverImage: data.coverImage,
    coverCredit: data.coverCredit,
  }
  return { meta, content }
}

export async function getPostSlugs() {
  const files = await fs.readdir(POSTS_DIR)
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (s) => (await readPost(s)).meta)
  )
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug: string): Promise<Post> {
  const { meta, content } = await readPost(slug)
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    // Posts contain some raw HTML (e.g. <img> tags); they're our own content.
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["nofollow", "noopener", "noreferrer"],
    })
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(content)
  return { ...meta, html: String(html) }
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

/** "2026-10-12" -> "12 Oct 2026" */
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-")
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`
}
