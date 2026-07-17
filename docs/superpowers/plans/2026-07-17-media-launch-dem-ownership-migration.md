# Media Launch DEM Ownership Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the old SocialMediaAdmin/DEM-SocialMediaAdmin operating surface into a DEM-owned private Media Launch source and deployment boundary.

**Architecture:** Keep the public `DigitalEnergyMedia` website and private `MediaLaunch` app as two separately deployed applications. The public site gets a plain link to the private app subdomain; private source, environment variables, Ops state, and admin workflows stay in the private app repository and deployment.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Vitest, GitHub CLI, Vercel CLI, DNS CNAME, Codex task management tools.

## Global Constraints

- Public website repository remains `DigitalEnergyMedia`.
- Private operations repository is named `MediaLaunch`.
- Human-facing app entry is `MediaLaunch.digitalenergymedia.com`.
- Canonical DNS, Vercel, and test host is `medialaunch.digitalenergymedia.com`.
- Do not merge the private operations app into the public website repo.
- Do not copy local `.data` Ops state into the public website.
- Do not commit raw secrets, tokens, passwords, one-time codes, cookies, backup codes, provider exports, mailbox bodies, or screenshots containing account access details.
- Public website changes must be link-only; do not proxy or render private Ops data.
- GitHub repository rename, Vercel domain changes, DNS changes, and production deployment require owner approval immediately before the mutating command.
- Preserve active `DEM-SocialMediaAdmin` local work, including `main` commits, untracked plan docs, and the `feat/platform-mailbox-provisioning` worktree, before any repository rename or local folder retirement.
- Old `SocialMediaAdmin` task history is historical evidence. Archive completed tasks after the move; do not rewrite transcript metadata unless the user separately approves a metadata-repair task.

---

## File Structure

Public website repository:

- Modify: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.ts`
  - Adds the DEM-owned Media Launch URL as public, non-secret configuration.
- Create: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.test.ts`
  - Guards that Media Launch uses the separate subdomain and is not a public-site path.
- Modify: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/app/page.tsx`
  - Adds one footer link to Media Launch under Company.
- Read: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/docs/superpowers/specs/2026-07-17-media-launch-dem-ownership-design.md`
  - Source of truth for this migration.

Private app repository after rename:

- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/package.json`
  - Changes the package name from `dem-socialmediaadmin` to `media-launch`.
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/README.md`
  - Renames the app to Media Launch while preserving safety boundaries.
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/layout.tsx`
  - Updates public metadata to Media Launch.
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/page.tsx`
  - Updates the public landing copy to Media Launch.
- Read: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/.vercel/project.json`
  - Verifies the existing Vercel project linkage without exposing secrets.

Local cleanup:

- Read: `/Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin`
  - Confirms the old project folder is empty before retirement.
- Keep: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin`
  - Retain as a temporary safety backup until `MediaLaunch` clone, branch preservation, and Vercel verification pass.

---

### Task 1: Preserve Private App Work Before Rename

**Files:**
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/docs/superpowers/plans/2026-07-14-platform-mailbox-control-plane.md`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/docs/superpowers/plans/2026-07-14-platform-mailbox-provisioner-runner.md`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/app/api/ops/website-handoffs/route.test.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-database.test.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-database.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-state-safety.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-store.test.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-store.ts`
- Create: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/google-identity-actions.test.ts`
- Create: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/google-identity-actions.ts`
- Create: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning/src/lib/ops-state-safety.test.ts`

**Interfaces:**
- Consumes: Existing private app repository at `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin`.
- Produces: Remote-preserved `main` and `feat/platform-mailbox-provisioning` states that survive repository rename.

- [ ] **Step 1: Verify the private app main state**

