import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { error: "Missing Brevo configuration" },
        { status: 500 },
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "ToeTat Solution Hub", email: contactEmail },
        to: [{ email: contactEmail }],
        replyTo: { name, email },
        subject: `New Contact from ${name}`,
        htmlContent: [
          "<h2>New Contact Form Submission</h2>",
          `<p><strong>Name:</strong> ${name}</p>`,
          `<p><strong>Email:</strong> ${email}</p>`,
          `<p><strong>Message:</strong></p>`,
          `<p>${message.replace(/\n/g, "<br>")}</p>`,
        ].join(""),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      return NextResponse.json(
        { error: data.message || "Brevo rejected the request" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
