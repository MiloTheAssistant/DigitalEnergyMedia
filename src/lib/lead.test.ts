import { describe, expect, it } from "vitest";
import { validateLeadInput } from "./lead";

describe("validateLeadInput", () => {
  it("accepts a complete visibility audit inquiry", () => {
    const result = validateLeadInput({
      name: "Jordan Scott",
      email: "owner@example.com",
      company: "Digital Energy Media",
      website: "https://digitalenergymedia.com",
      service: "Visibility Audit",
      budget: "$2,500 - $5,000",
      timeline: "Next 30 days",
      message: "We need a sharper website and an AI-assisted content system.",
      formStartedAt: String(Date.now() - 5000),
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.email).toBe("owner@example.com");
      expect(result.data.website).toBe("https://digitalenergymedia.com");
    }
  });

  it("rejects missing required fields and malformed email", () => {
    const result = validateLeadInput({
      name: "",
      email: "not-an-email",
      service: "",
      message: "too short",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeTruthy();
      expect(result.errors.email).toBeTruthy();
      expect(result.errors.service).toBeTruthy();
      expect(result.errors.message).toBeTruthy();
    }
  });

  it("rejects honeypot submissions", () => {
    const result = validateLeadInput({
      name: "Jordan Scott",
      email: "owner@example.com",
      service: "Visibility Audit",
      message: "We need a sharper website and an AI-assisted content system.",
      contactPreference: "Please call me",
      formStartedAt: String(Date.now() - 5000),
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.form).toBeTruthy();
    }
  });

  it("rejects submissions that arrive too quickly", () => {
    const result = validateLeadInput({
      name: "Jordan Scott",
      email: "owner@example.com",
      service: "Visibility Audit",
      message: "We need a sharper website and an AI-assisted content system.",
      formStartedAt: String(Date.now()),
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.form).toBeTruthy();
    }
  });
});