Run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin status --short --branch
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin log --oneline origin/main..HEAD
```

Expected:

```text
## main...origin/main [ahead 2]
?? docs/superpowers/plans/2026-07-14-platform-mailbox-control-plane.md
?? docs/superpowers/plans/2026-07-14-platform-mailbox-provisioner-runner.md
0eabfa3 chore: ignore local worktrees
5be87c8 Document platform mailbox provisioning design
```

If the output differs, stop and summarize the new state before changing anything.

- [ ] **Step 2: Commit the untracked private app plan docs**

Run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin add \
  docs/superpowers/plans/2026-07-14-platform-mailbox-control-plane.md \
  docs/superpowers/plans/2026-07-14-platform-mailbox-provisioner-runner.md
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin commit -m "docs: add platform mailbox implementation plans"
```

Expected: a new docs-only commit on private app `main`.

- [ ] **Step 3: Run private app baseline validation**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin
npm test
npm run lint
npm run build
```

Expected: all commands exit `0`. If one fails, stop before pushing and report the failing command.

- [ ] **Step 4: Push private app main**

Ask the owner for approval to push the private app `main` branch. After approval, run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin push origin main
```

Expected: `origin/main` advances to include the local private app commits.

- [ ] **Step 5: Verify the platform mailbox worktree state**

Run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning status --short --branch
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning log --oneline origin/main..HEAD --max-count=10
```

Expected: branch `feat/platform-mailbox-provisioning` plus the known dirty files listed in this task.

- [ ] **Step 6: Commit the worktree preservation checkpoint**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning
git add \
  src/app/api/ops/website-handoffs/route.test.ts \
  src/lib/ops-database.test.ts \
  src/lib/ops-database.ts \
  src/lib/ops-state-safety.ts \
  src/lib/ops-store.test.ts \
  src/lib/ops-store.ts \
  src/lib/google-identity-actions.test.ts \
  src/lib/google-identity-actions.ts \
  src/lib/ops-state-safety.test.ts
git commit -m "wip: preserve platform mailbox provisioning before Media Launch rename"
```

Expected: a WIP checkpoint commit on `feat/platform-mailbox-provisioning`. This commit is a preservation checkpoint, not a merge-ready claim.

- [ ] **Step 7: Push the preserved worktree branch**

Ask the owner for approval to push the preservation branch. After approval, run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning push -u origin feat/platform-mailbox-provisioning
```

Expected: the branch exists on the remote before any repository rename.

- [ ] **Step 8: Record the preservation state**

Run:

```bash
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin status --short --branch
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin/.worktrees/platform-mailbox-provisioning status --short --branch
git -C /Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin worktree list --porcelain
```

Expected: private app `main` is clean and the worktree branch is clean after the WIP checkpoint.

---

### Task 2: Rename Private Source Identity To MediaLaunch

**Files:**
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/package.json`
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/README.md`
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/layout.tsx`
- Modify: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/page.tsx`

**Interfaces:**
- Consumes: Remote-preserved private source from Task 1.
- Produces: Private GitHub repository `MiloTheAssistant/MediaLaunch` and a fresh local checkout at `/Volumes/BotCentral/Users/milo/repos/MediaLaunch`.

- [ ] **Step 1: Verify the current GitHub repository**

Run:

```bash
gh repo view MiloTheAssistant/DEM-SocialMediaAdmin --json name,owner,visibility,url --jq '{name, owner: .owner.login, visibility, url}'
```

Expected:

```json
{"name":"DEM-SocialMediaAdmin","owner":"MiloTheAssistant","visibility":"PRIVATE","url":"https://github.com/MiloTheAssistant/DEM-SocialMediaAdmin"}
```

If visibility is not `PRIVATE`, stop before any rename.

- [ ] **Step 2: Rename the GitHub repository**

Ask the owner for approval to rename the private GitHub repository. After approval, run:

```bash
gh repo rename -R MiloTheAssistant/DEM-SocialMediaAdmin MediaLaunch -y
```

Expected: GitHub repository becomes `MiloTheAssistant/MediaLaunch`.

- [ ] **Step 3: Verify renamed repository visibility**

Run:

```bash
gh repo view MiloTheAssistant/MediaLaunch --json name,owner,visibility,url --jq '{name, owner: .owner.login, visibility, url}'
```

Expected:

```json
{"name":"MediaLaunch","owner":"MiloTheAssistant","visibility":"PRIVATE","url":"https://github.com/MiloTheAssistant/MediaLaunch"}
```

- [ ] **Step 4: Clone the renamed repository into a clean local path**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos
git clone https://github.com/MiloTheAssistant/MediaLaunch.git MediaLaunch
git -C /Volumes/BotCentral/Users/milo/repos/MediaLaunch status --short --branch
git -C /Volumes/BotCentral/Users/milo/repos/MediaLaunch remote -v
```

