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

  const validLocales = ["es", "en"];

  const currentLocale = validLocales.includes(locale) ? locale : "es";

  const messages = (await import(`../../messages/${currentLocale}.json`))
    .default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const mode = localStorage.getItem("mode");
            if (mode) {
              document.documentElement.setAttribute("data-mode", mode);
            }
          `,
          }}
        />
      </head>
      <body className="bg-background text-slate-900">
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
