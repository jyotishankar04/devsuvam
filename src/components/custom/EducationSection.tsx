import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";
import { useGetEducation } from "@/lib/api";
import Loader from "@/components/custom/Loader";

const EducationSection = () => {
    const { data: educationData, isLoading } = useGetEducation();

    if (isLoading) {
        return (
            <div className="flex w-full items-center justify-center py-10">
                <Loader />
            </div>
        );
    }

    if (!educationData || educationData.length === 0) {
        return (
            <section className="w-full py-8 md:py-16">
                <div className="mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                        Education
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        My academic background and formal learning journey.
                    </p>
                </div>
                <p className="text-muted-foreground">No education listed.</p>
            </section>
        );
    }

    return (
        <section className="w-full py-8 md:py-16">
            {/* Heading */}
            <div className="mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Education
                </h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                    My academic background and formal learning journey.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {educationData.map((edu, i) => (
                    <div
                        key={i}
                        className="hover:bg-primary/5 transition-colors rounded-lg sm:rounded-xl py-4 sm:p-6 border border-transparent hover:border-primary/10"
                    >
                        <div className={`flex flex-col sm:flex-row items-start gap-4 ${edu.isCurrent ? "text-green-500" : ""}`}>
                            {/* Icon */}
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10">
                                <GraduationCap  />
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-semibold">
                                            {edu.degree}
                                        </h3>

                                        <a
                                            href={edu.institutionUrl || "#"}
                                            target={edu.institutionUrl ? "_blank" : undefined}
                                            rel={edu.institutionUrl ? "noopener noreferrer" : undefined}
                                            className={`text-muted-foreground mt-1 hover:underline hover:text-foreground block text-sm sm:text-base ${!edu.institutionUrl ? "cursor-default hover:no-underline" : ""}`}
                                        >
                                            {edu.institution}
                                        </a>
                                    </div>

                                    <Badge
                                        variant="secondary"
                                        className="text-xs sm:text-sm flex items-center gap-2 self-start sm:self-auto"
                                    >
                                        {edu.isCurrent && (
                                            <div className="w-2 h-2 animate-pulse bg-green-500 rounded-full"></div>
                                        )}
                                        {edu.isCurrent ? "Current" : "Graduated"}
                                    </Badge>
                                </div>

                                {/* Duration and GPA Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mt-3 sm:mt-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar />
                                        <span className="text-xs sm:text-sm">{edu.duration}</span>
                                    </div>

                                    {edu.gpa && (
                                        <div className="text-sm text-muted-foreground flex items-center">
                                            <span className="hidden sm:inline">•</span>
                                            <span className="sm:ml-5 text-xs sm:text-sm">
                                                {edu.gpa.includes('%') ? `Percentage: ${edu.gpa}` : `GPA: ${edu.gpa}`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
