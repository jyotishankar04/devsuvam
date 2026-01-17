import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        company: "Optimus AI Lab",
        role: "Mid-level Frontend Engineer",
        period: "Nov 2024 – Jan 2025",
        works: [
            "Collaborated with cross-functional teams to develop and deploy web applications using Next.js, React, and TypeScript.",
            "Implemented responsive layouts, optimizing user experience, and ensuring accessibility.",
            "Participated in code reviews and provided constructive feedback to others, fostering a collaborative environment.",
        ],
        skills: [
            "Next.js", "React", "TypeScript", "Tailwind CSS", "Git",
            "GitHub", "Docker", "Nginx", "Prisma", "Shadcn UI",
            "Redux Toolkit", "React Query", "WebSockets", "Redis", "Kafka"
        ],
        icon: "",
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