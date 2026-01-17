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
} from "lucide-react";
import { GallerySection } from "@/components/custom/GalerySection";

export default function AboutPage() {
    return (
        <section className=" py-16 md:py-24">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-75 max-w-3xl rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Hero */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
                {/* Avatar */}
                <div className="relative">
                    <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                        <img
                            src="https://placehold.co/300x300/png"
                            alt="Suvam"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                        <Sparkles />
                    </div>
                </div>

                {/* Intro */}
                <div className="flex-1 text-center lg:text-left">
                    <Badge variant="outline" className="mb-4 gap-1">
                        <CheckCircle2 />
                        Available for work
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Hi, I&apos;m <span className="text-primary">Suvam</span>
                    </h1>

                    <p className="mt-3 text-xl text-muted-foreground">
                        Full-Stack Software Engineer
                    </p>

                    <p className="mt-5 max-w-2xl text-base text-muted-foreground">
                        Backend-focused developer passionate about building scalable systems,
                        clean APIs, and production-ready applications with strong architecture.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                        <Button size="lg" className="gap-2">
                            Let&apos;s Connect
                            <ArrowUpRight />
                        </Button>
                        <Button size="lg" variant="outline">
                            View Projects
                        </Button>
                    </div>
                </div>
            </div>

            <Separator className="my-14" />

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* About */}
                <div className="lg:col-span-2 space-y-10">
                    <div className=""> 
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            About Me
                        </h2>

                        {/* Subtle gradient overlay */}
                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                            <p>
                                I&apos;m{" "}
                                <span className="font-medium text-foreground">
                                    Jyotishankar Patra (Suvam)
                                </span>
                                , a self-taught full-stack developer with a strong
                                focus on backend engineering and system design.
                            </p>
                            <p>
                                I enjoy building real-world applications—everything
                                from authentication systems and APIs to real-time
                                apps and AI-powered platforms.
                            </p>

                            <div className="flex gap-3 rounded-xl border border-border bg-muted/30 p-4">
                                <GraduationCap />
                                <p className="text-sm">
                                    Currently pursuing a{" "}
                                    <span className="font-medium text-foreground">
                                        B.Sc. in Computer Science
                                    </span>{" "}
                                    while continuously learning through hands-on
                                    projects and shipping production-level features.
                                </p>
                            </div>

                            <p>
                                Most of my experience comes from building and
                                deploying full-stack products using modern tools
                                like Next.js, PostgreSQL, Docker, and cloud
                                infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Strengths */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                            Key Strengths
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: Code2,
                                    title: "Full-Stack Development",
                                    desc: "Built multiple production-grade applications",
                                },
                                {
                                    icon: Server,
                                    title: "Backend Focus",
                                    desc: "System design & architecture expertise",
                                },
                                {
                                    icon: Database,
                                    title: "Production Ready",
                                    desc: "Auth, subscriptions & deployments",
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "End-to-End Ownership",
                                    desc: "From idea to deployment",
                                },
                            ].map((item) => (
                                <Card
                                    key={item.title}
                                    className="group border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <CardContent className="p-5 flex gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <item.icon />
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
                            ))}
                        </div>
                    </div>
                </div>

                {/* Side Card */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-8 border-border bg-card shadow-sm">
                        <CardContent className="p-6 text-center">
                            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-border">
                                <img
                                    src="https://placehold.co/200x200/png"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-foreground">
                                @devsuvam
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Full-Stack Developer
                            </p>

                            <div className="space-y-5 text-left">
                                <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                        Focus Areas
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">Backend</Badge>
                                        <Badge variant="secondary">APIs</Badge>
                                        <Badge variant="secondary">System Design</Badge>
                                        <Badge variant="secondary">DevOps</Badge>
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
                                </div>
                            </div>

                            <Button size="lg" className="mt-6 w-full">
                                Let&apos;s Collaborate
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <GallerySection />
        </section>
    );
}
