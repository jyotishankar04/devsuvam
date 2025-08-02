"use client"

import { useState } from "react"
import { Home, User, Briefcase, BookOpen, Code, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Experience", path: "/experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Projects", path: "/projects", icon: <Code className="w-4 h-4" /> },
    { name: "Skills", path: "/skills", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Contact", path: "/about", icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-bold text-primary text-lg">JP</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" size="sm" key={link.name}>
              <a href={link.path} className="flex items-center gap-1">
                {link.icon}
                <span>{link.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <span>Menu</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a href={link.path} className="flex items-center gap-2 cursor-pointer">
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
