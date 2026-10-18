# Portfolio — Abdulmuiz Annafi

Hand-built static portfolio. No framework, no template. Pure HTML, CSS, and vanilla JS, so it runs anywhere and loads fast.

## Run it locally
Open the folder in VS Code and click **Go Live** (Live Server extension), or just double-click `index.html`.
Live Server is better because the relative links to `projects/`.

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

