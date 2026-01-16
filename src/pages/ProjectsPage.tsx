// app/projects/page.tsx
"use client";

import { ProjectList } from "@/components/custom/projects/ProjectList";
import { projects } from "@/constants/data";
import { useState } from "react";

export default function ProjectsPage() {
    const [displayMode] = useState<"stack" | "linear">("stack");

    return (
        <div className="py-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div className="w-full flex flex-col gap-6">

                    <div>
                        <h1 className="text-4xl font-bold text-foreground">Projects</h1>
                        <p className="text-muted-foreground mt-2">
                            A collection of projects I've built, from APIs to distributed systems.
                        </p>
                    </div>
                    {/* Project List */}
                    <ProjectList
                        projects={projects}
                        displayMode={displayMode}
                        showAll
                        showFeatured
                    />

                </div>

            </div>

            {/* All Projects */}
        </div>
    );
}