import { useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

import type { BlogPost } from "@/data";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

const NEW_POST_DAYS = 14;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const isNew = (iso: string) =>
  (Date.now() - new Date(iso).getTime()) / 864e5 <= NEW_POST_DAYS;

function Preview({ post }: { post: BlogPost }) {
  if (post.image) {
    return <img src={post.image} alt="" className="h-28 w-48 object-cover" />;
  }
  // No cover: a tiny "X article" card instead.
  return (
    <div className="diagonal-stripes flex h-28 w-48 flex-col justify-between bg-background p-3">
      <FaXTwitter className="size-4" />
      <div>
        <p className="line-clamp-2 text-xs leading-snug font-medium">{post.title}</p>
        <p className="mt-1 font-mono text-[0.625rem] text-muted-foreground">X Article</p>
      </div>
    </div>
  );
}

/**
 * Hover-focus post list (after TheAdroitDev): hovering a row blurs the others
 * and a preview card follows the cursor. Every row links out to X.
 */
export function BlogList({ posts }: { posts: BlogPost[] }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 32, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 350, damping: 32, mass: 0.6 });

  const onMouseMove = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const localX = e.clientX - rect.left;
    // Flip to the cursor's left near the right edge so it never clips.
    x.set(localX > rect.width * 0.6 ? localX - 212 : localX + 20);
    y.set(e.clientY - rect.top - 56);
  };

  const hoveredPost = hovered !== null ? posts[hovered] : null;

  return (
    <ul
      ref={containerRef}
      className="relative divide-y divide-line"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setHovered(null)}
    >
      {posts.map((post, index) => (
        <motion.li
          key={post.url + post.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          onMouseEnter={() => setHovered(index)}
        >
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click()}
            className={cn(
              "group flex flex-col gap-1.5 px-4 py-4 transition-[opacity,filter,background-color] duration-300",
              hovered !== null && hovered !== index
                ? "opacity-40 blur-[2px]"
                : "hover:bg-accent/30"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="flex flex-wrap items-center gap-2 leading-snug font-medium text-balance">
                {post.title}
                {isNew(post.date) && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-line px-1.5 py-px font-mono text-[0.625rem] text-muted-foreground uppercase">
                    <span className="size-1.5 rounded-full bg-info" />
                    New
                  </span>
                )}
              </h3>
              <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </div>

            <p className="line-clamp-2 text-sm text-muted-foreground">{post.description}</p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground/80">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <FaXTwitter className="size-3" /> Article
              </span>
              {post.tags?.map((tag) => (
                <span key={tag} className="before:mr-2 before:content-['·']">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </motion.li>
      ))}

      {/* Cursor-following preview, fine pointers only. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-20 hidden pointer-fine:block"
        style={{ x: springX, y: springY }}
      >
        <AnimatePresence mode="popLayout">
          {hoveredPost && (
            <motion.div
              key={hoveredPost.title}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              transition={{ duration: 0.18 }}
              className="overflow-hidden rounded-lg border border-line bg-background shadow-lg"
            >
              <Preview post={hoveredPost} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ul>
  );
}
