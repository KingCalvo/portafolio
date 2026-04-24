import Meta from "@/components/services/Metaverso";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesMeta",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function MetaversoPage() {
  return (
    <main>
      <Meta />
    </main>
  );
}
