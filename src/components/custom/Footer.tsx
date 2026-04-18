import {
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";
import { Link } from "react-router";

const socialLinks = [
    { id: "1", icon: Github, url: "https://github.com/jyotishankar04" },
    { id: "2", icon: Linkedin, url: "https://linkedin.com/in/jyotishankar-patra" },
    { id: "3", icon: Twitter, url: "https://twitter.com/devsuvam1" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background">
            <div className=" py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Left: Profile */}
                    <div className="space-y-3">
                        <p className="font-semibold text-foreground">
                            Suvam
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.url}
                                    target="_blank"
                                    className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                                >
                                    <link.icon />
                                </Link>
                            ))}
                        </div>

                        <p className="pt-4 text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} Suvam. All rights reserved.
                        </p>
                    </div>

                    {/* General */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                            General
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
                            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
                            <li><Link to="/experience" className="hover:text-foreground">Experience</Link></li>
                        </ul>
                    </div>

                    {/* Writing */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                            Writing
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/blogs" className="hover:text-foreground">Blog</Link></li>
                            <li><a href="https://github.com/jyotishankar04" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/jyotishankar-patra" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Now Playing */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                            What I&apos;m listening to
                        </h4>

                        <div className="flex items-center gap-3 rounded-lg border border-border/60 p-3">
                            <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                                <span className="text-xs text-muted-foreground">
                                    🎵
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">
                                    Not playing
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Spotify
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
