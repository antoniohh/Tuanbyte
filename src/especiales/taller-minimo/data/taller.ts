import type {
  ErrorTrampaRow,
  EtapaRow,
  Herramienta,
  MarcaRow,
  OrdenRow,
  ParAprieteRow,
  RutaRow,
  TallerVsCasaRow,
} from "../types";

const IMG = "/images/especiales/taller-minimo";

// Vídeos de herramienta y mantenimiento real del canal de Tuanbyte
const V_HERRAMIENTAS = {
  id: "Ovpp1por238",
  title: "Herramientas de Parkside, Workzone y Bosch",
};
const V_DESTORNILLADORES = {
  id: "OSF2KLLOB_Y",
  title: "Destornilladores, alicates, puntas y vasos de Parkside y Bosch",
};
const V_BUJIAS = {
  id: "q40eUGqUn14",
  title: "Mantenimiento y limpieza de las bujías NGK CR6HSA",
};
const V_KIT_ARRASTRE = {
  id: "wWDMRdUs2GY",
  title: "Cambio del Kit de Arrastre HONDA CB250 | Cadena, Piñón y Corona",
};
const V_ZAPATAS_FRENO = {
  id: "Xx6CxvFWn54",
  title: "Cambio de Zapatas de Freno de Tambor Trasero CB250",
};
const V_TENSAR_CADENA = {
  id: "BhODSlUcSxg",
  title: "Cómo tensar la cadena de transmisión en la CB250",
};

