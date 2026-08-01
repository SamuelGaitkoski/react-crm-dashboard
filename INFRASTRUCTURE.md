# CRM Dashboard — Infrastructure

**There is none, and that is intentional.** This document exists so nobody — human or
agent — goes looking for a deploy pipeline, an environment file or a hosting dashboard
that was never set up.

## Topology

```
   Developer machine
        │
        │  npm run dev  →  Vite dev server on http://localhost:3000
        │  npm run build →  static bundle in dist/  (not published anywhere)
        ▼
   GitHub (SamuelGaitkoski/react-crm-dashboard)
        │
        ├─ GitHub Actions ──▶ CI: type-check, build, test
        └─ Dependabot ──────▶ weekly grouped dependency PRs
```

That is the entire surface. No server, no CDN, no database, no queue, no object store.

## What does not exist

| | Status |
|---|---|
| Hosting / live URL | **None.** No Vercel, Netlify, Render, GitHub Pages or container host |
| Deploy config | **None.** No `vercel.json`, `netlify.toml`, `Dockerfile`, `gh-pages`, no `homepage` field |
| Backend / API | **None.** Zero `fetch`, `axios` or HTTP calls anywhere in `src/` |
| Database | **None** |
| Environment variables | **None.** No `.env`, no `.env.example`, nothing read from `import.meta.env` |
| Secrets | **None**, so there is nothing in this repo that could leak |
| Analytics / error tracking | **None** |

The dashboard renders hardcoded data (see `ARCHITECTURE.md`), so there is nothing for
a backend to serve. If the project is ever published, `npm run build` emits a fully
static `dist/` that any static host will serve as-is — no runtime, no build-time
configuration, no environment needed.

## What does exist

### Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and every pull request:

1. `npm ci` on the Node version from `.nvmrc`, with npm cache
2. `npm run lint` — ESLint 10 flat config (`eslint.config.js`), with
   `typescript-eslint` and `eslint-plugin-react-hooks`
3. `npm run build` — this type-checks (`tsc --noEmit`) before invoking Vite, so type
   errors fail CI
4. `npx vitest run` — the suite in `src/App.test.tsx`

CI **verifies only**. It does not publish, deploy or release anything.

### Dependency automation

`.github/dependabot.yml` is the reason this repo stopped emailing security advisories.
The distinction that matters:

- **Security alerts** (GitHub default) are *reactive* — they fire after a CVE is
  published against a version already in `package-lock.json`. This repo received them
  for years while sitting untouched, because the lockfile was frozen while the advisory
  database grew
- **Version updates** (this file) are *proactive* — they open PRs on a schedule so
  dependencies never sit still long enough to rot into an advisory

Configuration: weekly npm updates, minor and patch grouped into one production PR and
one development PR to keep the volume near one PR a month. Majors arrive individually
because they need a human. GitHub Actions versions are updated monthly.

### Node version

Pinned in `.nvmrc` (24). `package.json` `engines` declares
`^20.19.0 || ^22.13.0 || >=24.0.0`, the intersection of what Vite 8, Vitest 4 and
jsdom 29 require. CI reads `.nvmrc` via `node-version-file`, so local and CI cannot
drift apart. Keep the two in sync when bumping either.

## History

The repo was built with Create React App in March 2023 and left untouched. By mid-2026
`npm audit` reported 50 advisories (2 critical, 24 high), all from `react-scripts`
transitive dependencies that could not be patched because CRA was deprecated in
February 2025. Migrating to Vite in August 2026 took it to zero. The CI and Dependabot
setup above exists so that state does not decay again.

## Merging Dependabot PRs — a deliberate choice

**Dependabot PRs are merged by hand, and `main` is intentionally left unprotected.**
This is a decision, not an oversight — do not "fix" it by adding auto-merge.

Auto-merge only acts on a PR that cannot be merged yet, which means it needs a
required status check, which means a ruleset on `main`. A ruleset requiring checks
also **blocks direct pushes to `main`**, and direct one-file pushes are how this repo
is actually worked on (see `CLAUDE.md`). Making both work needs an admin bypass entry
in the ruleset plus write permissions for the Dependabot-triggered workflow token —
a lot of machinery for a dormant portfolio project.

Instead: Dependabot email notifications are disabled at the account level, grouped
PRs accumulate quietly at roughly one a month, and they get merged when convenient
with CI already showing green. Same outcome, none of the moving parts.

If this repo ever becomes actively developed by more than one person, revisit —
that is the point at which protecting `main` earns its cost.

## Known gaps

- **Test coverage is thin** — one file covering the single interactive behaviour.
  Enough to make the CI step meaningful, not enough to catch a regression in the
  static markup
