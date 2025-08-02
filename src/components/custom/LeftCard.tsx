import { MapPin, Sun, Mail,  Linkedin, Github, ChevronDown, Home, User, Briefcase, BookOpen, Code, Twitter, Instagram, Play } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "../theme-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import {  Link } from "react-router-dom"
import CareerStory from "./StoryIntro"
import { useState } from "react"

const LeftCard = () => {
    const { setTheme, theme } = useTheme()
    const [showStory, setShowStory] = useState(false)

    const navLinks = [
        { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
        { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
        { name: "Experience", path: "/experience", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Projects", path: "/projects", icon: <Code className="w-4 h-4" /> },
        { name: "Skills", path: "/skills", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Contact", path: "/about", icon: <Mail className="w-4 h-4" /> },
    ]

    return (
        <div className="md:min-h-screen  bg-background p-10 px-4">
            <div className="flex flex-col items-start">
                {/* Profile Photo */}
                <div className="flex mb-6">
                    <div className="w-32 h-32 rounded-2xl border-2 border-primary overflow-hidden">
                        <img
                            src="/dp.png"
                            alt="Profile"
                            className="w-full h-full object-cover object-start"
                        />
                    </div>
                </div>

                {/* Name and Title */}
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Jyotishankar Patra
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Full-Stack Developer
                    </p>
                </div>

                {/* Location */}
                <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Balasore, Odisha, India</span>
                </div>
                <Button
                    onClick={() => setShowStory(true)}
                    className="w-full cursor-pointer  px-4 py-2 my-2"
                >
                    <Play className="w-5 h-5" />
                    Watch My Journey
                </Button>
                {/* Navigation Dropdown */}
                <div className="w-full mb-8 hidden md:block" >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full justify-between px-4 py-2"
                            >
                                <span className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>Navigate</span>
                                </span>
                                <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[var(--radix-dropdown-menu-trigger-width)]"
                            align="start"
                        >
                            {navLinks.map((link) => (
                                <DropdownMenuItem key={link.name} asChild>
                                    <Link
                                        to={link.path}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mb-8">
                    {[
                      
                    {name: "GitHub", href: "https://github.com/jyotishankar04", icon: Github },
                    {name: "LinkedIn", href: "https://linkedin.com/in/jyotishankar-patra", icon: Linkedin},
                    {name: "Twitter", href: "https://twitter.com/devsuvam1", icon: Twitter },
                    {name: "Instagram", href: "https://instagram.com/dev.suvam", icon: Instagram },
                    {name: "Email", href: "mailto:jyotipatra.subham@gmail.com", icon: Mail },
                    ].map(({ icon: Icon, href }) => (
                        <Button
                            key={href}
                            size="icon"
                            variant="ghost"
                            className="text-primary hover:bg-accent"
                            asChild
                        >
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <Icon className="w-5 h-5" />
                            </a>
                        </Button>
                    ))}
                </div>

                {/* About Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        About
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Full-Stack Developer with a passion for building web applications.
                        Currently seeking opportunities to further develop my skills in a
                        professional setting.
                    </p>
                </div>

                {/* Theme Selector */}
                <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
                    <Select
                        defaultValue={theme === "light" ? "light" : "dark"}
                        onValueChange={(e) => {
                            setTheme(e as "light" | "dark")
                        }}
                    >
                        <SelectTrigger className="w-24 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                            <SelectItem
                                value="light"
                                className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            >
                                Light
                            </SelectItem>
                            <SelectItem
                                value="dark"
                                className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            >
                                Dark
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {showStory && <CareerStory onComplete={() => setShowStory(false)} />}

        </div>
    )
}

export default LeftCard