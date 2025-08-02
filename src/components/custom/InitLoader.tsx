"use client"

import { useEffect, useRef, useState } from "react"
import AboutSection from "@/components/custom/AboutSection"
import EducationSection from "@/components/custom/EducationSection"
import ExperienceSection from "@/components/custom/ExperienceSection"
import ProjectsSection from "@/components/custom/ProjectsSection"
import SkillsSection from "@/components/custom/SkillsSection"
import { educationData, experienceData } from "@/constants"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Index = () => {
    const [showIntro, setShowIntro] = useState(true)
    const [showImageIntro, setShowImageIntro] = useState(true)
    const [showScrollPrompt, setShowScrollPrompt] = useState(false)
    const experienceRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Initial intro animation sequence
    useEffect(() => {
        const sequence = async () => {
            // First show the zoomed in image
            setShowImageIntro(true)

            // After 1 second, zoom out to normal
            await new Promise(resolve => setTimeout(resolve, 1000))
            setShowImageIntro(false)

            // Then show the scroll prompt
            await new Promise(resolve => setTimeout(resolve, 500))
            setShowScrollPrompt(true)

            // Auto-hide after 3 seconds
            setTimeout(() => {
                setShowScrollPrompt(false)
                setShowIntro(false)
            }, 3000)
        }

        sequence()
    }, [])

    return (
        <div
            ref={containerRef}
            className="w-full md:h-screen md:overflow-auto custom-scrollbar bg-background relative"
        >
            {/* Image intro overlay */}
            <AnimatePresence>
                {showImageIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                duration: 0.8
                            }}
                            className="w-32 h-32 rounded-2xl border-2 border-primary overflow-hidden"
                        >
                            <img
                                src="/dp.png"
                                alt="Profile"
                                className="w-full h-full object-cover object-start"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dark overlay during intro */}
            <AnimatePresence>
                {showIntro && !showImageIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-black z-40 pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* Scroll prompt */}
            <AnimatePresence>
                {showScrollPrompt && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-background border border-primary/30 rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                    >
                        <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
                        <span className="text-sm">Scroll to view more about me</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowScrollPrompt(false)}
                            className="h-6 w-6 p-1 ml-2"
                        >
                            <X className="w-3 h-3" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Highlighted Experience Section */}
            <motion.div
                ref={experienceRef}
                initial={{ opacity: 1 }}
                animate={{
                    borderLeft: showIntro ? '4px solid hsl(var(--primary))' : '4px solid transparent',
                    paddingLeft: showIntro ? '1rem' : '0.75rem',
                    backgroundColor: showIntro ? 'hsl(var(--primary)/0.03)' : 'transparent'
                }}
                transition={{ duration: 0.5 }}
                className="mb-12 transition-all rounded-r-lg pt-10"
            >
                <ExperienceSection experiences={experienceData} />
            </motion.div>

            {/* Rest of sections (initially less visible during intro) */}
            <motion.div
                initial={{ opacity: showIntro ? 0.3 : 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: showIntro ? 0.5 : 0, duration: 0.5 }}
            >
                <EducationSection education={educationData} />
                <ProjectsSection />
                <SkillsSection />
                <AboutSection />
            </motion.div>
        </div>
    )
}

export default Index