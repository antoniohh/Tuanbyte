# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 + Tailwind CSS 4, desplegado como sitio estático en GitHub Pages.
Los vídeos llegan del feed RSS del canal en build, con scrape de la página del
canal como relevo y JSON de reserva local. Nada manual en el día a día.

## Users

Quien acaba de ver un vídeo de Tuanbyte y quiere saber más: qué más hace,
dónde seguirlo y cómo contactar. Llega desde la descripción de YouTube, de las
redes o de los especiales, a menudo desde el móvil. Público en español, con
aficiones mecánicas, bricolaje y tecnología.

## Product Purpose

Landing de marca del canal Tuanbyte: presentarte en tres segundos, mostrar los
últimos vídeos publicados (sin intervención humana) y abrir todas las puertas
(suscribirse, redes, especiales). El éxito principal: **convertir visitas en
suscriptores del canal** — es la única acción que debe dominar la página.

## Positioning

"Mecánica casera, bricolaje low-cost y tecnología sin humo, con el coste real
de cada cosa": todo hecho en un garaje propio, paso a paso, sin dilución
Corporación. El vecino no puede copiar que el contenido sale de un taller
real con números en la mano.

## Operating Context

La web se construye en GitHub Actions con cada push (cero edición manual
después de publicar). Contenido vivo: últimos vídeos vía RSS. El canal es la
fuente de verdad; la web jamás debe quedar rota si el feed falla (estructura de
relevo Eclipse scrape + fallback JSON en repo).

## Capabilities and Constraints

- Landing de una sola página con secciones: cabecera, hero, últimos vídeos,
  qué hace Tuanbyte (pilares), especiales, redes+contacto, pie.
- Solo se enlaza lo que ya existe (canal, especiales, redes, email). Ningún
  hueco prospectivo.
- Estático debe: sin backend, sin cookies, sin analítica hoy. El email de
  contacto es `info@tuanbyte.es`.
- Idioma/es. Publicado en `https://tuanbyte.es/`.
- Confirmación del día a día: "cero manual" — no se editarán textos con
  frequency; copy escrito para reguisar a partir del plan.

## Brand Commitments

- Nombre: **Tuanbyte** (una palabra; la "T" y la "B" en ficha de marca, como en
  el logotipo).
- La tierra fértil del canal: manualidad técnica sin humo, honestidad de
  costes, público español.
- **Registro lingüístico: español de España.** Segunda persona del singular con
  imperativos directos ("suscríbete", "échale un ojo"), léxico peninsular
  ("vídeos", "móvil", "ordenador", "coche"), sin giros de doblaje ni de
  traducción.
- **Marca gráfica:** escudo circular rojo con "TUANBYTE" apilado (kit en
  `docs/TB/`); tipografía de marca **Barlow 900**, identificada del propio
  escudo. El antiguo motivo `>_` queda retirado: no pertenece al canal.
- Guardadas contexto board (visual decisions): se documentan en `DESIGN.md` en
  la fase de dirección de arte, no aquí.

## Evidence on Hand

- Últimos 15 vídeos reales con vistas y antigüedad, extraídos hoy del canal
  (`src/data/videos-fallback.json`) y del feed/scrape en build
  (`src/lib/videos.ts`).
- Redes sociales reales con enlaces (`src/data/socials.ts`) — heredadas de la
  landing de 2022 (`legacy/index.html`).
- Dos especiales propios publicados con páginas diseñadas
  (`especiales.antoniohorrillo.com`).
- La web actual es un placeholder de fase 1 con estética provisional (oscura,
  "terminal", ámbar `#fbbf24`): autoridad de diseño aún no definida — se
  decide en new-work, no es una lanzadera de marca.

## Product Principles

- **Suscribirse manda.** La vía hacia el canal es el camino más corto y
  repetido en toda la página.
- **La web respira con el canal.** Cada build trae los vídeos actuales; el
  contenido nunca es una maqueta congelada.
- **Nada no verificado por ti mismo:** lo ilustrado viene de vídeos reales,
  datos reales del canal y redes reales.
- **La web no puede romperse por un tercero** (el feed de YouTube es
  opcional, no una dependencia).

## Accessibility & Inclusion

- Texto secundario con contraste ≥ 4.5:1.
- Navegable con teclado; enlaces de miniaturas con nombres claros.
- Respecto a `prefers-reduced-motion`.
