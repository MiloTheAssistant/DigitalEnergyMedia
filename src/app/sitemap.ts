import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/thank-you"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-05-03"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.4,
  }));
}
