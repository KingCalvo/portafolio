import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { LuBox, LuCode, LuFileText } from "react-icons/lu";
import { portfolioData } from "@/data/portafolioData";
import ProjectImageCarousel from "@/components/layout/ProjectImageCarousel";
import BackToProjectsButton from "@/components/molecules/BackToProjectsButton";
import { Github } from "lucide-react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type PortfolioProject = (typeof portfolioData.projects)[number];

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolioData.hackathons.find((p) => p.slug === slug);

  if (!project) return notFound();

  const techCount = project.details.technologies.length;
  const featureCount = project.details.features.length;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-16 text-slate-900 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-3">
          <BackToProjectsButton />

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span>Hackathons</span>
            <span>›</span>
            <span className="font-medium text-slate-900">{project.title}</span>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-xl text-base text-justify leading-8 text-slate-600 sm:text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="group rounded-[1.5rem] border border-sky-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="flex justify-center items-center gap-3">
                  <div className="flex h-10 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-105 group-hover:bg-sky-100">
                    <LuCode className="h-5 w-5" />
                  </div>

                  <div className="text-3xl font-semibold leading-none text-slate-900">
                    {techCount}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500 text-center">
                  Total Tecnologías
                </p>
              </div>

              <div className="group rounded-[1.5rem] border border-orange-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="flex justify-center items-center gap-3">
                  <div className="flex h-10 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition duration-300 group-hover:scale-105 group-hover:bg-orange-100">
                    <IoIosApps className="h-5 w-5" />
                  </div>

                  <div className="text-3xl font-semibold leading-none text-slate-900">
                    {featureCount}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500 text-center">
                  Características principales
                </p>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                <LuCode className="h-5 w-5 text-sky-600" />
                <span>Tecnologías usadas</span>
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="group inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md"
                  >
                    <LuBox className="h-4 w-4 text-sky-500 transition duration-300 group-hover:text-sky-700" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.botonDocumentacion && project.documentacionUrl && (
                <a
                  href={project.documentacionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-800 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-800 hover:bg-sky-800 hover:text-white hover:shadow-md"
                >
                  <LuFileText className="h-4 w-4" />
                  Documentación
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full max-h-[calc(100vh-200px)]">
            <ProjectImageCarousel
              title={project.title}
              images={project.images}
            />

            <div className="group rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm flex flex-col flex-1 overflow-hidden">
              <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                <IoIosApps className="h-5 w-5 text-orange-500" />
                <span>Características principales</span>
              </h2>

              <div className="mt-5 space-y-3 overflow-y-auto pr-2 flex-1 min-h-0">
                {project.details.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-justify rounded-2xl px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.12)]" />
                    <p className="text-sm leading-6 text-slate-600">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
