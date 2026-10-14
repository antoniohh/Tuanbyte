# Plan: especial «El taller mínimo viable»

**Qué comprar para un taller de mecánica de motos y coches, y en qué orden.**
El tercer especial del catálogo, y el primero que **no compara productos rivales
entre sí**: compara **herramientas y categorías**, con el orden de compra como
columna vertebral.

Estado: **plan aprobado, sin construir**. Decisión tomada el 2026-10-14.

---

## 1. Por qué este especial (y no otro)

Los dos primeros especiales comparan vehículos. Este cambia de eje y se apoya en
tres cosas que ya existen:

- **Material propio**: hay vídeos de herramientas y de reparaciones, y hay
  muchas de las llaves en la mano. No hace falta comprar nada para fotografiarlo.
- **Es perenne**: una llave de vasos no caduca como un modelo de coche. La
  edición puede durar años con retoques de precio.
- **Responde a una pregunta que todo el mundo hace**: *«¿qué me compro
  primero?»*. Es la pregunta con más intención de compra que existe.

Además deja dos puentes abiertos para especiales futuros: **diagnóstico OBD2**
(etapa 3) e **impresoras 3D** (etapa 4).

## 2. La promesa editorial

> **No es un «top 10 de herramientas». Es el orden en que se compran.**

El reportaje tiene que poder responderse con una frase: *si empiezas hoy, compra
esto; cuando ya lo hayas usado, esto otro; esto solo cuando te toque desmontar
media moto.*

Y una ley que gobierna todo el especial, la **regla de oro del taller**:

> **Gasta en lo que gira y mide; ahorra en lo que sujeta y golpea.**

Traducido: la dinamométrica, los vasos, la carraca y los alicates de corte
buenos; el martillo, el mazo, las bandejas y los embudos, del bazar.

## 3. Qué se conserva del sistema y qué es nuevo

Se reutiliza **todo** el sistema de reportaje (`shared/Reportaje.astro` y sus
piezas). Lo nuevo es poco y está justificado:

| Pieza | Estado | Por qué |
|---|---|---|
| `Portada`, `Veredicto`, `Migas`, `TablaTecnica`, `Ranking`, `Fichas` | **Reutilizadas tal cual** | Las fichas y el ranking admiten cualquier contenido (specs libres y criterios configurables). |
| `Etapas.astro` | **Nueva** (una sola) | La ruta 1→2→3→4 es la espina dorsal del reportaje y no existe hoy. |
| `Fichas.astro` → campo `videos?` | **Retoque pequeño** | Cada herramienta debe poder enlazar sus vídeos del canal. Opcional: los otros reportajes no cambian. |
| `lib.ts` → `Tag` compartido | **Retoque pequeño** | Hoy `Tag` vive en `guia-motos/types.ts` (con un caso `bmw`). Hay que moverlo a `shared/types.ts` para que este especial tenga sus etiquetas (`común` · `moto` · `coche` · `esencial`). |
| `Reportaje.astro` → bloque `etapas` | **Retoque pequeño** | Renderizar `<Etapas>` donde hoy va `tablaAntes` (que se mantiene por compatibilidad). |

**Coste de código: un componente nuevo y tres retoques mínimos.** Cero
duplicación.

## 4. Estructura de la página

En este orden (el actual, con las etapas en su sitio):

1. **Migas** · Especiales › El taller mínimo viable
2. **Portada** — foto de familia del *kit de arranque* (plano cenital propio),
   intro y tira de datos: `4 etapas · 40 fichas · 3 presupuestos`
3. **Veredicto** (banda de tinta) — *«si solo puedes comprar una cosa»* y los
   cuatro motivos. Aquí vive también la regla de oro.
4. **Etapas** *(nuevo)* — la ruta: cuatro bloques numerados con su lema, su
   presupuesto y la lista de lo que entra en cada uno. Es el índice del
   reportaje y el índice de la compra.
