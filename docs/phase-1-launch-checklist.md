# Digital Energy Media Phase 1 Launch Checklist

## Contact Form Security

- Keep only the active Microsoft Entra client secret used by Vercel.
- Revoke any client secret that was copied outside the Entra and Vercel dashboards.
- Confirm `MS_CLIENT_SECRET`, `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_FROM_EMAIL`, and `LEAD_TO_EMAIL` are present in Vercel Production.
- Confirm the live form redirects to `/thank-you` and the inquiry arrives at `Contact@DigitalEnergyMedia.Com`.
- Scope Microsoft Graph mail access so the app can send only as the contact mailbox. Use `docs/microsoft-365-mail-scope.md`.

## Search Launch

- Create Google Search Console domain property for `digitalenergymedia.com`.
- Create Bing Webmaster Tools property for `digitalenergymedia.com`.
- Submit `https://www.digitalenergymedia.com/sitemap.xml`.
- Verify `https://www.digitalenergymedia.com/robots.txt` returns `200`.
- Inspect the homepage URL in both search tools after the first production launch.

## Canonical Host

- Treat `https://www.digitalenergymedia.com` as the primary public host.
- Keep `https://digitalenergymedia.com` active, but redirect it to `https://www.digitalenergymedia.com`.
- Update canonical metadata, sitemap URLs, robots sitemap URL, and Search Console/Bing submissions to use the `www` host.

## Social And Preview Cards

- Verify the Open Graph image at `https://www.digitalenergymedia.com/brand/og-image.png`.
- Test the homepage preview in LinkedIn, Facebook, X, and Teams before sharing broadly.
- Add social profile links only after official accounts are created and branded.

## Analytics

- Confirm Vercel Analytics is receiving production traffic.
- Track the first 30 days of CTA clicks, form starts, form submit attempts, and thank-you views.
- Review mobile traffic and form completion behavior weekly during the first launch month.

## Content Expansion Backlog

- AI Visibility Audit service page.
- Website Launch Sprint service page.
- AI Content Systems service page.
- Automation Workflows service page.
- Eureka / St. Louis regional visibility page.
- First proof or case-study page once client examples are ready.

## Operational Cadence

- Check form delivery weekly.
- Review Vercel deployment logs after each release.
- Rotate Microsoft Entra client secrets on a scheduled cadence.
- Keep pricing off the public site until packaging is finalized.
