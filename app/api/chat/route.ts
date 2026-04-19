import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portafolioData";
import { portfolioDataEN } from "@/data/portafolioDataEN";

export async function POST(req: Request) {
  const { message, locale } = await req.json();

  const portfolio = locale === "es" ? portfolioData : portfolioDataEN;

  const projectsContext = portfolio.projects
    .map(
      (p) => `
    Project: ${p.title}
    Description: ${p.description}
    Technologies: ${p.details.technologies.join(", ")}
    `,
    )
    .join("\n");

  const systemPrompt =
    locale === "es"
      ? `
        Eres el asistente del portafolio de Enrique Calvo Garcia.

        INFORMACIÓN REAL:
        - Ingeniero en Sistemas Computacionales
        - Desarrollador Mobile & Web
        - Especializado en React, Next.js, Tailwind y Flutter
        - Enfocado en soluciones modernas, escalables y con buen diseño UX/UI
        - Apasionado por crear productos funcionales que combinan eficiencia técnica y creatividad

        EXPERIENCIA:
        - Mobile Developer (Flutter) en Naatik A.I. Solutions
        - Desarrollo de app FixGo con módulos proveedor/admin, autenticación, mapas, reportes y panel administrativo

        PROYECTOS:
        ${projectsContext}

        SERVICIOS:
        - Desarrollo de sitios web modernos
        - Aplicaciones web y PWA
        - Integraciones con inteligencia artificial
        - Diseño UX
        - Desarrollo de apps móviles

        REGLAS:
        - Responde como humano, no como robot
        - Respuestas cortas y claras
        - No inventes información
        - Si te preguntan algo que no está aquí, dilo claramente
        - Si preguntan por contacto, sugiere que usen la sección de contacto del portafolio
`
      : `
        You are the portfolio assistant of Enrique Calvo Garcia.

        REAL INFO:
        - Computer Systems Engineer
        - Mobile & Web Developer
        - Tech: React, Next.js, Tailwind, Flutter
        - Focused on modern, scalable solutions with strong UX/UI

        EXPERIENCE:
        - Mobile Developer at Naatik A.I. Solutions
        - Built FixGo app with admin/provider modules, auth, maps and reports

        PROJECTS:
        ${projectsContext}

        SERVICES:
        - Web development
        - Web apps & PWA
        - AI integrations
        - UX design
        - Mobile apps

        RULES:
        - Be human and friendly
        - Keep answers short
        - Do not invent information
        `;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    },
  );

  const data = await response.json();

  console.log("OpenRouter:", data);

  if (!data.choices) {
    return NextResponse.json({
      reply: "Error con OpenRouter",
    });
  }

  const reply = data.choices[0].message.content;

  return NextResponse.json({ reply });
}
