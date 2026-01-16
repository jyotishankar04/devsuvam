import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
    showAll?: boolean;
    limit?: number;
    showFeatured?: boolean;
    displayMode?: "grid" | "linear" | "spotlight" | "bento" | "stack" | "tilt" | "masonry";
}

export const ProjectList = ({
    projects,
    showAll = false,
    limit = 4,
    showFeatured = true,
    displayMode = "grid",
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
    // SPOTLIGHT - Full-width cinematic cards
    // ==========================================
    if (displayMode === "spotlight") {
        return (
            <div className="flex flex-col gap-8">
                {allDisplayed.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        layout="spotlight"
                    />
                ))}
            </div>
        );
    }

    // ==========================================
    // BENTO - Asymmetric grid layout
    // ==========================================
    if (displayMode === "bento") {
        return (
            <div className="flex flex-col gap-6">
                {allDisplayed.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        layout="bento"
                    />
                ))}
            </div>
        );
    }

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
    // TILT - 3D perspective cards
    // ==========================================
    if (displayMode === "tilt") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allDisplayed.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        layout="tilt"
                    />
                ))}
            </div>
        );
    }

    // ==========================================
    // MASONRY - Pinterest-style layout
    // ==========================================
    if (displayMode === "masonry") {
        return (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {allDisplayed.map((project, index) => (
                    <div key={project.id} className="break-inside-avoid">
                        <ProjectCard
                            project={project}
                            layout={index % 3 === 0 ? "stack" : "card"}
                        />
                    </div>
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