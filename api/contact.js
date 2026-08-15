/* global process, Buffer */
import nodemailer from "nodemailer";

const MAX_TOTAL_ATTACHMENT_BYTES = 2.5 * 1024 * 1024;
const validFormTypes = new Set(["contact", "admissions-enquiry", "application"]);

const labelFor = (key) =>
  String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^./, (character) => character.toUpperCase());

const safeText = (value, limit = 5000) =>
  String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, limit);

export const config = {
  api: {
    bodyParser: { sizeLimit: "4mb" },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { formType, fields = {}, attachments = [] } = req.body || {};
  if (!validFormTypes.has(formType) || !fields || typeof fields !== "object") {
    return res.status(400).json({ ok: false, error: "Invalid form submission." });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM;
  const recipient = process.env.FORM_TO_EMAIL || "admin@agsedu.org";

  if (!host || !user || !pass || !from) {
    console.error("Form mail is not configured: SMTP_HOST, SMTP_USER, SMTP_PASSWORD, and MAIL_FROM are required.");
    return res.status(503).json({ ok: false, error: "The mail service is not configured yet. Please contact the school office." });
  }

  const cleanedFields = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [safeText(key, 80), safeText(value)]),
  );
  const replyTo = cleanedFields.email || cleanedFields.parentEmail || undefined;
  if (replyTo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
  }

  let attachmentBytes = 0;
  const mailAttachments = [];
  for (const attachment of Array.isArray(attachments) ? attachments : []) {
    const filename = safeText(attachment?.filename, 160).replace(/[^a-zA-Z0-9._ -]/g, "_");
    const content = String(attachment?.content || "");
    const contentType = safeText(attachment?.contentType, 120) || "application/octet-stream";
    const bytes = Buffer.byteLength(content, "base64");

    if (!filename || !content || bytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return res.status(400).json({ ok: false, error: "One of the attachments is invalid or too large." });
    }

    attachmentBytes += bytes;
    if (attachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return res.status(400).json({ ok: false, error: "Attachments must total 2.5 MB or less." });
    }

    mailAttachments.push({ filename, content: Buffer.from(content, "base64"), contentType });
  }

  const subjectPrefix = {
    contact: "Website contact request",
    "admissions-enquiry": "Admissions enquiry",
    application: "Online application",
  }[formType];
  const applicant = cleanedFields.guardian || cleanedFields.guardianName || cleanedFields.name || cleanedFields.firstName;
  const text = [
    `${subjectPrefix} from the AGS website`,
    "",
    ...Object.entries(cleanedFields).map(([key, value]) => `${labelFor(key)}: ${value || "—"}`),
    ...(mailAttachments.length ? ["", `Attachments: ${mailAttachments.map(({ filename }) => filename).join(", ")}`] : []),
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to: recipient,
      replyTo,
      subject: applicant ? `${subjectPrefix}: ${applicant}` : subjectPrefix,
      text,
      attachments: mailAttachments,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Form mail delivery failed.", error);
    return res.status(502).json({ ok: false, error: "We could not send your form. Please try again later or contact the school office." });
  }
}
