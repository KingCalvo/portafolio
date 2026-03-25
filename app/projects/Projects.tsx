"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portafolioData";

type PortfolioCardItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  botonDemo?: boolean;
};

const tabs = [
  { id: "projects", label: "Proyectos" },
  { id: "hackathons", label: "Hackathons" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "hackathons">(
    "projects",
  );

  const currentItems: PortfolioCardItem[] = (
    activeTab === "projects" ? portfolioData.projects : portfolioData.hackathons
  ).map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: item.images?.[0] ?? "/images/placeholder.jpg",
    liveDemo: item.liveDemo,
    botonDemo: item.botonDemo,
  }));

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
                  onClick={() =>
                    setActiveTab(tab.id as "projects" | "hackathons")
                  }
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
                        className="object-cover"
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
                          {item.botonDemo && item.liveDemo ? (
                            <a
                              href={item.liveDemo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                            >
                              Live Demo
                            </a>
                          ) : (
                            <span />
                          )}

                          {activeTab === "projects" ? (
                            <Link
                              href={`/projects/${item.slug}`}
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
