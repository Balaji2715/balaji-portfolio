# Balaji Guggilam — Portfolio

A fast, responsive personal portfolio for **Balaji Guggilam** — Senior **QA Analyst & Business Analyst** (Manual Testing · Requirements & Scope · Web · Android · iOS · Desktop).

🔗 **Live:** https://balaji2715.github.io/balaji-portfolio/ *(after Pages is enabled — see below)*

## Highlights

- ⚡️ Pure static HTML/CSS/JS — **no build step**, zero runtime dependencies
- 🌗 Light / dark theme toggle (persisted)
- ✨ Animated hero (aurora, floating real app icons, typewriter role), skills marquee, scroll-reveal, count-up stats
- 📱 Fully responsive with mobile nav + scrollspy + back-to-top
- 🧩 Six **live production apps** with real App Store / Play Store / web links
- ♿️ Respects `prefers-reduced-motion`

## Project structure

```
balaji-portfolio/
├── index.html                 # Page markup & content
├── src/
│   ├── css/
│   │   └── styles.css          # Design tokens, layout, components, responsive
│   └── js/
│       └── main.js             # Theme, nav, scrollspy, reveal, counters, typewriter
├── assets/
│   ├── logos/                  # Real app icons (App Store artwork)
│   └── resume/
│       └── Balaji_Guggilam_Resume.pdf
├── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages on push to main
├── .editorconfig               # Consistent editor settings
├── .prettierrc.json            # Code formatting rules
├── package.json                # Dev/format scripts
├── LICENSE                     # MIT
└── README.md
```

## Run locally

No tooling required — just open `index.html`. To serve it (recommended, so relative paths resolve):

```bash
# Option A — npm script (uses npx serve, no install needed)
npm run dev            # → http://localhost:8000

# Option B — Python, no Node needed
python3 -m http.server 8000
```

## Formatting

```bash
npm run format         # format all files with Prettier
npm run format:check   # verify formatting in CI / pre-commit
```

## Deploy

**Automatic (recommended):** the included GitHub Actions workflow deploys on every push to `main`.
Enable it once: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

**Manual alternative:** **Settings → Pages → Deploy from a branch → `main` / `root`**.

Live at `https://<username>.github.io/balaji-portfolio/`.

## Customizing

| What | Where |
|---|---|
| Text, projects, links | `index.html` |
| Colors, fonts, spacing | CSS variables in `:root` at the top of `src/css/styles.css` |
| Behavior (theme, animations) | `src/js/main.js` |
| Resume | replace `assets/resume/Balaji_Guggilam_Resume.pdf` (keep the filename, or update the 3 links in `index.html`) |
| App icons | `assets/logos/` |

---

Built with plain web tech — QA-grade, no flaky dependencies.