export const herramientas: Herramienta[] = [
  {
    id: "vasos-38",
    name: 'Juego de vasos 3/8" y carraca',
    type: "común · moto y coche",
    rank: 1,
    scoreValue: 9.6,
    img: `${IMG}/familia-vasos-38.jpg`,
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
    img: `${IMG}/familia-llaves-combinadas.jpg`,
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
    img: `${IMG}/familia-destornilladores.jpg`,
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
    img: `${IMG}/familia-llaves-allen.jpg`,
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
    img: `${IMG}/familia-alicates.jpg`,
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
    img: `${IMG}/familia-llave-bujias.jpg`,
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
    videos: [V_BUJIAS],
  },
  {
    id: "martillo-mazo",
    name: "Martillo y mazo de goma / nylon",
    type: "común · moto y coche",
    rank: 7,
    scoreValue: 7.6,
    img: `${IMG}/familia-martillo-mazo.jpg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Desclavar ejes, soltar tambores pegados, asentar juntas y dar toques firmes sin deformar.",
      },
      {
        label: "Sin ella no puedes",
        value: "Sacar un eje pasante de rueda o una tapa de cárter sellada. Con la mano o tirando no cede.",
      },
      {
        label: "Compra barata",
        value: "Bazar o Parkside: martillo de peña y mazo de nylon de doble cara — unos 10 € los dos.",
      },
      {
        label: "Compra buena",
        value: "Bellota o Stanley con mango de fibra de vidrio antichoque — unos 22 € los dos.",
      },
      {
        label: "Marcas",
        value: "Bellota, Stanley, Parkside, marcas de bazar.",
      },
      {
        label: "El error típico",
        value: "Golpear aluminio, roscas o cárteres con el martillo de acero sin protección. Marcas la pieza o rompes un nervio para siempre.",
      },
    ],
    desc: "En el taller rige una máxima: gasta en lo que mide y ahorra en lo que golpea. Un martillo de acero de bazar de 5 € sirve perfectamente para golpear un botador. Pero la verdadera joya es el mazo de doble cabeza de goma y nylon: te permite soltar tambores de freno agarrados, sacar ejes de rueda pasantes y ajustar tapas de motor sin rayar el metal ni deformar las roscas.",
    videos: [V_ZAPATAS_FRENO, V_KIT_ARRASTRE],
  },
  {
    id: "gato-caballete",
    name: "Caballete (moto) o borriquetas (coche)",
    type: "seguridad y elevación",
    rank: 8,
    scoreValue: 7.5,
    img: `${IMG}/familia-gato-caballete.jpg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Mantener el vehículo suspendido con estabilidad absoluta para trabajar en ruedas, frenos o cadena.",
      },
      {
        label: "Sin ella no puedes",
        value: "Desmontar ninguna rueda ni meterte bajo el chasis con seguridad. En moto, dejarla nivelada para medir niveles.",
      },
      {
        label: "Compra barata",
        value: "Caballete trasero moto (~25 €) o pareja de borriquetas plegables en Lidl/Aldi (~20 €).",
      },
      {
        label: "Compra buena",
        value: "Caballete Puig o Bike-Lift con ruedas de goma (~65 €); borriquetas de cremallera de 3T (~45 €).",
      },
      {
        label: "Marcas",
        value: "Parkside, Puig, Mannesmann, Michelin.",
      },
      {
        label: "El error típico",
        value: "Trabajar debajo del coche apoyado solo en el gato hidráulico. El gato levanta; la borriqueta es lo que te salva la vida.",
      },
    ],
    desc: "No se puede hacer mecánica con el vehículo en falso. En la moto, un caballete de basculante trasero (o el central si lo lleva) es imprescindible para tensar la cadena, revisar el freno trasero y cambiar el aceite con la moto recta. En el coche, la regla de oro de cualquier mecánico aficionado es no meter jamás una extremidad debajo sin antes haber apoyado el chasis sobre borriquetas de acero.",
    videos: [V_TENSAR_CADENA, V_KIT_ARRASTRE],
  },
  {
    id: "linterna-frontal",
    name: "Linterna frontal recargable",
    type: "iluminación de trabajo",
    rank: 9,
    scoreValue: 7.3,
    img: `${IMG}/familia-linterna-frontal.jpg`,
    etapa: 1,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Dirigir el haz de luz exactamente donde miras, dejando las dos manos libres para las herramientas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Ver bien en pasos de rueda oscuros, el interior del vano motor o bajo el depósito en garajes comunitarios.",
      },
      {
        label: "Compra barata",
        value: "Frontal recargable USB de Parkside o bazar — unos 8 a 12 €.",
      },
      {
        label: "Compra buena",
        value: "Petzl Tikkina o linterna de trabajo COB magnética — unos 25 a 35 €.",
      },
      {
        label: "Marcas",
        value: "Parkside, Petzl, Ledlenser, Stanley.",
      },
      {
        label: "El error típico",
        value: "Usar la linterna del móvil: se cae al suelo, se llena de grasa, tapas la luz con tu propia mano y se apaga sola.",
      },
    ],
    desc: "La mitad de los tornillos que se trasroscan o se redondean en un garaje no es por falta de fuerza, sino porque no se ve dónde encaja la punta. Una linterna frontal ligera sujeta a la cabeza ilumina exactamente lo que estás mirando, deja ambas manos libres para sostener la carraca recta y evita hacer malabares peligrosos con el móvil lleno de grasa.",
    videos: [V_HERRAMIENTAS],
  },
];

export const orden: OrdenRow[] = [
  { model: 'Juego de vasos 3/8" y carraca', tag: "winner", uso: 10, desbloqueo: 10, barata: 8, nota: 9.6 },
  { model: "Llaves combinadas 6–22 mm", tag: null, uso: 9, desbloqueo: 9, barata: 8.5, nota: 8.9 },
  { model: "Destornilladores", tag: null, uso: 9, desbloqueo: 8, barata: 9.5, nota: 8.7 },
  { model: "Llaves Allen en mm", tag: null, uso: 8, desbloqueo: 9, barata: 9, nota: 8.6 },
  { model: "Alicates", tag: null, uso: 8, desbloqueo: 8, barata: 9, nota: 8.2 },
  { model: "Llave de bujías", tag: null, uso: 7, desbloqueo: 8, barata: 9, nota: 7.8 },
  { model: "Martillo y mazo de goma / nylon", tag: null, uso: 7, desbloqueo: 7, barata: 9.5, nota: 7.6 },
  { model: "Caballete (moto) o borriquetas (coche)", tag: null, uso: 7, desbloqueo: 9, barata: 6.5, nota: 7.5 },
  { model: "Linterna frontal recargable", tag: null, uso: 8, desbloqueo: 6, barata: 9.5, nota: 7.3 },
];

