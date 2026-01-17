import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    ExternalLink,
    ArrowUpRight,
} from "lucide-react";

export default function ConnectSection() {
    const socialLinks = [
        {
            name: "LinkedIn",
            username: "suvam-patra",
            url: "https://linkedin.com/in/suvam-patra",
            icon: Linkedin,
        },
        {
            name: "Instagram",
            username: "@devsuvam",
            url: "https://instagram.com/devsuvam",
            icon: Instagram,
        },
        {
            name: "Email",
            username: "hello@suvam.dev",
            url: "mailto:hello@suvam.dev",
            icon: Mail,
        },
    ];

    return (
        <section className="py-20">
            {/* Heading */}
            <div className="mb-14 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Let&apos;s Connect
                </h2>
                <p className="text-lg text-muted-foreground">
                    Always open to new opportunities, collaborations, or just a
                    friendly chat.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primary Card */}
                <Card className="group relative overflow-hidden border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <CardContent className="relative p-6">
                        <div className="flex items-start justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                                    <Twitter  />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        X (Twitter)
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Primary Contact
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                Most Active
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6">
                            I share my coding journey, insights, and quick
                            thoughts here. Best place to reach me for casual
                            conversations.
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">
                                @devsuvam
                            </span>
                            <Button size="sm" variant="outline" className="gap-2">
                                Follow
                                <ArrowUpRight />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Other Platforms */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-5">
                        Other Platforms
                    </h3>

                    <div className="space-y-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group flex items-center justify-between
                                    rounded-xl border border-border/60
                                    bg-background p-4
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:shadow-md
                                    hover:bg-accent/40
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div className="
                                        h-10 w-10 rounded-lg
                                        bg-muted flex items-center justify-center
                                        text-muted-foreground
                                        group-hover:text-primary
                                        transition-colors
                                    ">
                                        <link.icon />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">
                                            {link.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {link.username}
                                        </p>
                                    </div>
                                </div>

                                <ExternalLink  />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
