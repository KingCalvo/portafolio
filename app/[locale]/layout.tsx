import "../[locale]/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { NextIntlClientProvider } from "next-intl";

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

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="bg-white text-slate-900">
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
