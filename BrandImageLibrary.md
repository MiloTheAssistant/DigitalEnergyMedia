# Digital Energy Media Brand Image Library

## Purpose

Make this the source of truth for Digital Energy Media brand imagery: what the vibe is, what assets exist, how future images should be generated, and how to approve them.

This document is written for this repo:

```txt
D:\Dev\DigitalEnergyMedia-Website
```

Primary asset destination:

```txt
public/brand
```

## Brand Core

Digital Energy Media builds AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.

Core promise:

> Build a digital presence people can find, trust, and act on.

Operating idea:

> Web. Content. AI. Automation. Reporting. Built as one clean system.

The imagery should complement the existing abstract hero rather than replace it. The current hero already carries the high-energy AI visibility layer. The brand library adds the human and local-business side: operators, workspaces, content systems, storefront momentum, trust, and practical digital execution.

## Balanced Trinity

Artistic freedom stays inside this trinity. Future images can lean harder into one lane, but they should not leave the system.

### Local Growth System

The primary lane. Human, local, practical, warm, and business-useful.

Use for:

- Website profile backgrounds
- Social covers
- Local-business campaign assets
- Human-centered brand credibility

Visual signals:

- Local business interiors and storefront energy
- Operator workspaces
- Warm evening light
- Real business tools
- Subtle web, social, search, and reporting signals

### Operator Lab

The systems lane. Disciplined, strategic, and technically capable.

Use for:

- AI workflow assets
- Automation and reporting imagery
- Website sections about systems, measurement, and execution
- More premium or technical campaign visuals

Visual signals:

- Clean workstations
- Dashboards and analytics glow
- Media planning surfaces
- Cyan and amber data light
- Calm command-center composition

### Media Engine

The publishing lane. Content, social, creative operations, and production momentum.

Use for:

- Social media background sets
- Content system visuals
- Campaign publishing assets
- Creator/operator scenes

Visual signals:

- Cameras, phones, laptops, and content tools
- Publishing paths and timeline energy
- Studio or field-production details
- Motion-light accents
- Practical creator workflow, not influencer hype

## Anti-Slop Standard

Technical execution stays disciplined:

- Use small source families instead of unrelated one-off scenes.
- Keep standard platform dimensions.
- Do not generate fake readable text.
- Do not include watermarks.
- Do not add clutter.
- Do not introduce unrelated scenes, mascots, gimmicks, random architecture, or generic tech decoration.
- Do not overwrite the existing hero unless explicitly requested.

Every generated image should feel like it belongs to Digital Energy Media and could sit next to the existing hero without breaking the brand.

## Quality Rules

- Photorealistic.
- Premium and plausible.
- Overlay-safe with usable negative space.
- Brand-coherent with dark graphite, cyan, and amber visual cues.
- No fake UI text.
- No embedded logos, slogans, or brand names.
- No stock-photo clutter.
- No distorted hands, warped devices, or unreadable interface panels.
- No people as main subjects except anonymous/profile-stamp use.
- Profile stamps must be circular-crop safe and readable at small sizes.

## Asset System

Use the current source-family approach:

- **Hero family:** keep `digital-energy-media-hero.png` and `og-image.png` as the abstract AI visibility foundation.
- **Profile stamp family:** human-centered dimensional emblem for profile use.
- **Wide local system family:** wide cover/header compositions with negative space.
- **Square operations family:** reusable square post/profile backgrounds.
- **Vertical storefront family:** 9:16 story/reel assets.
- **Profile-safe background family:** circular-crop-safe social background alternatives.

Platform folders:

```txt
public/brand/
  website/
  facebook/
  instagram/
  tiktok/
  linkedin/
  x/
```

Expected platform assets:

```txt
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

## Prompt Framework

Use this prompt when generating additional DEM brand imagery. Keep the filled DEM fields intact and only change the future asset-specific choices.

```text
I need to create a project-specific photoreal brand image asset for Digital Energy Media.

