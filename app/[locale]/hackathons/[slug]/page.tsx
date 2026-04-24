import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { LuBox, LuCode, LuFileText, LuExternalLink } from "react-icons/lu";
import { portfolioData } from "@/data/portafolioData";
import { portfolioDataEN } from "@/data/portafolioDataEN";
import ProjectImageCarousel from "@/components/layout/ProjectImageCarousel";
import BackToProjectsButton from "@/components/molecules/BackToProjectsButton";
import { FaFacebook } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;

  const data = locale === "es" ? portfolioData : portfolioDataEN;

  const hackathon = data.hackathons.find((h) => h.slug === slug);

  if (!hackathon) {
    return {
      title: "Not found",
    };
  }

  return {
    title: `Portfolio - ${hackathon.title}`,
    description: hackathon.description.slice(0, 150),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;

  const data = locale === "es" ? portfolioData : portfolioDataEN;

  const project = data.hackathons.find((p) => p.slug === slug);

  if (!project) return notFound();

  const t = await getTranslations({
    locale,
    namespace: "hackathonDetail",
  });

  if (!project) return notFound();

  return (
    <section className="min-h-screen bg-background py-16 text-foreground pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="w-full sm:w-auto">
            <BackToProjectsButton />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{t("breadcrumb")}</span>
            <span>›</span>
            <span className="font-medium text-foreground">{project.title}</span>
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
          <div className="space-y-8">
            <div>
              <h1 className="text-xl font-semibold tracking-tight lg:text-3xl">
                {project.title}
              </h1>

              <p className="mt-2 max-w-xl text-xs text-justify leading-8 text-muted-foreground lg:text-sm whitespace-pre-line">
                {project.fecha}
              </p>

              <p className="max-w-xl text-sm text-justify leading-8 text-muted-foreground lg:text-base whitespace-pre-line">
                {project.organizador}
              </p>

              <p className="mt-5 max-w-xl text-sm text-justify leading-8 text-muted-foreground0 lg:text-base whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="group rounded-[2rem] border border-blue-200 bg-card p-6 shadow-sm flex flex-col flex-1">
              <h2 className="flex items-center justify-center gap-3 text-xl lg:text-3xl font-semibold tracking-tight text-center">
                <LuExternalLink className="text-blue-600 w-5 h-5" />
                <span>{t("officialPosts")}</span>
              </h2>

              <div className="mt-5 space-y-3 overflow-y-auto pr-2 flex-1 min-h-0">
                {project.details.features.map((post, index) => (
                  <a
                    key={index}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-sm"
                  >
                    <FaFacebook className="text-blue-600 w-4 h-4" />

                    <div className="flex items-center justify-between w-full">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground group-hover:text-blue-700 transition">
                        {post.cuenta}
                      </p>

                      <span className="text-xs text-center lg:text-sm font-medium text-blue-600">
                        {t("viewPost")}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <ProjectImageCarousel
              title={project.title}
              images={project.images}
            />

            <div>
              <h2 className="flex items-center justify-center gap-3 text-xl lg:text-3xl font-semibold tracking-tight">
                <LuCode className="h-5 w-5 text-sky-600" />
                <span>{t("technologies")}</span>
              </h2>

              <div className="mt-5 flex flex-wrap gap-3 justify-center">
                {project.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="group inline-flex items-center gap-2 rounded-full border border-sky-200 bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-muted hover:shadow-md"
                  >
                    <LuBox className="h-4 w-4 text-sky-500 transition duration-300 group-hover:text-sky-700" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 justify-center">
              {project.botonDocumentacion && project.documentacionUrl && (
                <a
                  href={project.documentacionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-500 bg-primary-700 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-primary-600 hover:text-white hover:shadow-md"
                >
                  <LuFileText className="h-4 w-4" />
                  {t("documentation")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
