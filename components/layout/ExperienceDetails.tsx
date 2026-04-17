"use client";

import { useState } from "react";

export default function ExperienceDetails() {
  const [open, setOpen] = useState(false);

  const items = [
    "Participé en el diseño UI/UX del producto utilizando Figma, colaborando en la definición de flujos, pantallas y experiencia del usuario.",
    "Participe en el diseño e implementación de la arquitectura de software aplicando Clean Architecture en Flutter/Dart, asegurando una correcta separación de responsabilidades y escalabilidad del sistema.",
    "Desarrollé el Módulo Proveedor, permitiendo a los proveedores gestionar su perfil, administrar servicios activos, visualizar solicitudes, subir evidencias de trabajos realizados mediante imágenes, consultar su historial y visualizar métricas a través de gráficas.",
    "Desarrollé el Módulo Administrador, enfocado en la supervisión general del sistema, gestión de usuarios y proveedores, control de servicios, generación de reportes en PDF, visualización de estadísticas y monitoreo del funcionamiento de la plataforma.",
    "Implementé autenticación de usuarios, manejo de roles y control de acceso dentro de la aplicación.",
    "Integré mapas y geolocalización para la visualización de proveedores y servicios disponibles, mejorando la experiencia del usuario.",
    "Colaboré en el despliegue para pruebas piloto, optimización de rendimiento y corrección de incidencias detectadas durante la validación del sistema.",
  ];

  return (
    <div className="mt-7">
      <h5 className="text-sm font-semibold text-slate-800 mb-2">
        Responsabilidades y logros
      </h5>

      <div className="flex items-start gap-3">
        <span className="text-sky-500 mt-1">✔</span>

        <p className="text-sm leading-7 text-slate-600 text-start lg:text-justify">
          Participé en el desarrollo end-to-end del proyecto FixGo (App
          Android), transformando una idea de negocio en un producto funcional
          orientado a la gestión de servicios.
        </p>
      </div>

      {/* Solo cuando está cerrado */}
      {!open && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-2.5 text-sm font-medium text-sky-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md cursor-pointer"
          >
            Ver más
            <span className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </button>
        </div>
      )}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">✔</span>
              <p className="text-sm leading-7 text-slate-600 text-start lg:text-justify">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Cuando está abierto) */}
        {open && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setOpen(false)}
              className="group relative inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-2.5 text-sm font-medium text-sky-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md cursor-pointer"
            >
              Ver menos
              <span className="transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
