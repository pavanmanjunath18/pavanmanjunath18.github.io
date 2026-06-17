# pavanmanjunath18.github.io

Personal portfolio — a single self-contained immersive site (Three.js + GSAP + Web Audio).
Everything (styles, scripts, photo, and resume PDF) is embedded in `index.html`; there is no build step.

## Deploy
GitHub Pages serves the repo root. The included Action
(`.github/workflows/deploy.yml`) publishes automatically on every push to `main`.

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

## Edit
Open `index.html` and edit directly. To swap the resume or photo, replace the
base64 data already embedded in the file.
