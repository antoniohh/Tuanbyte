# Plan: especial «El taller mínimo viable»

**Qué comprar para empezar a hacerle el mantenimiento a tu moto o tu coche en
casa, en qué orden y de qué marca.**

Tercer especial del catálogo. Va dirigido a **cualquiera que empiece**: el que
tiene 100 €, compra en el Lidl, el Aldi o la ferretería del barrio, y no sabe si
la Parkside le vale o se está equivocando.

Estado: **plan v2, sin construir**. El eje cambió el 2026-10-15 (ver §3).

---

## 1. La promesa

> **No es un «top 10 de herramientas». Es el orden en que se compran.**

El reportaje tiene que poder responderse con una frase: *si empiezas hoy, compra
esto; cuando ya lo hayas usado, esto otro; esto solo cuando te toque desmontar
media moto.* Y siempre con el nombre y el precio de la marca que se encuentra
en la estantería, no de la que sale en las revistas.

## 2. Las dos reglas del especial

Van escritas en el reportaje y ordenan todo lo demás:

> **1. Gasta en lo que gira y mide; ahorra en lo que sujeta y golpea.**
> La dinamométrica, los vasos y los alicates de corte, buenos. El martillo, el
> mazo, las bandejas y los embudos, del bazar.

> **2. Si te hace falta dos veces, cómprala.**
> Nadie necesita 40 herramientas para cambiar el aceite. La lista dice cuáles
> hacen falta **casi siempre**, y todo lo demás se compra cuando el trabajo lo
> pide.

## 3. Qué cambia respecto al primer borrador (y por qué)

El plan v1 era el taller de un profesional: marcas de 200 € la pieza, normas
DIN e ISO, pares de apriete y una etapa de soldadura MIG/TIG. **Fuera.**

| Se va | Entra |
|---|---|
| Marcas pro (Gedore, Hazet, Snap-on…) como aspiración | **Parkside, Workzone, Bosch verde, Einhell, Stanley** como lo normal |
| «De paso / batalla / por vida» | **Bazar / súper y ferretería / el salto bueno** |
| Normas DIN, ISO, CrV, CrMo como argumento de venta | Explicado en cristiano: «6 puntas agarra mejor que 12» |
| 4 etapas y 40 fichas | **3 etapas y ~28 fichas** |
| 7 tablas de dossier | **4 tablas** |
| Pares de apriete y soldadura | Fuera: son de profesional |

## 4. Qué se conserva del sistema

Se reutiliza **todo** el sistema de reportaje. Coste de código: un componente
nuevo y tres retoques mínimos.

| Pieza | Estado | Por qué |
|---|---|---|
| `Portada`, `Veredicto`, `Migas`, `Ranking`, `Fichas`, `TablaTecnica` | **Tal cual** | El ranking admite criterios configurables y las fichas, cualquier dato. |
| `Etapas.astro` | **Nueva** (una sola) | La ruta 1→2→3 es la espina dorsal y no existe hoy. |
| `Fichas.astro` → campo `videos?` | **Retoque** | Cada ficha enlaza sus vídeos del canal. Opcional: los otros reportajes no cambian. |
| `lib.ts` → `Tag` a `shared/` | **Retoque** | Hoy vive en `guia-motos/types.ts` con un caso `bmw` que aquí no pinta nada. |
| `Reportaje.astro` → bloque `etapas` | **Retoque** | Renderizar `<Etapas>` donde hoy va `tablaAntes`. |

## 5. Estructura de la página

1. **Migas** · Especiales › El taller mínimo viable
2. **Portada** — foto propia del *kit de arranque* (plano cenital) y tira de
   datos: `3 etapas · 28 fichas · desde 100 €`
3. **Veredicto** (banda de tinta) — *«si solo compras una cosa, compra esta»*,
   sus cuatro motivos y las dos reglas.
