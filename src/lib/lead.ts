import { budgetOptions, serviceOptions, timelineOptions } from "./site-config";

export type LeadInput = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  website?: unknown;
  service?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  contactPreference?: unknown;
  formStartedAt?: unknown;
};

export type LeadData = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

export type LeadValidationResult =
  | { ok: true; data: LeadData }
  | { ok: false; errors: Partial<Record<keyof LeadData | "form", string>> };

const MIN_FORM_AGE_MS = 1500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeWebsite(value: string) {
  if (!value) {
    return "";
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(withProtocol).toString().replace(/\/$/, "");
  } catch {
    return value;
  }
}

export function formDataToLeadInput(formData: FormData): LeadInput {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    website: formData.get("website"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
    contactPreference: formData.get("contactPreference"),
    formStartedAt: formData.get("formStartedAt"),
  };
}

export function validateLeadInput(input: LeadInput): LeadValidationResult {
  const now = Date.now();
  const contactPreference = clean(input.contactPreference);
  const formStartedAt = Number(clean(input.formStartedAt));

  const data: LeadData = {
    name: clean(input.name),
    email: clean(input.email),
    company: clean(input.company),
    website: normalizeWebsite(clean(input.website)),
    service: clean(input.service),
    budget: clean(input.budget),
    timeline: clean(input.timeline),
    message: clean(input.message),
  };

  const errors: Partial<Record<keyof LeadData | "form", string>> = {};

  if (contactPreference) {
    errors.form = "Please try submitting the form again.";
  }

  if (!Number.isFinite(formStartedAt) || formStartedAt <= 0) {
    errors.form = "Please refresh the page and try again.";
  } else {
    const formAge = now - formStartedAt;

    if (formAge < MIN_FORM_AGE_MS || formAge > MAX_FORM_AGE_MS) {
      errors.form = "Please refresh the page and try again.";
    }
  }

  if (data.name.length < 2) {
    errors.name = "Please add your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please add a valid email address.";
  }

  if (data.company.length > 120) {
    errors.company = "Please keep the company name under 120 characters.";
  }

  if (data.website) {
    try {
      new URL(data.website);
    } catch {
      errors.website = "Please add a valid website URL.";
    }
  }

  if (!serviceOptions.includes(data.service as (typeof serviceOptions)[number])) {
    errors.service = "Please choose the service that best fits.";
  }

  if (data.budget && !budgetOptions.includes(data.budget as (typeof budgetOptions)[number])) {
    errors.budget = "Please choose a listed budget range.";
  }

  if (data.timeline && !timelineOptions.includes(data.timeline as (typeof timelineOptions)[number])) {
    errors.timeline = "Please choose a listed timeline.";
  }

  if (data.message.length < 20) {
    errors.message = "Please add a little more context.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
