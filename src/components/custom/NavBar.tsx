import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../theme-toggle";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Blogs", path: "/blogs", icon: <BookOpen size={20} /> },
  { name: "About", path: "/about", icon: <User size={20} /> },
  { name: "Experience", path: "/experience", icon: <Briefcase size={20} /> },
  { name: "Projects", path: "/projects", icon: <Code size={20} /> },
  { name: "Chat", path: "/chat", icon: <Mail size={20} /> },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="w-full p-4 sticky top-0  z-50 bg-background/80 backdrop-blur ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo/Profile */}
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-full overflow-hidden">
              <img loading="lazy"
                src="/dp.png"
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-center object-cover border-2 border-primary/20"
              />
            </div>
            <span className="text-lg font-semibold hidden sm:block">
              Jyotishankar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Button
                  variant="ghost"
                  size="sm"
                  key={index}
                  asChild
                  className={cn(
                    "text-muted-foreground hover:text-foreground",
                    isActive && "bg-accent text-foreground font-medium"
                  )}
                >
                  <Link to={link.path}>{link.name}</Link>
                </Button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-transparent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-70 bg-background border-l shadow-lg md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
            <div className="flex flex-col h-full p-6">
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-8 p-3 rounded-lg bg-muted/30">
                <img loading="lazy"
                  src="/dp.png"
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">Jyotishankar Patra</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                        isActive && "bg-accent text-foreground font-medium"
                      )}
                    >
                      <div className="text-primary">{link.icon}</div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Let&apos;s connect
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:jyotipatra.subham@gmail.com"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    jyotipatra.subham@gmail.com
                  </a>
                  <a
                    href="tel:+919861250893"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Briefcase size={16} />
                    +91-9861250893
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Close Menu
              </Button>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
