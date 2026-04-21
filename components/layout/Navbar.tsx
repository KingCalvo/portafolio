"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
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
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import logo from "@/public/images/contenido/yo1.jpeg";

const navItems = [
  { key: "home", icon: Home, href: "/" },
  { key: "about", icon: User, href: "/about" },
  { key: "projects", icon: Folder, href: "/projects" },
  { key: "services", icon: Briefcase, href: "/services" },
];

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
  const locale = useLocale();
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const desktopLanguageRef = useRef<HTMLDivElement | null>(null);
  const mobileLanguageRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/(es|en)/, "") || "/";
  const changeLanguage = (lang: "es" | "en") => {
    router.replace(pathname, { locale: lang });
  };

  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const saved = localStorage.getItem("mode");
    if (saved === "dark" || saved === "light") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.style.colorScheme = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      document.cookie = `mode=${newMode}; path=/; max-age=31536000`;
      return newMode;
    });
  };

  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

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
        desktopLanguageRef.current &&
        !desktopLanguageRef.current.contains(event.target as Node) &&
        mobileLanguageRef.current &&
        !mobileLanguageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return cleanPath === "/";

    return cleanPath === href || cleanPath.startsWith(`${href}/`);
  };

  const languageLabel =
    locale === "es"
      ? { text: "🇲🇽", longText: "Español", flag: <FlagMX /> }
      : { text: "🇺🇸", longText: "English", flag: <FlagUS /> };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-700 bg-[#0f172a] shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <nav className="w-full px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          {/* Left brand */}
          <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3">
            <Image
              src={logo}
              alt="Enrique Calvo Garcia"
              className="h-16 w-16 object-cover rounded-xl shadow-md"
              priority
            />

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold text-white sm:text-base">
                Enrique Calvo Garcia
              </p>
              <p className="truncate text-xs text-slate-400 sm:text-sm">
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
                    key={item.key}
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      active
                        ? "bg-primary-600 text-white shadow-md"
                        : "text-white bg-primary-500/20 hover:bg-primary-500/10 backdrop-blur-sm"
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{t(item.key)}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop right controls */}
          <div className="hidden items-center gap-2 lg:flex">
            <div ref={desktopLanguageRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((prev) => !prev)}
                onMouseDown={(e) => e.stopPropagation()}
                className="inline-flex h-11 min-w-[140px] items-center justify-between gap-3 border border-slate-700 shadow-sm rounded-full bg-slate-800 px-4 text-sm font-medium text-white transition hover:bg-slate-700 cursor-pointer"
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
                <div
                  className="absolute right-0 mt-2 w-full border border-slate-700 shadow-sm bg-slate-800 rounded-2xl"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => {
                      changeLanguage("en");
                      setLanguageOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer rounded-2xl"
                  >
                    <FlagUS />
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      changeLanguage("es");
                      setLanguageOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer rounded-2xl"
                  >
                    <FlagMX />
                    Español
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleMode}
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-700 shadow-sm rounded-full bg-slate-800 text-white transition hover:bg-slate-700 cursor-pointer"
              aria-label="Cambiar icono de tema"
            >
              {mounted ? (
                mode === "light" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <div className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((prev) => {
                const newState = !prev;

                if (!newState) setLanguageOpen(false);

                return newState;
              });
            }}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-slate-700 bg-slate-800 text-white transition hover:bg-slate-700 lg:hidden"
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
        <div className="border border-slate-700 bg-[#0f172a] p-4 shadow-[0_18px_45px_rgba(15,23,42,0.15)]">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{t(item.key)}</span>
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-700 pt-4">
              <div className="flex flex-col gap-3">
                <div ref={mobileLanguageRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setLanguageOpen((prev) => !prev)}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="inline-flex h-12 w-full items-center justify-between gap-3 border border-slate-700 bg-slate-800 px-4 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    {locale === "es" ? <FlagMX /> : <FlagUS />}
                    <span>{locale === "es" ? "Español" : "English"}</span>
                    <ChevronDown size={16} className="text-slate-500" />
                  </button>

                  {languageOpen && (
                    <div className="mt-2 w-full overflow-hidden border border-slate-700 rounded-xl shadow-sm bg-slate-800">
                      <button
                        onClick={() => {
                          changeLanguage("es");
                          setLanguageOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        <FlagMX />
                        Español
                      </button>

                      <button
                        onClick={() => {
                          changeLanguage("en");
                          setLanguageOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        <FlagUS />
                        English
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={toggleMode}
                  className="inline-flex h-12 items-center justify-center gap-2 border border-slate-700 bg-slate-800 px-4 text-sm font-medium text-white transition hover:bg-slate-700"
                  aria-label="Cambiar icono de tema"
                >
                  {mounted ? (
                    mode === "light" ? (
                      <Sun size={18} />
                    ) : (
                      <Moon size={18} />
                    )
                  ) : (
                    <div className="w-[18px] h-[18px]" />
                  )}
                  <span>{mode === "light" ? "Claro" : "Oscuro"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
