# Digital Energy Media

AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Resend for lead notifications
- Vercel Analytics
- Vercel hosting

## Phase 1 Scope

Phase 1 is a premium single-page landing site with service sections, the Digital Energy Media framework, generated hero and Open Graph imagery, lead capture, SEO metadata, privacy and terms pages, sitemap, robots, and deployment readiness for `https://digitalenergymedia.com`.

No Vercel storage, CMS, auth, Stripe, client portal, or social media links are included in Phase 1.

## Environment Variables

```txt
RESEND_API_KEY=
LEAD_TO_EMAIL=Contact@DigitalEnergyMedia.Com
LEAD_FROM_EMAIL=
```

`LEAD_FROM_EMAIL` must be a Resend-approved sender.

## Local Development

```bash
npm install
npm run dev
```

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
