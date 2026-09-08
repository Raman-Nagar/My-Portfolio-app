"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE || "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const safeMessage = escapeHtml(message);
  const safeEmail = escapeHtml(senderEmail);

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: "Message from portfolio contact form",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h4>New message from your portfolio site</h4>
        <p>${safeMessage}</p>
        <hr />
        <p>The sender's email is: ${safeEmail}</p>
      </div>`,
    });
    return { data: "Email sent successfully" };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
