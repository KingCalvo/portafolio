import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuBox, LuCode, LuSparkles } from "react-icons/lu";
import { portfolioData } from "@/data/portafolioData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type PortfolioProject = {
  slug: string;
  title: string;
  image: string;
  liveDemo: string;
  buttons?: boolean;
  details: {
    description: string;
    technologies: string[];
    features: string[];
  };
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolioData.projects.find(
    (p: PortfolioProject) => p.slug === slug,
  ) as PortfolioProject | undefined;

  if (!project) return notFound();

  const techCount = project.details.technologies.length;
  const featureCount = project.details.features.length;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-md"
          >
            ← Back
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span>Projects</span>
            <span>›</span>
            <span className="font-medium text-slate-900">{project.title}</span>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.details.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-105 group-hover:bg-sky-100">
                    <LuCode className="h-5 w-5" />
                  </div>

                  <div className="text-3xl font-semibold leading-none text-slate-900">
                    {techCount}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500">Total Tecnologías</p>
              </div>

              <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition duration-300 group-hover:scale-105 group-hover:bg-orange-100">
                    <LuSparkles className="h-5 w-5" />
                  </div>

                  <div className="text-3xl font-semibold leading-none text-slate-900">
                    {featureCount}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500">
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
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
                  >
                    <LuBox className="h-4 w-4 text-slate-500 transition duration-300 group-hover:text-slate-700" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.buttons && (
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                >
                  Demo en directo
                </a>

                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 hover:shadow-md"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                <LuSparkles className="h-5 w-5 text-orange-500" />
                <span>Características principales</span>
              </h2>

              <div className="mt-5 space-y-3">
                {project.details.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm"
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
