"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border-t py-8 mt-4"
        >
            <div className=" mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Branding */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center  mb-2">
                            <span className="text-muted-foreground">DEV</span>
                            <span className="text-muted-foreground">.</span>
                            <span className="font-bold text-primary text-lg">SUVAM</span>
                        </Link>
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            Full-Stack Developer with a passion for creating user-friendly web applications.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        <Button asChild variant="ghost" size="icon">
                            <Link to="mailto:jyotishankar.patra@gmail.com" aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link to="https://github.com/jyotishankarpatra" target="_blank" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link to="https://linkedin.com/in/jyotishankarpatra" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link to="https://jyotishankarpatra.vercel.app" target="_blank" aria-label="Portfolio">
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground"
                >
                    <p>© {new Date().getFullYear()} Jyotishankar Patra. All rights reserved.</p>
                    <p className="mt-1">Built with Next.js, Tailwind CSS, and Framer Motion</p>
                    <p className="mt-1">
                        Inspiration from{" www.amerfathullah.com "}
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer