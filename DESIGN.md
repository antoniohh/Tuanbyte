---
name: Tuanbyte — el catálogo del taller
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
  nav-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "0.5rem 0.625rem"
  nav-tab-hover:
    backgroundColor: "#e9b61140"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
  fila-catalogo:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  fila-catalogo-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.minium}"
---

# Design System: Tuanbyte — el catálogo del taller

## Overview

**Creative North Star: "El catálogo de la ferretería de barrio, 1994"**

La web es un catálogo impreso que respira: papel abatido (`paper`, #f2ead8)
como superficie de todo el mundo, con grano de papel (ruido fractal al 4%
sobre el `body`), tinta de imprenta (#20211c) para todo lo impreso, y dos
tintas de rotulador con empleo comprometido: rojo minio (#c22f1d) para los
actos comerciales y amarillo seria (#e9b611) para etiquetas y cinta. No hay
pantallas oscuras ni cristal: hay hojas de papel apiladas.

El sistema es denso, tipográfico y sin fotografía propia: la imagen real son
las miniaturas de YouTube (borde de tinta de 2px, como foto pegada en el
folleto) y las capturas del anexo. Todo número medido (fechas, contadores,
código de pieza, vistas) vive en monoespaciada; toda nota de mano (precios,
etiquetas, llamadas "ver ficha ↗") vive en Caveat, como escrita con rotulador.

**Key Characteristics:**

- Fronteras entre secciones dibujadas "a cinta": curva ondulada SVG
  (`TapeDivider`), nunca una línea recta decesiva.
- Profundidad por capas apiladas planas (`.canto`): una papeleta desplazada
  4px detrás, sin sombras difuminadas.
- Cabecera con perforación de talonario (`.perfo-top`), como hoja arrancada
- La regleta viva: banda-instrumento en tinta con datos reales del build y
  punto seria latiendo.
- El sello de suscripción: bloque minio con sombra dura desplazada 3px, el
  único elemento con fondo rojo grande de toda la página.

## Colors

La paleta son cuatro papeles, tres tintas y dos tintas de serigrafía. Se usa
por masa: el papel crema en el suelo, tinta para el 90% del dibujo, minio
rarísimo, seria como adhesivo decorativo.

### Primary (acto comercial)
- **Rojo minio** `--color-minium` (#c22f1d): el sello "Suscribirse al catálogo", las notas de rotulador destacadas (edición, "leer el folleto ↗"), los hovers de enlace (texto pasa a minio), la marca `>_`, y la selección de texto del navegador.
- **Minio quemado** `--color-minium-dark` (#932208): estado profundo del minio; reservado para variante oscura del sello o presión de estado.

### Secondary (sello de etiqueta)
- **Amarillo seria** `--color-strike` (#e9b611): cinta adhesiva en las fichas (`.tape`, 62% de opacidad), pestañas de nav al hover (40%), valores de la regleta, el pulso del punto vivo. Nunca como fondo de una sección entera.

### Neutral (papel y tinta)
- **Papel crema** `--color-paper` (#f2ead8): suelo global y hojas de tarjeta.
- **Papel de segunda** `--color-paper-2` (#e9dfc8): bandas alternas de sección (Departamentos, Pedidos), cabecera de tabla, fondos al hover de filas.
- **Papel de saco** `--color-paper-3` (#ddd0b2): la capa desplazada detrás de las tarjetas (`.canto::before`), el canto del gasto de hoja.
- **Tinta** `--color-ink` (#20211c): texto, bordes estructurales de 2px, fondo de la regleta.
- **Tinta suave** `--color-ink-soft` (#5d574a): texto secundario y metadatos (cumple ≥4.5:1 sobre paper), etiquetas mono grises.
- **Línea de tinta** `--color-ink-line` (#b4a98f): bordes finos de 1px dentro de piezas, divisiones entre filas, pestañas en reposo.

### Named Rules
**La Regla del Acto Comercial.** El minio es la voz del mostrador: solo
aparece donde se vende o se señala dinero/acción comercial (sello, precio,
hover de llamada a la acción, marca). Si una pantalla acaba con más del 10%
de minio, está gritando.

**La Regla de la Cinta.** La seria no es una tinta de plenigrafía: es material
adhesivo (cinta semitransparente) o valor medido en la regleta. Jamás fondo
de sección ni texto principal fuera de la banda-instrumento.

**La Regla del Papel Sobre Papel.** Para apilar jerarquía se cambia de hoja
(paper → paper-2 → paper-3), nunca se añade blanco puro ni grises fríos.

## Typography

**Display Font:** Barlow Condensed (pesos 500–800 cargados; fallback Arial Narrow), para titulares de folleto.
**Body Font:** Barlow (400/500/600), cuerpo de párrafo, 65–75ch en columnas largas.
**Marker Font:** Caveat (600/700), el rotulador.
**Mono Font:** IBM Plex Mono (400/500), la regleta y los datos.

**Character:** una hoja comercial de barrio — el rotulador y la imprenta
conviven como conviven en una ferretería de verdad. Dos registros: lo
condensado grita el nombre del departamento; lo manuscrito comenta al margen.

### Hierarchy
- **Display** (Barlow Condensed 800, clamp(3.25rem,9vw,6rem) en hero y 2.25–3rem en secciones, leading 0.9, mayúsculas, tracking estrecho): h1 y h2 de sección. Siempre `uppercase`.
- **Título de pieza** (Barlow Condensed 700, 1.5rem, leading tight): títulos de vídeo y folletos. Hover → minio.
- **Body** (Barlow 400, 17px base `1.0625rem`, leading relaxed, máx 56–68ch): párrafos de folleto. Variantes `ink/85–ink/90` para texto sobre paper.
- **Marker** (Caveat 600–700, 1.25–1.875rem): subrayados dobles de tinta, bajadas de sección ("lo recién impreso, de corrido"), email en tamaño 1.875rem con subrayado ondulado minio.
- **Label / mono** (IBM Plex Mono, 0.6875–0.75rem, tracking 0.12–0.14em, mayúsculas): cabecera de tabla, etiquetas de departamento, metadatos, todo número.

### Named Rules
**La Regla del Doble Registro.** Un número o dato medido NUNCA se escribe en
sans ni en Caveat: va en Plex Mono. Una nota de voz NUNCA va en mono: va en
Caveat. El mono describe; el marcador comenta.

## Layout

Contenedor único `max-w-6xl` (72rem) con respiración `px-5` / `sm:px-8`. Las
secciones respiran `py-16 lg:py-20`. Hero a rejilla de 12 columnas: 7/12
titular + sello, 5/12 ficha destacada. Bandas de color alternan cada seccion
mayor (paper / paper-2) para marcar "hoja siguiente", rematadas por la curva
a cinta de `TapeDivider` (`py-8`, con variante `flip` girada 180°). Mobile
first: el histórico (tabla `Última hornada`) se repliega a rejilla de dos
columnas por fila, ref/metadata ocultos cuando no caben.

## Elevation & Depth

**No hay sombras difusas.** La profundidad es de papelería: capas apiladas
planas y desplazamiento duro: se ve el canto de la hoja apilada, como en un
gasto de imprenta.

### Vocabulario de sombras (hard offsets only)
- **Canto apilado** (`.canto::before`: `inset: 4px -4px -4px 4px`, fondo `--color-paper-3`, `z-index: -1`): toda tarjeta "hoja sobre hoja" — pieza destacada, departamentos, folletos.
- **Sombra dura del sello** (`box-shadow: 3px 3px 0 0 var(--color-ink)`): exclusiva del CTA primario. Empuje físico, sin blur.
- **Canto de borde** (`box-shadow: 0 1px 0 0 var(--color-paper-3)`): remate inferior del papel sobre papel.

### Named Rules
**La Regla del Canto Quebrado.** Prohibido `blur` > 0: ninguna sombra del
sistema difumina. La profundidad se construye desplazando una hoja de papel
paper-3 bajo la actual.

## Shapes

Esquinas rectas antes: bordes estructurales de tinta a 2px (`border-ink`),
divisiones internas a 1px (`border-ink-line`), foco con radio de 1px. Las
únicas curvas del sistema son funcionales: la frontera ondulada SVG del
`TapeDivider` (stroke 2.5px, `vector-effect: non-scaling-stroke`), la
perforación semicircular repetida cada 22px del `.perfo-top`, la inclinación
de cinta (rotate −3°) y el leve desalineado de folletos (±0.8–0.9deg).
Radios de esquina: 0. Un catálogo no tiene cantoneras.

## Components

### El Sello (CTA primario)
- **Forma:** bloque rectangular, esquina viva; fondo minio, letra paper en Barlow Condensed 700, mayúsculas (`padding: 1rem 1.5rem`).
- **Dorsal:** sombra dura 3px 3px tinta; al hover gira −1.5° y sube 1px (ease-out `cubic-bezier(0.16,1,0.3,1)`, 180ms), como sello que se descuelga del plástico.
- **Focus:** anillo minio de 2px con offset 2px (estándar del navegador).

### Pestañas de catálogo (nav)
- Mono 11px mayúsculas tracking 0.12em; borde 1px ink-line, fondo paper, `padding: 0.5rem 0.625rem`.
- Hover: borde pasa a tinta plena y el fondo vira a seria al 40% — se "pegan la cinta" al pestañearla.

### Ficha de pieza (pieza card)
- Hoja `paper` fondo sobre `paper-3` (`.canto`), padding 1.25–1.5rem, con remate de cinta seria rotada arriba (`.tape`, 5.5rem × 1.6rem al 62%).
- Miniatura YouTube `hqdefault`, `border-2 border-ink`, `aspect-video`. Contador "pieza no. —" en mono 11px con icono de marco.
- Título condensed 700 con hover → minio; llamada "ver esta pieza ↗" en Caveat con subrayado de tinta que vira a minio.

### Histórico de catálogo (ledger table)
- Marco de 2px de tinta sobre paper; cabecera mono mayúsculas sobre banda paper-2; filas divididas por 1px ink-line.
- Columnas: ref (mono, código del id con 4 dígitos), pieza (thumb 7rem + título), fecha, vistas (tabular-nums), llamada Caveat "ver ficha ↗".
- Hover de fila: fondo paper-2, título y llamada → minio. En `<sm` la tabla se compacta a thumb + título + fecha.

### Hoja de departamento
- Tarjeta `paper` con `.canto` sobre banda `paper-2`; grid 3 piezas: título de departamento (Display 700 1.875rem), etiqueta "departamento de —" en mono minio 11px mayúsculas, cuerpo 68ch, enlace Caveat "pasillo ↗".

### Folleto anexo
- Tarjeta con borde de 2px, tilt de rotulador (−0.8° / +0.9°), `.canto` debajo; captura `16/10` con borde inferior de 2px y `object-top`; título display mayúsculas; "leer el folleto ↗" en Caveat minio.

### Fila de pedido (mostrador)
- Lista con marco de 2px y divisores de 2px ink-line; fila `paper` con display 700 1.25rem + nota mono derecha; hover: fondo seria 30%, texto → minio. Email del mostrador en Caveat 1.875rem con subrayado ondulado minio 60%.

### La regleta viva (instrumento)
- Banda full-width en tinta plena (`bg-ink`), bordes de 2px, únicos fondos oscuros del sistema: es jaula de instrumento, no panel.
- Mono 12px tracking 0.08em: punto seria latiendo (opacidad 1 ↔ 0.25, 2.2s `steps(2, jump-none)`), "impresión:", "piezas listadas:", valores en seria; caret `▍` parpadeando en lg.
- Todo dato real del build (fecha, contador). Si no hay dato, no hay celda.

### Movimiento
- **Regleta:** pulsar por opacidad en pasos discretos (`steps(2, jump-none)`), nunca fade suave: es un LED que tickea, no un latido orgánico.
- **Sello/hovers:** `cubic-bezier(0.16,1,0.3,1)` a 180ms para transform; transiciones de color 150ms ease en el resto.
- **Scroll de anclas:** smooth; y con `prefers-reduced-motion: reduce` se apaga todo (scroll-behavior auto + animaciones/transiciones a 0.01ms vía regla global en `global.css`).

### Superficie del navegador
- **Selección:** fondo minio, texto paper — marcar con la tinta del sello.
- **Focus-visible:** outline 2px minio, offset 2px, radio 1px. Nunca azules de UA.
- **Scrollbar:** `scrollbar-color: var(--color-ink) var(--color-paper-2)`, thin — papel detrás, tinta delante.

## Do's and Don'ts

### Do:
- **Do** reservar el minio para actos comerciales: sello de suscripción, precio, hover de CTA, nota de rotulador destacada, selección de texto.
- **Do** escribir todo dato medido (fecha del build, contador, ref. de pieza, nº de vistas) en IBM Plex Mono.
- **Do** separar secciones mayores con la curva `TapeDivider` y alternar bandas paper / paper-2.
- **Do** apilar profundidad con `.canto` (paper-3 desplazado 4px) y sombras duras sin blur.
- **Do** redactar las llamadas con la voz del mostrador en Caveat: "ver ficha ↗", "pasillo ↗", "ver las últimas piezas ↓".
- **Do** respetar `prefers-reduced-motion`: el pulso y los cintilleos se apagan, el scroll deja de ser smooth.

### Don't:
- **Don't** usar sombras difuminadas (blur > 0) jamás: la profundidad es de papelería, no de elevación.
- **Don't** partir secciones con reglas rectas de ancho completo: la frontera entre hojas siempre va a cinta (curva).
- **Don't** redondear esquinas (radius 0 en tarjetas y bloques; la única curva es la cinta y la perforación).
- **Don't** inventar colores fuera de las nueve tintas del catálogo ni gradientes de color; el ruido de grano es el único gradiente aceptable.
- **Don't** poner fondo oscuro fuera de la regleta: el ink es jaula de instrumento, no tema.
- **Don't** usar la seria como texto de navegación o como fondo de sección: es adhesivo (cinta al ≤62% de opacidad) y valor de regleta.
- **Don't** usar fotos de banco: la única imaginería real son miniaturas de YouTube con borde de tinta y capturas del anexo, con su procedencia.
