import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        company: "Ansmake Technology",
        role: "Full Stack Developer Intern",
        period: "Jun 2025 - Aug 2025",
        works: [
            "Developed and optimized RESTful APIs using FASTAPI, improving response times by 30%",
            "Implemented frontend components with Next.js, Tanstack Query, and Redix UI, enhancing user experience",
            "Collaborated with cross-functional teams to deliver SaaS product features on schedule",
        ],
        skills: [
            "FastAPI",
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Tailwind CSS",
            "Language: Python",
            "Version Control: Git",
            "Database: PostgreSQL",
        ],
    }
];

export default function ExperienceSection() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="space-y-2 mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
                <p className="text-muted-foreground">A timeline of my professional journey</p>
            </div>

            <div className="relative">
                {/* Vertical timeline line */}

                <div className="space-y-8 md:space-y-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative flex items-start">

                            <div className="w-full">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground mt-1">{exp.role}</p>
                                </div>

                                <Card className="border-none bg-background  shadow-none">
                                    <CardContent className="py-2">
                                        <div className="space-y-4">
                                            {/* Responsibilities */}
                                            <div>
                                                <h4 className="font-medium mb-3 text-sm text-muted-foreground">RESPONSIBILITIES</h4>
                                                <ul className="space-y-2.5">
                                                    {exp.works.map((work, idx) => (
                                                        <li key={idx} className="text-foreground/90 text-sm flex">
                                                            <span className="mr-3 text-muted-foreground">•</span>
                                                            {work}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills */}
                                            <div>
                                                <h4 className="font-medium mb-3 text-sm text-muted-foreground">TECHNOLOGIES</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill, idx) => (
                                                        <Badge
                                                            key={idx}
                                                            variant="secondary"
                                                            className="font-normal text-xs bg-secondary/50"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}