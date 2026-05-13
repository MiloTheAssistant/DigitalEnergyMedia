import { describe, expect, it } from "vitest";
import { servicePages } from "@/content/service-pages";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createServiceSchema,
  createWebsiteSchema,
} from "./structured-data";

describe("structured data", () => {
  it("builds organization and website schemas for the public brand entity", () => {
    expect(createOrganizationSchema()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Digital Energy Media",
      url: "https://digitalenergymedia.com",
      email: "Contact@DigitalEnergyMedia.Com",
      telephone: "(573) 500-0064",
    });

    expect(createWebsiteSchema()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Digital Energy Media",
      url: "https://digitalenergymedia.com",
    });
  });

  it("builds service schema from the service content model", () => {
    const service = servicePages.find((item) => item.slug === "ai-visibility-audit");

    expect(service).toBeTruthy();
    expect(createServiceSchema(service!)).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Visibility Audit",
      url: "https://digitalenergymedia.com/services/ai-visibility-audit",
      provider: {
        "@type": "Organization",
        name: "Digital Energy Media",
      },
    });
  });

  it("builds local business schema for the regional visibility page", () => {
    expect(createLocalBusinessSchema()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Digital Energy Media",
      areaServed: ["Eureka, MO", "St. Louis Region"],
    });
  });
});
