# Plan: migración de los Especiales al catálogo

Traer los reportajes (hoy en un proyecto aparte, servido en
`especiales.tuanbyte.es`) **dentro de este proyecto**, bajo la identidad visual
del catálogo, para que dejen de "irse fuera": misma casa, misma cabecera,
mismo pie.

Estado: **F1–F4 y F6 hechas** (2026-10-14). Queda F7 (borrar el subdominio y
archivar el repo, en manos del autor).

Estado de partida (comprobado):

- Proyecto *Especiales*: **SPA de React + react-router** con dos reportajes
  (`guia-motos`, `suv-hev`), **270 KB de JS** en el build, `lucide-react`.
- Estructura: `src/specials/<slug>/{components,tables,data,lib}` y
  `src/shared/{lib,seo}`.
- Contenido: por reportaje, portada, veredicto, ranking multicriterio, 4 tablas
  técnicas y 14 (motos) / 8 (coches) fichas seleccionables.
- Activos: `public/images/guia-motos` (15 archivos) y `public/images/suv-hev`
  (9), más OG por reportaje.
- El reportaje **no lleva firma de autor ni dominio en la cabecera**: su
  contenido es neutro, así que puede vivir bajo Tuanbyte sin reescribir copy.

---

## 1. Objetivo y criterio de éxito

Un visitante entra en `tuanbyte.es`, ve los especiales como **contenido del
canal** y puede leerlos sin cambiar de casa: misma cabecera, mismo pie, misma
tipografía, mismos avisos (cookies, contacto). Criterio de éxito:

- URLs **reales y limpias** (sin `#`): `/especiales/guia-motos`.
- **Cero JavaScript de framework**: HTML estático de Astro (de ~270 KB a ~0).
- El reportaje conserva su estructura editorial (veredicto, ranking, tablas,
  fichas) pero **vestida con el sistema del catálogo**.
- SEO propio por reportaje: canónica, Open Graph, JSON-LD y entrada en el
  `sitemap.xml`.
- El subdominio viejo se retira sin más: se creó en esta misma tanda de
trabajo y no llegó a difundirse, así que no hay enlaces ni indexación que
rescatar.

---

## 2. Decisiones a confirmar (con recomendación)

| # | Decisión | Recomendación |
|---|---|---|
| D1 | **Rutas** | `/especiales` (portada) · `/especiales/guia-motos` · `/especiales/suv-hev`. Slugs iguales a los actuales (continuidad SEO). |
| D2 | **Tecnología** | **Reescribir a Astro estático** y hacer la interacción puntual (selector de fichas) con `<details>`/JS mínimo, sin React. Alternativa descartada: embeber la SPA como isla (`@astrojs/react`), que es más rápido de portar pero conserva React, el router y el hash. |
| D3 | **Identidad visual** | **Shell del catálogo** (cabecera, pie, papel, tipografías, tokens) + piezas del reportaje **re-estilizadas** (tablas como el libro de la hornada, fichas como folios, ranking como cartel). Se conserva la *estructura*, no el mundo "revista de motor" (su tipografía y sus bandas propias se jubilan: un solo sistema). |
| D4 | **Repo Especiales y subdominio** | **Archivar** el repo (no borrar: el histórico se conserva) y **borrar el subdominio** `especiales.tuanbyte.es`, que no llegó a difundirse. Sin redirecciones ni ventanas de gracia. |

---

## 3. Arquitectura propuesta

```
src/
├── especiales/
│   ├── shared/                    # piezas reutilizables entre reportajes
│   │   ├── Ficha.astro            # ficha de modelo (antes Garage.tsx)
│   │   ├── Ranking.astro          # ranking multicriterio (antes Leaderboard)
│   │   ├── Veredicto.astro        # banda de veredicto
│   │   ├── Tabla.astro            # tabla técnica (antes DataTable/tables)
│   │   └── Portada.astro          # portada del reportaje
│   ├── guia-motos/
│   │   ├── data/                  # bikes.ts y tablas (portado tal cual)
│   │   └── Reportaje.astro        # composición del reportaje
│   └── suv-hev/
│       ├── data/
│       └── Reportaje.astro
├── pages/
│   ├── especiales/
│   │   ├── index.astro            # portada de especiales (índice)
│   │   ├── guia-motos.astro
│   │   └── suv-hev.astro
│   └── cookies.astro
└── components/                    # Header, Footer… (ya existentes, se reutilizan)

public/images/especiales/
├── guia-motos/                    # las 14 motos + portada + OG
└── suv-hev/                       # los 8 coches + portada + OG
```

