import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, apellidos, correo, telefono, servicio } = body;

    if (!nombre || !apellidos || !correo || !telefono || !servicio) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 },
      );
    }

    // Guardar en Supabase
    const { error } = await supabaseAdmin
      .from("contactos")
      .insert([{ nombre, apellidos, correo, telefono, servicio }]);

    if (error) throw error;

    // Email a mi
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["enriquecalvo75@gmail.com", "enriquecalvo.dev@gmail.com"],
      subject: "Nuevo cliente potencial 🚀",
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
        <p><strong>Email:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
      `,
    });

    // Email al cliente
    try {
      await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: correo,
        subject: "Recibimos tu solicitud 👋",
        html: `<p>Gracias ${nombre}, te responderé pronto.</p>`,
      });
    } catch (e) {
      console.error("Error email cliente:", e);
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error(err);

    return NextResponse.json(
      { error: "Error al procesar solicitud" },
      { status: 500 },
    );
  }
}
