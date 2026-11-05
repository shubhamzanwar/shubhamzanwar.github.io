const posts = [
  {
    title: "Blog post title one",
    description: "A short description of what this post is about.",
    date: "2026-10-12",
  },
  {
    title: "Blog post title two",
    description: "A short description of what this post is about.",
    date: "2026-08-03",
  },
  {
    title: "Blog post title three",
    description: "A short description of what this post is about.",
    date: "2026-05-21",
  },
]

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

// "2026-10-12" -> "12 Oct 2026"
function formatDate(iso: string) {
  const [year, month, day] = iso.split("-")
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`
}

export function Blog() {
  return (
    <section className="flex flex-col gap-4">
      <p className="leading-7">Blog</p>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li
            key={post.title}
            className="flex items-start justify-between gap-4"
          >
            <div className="flex flex-col">
              <p className="leading-7 font-medium">{post.title}</p>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
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
    </section>
  )
}
