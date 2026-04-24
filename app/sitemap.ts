import { MetadataRoute } from "next";
import { portfolioData } from "@/data/PortafolioData";
import { portfolioDataEN } from "@/data/PortafolioDataEN";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enriquecalvo.site";

  const locales = ["es", "en"];

  const routes = [
    "",
    "/about",
    "/faq",
    "/projects",
    "/services",
    "/services/appweb",
    "/services/design",
    "/services/inteligencia",
    "/services/metaverso",
    "/services/web",
    "/services/web-basico",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Selecciona dataset según idioma
    const data = locale === "es" ? portfolioData : portfolioDataEN;

    // Rutas estáticas
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    });

    // Proyectos dinámicos
    data.projects.forEach((project) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });

    // Hackathons dinámicos
    data.hackathons.forEach((hackathon) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/hackathons/${hackathon.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  return sitemap;
}
