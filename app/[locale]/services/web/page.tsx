import Web from "@/components/services/Web";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesWeb",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function WebPage() {
  return (
    <main>
      <Web />
    </main>
  );
}