4. **La ruta** *(nuevo)* — las tres etapas, con su presupuesto y su lista.
5. **El orden** *(el Ranking)* — las ~28 fichas ordenadas por prioridad. El
   chip de la primera fila dice **«la primera»**.
6. **El taller** *(las Fichas)* — la rejilla; cada tarjeta se despliega en su
   ficha.
7. **Dossier** — cuatro tablas (§10).

## 6. La ruta: tres etapas

| Etapa | Título | Qué resuelve | Presupuesto |
|---|---|---|---|
| **1** | *Con 100 € empiezas* | Cambio de aceite, filtros, bujías, pastillas, ajustes básicos. No quedarte tirado. | **~100–150 €** |
| **2** | *Cuando ya te manchas las manos* | Reparaciones de verdad: frenos, rodamientos, motor, electricidad. | **~300–600 €** |
| **3** | *Cuando el trabajo lo pide* | Lo específico de tu moto o tu coche, y las máquinas (taladro, amoladora, compresor). | Lo que pida el trabajo |

Cada etapa lleva su **foto de familia** (plano cenital) para que el reportaje se
lea como una estantería que se va llenando.

## 7. El catálogo: ~28 fichas

Cada ficha es **una familia**, no una herramienta suelta. Numeradas por **orden
de compra**: la ficha 1 es lo primero que se compra, así que la rejilla *es* la
respuesta a la pregunta del reportaje.

### Etapa 1 · Con 100 € empiezas (10)
1. Destornilladores (plano, estrella y Pozidriv)
2. Llaves combinadas (fijas), 6–22 mm
3. **Juego de vasos 3/8" + carraca** ← candidata a ganadora
4. Llaves Allen (hex) en mm
5. Alicates (universal, punta larga, corte)
6. Llave de bujías
7. Dinamométrica (20–100 Nm)
8. Martillo y mazo
9. Gato y caballete (moto) o borriquetas (coche)
10. Linterna frontal

### Etapa 2 · Cuando ya te manchas las manos (12)
11. Carraca 1/2" y vasos grandes
12. Vasos largos, extensiones y junta universal
13. Vasos Torx y Allen
14. Dinamométrica grande (40–200 Nm)
15. Dinamométrica pequeña (5–25 Nm)
16. Extractores de tornillos pasados
17. Alicates de manguitos y llave de grifa
18. Purga de frenos
19. Multímetro
20. Calibre y galgas
21. Banco de trabajo y tornillo de banco
22. Bandejas, embudos y bomba de aceite

### Etapa 3 · Cuando el trabajo lo pide (6)
23. Herramienta de cadena y llave de radios *(moto)*
24. Extractor de volante y bloqueadores *(moto)*
25. Extractores de rótulas y silentblocks *(coche)*
26. Llaves de tubo de freno y dobladora *(coche)*
27. **Diagnóstico OBD2** *(coche — enlace al futuro especial)*
28. Taladro, amoladora y compresor

## 8. Las marcas: el corazón del reportaje

Esto es lo que lo hace útil y es lo que ya has comparado con tus manos.

### Las tres gamas accesibles

| Gama | Quién está aquí | Qué esperar |
|---|---|---|
| **Bazar y marca del súper** | Parkside (Lidl), Workzone (Aldi), marcas de bazar | Sorprendentemente bien en llaves, vasos y alicates de andar por casa. Flojas donde algo **mide** o **gira mucho**. |
| **Súper y ferretería de marca** | Bosch verde, Einhell, Stanley, Black+Decker, Mannesmann, Workpro, Bellota, Palmera, Irazola | El punto dulce para casi todo. Precio de 20 a 60 € por pieza. |
| **El salto bueno** (sin irte a profesional) | Bahco, Knipex (alicates), Wera y Wiha (puntas), Irwin, Bosch azul | Se compra **una vez** en lo que gira y mide. De 25 a 70 € por pieza. |

### Tres cosas que hay que decir y casi nadie dice

