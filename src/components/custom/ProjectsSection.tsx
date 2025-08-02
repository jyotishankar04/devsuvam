"use client"

import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Project } from "@/types"
import { allProjects } from "@/constants/index"

const ProjectItem = ({
    project,
    isLast
}: {
    project: Project,
    isLast: boolean
}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative pl-8 pb-8"
        >
            {/* Timeline indicator */}
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            {!isLast && (
                <div className="absolute left-[6px] top-5 bottom-0 w-px bg-border" />
            )}

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                        {project.year}
                    </Badge>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                to={`/projects/${project.id}`}
                                className="text-lg font-semibold hover:text-primary transition-colors"
                            >
                                {project.title}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            Click to view details
                        </TooltipContent>
                    </Tooltip>
                </div>

                <p className="text-muted-foreground text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-3 mt-3">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                            <span>Live Demo</span>
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                        </a>
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 px-0 h-auto text-muted-foreground hover:text-primary"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (
                        <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Show less
                        </>
                    ) : (
                        <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Show more
                        </>
                    )}
                </Button>

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium mb-2">Key Features</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {/* These would come from project details */}
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Dynamic quiz generation based on topic/difficulty</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>Performance analytics dashboard</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>40% faster API response time through Redis caching</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

const ProjectsSection = () => {
    const visibleProjects = allProjects.slice(0, 2)

    return (
        <section id="projects" className="py-12 px-4 max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">
                    Selected <span className="text-primary">Works</span>
                </h2>
                <p className="text-muted-foreground">
                    Here are a few projects I've worked on recently.
                </p>
            </div>

            <div className="space-y-1">
                {visibleProjects.map((project, index) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                        isLast={index === visibleProjects.length - 1}
                    />
                ))}
            </div>

            <Link to={"/projects"}>
                <Button
                    variant="outline"
                >

                    <ChevronDown className="w-4 h-4 mr-2" />
                    Show All Projects ({allProjects.length})

                </Button>
            </Link>
        </section>
    )
}

export default ProjectsSection