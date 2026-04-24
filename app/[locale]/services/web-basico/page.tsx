import WebBasico from "@/components/services/WebBasico";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesWebBasico",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function WebBasicoPage() {
  return (
    <main>
      <WebBasico />
    </main>
  );
}
