"use client";

import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../theme-toggle";

const NavBar = () => {

  const navLinks = [
    { name: "Home", path: "/", icon: <Home  /> },
    { name: "Blogs", path: "/blogs", icon: <Home  /> },
    { name: "About", path: "/about", icon: <User  /> },
    {
      name: "Experience",
      path: "/experience",
      icon: <Briefcase/>,
    },
    { name: "Projects", path: "/projects", icon: <Code /> },
    { name: "Chat With Me", path: "/chat", icon: <Mail /> },
  ];

  return (
    <div className="w-full p-4 sticky top-0 z-40 bg-background/80 backdrop-blur ">
      <div className="flex justify-between items-center">
        <div>
          <div className="rouned-full overflow-hidden">
            <img src="/dp.png" alt="Logo" className="w-12 h-12 rounded-full object-center object-cover" />
          </div>
        </div>
        <div className="flex gap-2">
          {navLinks.map((link, index) => (
            <Button variant={"link"} key={index} asChild>
              <a href={link.path}>
                {link.name}
              </a>
            </Button>
          ))}
          <ThemeToggle/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
