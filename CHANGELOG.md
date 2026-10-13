# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto se adhiere a [versionado semántico](https://semver.org/lang/es/).

## [1.4.0] — 2026-10-14

Migración de los especiales al catálogo: los reportajes dejan de vivir en un
proyecto aparte y pasan a ser **páginas de este sitio**.

### Añadido

- **Sección de especiales** en el sitio: índice editorial en `/especiales` y los
  dos reportajes en `/especiales/guia-motos` y `/especiales/suvs-hev`, con el
  sistema del catálogo (papel, cinta, minio, tipografías).
- **Contenido portado completo**: portada, veredicto en banda de tinta, ranking
  multicriterio, 14 + 8 fichas desplegables y los cuatro apéndices técnicos de
  cada reportaje.
- **Navegación multipágina**: la cabecera estrena la página real *Especiales*
  con estado activo, migas dentro de los reportajes y las secciones de la
  portada movidas a un **submenú** («Secciones ▾», sin anclas sueltas).
- **SEO por reportaje**: canónica, Open Graph propio, JSON-LD
  (`Article` + `BreadcrumbList`) y entradas en el `sitemap.xml`.
- **Cero JavaScript de framework**: se abandona React (el build anterior eran
  ~270 KB de JS) y las fichas se despliegan con `<details>` nativo.

- **Escaparate**: rejilla con todos los modelos a la vista (foto recortada,
  puesto y nota) que enlaza a su ficha; al abrirse, cada ficha ocupa el ancho
  completo con las especificaciones en filas.
- **Unificación**: un único componente `Reportaje.astro` pinta los dos
  reportajes a partir de su configuración; cada página es solo datos y textos.

### Cambiado

- **Navegación sin anclas**: la barra queda en *El Taller* y *Especiales* (con
  estado activo) y el pie en *secciones: El Taller y Especiales*. Los enlaces a
  secciones de la portada se retiran (también el submenú).
- La sección *Especiales* de la portada enlaza dentro del sitio y muestra las
  portadas de los modelos ganadores (antes, capturas del sitio antiguo).

### Corregido

- Concordancia de género: el chip del ranking dice **ganadora** en las motos y
  **ganador** en los coches.

### Eliminado

- Las capturas `anexo-*.png` del proyecto anterior.

[1.4.0]: ../../releases/tag/v1.4.0
## [1.3.0] — 2026-10-14

### Añadido

- **Google Analytics 4** (gtag.js, `G-JPK8PQEMEM`) en el `<head>`, cargado
  **solo en producción** (los builds de desarrollo no envían datos).
- **Consent Mode v2 con aviso de cookies** propio: todo denegado por defecto y
  la analítica solo se habilita si la persona acepta. La decisión se guarda en
  el navegador (almacenamiento local) y se puede revisar desde el pie.
- **Página `/cookies`** (Cookies y datos) explicando qué se guarda, para qué y
  cómo cambiar de opinión; enlazada desde el aviso, el pie y el `sitemap.xml`.
- El titular de las secciones funciona también fuera de la portada (enlaces
  absolutos).

## [1.2.0] — 2026-10-13

Release final de producción de **tuanbyte.es**.

### Añadido

- **Titular del hero**: «El taller de Tuanbyte» (antes «El catálogo del
  taller»), con **meta título** orientado a búsqueda — «Tuanbyte — mecánica
  casera, parcela, bricolaje y tecnología» — e **imagen Open Graph**
  regenerada con el titular nuevo.
- **Guía de despliegue reescrita** con la configuración de dominio ya
  resuelta: raíz con A/AAAA, `www` con CNAME directo a `antoniohh.github.io`,
  certificado único que cubre los dos nombres y **Enforce HTTPS** activado.
  Explicación del montaje en el `README.md` y snapshot DNS actualizado.
- **Los especiales, en su nueva casa**: `especiales.tuanbyte.es` (repo
  *Especiales* v1.3.4, con CNAME, canónica, OG, sitemap y robots migrados) y
  enlazados desde este catálogo y su pie.

### Cambiado

