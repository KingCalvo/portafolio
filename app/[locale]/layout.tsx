import "../[locale]/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { cookies } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  /* const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!; */
  const baseUrl = "https://tusitio.com";

  return {
    metadataBase: new URL(baseUrl),
    icons: {
      icon: "/images/contenido/avatar_SaludandoM.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
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
  const mode = cookieStore.get("mode")?.value || "light";

  const validLocales = ["es", "en"];
  const currentLocale = validLocales.includes(locale) ? locale : "es";

  const messages = (await import(`../../messages/${currentLocale}.json`))
    .default;

  return (
    <html lang={currentLocale} data-mode={mode} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
