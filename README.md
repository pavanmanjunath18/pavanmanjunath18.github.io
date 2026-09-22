# pavanmanjunath18.github.io

Personal portfolio — a single immersive page (Three.js + GSAP + Web Audio).
Styles and scripts live inside `index.html`; there is no build step. Images sit in
`assets/`, certificate PDFs in `certs/`, and the resume at `resume.pdf`.

## Deploy
GitHub Pages serves the repo root. The included Action
(`.github/workflows/deploy.yml`) publishes automatically on every push to `main`.

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

## Edit
Open `index.html` and edit directly.

- **Photo** — replace `assets/profile.jpg` (roughly square works best; the frame
  crops it to 4:5 and applies the duotone treatment).
- **Resume** — replace `resume.pdf`.
- **Certifications** — add a card to the `#certifications` grid. Credly badges use
  an `<img class="badge">` from `assets/`; PDF certificates link into `certs/`.
- **Projects** — add an `<article class="work-item">` to `#work`. The `.work-cover`
  link covers the whole row (primary destination) and the `.work-links` row holds
  the GitHub repo and live demo links.
