import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
       return NextResponse.json(
         { error: 'Faltan campos obligatorios.' },
         { status: 400 }
       );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "",
      to: process.env.CONTACT_EMAIL_TO || "",
      subject: `Mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });

    if (error) {
      console.error('Error al enviar email con Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Mensaje enviado con éxito', data: data }, { status: 200 });

  } catch (error) {
    console.error('Error en la API Route de contacto:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
