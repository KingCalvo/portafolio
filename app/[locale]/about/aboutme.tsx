"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiDart,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAstro,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiTrello,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiPnpm,
  SiGooglecloud,
  SiExpo,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaCode,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import ExperienceDetails from "@/components/layout/ExperienceDetails";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

type TechGroup = {
  title: string;
  items: TechItem[];
};

let xpAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let lastPlayTime = 0;
const COOLDOWN = 250;

function TechChip({ item }: { item: TechItem }) {
  const { Icon, color } = item;

  const isDarkColor =
    color === "#000000" ||
    color === "#111111" ||
    color === "#000020" ||
    color === "#181717";

  const handleClick = () => {
    const now = Date.now();
    if (now - lastPlayTime < COOLDOWN) return;

    lastPlayTime = now;

    if (!xpAudio) {
      xpAudio = new Audio("/sounds/xp.mp3");
      xpAudio.volume = 0.3;
    }

    xpAudio.currentTime = 0;
    xpAudio.playbackRate = 0.95 + Math.random() * 0.1;

    xpAudio.play().catch((err) => {
      console.log("Audio error:", err);
    });
  };

  return (
    <button
      onClick={handleClick}
      data-dark={isDarkColor ? "true" : "false"}
      className="group relative flex flex-col items-center justify-center rounded-2xl bg-card px-4 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md w-full cursor-pointer active:scale-95"
      style={
        {
          "--tech-color": color,
        } as CSSProperties
      }
    >
      {/* Icono */}
      <Icon
        size={30}
        data-dark={isDarkColor ? "true" : "false"}
        className="tech-icon transition duration-300 group-hover:scale-110"
      />

      {/* Texto */}
      <span className="mt-3 text-sm font-medium text-muted-foreground text-center break-words leading-tight">
        {item.name}
      </span>

      {/* Glow */}
      <div className="tech-glow pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
    </button>
  );
}

