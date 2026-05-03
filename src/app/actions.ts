"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
import { formDataToLeadInput, validateLeadInput } from "@/lib/lead";
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
                <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: 700; width: 150px;">${label}</td>
                <td style="border: 1px solid #e5e7eb; padding: 10px; white-space: pre-wrap;">${value}</td>
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || siteConfig.email;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !from) {
    return {
      status: "error",
      message:
        "The inquiry form is not configured yet. Please email Contact@DigitalEnergyMedia.Com directly.",
    };
  }

  const resend = new Resend(apiKey);
  const data = validation.data;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New DEM visibility inquiry: ${data.service}`,
      html: leadEmailHtml(data),
    });
  } catch {
    return {
      status: "error",
      message:
        "The inquiry could not be sent. Please email Contact@DigitalEnergyMedia.Com directly.",
    };
  }

  redirect("/thank-you");
}
