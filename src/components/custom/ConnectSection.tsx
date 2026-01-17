import {
    Linkedin,
    Instagram,
    Mail,
    ExternalLink,
} from "lucide-react";
import TweetCard from "../kokonutui/tweet-card";

export default function ConnectSection() {
    const socialLinks = [
        {
            name: "LinkedIn",
            username: "suvam-patra",
            url: "https://linkedin.com/in/jyotishankar-patra",
            icon: Linkedin,
        },
        {
            name: "Instagram",
            username: "@devsuvam",
            url: "https://instagram.com/dev.suvam",
            icon: Instagram,
        },
        {
            name: "Email",
            username: "jyotipatra.subham@gmail.com",
            url: "mailto:jyotipatra.subham@gmail.com",
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

                <div>
                    <TweetCard
                        authorHandle="@devsuvam1"
                        authorName="Jyotishankar Patra"
                        authorImage="https://res.cloudinary.com/djby1yfko/image/upload/v1768664060/Gemini_Generated_Image_bx5n91bx5n91bx5n_ctyhf1.png?w=800&h=600&fit=crop"
                        content={[
                            "I'm looking for a role as a Full Stack Web Developer. If you think I'm a good fit, let's connect! 🚀",
                            "#FullStack #WebDevelopment #JavaScript #React #NodeJS",
                        ]}
                        timestamp="1 day ago"
                        isVerified
                        reply={{
                            authorHandle: "@dev",
                            authorName: "Dev",
                            authorImage: "https://res.cloudinary.com/djby1yfko/image/upload/v1768664109/IMG_20251208_165303878_1_bg5nr2.jpg",
                            content: " @devsuvam1 Thanks for reaching out! Let's have a chat about your project.",
                            isVerified: true,
                            timestamp: "1 day ago",
                        }}
                    />
                </div>

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

                                <ExternalLink />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