function TechGroupCard({ group }: { group: TechGroup }) {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 justify-center">
        <div className="h-2 w-2 rounded-full bg-slate-900" />
        <h5 className="text-base font-semibold text-foreground tracking-tight">
          {group.title}
        </h5>
      </div>

      {/* Chips */}
      <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {group.items.map((item) => (
          <TechChip key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const t = useTranslations("about");

  const techGroups: TechGroup[] = [
    {
      title: t("tech.languages"),
      items: [
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "Dart", Icon: SiDart, color: "#0175C2" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "Python", Icon: SiPython, color: "#3776AB" },
        { name: "SQL", Icon: FaDatabase, color: "#4E73DF" },
        { name: "Java", Icon: FaJava, color: "#F89820" },
      ],
    },
    {
      title: t("tech.web"),
      items: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Next JS", Icon: SiNextdotjs, color: "#111111" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "#339933" },
        { name: "Astro", Icon: SiAstro, color: "#FF5D01" },
        { name: "Express.js", Icon: SiExpress, color: "#000000" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Vite.js", Icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      title: t("tech.mobile"),
      items: [
        { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
        { name: "BLoC", Icon: SiFlutter, color: "#0175C2" },
        { name: "React Native", Icon: FaMobileScreenButton, color: "#61DAFB" },
        { name: "Expo", Icon: SiExpo, color: "#000020" },
      ],
    },
    {
      title: t("tech.database"),
      items: [
        { name: "Postgres", Icon: SiPostgresql, color: "#336791" },
        { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
        { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
        { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
        { name: "Redis", Icon: SiRedis, color: "#DC382D" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: t("tech.tools"),
      items: [
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
        { name: "Trello", Icon: SiTrello, color: "#0052CC" },
        { name: "Git", Icon: SiGit, color: "#F05032" },
        { name: "GitHub", Icon: SiGithub, color: "#181717" },
        { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
        { name: "npm", Icon: SiNpm, color: "#CB3837" },
        { name: "pnpm", Icon: SiPnpm, color: "#F69220" },
        { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
        { name: "Cursor", Icon: FaCode, color: "#111111" },
      ],
    },
  ];

  useEffect(() => {
    const unlockAudio = () => {
      if (!xpAudio) {
        xpAudio = new Audio("/sounds/XP.mp3");
        xpAudio.volume = 0.3;
      }

      xpAudio
        .play()
        .then(() => {
          xpAudio?.pause();
          xpAudio!.currentTime = 0;
          audioUnlocked = true;
        })
        .catch(() => {});

      document.removeEventListener("pointerdown", unlockAudio);
    };

    document.addEventListener("pointerdown", unlockAudio, { once: true });

    return () => {
      document.removeEventListener("pointerdown", unlockAudio);
    };
  }, []);

  const skills = t.raw("skills") as string[];
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Título */}
        <div className="text-center">
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
            {t("title1")}{" "}
            <span className="text-shadow-slate-950 animate-pulse">
              {t("title2")}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Bloque principal */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left */}
          <div className="relative h-full">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
            <div className="absolute -bottom-6 right-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-center lg:text-left">
                  Enrique Calvo Garcia
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground text-center lg:text-left">
                  {t("career")}
                </p>

                <p className="mt-6 text-sm leading-6 sm:leading-7 text-muted-foreground sm:text-[15px] text-justify">
                  {t("description")}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {t("focus")}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("focusDesc")}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {t("workStyle")}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("workStyleDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex h-full">
            <div className="w-full rounded-[2rem] border border-border bg-card p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
              <div className="flex h-[260px] items-center justify-center">
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-muted shadow-lg">
                  <Image
                    src="/images/contenido/foto.jpg"
                    alt="Foto de Enrique Calvo Garcia"
                    fill
                    sizes="224px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="mt-2 space-y-3 text-center">
                <div className="rounded-xl border border-border bg-muted px-4 py-3">
                  <p className="text-sm text-muted-foreground leading-6">
                    {t("aboutCard1")}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted px-4 py-3">
                  <p className="text-sm text-muted-foreground leading-6">
                    {t("aboutCard2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 space-y-8 pt-8">
          <div className="mt-10">
            <div className="relative">
              {/* Línea */}
              <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200" />

              {/* Experiencia */}
              <div className="relative pl-12 mb-10">
                <div className="absolute left-4 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-white" />

                <div className="rounded-[2rem] border border-border bg-card p-2 lg:p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-1 rounded-full bg-foreground" />
                    <h4 className="text-xl font-semibold">
                      {t("experienceTitle")}
                    </h4>
                  </div>

                  <div className="mt-4 rounded-xl bg-muted p-5">
                    <p className="text-lg font-semibold text-foreground">
                      {t("jobTitle")}
                    </p>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {t("company")}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {t("time")}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {t("location")}
                    </p>

                    <p className="mt-4 text-sm leading-6 sm:leading-7 text-muted-foreground text-justify tracking-[0.01em]">
                      {t("jobDesc")}
                    </p>

                    <ExperienceDetails />
                  </div>
                </div>
              </div>

              {/* Educación */}
              <div className="relative pl-12">
                <div className="absolute left-4 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-white" />

                <div className="rounded-[2rem] border border-border bg-card p-2 lg:p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-1 rounded-full bg-foreground" />
                    <h4 className="text-xl font-semibold">
                      {t("educationTitle")}
                    </h4>
                  </div>

                  <div className="mt-4 rounded-xl bg-muted p-5">
                    <p className="text-lg font-semibold text-foreground">
                      {t("degree")}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {t("school")}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {t("educationTime")}
                    </p>

                    <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-6 text-justify">
                      <p>{t("eduDesc1")}</p>

                      <p>{t("eduDesc2")}</p>

                      <p className="text-muted-foreground">{t("eduDesc3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-foreground" />
              <h4 className="text-xl font-semibold">{t("skillsTitle")}</h4>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-900 hover:bg-primary-900 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Habilidades como desarrollador */}
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-foreground" />
              <h4 className="text-xl font-semibold">{t("devSkillsTitle")}</h4>
            </div>

            <div className="mt-6 space-y-10">
              <div className="grid md:grid-cols-1 gap-10">
                {/* Columna izquierda */}
                <div className="space-y-10">
                  <div className="bg-muted rounded-2xl">
                    <TechGroupCard group={techGroups[1]} />
                  </div>

                  <div className="bg-muted rounded-2xl">
                    <TechGroupCard group={techGroups[2]} />
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-10">
                  <div className="bg-muted rounded-2xl">
                    <TechGroupCard group={techGroups[0]} />
                  </div>

                  <div className="bg-muted rounded-2xl">
                    <TechGroupCard group={techGroups[3]} />
                  </div>
                </div>
              </div>

              {/* Herramientas */}
              <div className="bg-muted rounded-2xl pt-6">
                <TechGroupCard group={techGroups[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
