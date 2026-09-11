/**
 * Blog posts live on X (x.com) as Articles — the site only lists them and
 * links out. Add a new entry whenever you publish; until there's at least one,
 * the site shows a "coming soon" note instead.
 *
 * Example:
 * {
 *   title: "Designing idempotent APIs with PostgreSQL",
 *   description: "How I make retries safe with idempotency keys.",
 *   date: "2026-09-01",
 *   url: "https://x.com/devsuvam1/article/…",
 *   tags: ["Backend", "PostgreSQL"],
 * },
 */
export type BlogPost = {
  title: string
  description: string
  /** ISO date, e.g. "2026-09-01" */
  date: string
  /** Link to the X article. */
  url: string
  /** Optional cover image, shown as a floating preview on hover. */
  image?: string
  tags?: string[]
}

export const BLOG_POSTS: BlogPost[] = []

export const sortedPosts = () =>
  [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))
