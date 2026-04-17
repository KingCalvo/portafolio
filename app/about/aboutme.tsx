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

type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

type TechGroup = {
  title: string;
  items: TechItem[];
};

const techGroups: TechGroup[] = [
  {
    title: "Lenguajes",
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
    title: "Desarrollo web",
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
    title: "Desarrollo móvil",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
      { name: "BLoC", Icon: SiFlutter, color: "#0175C2" },
      { name: "React Native", Icon: FaMobileScreenButton, color: "#61DAFB" },
      { name: "Expo", Icon: SiExpo, color: "#000020" },
    ],
  },
  {
    title: "Bases de datos",
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
    title: "Herramientas",
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

function TechChip({ item }: { item: TechItem }) {
  const { Icon, color } = item;

  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md w-full overflow-hidden"
      style={
        {
          "--tech-color": color,
        } as CSSProperties
      }
    >
      {/* Icono */}
      <Icon
        size={30}
        style={{ color }}
        className="transition duration-300 group-hover:scale-110"
      />

      {/* Texto */}
      <span className="mt-3 text-sm font-medium text-slate-600 text-center break-words leading-tight">
        {item.name}
      </span>

      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 22px var(--tech-color)`,
        }}
      />
    </div>
  );
}

function TechGroupCard({ group }: { group: TechGroup }) {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 justify-center">
        <div className="h-2 w-2 rounded-full bg-slate-900" />
        <h5 className="text-base font-semibold text-slate-900 tracking-tight">
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

const skills = [
  "Autoaprendizaje",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Atención y trato con clientes",
  "Creatividad",
  "Disciplina y responsabilidad",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 text-slate-900"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Título */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
            About me
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl transition duration-300 hover:-translate-y-1">
            Acerca de{" "}
            <span className="text-shadow-slate-950 animate-pulse">mí</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Una breve presentación sobre mi perfil, experiencia, formación y
            habilidades.
          </p>
        </div>

        {/* Bloque principal */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left */}
          <div className="relative h-full">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
            <div className="absolute -bottom-6 right-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Enrique Calvo García
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                  Ingeniero en Sistemas Computacionales
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-[15px] text-justify">
                  Soy Ingeniero en Sistemas Computacionales, soy autodidacta y
                  disciplinado; me entusiasma aprender nuevas tecnologías y
                  aplicar buenas prácticas para entregar soluciones de calidad.
                  Me destaco en trabajo en equipo, comunicación con clientes y
                  resolución pragmática de problemas.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Web apps, mobile apps y experiencia de usuario
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Forma de trabajo
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Limpio, eficiente, comunicativo y orientado a resultados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex h-full">
            <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between">
              <div className="flex h-[260px] items-center justify-center">
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-slate-100 shadow-lg">
                  <Image
                    src="/images/contenido/foto.jpg"
                    alt="Foto de Enrique Calvo García"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="mt-2 space-y-3 text-center">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm text-slate-600 leading-6">
                    Desarrollo de aplicaciones web modernas con React & Next.js.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm text-slate-600 leading-6">
                    Apps móviles multiplataforma con Flutter.
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

                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <h4 className="text-xl font-semibold">Experiencia</h4>

                  <div className="mt-4 rounded-xl bg-slate-50 p-5">
                    <p className="text-lg font-semibold text-slate-900">
                      Mobile Developer (Flutter)
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-600">
                      Naatik A.I. Solutions SAPI de CV · Jornada completa
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      jun. 2025 - dic. 2025 · 7 meses
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      San Francisco 23, Frac. Burgos, Temixco, Morelos · Remoto
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600 text-justify">
                      Desarrollo de la aplicación móvil FixGo (Android) con
                      Flutter, implementando módulos de proveedor y
                      administrador; gestión de servicios, autenticación,
                      imágenes, reportes PDF, gráficas, mapas, panel
                      administrativo y optimización de rendimiento.
                    </p>

                    <ExperienceDetails />
                  </div>
                </div>
              </div>

              {/* Educación */}
              <div className="relative pl-12">
                <div className="absolute left-4 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-white" />

                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <h4 className="text-xl font-semibold">Educación</h4>

                  <div className="mt-4 rounded-xl bg-slate-50 p-5">
                    <p className="text-lg font-semibold text-slate-900">
                      Ingeniero en Sistemas Computacionales
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Instituto Tecnológico de Cuautla
                    </p>

                    <p className="mt-1 text-xs text-slate-500">2021 – 2026</p>

                    <p className="mt-4 text-sm leading-7 text-slate-600 text-justify">
                      Participación en Hackathon Morelos 12a edición y 13a
                      edición y Hackatec etapa regional y etapa nacional.
                      Formación académica y autodidacta junto con participación
                      en talleres extracurriculares de especialización
                      (Ciberseguridad, IA, redes neuronales, etc.).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-slate-900" />
              <h4 className="text-xl font-semibold">Habilidades</h4>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Habilidades como desarrollador */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-slate-900" />
              <h4 className="text-xl font-semibold">
                Mis habilidades como desarrollador
              </h4>
            </div>

            <div className="mt-6 space-y-10">
              <div className="grid md:grid-cols-1 gap-10">
                {/* Columna izquierda */}
                <div className="space-y-10">
                  <div className="bg-slate-50 rounded-2xl">
                    <TechGroupCard group={techGroups[1]} />
                  </div>

                  <div className="bg-slate-50 rounded-2xl">
                    <TechGroupCard group={techGroups[2]} />
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-10">
                  <div className="bg-slate-50 rounded-2xl">
                    <TechGroupCard group={techGroups[0]} />
                  </div>

                  <div className="bg-slate-50 rounded-2xl">
                    <TechGroupCard group={techGroups[3]} />
                  </div>
                </div>
              </div>

              {/* Herramientas */}
              <div className="bg-slate-50 rounded-2xl pt-6">
                <TechGroupCard group={techGroups[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
