# Portfolio — Alexis Declippel

Portfolio personnel en **Vue 3 + Vite**, DA « Nocturne éditorial » (sombre, serif Fraunces, accent laiton).

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère dist/
npm run preview    # prévisualise le build
```

## Structure

```
public/            images + CV PDF + 404.html (redirection SPA)
src/
  data/skills.js   compétences par catégorie (ids = liaison avec les projets)
  data/projects.js projets (skillIds = compétences mises en avant)
  components/      NavBar, FooterBar, SkillsCarousel, ProjectCard
  views/           HomeView, ProjectsView (filtre ?tech=), CvView
```

Pour ajouter un projet : une entrée dans `projects.js`, une image dans `public/images/`.
Pour ajouter une compétence : une entrée dans `skills.js` ; si son `id` apparaît dans les
`skillIds` d'un projet, la puce du carrousel devient cliquable et filtre la page Projets.

## Déploiement GitHub Pages

1. Pousser ce projet dans le repo `Pryred/pryred.github.io` (branche `main`).
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` build et déploie à chaque push.

> Si un jour le site vit dans un repo projet (ex: `Pryred/portfolio`), mettre
> `base: '/portfolio/'` dans `vite.config.js`.
