"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ABOUT_DATA } from "@/constants/index"
import { ChevronDown } from "lucide-react"

interface AboutSectionProps {
    fullWidth?: boolean
    data?: Partial<typeof ABOUT_DATA>
}

const AboutSection: React.FC<AboutSectionProps> = ({
    fullWidth = false,
    data = {}
}) => {
    const [expanded, setExpanded] = useState(false)

    // Deep merge default data with overrides
    const aboutData = {
        ...ABOUT_DATA,
        ...data,
        personalInfo: data.personalInfo ?? ABOUT_DATA.personalInfo,
        expandedContent: {
            ...ABOUT_DATA.expandedContent,
            ...(data.expandedContent ?? {})
        },
        buttons: {
            ...ABOUT_DATA.buttons,
            ...(data.buttons ?? {}),
            contact: {
                ...ABOUT_DATA.buttons.contact,
                ...(data.buttons?.contact ?? {})
            },
            downloadCV: {
                ...ABOUT_DATA.buttons.downloadCV,
                ...(data.buttons?.downloadCV ?? {})
            },
            readMore: {
                ...ABOUT_DATA.buttons.readMore,
                ...(data.buttons?.readMore ?? {})
            }
        }
    }

    return (
        <section
            id="about"
            className={`py-12 px-4 sm:px-6 ${fullWidth ? 'w-full' : 'max-w-4xl mx-auto'}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">
                        {aboutData.title}{' '}
                        <span className="text-primary">{aboutData.highlightedTitle}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
                        {aboutData.subtitle}
                    </p>
                </div>

                <div className={`grid ${fullWidth ? 'md:grid-cols-2 max-w-6xl mx-auto' : 'md:grid-cols-2'} gap-8 md:gap-12 items-center`}>
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`relative group ${fullWidth ? 'w-full h-96' : 'w-full h-64 md:h-80'} rounded-xl overflow-hidden border border-border`}
                    >
                        <img
                            src={aboutData.profileImage}
                            alt="Profile Photo"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4 md:space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-sm md:text-base"
                        >
                            {aboutData.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {aboutData.personalInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <span className="font-medium w-24 flex-shrink-0">{info.label}</span>
                                    <span className="text-muted-foreground">{info.value}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Expandable Content */}
                        <AnimatePresence mode="wait">
                            {expanded && (
                                <motion.div
                                    key="expanded-content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                        transition: { duration: 0.3, ease: "easeInOut" }
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: { duration: 0.2, ease: "easeIn" }
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 space-y-3">
                                        <h4 className="font-medium text-sm md:text-base">
                                            {aboutData.expandedContent.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            {aboutData.expandedContent.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Button asChild className="flex-1 sm:flex-none">
                                <a 
                                    href={aboutData.buttons.contact.href} 
                                    className="flex items-center gap-1"
                                >
                                    {aboutData.buttons.contact.icon}
                                    {aboutData.buttons.contact.text}
                                </a>
                            </Button>
                            <Button 
                                variant="outline" 
                                asChild 
                                className="flex-1 sm:flex-none"
                            >
                                <a 
                                    href={aboutData.buttons.downloadCV.href} 
                                    download 
                                    className="flex items-center gap-1"
                                >
                                    {aboutData.buttons.downloadCV.icon}
                                    {aboutData.buttons.downloadCV.text}
                                </a>
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex items-center gap-1 w-full sm:w-auto"
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? (
                                    <>
                                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                                        {aboutData.buttons.readMore.expandedText}
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4 transition-transform" />
                                        {aboutData.buttons.readMore.collapsedText}
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutSection