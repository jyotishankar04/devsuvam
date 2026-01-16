"use client"

import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { allProjects } from "@/constants/index"
import { useState } from "react"

const ProjectsPage = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null)
    const [filter, setFilter] = useState<string>("All")

    // Get all unique tags for filtering
    const allTags = Array.from(
        new Set(allProjects.flatMap(project => project.tags))
    ).sort()

    // Filter projects by selected tag
    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(project => project.tags.includes(filter))

    const toggleExpand = (projectId: string) => {
        setExpandedProject(expandedProject === projectId ? null : projectId)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 px-4 max-w-6xl mx-auto"
        >
            {/* Page Header */}
            <div className="mb-12 text-center">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold mb-4"
                >
                    My <span className="text-primary">Projects</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                    A collection of my professional and personal projects showcasing my skills and experience.
                </motion.p>
            </div>

            {/* Category Filters */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
            >
                <Button
                    key="All"
                    variant={filter === "All" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("All")}
                    className="rounded-full"
                >
                    All
                </Button>
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={filter === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter(tag)}
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            layout
                            className="bg-background border rounded-xl overflow-hidden hover:shadow-md transition-all"
                        >
                            {/* Project Image */}
                            <div className="h-48 bg-linear-to-br from-primary/10 to-secondary/10 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    ) : (
                                        <span className="text-6xl font-bold">
                                            {project.title[0]}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="outline">{project.year}</Badge>
                                    <div className="flex gap-1">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mb-2">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {project.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Links and Expand Button */}
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3">
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                                <span>Live</span>
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
                                        onClick={() => toggleExpand(project.id)}
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        {expandedProject === project.id ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </Button>
                                </div>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {expandedProject === project.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-4 border-t">
                                                <div className="mb-4">
                                                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <Badge
                                                                key={tag}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <Link to={`/projects/${project.id}`}>
                                                    <Button variant="outline" className="w-full">
                                                        View Project Details
                                                    </Button>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                >
                    <h3 className="text-xl font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">
                        We couldn't find any projects matching "{filter}"
                    </p>
                    <Button variant="outline" onClick={() => setFilter("All")}>
                        Clear filters
                    </Button>
                </motion.div>
            )}
        </motion.div>
    )
}

export default ProjectsPage