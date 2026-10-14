# Plan: especial «El taller mínimo viable»

**Qué comprar para empezar a hacerle el mantenimiento a tu moto o tu coche en
casa, en qué orden y de qué marca.**

Tercer especial del catálogo. Va dirigido a **quien no es mecánico**: alguien con
otro oficio —administrativo, médico, lo que sea— al que le gusta meter mano el
fin de semana, tiene unos 100 € para empezar y compra en el Lidl, el Aldi o la
ferretería del barrio. No sabe si la Parkside le vale o se está equivocando.

Estado: **plan v3, sin construir**. Decisiones del 2026-10-15 incorporadas.

---

## 1. La promesa (y para quién)

> **No es un «top 10 de herramientas». Es el orden en que se compran.**

El reportaje tiene que poder responderse con una frase: *si empiezas hoy, compra
esto; cuando ya lo hayas usado, esto otro; esto solo cuando te toque desmontar
media moto.* Y siempre con el nombre y el precio de la marca que se encuentra en
la estantería, no de la que sale en las revistas.

**Para quién es.** Para quien no es mecánico y no pretende serlo: alguien con
otro oficio al que le gusta el trasteo como afición. Cada vez hay más gente así,
y el motivo es sencillo: lo que cuesta en un taller o un concesionario algo que
se hace en una tarde. Este reportaje no forma mecánicos: **quita el miedo** a
abrir el capó o a levantar la tapa del motor, y dice exactamente qué hay que
comprar para no romper nada.

**La idea que lo sostiene todo: la herramienta se paga sola.** Un cambio de
aceite y unas pastillas y la etapa 1 ya está amortizada. Por eso el dossier trae
la cuenta hecha: *lo que cobra el taller, lo que te cuesta en casa, lo que te
ahorras y con qué herramienta*.

### Cómo se escribe (reglas del reportaje)

1. **Nada de códigos ni de normas.** Si hay que explicar algo técnico, se explica
   con una frase: «6 puntas agarra mejor que 12».
2. **Cada herramienta se explica por lo que resuelve**, no por lo que es.
3. **Se dice también cuándo NO hay que comprar algo.** La mitad de la utilidad
   está en evitar el gasto inútil.
4. **No se ataca a los talleres.** El reportaje va de hacerlo tú, no de que los
   demás lo hagan mal. Ni una frase contra un profesional: se habla de precios y
   de autonomía, nunca de engaños.

## 2. Las dos reglas del taller

Van escritas en el reportaje y ordenan todo lo demás:

> **1. Gasta en lo que gira y mide; ahorra en lo que sujeta y golpea.**
> La dinamométrica, los vasos y los alicates de corte, buenos. El martillo, el
> mazo, las bandejas y los embudos, del bazar.

> **2. Si te hace falta dos veces, cómprala.**
> Nadie necesita 40 herramientas para cambiar el aceite. La lista dice cuáles
> hacen falta **casi siempre**, y todo lo demás se compra cuando el trabajo lo
> pide.

## 3. Qué cambia respecto a los primeros borradores

El v1 era el taller de un profesional: marcas de 200 € la pieza, normas DIN e
ISO, y soldadura MIG/TIG. El v2 se quedó corto en dos cosas que sí hacen falta.
El v3 queda así:

| Se va | Entra |
|---|---|
| Marcas pro (Gedore, Hazet, Snap-on…) como aspiración | **Parkside, Workzone, Bosch verde, Einhell, Stanley** como lo normal |
| «De paso / batalla / por vida» | **Bazar y súper / ferretería de marca / el salto bueno** |
| Normas DIN, ISO, CrV, CrMo como argumento de venta | Explicado en cristiano |
| 4 etapas y 40 fichas | **3 etapas y ~28 fichas** |
| Soldadura MIG/TIG | Fuera: es de profesional |

Y dos cosas que **vuelven** porque son la razón de ser del especial:

- **Los pares de apriete.** Si hay dinamométricas, hay que decir qué aprieta
  cada cosa. Es la diferencia entre hacerlo bien y pasar de apretar.
- **Las tres dinamométricas del taller** (pequeña, media y grande): se cuentan
  con foto y vídeo propios, porque su rango es justo lo que explica la tabla de
  pares.

## 4. Qué se conserva del sistema

Se reutiliza **todo** el sistema de reportaje. Coste de código: un componente
nuevo y tres retoques mínimos.

