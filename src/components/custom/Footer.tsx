import {
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="border-t sticky border-border/60 bg-background">
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
                            <Link
                                to="https://github.com/devsuvam"
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github  />
                            </Link>
                            <Link
                                to="https://linkedin.com/in/suvam-patra"
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin  />
                            </Link>
                            <Link
                                to="https://twitter.com/devsuvam"
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter  />
                            </Link>
                        </div>

                        <p className="pt-4 text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Suvam. All rights reserved.
                        </p>
                    </div>

                    {/* General */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                            General
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
                            <li><Link to="/creating" className="hover:text-foreground">Creating</Link></li>
                            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
                            <li><Link to="/resume" className="hover:text-foreground">Resume</Link></li>
                        </ul>
                    </div>

                    {/* Writing */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                            Writing
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
                            <li><Link to="/snippets" className="hover:text-foreground">Snippets</Link></li>
                            <li><Link to="/guestbook" className="hover:text-foreground">Guestbook</Link></li>
                            <li><Link to="/uses" className="hover:text-foreground">Uses</Link></li>
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
