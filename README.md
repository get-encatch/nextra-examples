# Nextra example

Sample Nextra docs site (Next.js) with Encatch page feedback in the footer.

## Setup

```bash
pnpm install
```

In the app you want to run, copy `.env.example` → `.env` and set your Encatch publishable key and form slugs (see that app's README for variable names).

**Publishable key:** [admin.encatch.com](https://admin.encatch.com) → **Settings** → **Publishable key**.

## Run

| App | Command | Docs |
|-----|---------|------|
| Next.js | `pnpm dev:nextjs` | http://localhost:3000/en (docs: `/en/docs`) |

From the app folder: `pnpm dev`.

## Encatch integration

The app uses the same pattern as [fumadocs-examples](../fumadocs-examples):

1. **`.env`** — publishable key + form slugs (from `.env.example`).
2. **`lib/encatch.tsx`** — SDK init, env, and form helpers.
3. **`components/docs-page-feedback.tsx`** — footer UI.
4. Root layout — `<EncatchInit locale={...} />`.
5. Docs page — `<DocsPageFeedback pageUrl={...} pageTitle={...} />`.

Details: [`apps/nextjs`](./apps/nextjs).

## Note

This repo applies a small [`pnpm` patch](./patches/nextra-theme-docs@4.6.1.patch) to `nextra-theme-docs@4.6.1` so `Layout` validates props correctly when `children` is passed as JSX (upstream issue with `LayoutPropsSchema`).
