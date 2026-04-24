import Services from "@/app/[locale]/services/services";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "services",
  });

  return {
    title: t("title"),
    description: t("description1"),
  };
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <Services />
    </main>
  );
}
