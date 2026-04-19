import Hero from "@/app/[locale]/home/home";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "home",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <main className="pt-10">
      <Hero />
    </main>
  );
}
