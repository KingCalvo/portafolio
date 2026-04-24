import Diseño from "@/components/services/Design";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesDesign",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function IAPage() {
  return (
    <main>
      <Diseño />
    </main>
  );
}
