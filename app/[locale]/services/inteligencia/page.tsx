import IA from "@/components/services/IA";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesIA",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function IAPage() {
  return (
    <main>
      <IA />
    </main>
  );
}
