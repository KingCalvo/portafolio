"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const projectsData = [
  {
    slug: "proyecto-01",
    title: "Proyecto 01",
    description:
      "Descripción modular del proyecto. Aquí puedes explicar brevemente qué resuelve, qué tecnología usa y cuál fue el resultado final.",
    image: "/images/projects/project-1.jpg",
    liveDemo: "#",
  },
  {
    slug: "proyecto-02",
    title: "Proyecto 02",
    description:
      "Descripción modular del proyecto. Perfecto para mencionar funcionalidades principales, integración con APIs o enfoque técnico.",
    image: "/images/projects/project-2.jpg",
    liveDemo: "#",
  },
  {
    slug: "proyecto-03",
    title: "Proyecto 03",
    description:
      "Descripción modular del proyecto. Puedes escribir una frase corta y clara para que se vea limpio en la tarjeta.",
    image: "/images/projects/project-3.jpg",
    liveDemo: "#",
  },
  {
    slug: "proyecto-04",
    title: "Proyecto 04",
    description:
      "Descripción modular del proyecto. Ideal para mostrar una app móvil, dashboard o landing page con enfoque profesional.",
    image: "/images/projects/project-4.jpg",
    liveDemo: "#",
  },
  {
    slug: "proyecto-05",
    title: "Proyecto 05",
    description:
      "Descripción modular del proyecto. Cambia este texto por uno real cuando quieras y ajusta la imagen con tu captura final.",
    image: "/images/projects/project-5.jpg",
    liveDemo: "#",
  },
];

const hackathonsData = [
  {
    slug: "hackathon-01",
    title: "Tercer lugar en Hackatec 2024 etapa Nacional.",
    description:
      "Participación en la Cumbre de Desarrollo Tecnológico, Emprendimiento e Innovación (InnovaTECNM 2024) durante el evento HackaTec 2024 Etapa Nacional. Obteniendo el tercer lugar como integrante del equipo DevG.",
    image: "/images/hackathons/hackathon-1.jpg",
    liveDemo: "#",
  },
  {
    slug: "hackathon-02",
    title: "Segundo Lugar en Hackatec 2024 etapa Regional.",
    description:
      "Participación en la Cumbre Nacional de Desarrollo Tecnológico, Emprendimiento e Innovación (InnovaTECNM 2024) durante el evento HackaTec 2024 Etapa Regional. Obteniendo el segundo lugar como integrante del equipo DevG.",
    image: "/images/hackathons/hackathon-2.jpg",
    liveDemo: "#",
  },
  {
    slug: "hackathon-03",
    title: "Participación en el Hackathon Morelos 13a Edición.",
    description: "Ganador del premio a mejor aplicación Auth0.",
    image: "/images/hackathons/hackathon-3.jpg",
    liveDemo: "#",
  },
  {
    slug: "hackathon-04",
    title: "Participación en el Hackathon Morelos 12a Edición.",
    description:
      "Ganador de los premios: Best Use of Google Cloud y Best Domain Name from GoDaddy Registry.",
    image: "/images/hackathons/hackathon-4.jpg",
    liveDemo: "#",
  },
];

const tabs = [
  { id: "projects", label: "Proyectos" },
  { id: "hackathons", label: "Hackathons" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  const currentItems = useMemo(
    () => (activeTab === "projects" ? projectsData : hackathonsData),
    [activeTab],
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
            Portfolio Showcase
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Proyectos
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            Explora mi trayectoria a través de proyectos y hackatones. Cada
            sección representa un hito en mi continuo aprendizaje.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-9 py-4 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {currentItems.map((item, index) => (
                  <motion.article
                    key={`${activeTab}-${item.slug}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.35 }}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center justify-between gap-4">
                          <a
                            href={item.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                          >
                            Live Demo
                          </a>

                          {activeTab === "projects" ? (
                            <Link
                              href={`/project/${item.slug}`}
                              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                            >
                              Details
                            </Link>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="inline-flex cursor-not-allowed items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-400 opacity-70"
                            >
                              Details
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
