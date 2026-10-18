# Portfolio — Abdulmuiz Annafi

Hand-built static portfolio. No framework, no template. Pure HTML, CSS, and vanilla JS, so it runs anywhere and loads fast.

## Run it locally
Open the folder in VS Code and click **Go Live** (Live Server extension), or just double-click `index.html`.
Live Server is better because the relative links to `projects/` work exactly like they will on GitHub Pages.

## Structure
```
Portfolio/
├── index.html            # one-page site: hero, about, projects, recognition, writing, contact
├── css/style.css         # all styling + light/dark themes + responsive rules
├── js/main.js            # theme toggle, nav, scroll reveal, project filter, typed hero
├── projects/
│   └── sidedoor.html     # sample case-study sub-page (pattern for more)
└── assets/               # put screenshots + resume here (see below)
```

## What's interactive
- Light / dark toggle (remembers your choice, respects your system default first)
- Sticky nav that highlights the section you're in
- Smooth scroll, mobile hamburger menu
- Scroll-reveal animations
- Filterable project grid (All / Detection / AI / Platforms / Crypto)
- Typed hero subtitle

## To make it yours
- **Screenshots:** drop images in `assets/img/` and replace the placeholder blocks (search for `shot` in the case page, and the `card__media` blocks in `index.html`).
- **Résumé:** put your PDF at `assets/Abdulmuiz-Annafi-Resume.pdf` (the Contact button already points there).
- **Writing links:** the three Writing cards point to your LinkedIn profile for now. Swap the `href` for the exact post URLs when you want.
- **More case studies:** copy `projects/sidedoor.html`, rename, edit, and link it from the matching project card.

## Deploy (when ready)
Push to a repo named `Abdulmuiz635.github.io` and enable GitHub Pages. It serves at `https://abdulmuiz635.github.io`.
