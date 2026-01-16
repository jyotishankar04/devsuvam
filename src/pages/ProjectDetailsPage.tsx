"use client"

import { ArrowUpRight, Github, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router"
import { getProjectDetails } from "@/constants/index"

const ProjectDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const project = getProjectDetails(id || "")

    if (!project) {
        return (
            <div className="py-12 px-4 max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button asChild variant="ghost" className="mt-4">
                    <Link to="/projects" className="flex items-center gap-1">
                        <ChevronLeft className="w-5 h-5" />
                        Back to Projects
                    </Link>
                </Button>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 px-4 max-w-6xl mx-auto"
        >
            {/* Back button */}
            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Button asChild variant="ghost" className="pl-0">
                    <Link to="/projects" className="flex items-center gap-1">
                        <ChevronLeft className="w-5 h-5" />
                        Back to Projects
                    </Link>
                </Button>
            </motion.div>

            {/* Project header */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row gap-8 mb-12 mt-8"
            >
                <div className="flex-1">
                    <Badge
                        variant="outline"
                        className="mb-4 bg-primary/10 text-primary"
                    >
                        {project.year}
                    </Badge>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {project.title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        {project.description}
                    </p>

                    <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {project.tags.map((tag, index) => (
                            <motion.div
                                key={tag}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                    {tag}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {project.links.live && (
                            <Button
                                asChild
                                variant="outline"
                                className="group hover:bg-primary/10"
                            >
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                                    <span className="group-hover:text-primary transition-colors">Live Demo</span>
                                </a>
                            </Button>
                        )}
                        {project.links.github && (
                            <Button
                                asChild
                                variant="outline"
                                className="group hover:bg-primary/10"
                            >
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                                    <span className="group-hover:text-primary transition-colors">View Code</span>
                                </a>
                            </Button>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="md:w-1/2"
                >
                    <div className="bg-muted rounded-xl aspect-video w-full overflow-hidden border border-border hover:border-primary/50 transition-colors">
                        <img
                            src={project.content.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Project content sections */}
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    {/* Overview */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Project Overview
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.content.overview}
                        </p>
                    </motion.section>

                    {/* Problem & Solution */}
                    <motion.section
                        className="grid md:grid-cols-2 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-3 text-primary">The Challenge</h3>
                            <p className="text-muted-foreground">
                                {project.content.problem}
                            </p>
                        </div>
                        <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Our Solution</h3>
                            <p className="text-muted-foreground">
                                {project.content.solution}
                            </p>
                        </div>
                    </motion.section>

                    {/* Features */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Key Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.content.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 + (index * 0.05) }}
                                >
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Gallery */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Project Gallery
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.content.images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-muted rounded-lg overflow-hidden aspect-video border border-border hover:border-primary/50 transition-colors"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.0 + (index * 0.1) }}
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Sidebar */}
                <motion.div
                    className="space-y-8"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <h3 className="font-semibold mb-4 text-primary">Technologies Used</h3>
                        <ul className="space-y-3">
                            {project.content.technologies.map((tech, index) => (
                                <motion.li
                                    key={index}
                                    className="text-muted-foreground text-sm flex items-start gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 + (index * 0.05) }}
                                >
                                    <span className="text-primary mt-1">•</span>
                                    <span>{tech}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <h3 className="font-semibold mb-4 text-primary">Project Details</h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div>
                                <p className="font-medium text-foreground">Timeline</p>
                                <p>{project.year} ({project.id === 'aurora-design-system' ? '6 months' :
                                    project.id === 'opulent-banking' ? '9 months' :
                                        project.id === 'nexus-dashboard' ? '5 months' : '4 months'})</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Team</p>
                                <p>{project.id === 'aurora-design-system' ? '3 Designers, 5 Developers' :
                                    project.id === 'opulent-banking' ? '4 Developers, 2 Designers, 1 PM' :
                                        project.id === 'nexus-dashboard' ? '6 Developers, 2 Data Scientists' : 'Solo Project'}</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">My Role</p>
                                <p>{project.id === 'aurora-design-system' ? 'Lead Frontend Developer' :
                                    project.id === 'opulent-banking' ? 'Mobile Developer' :
                                        project.id === 'nexus-dashboard' ? 'Full-stack Developer' : 'Sole Developer'}</p>
                            </div>
                        </div>
                    </div>

                    {project.content.challenges && (
                        <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="font-semibold mb-4 text-primary">Key Challenges</h3>
                            <ul className="space-y-3">
                                {project.content.challenges.map((challenge, index) => (
                                    <motion.li
                                        key={index}
                                        className="text-muted-foreground text-sm flex items-start gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 + (index * 0.05) }}
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        <span>{challenge}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.content.learnings && (
                        <div className="bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="font-semibold mb-4 text-primary">Key Learnings</h3>
                            <ul className="space-y-3">
                                {project.content.learnings.map((learning, index) => (
                                    <motion.li
                                        key={index}
                                        className="text-muted-foreground text-sm flex items-start gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 + (index * 0.05) }}
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        <span>{learning}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProjectDetailsPage