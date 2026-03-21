"use client";

import { Home, User, Folder, Briefcase } from "lucide-react";

const navItems = [
  { name: "Inicio", icon: Home, href: "#home" },
  { name: "Acerca", icon: User, href: "#about" },
  { name: "Proyectos", icon: Folder, href: "#projects" },
  { name: "Servicios", icon: Briefcase, href: "#services" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transiton"
              >
                <item.icon size={18} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
