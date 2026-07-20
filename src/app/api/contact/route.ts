import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // swap for your verified domain later
            to: process.env.CONTACT_EMAIL_TO!,
            replyTo: email,
            subject: `Pesan baru dari ${name}`,
            text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
    }
}
