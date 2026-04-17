import { useState } from "react";
import type { Project } from "@/types";
import { Link } from "react-router";
import { ProjectList } from "./projects/ProjectList";
import { ArrowRight } from "lucide-react";
import { ViewToggle } from "./ViewToggle";
import { useGetProjects } from "@/lib/api";
import Loader from "@/components/custom/Loader";

type DisplayMode = "linear" | "stack";

interface ProjectSectionProps {
    projects?: Project[];
    showViewAll?: boolean;
    limit?: number;
    title?: string;
    description?: string;
    defaultDisplayMode?: DisplayMode;
    showToggle?: boolean;
}

export const ProjectSection = ({
    projects: projectsProp,
    showViewAll = true,
    title = "Featured Projects",
    description = "Some of the projects I've worked on, from APIs to distributed systems.",
    defaultDisplayMode = "linear",
    showToggle = true,
}: ProjectSectionProps) => {
    const [displayMode, setDisplayMode] = useState<DisplayMode>(defaultDisplayMode);
    const { data: projectsData, isLoading } = useGetProjects();

    const projects = projectsProp ?? projectsData;

    if (!projectsProp && isLoading) {
        return (
            <div className="flex w-full items-center justify-center py-10">
                <Loader />
            </div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <section className="py-16">
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
                        <p className="text-muted-foreground mt-2">{description}</p>
                    </div>
                    <p className="text-muted-foreground">No projects listed yet.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
                        <p className="text-muted-foreground mt-2">{description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {showToggle && (
                            <ViewToggle value={displayMode} onChange={setDisplayMode} />
                        )}

                        {showViewAll && (
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                            >
                                View all
                                <ArrowRight size={16} />
                            </Link>
                        )}
                    </div>
                </div>

                <ProjectList
                    projects={projects}
                    displayMode={displayMode}
                    showFeatured={displayMode === "linear"}
                />
            </div>
        </section>
    );
};
