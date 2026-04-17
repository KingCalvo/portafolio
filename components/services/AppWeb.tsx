import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  Rocket,
  TrendingUp,
  Settings,
  Globe,
} from "lucide-react";
import Image from "next/image";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-200/90">
      {children}
    </p>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <article className="flex flex-col items-center text-center rounded-4xl border border-[#dee4ff] bg-white/85 p-6 shadow-[0_18px_60px_rgba(76,29,149,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)]">
      <div className="flex items-center justify-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-100 to-violet-200 text-violet-800 shadow-sm">
          <Icon size={22} />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-base leading-7 text-slate-700">{text}</p>
    </article>
  );
}

export default function ServicioAppWeb() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#22002c] via-[#6b005f] to-[#8a0a5d] text-white">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-24 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0)_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0)_22%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_20%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Aplicaciones web y PWA
            <br />a la medida de tu negocio
          </h1>

          <a
            href="/services#contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#2b0041] px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#220031]"
          >
            Contactame, ¡es gratis!
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="relative bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-95 h-80 rounded-[2rem] overflow-hidden border border-fuchsia-100 shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-white">
              <Image
                src="/images/servicios/web-basica-escalable.png"
                alt="Sitio escalable"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Software hecho para ti
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-slate-600 sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Más que una página
            </p>
            <p className="mt-8 max-w-2xl leading-8 text-slate-700 text-justify text-[17px] pr-6 lg:pr-0">
              Cuando un sitio web no es suficiente, necesitas una aplicación.
              Desarrollo aplicaciones web personalizadas que se adaptan
              exactamente a lo que tu negocio requiere: desde paneles de control
              hasta plataformas completas. Todo pensado para automatizar
              procesos y mejorar la eficiencia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-fuchsia-50/40 to-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Potente y funcional
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-slate-600 sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Todo en un solo lugar
            </p>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-700 text-justify text-[17px] pr-6 lg:pr-0">
              Tus herramientas, datos y procesos centralizados en una sola
              aplicación. Creo soluciones intuitivas, rápidas y seguras que
              funcionan directamente desde el navegador, sin necesidad de
              instalaciones complicadas.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-95 h-80 rounded-4xl overflow-hidden border border-violet-100 shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-white">
              <Image
                src="/images/servicios/web-basica-rapido.png"
                alt="Sitio rápido"
                fill
                className="object-cover"
                sizes="320px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-95 h-80 rounded-[2rem] overflow-hidden border border-fuchsia-100 shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-white">
              <Image
                src="/images/servicios/web-basica-escalable.png"
                alt="Sitio escalable"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Funciona en cualquier dispositivo
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-slate-600 sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              Acceso desde cualquier lugar
            </p>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-700 text-justify text-[17px] pr-6 lg:pr-0">
              Tu aplicación funciona directamente desde el navegador, ya sea en
              celular, tablet o computadora. No necesitas instalar nada:
              simplemente accedes y trabajas de forma rápida, cómoda y desde
              cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/50 to-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
                Escalable y flexible
              </h2>
              <p className="mt-8 text-xl font-medium tracking-tight text-slate-600 sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
                Crece sin límites
              </p>
              <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-700 text-justify text-[17px] pr-6 lg:pr-0">
                Tu aplicación está preparada para evolucionar: nuevas funciones,
                más usuarios o integraciones con otros sistemas. Empiezas con lo
                necesario y expandes la plataforma conforme tu negocio lo
                requiera.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-95 h-80 rounded-4xl overflow-hidden border border-fuchsia-100 shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-white">
                <Image
                  src="/images/servicios/web-basica-precio.png"
                  alt="Precio accesible"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="absolute inset-0" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
              Una aplicación cambia tu forma de trabajar
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Una aplicación web no es solo presencia, es una herramienta que
              transforma tu negocio. Te permite organizar procesos, gestionar
              información y operar de forma más eficiente, todo desde un solo
              lugar y accesible en cualquier momento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={Rocket}
              title="Automatización"
              text="Reduce tareas manuales y optimiza procesos dentro de tu negocio."
            />
            <FeatureCard
              icon={Globe}
              title="Acceso en tiempo real"
              text="Consulta y gestiona información desde cualquier lugar y en cualquier momento."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Mayor productividad"
              text="Centraliza herramientas y mejora la eficiencia de tu equipo o proyecto."
            />
            <FeatureCard
              icon={Layers3}
              title="Experiencia profesional"
              text="Interfaces modernas, intuitivas y diseñadas para facilitar el uso."
            />
            <article className="flex flex-col items-center text-center rounded-4xl border border-[#dee4ff] bg-white p-6 shadow-[0_18px_60px_rgba(76,29,149,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)] md:col-span-2">
              <div className="flex items-center justify-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-100 to-violet-200 text-violet-800 shadow-sm">
                  <Settings size={22} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                  100% personalizada
                </h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                Cada aplicación se desarrolla según tus necesidades, sin
                plantillas ni limitaciones.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-fadeInUp">
            <article className="flex flex-col items-center text-center rounded-4xl border border-[#dee4ff] bg-white p-8 shadow-[0_18px_60px_rgba(76,29,149,0.08)] sm:p-12">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Convierte tu idea en una aplicación
                </h3>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                Hablemos sobre tu proyecto y crea una solución digital que
                realmente optimice tu negocio.
              </p>
              <a
                href="/services#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Contáctame ahora
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
