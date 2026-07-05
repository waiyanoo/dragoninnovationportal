# Dragon Innovation Portal

Corporate website for Dragon Innovation, a B2B trading and brand development company founded in 2021. The site presents the company's brand portfolio (Hanskin, Mongdies, SugarBear), import solutions, and digital marketing services.

Live site: [dragoninnov.com](https://dragoninnov.com)

## Tech Stack

- [Astro 5](https://astro.build) — static site framework
- [Bootstrap 5](https://getbootstrap.com) + Sass — styling and layout
- [Firebase Hosting](https://firebase.google.com/docs/hosting) — deployment (serves `dist/`)
- `@astrojs/sitemap` — sitemap generation

## Project Structure

```
/
├── public/              # Static assets served as-is
├── src/
│   ├── assets/js/       # Theme and plugin scripts
│   ├── components/      # Astro components (Header, Footer, brand sections, ...)
│   ├── firebase/        # Firebase client setup
│   ├── layouts/         # Shared page layout
│   └── pages/           # Routes (index, aboutus, contact, brand pages, ...)
├── astro.config.mjs
├── firebase.json        # Firebase Hosting config
└── package.json
```

Each `.astro` file in `src/pages/` becomes a route based on its file name — e.g. `src/pages/importsolutions.astro` → `/importsolutions`.

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Deployment

The site is deployed to Firebase Hosting from the `dist/` directory:

```
npm run build
firebase deploy
```
