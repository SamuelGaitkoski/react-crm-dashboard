# CRM Dashboard — ReasonIX / DeepSeek Instructions

## Git workflow

- **After finishing each file change, always create a commit for that file and push it to remote.** Do not leave changes uncommitted unless the user explicitly asks you not to commit yet
- **Always use conventional commits**: `type(scope): description`
  - Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `build`, `ci`
  - Keep the description lowercase and concise
- **One commit per file** — never group multiple files in a single commit
- **Commit messages are the subject line plus the `Co-Authored-By` trailer, nothing else** — no body paragraphs
- **Always push to remote** (`git push`) after committing changes
- Add `Co-Authored-By: ReasonIX <noreply@reasonix.ai>` trailer to every commit

## Verifying a change

Run what CI runs, in the same order:

```
npm run lint        # eslint 10 flat config
npm run build       # tsc --noEmit, then vite build
npx vitest run      # src/App.test.tsx
```

Test coverage is deliberately thin — one file covering the single interactive behaviour — so a green suite is weaker evidence here than in a normal project. To prove something renders rather than merely compiles, extend `src/App.test.tsx` or mount `<App />` in a temporary `@testing-library/react` test and assert on the DOM.

## Stack

- Vite 8 (build + dev server), React 18, TypeScript 5, Vitest 4 + jsdom
- `@phosphor-icons/react` for icons — **not** `phosphor-react`, which was abandoned in 2022 and replaced
- Plain CSS, one stylesheet per component in `src/styles/`. No CSS framework, no CSS-in-JS, no Tailwind
- **No backend, no database, no environment variables, no deployment.** All dashboard data is hardcoded in the components
- Node pinned in `.nvmrc`; `engines` in `package.json` must stay consistent with it

## Constraints

- Never reintroduce `react-scripts` / Create React App — it was removed because it is deprecated and was the source of every security advisory this repo used to generate
- React stays on 18 deliberately; do not upgrade to 19 as part of unrelated work
- Keep `npm audit` at zero

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for structure and [`INFRASTRUCTURE.md`](INFRASTRUCTURE.md) for automation.
