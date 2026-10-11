# Plan: nueva web de Tuanbyte — landing de marca

Estado actual: landing de contacto de 2022 tipo "linktree" (enlaces a redes +
email), HTML plano. Objetivo: convertir `www.tuanbyte.es` en una **landing de
marca espectacular** que presente quién es Tuanbyte, qué hace, sus últimos
vídeos y todas las puertas de entrada a su mundo (canal, redes, contacto y
especiales).

Documentación anexa: `docs/info/despliegue-github-pages.md` (publicación).

---

## 1. Qué es hoy y qué debe pasar a ser

| | Hoy (2022) | Objetivo |
|---|---|---|
| Contenido | Lista de enlaces a redes | Landing de identidad y contenido |
| Vídeos | Ninguno | Últimos vídeos publicados, automatizados |
| Marca | Homónima de canal | Presencia de marca propia (byte/técnica/DIY) |
| Tech | HTML estático plano | Sitio estático moderno con build |
| SEO | Meta básicos + Open Graph | Completo (OG, JSON-LD, sitemap, canonical) |

Público: quien aterriza desde un vídeo del canal, desde las redes o de los
especiales, y quiere: saber quién eres (3 s), ver qué has hecho últimamente
(vídeos), seguirte o contactar.

## 2. Estructura de la página (una sola landing, por secciones)

Orden top-down:

1. **Cabecera mínima** — logotipo/marca + enlaces rápidos (YouTube, las redes
   y contacto). Sticky, discreta.
2. **Hero** — identidad de marca: avatar/monograma, nombre, una frase que
   responda "de qué va el canal" (mecánica casera + bricolaje + tecnología),
   CTA principal "Suscríbete en YouTube" y CTA secundario "Ver los últimos
   vídeos" (ancla de sección). Bagaje visual: estética byte/terminal
   (matiz propia del canal) o de taller técnico — a decidir en fase de diseño.
3. **Últimos vídeos** — bloque dinámico con los últimos N (5-6) vídeos del
   canal: miniatura real, título, fecha, duración, Canal de música; cada uno
   enlaza al vídeo. Es el corazón de la página: la web siempre "viva" al
   publicar en YouTube.
4. **Qué hace Tuanbyte (pilares de contenido)** — tres/tres vertientes con
   descripción y ejemplos: mecánica casera (Honda CB250 como serie),
   bricolaje y herramientas low-cost (Parkside/Workzone), tecnología
   (Linux, desarrollo web). Nada de "tarjetas iguales de icono + título +
   texto": más bien un índice editorial con jerarquía tipográfica.
5. **Los especiales** — bloque compacto que enlaza a
   `especiales.antoniohorrillo.com` (guía de motos A2, SUVs HEV…), presentado
   como "reportajes a fondo que salen del canal".
6. **Redes y contacto** — mosaico de enlaces: YouTube, X/Twitter, Instagram,
   email, lo que exista (se puede reutilizar la lista de la landing actual).
   Mismo espíritu del linktree de 2022, pero por pulir al nuevo diseño.
7. **Pie** — copyright, humans.txt, enlaces legales si procede.

## 3. Últimos vídeos: cómo obtenerlos (decisión técnica clave)

**Fuente elegida: el feed RSS público del canal, descargado en el build.**

- URL: `https://www.youtube.com/feeds/videos.xml?channel_id=UCD6wDPVAuQuQX0xNGIqq9xA`
- Bring últimos 15 vídeos (id, título, fecha, miniatura (thumbnail), enlace,
  vistas, duración parcialmente).
- **No requiere API key, no expira, no cuesta nada.** El build lo descarga en
  servidor y convierte a HTML estático: el visitante ya no toca YouTube.
- Miniaturas: `https://i.ytimg.com/vi/<id>/hqdefault.jpg` (permitido
  enlazarlas; con `loading="lazy"`).
- **Fallback obligatorio:** si el fetch del feed falla (red/YouTube down), el
  build debe continuar con un JSON de reserva comprometido en el repo
  (`src/data/videos-fallback.json`) y avisar en el log. La web nunca se rompe
  porque YouTube haya caído 10 s.

Alternativas descartadas:
- *YouTube Data API v3*: requiere clave, cuotas, configuración; innecesaria
  para 5-6 vídeos recientes.
- *Fetch en cliente*: deja huecos y hace la página dependiente de JS.

## 4. Stack: Astro (recomendado) vs React + Vite

| Criterio | Astro 🏆 | React + Vite (como Especiales) |
|---|---|---|
| Contenido estático/SEO | Nativo: HTML final, ideal para landing de marca | SPA: renderizado en cliente, peor primera pintura |
| Datos en build (RSS → HTML) | Natural (fetch en frontmatter) | Hay que usar plugins de vite o scripts previos |
| JS que envía al navegador | ~0 (secciones estáticas) | React + router completo (~80 kB gzip) |
| Interactividad puntual | Islands con React si/uando haga falta | Todo el interactivismo es React |
| Experiencia ya propia | Sí (antoniohorrillo.com es Astro) | Sí (Especiales) |
| Curva | Mínima para un equipo que ya usa Astro | Ninguna |

**Recomendación: Astro.** Para una landing de marca content-first es la
herramienta adecuada: HTML estático, SEO impecable, cero JS de base y datos
/construidos en tiempo de compilación (RSS → HTML). React+Vite es la elección
adecuada para **aplicaciones** con mucho estado (como los especiales con sus
selectores y fichas); aquí casi no hay estado, casi no hay interacción — todo
el interactivismo es scroll. Si un día se añade algo dinámico (buscador de
vídeos, por ejemplo), se mete como *island* de React sin reescribir nada.

## 5. Sistema de diseño (orientación, a desarrollar en fase visual)

