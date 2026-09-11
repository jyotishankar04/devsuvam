import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";

import { SOCIAL_LINKS } from "@/data";

/** Empty state for the blog until the first X article is added to src/data/blogs.ts. */
export function BlogComingSoon() {
  const x = SOCIAL_LINKS.find((link) => link.name.startsWith("X"));

  return (
    <div className="relative flex flex-col items-center gap-3 overflow-hidden px-4 py-14 text-center">
      <div aria-hidden className="diagonal-stripes absolute inset-0 mask-radial-from-10% mask-radial-to-70% opacity-60" />

      <span className="relative inline-flex items-center gap-2 rounded-full border border-line bg-background px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-info opacity-50" />
          <span className="relative inline-flex size-2 rounded-full bg-info" />
        </span>
        Coming soon
      </span>

      <motion.p
        className="relative font-handwritten text-4xl leading-none sm:text-5xl"
        initial={{ clipPath: "inset(-20% 100% -20% 0)" }}
        whileInView={{ clipPath: "inset(-20% 0% -20% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      >
        Posts are on the way…
      </motion.p>

      <p className="relative max-w-sm text-sm text-balance text-muted-foreground">
        I'm writing about backend engineering, system design and building products. Articles will
        be published on X and listed here.
      </p>

      {x && (
        <a
          href={x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-1 inline-flex items-center gap-1.5 rounded-md border border-line bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent"
        >
          <FaXTwitter className="size-3.5" />
          Follow {x.handle} for updates
        </a>
      )}
    </div>
  );
}
