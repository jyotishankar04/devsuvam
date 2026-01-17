"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { Link } from "react-router";
import { ProjectList } from "./projects/ProjectList";
import {  ArrowRight, Grid, List } from "lucide-react";

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
        <List />
    ),
    stack: (
       <Grid />
    ),
};

export const ProjectSection = ({
    projects,
    showViewAll = true,
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
                                <ArrowRight />
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