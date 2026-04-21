"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portafolioData";
import { portfolioDataEN } from "@/data/portafolioDataEN";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

type BaseItem = {
  slug: string;
  title: string;
  description: string;
  images: string[];
};

type ProjectItem = BaseItem & {
  liveDemo?: string;
  botonDemo?: boolean;
};

type HackathonItem = BaseItem & {};

type PortfolioCardItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  botonDemo?: boolean;
};

export default function Projects() {
  const locale = useLocale();
  const t = useTranslations("projects");
  const searchParams = useSearchParams();
  const data = locale === "es" ? portfolioData : portfolioDataEN;
  const tabs = [
    { id: "projects", label: t("tabProjects") },
    { id: "hackathons", label: t("tabHackathons") },
  ];

  const initialTab =
    (searchParams.get("tab") as "projects" | "hackathons") || "projects";

  const [activeTab, setActiveTab] = useState<"projects" | "hackathons">(
    initialTab,
  );

  const items: (ProjectItem | HackathonItem)[] =
    activeTab === "projects" ? data.projects : data.hackathons;
  const currentItems: PortfolioCardItem[] = items.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: item.images?.[0] ?? "/images/placeholder.jpg",
    liveDemo: "liveDemo" in item ? item.liveDemo : undefined,
    botonDemo: "botonDemo" in item ? item.botonDemo : false,
  }));
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground shadow-sm">
            {t("badge")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("title1")}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {t("description1")}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id as "projects" | "hackathons")
                  }
                  className={`cursor-pointer rounded-full px-9 py-4 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary-800 text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
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
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center justify-between gap-4">
                          {item.botonDemo && item.liveDemo ? (
                            <a
                              href={item.liveDemo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-900"
                            >
                              <FaExternalLinkAlt className="h-3.5 w-3.5" />
                              {t("viewProject")}
                            </a>
                          ) : (
                            <span />
                          )}

                          <Link
                            href={{
                              pathname: `/${activeTab}/${item.slug}`,
                              query: { tab: activeTab },
                            }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary-500 px-4 py-2 text-sm font-medium bg-primary-500 text-white hover:bg-primary-600"
                          >
                            {t("details")}
                            <IoArrowForward className="h-4 w-4" />
                          </Link>
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
