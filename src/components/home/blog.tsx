import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"

import { BlogComingSoon } from "@/components/custom/blog/BlogComingSoon"
import { BlogList } from "@/components/custom/blog/BlogList"
import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { BLOG_POSTS, sortedPosts } from "@/data"

const ID = "blog"

export function Blog() {
  const hasPosts = BLOG_POSTS.length > 0

  return (
    <Panel id={ID}>
      <PanelHeader className="flex items-end justify-between gap-4">
        <PanelAnchorTitle id={ID} sup={hasPosts ? BLOG_POSTS.length : undefined}>
          Blog
        </PanelAnchorTitle>
        {hasPosts && (
          <Link
            to="/blogs"
            className="group mb-1 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            All posts
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </PanelHeader>

      {hasPosts ? <BlogList posts={sortedPosts().slice(0, 4)} /> : <BlogComingSoon />}
    </Panel>
  )
}
