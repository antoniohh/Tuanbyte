---
name: El taller de Tuanbyte
description: Catálogo de ferretería de barrio del año 1994 para el canal Tuanbyte — papel crema con veta, tinta de imprenta, minio rojo para los actos comerciales y cinta amarilla en las etiquetas.
colors:
  paper: "#f2ead8"
  paper-2: "#e9dfc8"
  paper-3: "#ddd0b2"
  ink: "#20211c"
  ink-soft: "#5d574a"
  ink-line: "#b4a98f"
  minium: "#c22f1d"
  minium-dark: "#932208"
  strike: "#e9b611"
  marca-rojo: "#cf3b3b"
  marca-amarillo: "#ffe100"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  body:
    fontFamily: '"Barlow", system-ui, sans-serif'
    fontWeight: 400
    fontSize: "1.0625rem"
    lineHeight: 1.625
  marker:
    fontFamily: '"Caveat", cursive'
    fontWeight: 600
    fontSize: "1.375rem"
    lineHeight: 1.2
  mono:
    fontFamily: '"IBM Plex Mono", ui-monospace, monospace'
    fontWeight: 400
    fontSize: "0.75rem"
    letterSpacing: "0.12em"
components:
  sello:
    backgroundColor: "{colors.minium}"
    textColor: "{colors.paper}"
    typography: "{typography.display}"
    padding: "1rem 1.5rem"
  nav-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "0.5rem 0.625rem"
  nav-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-chip-hover:
    backgroundColor: "#e9b61140"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
  fila-catalogo:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  fila-catalogo-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.minium}"
  fila-lista:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  fila-lista-hover:
    backgroundColor: "#e9b6114d"
    textColor: "{colors.minium}"
  banda-veredicto:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: El taller de Tuanbyte

## Overview

**Creative North Star: "El catálogo de la ferretería de barrio, 1994"**

