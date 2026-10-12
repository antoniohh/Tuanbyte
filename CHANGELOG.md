# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto se adhiere a [versionado semántico](https://semver.org/lang/es/).

## [1.0.0] — 2026-10-13

Primera release de producción de **tuanbyte.es**: el catálogo del taller en
línea, con el mundo visual «catálogo de barrio» y contenido del canal que se
refresca solo.

### Añadido

- Landing completa: hero (edición continua desde enero de 2016 y 10 años de
  canal), regleta viva, últimos 10 vídeos, listas de reproducción, especiales,
  contacto y colofón de pie.
- Vídeos del canal en build con cadena de resiliencia: scrape de la pestaña
  Vídeos → feed RSS (con filtro de Shorts) → `videos-fallback.json`.
- Listas de reproducción reales (scrape de `/playlists` + fallback), con
  filtro de mínimo 5 vídeos.
- Mundo visual «catálogo de barrio» documentado en `DESIGN.md` y
  `.impeccable/design.json`, con revisión de acabado externa.
- Marca del canal aplicada: escudo como favicon y cabecera, tipografía de
  marca (Barlow 900) reservada al wordmark, banda roja de marca en el pie.
- Imagen Open Graph propia (1200×630) y datos estructurados JSON-LD
  (Person + WebSite).
- SEO: `robots.txt`, `sitemap.xml`, canónicas, Open Graph y Twitter Card.
- `LICENSE` con el texto legal completo de CC BY 4.0 y fórmula de atribución.
- `CHANGELOG.md` y `README.md` de proyecto.
- `public/CNAME` (`tuanbyte.es`) y workflow de GitHub Pages.

### Cambiado

- Registro del copy al español de España, revisado término a término.
- Cabecera: aire simétrico (78 px de alto) y navegación móvil en tira de
  4 pestañas.
- Carrusel de "Especiales" con marco limpio tras descartar el tratamiento
  experimental con cinta.

### Corregido

- Fecha de edición mal parseada (mostraba diciembre en mitad de octubre).
- Shorts colados en el catálogo de vídeos (prioridad invertida y filtro).
- Sección "Departamentos" sustituida por las listas de reproducción reales y
  eliminada la lista con 1 vídeo.
- Enlaces a `humans.txt` y «el código» retirados del pie; cuenta de GitHub
  inexistente retirada de contacto y JSON-LD.
- Recorte de la línea roja heredada en las capturas de los especiales.

### Eliminado

- El motivo `>_` del placeholder inicial (no pertenece a la marca).
- La carpeta `legacy/` con la vieja landing de 2022.

## [0.4.0] — 2026-10-12

Fase 5 (pulido). Imagen Open Graph propia, JSON-LD, `preconnect` a
`i.ytimg.com`, `fetchpriority` en la pieza destacada. Lighthouse 99/100/100/100.

## [0.3.0] — 2026-10-12

Fase 4 (dirección de arte). Mundo visual «catálogo de barrio» elegido en la
página de decisión del skill de diseño, con review de acabado (veredicto
_ship_) y documentación del sistema.

## [0.2.0] — 2026-10-12

Fases 2 y 3. Contenido completo de la landing y vídeos dinámicos con cadena
de resiliencia.

## [0.1.0] — 2026-10-12

Fase 1. Esqueleto Astro + Tailwind, workflow de GitHub Pages y `CNAME`.

## [0.0.0] — 2026-10-12

Fase 0. Plan de la web (`docs/plans/web-landing-plan.md`), guía de despliegue
y snapshot DNS.

[1.0.0]: ../../releases/tag/v1.0.0
[0.4.0]: ../../releases/tag/v0.4.0
[0.3.0]: ../../releases/tag/v0.3.0
[0.2.0]: ../../releases/tag/v0.2.0
[0.1.0]: ../../releases/tag/v0.1.0
