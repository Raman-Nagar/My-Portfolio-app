"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE || "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: senderEmail,
      subject: "Message from porfolio contact form",
      // html: React.createElement(ContactFormEmail, {
      //   message: message,
      //   senderEmail: senderEmail,
      // }),
      html: `<div>
      <h4>New message from your portfolio site</h4>
          <div>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <h5 className="leading-tight">
                You received the following message from the contact form
              </h5>
              <p>${message}</p>
              <hr />
              <p>The sender's email is: ${senderEmail}</p>
            </Section>
          </div>
    </div>`
    });
    return { error: "" }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
