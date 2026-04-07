"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Folder,
  Briefcase,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { name: "Inicio", icon: Home, href: "/" },
  { name: "Acerca", icon: User, href: "/about" },
  { name: "Proyectos", icon: Folder, href: "/projects" },
  { name: "Servicios", icon: Briefcase, href: "/services" },
];

type Language = "ES" | "EN";

function FlagMX() {
  return (
    <svg
      viewBox="0 0 640 480"
      className="h-4 w-6 overflow-hidden rounded-sm"
      aria-hidden="true"
    >
      <rect width="213.3" height="480" fill="#006847" />
      <rect x="213.3" width="213.4" height="480" fill="#fff" />
      <rect x="426.6" width="213.4" height="480" fill="#ce1126" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg
      viewBox="0 0 640 480"
      className="h-4 w-6 overflow-hidden rounded-sm"
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={i * 68.6} width="640" height="34.3" fill="#b22234" />
      ))}
      <rect width="280" height="260" fill="#3c3b6e" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("ES");
  const [themeIcon, setThemeIcon] = useState<"sun" | "moon">("sun");

  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const languageLabel =
    language === "ES"
      ? { text: "🇲🇽", longText: "Español", flag: <FlagMX /> }
      : { text: "🇺🇸", longText: "English", flag: <FlagUS /> };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <nav className="w-full px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          {/* Left brand */}
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-slate-950 text-sm font-semibold text-white shadow-sm">
              EC
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                Enrique Calvo Garcia
              </p>
              <p className="truncate text-xs text-slate-500 sm:text-sm">
                Web developer
              </p>
            </div>
          </Link>

          {/* Desktop center menu */}
          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-2 px-2 py-2">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      active
                        ? "bg-slate-950 text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100/80 backdrop-blur-sm hover:text-slate-900"
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop right controls */}
          <div className="hidden items-center gap-2 lg:flex">
            <div ref={languageRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((prev) => !prev)}
                className="inline-flex h-11 min-w-[140px] items-center justify-between gap-3 border border-slate-200/70 shadow-sm rounded-full bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {languageLabel.flag}
                  <span>
                    {languageLabel.text} {languageLabel.longText}
                  </span>
                </span>
                <ChevronDown size={16} className="text-slate-500" />
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-full border border-slate-200/70 shadow-sm bg-white rounded-2xl">
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("EN");
                      setLanguageOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    <FlagUS />
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("ES");
                      setLanguageOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    <FlagMX />
                    Español
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setThemeIcon((prev) => (prev === "sun" ? "moon" : "sun"))
              }
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-200/70 shadow-sm rounded-full bg-white text-slate-900 transition hover:bg-slate-50 cursor-pointer"
              aria-label="Cambiar icono de tema"
            >
              {themeIcon === "sun" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed left-0 right-0 top-[72px] z-40 px-4 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2"
        }`}
      >
        <div className="border border-slate-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.15)]">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-200 pt-4">
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"))
                  }
                  className="inline-flex h-12 items-center justify-between gap-3 border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    {language === "ES" ? <FlagMX /> : <FlagUS />}
                    <span>{language === "ES" ? "Español" : "English"}</span>
                  </span>
                  <ChevronDown size={16} className="text-slate-500" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setThemeIcon((prev) => (prev === "sun" ? "moon" : "sun"))
                  }
                  className="inline-flex h-12 items-center justify-center gap-2 border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  aria-label="Cambiar icono de tema"
                >
                  {themeIcon === "sun" ? <Sun size={18} /> : <Moon size={18} />}
                  <span>{themeIcon === "sun" ? "Sol" : "Luna"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
