"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { Link } from "react-router";
import { ProjectList } from "./projects/ProjectList";

type DisplayMode = "linear" | "stack";

interface ProjectSectionProps {
    projects: Project[];
    showViewAll?: boolean;
    limit?: number;
    title?: string;
    description?: string;
    defaultDisplayMode?: DisplayMode;
    showToggle?: boolean;
}

const displayModeIcons: Record<DisplayMode, React.ReactNode> = {
    linear: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    ),
    stack: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    ),
};

export const ProjectSection = ({
    projects,
    showViewAll = true,
    limit = 4,
    title = "Featured Projects",
    description = "Some of the projects I've worked on, from APIs to distributed systems.",
    defaultDisplayMode = "linear",
    showToggle = true,
}: ProjectSectionProps) => {
    const [displayMode, setDisplayMode] = useState<DisplayMode>(defaultDisplayMode);
    const [hoveredMode, setHoveredMode] = useState<DisplayMode | null>(null);

    const displayModes: DisplayMode[] = ["stack", "linear"];

    return (
        <section className="py-16">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
                        <p className="text-muted-foreground mt-2">{description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Display Mode Toggle */}
                        {showToggle && (
                            <div className="flex items-center gap-1 p-1 bg-muted rounded-xl">
                                {displayModes.map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setDisplayMode(mode)}
                                        onMouseEnter={() => setHoveredMode(mode)}
                                        onMouseLeave={() => setHoveredMode(null)}
                                        className={`p-2 rounded-lg transition-all duration-200 ${displayMode === mode
                                                ? "bg-background text-foreground shadow-sm"
                                                : hoveredMode === mode
                                                    ? "bg-accent text-accent-foreground"
                                                    : "text-muted-foreground"
                                            }`}
                                        aria-label={`${mode} view`}
                                        title={mode.charAt(0).toUpperCase() + mode.slice(1)}
                                    >
                                        {displayModeIcons[mode]}
                                    </button>
                                ))}
                            </div>
                        )}

                        {showViewAll && (
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                            >
                                View all
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Project List */}
                <ProjectList
                    projects={projects}
                    displayMode={displayMode}
                    showFeatured={displayMode === "linear"}
                />
            </div>
        </section>
    );
};