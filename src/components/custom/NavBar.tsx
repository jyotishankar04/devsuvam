"use client";

import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
    {
      name: "Experience",
      path: "/experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Projects", path: "/projects", icon: <Code className="w-4 h-4" /> },
    { name: "Contact", path: "/about", icon: <Mail className="w-4 h-4" /> },
    { name: "Chat With Me", path: "/chat", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full p-4">
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
