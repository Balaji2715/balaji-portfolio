# Balaji Guggilam — Portfolio

A fast, responsive personal portfolio website for **Balaji Guggilam**, Senior Quality Control Analyst / Manual Testing Engineer. Showcases QA projects, skills, and experience.

🔗 **Live site:** _enable GitHub Pages (see below) to publish_

## Features

- ⚡️ Pure static HTML/CSS/JS — no build step, no dependencies
- 🌗 Light / dark theme toggle (remembers your choice)
- 📱 Fully responsive with a mobile nav
- ✨ Scroll-reveal animations + animated stat counters
- 🧪 QA-themed hero with a live "test report" terminal
- 📄 Downloadable resume

## Sections

| Section | Contents |
|---|---|
| **Hero** | Intro, headline stats (years, test cases, projects, defect reduction) |
| **About** | Bio + a simulated test-run terminal |
| **Skills** | Methodologies, defect management, API/mobile, automation, tools, docs |
| **Projects** | Featured work — MyBabyWish, Nice Guides (Sightwalk), The Easy One (Manuel) — plus 17 other contributions |
| **Experience** | Work + education timeline |
| **Contact** | Email, phone, resume download |

## Run locally

No tooling needed — just open the file:

```bash
open index.html
```

Or serve it (recommended, so relative paths and the resume download behave correctly):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then **Save**.
5. Your site goes live at `https://<username>.github.io/balaji-portfolio/`.

## Project structure

```
balaji-portfolio/
├── index.html          # Markup + content
├── styles.css          # Design system + layout + responsive
├── script.js           # Theme, nav, scroll-reveal, counters
├── assets/
│   └── Balaji_Guggilam_Resume.pdf
└── README.md
```

## Customizing

- **Content** lives in `index.html` — update text, projects, and links directly.
- **Colors / fonts** are CSS variables at the top of `styles.css` (`:root`).
- **Resume** — replace the PDF in `assets/` (keep the filename or update the two links in `index.html`).

---

Built with plain web tech. Contributions and tweaks welcome via PR.
