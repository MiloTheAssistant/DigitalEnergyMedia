import { describe, expect, it } from "vitest";
import { siteConfig } from "./site-config";

describe("siteConfig", () => {
  it("keeps Media Launch on a separate DEM-owned subdomain", () => {
    expect(siteConfig.mediaLaunchUrl).toBe(
      "https://medialaunch.digitalenergymedia.com",
    );
    expect(new URL(siteConfig.mediaLaunchUrl).hostname).toBe(
      "medialaunch.digitalenergymedia.com",
    );
    expect(siteConfig.mediaLaunchUrl.startsWith(`${siteConfig.url}/`)).toBe(
      false,
    );
  });
});
