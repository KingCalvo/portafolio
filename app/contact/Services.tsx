"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-white text-slate-900 flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl transition duration-300 hover:-translate-y-1">
              Hola, soy <span className="text-slate-900">Enrique</span>
            </h1>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="font-semibold uppercase tracking-[0.25em] text-slate-400">
                Sígueme
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[480px]">
              <div className="relative h-[500px] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.15)] transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <Image
                  src="/images/yo1.jpeg"
                  alt="Imagen de presentación"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
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
