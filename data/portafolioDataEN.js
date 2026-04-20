export const portfolioDataEN = {
  projects: [
    {
      slug: "proyecto-05",
      title: "FixGo Android Application",
      description:
        "FixGo is a mobile application focused on hiring home services such as plumbing, electricity, painting, gardening, and general maintenance. Its goal is to connect clients with nearby providers in a fast, reliable, and organized way within a single platform. \n\n The system allows managing the entire hiring process, from searching for providers to service administration. During the development of the project, the provider and administrator modules were mainly implemented, establishing a solid and scalable foundation for future functionalities.",
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
          "User authentication via email and Google.",
          "Provider profile management, including personal data, offered services, availability, and work gallery.",
          "Search for nearby providers based on location, distance, and service category.",
          "Service request management, allowing accepting, rejecting, or sending counteroffers between client and provider.",
          "Admin panel with control over providers, metrics, and system configuration.",
          "Provider history and performance, including metrics and activity visualization.",
          "Management of active, completed, or canceled services within the platform.",
          "Cloud image storage for profiles, jobs, and services.",
          "Scalable architecture prepared to integrate future functionalities such as payments, messaging, and ratings.",
        ],
      },
    },

    {
      slug: "proyecto-04",
      title:
        "SafeBridge: Digital platform and intelligent system for real-time flood prevention in bridges",
      description:
        "SafeBridge is a web application that works as an intelligent digital platform for flood prevention in bridges through monitoring, analysis, and real-time response. Its main objective is to reduce risks, accidents, and human losses caused by rising water levels in critical road infrastructures. \n\n The platform integrates a sensor-based system that collects real-time data on bridge conditions. This information is processed and displayed within the web application, allowing users, authorities, and operators to make informed decisions immediately. \n\n Additionally, the web application offers an intuitive interface where data can be visualized, bridge status can be checked, alerts can be analyzed, and relevant weather information can be accessed, facilitating efficient risk management.",
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
          "The platform continuously collects data from IoT sensors to detect changes in water levels and critical environmental conditions.",
          "When a risk is detected, the system sends immediate notifications to users and authorities, enabling a fast and coordinated response.",
          "Includes dashboards with interactive charts and real-time weather data, facilitating analysis of the current situation.",
          "Allows searching, filtering, and querying bridges by name, location, or status (active, inactive, or under repair).",
          "Stores past events for pattern analysis, helping improve future prevention strategies.",
          "The web application handles different user types: Administrator, Operator, Guest. Each with specific permissions, ensuring security and control of information.",
          "Allows any user to access relevant information without registration, promoting transparency.",
          "The system can activate automatic barriers and physical alarms on bridges to prevent passage in risky situations.",
        ],
      },
    },

    {
      slug: "proyecto-03",
      title:
        "Energ-X: digital platform for monitoring and managing energy consumption",
      description:
        "Energ-X is a web application focused on intelligent energy consumption monitoring. The platform is designed to record, organize, and visualize information about devices, areas, and buildings, aiming to help better manage energy usage. \n\nIt also includes authentication modules, dashboards, and graphical visualizations that allow viewing estimated consumption, billing, CO2e emissions, and historical evolution.",
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
          "Presents an informative web application with homepage, mission, vision, offerings, and an “About Us” section.",
          "Allows user registration, login, and management with validated forms and error handling through modals.",
          "Includes an admin panel to view available areas and access energy monitoring.",
          "Allows registering devices associated with areas and buildings within the platform.",
          "Displays a panel per building and area to navigate monitored spaces.",
          "Visualizes energy consumption with charts and meters using dynamic components.",
          "Calculates useful indicators such as weekly billing, consumption per m², and CO2e emissions per m²",
          "Integrates visual recommendations and energy-saving messages to promote efficient energy use.",
        ],
      },
    },

    {
      slug: "proyecto-02",
      title: "SVARC: Artificial Vision System for Competition Robots",
      description:
        "SVARC is an autonomous mobile robot designed to identify objects in real time using computer vision, color segmentation, and sensors. The system captures images with an ESP32-S3-WROOM CAM camera, sends them via UDP to a computer for processing, and based on detection and estimated distance to the target, decides movements such as moving forward, turning, or stopping.\n\n Additionally, it integrates a 3D-printed chassis, four-wheel drive, infrared and distance sensors, and a microcontroller-based control system to operate in competitive environments.",
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
          "Automatically detects objects using computer vision and color segmentation.",
          "Calculates the distance to the object in real time to decide the robot's action.",
          "Transmits fragmented images via UDP for processing on a computer.",
          "Executes autonomous movement with decisions such as moving forward, turning left, turning right, or stopping upon reaching the target.",
          "Integrates distance and infrared sensors to improve navigation and environment detection.",
          "Uses a visual interface to monitor detection, object contour, and estimated distance.",
          "Built on a modular physical platform with a 3D chassis, four-wheel drive, and microcontroller control.",
        ],
      },
    },
  ],

  hackathons: [
    {
      slug: "hackathon-01",
      title: "Third place in Hackatec 2024 National stage.",
      fecha: "Date: November 19 – 22, 2024.",
      organizador: "Organizer: Instituto Tecnológico de Colima.",
      description:
        "Participation in the Technological Development, Entrepreneurship, and Innovation Summit (InnovaTECNM 2024) during the HackaTec 2024 National Stage event. I developed together with the DevG team a solution through web development that achieved 3rd place in the national stage of the HackaTec event. I participated in the design, development, and presentation of the project.",
      images: ["/images/hackathons/hackathon-1.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/share/p/1Nx683bKnT/",
            cuenta: "Instituto Tecnológico de Cuautla",
          },
          {
            url: "https://www.facebook.com/photo/?fbid=1026545432607893&set=pcb.1026549235940846",
            cuenta: "Tecnológico Nacional de México",
          },
          {
            url: "https://www.facebook.com/watch/?v=579932787755487&rdid=WEtYRd2u2w1UaUSL",
            cuenta: "Tecnológico Nacional de México",
          },
        ],
      },
    },

    {
      slug: "hackathon-02",
      title: "Second place in Hackatec 2024 Regional stage.",
      fecha: "Date: September 10 – 13, 2024.",
      organizador: "Organizer: Instituto Tecnológico del Valle de Oaxaca.",
      description:
        "Participation in the Technological Development, Entrepreneurship, and Innovation Summit (InnovaTECNM 2024) during the HackaTec 2024 Regional Stage event. As part of the DevG team, a web solution was implemented that achieved 2nd place in the regional stage of HackaTec. I participated in front-end and back-end development, contributing to the construction of the application and its functional logic.",
      images: ["/images/hackathons/hackathon-2.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: true,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/photo.php?fbid=941729371327172&set=a.570632155103564&type=3",
            cuenta: "TecNM Campus Valle de Oaxaca",
          },
          {
            url: "https://www.facebook.com/photo.php?fbid=845415721128657&set=a.558799416456957&type=3",
            cuenta: "Instituto Tecnológico de Cuautla",
          },
          {
            url: "https://www.facebook.com/photo/?fbid=944591331040976&set=pcb.944602304373212",
            cuenta: "TecNM Campus Valle de Oaxaca",
          },
        ],
      },
    },

    {
      slug: "hackathon-03",
      title: "Participation in Hackathon Morelos 13th Edition.",
      fecha: "Date: May 16 – 18, 2024",
      organizador: "Organizer: Tecnológico de Monterrey Campus Cuernavaca",
      description:
        "In Hackathon Morelos (13th edition) the project received the award for Best Auth0 Application due to the implemented integration/security. I participated in development and authentication integration.",
      images: ["/images/hackathons/hackathon-3.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: false,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/photo.php?fbid=979056764222875&set=a.978758177586067&type=3",
            cuenta: "Hackathon Morelos",
          },
          {
            url: "https://www.facebook.com/share/p/1Gp3TbXerr/",
            cuenta: "Instituto Tecnológico de Cuautla",
          },
          {
            url: "https://www.facebook.com/photo.php?fbid=979027164225835&set=a.978758177586067&type=3",
            cuenta: "Hackathon Morelos",
          },
        ],
      },
    },

    {
      slug: "hackathon-04",
      title: "Participation in Hackathon Morelos 12th Edition.",
      fecha: "Date: October 6 – 7, 2023",
      organizador: "Organizer: Tecnológico de Monterrey Campus Cuernavaca",
      description:
        "I participated in Hackathon Morelos (12th edition) where the project obtained the awards Best Use of Google Cloud and Best Domain Name (GoDaddy Registry). I contributed to technical implementation and deployment.",
      images: ["/images/hackathons/hackathon-4.jpg"],
      documentacionUrl: "#",
      botonDocumentacion: false,
      details: {
        technologies: ["Next.js", "Postgres", "Redis"],
        features: [
          {
            url: "https://www.facebook.com/share/p/17HT4P9auR/",
            cuenta: "Hackathon Morelos",
          },
          {
            url: "https://www.facebook.com/photo/?fbid=641987271471504&set=pcb.641988208138077",
            cuenta: "Instituto Tecnológico de Cuautla",
          },
        ],
      },
    },
  ],
};
