"use client"

import { useRef, useState,  useEffect } from "react"
import AboutSection from "@/components/custom/AboutSection"
import EducationSection from "@/components/custom/EducationSection"
import ExperienceSection from "@/components/custom/ExperienceSection"
import ProjectsSection from "@/components/custom/ProjectsSection"
import SkillsSection from "@/components/custom/SkillsSection"
import { educationData, experienceData } from "@/constants"
import { motion, AnimatePresence } from "framer-motion"
import InitialLoader from "@/components/custom/InitLoader"

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const experienceRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full md:h-screen md:overflow-auto custom-scrollbar bg-background relative"
      role="main"
      aria-label="Portfolio content"
    >
      {/* Initial Loader */}
      <AnimatePresence>
        {isLoading && <InitialLoader  />}

      </AnimatePresence>

      {/* Main Portfolio Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen"
          >
            {/* Highlighted Experience Section */}
            <motion.section
              ref={experienceRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12 pt-8 mx-4"
              aria-label="Professional experience"
            >
              <ExperienceSection experiences={experienceData} />
            </motion.section>

            {/* Other sections with staggered animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-16"
            >
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                aria-label="Education background"
              >
                <EducationSection education={educationData} />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                aria-label="Featured projects"
              >
                <ProjectsSection />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                aria-label="Technical skills"
              >
                <SkillsSection />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                aria-label="About me"
              >
                <AboutSection />
              </motion.section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Index