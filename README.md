# CRM Dashboard

Project developed with React, TypeScript and Vite.

A single-page presentational dashboard. It runs locally only — there is no backend and
it is not deployed anywhere. See [`INFRASTRUCTURE.md`](INFRASTRUCTURE.md).

## Documentation

| Document | Covers |
|---|---|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Project structure, styling and component conventions |
| [`INFRASTRUCTURE.md`](INFRASTRUCTURE.md) | CI, Dependabot, and why there is no hosting |
| [`CLAUDE.md`](CLAUDE.md) | Instructions for Claude Code |
| [`AGENTS.md`](AGENTS.md) | Instructions for Codex |
| [`REASONIX.md`](REASONIX.md) | Instructions for ReasonIX / DeepSeek |

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads instantly when you make edits.

### `npm run build`

Type-checks the project and builds it for production to the `dist` folder.\
The build is minified and the filenames include hashes.

### `npm run preview`

Serves the production build locally so you can check it before deploying.

### `npm test`

Runs the test suite with [Vitest](https://vitest.dev) in watch mode.

### `npm run typecheck`

Runs the TypeScript compiler without emitting output.

See the [Vite deployment guide](https://vite.dev/guide/static-deploy) for how to publish the `dist` folder.
