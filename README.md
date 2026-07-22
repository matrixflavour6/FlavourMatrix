# GastroChronicles — The Culinary Evolution

A 3-page, animated food-science site: Home (with the interactive **Flavor Dial** and **Timeline Portal**), the **Alchemy Lab** (a periodic table of 115 chemical compounds), and the **Recipe Vault** (54 recipes with cooking-mode step checkboxes and a chemical analysis drawer). Pure HTML/CSS/JS — no build step, no dependencies.

## Content scale
- **54 recipes** across 5 eras (11 / 11 / 11 / 11 / 10)
- **115 compounds** in the Alchemy Lab (33 core + 82 extended), across 10 categories
- **15 milestones** in the homepage Timeline Portal
- Every recipe step is checkable in **Cooking Mode**; progress is saved per-browser via `localStorage`, so it persists across visits.

## File structure
```
gastrochronicles/
├── index.html           Home — hero, Flavor Dial, Timeline Portal, era picker, IG strip
├── lab.html              Alchemy Lab — periodic table of 115 compounds, category filters, modal
├── recipes.html           Recipe Vault — 54 recipes, era/difficulty filters, cooking mode
├── css/
│   ├── style.css          shared design system (colors, type, nav, footer, buttons)
│   ├── home.css           hero, dial, mission, era picker, Timeline Portal
│   ├── lab.css            periodic table tiles, category chips, compound modal
│   └── recipes.css        sidebar, recipe cards, cooking-mode checkboxes
└── js/
    ├── eras.js             shared era data (dial, era-picker)
    ├── timeline-data.js     15 historical milestones
    ├── main.js              shared scroll-reveal animation
    ├── home.js              dial + era-picker + Timeline Portal logic
    ├── lab-data.js           115 compounds across 10 categories
    ├── lab.js                category filters, core/extended toggle, modal
    ├── recipes-data.js        54 recipes across 5 eras
    └── recipes.js             search/filters, cooking-mode checkboxes, localStorage
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (or use an existing one).
2. Copy everything inside this `gastrochronicles/` folder into the **root** of that repo (so `index.html` sits at the repo root, not nested).
3. Commit and push:
   ```
   git init
   git add .
   git commit -m "GastroChronicles site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. In the repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `root`** → Save.
5. Your site goes live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

No build tools, npm install, or server needed — GitHub Pages just serves the static files as-is.

## Editing content
- **Recipes:** edit the `RECIPES` array in `js/recipes-data.js`. Each entry needs an `era` matching one of `neolithic / ancient / medieval / industrial / modern`, plus a `steps` array (used for cooking-mode checkboxes) and a `science` field (shown in the chemical analysis drawer).
- **Compounds:** edit the `COMPOUNDS` array in `js/lab-data.js`. Each entry needs a `category` matching one of the 10 keys in `CATEGORY_META`, plus `formula`, `molarMass`, `action`, and `uses`. Set `core: true` for the ~33 that should show by default before the "Show extended set" toggle.
- **Timeline milestones:** edit the `MILESTONES` array in `js/timeline-data.js`.
- **Colors/type:** all design tokens live at the top of `css/style.css` under `:root`.

## About the CMS / admin panel
The original brief asked for an in-browser admin panel that edits content live and auto-syncs to GitHub ("Saved to Repo"). That's not achievable on GitHub Pages as built here — GitHub Pages only serves static files; there's no server component to accept edits or push commits, and doing so securely from a public browser isn't something you'd want anyway (it would mean shipping write credentials to every visitor).

If you want real in-browser content editing that publishes to your repo, the standard approach is a **git-based headless CMS** such as [Decap CMS](https://decapcms.org/) (free, open source) or [Tina CMS](https://tina.io/). Both give you a `/admin` login screen, a visual editor, and commit changes to your GitHub repo via OAuth — while the public site stays a plain static GitHub Pages deploy. Happy to wire one of these in as a next step if you'd like.
