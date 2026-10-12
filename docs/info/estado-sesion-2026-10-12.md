# Estado de sesión — 2026-10-12

Punto de arranque para mañana. Todo el trabajo del día está comprometido
(HEAD `b0e886c`, v0.4.0, build verde). Pendiente: **el `git push` no se ha
hecho todavía** — ejecútalo tú desde el repo (no hay credenciales en la sesión
del agente).

## Hecho hoy (resumen)

- Especiales: plan de ruta de nuevos especiales (docs/plans/ruta-nuevos-especiales.md)
  y hash router + limpieza de anclas.
- **Tuanbyte** (el foco del día): repo redeantocado como Astro 5 + Tailwind 4
  y desplegable a GitHub Pages con dominio propio.
  - Fase 1: esqueleto + workflow + CNAME (`tuanbyte.es`).
  - Fases 2-3: contenido completo y vídeos dinámicos con cadena de
    resiliencia (`src/lib/videos.ts`): feed RSS → scrape del canal →
    `videos-fallback.json`. Sin API key. **Hoy YouTube bloquea el feed desde
    esta red (404) pero el scrape funciona; en Actions no se ha comprobado.**
  - Fase 4: dirección de arte elegida por ti en la página de decisión —
    **"Catálogo de barrio"** — con review completa (fase de fixes: fecha de
    edición, fronteras curvas, tap targets) y ship. Documentado en
    `DESIGN.md` + `.impeccable/design.json`; PRODUCT.md creado.
  - Fase 5: imagen Open Graph propia (`public/images/og.png`), JSON-LD
    (Person + WebSite), preconnect ytimg, fetchpriority. Lighthouse
    **99/100/100/100**.
- DNS: registro A de tuanbyte.es → GitHub Pages (hecho por ti en Strato).
  `legacy/` borrado por ti a conciencia (recuperable de git: commit
  `283316f`).

## Pendiente mañana (lista corta)

1. `git push` desde tu terminal.
2. Comprobar `https://tuanbyte.es/` — el catálogo con miniaturas reales
   (primera visita del deploy con el build en Actions).
3. **Settings → Pages**: si el certificado figura activo, marcar
   **Enforce HTTPS**.
4. El `www`: hoy resuelve con 301 hacia el dominio principal. Si GitHub
   sigue con el cert del www sin cubrir, decidir si quedamos así (URL
   promocionada: sin www) o miramos otra pasada de emisión de cert.
5. Si la carga de vídeos visible en producción viene vacía (feed 404 en el
   runner también), mirar el log del build: el fallback local garantiza que
   aparezca contenido de todos modos.

## Opcional aparcado (otra ronda)

- Analítica sin cookies: GoatCounter (script de una línea).
- Cross-links: enlazar `tuanbyte.es` en las descripciones de los últimos
  vídeos en YouTube Studio.
- Ronda nueva de especiales (plan `docs/plans/ruta-nuevos-especiales.md`).

## Referencias rápidas

- Plan de la web: `docs/plans/web-landing-plan.md`
- Despliegue: `docs/info/despliegue-github-pages.md`
- Snapshot DNS: `docs/info/dns-snapshot-tuanbyte.md`
- Brief de superficie: `.impeccable/surfaces/src-pages-index-astro.md`
- Sesión de OpenCode: "Tuanbyte — landing catálogo de barrio (fase 4 ship)"
