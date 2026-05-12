# Brand Photo Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate and file a human-centered Digital Energy Media profile stamp plus clean photoreal platform backgrounds.

**Architecture:** Use built-in image generation for original raster assets, then save final selected images into `public/brand` platform folders. Keep generated images independent from code changes so the current site continues to use the existing hero unless a later task wires in new assets.

**Tech Stack:** Built-in image generation, PowerShell file validation, PNG image assets, Next.js public asset folder.

---

### Task 1: Prepare Asset Folders

**Files:**
- Modify: `D:\Dev\DigitalEnergyMedia-Website\.gitignore`
- Create directories under: `D:\Dev\DigitalEnergyMedia-Website\public\brand`

- [ ] **Step 1: Create platform directories**

Run:

```powershell
New-Item -ItemType Directory -Force -Path `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\website', `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\facebook', `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\instagram', `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\tiktok', `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\linkedin', `
  'D:\Dev\DigitalEnergyMedia-Website\public\brand\x'
```

Expected: all folders exist.

### Task 2: Generate Profile Stamp

**Files:**
- Create: `D:\Dev\DigitalEnergyMedia-Website\public\brand\website\profile-stamp.png`

- [ ] **Step 1: Generate the stamp**

Use a prompt for a human-centered emblem/profile image: anonymous operator/human signal, local business visibility, digital energy cues, circular-crop safe, no readable text, no watermark.

- [ ] **Step 2: Save the selected output**

Move or copy the selected generated PNG to:

```txt
D:\Dev\DigitalEnergyMedia-Website\public\brand\website\profile-stamp.png
```

Expected: file exists and opens as an image.

### Task 3: Generate Platform Backgrounds

**Files:**
- Create the planned PNG files under `D:\Dev\DigitalEnergyMedia-Website\public\brand\{platform}\`

- [ ] **Step 1: Generate website and social backgrounds**

Use clean photoreal Local Growth System prompts with no embedded text or logos. Each prompt should match the target platform crop: wide covers, square posts, and vertical stories/covers.

- [ ] **Step 2: Save outputs into platform folders**

Expected files:

```txt
public/brand/website/profile-background.png
public/brand/facebook/cover-background.png
public/brand/facebook/profile-stamp.png
public/brand/facebook/post-background.png
public/brand/instagram/profile-background.png
public/brand/instagram/profile-stamp.png
public/brand/instagram/post-background.png
public/brand/instagram/story-background.png
public/brand/tiktok/profile-background.png
public/brand/tiktok/profile-stamp.png
public/brand/tiktok/cover-background.png
public/brand/linkedin/company-cover-background.png
public/brand/linkedin/profile-stamp.png
public/brand/linkedin/post-background.png
public/brand/x/header-background.png
public/brand/x/profile-stamp.png
public/brand/x/post-background.png
```

### Task 4: Validate Assets

**Files:**
- Read: generated PNG files under `D:\Dev\DigitalEnergyMedia-Website\public\brand`

- [ ] **Step 1: Verify file presence and dimensions**

Run:

```powershell
Add-Type -AssemblyName System.Drawing
Get-ChildItem 'D:\Dev\DigitalEnergyMedia-Website\public\brand' -Recurse -File -Filter *.png |
  ForEach-Object {
    $img=[System.Drawing.Image]::FromFile($_.FullName)
    [pscustomobject]@{Path=$_.FullName; Width=$img.Width; Height=$img.Height; Bytes=$_.Length}
    $img.Dispose()
  }
```

Expected: each planned file has nonzero byte size and valid dimensions.

- [ ] **Step 2: Review git status**

Run:

```powershell
git status --short
```

Expected: only intended docs, `.gitignore`, and `public/brand` asset files are changed or added.
