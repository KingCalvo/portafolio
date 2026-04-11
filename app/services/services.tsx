"use client";

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    servicio: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError("");
    setSuccess("");

    if (name === "nombre" || name === "apellidos") {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) return;
    }

    if (name === "telefono") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!form.nombre.trim())
      return setError("El nombre es obligatorio y solo debe contener letras.");

    if (!form.apellidos.trim())
      return setError(
        "Los apellidos son obligatorios y solo deben contener letras.",
      );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.correo))
      return setError("Ingresa un correo electrónico válido.");

    if (!/^\d{10}$/.test(form.telefono))
      return setError("El teléfono debe tener exactamente 10 dígitos.");

    if (!form.servicio) return setError("Selecciona un servicio.");

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess("Tu mensaje fue enviado correctamente 🚀");

      setForm({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        servicio: "",
      });
    } catch (err) {
      setError("Error al enviar el formulario.");
      setLoading(false);
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-white text-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Transformo ideas en Realidad digital.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
            Diseñador y desarrollador web. Ofrezco soluciones completas para
            hacer realidad tus ideas digitales, desde páginas de destino
            sencillas hasta proyectos complejos con inteligencia artificial y
            gamificación.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1 */}
          <article className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Badge */}
            <span className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Destacado
            </span>

            {/* Imagen */}
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Sitios web</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Creo sitios web modernos y responsivos, desde páginas de destino
                sencillas hasta sitios completos con todas las funciones que
                necesitas. Diseño personalizado, optimización SEO y excelente
                rendimiento.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Aplicaciones web y PWA</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Desarrollo aplicaciones web personalizadas y Aplicaciones Web
                Progresivas (PWA): desde paneles de control empresariales hasta
                plataformas complejas, hasta aplicaciones instalables en
                cualquier dispositivo, funcionando incluso offline.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Integraciones con IA</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Integro inteligencia artificial en tus proyectos para
                automatizar procesos, mejorar la experiencia del usuario y crear
                soluciones innovadoras. Chatbots, análisis de datos,
                automatización inteligente.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Sitio Web Básico</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Este es el plan perfecto para crear un sitio rápido y con todo
                lo necesario. Ideal para eventos, productos únicos o esa gran
                idea que no puede esperar más. Comienza con un sitio básico,
                siempre hay tiempo para crecer.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Diseño UX</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Definimos y validamos tu producto antes de desarrollarlo.
                Realizamos product discovery y prototipos en baja y alta
                definición para probar ideas, optimizar flujos y reducir errores
                desde el inicio.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-100" />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Metaverso</h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                Creo servidores personalizados de Minecraft, Roblox y Hytale
                para marcas y particulares. Experiencias virtuales
                personalizadas, configuración completa, plugins personalizados y
                gestión dedicada para tu mundo virtual.
              </p>

              <div className="mt-auto pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Descubre más
                  <IoArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
        {/* Contacto */}
        <div id="contacto" className="mt-24">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-semibold tracking-tight">
                Hablemos de tu proyecto
              </h2>

              <p className="mt-4 text-slate-500 text-justify">
                Rellena el formulario para ser contactado o escribe directamente
                por WhatsApp. Normalmente respondo en menos de 24 horas
                laborales.
              </p>

              {/* Botones */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/7351241139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
                >
                  <FaWhatsapp size={24} />
                  WhatsApp
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=enriquecalvo.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EA4335] px-6 py-3 text-white font-bold shadow-md transition hover:-translate-y-0.5 hover:bg-[#C5221F] hover:shadow-lg"
                >
                  <SiGmail size={16} />
                  Gmail
                </a>
              </div>

              {/* Inputs */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600 pb-2">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Escribe tu nombre"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 pb-2">
                    Apellidos
                  </label>
                  <input
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    placeholder="Escribe tu apellido"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 pb-2">
                  Correo electrónico
                </label>
                <input
                  name="correo"
                  value={form.correo}
                  onChange={(e) => {
                    setError("");
                    setSuccess("");
                    setForm({ ...form, correo: e.target.value });
                  }}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 pb-2">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="7351241139"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 pb-2">
                  Servicio
                </label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={(e) => {
                    setError("");
                    setSuccess("");
                    setForm({ ...form, servicio: e.target.value });
                  }}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-500 cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccione un servicio</option>
                  <option>Sitios web</option>
                  <option>Aplicaciones web y PWA</option>
                  <option>Integraciones con IA</option>
                  <option>Sitio web básico</option>
                  <option>Diseño UX</option>
                  <option>Metaverso</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`mt-6 w-full rounded-xl py-4 text-white font-semibold transition cursor-pointer
                  ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                `}
              >
                {loading ? "Enviando..." : "Enviar solicitud"}
              </button>
              {/* Mensajes */}
              {error && (
                <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
              )}

              {success && (
                <p className="text-green-600 text-sm mt-4 text-center font-medium">
                  {success}
                </p>
              )}
            </div>

            {/* Lado derecho */}
            <div className="space-y-6 animate-fadeInUp delay-100">
              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-semibold">Preguntas frecuentes</h3>

                <div className="mt-6 space-y-3 text-justify">
                  {[
                    {
                      question:
                        "¿Cómo se gestiona la comunicación durante el proyecto?",
                      answer:
                        "La comunicación es una prioridad para mí: te mantengo informado con actualizaciones periódicas de progreso (semanales o según prefieras). Nos mantenemos en contacto por correo electrónico, chat o videollamadas. Te involucro en decisiones importantes y siempre estoy disponible para preguntas.",
                    },
                    {
                      question: "¿Qué métodos de pago aceptas?",
                      answer:
                        "Acepto transferencias bancarias, PayPal y otros métodos de pago seguros. Podemos acordar un calendario de pagos basado en la duración y la complejidad del proyecto: normalmente un depósito inicial (30-50%) y saldo a la entrega; Para proyectos más largos, pagos intermedios vinculados a hitos. Todo se registra y documenta mediante facturación electrónica para total transparencia y seguridad.",
                    },
                    {
                      question: "¿Trabajas con presupuestos limitados?",
                      answer:
                        "Sí, puedo adaptar soluciones a tu presupuesto. Podemos empezar con un MVP (Producto Mínimo Viable) que incluya características esenciales y luego escalar gradualmente según los resultados y tus necesidades. También ofrezco soluciones modulares que permiten añadir funciones a lo largo del tiempo, para que puedas invertir progresivamente. Lo importante es definir las prioridades juntos.",
                    },
                  ].map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        onClick={() => toggle(index)}
                        className="group rounded-xl border border-slate-200 p-4 cursor-pointer transition hover:shadow-sm"
                      >
                        <div className="flex justify-between items-center font-medium">
                          {faq.question}

                          <span
                            className={`flex items-center justify-center rounded-full border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 ${
                              isOpen ? "rotate-180 bg-slate-100" : ""
                            }`}
                          >
                            <ChevronDown size={16} className="text-slate-600" />
                          </span>
                        </div>

                        <div
                          className={`grid transition-all duration-300 ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-3"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-sm text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <a href="/faq" className="mt-4 ml-1 inline-block text-blue-600">
                  Consulta todas las preguntas frecuentes →
                </a>
              </div>

              {/* Donde trabajo */}
              <div className="rounded-2xl border border-slate-200 p-6">
                <h4 className="text-lg font-semibold">Dónde trabajo</h4>
                <p className="mt-2 text-sm text-slate-500">
                  Trabajo de forma remota y puedo colaborar en proyectos
                  nacionales e internacionales.
                </p>
              </div>

              {/* Horario */}
              <div className="rounded-2xl border border-slate-200 p-6">
                <h4 className="text-lg font-semibold">Horario de trabajo</h4>

                <div className="mt-3 text-sm text-slate-500 space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - viernes</span>
                    <span>09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Internacional</span>
                    <span>Flexible</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado - domingo</span>
                    <span>Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Teléfono:</span>{" "}
                    <span>+52 735 124 1139</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animaciones */}
        <style jsx>{`
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease both;
          }

          .delay-100 {
            animation-delay: 0.1s;
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