5. **El orden** *(el Ranking, reutilizado)* — las ~40 fichas ordenadas por
   **índice de prioridad**. El chip de la primera fila dirá **«la primera»** en
   vez de «ganadora».
6. **El taller** *(las Fichas, reutilizadas)* — la rejilla de las ~40
   herramientas; cada tarjeta se despliega en su ficha.
7. **Dossier** — los apéndices (7 tablas, ver §10).

## 5. La ruta: cuatro etapas

| Etapa | Título | Qué resuelve | Presupuesto orientativo |
|---|---|---|---|
| **1** | *Para empezar mañana* | Mantenimiento básico, no quedarte tirado y poder abrir algo sin miedo. | 150–350 € |
| **2** | *Para hacerlo entero* | Reparaciones de verdad: frenos, rodamientos, motor, chapa y electricidad. | 600–1.200 € |
| **3** | *Lo de tu moto y tu coche* | Lo específico, que solo se compra cuando el trabajo lo pide. | 100–500 € según el trabajo |
| **4** | *El capricho que sí trabaja* | Máquinas y herramienta que devuelve horas cada vez que se usa. | 300 €+ por pieza |

Cada etapa lleva su **foto de familia** propia (plano cenital) para que el
reportaje se lea como una estantería que se va llenando.

## 6. El catálogo: ~40 fichas

Cada ficha es **una familia**, no una herramienta suelta: dentro cuenta lo que
incluye (puntas JIS, vasos largos, etc.). Nombres de trabajo, a pulir al
escribir:

### Etapa 1 · Para empezar mañana (12)
1. Destornilladores (plano, Phillips, Pozidriv)
2. **Puntas JIS** — las crucetas japonesas que no son Phillips y se destrozan
3. Llaves combinadas (boca-poligonal), 6–22 mm
4. **Juego de vasos 3/8" de 6 puntas + carraca** ← candidata a ganadora
5. Llaves Allen (hex) en mm
6. Alicates (universal, punta larga, corte)
7. **Dinamométrica 3/8"** (20–100 Nm)
8. Llave de bujías (con junta de goma)
9. Martillo de bola y mazo de nylon
10. Gato, caballete y borriquetas (moto / coche)
11. Linterna frontal y espejo de inspección
12. EPI: guantes, gafas, rodilleras, calzado

### Etapa 2 · Para hacerlo entero (16)
13. Carraca 1/2" y vasos de impacto
14. Vasos largos, extensiones, junta universal y adaptadores
15. Vasos Torx, E-Torx, Allen y XZN
16. Dinamométrica 1/2" (40–200 Nm)
17. Dinamométrica de rango bajo (5–25 Nm)
18. Extractores de tornillos dañados
19. Extractores de rodamientos (y prensa de rodamientos)
20. Alicates de manguitos, pinzas de muelle y llave de grifa
21. Purga de frenos: llave de purga, manguera y jeringa
22. Multímetro
23. Calibre, galgas de espesores y medidor de compresión
24. Banco de trabajo y tornillo de banco
25. Compresor y accesorios de aire
26. Taladro/atornillador y brocas
27. Amoladora y discos
28. Bandejas, embudos y bomba de aceite

### Etapa 3 · Lo de tu moto y tu coche (10)
29. Herramienta de cadena de transmisión *(moto)*
30. Llave de radios y alineación de rueda *(moto)*
31. Extractor de volante y bloqueadores de embrague/volante *(moto)*
32. Compresor de muelles y herramientas de horquilla *(moto)*
33. Herramienta de válvulas y galgas acodadas *(moto)*
34. Vacuómetros / sincronización *(moto)*
35. Extractores de rótulas y silentblocks *(coche)*
36. Compresor de muelles de suspensión *(coche, con aviso de seguridad)*
37. Llaves de tubo de freno y dobladora *(coche)*
38. **Diagnóstico OBD2** *(coche — enlace al futuro especial)*

### Etapa 4 · El capricho que sí trabaja (6)
39. Llave de impacto de batería
40. Elevador / gato de taller
41. Prensa hidráulica
42. Limpiadora ultrasónica
43. Soldadura (estaño y/o MIG-TIG)
44. **Impresora 3D** *(enlace al futuro especial)*