| Pieza | Estado | Por qué |
|---|---|---|
| `Portada`, `Veredicto`, `Migas`, `Ranking`, `Fichas`, `TablaTecnica` | **Tal cual** | El ranking admite criterios configurables y las fichas, cualquier dato. |
| `Etapas.astro` | **Nueva** (una sola) | La ruta 1→2→3 es la espina dorsal y no existe hoy. |
| `Fichas.astro` → campo `videos` | **Retoque** | Cada ficha enlaza sus vídeos de Tuanbyte. Opcional en los otros reportajes. |
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
   ficha, con su vídeo.
7. **Dossier** — seis tablas y el glosario (§11).

## 6. La ruta: tres etapas

| Etapa | Título | Qué resuelve | Presupuesto |
|---|---|---|---|
| **1** | *Con 100 € empiezas* | Aceite, filtros, bujías, pastillas, ajustes básicos. No quedarte tirado. | **~100–150 €** |
| **2** | *Cuando ya te manchas las manos* | Frenos, rodamientos, motor, electricidad. | **~300–600 €** |
| **3** | *Cuando el trabajo lo pide* | Lo específico de tu moto o tu coche, y las máquinas (taladro, amoladora, compresor). | Lo que pida el trabajo |

**Motos y coches a la vez**, de lo más básico a lo más específico: eso es el
orden del reportaje y el de cada etapa. Cada una lleva su **foto de familia**
(plano cenital) para que se lea como una estantería que se va llenando.

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

> **Las tres dinamométricas** (pequeña, media y grande) son las que ya hay en el
> taller. Se cuentan con foto y vídeo propios, y su rango es lo que justifica la
> tabla de pares de apriete: por qué no basta con una.

## 8. Las marcas: el corazón del reportaje

Son las que ya has probado con tus manos, y se quedan tal cual.

### Las tres gamas accesibles

| Gama | Quién está aquí | Qué esperar |
|---|---|---|
| **Bazar y marca del súper** | Parkside (Lidl), Workzone (Aldi), marcas de bazar | Sorprendentemente bien en llaves, vasos y alicates de andar por casa. Flojas donde algo **mide** o **gira mucho**. |
| **Súper y ferretería de marca** | Bosch verde, Einhell, Stanley, Black+Decker, Mannesmann, Workpro, Bellota, Palmera, Irazola | El punto dulce para casi todo. De 20 a 60 € por pieza. |
| **El salto bueno** (sin irte a profesional) | Bahco, Knipex (alicates), Wera y Wiha (puntas), Irwin, Bosch azul | Se compra **una vez** en lo que gira y mide. De 25 a 70 € por pieza. |

### Tres cosas que hay que decir y casi nadie dice

- **Bosch verde y Bosch azul son dos mundos.** Misma marca, distinta fábrica,
  distinto precio y distinta garantía. Se explica en dos líneas.
- **Parkside cambia de fabricante por lotes.** El juego de vasos de 2022 no es
  el de 2025. Aviso explícito: *lo que hoy sale bueno puede no salir igual
  mañana*, y por eso se juzga **por familia**, no por marca.
- **Ninguna marca es buena en todo.** Knipex manda en alicates y no hace
  dinamométricas. Se juzga familia a familia.

Aviso en la portada: **sin patrocinio y sin enlaces de afiliación.**

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
  img: string;                        // foto propia o de catálogo oficial
  etapa: Etapa;
  alcance: Alcance;
  specs: { label: string; value: string }[];
  desc: string;
  videos: { id: string; title: string }[];   // al menos uno, de Tuanbyte
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

## 11. Dossier: seis tablas y un glosario

1. **Las marcas, una a una** — Parkside, Workzone, Bosch verde, Bosch azul,
   Einhell, Stanley, Black+Decker, Mannesmann, Workpro, Bellota/Palmera, Bahco,
   Knipex. Columnas: *gama · lo bueno · lo flojo · veredicto*.
2. **Los tres presupuestos** — ~100 €, ~300 € y ~600 €, con lo que entra en cada
   uno, pieza y precio.
3. **Taller vs casa** — lo que cobra el taller, lo que te cuesta, **lo que te
   ahorras** y con qué herramienta se hace. La tabla que engancha a este
   público.
