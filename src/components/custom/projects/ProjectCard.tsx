import type { MouseEvent } from "react";
import { ArrowUpRightIcon, GlobeIcon, PackageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";

import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";
import type { Project } from "@/data";

export type ProjectLayout = "grid" | "list";

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.githubUrl && !project.liveUrl && !project.packageUrl) return null;

  const linkClass =
    "relative z-10 flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground [&_svg]:size-3.5";

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className={linkClass}
        >
          <FaGithub />
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className={linkClass}
        >
          <GlobeIcon />
        </a>
      )}
      {project.packageUrl && (
        <a
          href={project.packageUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} package`}
          className={linkClass}
        >
          <PackageIcon />
        </a>
      )}
    </div>
  );
}

function StatusPill({ project }: { project: Project }) {
  if (!project.featured) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line px-1.5 py-px font-mono text-[0.625rem] text-muted-foreground uppercase">
      <span className="size-1.5 rounded-full bg-info" />
      Featured
    </span>
  );
}

function Tags({ tags, max = 4 }: { tags: string[]; max?: number }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1">
      {tags.slice(0, max).map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line bg-muted/40 px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
        >
          {tag}
        </li>
      ))}
      {tags.length > max && (
        <li className="px-1 py-0.5 font-mono text-[0.6875rem] text-muted-foreground">
          +{tags.length - max}
        </li>
      )}
    </ul>
  );
}

// Tracks the cursor in CSS variables for the spotlight gradient.
function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
}

function GridCard({ project }: { project: Project }) {
  return (
    <article
      onMouseMove={onSpotlightMove}
      className="group relative flex flex-col overflow-hidden bg-background p-2"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), color-mix(in oklab, var(--foreground) 7%, transparent), transparent 70%)",
        }}
      />

      <div className="relative aspect-1200/630 overflow-hidden rounded-lg border border-line bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale transition-[filter,scale] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div className="diagonal-stripes size-full" />
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-2 px-2 pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="flex flex-wrap items-center gap-2 leading-snug font-medium">
            <Link
              to={`/projects/${project.slug}`}
              onClick={() => sound.click()}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
            <StatusPill project={project} />
          </h3>
          <ProjectLinks project={project} className="-mt-1 -mr-1" />
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-auto pt-1">
          <Tags tags={project.tags} />
        </div>
      </div>
    </article>
  );
}

function ListRow({ project }: { project: Project }) {
  return (
    <article className="group relative flex items-start gap-3 bg-background px-4 py-3 transition-colors hover:bg-accent/30">
      <div className="size-11 shrink-0 overflow-hidden rounded-md border border-line bg-muted">
        {project.image && (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="flex flex-wrap items-center gap-2 leading-snug font-medium">
          <Link
            to={`/projects/${project.slug}`}
            onClick={() => sound.click()}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
          <StatusPill project={project} />
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground" />
        </h3>
        <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-2">
          <Tags tags={project.tags} max={5} />
        </div>
      </div>

      <ProjectLinks project={project} />
    </article>
  );
}

export function ProjectCard({ project, layout = "grid" }: { project: Project; layout?: ProjectLayout }) {
  return layout === "list" ? <ListRow project={project} /> : <GridCard project={project} />;
}
