import Projects from "@/app/[locale]/projects/projectsHacks";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "projects",
  });

  return {
    title: t("title"),
    description: t("description1"),
  };
}

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      <Projects />
    </main>
  );
}
