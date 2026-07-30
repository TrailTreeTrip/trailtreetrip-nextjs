import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !service || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "TrailTreeTrip Website <noreply@send.trailtreetrip.com>",
      to: ["info@trailtreetrip.com"],
      replyTo: email || "info@trailtreetrip.com",
      subject: `New TrailTreeTrip enquiry: ${service}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send the enquiry email." },
        { status: 500 },
      );
    }
    if (email) {
  const { error: confirmationError } = await resend.emails.send({
    from: "TrailTreeTrip <noreply@send.trailtreetrip.com>",
    to: [email],
    replyTo: "info@trailtreetrip.com",
    subject: "We received your TrailTreeTrip enquiry",
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.7; max-width: 620px; margin: 0 auto;">
        <h2 style="color: #0f766e;">Thank you for contacting TrailTreeTrip</h2>

        <p>Dear ${escapeHtml(name)},</p>

        <p>
          We have successfully received your enquiry regarding
          <strong>${escapeHtml(service)}</strong>.
        </p>

        <p>
          Our team will review the information and contact you shortly using
          the phone number or email address provided.
        </p>

        <div style="background: #f1f5f9; padding: 18px; border-radius: 12px; margin: 24px 0;">
          <p style="margin: 0 0 8px;">
            <strong>Service:</strong> ${escapeHtml(service)}
          </p>

          <p style="margin: 0;">
            <strong>Your message:</strong><br>
            ${escapeHtml(message).replaceAll("\n", "<br>")}
          </p>
        </div>

        <p>
          For urgent assistance, call or WhatsApp us at
          <strong>+91 96637 42708</strong>.
        </p>

        <p>
          Regards,<br>
          <strong>TrailTreeTrip Travel & Visa Company</strong><br>
          Bengaluru, Karnataka<br>
          info@trailtreetrip.com
        </p>

        <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
          This is an automatic confirmation email. Please do not send sensitive
          passport, banking or payment information by replying to this message.
        </p>
      </div>
    `,
  });

  if (confirmationError) {
    console.error("Customer confirmation email error:", confirmationError);
  }
}

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Invalid enquiry request." },
      { status: 400 },
    );
  }
}