"use client";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Brain,
  Bot,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
    <article className="flex flex-col items-center text-center rounded-4xl border border-border bg-card p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)]">
      <div className="flex items-center justify-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-sm">
          <Icon size={22} />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}

export default function ServicioIA() {
  const t = useTranslations("servicesIA");
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-24 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0)_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0)_22%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_20%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t("heroTitle1")}
            <br />
            {t("heroTitle2")}
          </h1>

          <Link
            href="/services#contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary-600"
          >
            {t("cta")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="relative bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-90 lg:w-120 h-80 rounded-[2rem] overflow-hidden shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-card">
              <Image
                src="/images/servicios/IA/Automatizacion.png"
                alt="Sitio con IA"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section1Title")}
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section1Subtitle")}
            </p>
            <p className="mt-8 max-w-2xl leading-8 text-muted-foreground text-justify text-[17px] pr-6 lg:pr-0">
              {t("section1Text")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section2Title")}
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section2Subtitle")}
            </p>
            <p className="mt-8 max-w-2xl leading-8 text-muted-foreground text-justify text-[17px] pr-6 lg:pr-0">
              {t("section2Text")}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-90 lg:w-120 h-80 rounded-4xl overflow-hidden shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-card">
              <Image
                src="/images/servicios/IA/Automatiza.png"
                alt="Automatiza y optimiza"
                fill
                className="object-cover"
                sizes="320px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-90 lg:w-120 h-80 rounded-[2rem] overflow-hidden shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-card">
              <Image
                src="/images/servicios/IA/Experiencia.png"
                alt="Experiencia personalizada"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section3Title")}
            </h2>
            <p className="mt-6 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
              {t("section3Subtitle")}
            </p>
            <p className="mt-8 max-w-2xl leading-8 text-muted-foreground text-justify text-[17px] pr-6 lg:pr-0">
              {t("section3Text")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
                {t("section4Title")}
              </h2>
              <p className="mt-6 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl md:whitespace-nowrap whitespace-normal text-center md:text-left pr-6 lg:pr-0">
                {t("section4Subtitle")}
              </p>
              <p className="mt-8 max-w-2xl leading-8 text-muted-foreground text-justify text-[17px] pr-6 lg:pr-0">
                {t("section4Text")}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-90 lg:w-120 h-80 rounded-4xl overflow-hidden shadow-[0_18px_55px_rgba(76,29,149,0.10)] bg-card">
                <Image
                  src="/images/servicios/IA/Soluciones.png"
                  alt="Soluciones personalizadas"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 sm:py-28">
        <div className="absolute inset-0" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("finalTitle")}
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-muted-foreground">
              {t("finalText")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={TrendingUp}
              title={t("feature1Title")}
              text={t("feature1Text")}
            />
            <FeatureCard
              icon={Bot}
              title={t("feature2Title")}
              text={t("feature2Text")}
            />
            <FeatureCard
              icon={Brain}
              title={t("feature3Title")}
              text={t("feature3Text")}
            />
            <FeatureCard
              icon={Settings}
              title={t("feature4Title")}
              text={t("feature4Text")}
            />
            <article className="flex flex-col items-center text-center rounded-4xl border border-border bg-card p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(76,29,149,0.12)] md:col-span-2">
              <div className="flex items-center justify-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-sm">
                  <Rocket size={22} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  {t("feature5Title")}
                </h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                {t("feature5Text")}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-background py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-fadeInUp">
            <article className="flex flex-col items-center text-center rounded-4xl border border-border bg-card p-8 shadow-sm sm:p-12">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("contactTitle")}
                </h3>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {t("contactText")}
              </p>
              <Link
                href="/services#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-600"
              >
                {t("contactBtn")}
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
