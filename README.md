# onyitechub.com

Landing site for Onyitech JournalHub Ltd, built with Next.js (App Router).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` from inside this
   folder to deploy directly without GitHub).
2. In Vercel, "Add New Project" → import the repo → it will auto-detect
   Next.js, no config needed → Deploy.
3. In the project's Settings → Domains, add `onyitechub.com` and follow
   Vercel's DNS instructions (usually an A record or CNAME at your domain
   registrar).

## Editing content

All page copy lives in `app/page.tsx`. Styling and color/type tokens are in
`app/globals.css` (see the `:root` block at the top for the palette).

Contact email is currently set to `[email protected]` — update the
`mailto:` link in `app/page.tsx` if that changes.