- **Bosch verde y Bosch azul son dos mundos.** Misma marca, distinta fábrica,
  distinto precio y distinta garantía. El reportaje lo explica en dos líneas.
- **Parkside cambia de fabricante por lotes.** El juego de vasos de 2022 no es
  el de 2025. Aviso explícito: *lo que hoy sale bueno puede no salir igual
  mañana*, y por eso se juzga **por familia**, no por marca.
- **Ninguna marca es buena en todo.** Knipex manda en alicates y no hace
  dinamométricas. Se juzga familia a familia.

Aviso en la portada: **sin patrocinio y sin enlaces de afiliación.** Son las
herramientas que se usan en casa, no un escaparate.

## 9. Modelo de datos

`src/especiales/taller-minimo/types.ts` (borrador):

```ts
export type Etapa = 1 | 2 | 3;
export type Alcance = "común" | "moto" | "coche";
export type Tag = "esencial" | "común" | "moto" | "coche" | null;

export interface Herramienta {        // una ficha
  id: string;
  name: string;
  type: string;                       // familia
  rank: number;                       // orden de compra
  scoreValue: number;                 // prioridad (0-10)
  img: string;
  etapa: Etapa;
  alcance: Alcance;
  specs: { label: string; value: string }[];
  desc: string;
  videos?: { id: string; title: string }[];
}

export interface OrdenRow {           // el ranking
  model: string; tag: Tag;
  uso: number; desbloqueo: number; barata: number;
  nota: number;
}
```

Las **seis specs de cada ficha** (en este orden), todas en lenguaje llano:

| Etiqueta | Qué responde |
|---|---|
| PARA QUÉ | El uso real, en una línea. |
| SIN ELLA NO PUEDES | El bloqueo concreto que levanta. |
| COMPRA BARATA | Marca y precio de la opción del súper. |
| COMPRA BUENA | Marca y precio del salto bueno. |
| MARCAS | Los dos o tres nombres que se encuentran. |
| EL ERROR TÍPICO | Lo que se compra mal y por qué. |

## 10. El orden (el ranking)

Tres criterios, con nombres de la calle:

| Criterio | Peso | Qué mide |
|---|---|---|
| **Lo usarás** | 40 % | Cuántas veces al año la vas a coger. |
| **Sin ella no puedes** | 40 % | El trabajo que desbloquea. |
| **Barata** | 20 % | A más barata, más nota. |

`Ranking.astro` ya admite esto tal cual: `title="El orden"`,
`winnerLabel="la primera"`. Cero código nuevo.

## 11. Dossier: cuatro tablas

1. **Las marcas, una a una** — filas: Parkside, Workzone, Bosch verde, Bosch
   azul, Einhell, Stanley, Black+Decker, Mannesmann, Workpro, Bellota/Palmera,
   Bahco, Knipex. Columnas: *gama · lo bueno · lo flojo · veredicto*.
2. **Los tres presupuestos** — ~100 €, ~300 € y ~600 €, con lo que entra en
   cada uno, pieza y precio.
3. **Moto vs coche** — qué añade cada uno y qué es común.
4. **Errores y trampas** — el juego de 1.000 piezas, la dinamométrica de 12 €,
   los vasos de 12 puntas en tuercas agarrotadas, la llave inglesa en tuercas
   grandes, el tubo alargador, guardar la dinamométrica tensada.

Y al final, un **glosario** plegable (`<details>`, sin tabla): vaso, carraca,
cuadro, poligonal, Torx, Allen, Nm. Nada de códigos de norma en el texto: si
hay que explicar algo técnico, se explica con una frase.

## 12. Fotos: protocolo

Se fotografían **en casa**, con las herramientas que ya tienes:

- **Fondo papel o kraft claro**, el mismo para todo el reportaje (así no hay que
  recortar fondos: la foto se funde con el papel del catálogo).
