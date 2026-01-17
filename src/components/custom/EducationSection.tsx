import { educationData } from "@/constants";
import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";


const EducationSection = () => {
    return (
        <section className="w-full py-16">
            {/* Heading */}
            <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Education
                </h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                    My academic background and formal learning journey.
                </p>
            </div>

            {
                educationData.map((edu, i) => (
                    <div key={i} className="hover:bg-primary/5 transition-colors rounded-xl p-6" >
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <GraduationCap />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">
                                    {edu.degree}
                                </h3>

                                <a href={edu.institutionUrl} target="_blank" className="text-muted-foreground mt-1 hover:underline hover:text-foreground">
                                    {edu.institution}
                                </a>

                                <div className="flex flow-row items-center gap-5">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                                        <Calendar />
                                        <span>{edu.year}</span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mt-4 max-w-xl">
                                        {edu.gpa ? `GPA: ${edu.gpa}` : ""}
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="text-md flex items-center gap-4">
                                {edu.description == "Currently Pursuing" && <div className="w-2 h-2 animate-pulse bg-green-500  rounded-full"></div>}
                                {edu.description}
                            </Badge>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default EducationSection;