- **Línea de edición** sin «10 años en YouTube»: queda «edición continua —
  enero de 2016 a <mes> de <año>», cuerpо 24 px y una sola línea.
- **Sello del pie**: «10 años creando contenido».
- **Contacto**: sin el rótulo «correo» y sin margen superior en el párrafo del
  email.

## [1.1.1] — 2026-10-13

Release de producción de **tuanbyte.es**. Sobre el esqueleto de la 1.0.x, esta
versión pone la marca, el contenido real y la licencia.

### Añadido

- **Marca del canal**: escudo como favicon (48/96/180 px) y cabecera, y
  tipografía de marca (Barlow 900, identificada del propio escudo) reservada
  al wordmark.
- **Listas de reproducción reales** del canal (scrape de `/playlists` con
  fallback), filtradas a ≥ 5 vídeos, con enlace «ver lista».
- **Sección de contacto** rediseñada como tarjeta: correo en manuscrita y
  redes con su identificador real.
- **Colofón de pie** con marca, sello de años y enlaces de sección; banda roja
  de marca al cierre.
- **Copyright**: `LICENSE` con el texto legal completo de CC BY 4.0, fórmula
  de atribución y enlace a la licencia desde el pie; `CHANGELOG.md` y
  `README.md` de proyecto.
- **Rebuild diario programado** (cron `06:17 UTC`) para refrescar vídeos y
  fecha de edición sin intervención.
- **Dominio resuelto**: raíz en GitHub Pages con registro A/AAAA y
  `www.tuanbyte.es` con CNAME directo a `antoniohh.github.io`, de modo que un
  único certificado cubre ambos nombres; `www` redirige al raíz y **Enforce
  HTTPS** queda activado. Sin SSL de Strato.
- **Línea de edición** en el hero: «edición continua — enero de 2016 a <mes> de
  <año> · N años en YouTube», con los años calculados en build.

### Cambiado

- **Copy revisado al español de España**, término a término (suscríbete,
  vídeo n.º, ver el vídeo, «Especiales» en lugar de «Folletos anexos»).
- **Cadena de datos de vídeos** reordenada: scrape de la pestaña Vídeos →
  feed RSS (filtrando Shorts) → fallback local. Fuera los Shorts del catálogo.
- **Cabecera**: aire simétrico (78 px) y navegación móvil en tira de 4
  pestañas a lo ancho.
- **Tarjetas de Especiales**: marco limpio, sin el canto desplazado que
  parecía un borde descuadrado.
- `package.json` con descripción, repositorio, `homepage` y Node ≥ 22.

### Corregido

- Fecha de edición mal parseada (llegó a mostrar «diciembre» en octubre).
- Capturas de los especiales con una línea roja heredada en el borde superior.

### Eliminado

- El motivo `>_` del placeholder inicial (no pertenece a la marca).
- La cuenta de GitHub inexistente de la sección de contacto y del JSON-LD.
- La carpeta `legacy/` con la vieja landing de 2022.

## [1.0.0] — 2026-10-12

Puesta en marcha del proyecto en ocho pasos taggeados (`v1.0.0` → `v1.0.7`):

- **v1.0.0** — Esqueleto Astro + Tailwind, workflow de GitHub Pages y `CNAME`
  (`tuanbyte.es`).
- **v1.0.1** — Landing completa: hero, últimos vídeos y departamentos.
- **v1.0.2** — Mundo visual «catálogo de barrio».
- **v1.0.3** — Dirección de arte documentada (`DESIGN.md`, `design.json`) y
  correcciones del review.
- **v1.0.4** — Restauración de `legacy/`.
- **v1.0.5** — Retirada de `legacy/` (decisión del autor).
- **v1.0.6** — Open Graph propia, JSON-LD y pulido de rendimiento.
- **v1.0.7** — Estado de sesión documentado.

[1.3.0]: ../../releases/tag/v1.3.0
[1.2.0]: ../../releases/tag/v1.2.0
[1.1.1]: ../../releases/tag/v1.1.1
[1.0.0]: ../../releases/tag/v1.0.0
