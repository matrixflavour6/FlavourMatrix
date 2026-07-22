# GastroChronicles — The Culinary Evolution

A 3-page, animated food-science site: Home (with the interactive **Flavor Dial**), the **Alchemy Lab** (filterable ingredient matrix), and the **Recipe Vault** (era-filtered recipes with a science drawer). Pure HTML/CSS/JS — no build step, no dependencies.

## File structure
```
gastrochronicles/
├── index.html          Home — hero, Flavor Dial, mission, era picker, IG strip
├── lab.html             Alchemy Lab — taste/compound filters, ingredient tiles, modal
├── recipes.html          Recipe Vault — sidebar filters, expandable recipe cards
├── css/
│   ├── style.css        shared design system (colors, type, nav, footer, buttons)
│   ├── home.css
│   ├── lab.css
│   └── recipes.css
└── js/
    ├── eras.js           shared era data (used by home.js)
    ├── main.js            shared scroll-reveal animation
    ├── home.js
    ├── lab-data.js
    ├── lab.js
    ├── recipes-data.js
    └── recipes.js
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
- **Recipes:** edit the `RECIPES` array in `js/recipes-data.js`. Each entry needs an `era` matching one of `neolithic / ancient / medieval / industrial / modern`.
- **Ingredients:** edit the `INGREDIENTS` array in `js/lab-data.js`.
- **Colors/type:** all design tokens live at the top of `css/style.css` under `:root`.

## About the CMS / admin panel
The original brief asked for an in-browser admin panel that edits content live and auto-syncs to GitHub ("Saved to Repo"). That's not achievable on GitHub Pages as built here — GitHub Pages only serves static files; there's no server component to accept edits or push commits, and doing so securely from a public browser isn't something you'd want anyway (it would mean shipping write credentials to every visitor).

If you want real in-browser content editing that publishes to your repo, the standard approach is a **git-based headless CMS** such as [Decap CMS](https://decapcms.org/) (free, open source) or [Tina CMS](https://tina.io/). Both give you a `/admin` login screen, a visual editor, and commit changes to your GitHub repo via OAuth — while the public site stays a plain static GitHub Pages deploy. Happy to wire one of these in as a next step if you'd like.
