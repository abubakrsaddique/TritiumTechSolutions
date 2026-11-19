import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Single-line text for headers and subjects: no line breaks or angle brackets. */
function oneLine(value: string): string {
  return value.replace(/[\r\n"<>]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real visitors never fill this in. Pretend success so bots move on.
  if (text(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: text(body.name, 80),
    email: text(body.email, 120),
    company: text(body.company, 80),
    service: text(body.service, 60),
    budget: text(body.budget, 40),
    message: text(body.message, 4000),
  };

  if (lead.name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 },
    );
  }
  if (!EMAIL_PATTERN.test(lead.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (lead.message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please tell us a little more about your project." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;

  // Never pretend a message was sent when email is not set up.
  if (!user || !pass || !to) {
    console.error(
      "[contact] Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our contact form is not available right now. Please email us directly.",
      },
      { status: 500 },
    );
  }

  const name = oneLine(lead.name);
  const subject = `New enquiry from ${name}${lead.service ? ` - ${oneLine(lead.service)}` : ""}`;

  const plain = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "-"}`,
    `Service: ${lead.service || "-"}`,
    `Budget: ${lead.budget || "-"}`,
    "",
    "Message:",
    lead.message,
  ].join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#667;white-space:nowrap">${label}</td><td style="padding:6px 0"><strong>${escapeHtml(value || "-")}</strong></td></tr>`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111;max-width:640px">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table style="border-collapse:collapse">
        ${row("Name", lead.name)}
        ${row("Email", lead.email)}
        ${row("Company", lead.company)}
        ${row("Service", lead.service)}
        ${row("Budget", lead.budget)}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.55;margin:0">${escapeHtml(lead.message)}</p>
      <p style="margin-top:28px;color:#667;font-size:13px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Tritium Website" <${user}>`,
      to,
      replyTo: `"${name}" <${lead.email}>`,
      subject,
      text: plain,
      html,
    });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your message right now. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
