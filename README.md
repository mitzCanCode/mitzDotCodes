# mitz.codes

A React Router portfolio built as a static single-page application for Cloudflare Pages.

## Development

```bash
npm ci --include=dev
npm run dev
```

The development server is available at `http://localhost:5173`.

## Checks and production preview

```bash
npm run typecheck
npm run build
npm start
```

The build produces `build/client/index.html` and static assets. The local preview
is available at `http://localhost:4173`. Vite preview is for verification, not
production hosting.

## Cloudflare Pages

Connect this repository to a Cloudflare Pages project with these settings:

- **Framework preset:** None (use the settings below).
- **Build command:** `npm run build`
- **Build output directory:** `build/client`
- **Root directory:** repository root
- **Environment variable:** `NODE_VERSION=24`

Allow Pages to install npm dependencies, including development dependencies used
by the build. No Pages Functions, Worker, or server entry point is required.

Pages automatically serves `index.html` for paths that do not match a static file,
so direct visits and refreshes on `/boot`, `/main`, and `/projects?category=web`
work. Do not add a top-level `404.html`, which disables Pages' default SPA fallback.
The home route redirects to `/boot` in the browser.

For manual deployment, upload the contents of `build/client` using Pages'
Direct Upload flow after building.

Other static hosts must also be configured to serve `index.html` as the SPA fallback.

## Optional Docker deployment

The Docker image serves the same static build with nginx and SPA fallback:

```bash
docker build -t mitz-codes .
docker run --rm -p 3000:80 mitz-codes
```

Open `http://localhost:3000`.
