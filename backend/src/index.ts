import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg"; // PostgreSQL
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool
// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
// });
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // false for 587, true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
// SendGrid setup
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}
app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: subject || `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || "N/A"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Message sent successfully 🚀",
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.status(500).json({
      error: "Failed to send email",
    });
  }
});