Expected: local `/Volumes/BotCentral/Users/milo/repos/MediaLaunch` exists, branch `main` is clean, and `origin` points to `https://github.com/MiloTheAssistant/MediaLaunch.git`.

- [ ] **Step 5: Write the failing package-name test through the lockfile check**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
node -e 'const p=require("./package.json"); if (p.name !== "media-launch") { console.error(`expected media-launch, got ${p.name}`); process.exit(1); }'
```

Expected: FAIL with `expected media-launch, got dem-socialmediaadmin`.

- [ ] **Step 6: Update package identity**

Edit `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/package.json` so the first fields are:

```json
{
  "name": "media-launch",
  "version": "0.1.0",
  "private": true,
  "scripts": {
```

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
npm install --package-lock-only
```

Expected: `package-lock.json` updates the root package name to `media-launch`.

- [ ] **Step 7: Verify package identity passes**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
node -e 'const p=require("./package.json"); if (p.name !== "media-launch") { console.error(`expected media-launch, got ${p.name}`); process.exit(1); }'
node -e 'const p=require("./package-lock.json"); if (p.name !== "media-launch") { console.error(`expected lockfile media-launch, got ${p.name}`); process.exit(1); }'
```

Expected: both commands exit `0`.

- [ ] **Step 8: Update app metadata**

Edit `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/layout.tsx` so the metadata block is:

```tsx
export const metadata: Metadata = {
  title: "Media Launch",
  description:
    "Digital Energy Media internal media and social operations platform.",
};
```

Expected: browser titles and metadata use Media Launch, not DEM Social Media Admin.

- [ ] **Step 9: Update private app landing copy**

Edit `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/src/app/page.tsx` so the hero text reads:

```tsx
<h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
  Media Launch operations, approvals, and readiness.
</h1>
<p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
  Manage Digital Energy property checklists, role-account inventory,
  creative workflows, connector readiness, and manual publishing
  packets without storing raw credentials or posting automatically.
</p>
```

Expected: no private workflow behavior changes.

- [ ] **Step 10: Update private app README identity**

Edit the top of `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/README.md` to:

```markdown
# Media Launch

Private Digital Energy Media media and social operations platform.

This app is an internal control plane for Digital Energy properties. It tracks
property launch readiness, social account inventory, role mailbox and vault
references, content approvals, manual publishing packets, connector readiness,
launch-center readiness, tracking placeholders, and manual metric snapshots.
```

Expected: README name matches the private repository identity while retaining the safety model.

- [ ] **Step 11: Validate private app rename**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
npm test
npm run lint
npm run build
git diff --check
```

Expected: all commands exit `0`.

- [ ] **Step 12: Commit and push private app rename**

Ask the owner for approval to push to the private repository. After approval, run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
git add package.json package-lock.json README.md src/app/layout.tsx src/app/page.tsx
git commit -m "chore: rename private app to Media Launch"
git push origin main
```

Expected: `MediaLaunch` remote `main` contains the rename commit.

---

### Task 3: Configure Media Launch Vercel Domain

**Files:**
- Read: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch/.vercel/project.json`

**Interfaces:**
- Consumes: Private app repository `MediaLaunch` from Task 2.
- Produces: Vercel production deployment reachable at `https://medialaunch.digitalenergymedia.com`.

- [ ] **Step 1: Verify the linked Vercel project**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
test -f .vercel/project.json
node -e 'const p=require("./.vercel/project.json"); console.log(JSON.stringify({projectId:p.projectId, orgId:p.orgId}))'
```

Expected: prints `projectId` and `orgId` only. Do not print environment variables.

- [ ] **Step 2: Verify domain status before mutation**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
vercel domains inspect medialaunch.digitalenergymedia.com --scope digital-energy
```

Expected: either the domain is not found or it is already assigned to the intended Media Launch project. If it is assigned to another project, stop before using `--force`.

- [ ] **Step 3: Add the custom domain**

Ask the owner for approval to add the Vercel custom domain. After approval, run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
vercel domains add medialaunch.digitalenergymedia.com --scope digital-energy
vercel domains inspect medialaunch.digitalenergymedia.com --scope digital-energy
```

Expected: Vercel shows the domain attached to the Media Launch project and prints DNS requirements.

- [ ] **Step 4: Configure DNS CNAME**

Ask the owner for approval to change DNS. After approval, configure this DNS record in the DNS provider for `digitalenergymedia.com`:

```text
Type: CNAME
Name: medialaunch
Value: cname.vercel-dns-0.com
TTL: Automatic or 3600
```

Expected: DNS provider saves `medialaunch.digitalenergymedia.com` as a CNAME to Vercel.

- [ ] **Step 5: Deploy private app to production**

Ask the owner for approval to deploy production. After approval, run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
mkdir -p /tmp/media-launch-migration
vercel deploy --prod --scope digital-energy --yes | tee /tmp/media-launch-migration/production-deployment-url.txt
```

Expected: Vercel returns a production deployment URL and the same URL is stored
in `/tmp/media-launch-migration/production-deployment-url.txt`.

- [ ] **Step 6: Alias the deployment if Vercel did not attach it automatically**

Run only when the production deployment URL from Step 5 is not already served by the custom domain:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
deployment_url="$(tail -n 1 /tmp/media-launch-migration/production-deployment-url.txt)"
case "$deployment_url" in
  https://*) ;;
  *) echo "Deployment URL was not captured: $deployment_url" >&2; exit 1 ;;
esac
vercel alias set "$deployment_url" medialaunch.digitalenergymedia.com --scope digital-energy
```

Expected: the deployment is aliased to `medialaunch.digitalenergymedia.com`.

- [ ] **Step 7: Verify domain and auth gate**

Run:

```bash
curl -I https://medialaunch.digitalenergymedia.com/
curl -I https://medialaunch.digitalenergymedia.com/ops
curl -sS https://medialaunch.digitalenergymedia.com/api/ops/summary | head -c 200
```

Expected:

```text
https://medialaunch.digitalenergymedia.com/ returns 200 or 307 to the app-owned route.
https://medialaunch.digitalenergymedia.com/ops redirects to /ops/unlock or another app-owned auth gate.
/api/ops/summary returns an unauthenticated denial payload or status, not private Ops data.
```

---

### Task 4: Link Public DEM Site To Media Launch

**Files:**
- Modify: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.ts`
- Create: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.test.ts`
- Modify: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/app/page.tsx`

**Interfaces:**
- Consumes: Canonical Media Launch URL `https://medialaunch.digitalenergymedia.com`.
- Produces: Public DEM footer link to Media Launch without proxying private data.

- [ ] **Step 1: Write failing config test**

Create `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.test.ts`:

```ts
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
    expect(siteConfig.mediaLaunchUrl.startsWith(`${siteConfig.url}/`)).toBe(false);
  });
});
```

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
npm test -- src/lib/site-config.test.ts
```

Expected: FAIL because `mediaLaunchUrl` is not defined.

- [ ] **Step 2: Add Media Launch public URL config**

Edit `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/lib/site-config.ts` so `siteConfig` includes:

```ts
  mediaLaunchUrl: "https://medialaunch.digitalenergymedia.com",
```

Place it directly after:

```ts
  url: "https://www.digitalenergymedia.com",
```

Expected: URL is public configuration only; it contains no token and no private route path.

- [ ] **Step 3: Run config test**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
npm test -- src/lib/site-config.test.ts
```

Expected: PASS.

- [ ] **Step 4: Add footer link only**

In `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia/src/app/page.tsx`, add this link under the Company footer links, after Contact and before Privacy:

```tsx
              <a href={siteConfig.mediaLaunchUrl} className="transition hover:text-white">Media Launch</a>
```

Expected: public site has one link to the subdomain and no `/MediaLaunch` route.

- [ ] **Step 5: Validate public site**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
npm test
npm run lint
npm run build
git diff --check
```

Expected: all commands exit `0`.

- [ ] **Step 6: Commit public site link**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
git add src/lib/site-config.ts src/lib/site-config.test.ts src/app/page.tsx
git commit -m "Add Media Launch link to DEM site"
```

Expected: public website repository has a small, link-only commit.

---

### Task 5: Retire Old SocialMediaAdmin Project Surface

**Files:**
- Read: `/Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin`
- Read: `/Volumes/BotCentral/Users/milo/repos/DEM-SocialMediaAdmin`
- Read: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch`

**Interfaces:**
- Consumes: Completed Tasks 1-4.
- Produces: Old empty folder retired and Codex task list cleaned without transcript metadata rewrite.

- [ ] **Step 1: Verify local project folders**

Run:

```bash
ls -la /Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin
ls -la /Volumes/BotCentral/Users/milo/repos/MediaLaunch
git -C /Volumes/BotCentral/Users/milo/repos/MediaLaunch status --short --branch
```

Expected:

```text
SocialMediaAdmin contains only . and ..
MediaLaunch exists and is a clean git repository on main.
```

- [ ] **Step 2: Retire empty SocialMediaAdmin folder**

Ask the owner for approval to remove the empty local folder. After approval, run:

```bash
rmdir /Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin
test ! -e /Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin
```

Expected: empty folder is gone. If `rmdir` reports files are present, stop and list them.

- [ ] **Step 3: List old Codex tasks**

Use the Codex thread tool:

```json
{
  "tool": "codex_app.list_threads",
  "arguments": {
    "query": "SocialMediaAdmin",
    "limit": 20
  }
}
```

Expected: old tasks appear as historical records. Keep active or recently interrupted tasks visible until their work is complete.

- [ ] **Step 4: Archive completed old tasks only**

Archive these completed historical tasks after verifying they are not active:

```json
[
  {"threadId": "019f1ee6-4076-7d12-a880-32ed3735d83e", "title": "Plan social platform"},
  {"threadId": "019f23cb-d0e3-7012-b83c-d1b5db013d9e", "title": "Publish Ops launch pad"},
  {"threadId": "019f3c97-d7e3-7b33-89fb-8ac61a8e070a", "title": "AcademAI - Social Admin"},
  {"threadId": "019f56de-8298-7980-8126-49727fd59080", "title": "Compare GPT 5.6 releases"}
]
```

For each completed task, call the matching archive command:

```json
{
  "tool": "codex_app.set_thread_archived",
  "arguments": {
    "threadId": "019f1ee6-4076-7d12-a880-32ed3735d83e",
    "hostId": "local",
    "archived": true
  }
}
```

```json
{
  "tool": "codex_app.set_thread_archived",
  "arguments": {
    "threadId": "019f23cb-d0e3-7012-b83c-d1b5db013d9e",
    "hostId": "local",
    "archived": true
  }
}
```

```json
{
  "tool": "codex_app.set_thread_archived",
  "arguments": {
    "threadId": "019f3c97-d7e3-7b33-89fb-8ac61a8e070a",
    "hostId": "local",
    "archived": true
  }
}
```

```json
{
  "tool": "codex_app.set_thread_archived",
  "arguments": {
    "threadId": "019f56de-8298-7980-8126-49727fd59080",
    "hostId": "local",
    "archived": true
  }
}
```

Expected: completed historical tasks leave the active task list. Do not archive `Stage platform emails for DEM` or `Add social profile descriptions` until the user confirms those workstreams are closed or moved.

- [ ] **Step 5: Record cleanup result**

Add a short note to the final implementation summary:

```text
Old SocialMediaAdmin folder removed after verifying it was empty.
Completed historical Codex tasks archived.
Active Media Launch work now belongs under /Volumes/BotCentral/Users/milo/repos/MediaLaunch.
No transcript metadata was rewritten.
```

Expected: user sees the boundary and residual active-task status.

---

### Task 6: Final Verification And Publication

**Files:**
- Read: `/Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia`
- Read: `/Volumes/BotCentral/Users/milo/repos/MediaLaunch`

**Interfaces:**
- Consumes: Completed Tasks 1-5.
- Produces: Verified public website, private app, private repo visibility, and live auth gate.

- [ ] **Step 1: Verify public website repository**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
git status --short --branch
npm test
npm run lint
npm run build
```

Expected: repository is clean except committed local work waiting to push, and validation commands pass.

- [ ] **Step 2: Verify private app repository**

Run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/MediaLaunch
git status --short --branch
npm test
npm run lint
npm run build
gh repo view MiloTheAssistant/MediaLaunch --json name,visibility,url --jq '{name, visibility, url}'
```

Expected:

```json
{"name":"MediaLaunch","visibility":"PRIVATE","url":"https://github.com/MiloTheAssistant/MediaLaunch"}
```

- [ ] **Step 3: Verify live private app access boundary**

Run:

```bash
curl -I https://medialaunch.digitalenergymedia.com/
curl -I https://medialaunch.digitalenergymedia.com/ops
curl -sS https://medialaunch.digitalenergymedia.com/api/ops/summary | head -c 200
```

Expected: public entry responds, `/ops` is gated, and API response does not expose private Ops data unauthenticated.

- [ ] **Step 4: Push public website after verification**

Ask the owner for approval to push `DigitalEnergyMedia`. After approval, run:

```bash
cd /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia
git push origin main
```

Expected: public website source of truth includes the design and public link commits.

- [ ] **Step 5: Final report**

Generate the report with these commands:

```bash
public_local="$(git -C /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia rev-parse HEAD)"
public_origin="$(git -C /Volumes/BotCentral/Users/milo/repos/DigitalEnergyMedia ls-remote origin refs/heads/main | awk '{print $1}')"
private_local="$(git -C /Volumes/BotCentral/Users/milo/repos/MediaLaunch rev-parse HEAD)"
private_origin="$(git -C /Volumes/BotCentral/Users/milo/repos/MediaLaunch ls-remote origin refs/heads/main | awk '{print $1}')"
private_visibility="$(gh repo view MiloTheAssistant/MediaLaunch --json visibility --jq '.visibility')"
ops_headers="$(curl -sSI https://medialaunch.digitalenergymedia.com/ops | tr -d '\r' | awk 'NR==1 || /^location:/ {print}')"
api_denial="$(curl -sS -i https://medialaunch.digitalenergymedia.com/api/ops/summary | sed -n '1,8p')"
if test -e /Volumes/BotCentral/Users/milo/repos/SocialMediaAdmin; then
  old_folder="retained"
else
  old_folder="removed"
fi
cat <<REPORT
DigitalEnergyMedia public site: $public_local / $public_origin
MediaLaunch private repo: $private_local / $private_origin
MediaLaunch GitHub visibility: $private_visibility
MediaLaunch production URL: https://medialaunch.digitalenergymedia.com
Unauthenticated /ops behavior:
$ops_headers
Unauthenticated /api/ops/summary behavior:
$api_denial
Old SocialMediaAdmin folder: $old_folder
Archived old Codex tasks: 019f1ee6-4076-7d12-a880-32ed3735d83e, 019f23cb-d0e3-7012-b83c-d1b5db013d9e, 019f3c97-d7e3-7b33-89fb-8ac61a8e070a, 019f56de-8298-7980-8126-49727fd59080
Retained old Codex tasks: 019f6124-be0d-72a1-8871-cfa625465986, 019f6bb8-e9e5-7a23-a63b-18048c3a8ece
REPORT
```

Expected: user can see source, deployment, and task cleanup status without any secret values.
