import App from "@/components/services/AppWeb";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "servicesAppWeb",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AppWebPage() {
  return (
    <main>
      <App />
    </main>
  );
}
