import { getRequestConfig } from "next-intl/server";

const locales = ["es", "en"];

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locales.includes(locale ?? "") ? locale! : "es";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