> Las fichas se numeran por **orden de compra**, no por familia: la primera
> ficha es la primera cosa que hay que comprar. Así la rejilla *es* la
> respuesta a la pregunta del reportaje.

## 7. Calidades y marcas (el sistema de puntuación)

### Las tres gamas

| Gama | Para qué sirve | Riesgo |
|---|---|---|
| **De paso** | Lo que se usa tres veces al año. | Se redondea, se oxida, no aguanta un apriete serio. |
| **De batalla** | El pan de cada día del taller casero. **Aquí está el dinero bien gastado.** | Ninguno si se elige bien la familia. |
| **De por vida** | Herramienta que se hereda. | Pagar de más por lo que no se usa. |

### Cómo se juzga (criterios objetivos, no olfato)

- **Material**: acero al cromo-vanadio (CrV) en lo general; cromo-molibdeno
  (CrMo) en impacto; acero al carbono solo en lo que no sufre.
- **Fabricación**: forjado en caliente vs. estampado; acabado cromado, fosfatado
  o pulido (el pulido se oxida, el fosfatado agarra mejor la mano).
- **Norma**: DIN 3120/3126 e ISO 1174-1 en vasos; **ISO 6789** en
  dinamométricas (es la única que dice si mide bien); DIN 3113 en llaves.
- **Perfil**: **6 puntas para apretar** (agarra la tuerca por la cara, no por la
  esquina), 12 puntas solo para pasar por donde no cabe.
- **Garantía y recambios**: una marca que te cambia un vaso roto vale más que
  una que no contesta.

### Borrador de mapa de marcas (a validar con tu experiencia real)

| Gama | Nombres |
|---|---|
| Entrada | Workpro, Tolsen, Brüder Mannesmann, Mannesmann |
| Batalla | Stanley, Expert, Bahco, Teng Tools, Gedore Red, Wera y Wiha (puntas y destornilladores), Knipex (alicates) |
| Por vida | Gedore, Hazet, Stahlwille, Facom, USAG, Beta, Ko-ken, Snap-on, King Tony |
| Moto | Motion Pro, Rothewald (Louis), BGS, Buzzetti, Athena |
| Coche | Sealey, Laser, Klann, Sykes-Pickavant, BGS |

Regla que va escrita en el reportaje y hay que respetar: **ninguna marca es
buena en todo.** Wera hace las mejores puntas y no hace vasos; Knipex manda en
alicates y no hace dinamométricas. Se juzga **por familia**, no por marca.

Y el aviso, en la portada y en el dossier: **sin patrocinio y sin enlaces de
afiliación.** Son las herramientas que se usan en el taller, no un escaparate.

## 8. Modelo de datos

`src/especiales/taller-minimo/types.ts` (borrador):

```ts
export type Etapa = 1 | 2 | 3 | 4;
export type Alcance = "común" | "moto" | "coche";
export type Exigencia = "alta" | "media" | "baja";
export type Tag = "esencial" | "común" | "moto" | "coche" | null;

export interface Herramienta {      // una ficha
  id: string;
  name: string;
  type: string;                     // familia
  rank: number;                     // orden de compra
  scoreValue: number;               // índice de prioridad (0-10)
  img: string;
  etapa: Etapa;
  alcance: Alcance;
  exigencia: Exigencia;             // cuánta calidad exige la pieza
  specs: { label: string; value: string }[];   // PARA QUÉ · SIN ELLA NO PUEDES · GAMA MÍNIMA · GAMA BUENA · MARCAS · ERRORES
  desc: string;
  videos?: { id: string; title: string }[];
}

export interface OrdenRow {         // el ranking
  model: string; tag: Tag;
  uso: number; desbloqueo: number; coste: number; exigencia: number;
  nota: number;
}
```

Las **specs de cada ficha** son el contenido que hace grande el reportaje. En
este orden:

| Etiqueta | Qué responde |
|---|---|
| PARA QUÉ | El uso real, en una línea. |
| SIN ELLA NO PUEDES | El bloqueo concreto que levanta. |
| GAMA MÍNIMA | Qué comprar si vas justo (con nombre y precio). |
| GAMA BUENA | Qué comprar si quieres hacerlo una vez. |
| MARCAS | Dos o tres nombres por gama. |
| ERRORES | El error típico al comprarla o al usarla. |

## 9. El ranking = el orden de compra

Criterios y ponderación (a cerrar contigo):

| Criterio | Peso | Qué mide |
|---|---|---|
| Uso | 30 % | Cuántas veces al año la vas a coger. |
| Desbloqueo | 30 % | Sin ella, no puedes hacer X. |
| Coste | 20 % | A más barata, más nota. |
| Exigencia | 20 % | Cuánta calidad pide la pieza (una dinamométrica pide mucha; un mazo, ninguna). |

`Ranking.astro` ya admite esto tal cual: `title="El orden"`, criterios
configurables y `winnerLabel="la primera"`. Cero código nuevo.

## 10. Dossier: siete apéndices

1. **Calidades y materiales** — CrV vs CrMo, forjado, normas, perfiles 6/12
   puntas, qué significa cada certificado.
2. **Marcas por gama** — la tabla de §7, ampliada con «qué esperar».
3. **Los tres presupuestos** — *Ruta mínima* (~300 €), *Ruta de batalla*
   (~900 €) y *Ruta de taller* (~2.500 €), con precio mínimo y precio bueno por
   herramienta.
4. **Moto vs coche** — qué añade cada uno y qué es común.
5. **Errores y trampas** — vasos de 12 puntas en tuercas agarrotadas, la
   dinamométrica barata, la llave inglesa en tuercas grandes, el «juego de
   1.000 piezas», guardar la dinamométrica tensada, el tubo alargador.
6. **Pares de apriete orientativos** — ruedas, culata, bujías, tapón de cárter…
   **Los valores salen de los manuales del taller, no de la memoria**, y la
   tabla lleva su aviso: *orientativo, consulta el manual de tu modelo*.
7. **Glosario del taller** — vaso, carraca, cuadro, conseta, poligonal, E-Torx,
   XZN, JIS, Nm, kpm…

## 11. Fotos: protocolo (es el único trabajo real)

Se fotografían **en casa**, con las herramientas que ya hay:

- **Fondo papel o kraft claro**, el mismo para todo el reportaje (así no hay
  que recortar fondos: la foto se funde con el papel del catálogo).
- **Cenital (desde arriba)** para las familias; **tres cuartos** para las
  máquinas que lo piden.
- **Luz difusa** (ventana + un folio como difusor), sin sombra dura.
- **Encuadre cuadrado**, exportado a ~800×800, en `/images/especiales/taller-minimo/`.
- Nombres: `familia-<slug>.jpg`, `etapa-<n>.jpg`.
- **Una foto por ficha (~40) + cuatro fotos de etapa + la de portada.** Se hace
  en dos sesiones, no de una tirada.

## 12. Vídeos del canal

Cada ficha puede llevar uno o dos vídeos (`videos: [{ id, title }]`) y se
renderizan como enlaces «verlo en el taller ↗» dentro de la ficha abierta.

Lista **manual**, no automática: son vídeos concretos elegidos a mano, no un
feed. (El canal ya tiene la cadena de RSS para la portada; aquí no hace falta y
añadiría fragilidad.) Se etiquetan también los de reparaciones: una ficha que
diga *«así se usa»* con tu propio vídeo vale doble.

## 13. SEO, rutas y enlaces internos

- Ruta: **`/especiales/taller-minimo`**
- Título: *El taller mínimo viable · Qué herramientas comprar y en qué orden*
- H1: *El taller mínimo viable*
- Descripción: qué es, para quién y el orden (≤155 caracteres).
- JSON-LD: `Article` + `BreadcrumbList` (como los otros dos) y
  `datePublished` / `dateModified` **reales** — este reportaje se revisa por
  ediciones («Edición 2026»), y eso hay que poder demostrarlo.