4. **Pares de apriete** — ruedas, bujías, tapón de cárter, culata, filtros…
   **Los valores salen de los manuales del taller, no de la memoria**, y la
   tabla lleva su aviso: *orientativo, consulta el manual de tu modelo*. Aquí se
   presentan también **las tres dinamométricas** y por qué cada rango.
5. **Moto vs coche** — qué añade cada uno y qué es común.
6. **Errores y trampas** — el juego de 1.000 piezas, la dinamométrica de 12 €,
   los vasos de 12 puntas en tuercas agarrotadas, la llave inglesa en tuercas
   grandes, el tubo alargador, guardar la dinamométrica tensada.

Y al final, un **glosario** plegable (`<details>`, sin tabla): vaso, carraca,
cuadro, poligonal, Torx, Allen, Nm.

## 12. Fotos: tres fuentes

El reportaje se ilustra con lo que hay, por este orden de preferencia:

1. **Foto propia** (lo mejor): fondo papel o kraft claro, el mismo para todo el
   reportaje, cenital para las familias y tres cuartos para las máquinas, luz
   difusa (ventana + un folio de difusor), cuadrado a ~800×800.
2. **Catálogo oficial** del fabricante: la foto limpia del producto, ideal para
   las familias que no tengas a mano.
3. **Fotograma de tus vídeos**: para las imágenes **de uso** (la herramienta
   trabajando), no como foto principal.

Rutas: `/images/especiales/taller-minimo/`, nombres `familia-<slug>.jpg`,
`etapa-<n>.jpg`. En total, **28 fotos de familia + 3 de etapa + la de portada**.

## 13. Vídeos: uno de Tuanbyte en cada familia

**Regla del reportaje: ninguna ficha se queda sin vídeo.** En cada familia que
hayas contado en un vídeo o que uses en una reparación, se enlaza el vídeo de
Tuanbyte dentro de la ficha abierta («verlo en el taller ↗»).

- Si hay **vídeo de la herramienta**, ese va primero.
- Si no, va el **vídeo de reparación donde la usas** — que además es más útil:
  enseña para qué sirve de verdad.
- Lista **manual**, elegida a mano. Aquí es donde brillan tus comparativas de
  marcas.
- **Paso previo (F0)**: montar el **mapa de vídeos** (familia → vídeo/s), con lo
  que ya tienes publicado. Lo propongo yo a partir de tu lista de vídeos y tú lo
  corriges.

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
| **F0 · Mapa de vídeos** | Tabla familia → vídeo(s) de Tuanbyte. | Se propone desde los vídeos publicados y se corrige a mano. |
| **F1 · Esqueleto** | `types.ts`, datos con **6 fichas reales**, página, `Etapas.astro`, `videos` en `Fichas.astro`, `Tag` a `shared/`, tarjeta y sitemap. Build verde. | Valida el formato **antes** de escribir 28 fichas. |
| **F2 · Fichas** | Las ~28 con sus seis specs y su descripción. | Por etapas: 1, 2, 3. |
| **F3 · Imágenes** | Foto propia (o de catálogo) de las 28 familias, las 3 etapas y la portada; fotogramas de uso. | El único trabajo que no se hace en el ordenador. |
| **F4 · Orden y veredicto** | Puntuación, ranking cerrado y veredicto con sus cuatro motivos. | Aquí se decide «la primera». |
| **F5 · Dossier** | Las seis tablas y el glosario. | Los pares, con manual en mano. |
| **F6 · Vídeos** | Enlazado definitivo, ficha a ficha. | Aquí entran tus comparativas. |
| **F7 · Remate** | SEO, OG, JSON-LD, móvil, detector, publicación y tag **v1.5.0**. | Mismo protocolo que los otros dos. |

## 16. Decisiones abiertas

1. **La ganadora del veredicto**: propongo el **juego de vasos 3/8" con
   carraca** (lo que más desbloquea). Alternativa: la **dinamométrica**, que
   encarna la primera regla.
2. **Rejilla de especiales**: dos columnas con el tercero a lo ancho, o tres
   columnas.

## 17. Mantenimiento

- **Edición anual**: revisar precios y lo descatalogado. El reportaje lleva su
  fecha a la vista.
- **Cada vídeo nuevo de herramienta** puede añadir una ficha o un enlace.
- **La etapa 3 crece sola**: cada trabajo que hagas puede añadir una pieza sin
  tocar nada más que datos.
