"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Folder, Github, Linkedin } from "lucide-react";
import { FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { portfolioData } from "@/data/portafolioData";
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

const fullText = "Desarrollador Mobile & Web";

export default function Hero() {
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
  }, [displayText, isDeleting]);

  const featuredProjects = portfolioData.projects.slice(0, 3);

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
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20 min-h-screen flex flex-col justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-2 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl transition duration-300 hover:-translate-y-1">
              Hola, soy <span className="text-slate-900">Enrique</span>
            </h1>

            <div className="mt-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
              <span className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {displayText}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg text-justify">
              Ingeniero en Sistemas Computacionales apasionado por construir
              soluciones de software prácticas y escalables. Disfruto convertir
              ideas en productos digitales funcionales que combinan eficiencia
              técnica con creatividad, especialmente en desarrollo web y móvil.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/7351241139"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
              >
                <FaWhatsapp size={24} />
                Contáctame
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=enriquecalvo.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#EA4335] px-6 py-3 text-white font-bold shadow-md transition hover:-translate-y-0.5 hover:bg-[#C5221F] hover:shadow-lg"
              >
                <SiGmail size={16} />
                Gmail
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                <Folder size={18} />
                Ver proyectos
              </Link>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="font-semibold uppercase tracking-[0.25em] text-slate-400">
                Sígueme
              </p>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/enrique-calvo-garcia-022151168/"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://github.com/KingCalvo"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[480px]">
              <div className="relative h-[500px] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)] transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <Image
                  src="/images/yo1.jpeg"
                  alt="Imagen de presentación"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
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
              Stack principal
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
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
              About me
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
              Acerca de <span className="animate-pulse">mí</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              Una breve presentación sobre mi perfil y experiencia.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-2xl font-semibold">Enrique Calvo Garcia</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">
                  Ingeniero en Sistemas Computacionales
                </p>

                <p className="mt-6 text-slate-600 text-justify">
                  Soy Ingeniero en Sistemas Computacionales, autodidacta y
                  disciplinado. Me apasiona aprender nuevas tecnologías y crear
                  soluciones de software eficientes y bien estructuradas.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/images/foto.jpg"
                  alt="Foto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h4 className="text-2xl font-semibold">Experiencia</h4>

            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <p className="text-lg font-semibold">
                Mobile Developer (Flutter)
              </p>
              <p className="text-sm text-slate-600">
                Naatik A.I. Solutions · 2025
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Desarrollo de aplicación móvil, gestión de servicios,
                autenticación, dashboards y optimización de rendimiento.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white font-medium shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Ver perfil completo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Proyectos destacados */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Proyectos destacados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              Algunos de los proyectos que he creado
            </p>

            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
              >
                Ver todos los proyectos
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
                        Ver proyecto
                      </a>
                    ) : (
                      <span />
                    )}

                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-slate-900 hover:text-slate-900"
                    >
                      Detalles
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
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
              Mis servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              Soluciones personalizadas para tus necesidades digitales.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
            >
              Ver todos los servicios
            </Link>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* CARD 1 */}
            <article className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Badge */}
              <span className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Destacado
              </span>

              <div className="relative aspect-[16/10] bg-slate-100" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">Sitios web</h3>

                <p className="mt-3 text-sm text-slate-500 leading-7">
                  Creo sitios web modernos y responsivos, desde páginas de
                  destino sencillas hasta sitios completos con todas las
                  funciones que necesitas. Diseño personalizado, optimización
                  SEO y excelente rendimiento.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    Descubre más
                    <IoArrowForward className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10] bg-slate-100" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">
                  Aplicaciones web y PWA
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-7">
                  Desarrollo aplicaciones web personalizadas y Aplicaciones Web
                  Progresivas (PWA): desde paneles de control empresariales
                  hasta plataformas complejas, hasta aplicaciones instalables en
                  cualquier dispositivo, funcionando incluso offline.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    Descubre más
                    <IoArrowForward className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10] bg-slate-100" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">Integraciones con IA</h3>

                <p className="mt-3 text-sm text-slate-500 leading-7">
                  Integro inteligencia artificial en tus proyectos para
                  automatizar procesos, mejorar la experiencia del usuario y
                  crear soluciones innovadoras. Chatbots, análisis de datos,
                  automatización inteligente.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    Descubre más
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
