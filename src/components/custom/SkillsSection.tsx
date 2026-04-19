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
} from "@/components/ui/tooltip";
import { useGetSkills } from "@/lib/api";
import Loader from "@/components/custom/Loader";
import { StaggerList, StaggerItem } from "@/components/motion/Reveal";

const iconMap: Record<string, React.ElementType> = {
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
};

const getCategoryIcon = (name: string): React.ElementType => {
    const lower = name.toLowerCase();
    if (lower.includes("backend") || lower.includes("server")) return Server;
    if (lower.includes("database") || lower.includes("orm")) return Database;
    if (lower.includes("devops") || lower.includes("cloud") || lower.includes("tools")) return Cloud;
    if (lower.includes("ai") || lower.includes("machine")) return Brain;
    return Code;
};

export default function SkillsSection() {
    const { data: stacks, isLoading } = useGetSkills();

    if (isLoading) {
        return (
            <div className="flex w-full items-center justify-center py-10">
                <Loader />
            </div>
        );
    }

    if (!stacks || stacks.length === 0) {
        return (
            <section className="py-16">
                <h2 className="text-2xl font-semibold text-foreground mb-10">
                    Stack
                </h2>
                <p className="text-muted-foreground">No skills listed yet.</p>
            </section>
        );
    }

    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-foreground mb-10">
                Stack
            </h2>

            <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stacks.map((stack) => {
                    const CategoryIcon = getCategoryIcon(stack.name);

                    return (
                        <StaggerItem key={stack.id}>
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-4 text-foreground">
                                <CategoryIcon className="h-4 w-4" />
                                <h3 className="text-sm uppercase tracking-wide">
                                    {stack.name}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap group gap-4">
                                {stack.skills.map((skill) => {
                                    const SkillIcon = iconMap[skill.icon];

                                    return (
                                        <Tooltip key={skill.id}>
                                            <TooltipTrigger>
                                                <div
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
                                                    {SkillIcon ? (
                                                        <SkillIcon
                                                            className="
                                            h-6 w-6 text-muted-foreground
                                            transition-colors
                                            group-hover:text-primary
                                        "
                                                        />
                                                    ) : (
                                                        <span className="text-xs text-muted-foreground group-hover:text-primary">
                                                            {skill.name.slice(0, 2)}
                                                        </span>
                                                    )}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </StaggerItem>
                    );
                })}
            </StaggerList>
        </section>
    );
}
