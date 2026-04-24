import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OG({
  searchParams,
}: {
  searchParams: { locale?: string };
}) {
  const locale = searchParams.locale || "es";

  const isEnglish = locale === "en";

  const title = isEnglish
    ? "Enrique Calvo Garcia | Web Developer in Mexico"
    : "Enrique Calvo Garcia | Desarrollador Web en México";

  const description = isEnglish
    ? "Portfolio of Enrique Calvo Garcia, developer of modern web and mobile applications."
    : "Portafolio de Enrique Calvo Garcia, desarrollador de aplicaciones web y móviles modernas.";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px",
        background: "linear-gradient(135deg, #000000, #111111)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: 64, marginBottom: 20 }}>{title}</h1>
        <p
          style={{
            fontSize: 32,
            opacity: 0.8,
            maxWidth: 700,
            lineHeight: 1.2,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <img
          src="https://enriquecalvo.site/images/contenido/avatar_SaludandoM.png"
          width={300}
          height={300}
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
