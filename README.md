# Digital Energy Media

AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Microsoft Graph for lead notifications through Microsoft 365
- Vercel Analytics
- Vercel hosting

## Phase 1 Scope

Phase 1 is a premium single-page landing site with service sections, the Digital Energy Media framework, generated hero and Open Graph imagery, lead capture, SEO metadata, privacy and terms pages, sitemap, robots, and deployment readiness for `https://digitalenergymedia.com`.

No Vercel storage, CMS, auth, Stripe, client portal, or social media links are included in Phase 1.

## Environment Variables

```txt
MS_TENANT_ID=9575ab0b-5bfe-4ab2-abd1-4f4261cc5931
MS_CLIENT_ID=aa118c63-69b1-413d-9e84-53d797cd95ac
MS_CLIENT_SECRET=
MS_FROM_EMAIL=Contact@DigitalEnergyMedia.Com
LEAD_TO_EMAIL=Contact@DigitalEnergyMedia.Com
```

`MS_CLIENT_SECRET` must be created in Microsoft Entra and stored only in Vercel. The app registration also needs Microsoft Graph application permission `Mail.Send` with admin consent.

## Local Development

```bash
npm install
npm run dev
```

Local ports:

- Normal dev: `http://localhost:3008`
- Alternate/debug: `http://localhost:3009` via `npm run dev:alt`

## Verification

```bash
npm test
npm run lint
npm run build
```

## Deployment

The source repository is `https://github.com/MiloTheAssistant/DigitalEnergyMedia`.

Deploy through Vercel Git integration, configure the environment variables above, then add:

- `digitalenergymedia.com`
- `www.digitalenergymedia.com`

Configure DNS in the domain registrar according to the Vercel domain screen.
