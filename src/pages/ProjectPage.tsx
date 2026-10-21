import { ArrowLeftIcon, ArrowRightIcon, GlobeIcon, PackageIcon } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { Link, useParams } from "react-router";
import { Streamdown } from "streamdown";

import { MonoLabel, Panel, PanelContent, PanelHeader } from "@/components/layout/panel";
import { ProjectLivePreview } from "@/components/custom/projects/LivePreviewCard";
import { StripeSeparator } from "@/components/layout/separator";
import { Button } from "@/components/ui/button";
import { getProject, sortedProjects, type Project } from "@/data";
import { sound } from "@/lib/sound";

function Neighbours({ current }: { current: Project }) {
  const all = sortedProjects();
  const index = all.findIndex((p) => p.slug === current.slug);
  if (index === -1 || all.length < 2) return null;

  const prev = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];

  return (
    <Panel>
      <nav className="grid grid-cols-2 gap-px bg-line" aria-label="More projects">
        <Link
          to={`/projects/${prev.slug}`}
          onClick={() => sound.click()}
          className="group flex flex-col gap-1 bg-background p-4 transition-colors hover:bg-accent/30"
        >
          <MonoLabel className="flex items-center gap-1">
            <ArrowLeftIcon className="size-3 transition-transform group-hover:-translate-x-0.5" /> Previous
          </MonoLabel>
          <span className="truncate font-medium">{prev.title}</span>
        </Link>
        <Link
          to={`/projects/${next.slug}`}
          onClick={() => sound.click()}
          className="group flex flex-col items-end gap-1 bg-background p-4 text-right transition-colors hover:bg-accent/30"
        >
          <MonoLabel className="flex items-center gap-1">
            Next <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
          </MonoLabel>
          <span className="truncate font-medium">{next.title}</span>
        </Link>
      </nav>
    </Panel>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <Panel className="screen-line-top-none">
        <div className="flex flex-col items-center gap-3 px-4 py-24 text-center">
          <MonoLabel>404 — project</MonoLabel>
          <h1 className="text-2xl font-medium tracking-tight">Project not found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button variant="outline" size="sm" asChild className="mt-2">
            <Link to="/projects">
              <ArrowLeftIcon /> All projects
            </Link>
          </Button>
        </div>
      </Panel>
    );
  }

  return (
    <>
      <Panel className="screen-line-top-none">
        <PanelHeader className="pt-6 pb-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Projects
          </Link>

          <motion.h1
            className="mt-4 flex flex-wrap items-center gap-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.title}
            {project.pinned && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/25 bg-foreground/5 px-2.5 py-1 align-middle font-mono text-xs text-foreground uppercase">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Building now
              </span>
            )}
          </motion.h1>
          <p className="mt-3 text-balance text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-line bg-muted/40 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Source
                  </a>
                </Button>
              )}
              {project.packageUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.packageUrl} target="_blank" rel="noopener noreferrer">
                    <PackageIcon /> Package
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <ProjectLivePreview project={project}>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <GlobeIcon /> Live demo
                    </a>
                  </Button>
                </ProjectLivePreview>
              )}
            </div>
          </div>
        </PanelHeader>

        {project.image && (
          <figure className="screen-line-bottom relative p-2">
            <div className="rounded-lg border border-line bg-gradient-to-br from-sky-200/70 via-violet-200/50 to-rose-200/50 p-4 sm:p-6 dark:from-sky-500/15 dark:via-violet-500/12 dark:to-rose-500/10">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full rounded-md object-cover object-top shadow-lg"
                initial={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
            <figcaption className="absolute right-4 bottom-4 rounded bg-background/80 px-1.5 py-0.5 font-mono text-[0.625rem] text-muted-foreground backdrop-blur">
              Fig. 1 — {project.title}
            </figcaption>
          </figure>
        )}

        {project.content && (
          <PanelContent className="py-8">
            <article className="prose max-w-none prose-site prose-zinc dark:prose-invert">
              <Streamdown>{project.content}</Streamdown>
            </article>
          </PanelContent>
        )}
      </Panel>

      <StripeSeparator />
      <Neighbours current={project} />
    </>
  );
}
