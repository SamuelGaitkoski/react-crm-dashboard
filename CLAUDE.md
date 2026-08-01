# CRM Dashboard — Claude Instructions

## Review workflow

Before making any git commit, run `review-dirty` so Codex reviews the uncommitted diff. Fix any BLOCKING issues first, then commit.

**Known breakage (2026-08-01):** `review-dirty` does not currently work on this machine. The daemon never writes `/tmp/codex-review-done`, and the `codex review --uncommitted` fallback dies with `The 'gpt-5.4' model is not supported when using Codex with a ChatGPT account`. When it fails this way: report it, do **not** retry or loop, verify the change with the commands under "Verifying a change" instead, and proceed to commit.

## Git workflow

- **Always use conventional commits**: `type(scope): description`
  - Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `build`, `ci`
  - Keep the description lowercase and concise
- **One commit per file** — never group multiple files in a single commit
- **Commit messages are the subject line plus the `Co-Authored-By` trailer, nothing else.** No body paragraphs explaining the change — the diff is the explanation
- **Always push to remote** (`git push`) after every commit
- Add `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` trailer to every commit

## Verifying a change

There is no meaningful test suite (see `ARCHITECTURE.md` — the app has no logic worth asserting on yet), so "it compiles" is most of the signal available. Before committing, run:

```
npm run typecheck                    # tsc --noEmit
npm run build                        # typecheck + vite build
npx vitest run --passWithNoTests     # what CI runs
```

To verify something actually renders rather than merely compiles, write a temporary test that mounts `<App />` with `@testing-library/react` and assert on the DOM, then delete it. That is how the icon-library swap was validated.

## Dependencies

- **Never reintroduce `react-scripts` / Create React App.** It was removed in favour of Vite because CRA is deprecated and its frozen transitive dependencies were the source of all 50 security advisories this repo used to email about
- **React stays on 18** deliberately. `npm outdated` will keep offering 19 — that is feature work, not maintenance, and this repo is not actively developed
- Routine version bumps arrive as grouped Dependabot PRs (`.github/dependabot.yml`). Prefer merging those over hand-editing versions
- Keep `npm audit` at zero. If it is non-zero, that is the thing to fix before anything else
- Node version is pinned in `.nvmrc` and constrained by `engines` in `package.json` — keep the two consistent

## Conventions

Structure and styling conventions live in [`ARCHITECTURE.md`](ARCHITECTURE.md). Hosting and automation live in [`INFRASTRUCTURE.md`](INFRASTRUCTURE.md). Prefer linking to those over restating them here.
