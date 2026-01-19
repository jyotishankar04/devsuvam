import { Code, Server, Database, Cloud, Brain } from "lucide-react";
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiGraphql,
    SiSocketdotio,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiPrisma,
    SiDocker,
    SiAwsamplify,
    SiNginx,
    SiGit,
    SiGithub,
    SiLinux,
    SiPostman,
    SiLangchain,
} from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


type Skill = {
    name: string;
    icon: React.ElementType;
};

type Stack = {
    title: string;
    icon: React.ElementType;
    skills: Skill[];
};

const stacks: Stack[] = [
    {
        title: "Languages",
        icon: Code,
        skills: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Python", icon: SiPython },
            { name: "C++", icon: SiCplusplus },
        ],
    },
    {
        title: "Frontend",
        icon: Code,
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Redux", icon: SiRedux },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "FastAPI", icon: SiFastapi },
            { name: "GraphQL", icon: SiGraphql },
            { name: "Socket.io", icon: SiSocketdotio },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: SiRedis },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: Cloud,
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "AWS", icon: SiAwsamplify },
            { name: "Nginx", icon: SiNginx },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Linux", icon: SiLinux },
            { name: "Postman", icon: SiPostman },
        ],
    },
    {
        title: "AI Engineering",
        icon: Brain,
        skills: [{ name: "LangChain", icon: SiLangchain }],
    },
];

export default function SkillsSection() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-foreground mb-10">
                Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stacks.map((stack) => (
                    <div key={stack.title}>
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-4 text-foreground">
                            <stack.icon className="h-4 w-4" />
                            <h3 className="text-sm uppercase tracking-wide">
                                {stack.title}
                            </h3>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap group gap-4">

                            {stack.skills.map((skill) => (
                                <Tooltip >
                                    <TooltipTrigger >
                                        <div
                                            key={skill.name}
                                            title={skill.name}
                                            className="
                                        group h-12 w-12 flex items-center justify-center
                                        rounded-lg border border-border
                                        bg-muted/40
                                        transition
                                        hover:bg-muted
                                        hover:scale-105
                                        
                                    "
                                        >
                                            <skill.icon
                                                className="
                                            h-6 w-6 text-muted-foreground
                                            transition-colors
                                            group-hover:text-primary
                                        "
                                            />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
