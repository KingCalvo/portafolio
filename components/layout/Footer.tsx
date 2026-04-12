"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "@/public/images/contenido/yo1.jpeg";

export default function Footer() {
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
              <p className="text-xs text-gray-400 sm:text-sm">Web developer</p>
            </div>
          </div>

          <p className="text-sm leading-6 text-gray-300 text-justify">
            Creo sitios web, aplicaciones y soluciones interactivas que combinan
            diseño, rendimiento y estrategia para convertir tráfico e ideas en
            resultados concretos.
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

            <a
              href="https://www.instagram.com/enriquecalvog/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="transition duration-300 hover:text-pink-500 hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="w-40 text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Enlaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="w-40 text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Información
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  Acerca de
                </Link>
              </li>
              <li>
                <a
                  href="/services#contacto"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="mailto:enriquecalvo.dev@gmail.com"
                  className="hover:text-white"
                >
                  Correo electrónico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700" />

      <div className="py-6 text-center text-sm text-gray-400">
        © Enrique Calvo Garcia 2026. Todos los derechos reservados.
      </div>
    </footer>
  );
}