Project:
- Website/project name: Digital Energy Media
- Website domain: www.digitalenergymedia.com
- Repo path: D:\Dev\DigitalEnergyMedia-Website
- Destination folder: D:\Dev\DigitalEnergyMedia-Website\public\brand
- Business/location/audience: Digital Energy Media serves small and mid-sized businesses in the Eureka, MO / St. Louis region that need websites, content systems, AI-assisted workflows, automation rails, and reporting loops.
- Current hero image/vibe: Dark, cinematic AI visibility system with cyan and amber digital energy, analytics, media, search, automation, and reporting overlays.
- Brand tone: Premium, local, modern, human, technical, practical, trustworthy, operator-minded.
- Brand colors or visual cues: Dark graphite base, cyan AI/data light, amber energy/visibility light, warm local-business atmosphere, clean negative space.

Goal:
Create an image that complements the existing abstract hero and strengthens Digital Energy Media's human-centered brand identity across the website and social platforms.

Approved visual trinity:
- Local Growth System: local business, human operator, practical visibility, warm trust.
- Operator Lab: AI systems, automation, analytics, disciplined workflows.
- Media Engine: content production, social publishing, media operations.

Asset-specific choices:
- Asset type: [PROFILE STAMP / WEBSITE BACKGROUND / FACEBOOK COVER / INSTAGRAM POST / TIKTOK COVER / LINKEDIN COVER / X HEADER / OTHER]
- Target lane: [LOCAL GROWTH SYSTEM / OPERATOR LAB / MEDIA ENGINE / BLEND]
- Target platform and crop: [PLATFORM + DIMENSIONS OR ASPECT RATIO]
- Main scene: [DESCRIBE THE REAL-WORLD SCENE]
- Negative space: [WHERE OVERLAY SPACE SHOULD BE LEFT]
- Human presence: [NONE / ANONYMOUS HANDS / SILHOUETTE / BACKGROUND OPERATOR / PROFILE-STAMP FIGURE]

Profile stamp rules, if applicable:
- Human-centered brand mark, not another abstract background.
- Circular-crop safe.
- Strong at small profile-picture sizes.
- Can imply people, visibility, media, AI workflow, and local business momentum.
- Do not rely on readable generated letters or words.
- No fake words, watermarks, slogans, or detailed typography.
- Should feel like a premium dimensional emblem or brand stamp.

Background rules, if applicable:
- Clean photoreal background.
- No embedded text, logos, slogans, or watermarks.
- Leave usable negative space for future overlays.
- Use real-world scenes connected to local business visibility, content systems, AI-assisted workflows, automation, or reporting.
- Human presence is welcome, but avoid identifiable portraits unless explicitly requested.

Avoid:
Fake readable UI text, fake logos, watermarks, clutter, distorted hands, warped devices, random futuristic panels, unrelated landmarks, generic stock-photo energy, one-off visual gimmicks, cartoon/vector style.

Output:
Save the final PNG in the correct `public/brand` platform folder. Validate that the file exists, opens as an image, has nonzero size, and has sensible platform dimensions.
```

## Approval Checklist

Before approving a new asset, check:

- **Lane:** Does it clearly fit Local Growth System, Operator Lab, Media Engine, or an intentional blend?
- **Use case:** Is it composed for the intended website or platform placement?
- **Visual quality:** Does it look photorealistic, premium, plausible, and non-generic?
- **Technical sizing:** Does it have the expected platform dimensions or crop behavior?
- **Negative space:** Is there room for future overlays where needed?
- **No AI slop:** No fake readable text, no watermark, no distorted hands, no warped devices, no random UI nonsense.
- **Continuity:** Does it feel connected to the current source family and existing hero?

## Current Inventory

```txt
public\brand\digital-energy-media-hero.png
public\brand\og-image.png
public\brand\website\profile-stamp.png
public\brand\website\profile-background.png
public\brand\facebook\profile-stamp.png
public\brand\facebook\cover-background.png
public\brand\facebook\post-background.png
public\brand\instagram\profile-stamp.png
public\brand\instagram\profile-background.png
public\brand\instagram\post-background.png
public\brand\instagram\story-background.png
public\brand\tiktok\profile-stamp.png
public\brand\tiktok\profile-background.png
public\brand\tiktok\cover-background.png
public\brand\linkedin\profile-stamp.png
public\brand\linkedin\company-cover-background.png
public\brand\linkedin\post-background.png
public\brand\x\profile-stamp.png
public\brand\x\header-background.png
public\brand\x\post-background.png
```
