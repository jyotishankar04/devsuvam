import { useState } from "react";
import { ProjectList } from "@/components/custom/projects/ProjectList";
import { useGetProjects } from "@/lib/api";
import { ViewToggle } from "@/components/custom/ViewToggle";
import Loader from "@/components/custom/Loader";

type DisplayMode = "stack" | "linear";

export default function ProjectsPage() {
    const [displayMode, setDisplayMode] = useState<DisplayMode>("stack");
    const { data: projects, isLoading } = useGetProjects();

    if (isLoading) {
        return (
            <div className="flex w-full items-center justify-center py-20">
                <Loader />
            </div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <section className="mx-auto max-w-6xl py-16">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground">
                        Projects
                    </h1>
                    <p className="mt-3 text-muted-foreground">
                        No projects listed yet.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-6xl py-16">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-foreground">
                        Projects
                    </h1>
                    <p className="mt-3 text-muted-foreground">
                        A collection of projects I&apos;ve built — from APIs to
                        production-grade systems.
                    </p>
                </div>

                <ViewToggle value={displayMode} onChange={setDisplayMode} showLabels />
            </div>

            <ProjectList
                projects={projects}
                displayMode={displayMode}
                showAll
                showFeatured
            />
        </section>
    );
}