- **Personalidad:** "byte + taller": oscura técnica (panel de consola /
  estación de trabajo) con un acento kondasierto (puede recordar al bermellón
  de especia­les en familia o un verde/ámbar de consola). Decidir la paleta
  exacta en el brief de diseño (usar el *skill* de diseño impeccable para
  el brief y el módulo).
- **Tipografía:** aquí se puede jugar con una fuente monoespaciada de
  carácter (JetBrains Mono / IBM Plex Mono) para etiquetas y datos, y una
  display condensada para titulares (Saira Condensed ya está en la familia
  de fuentes que se usan para especiales/og... la imagen Open Graph se genera
  con Saira).
- **Textura/foto:** recortes de fotos reales del canal (CB250 en su taller,
  Capturas de las herramientas Parkside) como base visual — mucho más honesto
  que iconos de portácolas.
- **Regla de casa (igual que en especiales):** nada de "tarjetas iguales de
  icono + título + texto", nada de kickers sobre titulares, accesibilidad
  ≥ 4.5:1 para texto secundario.

## 6. SEO y metadatos

- `title` / `description` orientados a identidad: "Tuanbyte — mecánica
  casera, bricolaje y tecnología en vídeo".
- `canonical: https://www.tuanbyte.es/` (con www; el raíz redirigió ahí).
- Open Graph + Twitter Card (reutilizar/actualizar la imagen actual y generar
  una nueva a 1200×630 con el look de la nueva marca).
- JSON-LD: `Person` (Tuanbyte) + `WebSite` + `sameAs` apuntando a las redes;
  opcional `VideoObject` por vídeo en la sección de últimos vídeos (los datos
  del RSS dan para eso: nombre, fecha de subida, miniatura, enlace).
- `sitemap.xml`, `robots.txt` y `humans.txt` actualizados (ya existen en el
  repo; conservar el espíritu, actualizando dominio a `https://www.`).
- Corregir lo antiguo: canónica y OG actuales están en `http://` (sin marcha
  atrás); todo lo nuevo debe ser `https`.

## 7. Rendimiento y accesibilidad

- Objetivo: Lighthouse ≥ 95 en las cuatro métricas. Landing de marca con
  imágenes de YouTube en lazy → listo.
- Fuentes: máx. 2 familias (display + mono), `display=swap`, subconjunto
  latin.
- LCP: hero optimizado (imagen propia comprimida, no la miniatura de un
  vídeo).
- Navegación semántica (`<header>`, `<main>`, `<section aria-labelledby>`),
  contraste y foco visible. `prefers-reduced-motion` respetado en las
  animaciones.
- Idioma/es: correcto mantenido.

## 8. Analítica (opcional)

- Mínima y sin cookies: Plausible (de pago) o **GoatCounter** (gratis para
  proyectos personales, solo un script countsactions de pixel). Decidir en su
  momento; ninguna integración costosa necesaria.

## 9. Plan de fases y orden de trabajo

| Fase | Qué | Entregable |
|---|---|---|
| **1. Esqueleto** | Scaffold Astro (Tailwind v4 como en especiales), repo listo con `npm run build`, **pipeline a GitHub Pages** (workflow + CNAME de `docs/info`) | Repo verde, web "hello" publicable |
| **2. Contenido estático** | Hero, pilares, especiales, redes+contacto pie; datos de redes extraídos de la landing actual | Landing completa sin vídeos, maqueta en preview |
| **3. Vídeos** | Fetch del RSS en build + fallback JSON + sección de últimos vídeos con tarjetas editoriales | Web dinámica en cada build |
| **4. Diseño a fondo** | Brief visual (skill impeccable), tokens/paleta, tipografías, animaciones discretas | Look "espectacular" de verdad |
| **5. Pulido** | SEO completo (JSON-LD, OG), accesibilidad, Lighthouse, responsive (1440 y 390), favicon/social | Sitio listo para coger (cut) |
| **6. Lanzamiento de dominio** | Cambio DNS en Strato (guía `docs/info`), Enforce HTTPS, redirección raíz→www si se opta | `www.tuanbyte.es` nueva web en producción |

Fases 1-3 se pueden hacer sin tocar DNS en absoluto: la web actual de Strato
sigue sirviendo la linktree de 2022 hasta que el corte esté decidido. El
cambio de dominio (fase 6) es el único paso disruptivo y debe hacerse con la
web nueva ya hoja en verde en GitHub.

## 10. Riesgos y notas

- **RSS = últimos 15 vídeos.** Si se quiere un historial completo, sería otra
  edición (Data API con clave o scraping disciplinado); por landing de marca
  no hace falta.
- **Construcción local vs CI:** el fetch del RSS ocurre en el runner de
  GitHub Actions — debe soportar cliente HTTPS (Node 22 fetch, nativo).
- **Solo lectura:** este proyecto es de marca, sin backend. Para algo
  interactivo real, Cloudflare Workers/D1 o Vercel/Render como ya tienes
  apuntado — fuera de alcance aquí.
- **Consistencia de marca entre tres casas:** tuanbyte.es (marca/canal),
  antoniohorrillo.com (blog/motor) y especiales.antoniohorrillo.com
  (reportajes). No compartir sistema de diseño, pero sí huele familia:
  rótulos, si acaso el mismo tipo de letra display.

## 11. Primeros pasos concretos (fase 1)

```bash
cd /home/antoniohh/Proyectos/Tuanbyte
npm create astro@latest . -- --template minimal --tailwind --no-git --install
```

1. Ajustar el scaffold: `public/CNAME`, workflow de Pages (copiar del repo
   Especiales), `robots.txt` y `sitemap.xml` iniciales.
2. Push y verificar el pipeline (aún sin tocar el DNS de Strato).
3. Con el esqueleto publicado, pasar a fase 2 con contenido real.
