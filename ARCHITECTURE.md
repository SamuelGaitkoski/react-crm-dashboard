# CRM Dashboard — Architecture

How this codebase is structured and the conventions to follow when adding to it.
This is the source of truth for *structure*; `CLAUDE.md` covers commit and dependency
workflow, `INFRASTRUCTURE.md` covers automation and the (deliberate) absence of
hosting. Prefer linking here over restating.

This is a **single-page presentational dashboard** — a Vite + React + TypeScript
front-end with no backend, no router, no state management library and no data layer.
Every figure on screen is hardcoded in the component that renders it. Treat it as a
UI reference implementation, not an application.

## Layout

```
index.html                  Vite entry point — lives at the repo root, not in public/
src/index.tsx               Mounts <App /> into #root
src/App.tsx                 Renders <MainPage />, nothing else
src/pages/MainPage.tsx      The only page — composes the whole dashboard
src/components/*.tsx        17 presentational components
src/styles/*.css            One stylesheet per component, plus global.css
src/types/Item.ts           Shared types (currently just the todo Item)
src/assets/                 Images and SVGs, imported directly by components
public/                     Copied verbatim to the build root (favicon, manifest, robots)
```

`MainPage` is the composition root: it nests the layout chrome (`LateralBar`,
`TopBar`, `Footer`) around a grid of cards. Adding a card means writing the component,
writing its stylesheet, and slotting it into `MainPage`'s JSX — there is no registry
or config to update.

## Conventions

**One stylesheet per component.** `RevenueCard.tsx` imports `../styles/revenuecard.css`
as its first line. The CSS filename is the component name lowercased, no separators.
Class names are kebab-case and prefixed with the component's role
(`main-to-do-card`, `info-card-to-do-card`) — there are no CSS modules and no scoping,
so **prefixing is the only thing preventing collisions**. Keep it up.

**Components are named exports, arrow functions.** `export const ToDoCard = () => {}`.
`App` is the sole default export, because `index.tsx` imports it that way.

**Icons come from `@phosphor-icons/react`.** Import the named icon and pass
`size` / `weight` / `className` props. Do not reinstall `phosphor-react` — it was
abandoned in 2022 and swapped out deliberately.

**Assets are imported, not referenced by path.** `import helpIcon from '../assets/help-icon.svg'`
— Vite fingerprints and rewrites them at build time. A raw `/src/assets/...` string
in JSX will break in the production build.

## State and data

There is almost none, and that is the current design. The single piece of stateful
behaviour in the whole app is `ToDoCard`, which holds an `Item[]` in `useState` and
toggles `done` when a child reports a change. Everything else is static JSX.

If real data is ever introduced, this is the seam where it goes — cards would take
props instead of hardcoding their contents, and `MainPage` would become the place
that fetches. Nothing today anticipates that, and it does not need to until there is
a backend to talk to.

## Where to put new code

| Adding… | Goes in |
|---|---|
| A new dashboard card | `src/components/<Name>.tsx` + `src/styles/<name>.css`, slotted into `MainPage` |
| A shared type | `src/types/` |
| An image or icon file | `src/assets/`, imported by the component that uses it |
| A static file served as-is (robots, manifest) | `public/` |
| A global style or CSS reset | `src/styles/global.css` |

## Known gaps

- **Test coverage is a single file.** `src/App.test.tsx` mounts the whole app and
  covers the one interactive behaviour that exists (toggling a todo). Everything else
  is asserted only by "it rendered without throwing"
- **No component-level tests**, because there is almost nothing to assert on until
  cards take props instead of hardcoding their contents