- **Cenital** para las familias; **tres cuartos** para las máquinas.
- **Luz difusa** (ventana + un folio de difusor), sin sombra dura.
- **Cuadrado**, exportado a ~800×800, en `/images/especiales/taller-minimo/`.
- Nombres: `familia-<slug>.jpg`, `etapa-<n>.jpg`.
- **28 fotos + 3 de etapa + la de portada.** Dos sesiones, no una tirada.

## 13. Vídeos del canal

Cada ficha puede llevar uno o dos vídeos (`videos: [{ id, title }]`),
renderizados como enlaces «verlo en el taller ↗» dentro de la ficha abierta.
Aquí es donde brillan tus **comparativas de marcas**: una ficha que diga
*«mira cómo se comporta esta llave»* con tu propio vídeo vale doble.

Lista **manual**, no automática: son vídeos elegidos a mano, no un feed.

## 14. SEO, rutas y enlaces

- Ruta: **`/especiales/taller-minimo`**
- Título: *El taller mínimo viable · Qué herramientas comprar y en qué orden*
- H1: *El taller mínimo viable*
- JSON-LD: `Article` + `BreadcrumbList`, con `datePublished` y `dateModified`
  reales (esto se revisa por ediciones).
- Entradas en `sitemap.xml` y tarjeta en `/especiales`.
- **Detalle a decidir**: la rejilla de especiales está a `lg:grid-cols-2` y con
  tres reportajes queda uno solo en su fila. Propuesta: tres columnas en el
  índice y decidir la portada al verlo.

## 15. Fases

| Fase | Entregable | Notas |
|---|---|---|
| **F1 · Esqueleto** | `types.ts`, datos con **6 fichas reales**, página, `Etapas.astro`, `videos` en `Fichas.astro`, `Tag` a `shared/`, tarjeta y sitemap. Build verde. | Valida el formato **antes** de escribir 28 fichas. |
| **F2 · Fichas** | Las ~28 con sus seis specs y su descripción. | Por etapas: 1, 2, 3. |
| **F3 · Fotos** | Sesión propia: portada, 3 etapas y 28 familias. | El único trabajo que no se hace en el ordenador. |
| **F4 · Orden y veredicto** | Puntuación, ranking cerrado y veredicto con sus cuatro motivos. | Aquí se decide «la primera». |
| **F5 · Dossier** | Las cuatro tablas y el glosario. | La de marcas es la estrella. |
| **F6 · Vídeos** | Enlazado a mano, ficha a ficha. | Aquí entran tus comparativas. |
| **F7 · Remate** | SEO, OG, JSON-LD, móvil, detector, publicación y tag **v1.5.0**. | Mismo protocolo que los otros dos. |

## 16. Decisiones abiertas

1. **La ganadora del veredicto**: propongo el **juego de vasos 3/8" con
   carraca** (lo que más desbloquea). Alternativa: la **dinamométrica**, que
   encarna la primera regla.
2. **Qué marcas entran en la tabla** y cuáles has probado de verdad: dime la
   lista real y el orden de confianza. Propongo Parkside, Workzone, Bosch verde,
   Bosch azul, Einhell, Stanley, Black+Decker, Mannesmann, Workpro, Bellota,
   Palmera, Bahco y Knipex.
3. **Alcance**: ¿motos y coches a la vez, o una primera edición centrada en
   **moto** y el coche en la etapa 3?
4. **Fotos**: ¿papel sin recortar (mi propuesta, más rápido) o recorte tipo
   catálogo como los coches?
5. **Rejilla**: dos columnas con el tercero a lo ancho, o tres columnas.

## 17. Mantenimiento

- **Edición anual**: revisar precios y lo descatalogado. El reportaje lleva su
  fecha a la vista.
- **Cada vídeo nuevo de herramienta** puede añadir una ficha o un enlace.
- **La etapa 3 crece sola**: cada trabajo que hagas puede añadir una pieza sin
  tocar nada más que datos.
