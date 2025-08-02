"use client"

import type { ExperienceItem } from "@/types"
import { ExternalLink, ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ExperienceSectionProps {
    experiences: ExperienceItem[]
    title?: string
}

const ExperienceSection = ({ experiences, title = "Experience" }: ExperienceSectionProps) => {
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedExperience(expandedExperience === id ? null : id)
    }

    return (
        <section className="max-w-3xl mx-auto" id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold text-primary mb-12 group"
                whileHover={{
                   
                    transition: { duration: 0.3 }
                }}
            >
                {title}
              
            </motion.h2>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-border pb-8 last:border-b-0 group"
                        whileHover={{
                            borderColor: "hsl(var(--primary)/0.3)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <motion.div
                                className="flex flex-wrap items-baseline gap-2 mb-2"
                                whileHover={{ x: 2 }}
                            >
                                <motion.h3
                                    className="text-xl font-medium"
                                    whileHover={{
                                        color: "var(--primary)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {exp.title}
                                </motion.h3>
                                <span className="text-muted-foreground">at</span>
                                {exp.companyUrl ? (
                                    <motion.a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground font-medium inline-flex items-center gap-1 hover:text-primary transition-colors"
                                    >
                                        {exp.company}
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                ) : (
                                    <span className="text-foreground font-medium">{exp.company}</span>
                                )}
                            </motion.div>

                            <div className="text-sm text-muted-foreground space-y-1">
                                <div>{exp.period}</div>
                                <div>
                                    {exp.location} • {exp.workType}
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        {exp.summary && (
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {exp.summary}
                            </p>
                        )}

                        {/* Responsibilities */}
                        <div className="mb-6">
                            <ul className="space-y-2 text-muted-foreground">
                                {exp.responsibilities.slice(0, expandedExperience === exp.id ? undefined : 3).map((resp, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-primary mt-1.5 text-xs">•</span>
                                        <span className="leading-relaxed">{resp}</span>
                                    </li>
                                ))}
                            </ul>

                            {exp.responsibilities.length > 3 && (
                                <button
                                    onClick={() => toggleExpand(exp.id)}
                                    className="mt-3 text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                                >
                                    {expandedExperience === exp.id ? (
                                        <>
                                            Show less
                                            <ChevronDown className="w-4 h-4 rotate-180" />
                                        </>
                                    ) : (
                                        <>
                                            Show {exp.responsibilities.length - 3} more
                                            <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="text-primary hover:bg-primary/10 transition-colors"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection