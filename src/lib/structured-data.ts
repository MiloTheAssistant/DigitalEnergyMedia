import type { ServicePage } from "@/content/service-pages";
import { siteConfig } from "@/lib/site-config";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: `${siteConfig.url}${siteConfig.profileStampImage}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    areaServed: ["Eureka, MO", "St. Louis Region"],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactType: "customer inquiries",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": organizationId,
    },
    description: siteConfig.description,
    inLanguage: "en-US",
  };
}

export function createServiceSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,
    description: service.description,
    provider: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: ["Eureka, MO", "St. Louis Region", "United States"],
    audience: {
      "@type": "Audience",
      audienceType: "small and mid-sized businesses",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} outcomes`,
      itemListElement: service.outcomes.map((outcome, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: outcome,
        },
      })),
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/st-louis-ai-visibility#local-business`,
    name: siteConfig.name,
    url: `${siteConfig.url}/st-louis-ai-visibility`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description:
      "Digital Energy Media provides AI visibility, website, content, and automation systems for small and mid-sized businesses in the Eureka and St. Louis region.",
    areaServed: ["Eureka, MO", "St. Louis Region"],
    parentOrganization: {
      "@id": organizationId,
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
