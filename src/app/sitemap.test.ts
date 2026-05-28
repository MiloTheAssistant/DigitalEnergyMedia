import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("includes public discovery pages and excludes the form completion page", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://www.digitalenergymedia.com");
    expect(urls).toContain("https://www.digitalenergymedia.com/services/ai-visibility-audit");
    expect(urls).toContain("https://www.digitalenergymedia.com/st-louis-ai-visibility");
    expect(urls).not.toContain("https://www.digitalenergymedia.com/thank-you");
  });
});
