import "../[locale]/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { NextIntlClientProvider } from "next-intl";
import DisableBfcache from "@/components/layout/DisableBfcache";
import { cookies } from "next/headers";
import ConsoleLegend from "@/components/molecules/ConsoleLegend";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const baseUrl = "https://enriquecalvo.site";

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: t("title"),
      template: "%s | Enrique Calvo",
    },

    description: t("description"),

    icons: {
      icon: "/images/contenido/avatar_SaludandoM.png",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: "Enrique Calvo",
      images: [
        {
          url: `${baseUrl}/og?locale=${locale}`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/og?locale=${locale}`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const cookieStore = await cookies();
  const mode = cookieStore.get("mode")?.value === "dark" ? "dark" : "light";

  const validLocales = ["es", "en"];
  const currentLocale = validLocales.includes(locale) ? locale : "es";

  const messages = (await import(`../../messages/${currentLocale}.json`))
    .default;

  return (
    <html
      lang={currentLocale}
      data-mode={mode}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <ConsoleLegend />
          <DisableBfcache />
          <Navbar initialMode={mode} />
          {children}
          <Chatbot />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
