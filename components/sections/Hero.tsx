"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Folder, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fullText = "Desarrollador Mobile & Web";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 90;
    const pauseAfterComplete = 1400;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterComplete);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen bg-white text-slate-900 flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
              Hola, soy <span className="text-slate-900">Enrique</span>
            </h1>

            <div className="mt-6 inline-flex rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
              <span className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {displayText}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Soy Ingeniero en Sistemas Computacionales, soy autodidacta y
              disciplinado; me entusiasma aprender nuevas tecnologías y aplicar
              buenas prácticas para entregar soluciones de calidad. Me destaco
              en trabajo en equipo, comunicación con clientes y resolución
              pragmática de problemas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/7351241139"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
              >
                <FaWhatsapp size={18} />
                Contáctame
              </a>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                <Folder size={18} />
                Ver proyectos
              </Link>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Sígueme
              </p>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/enrique-calvo-garcia-022151168/"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://github.com/KingCalvo"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/hero.jpg"
                  alt="Imagen de presentación"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
