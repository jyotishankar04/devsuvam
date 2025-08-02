"use client"

import { motion } from "framer-motion"
import { skillsData, getSkillsStats, type Skill } from "@/constants/skills"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "../ui/button"

const ProficiencyBadge = ({ proficiency }: { proficiency?: string }) => {
    if (!proficiency) return null

    return (
        <Badge variant="secondary" className="text-xs">
            {proficiency}
        </Badge>
    )
}

const SkillBadge = ({ skill, index, showDetails = false }: { skill: Skill; index: number; showDetails?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            whileHover={{ scale: 1.02 }}
            className="p-3 rounded-lg border hover:border-primary/50 transition-all cursor-default"
        >
            <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium text-sm">{skill.name}</span>
            </div>
            {showDetails && (
                <div className="flex items-center justify-between mt-2">
                    <ProficiencyBadge proficiency={skill.proficiency} />
                    {skill.yearsOfExperience && (
                        <span className="text-xs text-muted-foreground">
                            {skill.yearsOfExperience}y exp
                        </span>
                    )}
                </div>
            )}
        </motion.div>
    )
}

const CategoryFilter = ({
    categories,
    activeCategory,
    onCategoryChange,
}: {
    categories: typeof skillsData
    activeCategory: string
    onCategoryChange: (category: string) => void
}) => {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            <Button
                variant={activeCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange("All")}
            >
                All Skills
            </Button>
            {categories.map((category) => (
                <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCategoryChange(category.name)}
                    className="flex items-center gap-2"
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </Button>
            ))}
        </div>
    )
}

const StatsCard = ({ title, value, description }: { title: string; value: number; description: string }) => {
    return (
        <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                <div className="text-sm font-medium mb-1">{title}</div>
                <div className="text-xs text-muted-foreground">{description}</div>
            </CardContent>
        </Card>
    )
}

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All")
    const [showDetails, setShowDetails] = useState(true)
    const stats = getSkillsStats()

    const getFilteredSkills = () => {
        if (activeCategory === "All") {
            return skillsData.flatMap((category) => category.skills)
        }
        const category = skillsData.find((cat) => cat.name === activeCategory)
        return category ? category.skills : []
    }

    const filteredSkills = getFilteredSkills()

    return (
        <section id="skills" className="py-12 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Comprehensive skills spanning full-stack development, cloud infrastructure, and performance optimization.
                    </p>
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <StatsCard title="Total Skills" value={stats.totalSkills} description="Technologies mastered" />
                    <StatsCard title="Expert" value={stats.expertSkills} description="Advanced proficiency" />
                    <StatsCard title="Advanced" value={stats.advancedSkills} description="Strong competency" />
                    <StatsCard title="Categories" value={stats.categories} description="Skill domains" />
                </motion.div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <CategoryFilter
                        categories={skillsData}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center gap-1"
                    >
                        {showDetails ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Hide Details
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                Show Details
                            </>
                        )}
                    </Button>
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={`${activeCategory}-${showDetails}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                    {filteredSkills.map((skill, index) => (
                        <SkillBadge
                            key={`${skill.name}-${activeCategory}-${showDetails}`}
                            skill={skill}
                            index={index}
                            showDetails={showDetails}
                        />
                    ))}
                </motion.div>

                {/* Category Overview */}
                {activeCategory === "All" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12"
                    >
                        <h3 className="text-xl font-semibold  text-start">
                            Skill Categories
                        </h3>
                        <p className="text-muted-foreground mb-6">Explore the skill categories and their associated skills.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skillsData.map((category) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xl">{category.icon}</span>
                                            <h4 className="font-medium">{category.name}</h4>
                                            <Badge variant="outline" className="ml-auto">
                                                {category.skills.length}
                                            </Badge>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {category.skills.slice(0, 5).map((skill) => (
                                                <Badge
                                                    key={skill.name}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {skill.name}
                                                </Badge>
                                            ))}
                                            {category.skills.length > 5 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{category.skills.length - 5}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}

export default SkillsSection