import type { EtapaRow, Herramienta, MarcaRow, OrdenRow, RutaRow } from "../types";

const IMG = "/images/especiales/taller-minimo";

// Los tres vídeos de herramienta del canal, que son la base de las familias
// básicas.
const V_HERRAMIENTAS = {
  id: "Ovpp1por238",
  title: "Herramientas de Parkside, Workzone y Bosch",
};
const V_DESTORNILLADORES = {
  id: "OSF2KLLOB_Y",
  title: "Destornilladores, alicates, puntas y vasos de Parkside y Bosch",
};

export const herramientas: Herramienta[] = [
  {
    id: "vasos-38",
    name: 'Juego de vasos 3/8" y carraca',
    type: "común · moto y coche",
    rank: 1,
    scoreValue: 9.6,
    img: `${IMG}/familia-vasos-38.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Aflojar y apretar casi todo: tapas, cárteres, soportes, ruedas pequeñas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Abrir nada que esté apretado de verdad. Es lo que se coge el 80 % del tiempo.",
      },
      {
        label: "Compra barata",
        value: 'Parkside (Lidl) o Workzone (Aldi), 3/8", 6 puntas — unos 25 €.',
      },
      {
        label: "Compra buena",
        value: 'Bahco o Stanley, 3/8", 6 puntas — unos 60 €.',
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Stanley, Bahco, Bosch.",
      },
      {
        label: "El error típico",
        value: "Comprar vasos de 12 puntas, o un juego de 200 piezas con medidas que no vas a usar. Y quedarse sin extensiones.",
      },
    ],
    desc: 'El 3/8" es el tamaño que lo hace casi todo: ni tan pequeño que no apriete, ni tan grande que no entre. Y las 6 puntas importan más de lo que parece: agarran la tuerca por la cara, no por la esquina, así que no la redondean cuando está dura. Un juego de 8 a 19 mm con carraca, dos extensiones y una junta universal cubre el 80 % del trabajo de una moto o un coche. Si solo vas a comprar una cosa, compra esta.',
    videos: [V_HERRAMIENTAS, V_DESTORNILLADORES],
  },
  {
    id: "llaves-combinadas",
    name: "Llaves combinadas 6–22 mm",
    type: "común · moto y coche",
    rank: 2,
    scoreValue: 8.9,
    img: `${IMG}/familia-llaves-combinadas.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Tuercas y tornillos donde la carraca no cabe, y para sujetar la otra punta.",
      },
      {
        label: "Sin ella no puedes",
        value: "Sujetar la tuerca mientras giras el tornillo. Con una sola mano, no hay forma.",
      },
      {
        label: "Compra barata",
        value: "Workzone o Parkside, juego de 8 a 19 mm — unos 20 €.",
      },
      {
        label: "Compra buena",
        value: "Bahco, 6 a 22 mm — unos 50 €.",
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Bellota, Palmera, Bahco.",
      },
      {
        label: "El error típico",
        value: "Comprar solo la llave inglesa: redondea las tuercas. Y saltarse medidas: hacen falta de 8 a 19 mm como mínimo.",
      },
    ],
    desc: "La punta de estrella suelta la tuerca y la boca abierta sujeta la otra parte. Se compran en juego y hay que tener todas las medidas, porque a la que falta una, el trabajo se para. Son baratas, duran toda la vida y son la segunda cosa que más se coge después de la carraca.",
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "destornilladores",
    name: "Destornilladores",
    type: "común · moto y coche",
    rank: 3,
    scoreValue: 8.7,
    img: `${IMG}/familia-destornilladores.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Tapas, plásticos, carenados, filtros de aire y abrazaderas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Quitar un carenado o una tapa sin romper nada. Es lo primero que se hace en cualquier trabajo.",
      },
      {
        label: "Compra barata",
        value: "Parkside, juego de 6 — unos 10 €.",
      },
      {
        label: "Compra buena",
        value: "Wera o Wiha — unos 35 € el juego.",
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Stanley, Wera, Wiha.",
      },
      {
        label: "El error típico",
        value: "Usar el destornillador equivocado: una estrella Phillips en un tornillo Pozidriv (o JIS, en motos japonesas) destroza la cabeza.",
      },
    ],
    desc: "Parecen lo más simple del taller y son donde más tornillos se destrozan. Hay tres tipos de estrella que se parecen y no son iguales —Phillips, Pozidriv y JIS— y usar el que no toca es la forma más fácil de cargarse una cabeza. Con un juego de plano y estrella de dos o tres tamaños se hace el 90 % del trabajo.",
    videos: [V_DESTORNILLADORES, V_HERRAMIENTAS],
  },
  {
    id: "llaves-allen",
    name: "Llaves Allen en mm",
    type: "común · moto y coche",
    rank: 4,
    scoreValue: 8.6,
    img: `${IMG}/familia-llaves-allen.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Tornillos de cabeza hexagonal: soportes, manetas, pinzas y media moto.",
      },
      {
        label: "Sin ella no puedes",
        value: "Soltar la mayoría de los tornillos de una moto. En el coche, aparecen en muchas tapas y sensores.",
      },
      {
        label: "Compra barata",
        value: "Parkside o Workzone, juego en mm de 1,5 a 10 — unos 8 €.",
      },
      {
        label: "Compra buena",
        value: "Wera, con punta de bola — unos 25 €.",
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Wera, Bahco.",
      },
      {
        label: "El error típico",
        value: "Comprar el juego en pulgadas. En moto y coche europeos casi todo es milimétrico, y una llave que baila redondea el tornillo.",
      },
    ],
    desc: "En una moto hay más tornillos Allen que de cualquier otro tipo, así que es de las primeras cosas que se compran. El juego tiene que ser en milímetros y con todas las medidas seguidas: 1,5 · 2 · 2,5 · 3 · 4 · 5 · 6 · 8 · 10. Los de punta de bola valen un poco más y llegan a los tornillos torcidos, que en el taller son la mitad.",
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "alicates",
    name: "Alicates",
    type: "común · moto y coche",
    rank: 5,
    scoreValue: 8.2,
    img: `${IMG}/familia-alicates.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Sujetar, cortar, doblar y tirar de lo que no se agarra con la mano.",
      },
      {
        label: "Sin ella no puedes",
        value: "Quitar un pasador, cortar un alambre o sujetar un manguito.",
      },
      {
        label: "Compra barata",
        value: "Workzone, juego de 3 (universal, punta y corte) — unos 12 €.",
      },
      {
        label: "Compra buena",
        value: "Knipex — unos 30 € cada uno.",
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Stanley, Knipex.",
      },
      {
        label: "El error típico",
        value: "Cortar acero con el alicate universal: se mella. Para cortar, el de corte; para sujetar, el universal.",
      },
    ],
    desc: "Tres hacen todo: el universal para agarrar y tirar, el de punta larga para lo que está metido en un hueco, y el de corte para alambre y bridas. Es una familia donde el salto de calidad se nota de verdad: un alicate bueno corta sin mellar y dura años, y uno malo te deja el filo el primer día.",
    videos: [V_DESTORNILLADORES, V_HERRAMIENTAS],
  },
  {
    id: "llave-bujias",
    name: "Llave de bujías",
    type: "común · moto y coche",
    rank: 6,
    scoreValue: 7.8,
    img: `${IMG}/familia-llave-bujias.svg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Cambiar las bujías, que es el mantenimiento más fácil y el que más se nota.",
      },
      {
        label: "Sin ella no puedes",
        value: "Sacar una bujía: está metida en un hueco y una llave normal no llega ni la sujeta.",
      },
      {
        label: "Compra barata",
        value: "Parkside, vaso de bujías de 16 y 21 mm — unos 8 €.",
      },
      {
        label: "Compra buena",
        value: "Bahco, con junta de goma — unos 15 €.",
      },
      {
        label: "Marcas",
        value: "Parkside, Workzone, Bahco.",
      },
      {
        label: "El error típico",
        value: "Apretarla a lo bruto. La bujía lleva su par: se aprieta a mano y se da un cuarto de vuelta. Y la junta de goma importa, para que no se caiga dentro.",
      },
    ],
    desc: "Es la herramienta más barata del taller y la que más veces se usa, porque la bujía es lo primero que se revisa cuando algo no arranca bien o gasta de más. Necesita dos medidas (16 y 21 mm) porque no todas las motos y coches usan la misma, y conviene que lleve junta de goma para que la bujía no se caiga dentro del hueco.",
    videos: [
      { id: "q40eUGqUn14", title: "Mantenimiento y limpieza de las bujías NGK CR6HSA" },
    ],
  },
];

