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
            username: "jyotishankar-patra",
            url: "https://linkedin.com/in/jyotishankar-patra",
            icon: Linkedin,
        },
        {
            name: "Instagram",
            username: "@dev.suvam",
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
                        username="devsuvam1"
                        bio="Backend Full-Stack Developer
I talk about DSA, advanced systems & AI
Sharing tech updates, building in public"
                        displayName="SUVAM"
                        followersCount={100}
                        followingCount={100}
                        profileImage="https://pbs.twimg.com/profile_images/2009337254926589952/VboDuiOZ_400x400.jpg"
                        bannerImage="https://pbs.twimg.com/profile_banners/1881591018971332609/1767947464/1500x500"
                        isVerified={true}
                        isPrivate={false}
                        twitterUrl="https://twitter.com/devsuvam1"
                        joinedDate="Joined January 2025"
                        location="Odisha, India"
                        website="suvam.qwikish.com"
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
