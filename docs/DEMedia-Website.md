# Digital Energy Media Website - Vision, Scope & Deployment Plan

## Executive Vision

Digital Energy Media is an AI Visibility Lab for small and mid-sized businesses that need a stronger digital presence without building an internal media department.

The public offer is not "just a website." It is a practical visibility system that connects websites, content, AI-assisted workflows, automation, brand assets, and reporting into one operating layer.

Public one-liner:

> Digital Energy Media builds AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.

## Phase 1 Scope

Phase 1 launches a premium Vercel-hosted landing page prepared for `https://digitalenergymedia.com`.

Included:

- Single-page premium homepage
- Generated hero and Open Graph imagery
- Services, framework, differentiators, use cases, and CTA sections
- Next.js Server Action contact form
- Resend email notification flow
- `/thank-you`, `/privacy`, `/terms`, sitemap, robots, and 404 routes
- Vercel Analytics
- README and deployment notes

Excluded:

- Vercel storage
- CMS
- Database
- Client portal
- Authentication
- Stripe
- Blog engine
- Social media links
- Public pricing

## Positioning

Lead posture: **AI Visibility Lab**

Tone:

- Direct
- Competent
- Modern
- Operational
- Builder-friendly
- AI-forward without exaggerated claims
- Crypto/AGI/agents as capability signals, not homepage hype

Avoid:

- Guaranteed rankings
- Guaranteed revenue growth
- Legal, tax, treasury, or holding-company mechanics
- Claims that Digital Energy Media is a separate legal entity unless confirmed

## Contact and Public Details

- Email: `Contact@DigitalEnergyMedia.Com`
- Phone: `(573) 500-0064`
- Public location: `Eureka, MO / St. Louis Region`
- Full street address stays off the homepage and footer in Phase 1
- Social media accounts are deferred

Footer legal wording:

> Digital Energy Media is a brand operated through Digital Energy Holdings, LLC.

## Technical Plan

Stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Resend
- Vercel Analytics
- Vercel hosting

Storage decision:

No Vercel storage is needed in Phase 1. Static image assets live in `public/`, and lead submissions are delivered by email. Add storage later only for file uploads, client portal assets, saved lead history, a content library, or dynamic feature flags.

Environment variables:

```txt
RESEND_API_KEY=
LEAD_TO_EMAIL=Contact@DigitalEnergyMedia.Com
LEAD_FROM_EMAIL=
```

## Deployment Plan

1. Connect `https://github.com/MiloTheAssistant/DigitalEnergyMedia` to Vercel.
2. Configure the Resend environment variables in Vercel.
3. Deploy a preview and verify the homepage, routes, form validation, and build logs.
4. Add `digitalenergymedia.com` and `www.digitalenergymedia.com`.
5. Configure DNS using Vercel's domain instructions.
6. Promote or redeploy to production after verification.

## Acceptance Criteria

The Phase 1 site is acceptable when:

- The homepage renders cleanly on desktop, tablet, and mobile.
- The hero communicates the offer in under 10 seconds.
- The services section has five clear service cards.
- The framework explains Map, Build, Publish, Measure, and Compound.
- The lead form validates required fields and sends through Resend when configured.
- `/thank-you`, `/privacy`, `/terms`, sitemap, robots, and 404 routes render.
- Metadata and Open Graph image are configured.
- Footer includes email, phone, regional location, and legal placeholder language.
- No private legal, tax, address, treasury, or holding-company mechanics are exposed.
