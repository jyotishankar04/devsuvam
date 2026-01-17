"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Github, GithubIcon, Link2Icon } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    layout?: "card" | "featured" | "linear" | "spotlight" | "stack"
}

export const ProjectCard = ({ project, layout = "card" }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // ==========================================
    // STACK LAYOUT - Layered card effect
    // ==========================================
    if (layout === "stack") {
        return (
            <article className="relative group cursor-pointer">
                {/* Stack layers (fixed, no hover scale) */}
                <div className="absolute inset-0 rounded-2xl bg-muted/40 translate-x-2 translate-y-2" />
                <div className="absolute inset-0 rounded-2xl bg-muted/60 translate-x-1 translate-y-1" />

                {/* Main card */}
                <div
                    className="
                    relative rounded-2xl overflow-hidden
                    border border-border bg-card
                    transition-all duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-xl
                "
                >
                    {/* Image */}
                    <div className="relative aspect-16/10 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">
                            {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="flex gap-1.5">
                                {project.tags.slice(0, 2).map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <Link
                                to={`/projects/${project.slug}`}
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                View →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    }


    // ==========================================
    // LINEAR LAYOUT - Minimal list style
    // ==========================================
    if (layout === "linear") {
        return (
            <article
                className="group relative py-6 first:pt-0 last:pb-0 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                            {project.featured && (
                                <span className="shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-125 transition-transform duration-300" />
                            )}
                            <Link
                                to={`/projects/${project.slug}`}
                                className="text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-300 hover:underline decoration-primary/50"
                            >
                                {project.title}
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1 group-hover:text-muted-foreground/80 transition-colors duration-300">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <div className={`hidden sm:flex items-center gap-1.5 transition-all duration-500 ${isHovered ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}>
                            {project.tags.slice(0, 3).map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className={`flex items-center gap-2 transition-all duration-500 sm:absolute sm:right-0 ${isHovered ? "sm:opacity-100 sm:translate-x-0" : "sm:opacity-0 sm:translate-x-4"}`}>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 hover:scale-110 text-foreground transition-all duration-300 hover:text-primary"
                                >
                                    <GithubIcon />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-primary hover:bg-primary/90 hover:scale-110 text-primary-foreground transition-all duration-300"
                                >
                                <Link2Icon />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    // ==========================================
    // DEFAULT CARD LAYOUT
    // ==========================================
    return (
        <article className="group flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300"
                        >
                            Live Demo
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-black/90 text-white rounded-lg text-sm font-medium hover:bg-black hover:scale-105 transition-all duration-300"
                        >
                            View Code
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5 group-hover:bg-card/95 transition-colors duration-300">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:-translate-y-0.5"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </article>
    );
};