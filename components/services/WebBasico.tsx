import Link from "next/link";
import {
  ArrowRight,
  MousePointerClick,
  ShieldCheck,
  Zap,
  DollarSign,
  Layout,
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

export default function ServicioSitioWebBasico() {
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
            Tu primera landing page
            <br />
            rápida y funcional
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
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-fuchsia-200/70 blur-2xl" />
              <div className="rounded-4xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 via-white to-violet-100 p-6 shadow-[0_18px_55px_rgba(76,29,149,0.10)]">
                <div className="rounded-[1.35rem] border border-fuchsia-200 bg-white p-3 shadow-inner">
                  <div className="flex items-center gap-2 border-b border-fuchsia-100 pb-3">
                    <div className="h-3 w-3 rounded-full bg-fuchsia-300" />
                    <div className="h-3 w-3 rounded-full bg-violet-200" />
                    <div className="h-3 w-3 rounded-full bg-pink-200" />
                    <div className="ml-auto h-2 w-16 rounded-full bg-slate-100" />
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="h-24 rounded-2xl bg-gradient-to-br from-fuchsia-100 to-violet-200" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-2xl bg-fuchsia-50" />
                      <div className="h-20 rounded-2xl bg-violet-50" />
                    </div>
                    <div className="h-14 rounded-2xl bg-slate-50" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-center">
                  <div className="rounded-full bg-fuchsia-100 px-1 lg:px-2 py-2 text-sm font-medium text-violet-900">
                    Landing simple y clara
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-violet-900 shadow-sm">
                    <MousePointerClick size={16} />
                    <span>Fácil de navegar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Empieza sin complicarte
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Lo esencial para estar online
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 text-justify">
              Si estás comenzando o necesitas lanzar algo rápido, un sitio web
              básico es la mejor opción. Una página clara, directa y profesional
              donde puedes mostrar tu idea, producto o servicio sin perder
              tiempo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-fuchsia-50/40 to-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Rápido y sin complicaciones
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Tu one-page o landing lista en pocos días
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Creo tu sitio en poco tiempo, con todo lo necesario para que
              funcione correctamente desde el inicio. Sin procesos largos ni
              complicados, enfocado en que puedas estar online lo antes posible.
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
              Simple y efectivo
            </h2>
            <p className="mt-6 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
              Una sola página
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Tu sitio se estructura en una sola página donde organizamos toda
              la información de forma clara. Ideal para presentar tu proyecto,
              evento o producto de manera directa y fácil de entender.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/50 to-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
                Listo para crecer
              </h2>
              <p className="mt-8 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl md:whitespace-nowrap whitespace-normal text-center md:text-left">
                Empieza pequeño
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
                Comienzas con lo básico, pero con una base sólida. Cuando tu
                proyecto crezca, tu sitio también puede evolucionar sin
                necesidad de empezar desde cero.
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
              Tener una página web hace la diferencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Aunque sea simple, un sitio web propio transmite confianza y
              profesionalismo. Es el primer paso para mostrar tu proyecto al
              mundo y comenzar a generar oportunidades.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={Zap}
              title="Presencia inmediata"
              text="Publica tu proyecto en internet de forma rápida y sencilla."
            />
            <FeatureCard
              icon={MousePointerClick}
              title="Fácil de entender"
              text="Toda tu información organizada en una sola página clara y directa."
            />
            <FeatureCard
              icon={DollarSign}
              title="Bajo costo"
              text="Una solución accesible con todo lo necesario para empezar."
            />
            <FeatureCard
              icon={Layout}
              title="Diseño profesional"
              text="Una página moderna y adaptada a cualquier dispositivo"
            />
            <article className="flex flex-col items-center text-center rounded-4xl border border-[#dee4ff] bg-white p-6 shadow-[0_18px_60px_rgba(76,29,149,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)] md:col-span-2">
              <div className="flex items-center justify-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-100 to-violet-200 text-violet-800 shadow-sm">
                  <ShieldCheck size={22} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                  Base sólida
                </h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                Empiezas con lo esencial, pero listo para mejorar en el futuro.
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
                  Lanza tu idea hoy
                </h3>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                Hablemos sobre tu proyecto y crea un sitio web simple, rápido y
                efectivo para empezar.
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
