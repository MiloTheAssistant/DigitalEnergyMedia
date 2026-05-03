"use server";

import { redirect } from "next/navigation";
import { formDataToLeadInput, validateLeadInput } from "@/lib/lead";
import { sendGraphMail } from "@/lib/microsoft-graph-mail";
import { siteConfig } from "@/lib/site-config";

export type LeadFormState = {
  status: "idle" | "error";
  message?: string;
  errors?: Record<string, string>;
};

function leadEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}) {
  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "Not provided"],
    ["Website", data.website || "Not provided"],
    ["Service", data.service],
    ["Budget", data.budget || "Not provided"],
    ["Timeline", data.timeline || "Not provided"],
    ["Message", data.message],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <h1 style="font-size: 22px;">New Digital Energy Media inquiry</h1>
      <p>A visibility request was submitted from ${siteConfig.url}.</p>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: 700; width: 150px;">${escapeHtml(label)}</td>
                <td style="border: 1px solid #e5e7eb; padding: 10px; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function submitLeadInquiry(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const validation = validateLeadInput(formDataToLeadInput(formData));

  if (!validation.ok) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: validation.errors,
    };
  }

  const to = process.env.LEAD_TO_EMAIL || siteConfig.email;

  if (
    !process.env.MS_TENANT_ID ||
    !process.env.MS_CLIENT_ID ||
    !process.env.MS_CLIENT_SECRET ||
    !process.env.MS_FROM_EMAIL
  ) {
    return {
      status: "error",
      message:
        "The inquiry form is not configured yet. Please email Contact@DigitalEnergyMedia.Com directly.",
    };
  }

  const data = validation.data;

  try {
    await sendGraphMail({
      to,
      replyTo: data.email,
      subject: `New DEM visibility inquiry: ${data.service}`,
      html: leadEmailHtml(data),
    }, {
      tenantId: process.env.MS_TENANT_ID,
      clientId: process.env.MS_CLIENT_ID,
      clientSecret: process.env.MS_CLIENT_SECRET,
      fromEmail: process.env.MS_FROM_EMAIL,
    });
  } catch (error) {
    console.error("Lead inquiry mail failed", error);

    return {
      status: "error",
      message:
        "The inquiry could not be sent. Please email Contact@DigitalEnergyMedia.Com directly.",
    };
  }

  redirect("/thank-you");
}
