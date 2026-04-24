import Faq from "@/app/[locale]/faq/faq";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "faq",
  });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function FaqPage() {
  return (
    <main className="pt-24">
      <Faq />
    </main>
  );
}
