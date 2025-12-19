# Deployment — Vercel

Quick guide to deploy this Vite + React app to Vercel.

## Build & Output

- Build command: `npm run vercel-build` (maps to `vite build`)
- Output directory: `dist`

## Recommended `vercel.json`

A `vercel.json` is included in the repo which:

- Uses `@vercel/static-build` with `dist` as the output
- Adds SPA routing fallback so client-side routes resolve to `index.html`

## Steps

1. Push your repo to GitHub/GitLab/Bitbucket and connect it in the Vercel dashboard.
2. In the Project settings (if Vercel doesn't auto-detect):
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
3. If you have environment variables, add them in Vercel's Project Settings → Environment Variables.
4. Deploy — Vercel will run the build and publish the `dist` folder.

## Optional: CLI Deploy

You can also deploy locally using the Vercel CLI:

```bash
npx vercel --prod
```

## Configuring backend URL

If your frontend needs to call a backend, set the backend URL as an environment variable in Vercel's Project Settings → **Environment Variables**:

- **Key**: `VITE_API_URL`
- **Value**: `https://api.example.com` (replace with your backend URL)
- **Scope**: Production / Preview / Development as needed

Vite exposes env vars that start with `VITE_` at build time — they are embedded into the static bundle. Locally, create a `.env.local` (do **not** commit it) with the following:

```env
VITE_API_URL=http://localhost:8000
```

A `.env.example` file is included in the repo to document required variables.

If you need to change the backend URL without rebuilding static assets, consider using a Vercel Serverless or Edge Function to proxy requests (functions run server-side and can read runtime secrets).

## Notes

- The repo already has a working `build` script; `vercel-build` is an explicit alias for Vercel.
- If you need serverless functions in the future, add them under an `/api` folder and configure accordingly.
