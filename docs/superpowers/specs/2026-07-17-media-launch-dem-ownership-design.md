# Media Launch DEM Ownership Design

## Decision

Digital Energy Media owns Media Launch as its internal media and social
operations control plane. Media Launch will stay in a private GitHub repository
named `MediaLaunch` and will be served from:

```text
MediaLaunch.digitalenergymedia.com
```

For DNS, Vercel, and test commands, use the lowercase canonical host
`medialaunch.digitalenergymedia.com`. The capitalized form is the human-facing
display form.

The public Digital Energy Media website remains in this repository and continues
to serve `digitalenergymedia.com` and `www.digitalenergymedia.com`.

## Recommended Architecture

Use two separately deployed applications:

- `DigitalEnergyMedia`: public marketing website and public lead capture.
- `MediaLaunch`: private operations application for media, social, account
  launch, mailbox staging, profile packets, approvals, and audit workflow.

The public website may link to `MediaLaunch.digitalenergymedia.com`, but it will
not contain the private operations app, credentials, provider account state,
mailbox evidence, local Ops state, or admin workflows.

## Repository Boundary

`MediaLaunch` replaces the old `SocialMediaAdmin` project identity. The current
implementation source is the private `DEM-SocialMediaAdmin` app; the clean move
is a rename or migration into the private `MediaLaunch` repo rather than a merge
into the public website repo.

The empty local `SocialMediaAdmin` folder should be retired after useful Codex
task history and active work are preserved or reassigned.

## Domain Boundary

`MediaLaunch.digitalenergymedia.com` is the DEM-owned display entry point for
the private app. The canonical configured host is
`medialaunch.digitalenergymedia.com`. The subdomain keeps routing, deployment,
environment variables, app auth, and audit state isolated from the public
website.

Use a subdomain rather than `/MediaLaunch` under the public site because it keeps
the source, deployment, and protection boundary explicit while still making the
app accessible through the Digital Energy Media domain.

## Access And Security Boundary

The Media Launch production domain can be reachable on the public internet, but
the app itself must remain private through its own authentication and
authorization gates. The source repository remains private in GitHub.

The public website must not proxy or render private Ops data. Any cross-link
from the public site should be a plain navigation link to the Media Launch
subdomain.

Media Launch keeps these controls:

- app-owned authentication for private routes;
- server-side authorization for mutating actions;
- private environment variables in the deployment provider;
- no committed runtime Ops state;
- no raw secrets, tokens, passwords, one-time codes, cookies, backup codes, or
  provider exports in git;
- provider writes and account-control changes remain explicitly approval-gated.

## Migration Scope

The clean move has five parts:

1. Preserve active `DEM-SocialMediaAdmin` work, including local commits,
   untracked plan docs, and the `feat/platform-mailbox-provisioning` worktree.
2. Rename or migrate the private source repo from `DEM-SocialMediaAdmin` to
   `MediaLaunch`.
3. Configure Vercel for the private Media Launch app at
   `medialaunch.digitalenergymedia.com`, displayed to users as
   `MediaLaunch.digitalenergymedia.com`.
4. Update the public Digital Energy Media site to link to the Media Launch
   subdomain without embedding private app code.
5. Retire the empty `SocialMediaAdmin` local project after Codex task history is
   preserved, reassigned, or archived.

## Non-Goals

This move does not:

- merge the private operations app into the public website repo;
- expose Media Launch source code publicly;
- copy local `.data` Ops state into the public website;
- change provider accounts, mailbox configuration, DNS, Vercel production
  domains, or GitHub repository names without an explicit implementation step;
- weaken the existing private Ops authentication boundary.

## Validation

Before the move is considered complete:

- `DigitalEnergyMedia` remains clean and continues to build/test as the public
  website.
- `MediaLaunch` builds/tests as the private app.
- `medialaunch.digitalenergymedia.com` resolves to the private app deployment.
- Unauthenticated Media Launch private routes redirect or deny access.
- No private Ops state or credential material is committed.
- Old `SocialMediaAdmin` tasks/folders are either reassigned, archived, or
  documented as intentionally retired.
