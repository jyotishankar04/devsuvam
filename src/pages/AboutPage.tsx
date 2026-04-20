import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle2,
    Code2,
    Server,
    Database,
    GraduationCap,
    ArrowUpRight,
    Sparkles,
    Mail,
    Phone,
    Linkedin,
    Github,
    ExternalLink,
} from "lucide-react";
import { GallerySection } from "@/components/custom/GalerySection";
import { Link } from "react-router";

const strengthsIconMap: Record<string, React.ElementType> = {
    Code2,
    Server,
    Database,
    CheckCircle2,
};

const about = {
    name: "Jyotishankar Patra",
    title: "Full Stack Software Developer (Backend-Focused)",
    bio: "I'm a full stack software developer with more focus on backend development. I build scalable and reliable backend systems and also have skills in frontend development. I'm good at working with databases, creating APIs, and using modern tools to make efficient software. My experience comes from building full-stack products using modern tools like Next.js, PostgreSQL, Docker, and cloud infrastructure.",
    email: "jyotipatra.subham@gmail.com",
    phone: "+91-9861250893",
    linkedin: "https://linkedin.com/in/jyotishankar-patra",
    github: "https://github.com/jyotishankar04",
    avatarUrl: "https://res.cloudinary.com/djby1yfko/image/upload/v1768664109/IMG_20251208_165303878_1_bg5nr2.jpg",
    strengths: [
        { icon: "Code2", title: "Full-Stack Development", desc: "Built multiple production-grade applications" },
        { icon: "Server", title: "Backend Architecture", desc: "System design & microservices expertise" },
        { icon: "Database", title: "Database Management", desc: "PostgreSQL, MongoDB, Redis, Prisma ORM" },
        { icon: "CheckCircle2", title: "DevOps & Deployment", desc: "Docker, AWS, CI/CD, Cloudflare" },
    ],
};

export default function AboutPage() {
    const strengths = about.strengths || [];

    return (
        <section className="py-16 md:py-24 relative">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-75 max-w-3xl rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Hero */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
                {/* Avatar */}
                <div className="relative">
                    <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                        <img loading="lazy"
                            src={about.avatarUrl}
                            alt={about.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute text-primary-foreground -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                        <Sparkles  />
                    </div>
                </div>

                {/* Intro */}
                <div className="flex-1 text-center lg:text-left">
                    <Badge variant="outline" className="mb-4 gap-1">
                        <CheckCircle2 />
                        Available for opportunities
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Hi, I&apos;m <span className="text-primary">{about.name}</span>
                    </h1>

                    <p className="mt-3 text-xl text-muted-foreground">
                        {about.title}
                    </p>

                    <p className="mt-5 max-w-2xl text-base text-muted-foreground">
                        {about.bio}
                    </p>

                    {/* Contact Links */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                        {about.email && (
                            <a
                                href={`mailto:${about.email}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail size={16} />
                                {about.email}
                            </a>
                        )}
                        {about.phone && (
                            <a
                                href={`tel:${about.phone}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone size={16} />
                                {about.phone}
                            </a>
                        )}
                        {about.linkedin && (
                            <a
                                href={about.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                            </a>
                        )}
                        {about.github && (
                            <a
                                href={about.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github size={16} />
                                GitHub
                            </a>
                        )}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                        {about.email && (
                            <Button size="lg" className="gap-2" asChild>
                                <a href={`mailto:${about.email}`}>
                                    Let&apos;s Connect
                                    <ArrowUpRight />
                                </a>
                            </Button>
                        )}
                        <Button size="lg" variant="outline" asChild>
                            <Link to="/projects">
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <Separator className="my-14" />

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* About */}
                <div className="lg:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            About Me
                        </h2>

                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                            <p>
                                {about.bio}
                            </p>

                            <div className="flex gap-3 rounded-xl border border-border bg-muted/30 p-4">
                                <GraduationCap />
                                <div>
                                    <p className="text-sm font-medium text-foreground mb-1">Current Education</p>
                                    <p className="text-sm">
                                        Pursuing <span className="font-medium">Master of Computer Applications (MCA)</span> at
                                        Kalinga Institute of Industrial Technology, Bhubaneswar (2025 – Present)
                                    </p>
                                    <p className="text-sm mt-2">
                                        Previously completed <span className="font-medium">B.Sc. in Computer Science</span> at
                                        Fakir Mohan Autonomous College, Balasore (CGPA: 7.02/10.00)
                                    </p>
                                </div>
                            </div>

                            <p>
                                My experience comes from building full-stack products using modern tools like Next.js,
                                PostgreSQL, Docker, and cloud infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Strengths */}
                    {strengths.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-6">
                                Technical Expertise
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {strengths.map((item) => {
                                    const IconComponent = strengthsIconMap[item.icon] || CheckCircle2;
                                    return (
                                        <Card
                                            key={item.title}
                                            className="group border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardContent className="p-5 flex gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <IconComponent />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-foreground">
                                                        {item.title}
                                                    </h4>
                                                    <p className="mt-1 text-sm text-muted-foreground">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Side Card */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="sticky top-8 border-border bg-card shadow-sm">
                        <CardContent className="p-6 text-center">
                            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-border">
                                <img loading="lazy"
                                    src="https://res.cloudinary.com/djby1yfko/image/upload/v1768664054/20260112_134703-IMG_STYLE_sit7ue.jpg"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {about.github && (
                                <a href={about.github} className="text-lg font-semibold text-foreground">
                                    {about.github.replace("https://github.com/", "@")}
                                </a>
                            )}
                            <p className="text-sm text-muted-foreground mb-6">
                                {about.title}
                            </p>

                            <div className="space-y-5 text-left">
                                <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                        Technical Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">JavaScript/TypeScript</Badge>
                                        <Badge variant="secondary">Node.js</Badge>
                                        <Badge variant="secondary">Next.js</Badge>
                                        <Badge variant="secondary">PostgreSQL</Badge>
                                        <Badge variant="secondary">Docker</Badge>
                                        <Badge variant="secondary">AWS</Badge>
                                        <Badge variant="secondary">LangChain</Badge>
                                        <Badge variant="secondary">FastAPI</Badge>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                        Current Status
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-sm text-muted-foreground">
                                            Open to opportunities
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        MCA Student at KIIT, Bhubaneswar
                                    </p>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                        Featured Projects
                                    </h4>
                                    <div className="space-y-3">
                                        <a
                                            href="https://github.com/jyotishankar04/quickBrainAI-frontend"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                                        >
                                            <span>QuickBrain AI</span>
                                            <ExternalLink size={14} />
                                        </a>
                                        <a
                                            href="https://github.com/jyotishankar04/Quizzify"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                                        >
                                            <span>Quizzify Platform</span>
                                            <ExternalLink size={14} />
                                        </a>
                                        <a
                                            href="https://github.com/jyotishankar04/justwatches"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                                        >
                                            <span>Watch E-commerce</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {about.email && (
                                <Button size="lg" className="mt-6 w-full" asChild>
                                    <a href={`mailto:${about.email}`}>Let&apos;s Collaborate</a>
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    {/* Certification Card */}
                    <Card className="border-border bg-card/60">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Certification</h4>
                                    <p className="text-sm text-muted-foreground">100xDevs Cohort 2.0</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Full Stack Development certification by Harkirat Singh (2024)
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <GallerySection />
        </section>
    );
}