export const orden: OrdenRow[] = [
  { model: 'Juego de vasos 3/8" y carraca', tag: "winner", uso: 10, desbloqueo: 10, barata: 8, nota: 9.6 },
  { model: "Llaves combinadas 6–22 mm", tag: null, uso: 9, desbloqueo: 9, barata: 8.5, nota: 8.9 },
  { model: "Destornilladores", tag: null, uso: 9, desbloqueo: 8, barata: 9.5, nota: 8.7 },
  { model: "Llaves Allen en mm", tag: null, uso: 8, desbloqueo: 9, barata: 9, nota: 8.6 },
  { model: "Alicates", tag: null, uso: 8, desbloqueo: 8, barata: 9, nota: 8.2 },
  { model: "Llave de bujías", tag: null, uso: 7, desbloqueo: 8, barata: 9, nota: 7.8 },
];

export const etapas: EtapaRow[] = [
  {
    n: 1,
    title: "Con 100 € empiezas",
    lema: "Lo que hace falta para el mantenimiento de verdad.",
    presupuesto: "~100–150 €",
    items: [
      { label: 'Juego de vasos 3/8" y carraca', id: "vasos-38" },
      { label: "Llaves combinadas 6–22 mm", id: "llaves-combinadas" },
      { label: "Destornilladores", id: "destornilladores" },
      { label: "Llaves Allen en mm", id: "llaves-allen" },
      { label: "Alicates", id: "alicates" },
      { label: "Llave de bujías", id: "llave-bujias" },
      { label: "Martillo y mazo" },
      { label: "Gato y caballete o borriquetas" },
      { label: "Linterna frontal" },
    ],
  },
  {
    n: 2,
    title: "Cuando ya te manchas las manos",
    lema: "Frenos, rodamientos, motor y electricidad.",
    presupuesto: "~300–600 €",
    items: [
      { label: 'Carraca 1/2" y vasos grandes' },
      { label: "Vasos largos y Torx" },
      { label: "Dinamométrica grande y pequeña" },
      { label: "Extractores de tornillos pasados" },
      { label: "Purga de frenos" },
      { label: "Multímetro" },
      { label: "Calibre y galgas" },
      { label: "Banco de trabajo" },
      { label: "Bandejas y embudos" },
    ],
  },
  {
    n: 3,
    title: "Cuando el trabajo lo pide",
    lema: "Lo específico de tu moto o tu coche, y las máquinas.",
    presupuesto: "lo que pida el trabajo",
    items: [
      { label: "Herramienta de cadena y radios (moto)" },
      { label: "Extractor de volante y bloqueadores (moto)" },
      { label: "Extractores de rótulas y silentblocks (coche)" },
      { label: "Llaves de tubo de freno y dobladora (coche)" },
      { label: "Diagnóstico OBD2 (coche)" },
      { label: "Taladro, amoladora y compresor" },
    ],
  },
];

