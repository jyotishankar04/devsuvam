import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { skillsData } from "@/constants/skills";
import { useState } from "react";

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [showDetails, setShowDetails] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Calculate statistics
    const allSkills = skillsData.flatMap((category) => category.skills);
    const stats = {
        totalSkills: allSkills.length,
        expertSkills: allSkills.filter((skill) => skill.proficiency === "Expert").length,
        advancedSkills: allSkills.filter((skill) => skill.proficiency === "Advanced").length,
        categories: skillsData.length,
    };

    // Filter skills based on active category and search query
    const getFilteredSkills = () => {
        let filtered = activeCategory === "All"
            ? allSkills
            : skillsData.find((cat) => cat.name === activeCategory)?.skills || [];

        if (searchQuery) {
            filtered = filtered.filter(skill =>
                skill.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    };

    const filteredSkills = getFilteredSkills();

    // Group skills by experience level
    const experienceGroups = [
        { years: 3, skills: ["JavaScript (ES6+)", "React.js (incl. React 19)", "Node.js", "Express.js", "REST APIs", "Git", "GitHub"] },
        { years: 2, skills: ["TypeScript", "Python", "SQL", "Tailwind CSS", "PostgreSQL", "MongoDB", "Prisma ORM"] },
        { years: 1, skills: ["Next.js", "Docker", "AWS", "FastAPI", "Redis", "LangChain", "Jest"] },
    ];

    return (
        <div className="container py-12 px-4 mx-auto">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Technical <span className="text-primary">Expertise</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                    My comprehensive skill set spans full-stack development, cloud infrastructure, and performance optimization.
                </p>

                <div className="relative max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search skills..."
                        className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </motion.section>

            {/* Stats Cards */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
                <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{stats.totalSkills}</div>
                        <div className="text-sm font-medium mb-1">Total Skills</div>
                        <div className="text-xs text-muted-foreground">Technologies mastered</div>
                    </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{stats.expertSkills}</div>
                        <div className="text-sm font-medium mb-1">Expert Level</div>
                        <div className="text-xs text-muted-foreground">Deep knowledge</div>
                    </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{stats.advancedSkills}</div>
                        <div className="text-sm font-medium mb-1">Advanced</div>
                        <div className="text-xs text-muted-foreground">Production experience</div>
                    </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{stats.categories}</div>
                        <div className="text-sm font-medium mb-1">Categories</div>
                        <div className="text-xs text-muted-foreground">Skill domains</div>
                    </CardContent>
                </Card>
            </motion.section>

            {/* Skills Navigation */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={activeCategory === "All" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory("All")}
                        >
                            All Skills
                        </Button>
                        {skillsData.map((category) => (
                            <Button
                                key={category.name}
                                variant={activeCategory === category.name ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(category.name)}
                                className="flex items-center gap-2"
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                            </Button>
                        ))}
                    </div>
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
                {filteredSkills.length > 0 ? (
                    <motion.div
                        key={`${activeCategory}-${showDetails}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-3 rounded-lg border hover:border-primary/50 transition-all cursor-default"
                            >
                                <div className="flex items-center gap-2">
                                    <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                                    <span className="font-medium text-sm">{skill.name}</span>
                                </div>
                                {showDetails && (
                                    <div className="flex items-center justify-between mt-2">
                                        {skill.proficiency && (
                                            <Badge variant="secondary" className="text-xs">
                                                {skill.proficiency}
                                            </Badge>
                                        )}
                                        {skill.yearsOfExperience && (
                                            <span className="text-xs text-muted-foreground">
                                                {skill.yearsOfExperience}y exp
                                            </span>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        No skills found matching your search.
                    </div>
                )}
            </motion.section>

            {/* Experience Timeline */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mt-16"
            >
                <h2 className="text-2xl font-bold mb-6">
                    Years of <span className="text-primary">Experience</span>
                </h2>
                <div className="space-y-6">
                    {experienceGroups.map((group) => (
                        <motion.div
                            key={group.years}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary mt-1" />
                                <div className="w-px h-full bg-border" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">{group.years}+ Years</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skillName) => {
                                        const skill = allSkills.find(s => s.name === skillName);
                                        return (
                                            <Badge
                                                key={skillName}
                                                variant="secondary"
                                                className="text-xs flex items-center gap-1"
                                            >
                                                {skill?.icon && <span>{skill.icon}</span>}
                                                {skillName}
                                            </Badge>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Category Overview */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-16"
            >
                <h2 className="text-2xl font-bold mb-6">
                    Skill <span className="text-primary">Categories</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsData.map((category) => (
                        <motion.div
                            key={category.name}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-lg border hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-2xl ${category.color}`}>{category.icon}</span>
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                                <Badge variant="outline" className="ml-auto">
                                    {category.skills.length}
                                </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.slice(0, 5).map((skill) => (
                                    <Badge
                                        key={skill.name}
                                        variant="secondary"
                                        className="text-xs flex items-center gap-1"
                                    >
                                        {skill.icon && <span>{skill.icon}</span>}
                                        {skill.name}
                                    </Badge>
                                ))}
                                {category.skills.length > 5 && (
                                    <Badge variant="outline" className="text-xs">
                                        +{category.skills.length - 5}
                                    </Badge>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default SkillsPage;