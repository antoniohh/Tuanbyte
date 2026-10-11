# Tuanbyte

Landing de marca de **Tuanbyte** (Canal de YouTube): mecánica casera, bricolaje y tecnología. Publicada en GitHub Pages con el dominio propio `tuanbyte.es`.

- **Plan de la web** → `docs/plans/web-landing-plan.md`
- **Despliegue** → `docs/info/despliegue-github-pages.md`
- **Backup DNS** → `docs/info/dns-snapshot-tuanbyte.md`

## Stack

Astro 5 + Tailwind CSS 4. Sitio 100% estático; los últimos vídeos se
obtienen del feed RSS del canal en cada build (ver plan, fase 3).
La landing antigua (2022) se conserva en `legacy/`.

## Comandos

```bash
npm install      # dependencias
npm run dev      # desarrollo (http://localhost:4321)
npm run build    # build en dist/
npm run preview  # sirve dist/
```

## Publicación

Se publica con `git push` a `main` (workflow de GitHub Pages).
Ver `docs/info/despliegue-github-pages.md` para el detalle de dominio y DNS.

Licencia CC BY 4.0 · Antonio Horrillo.
