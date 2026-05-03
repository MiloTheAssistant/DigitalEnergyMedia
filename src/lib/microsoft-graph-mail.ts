type GraphMailConfig = {
  tenantId?: string;
  clientId?: string;
  clientSecret?: string;
  fromEmail?: string;
};

export type GraphMailMessage = {
  to: string;
  replyTo: string;
  subject: string;
  html: string;
};

function getRequiredConfig(config: GraphMailConfig) {
  const tenantId = config.tenantId?.trim();
  const clientId = config.clientId?.trim();
  const clientSecret = config.clientSecret?.trim();
  const fromEmail = config.fromEmail?.trim();

  if (!tenantId || !clientId || !clientSecret || !fromEmail) {
    return null;
  }

  return { tenantId, clientId, clientSecret, fromEmail };
}

async function getGraphAccessToken(config: {
  tenantId: string;
  clientId: string;
  clientSecret: string;
}) {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "client_credentials",
    scope: "https://graph.microsoft.com/.default",
  });

  const response = await fetch(
    `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  );

  if (!response.ok) {
    throw new Error(`Microsoft token request failed: ${response.status}`);
  }

  const payload = (await response.json()) as { access_token?: string };

  if (!payload.access_token) {
    throw new Error("Microsoft token response did not include an access token.");
  }

  return payload.access_token;
}

export async function sendGraphMail(message: GraphMailMessage, config: GraphMailConfig) {
  const resolved = getRequiredConfig(config);

  if (!resolved) {
    throw new Error("Microsoft Graph mail is not configured.");
  }

  const accessToken = await getGraphAccessToken(resolved);

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(resolved.fromEmail)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: message.subject,
          body: {
            contentType: "HTML",
            content: message.html,
          },
          replyTo: [
            {
              emailAddress: {
                address: message.replyTo,
              },
            },
          ],
          toRecipients: [
            {
              emailAddress: {
                address: message.to,
              },
            },
          ],
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();

    throw new Error(
      `Microsoft Graph sendMail failed: ${response.status} ${errorBody}`,
    );
  }
}
