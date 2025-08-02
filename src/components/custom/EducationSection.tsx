import type { EducationItem } from "@/types";
import { GraduationCap, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface EducationSectionProps {
    education: EducationItem[];
    title?: string;
}

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const EducationSection = ({ education, title = "Education" }: EducationSectionProps) => {
    return (
        <motion.div
        id="education"
            className="mb-12 mx-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl font-semibold text-primary mb-6"
                variants={itemVariants}
            >
                {title}
            </motion.h2>

            <motion.div className="space-y-6">
                {education.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="group relative pl-6"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        {/* Static base border */}
                        <motion.div
                            className="absolute left-0 top-0 w-0.5 h-full bg-muted rounded-full"
                            transition={{ duration: 0.2 }}
                        />
                        <motion.div
                            className="absolute left-0 top-0 w-0.5 bg-muted rounded-full"
                            initial={{ height: 0 }} // Start with 0 height
                            variants={{
                                hover: {
                                    height: "100%", // Animate to full height
                                    backgroundColor: "var(--primary)",
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        {/* Animated border on hover */}
                        <motion.div
                            className="absolute left-0 top-0 w-0.5 bg-primary rounded-full"
                            initial={{ scaleY: 0, transformOrigin: "top" }}
                            variants={{
                                hover: {
                                    scaleY: 1,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        />

                        {/* Content */}
                        <div className="flex justify-between items-start p-2">
                            <div>
                                <h3 className="font-medium text-lg text-foreground">
                                    {edu.degree}
                                </h3>
                                <div className="flex items-center mt-1 text-sm text-primary/70">
                                    <GraduationCap className="w-4 h-4 mr-1.5" />
                                    {edu.institution} 
                                    {edu.institutionUrl && (
                                        <a
                                            href={edu.institutionUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1.5"
                                        >
                                            <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-foreground transition-colors" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {edu.year}
                            </span>
                        </div>

                        {edu.gpa && (
                            <div className="mt-2 text-sm text-muted-foreground">
                                GPA: {edu.gpa}
                            </div>
                        )}

                        {edu.description && (
                            <p className="mt-2 text-sm text-muted-foreground">
                                {edu.description}
                            </p>
                        )}

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="mt-3">
                                <div className="text-xs text-muted-foreground mb-1">
                                    Courses:
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {edu.courses.slice(0, 4).join(", ")}
                                    {edu.courses.length > 4 &&
                                        ` +${edu.courses.length - 4} more`}
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default EducationSection;