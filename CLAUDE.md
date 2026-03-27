# CLAUDE.md — Pavan Manjunath's Portfolio

## Project overview

Personal portfolio site for **Pavan Venkata Manjunath Mallipudi** — CS + Data Science student at ASU (graduating May 2026). Built with React 18, TypeScript, Vite, Tailwind CSS v3, Framer Motion, and Lucide React icons. No backend — purely static, deployed as a SPA.

## Commands

```bash
npm run dev        # start dev server (Vite, localhost:5173)
npm run build      # tsc type-check + Vite production build → dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint with zero-warnings policy (--max-warnings 0)
```

## Project structure

```
src/
  App.tsx               # root layout; section order defined here
  index.css             # global styles, utility classes, custom scrollbar
  components/           # one file per section + shared components
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Education.tsx
    Achievements.tsx
    Resume.tsx
    Contact.tsx
    Footer.tsx
    CursorEffect.tsx
  data/                 # typed data arrays — update content here, not in components
    experience.ts
    projects.ts
    skills.ts
    achievements.ts
public/
  resume.pdf            # linked from Resume.tsx for download + preview
```

## Design system

**Color palette — McLaren-inspired orange-on-black theme:**

| Token | Value | Usage |
|---|---|---|
| Background | `#0D0D0D` | All section backgrounds |
| Primary orange | `#FF8000` | Accent text, borders, icons |
| Mid orange | `#FF6B00` | Gradient midpoint |
| Light orange | `#FFB347` | Gradient end, muted accents |
| Text primary | `#F9FAFB` | Headings, body |
| Text muted | `#9CA3AF` (gray-400) | Subtitles, labels |

**Tailwind custom tokens** (defined in `tailwind.config.js`):
- `font-display` → Space Grotesk
- `font-sans` → Inter
- Colors: `mclaren-{950,900,800,700,600}`, `orange-{DEFAULT,50–900}`

**Reusable CSS utility classes** (defined in `index.css`):
- `.glass` — frosted-glass card background (`rgba(255,255,255,0.03)` + backdrop blur)
- `.glass-hover` — hover lift + orange border transition
- `.glow` / `.glow-sm` — orange box-shadow glow
- `.text-gradient` / `.text-gradient-reverse` — orange gradient text fill
- `.noise` — SVG noise texture overlay (used in Hero)

**Standard gradient string:** `from-[#FF8000] via-[#FF6B00] to-[#FFB347]`

## Component conventions

- Every section is a `<section id="...">` with `py-20 md:py-28` vertical padding.
- Section headers follow a three-part pattern: small orange uppercase label → bold white `<h2>` → 16px orange gradient underline `div`.
- Animations use `framer-motion`: `initial={{ opacity: 0, y: 20/30 }}`, `whileInView`, `viewport={{ once: true, margin: '-100px' }}`.
- Cards use `className="glass rounded-2xl border border-white/6"` with an optional `h-1` orange gradient top bar.
- Icons are exclusively from `lucide-react`.
- No CSS modules, no styled-components — Tailwind only.

## Data layer

All content lives in `src/data/`. Components import typed arrays from there.

| File | Exported type + array |
|---|---|
| `experience.ts` | `Experience`, `experiences[]` |
| `projects.ts` | `Project`, `projects[]` |
| `skills.ts` | skill categories array |
| `achievements.ts` | achievements array |

**To update content** (new job, project, skill, etc.) — edit the relevant data file only; the component re-renders automatically.

`projects.ts` has a `// TODO` comment noting that some projects still use placeholder content — those should be replaced with real project data.

## Key details

- `cursor: none` is set globally; `CursorEffect.tsx` renders a custom cursor.
- `resume.pdf` must exist in `public/` for the download and preview buttons in `Resume.tsx` to work.
- The lint config enforces `--max-warnings 0` — fix all warnings before building.
- `tsconfig.json` + `tsconfig.node.json` are standard Vite/React setups; no path aliases configured.
