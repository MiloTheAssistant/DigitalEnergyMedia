import { afterEach, describe, expect, it, vi } from "vitest";
import { sendGraphMail } from "./microsoft-graph-mail";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
  vi.restoreAllMocks();
});

describe("sendGraphMail", () => {
  it("sends mail through Microsoft Graph", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ access_token: "token" }), { status: 200 }),
      )
      .mockResolvedValueOnce(new Response(null, { status: 202 }));

    globalThis.fetch = fetchMock;

    await sendGraphMail(
      {
        to: "Contact@DigitalEnergyMedia.Com",
        replyTo: "lead@example.com",
        subject: "New inquiry",
        html: "<p>Hello</p>",
      },
      {
        tenantId: "tenant-id",
        clientId: "client-id",
        clientSecret: "client-secret",
        fromEmail: "Contact@DigitalEnergyMedia.Com",
      },
    );

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1][0]).toBe(
      "https://graph.microsoft.com/v1.0/users/Contact%40DigitalEnergyMedia.Com/sendMail",
    );
  });

  it("formats Microsoft Graph mail errors without dumping the raw response body", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ access_token: "token" }), { status: 200 }),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            error: {
              code: "ErrorInvalidUser",
              message: "The requested user is invalid.",
            },
          }),
          { status: 404 },
        ),
      );

    globalThis.fetch = fetchMock;

    await expect(
      sendGraphMail(
        {
          to: "Contact@DigitalEnergyMedia.Com",
          replyTo: "lead@example.com",
          subject: "New inquiry",
          html: "<p>Hello</p>",
        },
        {
          tenantId: "tenant-id",
          clientId: "client-id",
          clientSecret: "client-secret",
          fromEmail: "Contact@DigitalEnergyMedia.Com",
        },
      ),
    ).rejects.toThrow(
      "Microsoft Graph sendMail failed: 404 ErrorInvalidUser - The requested user is invalid.",
    );
  });
});
