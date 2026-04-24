import { NextResponse } from "next/server";
import { portfolioData } from "@/data/PortafolioData";
import { portfolioDataEN } from "@/data/PortafolioDataEN";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

export async function POST(req: Request) {
  const { message, locale } = await req.json();
  const messagesData = locale === "es" ? esMessages : enMessages;
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

  const aboutContext = `
        Hero: ${messagesData.home.heroDescription}
    
        Career: ${messagesData.about.career}
        About: ${messagesData.about.description}
        Focus: ${messagesData.about.focusDesc}
        Work Style: ${messagesData.about.workStyleDesc}
        `;

  const servicesContext = `
      ${messagesData.home.service1Title}: ${messagesData.home.service1Desc}
      ${messagesData.home.service2Title}: ${messagesData.home.service2Desc}
      ${messagesData.home.service3Title}: ${messagesData.home.service3Desc}
      ${messagesData.services.service4Title}: ${messagesData.services.service4Desc}
      ${messagesData.services.service5Title}: ${messagesData.services.service5Desc}
      ${messagesData.services.service6Title}: ${messagesData.services.service6Desc}
      `;

  const experienceContext = `
      Experiencia:
      Mobile Developer (Flutter)
      Naatik A.I. Solutions SAPI de CV · Jornada completa
      jun. 2025 - dic. 2025 · 7 meses
      San Francisco 23, Frac. Burgos, Temixco, Morelos · Remoto
    
      Desarrollo de la aplicación móvil FixGo con Flutter...
    
      Responsabilidades:
      - Desarrollo end-to-end
      - UI/UX con Figma
      - Clean Architecture
      - Módulo proveedor/admin
      - Autenticación y roles
      - Mapas y geolocalización
      - Optimización y pruebas
      `;

  const experienceContextEN = `
      Experience:
      Mobile Developer (Flutter)
      Naatik A.I. Solutions SAPI de CV · Full-time
      Jun 2025 - Dec 2025 · 7 months
      San Francisco 23, Frac. Burgos, Temixco, Morelos · Remote
    
      Developed the FixGo mobile application (Android) using Flutter.
    
      Responsibilities:
      - End-to-end development
      - UI/UX design using Figma
      - Implementation of Clean Architecture
      - Provider and admin modules
      - Authentication and role management
      - Maps and geolocation integration
      - Performance optimization and testing
      `;

  const educationContext = `
      Educación:
      Ingeniero en Sistemas Computacionales
      Instituto Tecnológico de Cuautla (2021–2026)
    
      Participación en hackathons y formación en:
      Ciberseguridad, IA, redes neuronales
      `;

  const educationContextEN = `
      Education:
      Computer Systems Engineering
      Instituto Tecnológico de Cuautla (2021–2026)
    
      Participation in hackathons and additional training in:
      Cybersecurity, Artificial Intelligence, Neural Networks
      `;

  const skillsContext = `
      Habilidades:
      Autoaprendizaje, trabajo en equipo, resolución de problemas,
      atención al cliente, creatividad, disciplina
      `;

  const skillsContextEN = `
      Skills:
      Self-learning, teamwork, problem solving,
      customer communication, creativity, discipline and responsibility
      `;

  const skillsDeveloperContext = `
      Lenguajes:
      JavaScript, Dart, TypeScript, Python, SQL, Java
    
      Desarrollo Web:
      React, Next.js, Node.js, Astro, Express.js, Tailwind CSS, Vite.js
    
      Desarrollo Móvil:
      Flutter, BLoC, React Native, Expo
    
      Bases de Datos:
      PostgreSQL, Firebase, Supabase, SQLite, Redis, MongoDB
    
      Herramientas:
      Docker, Figma, Trello, Git, GitHub, Google Cloud, npm, pnpm, VS Code, Cursor
      `;

  const skillsDeveloperContextEN = `
      Languages:
      JavaScript, Dart, TypeScript, Python, SQL, Java
    
      Web Development:
      React, Next.js, Node.js, Astro, Express.js, Tailwind CSS, Vite.js
    
      Mobile Development:
      Flutter, BLoC, React Native, Expo
    
      Databases:
      PostgreSQL, Firebase, Supabase, SQLite, Redis, MongoDB
    
      Tools:
      Docker, Figma, Trello, Git, GitHub, Google Cloud, npm, pnpm, VS Code, Cursor
      `;

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

        INFORMACIÓN:
        ${aboutContext}

        EXPERIENCIA:
        ${experienceContext}

        EDUCACIÓN:
        ${educationContext}

        HABILIDADES:
        ${skillsContext}                                                                                                                                                    
        HABILIDADES TÉCNICAS:
        ${skillsDeveloperContext}PROYECTOS:
        ${projectsContext}

        SERVICIOS:
        ${servicesContext}

        REGLAS:
        - Responde como humano, no como robot
        - Respuestas cortas y claras
        - No inventes información
        - Si te preguntan algo que no está aquí, dilo claramente
        - Si preguntan por contacto, sugiere que usen la sección de contacto del portafolio

        CONTACTO:
        - Correo: enriquecalvo.dev@gmail.com
        - GitHub: https://github.com/KingCalvo
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

        INFORMATION:
        ${aboutContext}

        EXPERIENCE:
        ${experienceContextEN}

        EDUCATION:
        ${educationContextEN}

        SKILLS:
        ${skillsContextEN}

        TECHNICAL SKILLS:
        ${skillsDeveloperContextEN}

        PROJECTS:
        ${projectsContext}

        SERVICES:
        ${servicesContext}

        RULES:
        - Be human and friendly
        - Keep answers short
        - Do not invent information

        CONTACT:
        - Email: enriquecalvo.dev@gmail.com
        - GitHub: https://github.com/KingCalvo
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
