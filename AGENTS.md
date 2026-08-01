# CRM Dashboard — Codex Instructions

## Role in this project

Codex acts primarily as a **code reviewer only**. Claude Code implements; Codex reviews Claude's uncommitted changes for blocking issues via `review-dirty`. If the user explicitly asks Codex to implement or edit files directly, Codex may do so and must follow the git workflow below.

**Current status (2026-08-01): the review path is broken on this machine.** `codex review --uncommitted` fails with `The 'gpt-5.4' model is not supported when using Codex with a ChatGPT account`, and there is a startup error `failed to load models cache: unknown variant 'max'`. Until the configured model is changed to one the account can use, Codex cannot review anything here.

## Git workflow (when asked to implement directly)

- **After finishing each file change, always create a commit for that file and push it to remote.** Do not leave direct implementation changes uncommitted unless the user explicitly asks you not to commit yet
- **Always use conventional commits**: `type(scope): description`
  - Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `build`, `ci`
  - Keep the description lowercase and concise
- **One commit per file** — never group multiple files in a single commit
- **Commit messages are the subject line plus the `Co-Authored-By` trailer, nothing else** — no body paragraphs
- **Always push to remote** (`git push`) after committing changes
- Add `Co-Authored-By: Codex <noreply@openai.com>` trailer to every commit

## What to check for in review

This is a small static front-end with no backend, no auth, no user input and no network calls, so most classes of security finding do not apply. The things that actually matter here:

- **Build correctness** — does `npm run build` still pass? It runs `tsc --noEmit` first, so type errors fail the build
- **Dependency hygiene** — anything that reintroduces `react-scripts`, or pushes `npm audit` above zero, is blocking. See `CLAUDE.md`
- **React correctness** — mutating state objects in place, `key={index}` on lists that reorder, effects without cleanup
- **Dead configuration** — config blocks left behind for tooling that is no longer installed (a `browserslist` block survived the Vite migration this way)

## Stack

Vite 8 + React 18 + TypeScript 5, Vitest 4 for tests, plain CSS. No backend. See [`ARCHITECTURE.md`](ARCHITECTURE.md).
