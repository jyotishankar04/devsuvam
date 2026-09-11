import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";

import { BlogComingSoon } from "@/components/custom/blog/BlogComingSoon";
import { BlogList } from "@/components/custom/blog/BlogList";
import {
  MonoLabel,
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/layout/panel";
import { StripeSeparator } from "@/components/layout/separator";
import { CallToAction } from "@/components/home/cta";
import { SOCIAL_LINKS, sortedPosts } from "@/data";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

const ALL = "All";

export default function BlogsPage() {
  const posts = useMemo(() => sortedPosts(), []);
  const tags = useMemo(
    () => [ALL, ...Array.from(new Set(posts.flatMap((post) => post.tags ?? []))).sort()],
    [posts]
  );
  const [activeTag, setActiveTag] = useState(ALL);
  const visible = activeTag === ALL ? posts : posts.filter((post) => post.tags?.includes(activeTag));
  const x = SOCIAL_LINKS.find((link) => link.name.startsWith("X"));

  return (
    <>
      <Panel className="screen-line-top-none">
        <PanelHeader className="pt-10">
          <MonoLabel>Writing</MonoLabel>
          <PanelTitle asChild className="mt-2">
            <h1>
              Blog
              {posts.length > 0 && <PanelTitleSup>{posts.length}</PanelTitleSup>}
            </h1>
          </PanelTitle>
          <PanelDescription className="pt-2">
            Notes on backend engineering, system design and building products. I publish on X as
            Articles — every post opens there.
            {x && (
              <>
                {" "}
                <a
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground link-underline"
                >
                  <FaXTwitter className="size-3.5" />
                  Follow {x.handle}
                </a>
              </>
            )}
          </PanelDescription>
        </PanelHeader>

        {tags.length > 2 && (
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-b border-line px-4 py-3">
            {tags.map((tag) => {
              const active = tag === activeTag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    sound.click();
                    setActiveTag(tag);
                  }}
                  className={cn(
                    "relative shrink-0 cursor-pointer rounded-full px-2.5 py-1 font-mono text-xs transition-colors",
                    active ? "text-background" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="blog-tag-pill"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  <span className="relative">{tag}</span>
                </button>
              );
            })}
          </div>
        )}

        {posts.length === 0 ? (
          <BlogComingSoon />
        ) : visible.length > 0 ? (
          <BlogList key={activeTag} posts={visible} />
        ) : (
          <p className="p-4 text-sm text-muted-foreground">No posts with this tag yet.</p>
        )}
      </Panel>

      <StripeSeparator />
      <CallToAction />
    </>
  );
}