export const etapas: EtapaRow[] = [
  {
    n: 1,
    title: "Con 100 € empiezas",
    lema: "Lo que hace falta para el mantenimiento de verdad.",
    presupuesto: "~100–150 €",
    href: "/especiales/taller-minimo/",
    items: [
      { label: 'Juego de vasos 3/8" y carraca', id: "vasos-38" },
      { label: "Llaves combinadas 6–22 mm", id: "llaves-combinadas" },
      { label: "Destornilladores", id: "destornilladores" },
      { label: "Llaves Allen en mm", id: "llaves-allen" },
      { label: "Alicates", id: "alicates" },
      { label: "Llave de bujías", id: "llave-bujias" },
      { label: "Martillo y mazo", id: "martillo-mazo" },
      { label: "Gato y caballete o borriquetas", id: "gato-caballete" },
      { label: "Linterna frontal", id: "linterna-frontal" },
    ],
  },
  {
    n: 2,
    title: "Cuando ya te manchas las manos",
    lema: "Mecánica avanzada: cadena, extractores, dinamométricas y frenos.",
    presupuesto: "~250–450 €",
    href: "/especiales/taller-maniobra/",
    items: [
      { label: "Herramienta de cadena y radios (moto)", id: "herramienta-cadena-radios" },
      { label: "Extractores mecánicos (garras, volante y tornillos)", id: "extractores-mecanicos" },
      { label: 'Carraca 1/2" y vasos grandes', id: "carraca-vasos-12" },
      { label: "Vasos largos y Torx / Allen de vaso", id: "vasos-largos-torx" },
      { label: "Dinamométrica grande y pequeña de precisión", id: "dinamometricas" },
      { label: "Kit de purga y sangrado de frenos", id: "purga-frenos" },
      { label: "Calibre (pie de rey) y galgas de espesores", id: "calibre-galgas" },
      { label: "Banco de trabajo, bandejas y embudos", id: "banco-tornillo-fluidos" },
    ],
  },
  {
    n: 3,
    title: "El salto moderno: a batería y diagnosis",
    lema: "Herramientas eléctricas y diagnosis electrónica del siglo XXI.",
    presupuesto: "según necesidad",
    href: "/especiales/taller-moderno/",
    items: [
      { label: 'Llave de impacto a batería 1/2" ("la de las tuercas")', id: "llave-impacto" },
      { label: "Taladro / atornillador a batería con percutor", id: "taladro-percutor" },
      { label: "Carraca eléctrica compacta a batería", id: "carraca-electrica" },
      { label: "Diagnosis OBD2 básica (Bluetooth + móvil)", id: "diagnosis-obd2-basica" },
      { label: "Diagnosis avanzada multimarca (escáner con pantalla)", id: "diagnosis-avanzada" },
      { label: "Cargador inteligente de batería y multímetro", id: "cargador-multimetro" },
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
  {
    marca: "Milwaukee",
    gama: "Profesional / Top taller",
    bueno: "La reina absoluta en llaves de impacto a batería y carracas eléctricas para automoción. Ecosistema M12 y M18 casi indestructible.",
    flojo: "Precios muy altos. Está pensada para profesionales que amortizan la máquina facturando horas a diario.",
    veredicto: "Fuera de presupuesto inicial, pero el estándar al que aspirar en herramienta a batería de automoción.",
  },
  {
    marca: "DeWalt",
    gama: "Profesional / Obra y taller",
    bueno: "Potencia bruta, motores brushless muy duros y plataforma de baterías XR de 18V extendidísima.",
    flojo: "Herramientas a menudo voluminosas y pesadas; más orientadas a construcción que a mecánica fina de moto.",
    veredicto: "Para taladrar chasis, cepillar o meter caña sin compasión, una fiera infatigable.",
  },
  {
    marca: "Makita",
    gama: "Profesional / Precisión y ergonomía",
    bueno: "Ergonomía insuperable, gatillos progresivos suaves y el ecosistema 18V LXT más grande del mundo (taller, jardín y hogar).",
    flojo: "Hay muchas falsificaciones online y gamas blancas/rojas de entrada que no tienen la calidad de la serie azul-turquesa.",
    veredicto: "El equilibrio perfecto entre tacto, durabilidad y catálogo infinito si das el salto profesional.",
  },
  {
    marca: "Metabo",
    gama: "Profesional / Especialista en metal",
    bueno: "El gran referente alemán en amoladoras angulares y tratamiento de metal. Motores Marathon térmicamente imbatibles.",
    flojo: "Difícil de encontrar en grandes superficies; servicio técnico y accesorios de precio elevado.",
    veredicto: "Si en tu proyecto hay que cortar tubo de escape, sanear chasis o desbastar óxido duro, no tienen rival.",
  },
  {
    marca: "Facom",
    gama: "Profesional / Alta automoción",
    bueno: "El clásico legendario de los talleres oficiales. Tolerancias exactas que no dañan tornillería y garantía de por vida real.",
    flojo: "Precios de concesionario: un maletín de vasos puede superar los 250 € con facilidad.",
    veredicto: "Pata negra en herramienta manual. Conocerla evita pagar gato por liebre en marcas que se dicen 'profesionales'.",
  },
];

export const rutas: RutaRow[] = [
  {
    ruta: "Ruta de 100 €",
    entra: 'Etapa 1 con herramienta del súper: vasos 3/8", llaves, destornilladores, Allen, alicates y llave de bujías.',
    llegas: "Mantenimiento completo: aceite, filtros, bujías, pastillas y ajustes básicos.",
    marcas: "Parkside y Workzone",
  },
  {
    ruta: "Ruta de 300 €",
    entra: 'Mecánica avanzada: carraca 1/2", dinamométricas, herramienta de cadena, extractores y purga de frenos.',
    llegas: "Transmisión, rodamientos, reglaje básico y circuito de frenos.",
    marcas: "Stanley, Bahco, Bosch verde",
  },
  {
    ruta: "Ruta moderna (batería y diagnosis)",
    entra: "Llave de impacto 1/2\", taladro percutor a batería, escáner diagnosis OBD2 y cargador inteligente.",
    llegas: "Trabajo rápido sin esfuerzo físico, mantenimiento electrónico de centralitas y total autonomía.",
    marcas: "Parkside Performance, Bosch, Autel / Carista",
  },
];

export const tallerVsCasa: TallerVsCasaRow[] = [
  {
    trabajo: "Cambio de aceite y filtro",
    taller: "110–160 €",
    casa: "~35 €",
    ahorro: "75–125 €",
    herramienta: 'Vasos 3/8" (17 mm), embudo y bandeja',
  },
  {
    trabajo: "Pastillas de freno delanteras",
    taller: "130–190 €",
    casa: "~28 €",
    ahorro: "100–160 €",
    herramienta: 'Carraca 3/8", vaso Allen/Torx y alicate',
  },
  {
    trabajo: "Bujías de encendido (moto/coche)",
    taller: "75–130 €",
    casa: "~24 €",
    ahorro: "50–105 €",
    herramienta: "Llave o vaso de bujías 16/21 mm con goma",
  },
  {
    trabajo: "Kit de arrastre moto (cadena + piñón + corona)",
    taller: "220–310 €",
    casa: "~95 €",
    ahorro: "125–215 €",
    herramienta: 'Vasos 3/8" y 1/2", llaves fijas y caballete',
  },
  {
    trabajo: "Sustitución de batería",
    taller: "140–210 €",
    casa: "~65 €",
    ahorro: "75–145 €",
    herramienta: "Llave combinada 10 mm y destornillador",
  },
  {
    trabajo: "Filtros de aire y habitáculo",
    taller: "65–95 €",
    casa: "~18 €",
    ahorro: "45–75 €",
    herramienta: "Destornillador plano o estrella básico",
  },
];

export const paresApriete: ParAprieteRow[] = [
  {
    operacion: "Tapón de vaciado del cárter (aceite)",
    par: "20–30 Nm",
    llave: 'Dinamométrica media 3/8" (20–100 Nm)',
    aviso: "¡Cárter de aluminio blando! Si aprietas a ojo trasroscas la rosca del cárter. Arandela de cobre nueva siempre.",
  },
  {
    operacion: "Bujías de encendido",
    par: "12–25 Nm",
    llave: 'Dinamométrica pequeña 1/4" o media 3/8"',
    aviso: "Enroscar primero a mano hasta hacer tope. Jamás entrar cruzado. En aluminio el exceso parte la rosca.",
  },
  {
    operacion: "Tornillos de pinza de freno al soporte",
    par: "30–50 Nm",
    llave: 'Dinamométrica media 3/8" (20–100 Nm)',
    aviso: "Punto crítico de seguridad vial. Limpiar rosca vieja y aplicar fijador de roscas medio (azul).",
  },
  {
    operacion: "Tuercas de rueda (coche)",
    par: "110–130 Nm",
    llave: 'Dinamométrica grande 1/2" (40–210 Nm)',
    aviso: "Apretar en estrella/cruz con la rueda apoyada en el suelo pero sin todo el peso del coche encima.",
  },
  {
    operacion: "Eje de rueda trasera (moto)",
    par: "85–100 Nm",
    llave: 'Dinamométrica grande 1/2" (40–210 Nm)',
    aviso: "Mantener alineados los tensores de basculante a ambos lados antes de dar el par final y asegurar el pasador.",
  },
  {
    operacion: "Tapa de balancines / cárteres pequeños",
    par: "8–12 Nm",
    llave: 'Dinamométrica pequeña 1/4" (5–25 Nm)',
    aviso: "Pares muy bajos: con una carraca grande se parten los tornillos de M6 como si fueran mantequilla. Apretar en cruz.",
  },
];

export const erroresTrampas: ErrorTrampaRow[] = [
  {
    error: "El maletín de 200 piezas de bazar por 29 €",
    porQuePasa: "El reclamo de tener 'de todo' por dos duros para empezar.",
    consecuencia: "Puntas de acero blando que se desintegran al tercer apriete, carracas que saltan dientes y vasos holgados que redondean tuercas.",
    solucion: "Compra un juego compacto de marca fiable (Parkside, Stanley, Bahco) centrado únicamente en medidas reales de 8 a 19 mm.",
  },
  {
    error: "Usar la llave inglesa para tuercas rebeldes",
    porQuePasa: "Comodidad de no buscar la medida fija o no tener el vaso adecuado.",
    consecuencia: "La mordaza ajustable flexa inevitablemente bajo par alto y redondea las esquinas de la tuerca dejándola inservible.",
    solucion: "Usa siempre llave combinada de estrella o vaso de 6 caras de la medida milimétrica exacta.",
  },
  {
    error: "Vasos de 12 caras (bihexagonales) en tornillos agarrotados",
    porQuePasa: "Entran más fácil en sitios estrechos porque encajan en más ángulos.",
    consecuencia: "Hacen contacto solo en el vértice de la arista. Con tuercas oxidadas o muy apretadas, saltan y desbocan la cabeza.",
    solucion: "Vasos de 6 caras (hexagonales) para aflojar y apretar con fuerza: transmiten el par por las caras planas.",
  },
  {
    error: "Guardar la dinamométrica con el muelle comprimido",
    porQuePasa: "Terminar la faena de noche y guardarla en la caja tal cual se ha usado a 100 Nm.",
    consecuencia: "El resorte interno pierde elasticidad por fatiga y la herramienta queda descalibrada, apretando de más o de menos.",
    solucion: "Regla sagrada de taller: tras cada uso, devolver la escala al cero o valor mínimo antes de cerrar el estuche.",
  },
  {
    error: "Meter un tubo alargador al mango de la carraca",
    porQuePasa: "Un tornillo de eje o basculante que no afloja con la fuerza del brazo.",
    consecuencia: "Revienta los dientes del trinquete de la carraca o dobla el eje del mecanismo.",
    solucion: "Para hacer fuerza bruta usa una barra fija articulada (maneral de fuerza). La carraca es para avanzar rápido, no para partir tuercas.",
  },
];
