# Estado de sesión — 2026-10-15

Punto de arranque. Hoy ha nacido el **tercer especial: «El taller mínimo
viable»**, con su plan (tres versiones) y la fase 1 ya construida. Todo
commiteado; pendiente de `push`.

## Hecho

### El plan del especial

`docs/plans/especial-taller-minimo.md`, en tres pasos:

- **v1** — borrador mío: se fue a un taller de profesional (marcas de 200 €,
  normas DIN, soldadura MIG/TIG). Descartado.
- **v2** — enfoque accesible: marcas del súper, tres etapas, 28 fichas.
- **v3** — con las decisiones del autor: público **no mecánico** (administrativo,
  médico, aficionado), **pares de apriete dentro** y las **tres dinamométricas**,
  **moto y coche a la vez**, **un vídeo de Tuanbyte en cada familia**, fotos de
  tres fuentes y anexo con el **mapa de vídeos**.

Decisiones tomadas por el autor (2026-10-15):

- Marcas: **Parkside, Workzone, Bosch verde/azul** y compañía — las que ha
  probado con sus manos.
- Pares de apriete: **sí**, porque hay dinamométricas (tres) y hay que explicar
  por qué no basta con una.
- Alcance: **motos y coches a la vez**, de lo más básico a lo más específico.
- Ganadora del veredicto: **juego de vasos 3/8" + carraca** (la reina); la
  dinamométrica es el nivel superior.

### F1 construida (commit `9680a76`)

- Ruta nueva: **`/especiales/taller-minimo`**.
- **`Etapas.astro`** (el único componente nuevo): las tres etapas, con su
  presupuesto y su lista; las familias con ficha son enlaces a ella.
- **`Fichas.astro`**: campo `videos` (opcional) que enlaza los vídeos del canal
  dentro de la ficha abierta.
- **`Reportaje.astro`**: bloque `etapas` y título del ranking configurables.
- **`shared/types.ts`**: `Tag` y `Medal` dejan de vivir en `guia-motos`.
- **6 fichas reales** de la etapa 1, con sus seis datos, su descripción y sus
  vídeos; **El orden** (ranking con tres criterios y el chip «la primera») y el
  **dossier con dos tablas** (las marcas y los tres presupuestos).
- **Tarjeta del especial** en el índice y en la portada; las rejillas de
  especiales pasan a **tres columnas**; entrada en el `sitemap.xml`.
- **Imágenes provisionales**: siete SVG en el estilo del catálogo
  (`public/images/especiales/taller-minimo/`).

Verificado: build verde (6 páginas), **sin scroll horizontal** a 1440 y 390, el
detector solo saca los avisos de tamaños de letra de siempre (28, `advisory`) y
los enlaces de *La ruta* saltan a su ficha.

## Pendiente para mañana (los ajustes)

1. **Revisar el especial entero**: la ruta, el orden y el bloque de vídeos son
   lo que hay que mirar con calma.
2. **Decidir el título de la rejilla**: «El taller, de un vistazo» (con hueco
   mientras solo hay 6 fichas) o «Las seis primeras».
3. **F0 — mapa de vídeos completo**: el anexo solo tiene la primera página del
   canal (30 vídeos); hay que paginar el resto.
4. **F2 — fichas**: completar la etapa 1 (10) y seguir con la 2 y la 3.
5. **F5 — dossier**: faltan *Taller vs casa*, *Pares de apriete*, *Moto vs
   coche*, *Errores y trampas* y el glosario.
6. **F3 — fotos**: las de sus vídeos, del catálogo oficial o propias, para
   sustituir los SVG.
7. **F7 — remate**: `og.png` de verdad (la OG apunta al SVG), revisión de
   diseño y publicación (tag **v1.5.0**).

## Notas técnicas

- `Tag` y `Medal` viven en `src/especiales/shared/types.ts`; `guia-motos` y
  `suvs-hev` los reexportan.
- `Etapas.astro`: los ítems con `id` se enlazan a `#ficha-<id>`.
- Los placeholders son SVG; sustituirlos no toca código, solo los datos
  (`data/taller.ts`) y los archivos en `public/`.

## Referencias

- Plan del especial: `docs/plans/especial-taller-minimo.md` (v3, con anexo).
- Migración de los especiales: `docs/plans/migracion-especiales.md`.
- Despliegue y dominio: `docs/info/despliegue-github-pages.md`.
- Sesiones anteriores: 12, 13 y 14 de octubre de 2026.
