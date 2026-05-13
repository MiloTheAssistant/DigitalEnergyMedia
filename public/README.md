# Public Asset Structure

This folder contains all static assets served by the Digital Energy Media website.

## Source Of Truth

- `BrandImageLibrary.md` in the repo root is the reusable/downloadable brand image library guide for this project.
- `public/brand/README.md` is the source of truth for the active brand imagery system, approval checklist, prompt framework, and current asset inventory.
- This file explains the folder structure for everything under `public`.

## Folder Structure

```text
public/
  README.md
  brand/
    README.md
    digital-energy-media-hero.png
    og-image.png
    website/
      profile-stamp.png
      profile-background.png
    facebook/
      profile-stamp.png
      cover-background.png
      post-background.png
    instagram/
      profile-stamp.png
      profile-background.png
      post-background.png
      story-background.png
    tiktok/
      profile-stamp.png
      profile-background.png
      cover-background.png
    linkedin/
      profile-stamp.png
      company-cover-background.png
      post-background.png
    x/
      profile-stamp.png
      header-background.png
      post-background.png
```

## What Belongs Where

`public/brand/` is the controlled brand image library. Put reusable brand identity, profile, source-family, website, and platform-native social assets here.

`public/brand/digital-energy-media-hero.png` is the current homepage hero image referenced by site configuration.

`public/brand/og-image.png` is the current Open Graph fallback image referenced by site metadata.

`public/brand/website/` is for website-specific brand assets, including the primary profile stamp currently used in the header, footer, and About/Built For panel.

`public/brand/facebook/`, `public/brand/instagram/`, `public/brand/tiktok/`, `public/brand/linkedin/`, and `public/brand/x/` are for platform-specific social profile, cover, post, story, and header assets.

Avoid putting generated files directly in `public/` root unless they are meant to be top-level public assets used by app metadata or framework conventions.

## Current Brand-Relevant Assets

```text
public/brand/digital-energy-media-hero.png
public/brand/og-image.png
public/brand/README.md
public/brand/website/profile-stamp.png
public/brand/website/profile-background.png
public/brand/facebook/profile-stamp.png
public/brand/facebook/cover-background.png
public/brand/facebook/post-background.png
public/brand/instagram/profile-stamp.png
public/brand/instagram/profile-background.png
public/brand/instagram/post-background.png
public/brand/instagram/story-background.png
public/brand/tiktok/profile-stamp.png
public/brand/tiktok/profile-background.png
public/brand/tiktok/cover-background.png
public/brand/linkedin/profile-stamp.png
public/brand/linkedin/company-cover-background.png
public/brand/linkedin/post-background.png
public/brand/x/profile-stamp.png
public/brand/x/header-background.png
public/brand/x/post-background.png
```

## Rules

- Do not move existing app-referenced assets unless the code references are updated in the same change.
- Generated brand-library assets should follow the platform folder structure from `BrandImageLibrary.md` and `public/brand/README.md`.
- Keep profile-stamp files circular-crop safe.
- Keep social backgrounds clean, photoreal, overlay-safe, and free of baked-in text or logos.
- Do not overwrite `digital-energy-media-hero.png` unless the hero image is intentionally being replaced.
- Do not overwrite `og-image.png` unless the metadata/social preview image is intentionally being replaced.
- Avoid dumping one-off generated images directly into `public/` root.

## Additional Assets To Consider

The current `public` structure is sufficient for the work already completed. Consider adding these only when the corresponding use case exists:

- `public/brand/masters/`: source-family masters and a contact sheet for future regeneration and visual governance.
- `public/brand/email/`: email header or newsletter imagery if DEM starts sending branded email campaigns.
- `public/brand/campaigns/`: campaign-specific images for visibility audits, launch sprints, or AI content systems.
- `public/brand/website/about-background.png`: a dedicated About-section background if the current profile stamp treatment grows into a larger brand story block.
- `public/brand/website/contact-background.png`: a dedicated contact or lead-form background if the contact section needs more visual weight.

Do not add these folders preemptively unless assets are being created for them. The current structure is intentionally lean.
