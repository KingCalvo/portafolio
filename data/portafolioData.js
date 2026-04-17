export const portfolioData = {
  projects: [
    {
      slug: "proyecto-05",
      title: "Aplicación Android FixGo",
      description:
        "FixGo es una aplicación móvil enfocada en la contratación de servicios a domicilio, como plomería, electricidad, pintura, jardinería y mantenimiento general. Su objetivo es conectar a clientes con proveedores cercanos de manera rápida, confiable y organizada dentro de una sola plataforma. \n\n El sistema permite gestionar todo el proceso de contratación, desde la búsqueda de proveedores hasta la administración de servicios. Dentro del desarrollo del proyecto, se implementaron principalmente los módulos de proveedor y administrador, estableciendo una base sólida y escalable para futuras funcionalidades.",
      images: ["/images/projects/project-1.jpg"],
      liveDemo: "#",
      githubUrl: "https://github.com/KingCalvo/FixGo",
      documentacionUrl: "#",
      botonDocumentacion: false,
      botonDemo: false,
      botonGit: true,
      featuresHeight: 400,
      details: {
        technologies: [
          "Flutter",
          "Dart",
          "Supabase",
          "Firebase",
          "Clean Architecture",
          "PostgreSQL",
          "OpenStreetMap",
          "Flutter Map",
        ],

        features: [
          "Autenticación de usuarios mediante correo electrónico y Google.",
          "Gestión de perfiles de proveedores, incluyendo datos personales, servicios ofrecidos, disponibilidad y galería de trabajos.",
          "Búsqueda de proveedores cercanos, basada en ubicación, distancia y categoría de servicio.",
          "Gestión de solicitudes de servicio, permitiendo aceptar, rechazar o enviar contrapropuestas entre cliente y proveedor.",
          "Panel de administrador, con control sobre proveedores, métricas y configuración del sistema.",
          "Historial y desempeño del proveedor, incluyendo métricas y visualización de actividad.",
          "Gestión de servicios activos, finalizados o cancelados dentro de la plataforma.",
          "Almacenamiento de imágenes en la nube, para perfiles, trabajos y servicios.",
          "Arquitectura escalable, preparada para integrar futuras funcionalidades como pagos, mensajería y calificaciones.",
        ],
      },
    },

    {
      slug: "proyecto-04",
      title:
        "SafeBridge: Plataforma digital y sistema inteligente para la prevención de inundaciones en puentes en tiempo real",
      description:
        "SafeBridge es una aplicación web que funciona como una plataforma digital inteligente para la prevención de inundaciones en puentes mediante el monitoreo, análisis y respuesta en tiempo real. Su objetivo principal es reducir riesgos, accidentes y pérdidas humanas ocasionadas por el incremento del nivel del agua en infraestructuras viales críticas. \n\n La plataforma integra un sistema basado en sensores que recopilan datos en tiempo real sobre el estado de los puentes. Esta información es procesada y visualizada dentro de la aplicación web, permitiendo a usuarios, autoridades y operadores tomar decisiones informadas de manera inmediata. \n\n Además, la aplicación web ofrece una interfaz intuitiva donde se pueden visualizar datos, consultar el estado de los puentes, analizar alertas y acceder a información meteorológica relevante, facilitando la gestión eficiente de situaciones de riesgo.",
      images: ["/images/projects/project-2.jpg"],
      liveDemo: "https://safe-bridge-eight.vercel.app/",
      githubUrl: "https://github.com/KingCalvo/SafeBridge",
      documentacionUrl: "#",
      botonDocumentacion: false,
      botonDemo: true,
      botonGit: true,
      featuresHeight: 700,
      details: {
        technologies: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "Open-Meteo",
          "Vite",
        ],
        features: [
          "La plataforma recopila datos constantemente desde sensores IoT para detectar cambios en el nivel del agua y condiciones ambientales críticas.",
          "Cuando se detecta un riesgo, el sistema envía notificaciones inmediatas a usuarios y autoridades, permitiendo una reacción rápida y coordinada.",
          "Incluye dashboards con gráficos interactivos y datos meteorológicos en tiempo real, facilitando el análisis de la situación actual.",
          "Permite consultar, filtrar y buscar puentes por nombre, ubicación o estado (activo, inactivo o en reparación).",
          "Almacena eventos pasados para análisis de patrones, ayudando a mejorar estrategias de prevención futuras.",
          "La aplicación web maneja distintos tipos de usuario: Administrador, Operador, Invitado. Cada uno con permisos específicos, garantizando seguridad y control de la información.",
          "Permite a cualquier usuario consultar información relevante sin necesidad de registro, promoviendo transparencia.",
          "El sistema puede activar barreras automáticas y alarmas físicas en los puentes para evitar el paso en situaciones de riesgo.",
        ],
      },
    },

    {
      slug: "proyecto-03",
      title:
        "Energ-X: plataforma digital para el monitoreo y gestión del consumo energético",
      description:
        "Energ-X es una aplicación web orientada al monitoreo inteligente del consumo energético. La plataforma está diseñada para registrar, organizar y visualizar información de dispositivos, áreas y edificios, con el objetivo de ayudar a administrar mejor el uso de la energía. \n\nTambién incluye módulos de autenticación, paneles de control y visualizaciones gráficas que permiten consultar consumo estimado, facturación, emisiones de CO2e y evolución histórica.",
      images: [
        "/images/projects/chivalry.jpg",
        "/images/projects/prueba.jpg",
        "/images/projects/prueba2.png",
      ],
      liveDemo: "https://energ-x.vercel.app/",
      githubUrl: "https://github.com/KingCalvo/EnergX",
      documentacionUrl: "#",
      botonDocumentacion: false,
      botonDemo: true,
      botonGit: true,
      featuresHeight: 350,
      details: {
        technologies: [
          "Astro",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "PostgreSQL",
          "supabase",
        ],
        features: [
          "Presenta una aplicación web informativa con portada, misión, visión, oferta y sección “Sobre Nosotros”.",
          "Permite registro, inicio de sesión y gestión de usuarios con formularios validados y manejo de errores mediante modales.",
          "Incluye un panel administrativo para visualizar áreas disponibles y acceder al seguimiento energético.",
          "Permite registrar dispositivos asociados a áreas y edificios dentro de la plataforma.",
          "Muestra un panel por edificio y área para navegar entre los espacios monitoreados.",
          "Visualiza consumo energético con gráficas y medidores usando componentes dinámicos.",
          "Calcula indicadores útiles como facturación semanal, consumo por m² y emisiones de CO2e por m²",
          "Integra recomendaciones visuales y mensajes de ahorro energético para reforzar el uso eficiente de la energía.",
        ],
      },
    },

    {
      slug: "proyecto-02",
      title: "SVARC: Sistema de Visión Artificial para Robots de Competencia",
      description:
        "SVARC es un robot móvil autónomo diseñado para identificar objetos en tiempo real mediante visión artificial, segmentación por color y sensores. El sistema captura imágenes con una cámara ESP32-S3-WROOM CAM, las envía por UDP a una computadora para su procesamiento y, con base en la detección y la distancia estimada al objetivo, decide movimientos como avanzar, girar o detenerse.\n\n Además, integra un chasis impreso en 3D, tracción de cuatro ruedas, sensores infrarrojos y de distancia, y un sistema de control basado en microcontroladores para operar en escenarios de competencia.",
      images: ["/images/projects/project-3.jpg"],
      liveDemo: "#",
      githubUrl: "#",
      documentacionUrl:
        "https://drive.google.com/drive/folders/1xBUzKZmBJ2BKnlDzAJV903BOCqymH9uk?usp=sharing",
      botonDocumentacion: true,
      botonDemo: false,
      botonGit: false,
      featuresHeight: 350,
      details: {
        technologies: [
          "Python",
          "TensorFlow",
          "OpenCV",
          "YOLO",
          "Arduino IDE",
          "Thonny",
          "Proteus",
        ],
        features: [
          "Detecta objetos de forma automática mediante visión artificial y segmentación por color.",
          "Calcula la distancia al objeto en tiempo real para decidir la acción del robot.",
          "Transmite imágenes fragmentadas por UDP para procesarlas en una computadora.",
          "Ejecuta movimiento autónomo con decisiones como avanzar, girar a la izquierda, girar a la derecha o detenerse al alcanzar el objetivo.",
          "Integra sensores de distancia e infrarrojos para mejorar la navegación y la detección del entorno.",
          "Usa una interfaz visual para monitorear la detección, el contorno del objeto y la distancia estimada.",
          "Está construido sobre una plataforma física modular con chasis 3D, tracción de cuatro ruedas y control microcontrolado.",
        ],
      },
    },

    {
      slug: "proyecto-01",
      title: "Proyecto 01",
      description: "Descripción corta del proyecto.",
      images: ["/images/projects/project-5.jpg"],
      liveDemo: "#",
      githubUrl: "#",
      documentacionUrl: "#",
      botonDocumentacion: false,
      botonDemo: true,
      botonGit: true,
      featuresHeight: 350,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: ["Característica 1", "Característica 2", "Característica 3"],
      },
    },
  ],

  hackathons: [
    {
      slug: "hackathon-01",
      title: "Tercer lugar en Hackatec 2024 etapa Nacional.",
      fecha: "Fecha: 19 – 22 noviembre de 2024.",
      organizador: "Organizador: Instituto Tecnológico de Colima.",
      description:
        "Participación en la Cumbre de Desarrollo Tecnológico, Emprendimiento e Innovación (InnovaTECNM 2024) durante el evento HackaTec 2024 Etapa Nacional. Desarrollé junto al equipo DevG una solución mediante desarrollo web que obtuvo el 3.º lugar en la etapa Nacional del evento HackaTec. Participé en el diseño, desarrollo y presentación del proyecto.",
      images: ["/images/hackathons/hackathon-1.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/post1",
            cuenta: "Instituto Tecnológico de Colima",
          },
          {
            url: "https://www.facebook.com/post2",
            cuenta: "InnovaTECNM Oficial",
          },
          {
            url: "https://www.facebook.com/post3",
            cuenta: "HackaTec 2024",
          },
        ],
      },
    },
    {
      slug: "hackathon-02",
      title: "Segundo Lugar en Hackatec 2024 etapa Regional.",
      fecha: "Fecha: 10 – 13 septiembre de 2024.",
      organizador: "Organizador: Instituto Tecnológico del Valle de Oaxaca.",
      description:
        "Participación en la Cumbre de Desarrollo Tecnológico, Emprendimiento e Innovación (InnovaTECNM 2024) durante el evento HackaTec 2024 Etapa Regional. Como parte del equipo DevG, se implementó una solución web que obtuvo el 2.º lugar en la etapa regional de HackaTec. Participé en el desarrollo front-end y back-end, contribuyendo a la construcción de la aplicación y su lógica funcional.",
      images: ["/images/projects/chivalry.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/post1",
            cuenta: "Instituto Tecnológico de Colima",
          },
          {
            url: "https://www.facebook.com/post2",
            cuenta: "InnovaTECNM Oficial",
          },
          {
            url: "https://www.facebook.com/post3",
            cuenta: "HackaTec 2024",
          },
        ],
      },
    },
    {
      slug: "hackathon-03",
      title: "Participación en el Hackathon Morelos 13a Edición.",
      fecha: "Fecha: 16 – 18 mayo de 2024",
      organizador: "Organizador: Tecnológico de Monterrey Campus Cuernavaca",
      description:
        "En el Hackathon Morelos (13ª edición) el proyecto recibió el premio a Mejor Aplicación Auth0 por la integración/seguridad implementada. Participé en el desarrollo y en la integración de autenticación.",
      images: ["/images/hackathons/hackathon-3.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/post1",
            cuenta: "Instituto Tecnológico de Colima",
          },
          {
            url: "https://www.facebook.com/post2",
            cuenta: "InnovaTECNM Oficial",
          },
          {
            url: "https://www.facebook.com/post3",
            cuenta: "HackaTec 2024",
          },
        ],
      },
    },
    {
      slug: "hackathon-04",
      title: "Participación en el Hackathon Morelos 12a Edición.",
      fecha: "Fecha: 6 – 7 octubre de 2023",
      organizador: "Organizador: Tecnológico de Monterrey Campus Cuernavaca",
      description:
        "Participé en el Hackathon Morelos (12ª edición) donde el proyecto obtuvo los premios Best Use of Google Cloud y Best Domain Name (GoDaddy Registry). Contribuí en la implementación técnica y despliegue.",
      images: ["/images/hackathons/hackathon-4.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/post1",
            cuenta: "Instituto Tecnológico de Colima",
          },
          {
            url: "https://www.facebook.com/post2",
            cuenta: "InnovaTECNM Oficial",
          },
          {
            url: "https://www.facebook.com/post3",
            cuenta: "HackaTec 2024",
          },
        ],
      },
    },
  ],
};
