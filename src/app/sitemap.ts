import type { MetadataRoute } from "next";
import { servicePages } from "@/content/service-pages";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = servicePages.map((service) => `/services/${service.slug}`);
  const paths = ["", ...servicePaths, "/st-louis-ai-visibility", "/privacy", "/terms", "/thank-you"];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-05-07"),
    changeFrequency: path === "" || path.startsWith("/services") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.4,
  }));
}
