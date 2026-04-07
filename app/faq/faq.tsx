"use client";

import { useState } from "react";
import {
  ChevronDown,
  Clock,
  LifeBuoy,
  MessageCircle,
  Wallet,
  Palette,
  Settings,
  MessagesSquare,
  CreditCard,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: <Clock size={18} />,
      question: "¿Cuánto tiempo tarda un proyecto?",
      answer:
        "El tiempo varía según la complejidad del proyecto. Una landing page sencilla tarda 1-2 semanas, una web completa con varias páginas tarda entre 3 y 4 semanas, mientras que una aplicación web personalizada puede tardar entre 2 y 4 meses. Durante la consulta gratuita inicial, analizamos juntos tus necesidades y definimos plazos realistas y transparentes para tu proyecto específico.",
    },
    {
      icon: <LifeBuoy size={18} />,
      question: "¿Ofreces soporte después del lanzamiento?",
      answer:
        "Sí, ofrezco soporte completo tras el lanzamiento. Esto incluye mantenimiento regular, actualizaciones de seguridad, nuevas funciones y asistencia técnica. Podemos definir juntos un plan de apoyo que se adapte a tus necesidades: desde trabajos bajo demanda hasta mantenimiento mensual. El apoyo forma parte de mi servicio.",
    },
    {
      icon: <MessageCircle size={18} />,
      question: "¿Cómo funciona la consulta gratuita?",
      answer:
        "La consulta gratuita dura entre 30 y 45 minutos y es una oportunidad para conocernos y entender tus necesidades. Analizamos conjuntamente los objetivos, el público objetivo, el presupuesto y los requisitos técnicos: qué necesitas, qué quieres lograr y cómo podemos estructurar el proyecto. Te doy una evaluación técnica y un presupuesto detallado sin ninguna obligación. Podemos hacerlo por videollamada (Zoom, Meet, etc.)",
    },
    {
      icon: <Wallet size={18} />,
      question: "¿Trabajas con presupuestos limitados?",
      answer:
        "Sí, puedo adaptar soluciones a tu presupuesto. Podemos empezar con un MVP (Producto Mínimo Viable) que incluya características esenciales y luego escalar gradualmente según los resultados y tus necesidades. También ofrezco soluciones modulares que permiten añadir funciones a lo largo del tiempo, para que puedas invertir progresivamente. Lo importante es definir las prioridades juntos.",
    },
    {
      icon: <Palette size={18} />,
      question: "¿Está incluido el diseño en el servicio?",
      answer:
        "Sí, el diseño siempre está incluido. Ofrezco un servicio completo que abarca todo el proceso: diseño, desarrollo, pruebas y despliegue de UX/UI. Creo wireframes, maquetas y prototipos interactivos antes de desarrollarlo. Si prefieres, también puedo colaborar con tu equipo de diseño actual. El objetivo es crear una experiencia de usuario óptima que cumpla tus objetivos.",
    },
    {
      icon: <Settings size={18} />,
      question: "¿Qué tecnologías utilizas?",
      answer:
        "Elijo tecnologías en función de las necesidades del proyecto: rendimiento, escalabilidad, mantenibilidad. Utilizo stacks modernos y bien establecidos (Next.js, React, TypeScript, Node.js, Tailwind CSS y otros). Durante la consulta hablamos sobre cuáles son las mejores para tu caso y por qué.",
    },
    {
      icon: <MessagesSquare size={18} />,
      question: "¿Cómo se gestiona la comunicación durante el proyecto?",
      answer:
        "La comunicación es una prioridad para mí: te mantengo informado con actualizaciones periódicas de progreso (semanales o según prefieras). Nos mantenemos en contacto por correo electrónico, chat o videollamadas. Te involucro en decisiones importantes y siempre estoy disponible para preguntas.",
    },
    {
      icon: <CreditCard size={18} />,
      question: "¿Qué métodos de pago aceptas?",
      answer:
        "Acepto transferencias bancarias, PayPal y otros métodos de pago seguros. Podemos acordar un calendario de pagos basado en la duración y la complejidad del proyecto: normalmente un depósito inicial (30-50%) y saldo a la entrega; Para proyectos más largos, pagos intermedios vinculados a hitos. Todo se registra y documenta mediante facturación electrónica para total transparencia y seguridad.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Preguntas frecuentes
          </h1>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Todo lo que quieras saber sobre cómo trabajo, los servicios que
            ofrezco y cómo podemos colaborar.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-5 cursor-pointer transition hover:shadow-md animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 font-medium text-lg">
                    {/* Icono */}
                    <span className="flex items-center justify-center rounded-full border border-slate-200 bg-white p-2">
                      {faq.icon}
                    </span>

                    {faq.question}
                  </div>
                  <span
                    className={`flex items-center justify-center rounded-full border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-slate-100" : ""
                    }`}
                  >
                    <ChevronDown size={18} className="text-slate-600" />
                  </span>
                </div>

                {/* Contenido */}
                <div
                  className={`grid transition-all duration-300 text-justify ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 animate-fadeInUp">
          <div className="rounded-[2rem] border border-slate-200 p-8 sm:p-12 text-center bg-white shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              ¿No encontraste la respuesta que buscabas?
            </h3>

            <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Contáctame para una consulta gratuita y hablemos juntos de tu
              proyecto.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/services#contacto"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-medium transition hover:bg-slate-800 hover:-translate-y-0.5"
              >
                Contáctame ahora
              </a>
            </div>
          </div>
        </div>

        {/* Animaciones */}
        <style jsx>{`
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
