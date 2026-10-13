# El taller de Tuanbyte

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deploy](https://github.com/antoniohh/Tuanbyte/actions/workflows/deploy.yml/badge.svg)](https://github.com/antoniohh/Tuanbyte/actions/workflows/deploy.yml)
[![Versión](https://img.shields.io/github/v/tag/antoniohh/Tuanbyte?label=versi%C3%B3n&color=cf3b3b)](https://github.com/antoniohh/Tuanbyte/tags)
[![Licencia](https://img.shields.io/badge/licencia-CC%20BY%204.0-c22f1d)](LICENSE)

> La web del canal **Tuanbyte**: mecánica casera con la Honda CB250 TwoFifty,
> bricolaje en el chalet y la parcela, y tecnología de uso diario. Cada pieza
> con su coste real, impresa de nuevo en cada build.
>
> 🌐 **[tuanbyte.es](https://tuanbyte.es)**

## ✨ Finalidad del proyecto

La web existe para una sola cosa: **que quien llega desde un vídeo acabe
suscrito al canal**. Es una landing de marca de una página con un mecanismo
propio: es un **catálogo de ferretería de barrio** — papel crema, precios a
rotulador, referencias y cintas de celo — que **se reimprime solo** con cada
publicación del canal.

- Quién: quien acaba de ver un vídeo y quiere saber más del taller.
- Qué debe lograr: entender de qué va el canal en tres segundos, ver lo último
  publicado y salir por la puerta de YouTube (o de una red).
- Principio rector: **cero trabajo manual**. Los vídeos, las listas y la fecha
  de edición llegan solos; nadie tiene que editar la web.

Los documentos que gobiernan el proyecto:

| Documento | Qué fija |
|---|---|
| [`PRODUCT.md`](PRODUCT.md) | Verdad de producto: público, propósito, compromisos de marca. |
| [`DESIGN.md`](DESIGN.md) | Sistema de diseño: tokens, tipografía, leyes de composición. |
| [`docs/plans/web-landing-plan.md`](docs/plans/web-landing-plan.md) | Plan por fases de la web. |
| [`docs/plans/migracion-especiales.md`](docs/plans/migracion-especiales.md) | Plan para traer los especiales dentro del catálogo. |
| [`docs/info/despliegue-github-pages.md`](docs/info/despliegue-github-pages.md) | Publicación, dominio y DNS. |

## 🧱 Arquitectura

- **Astro 5** con generación estática: el resultado es HTML puro, sin
  framework de cliente ni JavaScript propio en el navegador.
- **Tailwind CSS 4** (vía plugin de Vite) con los tokens del mundo visual en
  `src/styles/global.css` (`@theme`): papel, tinta, minio, cinta, marca.
- **Una única ruta** (`src/pages/index.astro`) compuesta de componentes de
  sección; el layout común vive en `src/layouts/BaseLayout.astro`.
- **Contenido en build, no en cliente.** Dos fuentes de datos del canal, con
  cadena de resiliencia para que el build no dependa de terceros:

  | Dato | 1º | 2º | 3º |
  |---|---|---|---|
  | Últimos vídeos | Scrape de `/videos` | Feed RSS (filtrando Shorts) | `src/data/videos-fallback.json` |
  | Listas de reproducción | Scrape de `/playlists` (≥ 5 vídeos) | — | `src/data/playlists-fallback.json` |

- **Sin backend y sin base de datos.** Todo estático en GitHub Pages. La
  analítica es **Google Analytics 4** (gtag), cargada solo en producción.

## 🗂️ Estructura del proyecto

```
├── .github/workflows/deploy.yml   # build + deploy a Pages (push y cron diario)
├── docs/
│   ├── info/                      # despliegue, snapshot DNS, estado de sesión
│   ├── plans/                     # plan por fases de la web
│   └── TB/                        # kit de marca del canal (escudos, portadas)
├── public/
│   ├── CNAME                      # tuanbyte.es
│   ├── brand/                     # escudo de marca en varios tamaños
│   ├── images/                    # OG y capturas de los especiales
│   ├── favicon.png · favicon-96.png · apple-touch-icon.png
│   ├── robots.txt · sitemap.xml · humans.txt
├── src/
│   ├── components/                # secciones: Header, Hero, Regleta, Videos,
│   │                              # Listas, Especiales, Redes, Footer, TapeDivider
│   ├── data/                      # redes + fallbacks de vídeos y listas
│   ├── layouts/BaseLayout.astro   # head, metadatos, fuentes, JSON-LD
│   ├── lib/                       # videos.ts · playlists.ts (scrape + fallback)
│   ├── pages/index.astro          # la landing (única ruta)
│   └── styles/global.css          # tokens @theme, texturas y utilidades
├── DESIGN.md · PRODUCT.md         # verdad de diseño y de producto
├── CHANGELOG.md · LICENSE         # cambios y licencia
└── astro.config.mjs · tsconfig.json · package.json
```

## 🚀 Puesta en marcha

Requiere **Node 22** (el mismo del workflow).

```bash
npm install      # dependencias
npm run dev      # desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # sirve el build local
```

El build descarga los datos del canal (vídeos y listas). Si YouTube no está
disponible, la compilación **no falla**: entra el material de reserva
commiteado en `src/data/`.

## 🎨 Sistema de diseño y marca

El mundo visual es un **catálogo de ferretería de barrio de 1994**: papel con
veta, tinta, minio rojo para lo comercial, cinta amarilla en las etiquetas y
fronteras curvas de cinta en lugar de reglas rectas. Está documentado con
tokens en [`DESIGN.md`](DESIGN.md) y en `.impeccable/design.json`.

La marca del canal manda: el **escudo** (círculo rojo, «TUANBYTE» apilado) es
el favicon y preside la cabecera, y la tipografía de marca identificada del
propio escudo (**Barlow 900**) se usa **solo** en el wordmark.

## 🚢 Despliegue y dominio

Cada `push` a `main` compila y publica en **GitHub Pages**; además hay un
**rebuild programado diario** (cron `06:17 UTC`) para que los vídeos y la
fecha de edición se refresquen solos aunque no se toque el repositorio.

El dominio vive así (DNS en Strato, sirviendo GitHub):

| Nombre | Tipo | Valor |
|---|---|---|
| `tuanbyte.es` | A | `185.199.108.153` |
| `tuanbyte.es` | AAAA | `2606:50c0:8000::153` |
| `www.tuanbyte.es` | CNAME | `antoniohh.github.io.` |

**La clave:** el `www` apunta *directo a `antoniohh.github.io`* (no al raíz),
y el dominio canónico en *Settings → Pages* es el raíz. Con eso GitHub emite un
único certificado que cubre **los dos nombres** (`tuanbyte.es` y
`www.tuanbyte.es`), sirve el sitio en el raíz, redirige `www` hacia él y, con
**Enforce HTTPS** activado, todo `http://` salta a `https://`.

Ventajas del montaje: HTTPS automático y gratuito (Let's Encrypt, renovado por
GitHub — no se paga SSL a Strato, que solo cubría el dominio principal), una
sola URL canónica y cero mantenimiento. Guía completa, verificación y vuelta
atrás en [`docs/info/despliegue-github-pages.md`](docs/info/despliegue-github-pages.md).

## 🔢 Versionado

[Versionado semántico](https://semver.org/lang/es/) sobre tags `vX.Y.Z`, con
histórico de cambios en [`CHANGELOG.md`](CHANGELOG.md). La versión vigente se
declara en `package.json` y en el badge de arriba.

```bash
git tag -a v1.1.1 -m "Correcciones" && git push --tags
```

## ✍️ Autoría

**Antonio Horrillo** (Tuanbyte) — [tuanbyte.es](https://tuanbyte.es) ·
[YouTube](https://www.youtube.com/tuanbyte) · [GitHub](https://github.com/antoniohh)

## ⚖️ Licencia

Todo el proyecto se publica bajo **Creative Commons Atribución 4.0
Internacional (CC BY 4.0)**: se puede copiar y adaptar, incluso
comercialmente, citando «Tuanbyte — Antonio Horrillo» con enlace a
[tuanbyte.es](https://tuanbyte.es).

Ver [`LICENSE`](LICENSE) (texto legal completo) y
[el resumen legible](https://creativecommons.org/licenses/by/4.0/deed.es).

> Los vídeos y sus miniaturas son contenido propio del canal. Las marcas
> citadas (Honda, Parkside, Workzone…) pertenecen a sus respectivos titulares.
