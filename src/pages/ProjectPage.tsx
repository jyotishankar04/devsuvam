import { projects } from "@/constants/data";
import { useLocation } from "react-router";
import { Streamdown } from "streamdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProjectPage() {
    const location = useLocation();
    const slug = location.pathname.split("/").pop();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto py-20 px-6 text-center">
                <h2 className="text-2xl font-semibold text-foreground">
                    Project not found
                </h2>
                <p className="mt-2 text-muted-foreground">
                    The project you’re looking for doesn’t exist.
                </p>
            </div>
        );
    }

    return (
        <section className="py-16">
            {/* Hero */}
            <div className="mb-12">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full  object-cover rounded-2xl border border-border shadow-sm"
                />

                <div className="mt-8">
                    <h1 className="text-4xl font-bold text-foreground">
                        {project.title}
                    </h1>

                    <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-3">
                        {project.githubUrl && (
                            <Button asChild variant="outline">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button asChild>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <Separator className="my-12" />

            {/* Markdown Content */}
            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <Streamdown>
                    {project.content}
                </Streamdown>
            </article>
        </section>
    );
}
