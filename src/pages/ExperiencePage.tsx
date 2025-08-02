"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, ChevronDown, ChevronUp, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { experienceData } from "@/constants/index"

const ExperiencePage = () => {
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 px-4 max-w-4xl mx-auto"
        >
            {/* Page Header */}
            <div className="mb-12 text-center">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold mb-4"
                >
                    My <span className="text-primary">Experience</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                    Professional journey and hands-on experience in full-stack development
                </motion.p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        className="relative pl-8 pb-8 border-l-2 border-primary/20"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2" />

                        {/* Experience Card */}
                        <div className="bg-background rounded-lg border hover:border-primary/30 transition-colors p-6 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold">{exp.title}</h2>
                                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                        <Briefcase className="w-4 h-4 flex-shrink-0" />
                                        {exp.companyUrl ? (
                                            <a
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-primary transition-colors flex items-center gap-1"
                                            >
                                                {exp.company}
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ) : (
                                            <span>{exp.company}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground sm:text-right">
                                    <p>{exp.period}</p>
                                    <p>{exp.location} • {exp.workType}</p>
                                </div>
                            </div>

                            {exp.summary && (
                                <p className="text-muted-foreground mb-4">{exp.summary}</p>
                            )}

                            {/* Skills */}
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.skills.map(skill => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className="text-primary hover:bg-primary/10 transition-colors"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            )}

                            {/* Expandable Responsibilities */}
                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                                        className="flex items-center gap-1 text-muted-foreground hover:text-primary px-0"
                                    >
                                        {expandedExperience === exp.id ? (
                                            <>
                                                <ChevronUp className="w-4 h-4" />
                                                Hide Details
                                            </>
                                        ) : (
                                            <>
                                                <ChevronDown className="w-4 h-4" />
                                                Show Responsibilities ({exp.responsibilities.length})
                                            </>
                                        )}
                                    </Button>

                                    <AnimatePresence>
                                        {expandedExperience === exp.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 mt-4 border-t">
                                                    <h3 className="font-medium mb-3 text-primary">Key Responsibilities</h3>
                                                    <ul className="space-y-3 text-muted-foreground">
                                                        {exp.responsibilities.map((resp, i) => (
                                                            <li key={i} className="flex items-start gap-3">
                                                                <span className="text-primary mt-1">•</span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Download Resume CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 text-center"
            >
                <Button size="lg" asChild>
                    <a href="https://drive.google.com/file/d/1GA9icfWLqSa4TF9L5egiwuGljV6oah9j/view?usp=sharing" download className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Full Resume
                    </a>
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default ExperiencePage