"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { Folder, Github, Linkedin } from "lucide-react";
import { FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { portfolioData } from "@/data/portafolioData";
import { portfolioDataEN } from "@/data/portafolioDataEN";
import { SiGmail } from "react-icons/si";
import {
  SiJavascript,
  SiDart,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiAstro,
  SiFlutter,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useMemo } from "react";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("home");
  const data = locale === "es" ? portfolioData : portfolioDataEN;
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const fullText = useMemo(() => t("role"), [t]);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 90;
    const pauseAfterComplete = 1400;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterComplete);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  const featuredProjects = data.projects.slice(0, 3);

  const stack = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#111111" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Astro", Icon: SiAstro, color: "#FF5D01" },
    { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Postgres", Icon: SiPostgresql, color: "#336791" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Dart", Icon: SiDart, color: "#0175C2" },
    { name: "SQL", Icon: FaDatabase, color: "#4E73DF" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
  ];

  return (
    <section id="home" className="bg-white text-slate-900 flex flex-col">
      {/* Hero */}
      <div className="mx-auto w-full max-w-6xl px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-2 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl transition duration-300 hover:-translate-y-1 text-center lg:text-left">
              {t("heroGreeting")}{" "}
              <span className="text-slate-900">Enrique</span>
            </h1>

            <div className="mt-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
              <span className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {displayText}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg text-justify">
              {t("heroDescription")}
            </p>

            <div className="mt-8 flex justify-center gap-2 sm:gap-4 lg:justify-start">
              <Link
                href="/projects"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-center sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                <Folder size={18} className="hidden sm:inline" />
                {t("viewProjects")}
              </Link>
              <a
                href="https://wa.me/7351241139"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
              >
                <FaWhatsapp size={24} />
                {t("contact")}
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=enriquecalvo.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#EA4335] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-white font-bold shadow-md transition hover:-translate-y-0.5 hover:bg-[#C5221F] hover:shadow-lg"
              >
                <SiGmail size={16} />
                Gmail
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-center lg:text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-slate-400">
                {t("followMe")}
              </p>

              <div className="mt-4 flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/enrique-calvo-garcia-022151168/"
                  aria-label="LinkedIn"
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-blue-500 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
                >
                  <Linkedin className="text-white" size={18} />
                </a>

                <a
                  href="https://github.com/KingCalvo"
                  aria-label="GitHub"
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                >
                  <Github className="text-white" size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[480px]">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl bg-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.15)] transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <Image
                  src={
                    isHoveringCTA
                      ? "/images/contenido/avatar_PulgarL.png"
                      : "/images/contenido/avatar_SaludandoM.png"
                  }
                  alt="Avatar de Enrique"
                  fill
                  className="object-cover transition duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stack tecnologico */}
        <div className="py-10 overflow-hidden marquee-wrapper">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              {t("stack")}
            </p>

            <div className="mt-9 relative overflow-hidden">
              <div className="flex gap-8 whitespace-nowrap animate-marquee">
                {[...stack, ...stack].map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center min-w-[90px] group/item"
                  >
                    <tech.Icon
                      size={34}
                      style={{ color: tech.color }}
                      className="transition duration-300 group-hover/item:scale-110 mt-2"
                    />

                    <span className="mt-3 text-sm text-slate-600">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fades */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* About + experiencia */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
              {t("aboutTitle1")}{" "}
              <span className="animate-pulse">{t("aboutTitle2")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              {t("aboutSubtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left */}
            <div className="relative h-full">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="absolute -bottom-6 right-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

              <div className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-center lg:text-left">
                    Enrique Calvo García
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-slate-500 text-center lg:text-left">
                    {t("career")}
                  </p>

                  <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-[15px] text-justify">
                    {t("aboutDescription")}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {t("focus")}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {t("focusDesc")}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {t("workStyle")}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {t("workStyleDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex h-full">
              <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
                <div className="flex h-[260px] items-center justify-center">
                  <div className="relative h-56 w-56 overflow-hidden rounded-full bg-slate-100 shadow-lg">
                    <Image
                      src="/images/contenido/foto.jpg"
                      alt="Foto de Enrique Calvo García"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="mt-2 space-y-3 text-center">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-sm text-slate-600 leading-6">
                      {t("aboutCard1")}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-sm text-slate-600 leading-6">
                      {t("aboutCard2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experiencia */}
          <div className="mt-6 space-y-8 pt-8">
            <h4 className="text-2xl font-semibold text-center">
              {t("expTitle")}
            </h4>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-slate-900" />
                <h4 className="text-2xl font-semibold">{t("experience")}</h4>
              </div>

              <div className="mt-6 rounded-2xl bg-mist-50 p-6">
                <p className="text-lg font-semibold text-slate-900">
                  {t("jobTitle")}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {t("company")}
                </p>
                <p className="mt-1 text-sm text-slate-500">{t("time")}</p>
                <p className="mt-1 text-sm text-slate-500">{t("location")}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 text-justify">
                  {t("jobDesc")}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white font-medium shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                {t("viewProfile")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Proyectos destacados */}
      <div className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("projectsTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              {t("projectsSubtitle")}
            </p>

            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
              >
                {t("viewAllProjects")}
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.images?.[0] ?? "/images/placeholder.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 line-clamp-3 text-sm text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6 flex justify-between">
                    {item.botonDemo && item.liveDemo ? (
                      <a
                        href={item.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
                      >
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                        {t("viewProject")}
                      </a>
                    ) : (
                      <span />
                    )}

                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-slate-900 hover:text-slate-900"
                    >
                      {t("details")}
                      <IoArrowForward className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
              {t("servicesTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              {t("servicesSubtitle")}
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
            >
              {t("viewAllServices")}
            </Link>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-y-10 lg:gap-y-16 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <article className="overflow-hidden rounded-[2rem] border border-blue-500/30 ring-2 ring-blue-500/20 bg-white shadow-xl scale-[1.03] z-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl before:absolute before:inset-0 before:rounded-4xl before:bg-blue-500/10 before:blur-xl before:opacity-70 before:-z-10">
              {/* Badge */}
              <span className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                {t("featured")}
              </span>

              {/* Imagen */}
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src="/images/projects/chivalry.jpg"
                  alt="Sitios web"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-center">
                  {t("service1Title")}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-7 text-justify">
                  {t("service1Desc")}
                </p>

                <div className="mt-2 pt-6 flex justify-center">
                  <Link
                    href="/services/web"
                    className="inline-flex items-center gap-2 rounded-full  bg-blue-600 px-5 py-2 text-sm text-white  transition hover:bg-blue-700 shadow-md hover:shadow-lg"
                  >
                    {t("discoverMore")}
                    <IoArrowForward className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group flex flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src="/images/projects/chivalry.jpg"
                  alt="Sitios web"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-center">
                  {t("service2Title")}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-7 text-justify">
                  {t("service2Desc")}
                </p>

                <div className="mt-auto pt-6 flex justify-center">
                  <Link
                    href="/services/appweb"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {t("discoverMore")}
                    <IoArrowForward className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group flex flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src="/images/projects/chivalry.jpg"
                  alt="Sitios web"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-center">
                  {t("service3Title")}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-7 text-justify">
                  {t("service3Desc")}
                </p>

                <div className="mt-auto pt-6 flex justify-center">
                  <Link
                    href="/services/inteligencia"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {t("discoverMore")}
                    <IoArrowForward className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
