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
2. `npm run build` — this type-checks (`tsc --noEmit`) before invoking Vite, so type
   errors fail CI
3. `npx vitest run --passWithNoTests` — the flag is required because the repo has no
   test files yet; Vitest exits non-zero on an empty suite without it

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

## Known gaps

- **No linting** anywhere, local or CI. CRA provided ESLint implicitly and nothing
  replaced it after the migration
- **No test files**, so the CI test step is a no-op guarded by `--passWithNoTests`
- **Dependabot PRs are not auto-merged.** Once CI has proven itself, enabling
  auto-merge on the grouped patch PRs would remove the last routine notification
