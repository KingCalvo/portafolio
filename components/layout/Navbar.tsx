"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder, Briefcase } from "lucide-react";

const navItems = [
  { name: "Inicio", icon: Home, href: "/" },
  { name: "Acerca", icon: User, href: "/about" },
  { name: "Proyectos", icon: Folder, href: "/projects" },
  { name: "Servicios", icon: Briefcase, href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
      <div className="rounded-full border border-slate-200 bg-white/95 px-2 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-md">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-slate-950 text-white shadow-md"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