- Entradas nuevas en `sitemap.xml` y tarjeta en `/especiales`.
- **Enlaces internos**: desde la portada (sección *Especiales*) y desde el
  índice. En el futuro, desde OBD2 (ficha 38) e impresoras 3D (ficha 44).

**Detalle a decidir**: la rejilla de tarjetas de especiales (portada e índice)
está a `lg:grid-cols-2`. Con tres reportajes queda uno solo en su fila.
Propuesta: pasar a **`lg:grid-cols-3`** en el índice (estantería de tres) y
mantener dos columnas en la portada dejando el tercero a lo ancho, o también a
tres. Se decide al verlo.

## 14. Fases de construcción

| Fase | Entregable | Notas |
|---|---|---|
| **F1 · Esqueleto** | `types.ts`, datos con **6 fichas reales**, página `taller-minimo.astro`, `Etapas.astro`, `videos` en `Fichas.astro`, `Tag` a `shared/`, tarjeta en el índice y sitemap. Build verde. | Valida el formato nuevo **antes** de escribir 40 fichas. Aquí se aprueba o se corrige el diseño. |
| **F2 · Taxonomía** | Las ~40 fichas con sus seis specs y su descripción. | El grueso del texto. Se puede hacer por etapas (1, 2, 3, 4). |
| **F3 · Fotos** | Sesión propia: portada, 4 etapas y ~40 familias. | El único trabajo que no se hace en el ordenador. |
| **F4 · Orden y veredicto** | Puntuación de las 40, ranking cerrado, veredicto con sus cuatro factores. | Aquí se decide la ganadora («la primera»). |
| **F5 · Dossier** | Las siete tablas. | Los pares de apriete, con manual en mano. |
| **F6 · Vídeos** | Enlazado de los vídeos de herramientas y reparaciones. | A mano, ficha a ficha. |
| **F7 · Remate** | SEO, OG, JSON-LD, revisión móvil, detector de diseño, publicación y tag **v1.5.0**. | Mismo protocolo que los otros dos. |

## 15. Riesgos y decisiones abiertas

**Riesgos**

- **Opinión sobre marcas**: se mitiga con criterios objetivos (§7), «sin
  patrocinio» y la regla de «ninguna marca es buena en todo».
- **Pares de apriete**: dato con consecuencias reales. Solo desde manual, con
  aviso visible, y sin inventar ninguna cifra.
- **Caducidad de precios**: edición fechada y revisión anual.
- **Volumen de fotos**: es el cuello de botella. Se hace en dos sesiones.
- **Longitud**: será el reportaje más largo del sitio. Se lleva bien con las
  etapas como índice y la rejilla como catálogo.

**Decisiones abiertas (para ti)**

1. **La ganadora del veredicto**: propongo el **juego de vasos 3/8" de 6 puntas
   con carraca** (lo que más desbloquea). Alternativa: la **dinamométrica de
   3/8"**, que encarna la regla de oro.
2. **Etapa 4**: ¿entra la **soldadura** (y con ella MIG/TIG)? Es el salto más
   grande del especial.
3. **Alcance**: ¿motos y coches a la vez desde el principio, o una primera
   edición centrada en **moto** (tu terreno) y el coche en la etapa 3?
4. **Fotos**: ¿papel claro sin recortar (mi propuesta, más rápido) o recorte
   tipo catálogo como los coches?
5. **Rejilla de especiales**: dos columnas con el tercero a lo ancho, o tres
   columnas (§13).

## 16. Mantenimiento

- **Edición anual**: revisar precios, retirar lo descatalogado, añadir lo que
  haya entrado en el taller. El reportaje lleva su fecha a la vista.
- **Cada vídeo nuevo de herramienta** puede añadir una ficha o un enlace.
- **El especial crece por etapas**: la 4 admite piezas nuevas sin tocar nada
  más que datos.
