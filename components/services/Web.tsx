import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
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

export default function ServicioSitioWeb() {
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
          <SectionLabel>Servicio destacado</SectionLabel>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Sitios web profesionales
            <br />
            que hacen crecer tu negocio
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
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
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Más que presencia online
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Diseño que realmente funciona
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 text-justify">
              Hoy no basta con solo “estar en internet”. Tu sitio web debe
              atraer, comunicar y convertir visitantes en clientes. Diseño
              páginas modernas, responsivas y enfocadas en resultados, pensadas
              para que tu negocio se vea profesional desde el primer momento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-fuchsia-50/40 to-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Rápido y profesional
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Sin complicaciones
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Desarrollo sitios web con tecnología actual, optimizados para
              cargar rápido y funcionar perfectamente en cualquier dispositivo.
              Obtienes un resultado profesional en poco tiempo, sin procesos
              complicados.
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
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Listo para crecer
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Escala cuando quieras
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Tu sitio no se queda limitado. Está preparado para agregar nuevas
              secciones, funciones o integraciones cuando lo necesites. Empiezas
              con una base sólida y creces sin tener que rehacer todo.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/50 to-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
                Todo incluido
              </h2>
              <p className="mt-8 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
                Sin costos innecesarios
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
                Incluyo diseño personalizado, optimización SEO y estructura
                profesional. Pagas por un sitio que realmente aporta valor, sin
                extras que no necesitas.
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
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
              Tu sitio web marca la diferencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Tu página web es la base de tu presencia digital. Es donde tus
              clientes te conocen, confían en tu negocio y deciden contactarte.
              Un sitio bien diseñado, rápido y optimizado no solo se ve
              profesional, también trabaja para ti atrayendo oportunidades y
              generando resultados.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={TrendingUp}
              title="Más visibilidad"
              text="Aparece en buscadores y llega a más clientes de forma constante."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Más confianza"
              text="Un sitio profesional genera credibilidad desde el primer vistazo."
            />
            <FeatureCard
              icon={MousePointerClick}
              title="Más clientes"
              text="Diseño enfocado en guiar al usuario para que te contacte o compre."
            />
            <FeatureCard
              icon={Rocket}
              title="Mejor rendimiento"
              text="Sitios rápidos, optimizados y adaptados a todos los dispositivos."
            />
            <article className="flex flex-col items-center text-center rounded-4xl border border-[#dee4ff] bg-white p-6 shadow-[0_18px_60px_rgba(76,29,149,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)] md:col-span-2">
              <div className="flex items-center justify-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-100 to-violet-200 text-violet-800 shadow-sm">
                  <Layers3 size={22} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                  100% de control
                </h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                Tu web es completamente tuya, sin depender de plataformas
                externas.
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
                  ¿Listo para tener un sitio web profesional?
                </h3>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                Hablemos sobre tu idea y construyamos un sitio web que realmente
                represente tu negocio y te ayude a crecer.
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
