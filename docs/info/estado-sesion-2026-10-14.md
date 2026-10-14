# Estado de sesión — 2026-10-14

Punto de arranque. Hoy ha entrado **la migración de los especiales** dentro del
catálogo y la analítica con consentimiento. Todo commiteado; pendiente de
`push` y de publicar el tag **v1.4.0**.

## Hecho

### Analítica con consentimiento

- **Google Analytics 4** (`G-JPK8PQEMEM`) en el `<head>`, **solo en
  producción**.
- **Consent Mode v2**: todo denegado hasta que la persona acepta; aviso de
  cookies propio (mundo del catálogo) que recuerda la decisión en el navegador
  y se puede revisar desde el pie.
- **Página `/cookies`** (qué se guarda, analítica, cómo revocar) enlazada desde
  el aviso, el pie y el `sitemap.xml`.

### Migración de los especiales (fases F1–F4 y F6 del plan)

- Rutas nuevas: `/especiales`, `/especiales/guia-motos`, `/especiales/suvs-hev`.
- Contenido portado completo (portada, veredicto en banda de tinta, ranking,
  fichas, 4 tablas por reportaje; en SUVs también el cuadro *¿Qué es un HEV?*).
- **Un componente de reportaje** (`especiales/shared/Reportaje.astro`): las
  páginas son solo configuración y datos.
- **Garaje / escaparate**: rejilla donde cada tarjeta es su ficha; al abrirse se
  despliega a lo ancho, con la imagen creciendo de 96 a 208 px, sin duplicar
  foto y sin estirarse en móvil.
- **Cero JavaScript de framework**: fuera React y su router (~270 KB de JS).
- SEO: canónica, OG propio, JSON-LD (`Article` + `BreadcrumbList`) y sitemap.

### Navegación y copy

- Barra: **El Taller** + **Especiales** (con estado activo). Fuera las anclas de
  sección y el submenú intermedio; el pie estrena columna *secciones*.
- Migas de pan dentro de los reportajes.
- Género corregido: *ganadora* (motos) / *ganador* (coches).
- Retirado el filete suelto del bloque *Dossier*.

## Verificado tras publicar

- Repo al día: local = origin (`a953e73`), **tag `v1.4.0`** en origin.
- Producción: `/`, `/especiales/`, `/especiales/guia-motos/`,
  `/especiales/suvs-hev/` y `/cookies/` responden **200**; la portada sirve la
  nav nueva y GA4 con consentimiento; el reportaje de SUVs trae «El escaparate:
  los 8», el chip **ganador** y el JSON-LD (`Article` + `BreadcrumbList`).
- **Subdominio viejo retirado**: `especiales.tuanbyte.es` ya no resuelve.
- Garaje comprobado **en móvil contra producción** (viewport y touch de
  teléfono): la ficha abre con la imagen a 160 px, sin scroll horizontal.

## Pendiente para mañana

1. **Archivar** el repo `antoniohh/Especiales` (Settings → Archive): su
   contenido vive ya en este proyecto y el histórico se conserva.
2. *Opcional*: línea de portfolio en `antoniohorrillo.com` hacia
   `https://tuanbyte.es/especiales`.
3. *Opcional*: cuando GA4 acumule unos días, mirar qué reportaje se lee más y
   decidir el siguiente especial (ya es copiar configuración + datos).
4. Detalles de marca que quedaron en la bandeja: unificar los rojos/amarillos
   del sitio con los exactos del kit (`#cf3b3b`/`#ffe100`) si apetece.

## Referencias

- Plan de migración: `docs/plans/migracion-especiales.md`
- Despliegue y dominio: `docs/info/despliegue-github-pages.md`
- Sistema de diseño: `DESIGN.md` · Producto: `PRODUCT.md`
- Sesión de OpenCode: "Tuanbyte — landing catálogo de barrio (v1.4.0)"
