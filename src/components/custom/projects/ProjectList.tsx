import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
    showAll?: boolean;
    limit?: number;
    showFeatured?: boolean;
    displayMode?: "linear" |  "stack" ;
}

export const ProjectList = ({
    projects,
    showAll = false,
    limit = 4,
    showFeatured = true,
    displayMode = "linear",
}: ProjectListProps) => {
    const featuredProjects = projects.filter((p) => p.featured);
    const regularProjects = projects.filter((p) => !p.featured);

    const displayedFeatured = showAll
        ? featuredProjects
        : featuredProjects.slice(0, Math.min(2, limit));

    const remainingLimit = Math.max(0, limit - displayedFeatured.length);
    const displayedRegular = showAll
        ? regularProjects
        : regularProjects.slice(0, remainingLimit);

    const allDisplayed = [...displayedFeatured, ...displayedRegular];

    

    // ==========================================
    // STACK - Layered card effect
    // ==========================================
    if (displayMode === "stack") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allDisplayed.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        layout="stack"
                    />
                ))}
            </div>
        );
    }



    // ==========================================
    // LINEAR - Minimal list view
    // ==========================================
    if (displayMode === "linear") {
        return (
            <div className="flex flex-col divide-y divide-border">
                {allDisplayed.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        layout="linear"
                    />
                ))}
            </div>
        );
    }

    // ==========================================
    // GRID - Default card grid
    // ==========================================
    return (
        <div className="flex flex-col gap-8">
            {showFeatured && displayedFeatured.length > 0 && (
                <div className="flex flex-col gap-6">
                    {displayedFeatured.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            layout="featured"
                        />
                    ))}
                </div>
            )}

            {displayedRegular.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedRegular.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            layout="card"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};