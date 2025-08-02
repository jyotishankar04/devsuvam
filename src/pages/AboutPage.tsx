"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ArrowRight, Twitter, Instagram, Phone, Play } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ABOUT_PAGE_DATA } from "@/constants/index"
import CareerStory from "@/components/custom/StoryIntro"
import { useState } from "react"

const AboutPage = () => {
    const [showStory, setShowStory] = useState(false)

    const {
        header,
        intro,
        profile,
        details,
        journey,
        callToAction,
        socialLinks
    } = ABOUT_PAGE_DATA

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 px-4 max-w-6xl mx-auto"
        >
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lg:w-2/5 relative"
                >
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-primary/20 group">
                        <img
                            src={profile.imageUrl}
                            alt={profile.altText}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <motion.div
                                initial={{ y: 20 }}
                                whileHover={{ y: 0 }}
                                className="transition-transform duration-300"
                            >
                                <h3 className="text-xl font-bold">{details.personalInfo[0].value}</h3>
                                <p className="text-muted-foreground">Full-Stack Developer</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:w-3/5 space-y-6"
                >
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                        Professional Profile
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {header.title} <span className="text-primary">{header.highlightedTitle}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {intro.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {callToAction.buttons.slice(0, 2).map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant}
                                asChild
                                className="gap-2"
                            >
                                <a href={button.href}>
                                    {button.icon}
                                    {button.text}
                                </a>
                            </Button>
                        ))}
                        <Button
                            onClick={() => setShowStory(true)}
                            className="w-full cursor-pointer  px-4 py-2 my-2"
                        >
                            <Play className="w-5 h-5" />
                            Watch My Journey
                        </Button>
                    </div>

                    <div className="flex gap-3 pt-2">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon === 'Github' ? Github :
                                social.icon === 'Linkedin' ? Linkedin :
                                    social.icon === 'Twitter' ? Twitter :
                                        social.icon === 'Instagram' ? Instagram :
                                            social.icon === 'Mail' ? Mail :
                                                social.icon === 'Phone' ? Phone :
                                                    null;
                            return Icon ? (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                    className="rounded-full"
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                </Button>
                            ) : null;
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Content Sections */}
            <section className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="md:col-span-2 space-y-10">
                    {/* Bio */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-4 h-4 rounded-full bg-primary"></div>
                            <h2 className="text-2xl font-semibold">{journey.title}</h2>
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{journey.description}</p>
                            {journey.milestones && (
                                <ul className="space-y-2 pl-5 list-disc">
                                    {journey.milestones.map((milestone, index) => (
                                        <li key={index}>
                                            <span className="font-medium">{milestone.year}:</span> {milestone.event}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-4 h-4 rounded-full bg-primary"></div>
                            <h2 className="text-2xl font-semibold">Technical Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {details.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 + (index * 0.1) }}
                                    className="border-l-2 border-primary pl-4 py-2 hover:bg-accent/50 transition-colors"
                                >
                                    <h3 className="font-semibold">{skill.name}</h3>
                                    <p className="text-sm text-muted-foreground">{skill.technologies}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <motion.div
                    className="space-y-8"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-3">
                            <h3 className="font-semibold text-primary">Personal Info</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {details.personalInfo.map((info, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center gap-3">
                                        {info.icon}
                                        <div>
                                            <h4 className="font-medium group-hover:text-primary transition-colors">
                                                {info.label}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">{info.value}</p>
                                        </div>
                                    </div>
                                    {index < details.personalInfo.length - 1 && <Separator className="my-3" />}
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-3">
                            <h3 className="font-semibold text-primary">Education</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {details.personalInfo
                                .filter(info => info.label === "Education:")
                                .map((edu, index) => (
                                    <div key={index} className="group">
                                        <h4 className="font-medium group-hover:text-primary transition-colors">
                                            {edu.value}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">University of Odisha</p>
                                        <p className="text-xs text-muted-foreground">2016 - 2020</p>
                                    </div>
                                ))}
                        </CardContent>
                    </Card>
                </motion.div>
            </section>

            {/* Contact CTA */}
            <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20"
            >
                <Badge variant="secondary" className="mb-4">
                    Let's Connect
                </Badge>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Start a Project?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm currently available for freelance work and full-time opportunities.
                    If you have a project that needs creative solutions, let's make it happen!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="gap-2" asChild>
                        <a href={`mailto:${details.personalInfo[2].value}`}>
                            <Mail className="w-4 h-4" />
                            Get In Touch
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <a href={callToAction.buttons[2].href}>
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </motion.section>

            {showStory && <CareerStory onComplete={() => setShowStory(false)} />}

        </motion.div>
    )
}

export default AboutPage