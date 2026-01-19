"use client";

import { useState } from "react";
import { ProjectList } from "@/components/custom/projects/ProjectList";
import { projects } from "@/constants/data";
import { LayoutGrid, List } from "lucide-react";

const displayModes = ["stack", "linear"] as const;

export default function ProjectsPage() {
    const [displayMode, setDisplayMode] =
        useState<"stack" | "linear">("stack");

    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            {/* Header */}
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-foreground">
                        Projects
                    </h1>
                    <p className="mt-3 text-muted-foreground">
                        A collection of projects I’ve built — from APIs to
                        production-grade systems.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex items-center rounded-xl bg-muted p-1">
                    {displayModes.map((mode) => {
                        const isActive = displayMode === mode;

                        return (
                            <button
                                key={mode}
                                onClick={() => setDisplayMode(mode)}
                                className={`
                                    flex items-center gap-2 rounded-lg px-3 py-2 text-sm
                                    transition-all
                                    ${isActive
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                    }
                                `}
                                aria-label={`${mode} view`}
                            >
                                {mode === "stack" ? (
                                    <LayoutGrid />
                                ) : (
                                    <List />
                                )}
                                <span className="hidden sm:inline capitalize">
                                    {mode}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects */}
            <ProjectList
                projects={projects}
                displayMode={displayMode}
                showAll
                showFeatured
            />
        </section>
    );
}