export const marcas: MarcaRow[] = [
  {
    marca: "Parkside (Lidl)",
    gama: "Marca del súper",
    bueno: "Precio imbatible y surtido enorme. En llaves, vasos y alicates de andar por casa sale muy bien.",
    flojo: "Cambia de fabricante por lotes y la garantía es un ticket, no una marca.",
    veredicto: "Para empezar, sí. Para lo que gira y mide, mira otra cosa.",
  },
  {
    marca: "Workzone (Aldi)",
    gama: "Marca del súper",
    bueno: "Misma idea que Parkside y muchas veces con acabados algo más cuidados.",
    flojo: "Surtido más corto y aparecen y desaparecen por temporadas.",
    veredicto: "Igual de válida para arrancar. Compra cuando la veas.",
  },
  {
    marca: "Bosch verde",
    gama: "Ferretería de marca",
    bueno: "Se encuentra en cualquier sitio y hay recambio y accesorios.",
    flojo: "Es la gama de aficionado, no el Bosch que se usa en un taller.",
    veredicto: "Bien para el día a día.",
  },
  {
    marca: "Bosch azul",
    gama: "El salto bueno",
    bueno: "Herramienta profesional de verdad, con garantía seria.",
    flojo: "Precio de profesional y surtido pensado para oficio.",
    veredicto: "Si algo lo vas a usar toda la vida, aquí.",
  },
  {
    marca: "Einhell",
    gama: "Ferretería de marca",
    bueno: "Muy buena relación en máquinas (taladros, amoladoras) y una batería para todo.",
    flojo: "En herramienta manual no aporta nada especial.",
    veredicto: "Para las máquinas, merece un vistazo.",
  },
  {
    marca: "Stanley",
    gama: "Ferretería de marca",
    bueno: "Clásico fiable en herramienta manual; los vasos y las llaves salen bien.",
    flojo: "Hay gamas muy distintas bajo la misma marca.",
    veredicto: "Acierto seguro si miras la gama concreta.",
  },
  {
    marca: "Bahco",
    gama: "El salto bueno",
    bueno: "Llaves, vasos y dinamométricas que duran toda una vida.",
    flojo: "Precio por pieza alto.",
    veredicto: "Compra una vez y olvídate.",
  },
  {
    marca: "Knipex",
    gama: "El salto bueno",
    bueno: "Los mejores alicates que se pueden comprar.",
    flojo: "Solo hace alicates y herramienta de corte; precio alto.",
    veredicto: "En alicates, el final del camino.",
  },
];

export const rutas: RutaRow[] = [
  {
    ruta: "Ruta de 100 €",
    entra: 'Etapa 1 con herramienta del súper: vasos 3/8", llaves, destornilladores, Allen, alicates y llave de bujías.',
    llegas: "Mantenimiento completo: aceite, filtros, bujías, pastillas y ajustes.",
    marcas: "Parkside y Workzone",
  },
  {
    ruta: "Ruta de 300 €",
    entra: "Lo anterior con marca de ferretería en lo que gira y mide, más carraca 1/2\", dinamométrica y multímetro.",
    llegas: "Frenos, rodamientos y electricidad.",
    marcas: "Stanley, Bahco, Bosch verde",
  },
  {
    ruta: "Ruta de 600 €",
    entra: "Todo lo anterior más lo específico de tu moto o tu coche y las máquinas.",
    llegas: "Reparaciones mayores, sin depender de nadie.",
    marcas: "Bahco, Knipex, Einhell",
  },
];
