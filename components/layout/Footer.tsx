"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "@/public/images/contenido/avatar_SaludandoM.png";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer
      className="bg-[#0f172a] text-white pt-12"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_1fr_1fr] items-start">
        <div className="max-w-sm">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src={logo}
              alt="Enrique Calvo Garcia"
              className="h-16 w-16 object-cover rounded-xl shadow-md"
              priority
            />

            <div className="leading-tight">
              <p className="text-sm font-semibold text-white sm:text-base">
                Enrique Calvo Garcia
              </p>
              <p className="text-xs text-gray-400 sm:text-sm">{t("role")}</p>
            </div>
          </div>

          <p className="text-sm leading-6 text-gray-300 text-justify">
            {t("description")}
          </p>

          <div className="mt-5 flex gap-4 text-xl">
            <a
              href="https://github.com/KingCalvo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="transition duration-300 hover:text-white hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/enrique-calvo-garcia-022151168/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="transition duration-300 hover:text-blue-500 hover:scale-110" />
            </a>

            {/*             <a
              href="https://www.instagram.com/enriquecalvog/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="transition duration-300 hover:text-pink-500 hover:scale-110" />
            </a> */}
          </div>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="w-40 text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t("linksTitle")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="w-40 text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t("infoTitle")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services#contacto" className="hover:text-white">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:enriquecalvo.dev@gmail.com"
                  className="hover:text-white"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700" />

      <div className="py-6 text-center text-sm text-gray-400">
        {t("copyright")}
      </div>
    </footer>
  );
}