La web es multipage, pero sigue siendo un catálogo impreso que respira: papel
abatido (`paper`, #f2ead8) como superficie de todo el mundo, con grano de papel
(ruido fractal al 4% sobre el `body`), tinta de imprenta (#20211c) para todo lo
impreso, y dos tintas de rotulador con empleo comprometido: rojo minio
(#c22f1d) para los actos comerciales y amarillo seria (#e9b611) para etiquetas
y cinta. El suelo es siempre papel; las bandas en tinta están tasadas y son
estructura (regleta, ficha del reportaje, veredicto), no pantallas.

El sistema es denso, tipográfico y sin fotografía propia: la imagen real son
las miniaturas de YouTube (borde de tinta de 2px, como foto pegada en el
folleto) y los cortes de maqueta de los especiales (recortados, sin marco). El
sitio tiene dos estantes — la portada "El taller" y los **especiales**,
reportajes comparativos con portada a medida, veredicto en tinta invertida,
cuadro de honor y garaje de fichas desplegables sin JavaScript. Todo número
medido (fechas, contadores, notas, código de pieza) vive en monoespaciada; toda
nota de mano (etiquetas, llamadas "ver ficha ↗") vive en Caveat, como escrita
con rotulador.

**Key Characteristics:**

- Multipage con shell único (`Header` + `Footer`): la cabecera lleva dos
  fichas de navegación —*El Taller* y *Especiales*— y la activa va en tinta
  plena (`bg-ink text-paper`, `aria-current="page"`).
- Fronteras entre secciones dibujadas "a cinta": curva ondulada SVG
  (`TapeDivider`), nunca una línea recta decesiva.
- Profundidad por capas apiladas planas (`.canto`): una papeleta desplazada
  4px detrás, sin sombras difuminadas.
- Cabecera con perforación de talonario (`.perfo-top`), como hoja arrancada.
- Las bandas invertidas en tinta están numeradas: la regleta del taller, la
  "ficha del reportaje" bajo cada portada y el veredicto entero de cada
  especial. Tres, contadas.
- El garaje del especial: rejilla de fichas `<details>` que al abrirse ocupan
  la fila entera y pasan a dos columnas — sin una línea de JavaScript.
- El sello de suscripción: bloque minio con sombra dura desplazada 3px, el
  único bloque con fondo rojo grande de todo el catálogo (el colofón del
  footer usa la roja de marca, aparte).

## Colors

La paleta son cuatro papeles, tres tintas y dos tintas de serigrafía. Se usa
por masa: el papel crema en el suelo, tinta para el 90% del dibujo, minio
rarísimo, seria como adhesivo decorativo.

### Primary (acto comercial)
- **Rojo minio** `--color-minium` (#c22f1d): el sello "Suscríbete al canal", las notas de rotulador destacadas (edición, "leer el reportaje ↗"), los hovers de enlace (texto pasa a minio), la marca `>_`, el chip de victoria del cuadro de honor ("ganadora/ganador"), el nº 01 y la nota de la fila ganadora, la selección de texto del navegador.
- **Minio quemado** `--color-minium-dark` (#932208): estado profundo del minio; reservado para variante oscura del sello o presión de estado.

### Secondary (sello de etiqueta)
- **Amarillo seria** `--color-strike` (#e9b611): cinta adhesiva en las tarjetas (`.tape`, 62% de opacidad), valores medidos de regletas y ficha del reportaje, chip "novedad" del cuadro, resalte de la fila ganadora del ranking (`bg-strike/25`) y hovers de filas al 30–40%. Nunca como fondo de una sección entera.

### Neutral (papel y tinta)
- **Papel crema** `--color-paper` (#f2ead8): suelo global y hojas de tarjeta.
- **Papel de segunda** `--color-paper-2` (#e9dfc8): bandas de sección (Listas, contacto), llano de la cabecera con perforación, cabecera de tablas, fondos al hover de filas y pliegue de la ficha abierta (`paper-2/60`).
- **Papel de saco** `--color-paper-3` (#ddd0b2): la capa desplazada detrás de las tarjetas (`.canto::before`), el canto del gasto de hoja.
- **Tinta** `--color-ink` (#20211c): texto, bordes estructurales de 2px, ficha activa de navegación y las tres bandas invertidas tasadas.
- **Tinta suave** `--color-ink-soft` (#5d574a): texto secundario y metadatos (cumple ≥4.5:1 sobre paper), etiquetas mono grises.
- **Línea de tinta** `--color-ink-line` (#b4a98f): bordes finos de 1px dentro de piezas, divisiones entre filas, chips en reposo, ponderaciones en cabecera de cuadro.

### Tintas de marca (fuera de la imprenta)
- **Rojo de marca** `--color-marca-rojo` (#cf3b3b): una sola vez en todo el sitio — el colofón inferior del footer ("impreso en GitHub Pages · tirada diaria"). Es el rojo del escudo, no el minio del mostrador: no se usa en otro sitio ni se mezcla con él.
- **Amarillo de marca** `--color-marca-amarillo` (#ffe100): en reserva en el gavetero, sin empleo aún. Que nadie lo gaste sin motivo.

### Named Rules
**La Regla del Acto Comercial.** El minio es la voz del mostrador: solo
aparece donde se vende o se señala dinero/acción comercial (sello, precio,
hover de llamada a la acción, marca) y donde un reportaje corona a su ganador
(chip de victoria, nº 01, nota sobresaliente). Si una pantalla acaba con más
del 10% de minio, está gritando.

**La Regla de la Cinta.** La seria no es una tinta de plenigrafía: es material
adhesivo (cinta semitransparente), chip pequeño de novedad, resalte de la fila
ganadora o valor medido en las bandas de instrumento. Jamás fondo de sección
ni texto principal.

**La Regla del Papel Sobre Papel.** Para apilar jerarquía se cambia de hoja
(paper → paper-2 → paper-3), nunca se añade blanco puro ni grises fríos.

**La Regla de la Banda Invertida.** El fondo en tinta plena está tasado: la
regleta del taller, la ficha del reportaje y el veredicto. Son jaula de
instrumento o dictamen, no tema. Fuera de esa lista, el suelo es siempre papel.

## Typography

**Display Font:** Barlow Condensed (500–800) para titulares de folleto. La tipografía de la marca TUANBYTE (Barlow 900, identificada del escudo) se usa **solo** en el wordmark de cabecera y pie (utilidad `font-brand`).
**Body Font:** Barlow (400/500/600), cuerpo de párrafo, 65–75ch en columnas largas.
**Marker Font:** Caveat (600/700), el rotulador.
**Mono Font:** IBM Plex Mono (400/500), las bandas de datos y las tablas.

**Character:** una hoja comercial de barrio — el rotulador y la imprenta
conviven como conviven en una ferretería de verdad. Dos registros: lo
condensado grita el nombre del estante; lo manuscrito comenta al margen.

### Hierarchy
- **Display** (Barlow Condensed 800, clamp(3.25rem,9vw,6rem) en la portada del taller, clamp(2.75rem,7vw,4.75rem) en portadas de especial, 2.25–3rem en secciones, leading 0.9, mayúsculas, tracking estrecho): h1 y h2 de sección. Siempre `uppercase`.
- **Título de pieza** (Barlow Condensed 700, 1–2rem, leading tight): títulos de vídeo, fichas y reportajes. Hover → minio.
- **Body** (Barlow 400, 17px base `1.0625rem`, leading relaxed, máx 56–68ch): párrafos de folleto y de reportaje. Variantes `ink/85–ink/90` sobre paper; `paper/70–paper/85` sobre tinta.
- **Marker** (Caveat 600–700, 1.25–2.25rem): subrayados dobles de tinta, bajadas de sección ("cuando un tema da para reportaje entero"), el email del contacto (1.875–2.25rem) con subrayado ondulado minio, llamadas "ver ficha ↴".
- **Label / mono** (IBM Plex Mono, 0.625–0.8125rem, tracking 0.08–0.14em, mayúsculas): cabecera de tabla, fichas de navegación, migas de pan, metadatos, todo número.

### Named Rules
**La Regla del Doble Registro.** Un número o dato medido NUNCA se escribe en
sans ni en Caveat: va en Plex Mono. Una nota de voz NUNCA va en mono: va en
Caveat. El mono describe; el marcador comenta.

## Layout

Multipage con el mismo shell: `/` (la portada *El taller*), `/especiales`
(índice editorial), `/especiales/guia-motos` y `/especiales/suvs-hev`
(reportajes) y `/cookies`. Todas llevan `Header` (perforación de talonario,
marca y dos fichas de navegación) y `Footer` (dos columnas + colofón).

La portada se lee de corrido: Hero 7/5 (titular + sello / pieza destacada) → regleta
→ Última hornada → *Listas de reproducción* → *Especiales* → contacto,
separadas por la curva a cinta de `TapeDivider` (variante `flip` girada 180°).
Cada reportaje sigue el mismo pliego: Migas → Portada (7/5 con tarjeta de
cubierta) → banda "ficha del reportaje" → Veredicto invertido → (tabla
opcional) → Ranking → Garaje de fichas → Dossier (tablas técnicas).

Contenedor único `max-w-6xl` (72rem) con respiración `px-5` / `sm:px-8`; las
secciones respiran `py-16 lg:py-20`. Las bandas de instrumento/veredicto son
full-width con el contenido alineado al mismo contenedor. Mobile first: las
tablas largas (`min-w-[900px]`/`min-w-[860px]`) viajan dentro de un
`overflow-x-auto`; el histórico del taller repliega ref y metadata en `<sm`.

## Elevation & Depth

**No hay sombras difusas.** La profundidad es de papelería: capas apiladas
planas y desplazamiento duro: se ve el canto de la hoja apilada, como en un
gasto de imprenta.

### Vocabulario de sombras (hard offsets only)
- **Canto apilado** (`.canto::before`: `inset: 4px -4px -4px 4px`, fondo `--color-paper-3`, `z-index: -1`): toda tarjeta "hoja sobre hoja" — pieza destacada, tarjeta de especial, tarjeta de contacto, cubierta del reportaje.
- **Sombra dura del sello** (`box-shadow: 3px 3px 0 0 var(--color-ink)`): exclusiva del CTA primario. Empuje físico, sin blur.
- **Canto de borde** (`box-shadow: 0 1px 0 0 var(--color-paper-3)`): remate inferior del papel sobre papel.

### Named Rules
**La Regla del Canto Quebrado.** Prohibido `blur` > 0: ninguna sombra del
sistema difumina. La profundidad se construye desplazando una hoja de papel
paper-3 bajo la actual.

## Shapes

Esquinas rectas siempre: bordes estructurales de tinta a 2px (`border-ink`),
divisiones internas a 1px (`border-ink-line`), foco con radio de 1px. Las
únicas curvas del sistema son funcionales: la frontera ondulada SVG del
`TapeDivider` (stroke 2.5px, `vector-effect: non-scaling-stroke`), la
perforación semicircular repetida cada 22px del `.perfo-top`, la inclinación
de cinta (rotate −3°) y el leve desalineado de las tarjetas de especiales
(−0.7° / +0.8° en lg). Radios de esquina: 0, también en fichas abiertas y
bandas invertidas. Un catálogo no tiene cantoneras. El único trazo punteado
del sistema es el de guías y etiquetas: bordes `dashed` de minio/ink-line en
el sello del footer, las filas de redes y los lados de la cinta.

## Components

### El Sello (CTA primario)
- **Forma:** bloque rectangular, esquina viva; fondo minio, letra paper en Barlow Condensed 700, mayúsculas (`padding: 1rem 1.5rem`).
- **Dorsal:** sombra dura 3px 3px tinta; al hover gira −1.5° y sube 1px (ease-out `cubic-bezier(0.16,1,0.3,1)`, 180ms), como sello que se descuelga del plástico.
- **Focus:** anillo minio de 2px con offset 2px (estándar del navegador).

### Fichas de cabecera (nav)
- Dos fichas —*El Taller*, *Especiales*— en mono mayúsculas (10px en móvil, 11px a `sm`, tracking 0.1–0.12em), borde 1px ink-line, fondo paper.
- **Activa** (`aria-current="page"`): tinta plena, texto paper — la ficha impresa sobre la pila. Nunca seria, nunca minio.
- **Inactiva:** reposo paper; hover: borde pasa a tinta, fondo vira a seria al 40% — se "pega la cinta" al pestañearla. Sin anclas ni submenús: la nav solo lleva los dos estantes.

### Migas de pan
- Mono 11px mayúsculas tracking 0.12em en ink-soft: `Inicio / Especiales / {reportaje}` con separadores en ink-line; solo la última pieza va en ink plena (`aria-current="page"`), los enlaces viran a minio al hover.

### Portada de reportaje
- Rejilla 12 columnas: 7/12 con bajada en Caveat minio (2xl), H1 display clamp(2.75rem,7vw,4.75rem) leading 0.9, intro a 58ch (`text-xl`) y segunda bajada en ink-soft; 5/12 con la **tarjeta de cubierta**: hoja paper con `.tape` + `.canto`, corte de maqueta `object-contain` (sin marco: la foto ya viene recortada) y pie mono 11px mayúsculas centrado.
- Debajo, la **ficha del reportaje**: banda full-width `bg-ink text-paper` con bordes 2px — etiqueta "Reportaje" en mono+mayúsculas y los datos del pliego (modelos, precio, fecha) en mono xs seria. Hermana de la regleta del taller.

### Veredicto invertido
- Sección full-width en tinta (`bg-ink text-paper`), la pieza más solemne del sistema: rejilla 5/12 (corte de maqueta flotando sobre tinta) + 7/12 con H2 display en paper.
- **Ganador + nota** bajo un filete `border-paper/25`: nombre en display 700 (3–4xl) y nota en mono 2xl seria con `/10` en `paper/50`. Lead a 62ch en `paper/85`.
- Los cuatro factores van a dos columnas, cada uno arranca con filete `border-paper/20`, título display bold en paper y cuerpo `paper/70`. Nada de minio aquí: el dictamen es de imprenta; la nota, de regleta.

### Cuadro de honor (ranking ledger)
- Marco de 2px de tinta sobre paper; cabecera mono mayúsculas sobre banda paper-2, con las **ponderaciones de cada criterio a la vista** (peso en ink-line junto a la etiqueta). Filas divididas por 1px ink-line, hover paper-2.
- Posición en display 800 tabular 2xl (la nº 01 en minio); modelo en display con acento por etiqueta (`winner` → bold minio, `novedad` → semibold ink, el resto ink); nota en mono tabular semibold.
- Chips de victoria en minio sobre paper ("ganadora"/"ganador", etiqueta configurable) y "novedad" en seria sobre ink, ambos mono 10px mayúsculas. La fila ganadora lleva resalte `bg-strike/25`.

### Garaje / escaparate (fichas desplegables)
- Rejilla de `<details>` a 2 / 3 / 4 columnas (gap 3): **cada tarjeta es su propia ficha de pieza**, sin JavaScript.
- **Cerrada:** nº de posición en mono 10px, nota en mono semibold minio tabular, corte de maqueta centrado (`.ficha-media`: `max-height` 6rem), nombre display 700 mayúsculas, tipo en mono 10px y la llamada Caveat "ver ficha ↴". Hover de summary: fondo paper-2.
- **Abierta:** la tarjeta ocupa la fila entera (`open:col-span-full`) con pliegue `paper-2/60` y, a `lg`, pasa a dos columnas (`open:lg:grid-cols-[24rem_1fr]`): la ficha a la izquierda con borde derecho de 2px (y `group-open:h-auto`, sin estirarse), los datos a la derecha. La maqueta crece a 10rem en móvil y 13rem en escritorio (reglas `.ficha-media` en `global.css`).
- **Datos:** sello "casero —" en mono 10px (alto: fondo tinta; medio: borde ink-line; bajo: fondo minio), especificaciones como filas etiquetadas (`dl`, divisores `ink-line/60`, etiqueta mono 10px + valor mono 13px) y descripción en `ink/85`. La llamada muda a "cerrar ↥" en ink-soft.

### Tabla técnica (dossier)
- El mismo marco del cuadro de honor: borde 2px, cabecera mono mayúsculas sobre paper-2, filas con divisor 1px ink-line y hover paper-2.
- Celdas `align-top` a 13px; columnas mono tabulares alineadas a la derecha si son cifras; la columna de modelo va en display con acento por etiqueta (misma gramática que el ranking). Celdas de líneas múltiples con `whitespace-pre-line`.

### Ficha de pieza destacada (pieza card)
- Hoja `paper` fondo sobre `paper-3` (`.canto`), padding 1.25–1.5rem, con remate de cinta seria rotada arriba (`.tape`, 5.5rem × 1.6rem al 62%).
- Miniatura YouTube `hqdefault`, `border-2 border-ink`, `aspect-video`. Contador "vídeo nº —" en mono 11px con icono de marco.
- Título condensed 700 con hover → minio; llamada "ver el vídeo ↗" en Caveat con subrayado de tinta que vira a minio.

### Histórico de catálogo (ledger table)
- Marco de 2px de tinta sobre paper; cabecera mono mayúsculas sobre banda paper-2; filas divididas por 1px ink-line.
- Columnas: ref (mono, código del id con 4 dígitos), pieza (thumb 7rem + título), fecha, vistas (tabular-nums), llamada Caveat "ver ficha ↗".
- Hover de fila: fondo paper-2, título y llamada → minio. En `<sm` la fila se compacta a thumb + título + fecha.

### Tarjeta de especial (reportaje anexo)
- Hoja paper **sin marco** con `.tape` + `.canto` y tilt de rotulador (−0.7° / +0.8° en lg): corte de maqueta del ganador centrado en `h-56`, pie mono centrado ("honda cl 500 · la ganadora"), título display 2xl mayúsculas que vira a minio al hover, contador mono 11px minio ("14 modelos") al flanco, bajada a 60ch y "leer el reportaje ↗" en Caveat minio.
- Enlazan dentro del sitio (al reportaje, no fuera del taller). Es la puerta de los especiales, en portada y en el índice editorial.

### Fila de lista (listas de reproducción)
- Ledger en banda paper-2: `ul` con `divide-y-2 divide-ink-line` y marco de 2px; cada fila paper con título display 2xl bold mayúsculas + contador mono xs + "ver lista ↗" en Caveat.
- Hover: fondo seria 30% y texto → minio. Son playlists reales del canal, tal cual están en YouTube: título, contador y llamada caben entero en la fila.

### Tarjeta de contacto (mostrador)
- Tarjeta `.canto` con borde de 2px dividida en dos mitades (grid `lg:grid-cols-5`, 2/3): a la izquierda el email en Caveat (1.875–2.25rem) con subrayado **ondulado** minio (`decoration-wavy underline-offset-4`) que vira a minio al hover — el único subrayado ondulado del taller junto a la firma del footer.
- A la derecha, banda "redes sociales" en mono 10px sobre filete 2px y filas dashadas (`border-dashed ink-line`): nombre display bold mayúsculas + handle mono; hover: fondo seria 30% y handle → minio, con flecha ↗ que avanza 1px.

### Colofón (footer)
- Dos columnas: marca (wordmark font-brand 3xl + lema en Caveat minio) y listas de enlaces subrayadas en ink-line (hover → minio y filete minio); etiqueta de sección en mono 10px mayúsculas.
- Sello de la casa: sticker girado −3° con borde `dashed` minio — "n años creando contenido".
- Colofón impreso: banda full-width `bg-marca-rojo` con © 2016–año, licencia CC BY 4.0 punteada y "impreso en GitHub Pages · tirada diaria" en mono xs sobre paper. Único uso de la roja de marca.

### La regleta viva (instrumento)
- Banda full-width en tinta plena (`bg-ink`), bordes de 2px: es jaula de instrumento, no panel.
- Mono 12px tracking 0.08em: punto seria latiendo (opacidad 1 ↔ 0.25, 2.2s `steps(2, jump-none)`), "últimos vídeos", "fecha del último vídeo:", "vídeos listados:", valores en seria; enlace "todos los vídeos ↗" en seria punteada.
- Todo dato real del build (fecha, contador). Si no hay dato, no hay celda.

### Movimiento
- **Regleta:** pulsar por opacidad en pasos discretos (`steps(2, jump-none)`), nunca fade suave: es un LED que tickea, no un latido orgánico.
- **Sello/hovers:** `cubic-bezier(0.16,1,0.3,1)` a 180ms para transform; transiciones de color 150ms ease en el resto.
- **Despliegue de fichas:** nativo de `<details>`, sin animación inventada; los estados viajan en `group-open`/`details[open]` y las maquetas cambian de medida por CSS (`.ficha-media`).
- **Scroll de anclas:** smooth; y con `prefers-reduced-motion: reduce` se apaga todo (scroll-behavior auto + animaciones/transiciones a 0.01ms vía regla global en `global.css`).

### Superficie del navegador
- **Selección:** fondo minio, texto paper — marcar con la tinta del sello.
- **Focus-visible:** outline 2px minio, offset 2px, radio 1px. Nunca azules de UA.
- **Scrollbar:** `scrollbar-color: var(--color-ink) var(--color-paper-2)`, thin — papel detrás, tinta delante.

## Do's and Don'ts

### Do:
- **Do** reservar el minio para actos comerciales y dictámenes con pesos: sello de suscripción, hover de CTA, nota de rotulador destacada, chip de victoria, nº 01 del cuadro, nota de ficha, selección de texto.
- **Do** escribir todo dato medido (fecha del build, contador, ref. de pieza, nota, vista) en IBM Plex Mono.
- **Do** separar secciones mayores con la curva `TapeDivider` y alternar bandas paper / paper-2.
- **Do** apilar profundidad con `.canto` (paper-3 desplazado 4px) y sombras duras sin blur.
- **Do** desplegar el escaparate con `<details>`/`<summary>` y estados en `group-open`: el despliegue es de la plataforma, no del taller; cero JavaScript.
- **Do** marcar la página activa con `aria-current="page"` y la ficha en tinta plena — la nav no adivina: declara.
- **Do** redactar las llamadas con la voz del mostrador en Caveat: "ver ficha ↗", "ver lista ↗", "leer el reportaje ↗", el "ver ficha ↴" y su par "cerrar ↥" cuando la ficha está abierta.
- **Do** respetar `prefers-reduced-motion`: el pulso y los cintilleos se apagan, el scroll deja de ser smooth.

### Don't:
- **Don't** usar sombras difuminadas (blur > 0) jamás: la profundidad es de papelería, no de elevación.
- **Don't** partir secciones con reglas rectas de ancho completo: la frontera entre hojas siempre va a cinta (curva).
- **Don't** redondear esquinas (radius 0 en tarjetas, fichas abiertas y bandas invertidas; la única curva es la cinta y la perforación).
- **Don't** inventar colores fuera de las once tintas del catálogo ni gradientes de color; el ruido de grano es el único gradiente aceptable.
- **Don't** poner fondo oscuro fuera de las bandas tasadas (regleta, ficha del reportaje, veredicto): el ink es jaula de instrumento o dictamen, no tema.
- **Don't** usar la seria como texto de navegación o como fondo de sección: es adhesivo (cinta al ≤62%), resalte de fila ganadora al 25%, chip pequeño de novedad y valor de banda de instrumento.
- **Don't** usar fotos de banco ni enmarcar cortes de maqueta: la imaginería real son miniaturas de YouTube con borde de tinta y cortes recortados de los especiales, con su procedencia.
- **Don't** añadir un tercer chip a la cabecera ni llamadas dentro de la nav: los estantes del catálogo son dos; lo demás cuelga de migas dentro del pliego.