**Navegación (la deuda que arrastramos).** Primer paso, ya hecho: las anclas de
sección salen de la barra y viven en un **submenú "Secciones"** en la cabecera
(desplegable, sin JavaScript de framework). Segundo paso, con la migración: la
barra principal se reserva a las **páginas reales** — `Inicio · Especiales ·
Cookies` — con **estado activo** y, dentro de un reportaje, **migas**
(«Especiales / Guía de motos»). El submenú de secciones se queda como atajo a
las secciones de la portada.

---

## 4. Fases

| Fase | Qué | Entregable / criterio |
|---|---|---|
| **F0** | Responder D1–D5 | Decisiones cerradas por escrito |
| **F1** | Esqueleto multipágina: nav real con activo y migas + `/especiales` (índice con las dos tarjetas, ya enlazando a las rutas nuevas) | `/especiales` y `/cookies` navegables; build verde |
| **F2** | Activos y datos: mover las 24 imágenes, portar `data/*.ts` y tipos | Build con datos tipados y assets servidos |
| **F3** | **Reportaje 1 (guia-motos)**: portada, veredicto, ranking, 4 tablas y 14 fichas con el estilo del catálogo; selector de fichas accesible por teclado | Contenido completo en `tuanbyte.es/especiales/guia-motos`, 0 KB de framework |
| **F4** | SEO: canónica, OG por reportaje, JSON-LD (`Article`/`ItemList`) y `sitemap.xml` | Reportaje indexable desde el día uno |
| **F5** | Pulido y release: Lighthouse, capturas 1440/390, detector, revisión de acabado | Release **1.4.0** |
| **F6** | **Reportaje 2 (suv-hev)**: reutiliza los componentes de `especiales/shared` | Release **1.5.0** |
| **F7** | Retirada: archivar el repo Especiales y borrar el subdominio (lo haces tú) | Nada quedó a medias ni duplicado |

Estimación orientativa: F1 ~1 h · F2 ~1 h · F3 3–5 h · F4 1 h · F5 1 h ·
F6 2–3 h. Las fases F1–F4 son las que dan el salto; F6 es casi "rellenar".

---

## 5. Riesgos y cómo se mitigan

| Riesgo | Mitigación |
|---|---|
| Volumen de trabajo (2 reportajes, 4 tablas y 22 fichas) | Se porta **un reportaje primero** y el segundo entra en F6, reutilizando componentes |
| Cambio de URL | Nulo en la práctica: el subdominio viejo no llegó a difundirse. La canónica y el `sitemap.xml` nuevos se publican desde el primer día |
| Pérdida del "mundo revista de motor" | Decisión consciente (D3): se conserva la estructura editorial y las piezas que funcionan, re-estilizadas |
| Interactividad del selector de fichas | Se hace sin framework: acordeón nativo (`<details>`) o isla mínima con estado en la URL (`?moto=honda-cl500`) |
| Peso de las imágenes | Repasar antes de subir (ancho ~1100–1200 px, PNG con paleta + alfa como en el proyecto original) |
| Rendimiento global | El sitio pasa de ~270 KB de JS a casi cero; el cuidado se traslada a las imágenes y a las fuentes |

---

## 6. Preguntas abiertas (para F0)

1. ¿Mantenemos los slugs `guia-motos` y `suv-hev`, o los renombramos a algo más
   de marca (p. ej. `motos-a2` y `suvs-hev`)?
2. En `/especiales`, ¿portada simple con las dos tarjetas o un índice
   editorial (entradilla + listado)?
3. ¿Empezamos por `guia-motos` (el más querido y el más completo) o por el más
   simple para llegar antes al resultado?
4. El veredicto del reportaje, ¿conserva su **banda invertida** (tinta sobre
   papel oscuro, como en el original) o todo en papel claro con sello en minio?

---

## 7. Verificación por fase

```bash
npm run build
# Rutas nuevas
curl -sI https://tuanbyte.es/especiales/ | head -1
curl -sI https://tuanbyte.es/especiales/guia-motos/ | head -1
# SEO
curl -s https://tuanbyte.es/especiales/guia-motos/ | grep -o '<link rel="canonical"[^>]*>'
# Sin JS de framework
grep -c "react" dist/especiales/guia-motos/index.html   # esperado: 0
```

Capturas de escritorio (1440) y móvil (390) de la portada, el ranking y una
ficha; y Lighthouse sobre `/especiales/guia-motos/`.
