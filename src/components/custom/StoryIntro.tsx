/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Rocket, GraduationCap, Zap, Star, Brain, Briefcase, Trophy, ArrowDown } from "lucide-react"
import { getSkillsStats } from "@/constants/skills"
import { allProjects } from "@/constants/index"

const STORY_PHASES = [
    {
        title: "The Beginning",
        subtitle: "First lines of code (2020)",
        description: "Wrote my first 'Hello World' and discovered the magic of programming",
        icon: <Rocket className="w-8 h-8" />,
        duration: 2500
    },
    {
        title: "Learning Phase",
        subtitle: "Building foundations (2020-2021)",
        description: "Mastered core programming concepts and web technologies",
        icon: <GraduationCap className="w-8 h-8" />,
        skills: ["HTML", "CSS", "JavaScript", "Python", "Git"],
        duration: 3000
    },
    {
        title: "First Project",
        subtitle: "Full-stack breakthrough (2022)",
        description: "Built my first complete web application with React and Node.js",
        icon: <Zap className="w-8 h-8" />,
        skills: ["React", "Node.js", "Express", "MongoDB"],
        duration: 3000
    },
    {
        title: "Skill Expansion",
        subtitle: "Modern web stack (2023)",
        description: "Adopted modern frameworks and tools for production apps",
        icon: <Star className="w-8 h-8" />,
        skills: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        duration: 3000
    },
    {
        title: "Project Portfolio",
        subtitle: "Real-world solutions (2023-2024)",
        description: "Developed multiple full-stack applications solving actual problems",
        icon: <Code className="w-8 h-8" />,
        stats: [
            { label: "Projects", value: allProjects.length },
            { label: "Technologies", value: "15+" },
            { label: "Code Lines", value: "50K+" }
        ],
        duration: 3500
    },
    {
        title: "AI Exploration",
        subtitle: "Next frontier (2024)",
        description: "Integrated AI capabilities into modern web applications",
        icon: <Brain className="w-8 h-8" />,
        skills: ["LangChain", "Gemini API", "Vector DBs"],
        duration: 3500
    },
    {
        title: "Professional Growth",
        subtitle: "Industry experience (2025)",
        description: "Joined Ansmake Technology as Full Stack Developer Intern",
        icon: <Briefcase className="w-8 h-8" />,
        skills: ["Teamwork", "Agile", "Code Reviews"],
        duration: 3500
    },
    {
        title: "Current Skills",
        subtitle: "Expertise today",
        description: "Comprehensive full-stack development capabilities",
        icon: <Trophy className="w-8 h-8" />,
        stats: [
            { label: "Total Skills", value: getSkillsStats().totalSkills },
            { label: "Expert Level", value: getSkillsStats().expertSkills },
            { label: "Years Exp", value: "3+" }
        ],
        duration: 4000
    }
]

export default function CareerStory({ onComplete }:any) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [phaseComplete, setPhaseComplete] = useState(false)
    const currentPhase = STORY_PHASES[currentIndex]

    const nextPhase = useCallback(() => {
        if (currentIndex < STORY_PHASES.length - 1) {
            setCurrentIndex(prev => prev + 1)
            setPhaseComplete(false)
        } else {
            onComplete()
        }
    }, [currentIndex, onComplete])

    useEffect(() => {
        if (!phaseComplete) return

        const timer = setTimeout(() => {
            nextPhase()
        }, currentPhase.duration)

        return () => clearTimeout(timer)
    }, [phaseComplete, currentPhase.duration, nextPhase])

    const skipStory = useCallback(() => {
        onComplete()
    }, [onComplete])

    if (!currentPhase) return null

    return (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
            {/* Progress indicator */}
            <div className="absolute top-4 left-0 right-0 px-4">
                <div className="w-full bg-muted rounded-full h-1">
                    <div
                        className="bg-primary h-1 rounded-full transition-all duration-300"
                        style={{ width: `${(currentIndex / (STORY_PHASES.length - 1)) * 100}%` }}
                    />
                </div>
            </div>

            {/* Skip button */}
            <button
                onClick={skipStory}
                className="absolute top-6 right-6 bg-accent/10 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 text-sm hover:bg-accent/20 transition-all"
            >
                Skip
            </button>

            {/* Story content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    onAnimationComplete={() => setPhaseComplete(true)}
                    className="text-center max-w-2xl px-4"
                >
                    {/* Phase icon */}
                    <motion.div
                        initial={{ scale: 0.5, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mx-auto mb-6 w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-primary border border-border"
                    >
                        {currentPhase.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl font-bold mb-2"
                    >
                        {currentPhase.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-muted-foreground mb-6"
                    >
                        {currentPhase.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-muted-foreground mb-8"
                    >
                        {currentPhase.description}
                    </motion.p>

                    {/* Skills */}
                    {currentPhase.skills && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-2 mb-8"
                        >
                            {currentPhase.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-accent/10 rounded-full text-sm border border-border"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    )}

                    {/* Stats */}
                    {currentPhase.stats && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-3 gap-4 mb-8"
                        >
                            {currentPhase.stats.map((stat) => (
                                <div key={stat.label} className="bg-accent/5 rounded-lg p-3 border border-border">
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Final scroll prompt */}
            {currentIndex === STORY_PHASES.length - 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-accent/10 backdrop-blur-sm border border-border rounded-full px-6 py-3 flex items-center gap-3"
                >
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                    <span className="text-sm">Scroll to continue</span>
                </motion.div>
            )}
        </div>
    )
}