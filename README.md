# native-stack.github.io

Official landing page for the **[@native-stack](https://github.com/native-stack)** organization.

> Native Performance via Minimal Abstraction

## Tech Stack

- [Astro 5](https://astro.build) — Static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS (CSS-first config via `@theme`)
- Deployed to **GitHub Pages**

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev
```

## Build & Preview

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This site deploys to GitHub Pages automatically via GitHub Actions.

### Manual Deployment

1. Push to the `main` branch.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## License

MIT
