import type {
  ErrorTrampaRow,
  EtapaRow,
  Herramienta,
  MarcaRow,
  OrdenRow,
  ParAprieteRow,
  RutaRow,
  TallerVsCasaRow,
} from "../../taller-minimo/types";

const IMG = "/images/especiales/taller-maniobra";

const V_HERRAMIENTAS = {
  id: "Ovpp1por238",
  title: "Herramientas de Parkside, Workzone y Bosch",
};
const V_DESTORNILLADORES = {
  id: "OSF2KLLOB_Y",
  title: "Destornilladores, alicates, puntas y vasos de Parkside y Bosch",
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
    id: "carraca-vasos-12",
    name: 'Carraca 1/2" y vasos grandes (13–32 mm)',
    type: "común · moto y coche",
    rank: 1,
    scoreValue: 9.5,
    img: `${IMG}/familia-carraca-vasos-12.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Tuercas de rueda, ejes de basculante, tuercas de embrague/buje y tornillos agarrotados.",
      },
      {
        label: "Sin ella no puedes",
        value: "Soltar ejes que van apretados a más de 90 Nm o aflojar ruedas sin doblar herramientas pequeñas.",
      },
      {
        label: "Compra barata",
        value: 'Parkside (Lidl) o Mannesmann juego 1/2" con vasos 13–32 mm — unos 35–45 €.',
      },
      {
        label: "Compra buena",
        value: 'Bahco o Stanley FatMax 1/2" 6 caras de acero cromo-vanadio — unos 80–110 €.',
      },
      {
        label: "Marcas",
        value: "Bahco, Stanley, Mannesmann, Parkside, Facom.",
      },
      {
        label: "El error típico",
        value: "Intentar soltar tuercas de 24 o 27 mm con reductores en una carraca de 3/8\". Revientas el cuadradillo.",
      },
    ],
    desc: 'El cuadradillo de 1/2" (12,7 mm) no es solo un vaso más grande: es una palanca el doble de larga y un eje de acero templado capaz de soportar hasta 350 Nm de par. Cuando una tuerca de eje trasero o un tornillo de pinza lleva 10 años sin moverse, la carraca de 3/8" flexa y la de 1/4" se parte. La de 1/2" con vasos de 6 caras de 17, 19, 22, 24, 27 y 32 mm es la reina indiscutible cuando el trabajo se pone duro.',
    videos: [V_KIT_ARRASTRE, V_HERRAMIENTAS],
  },
  {
    id: "herramienta-cadena-radios",
    name: "Herramienta de cadena y llave de radios",
    type: "moto · transmisión y ruedas",
    rank: 2,
    scoreValue: 9.1,
    img: `${IMG}/familia-herramienta-cadena-radios.jpg`,
    etapa: 2,
    alcance: "moto",
    specs: [
      {
        label: "Para qué",
        value: "Cortar cadenas viejas, cerrar eslabones de remache hueco/macizo y centrar radios flojos.",
      },
      {
        label: "Sin ella no puedes",
        value: "Cambiar el kit de arrastre tú mismo sin ir al taller ni dejar un eslabón suelto con riesgo de rotura.",
      },
      {
        label: "Compra barata",
        value: "Tronchacadenas y remachador universal tipo DID en maletín rojo — unos 25–35 €.",
      },
      {
        label: "Compra buena",
        value: "Whale, Motion Pro o herramientas reforzadas de acero Cr-Mo templado — unos 75–120 €.",
      },
      {
        label: "Marcas",
        value: "Motion Pro, DID, Oxford, Buzzetti, genéricas reforzadas.",
      },
      {
        label: "El error típico",
        value: "Intentar remachar sin limar primero la cabeza del pasador con una radial o lima, doblando el punzón extractor.",
      },
    ],
    desc: 'Un kit de arrastre nuevo en taller cuesta entre 200 y 320 €. En casa compras cadena, piñón y corona por 85 € y con un remachador de cadena lo dejas cerrado a especificación de fábrica. La llave de radios micrométrica o multillave completa la rueda: comprueba el "tintineo" metálico de los radios y corrige alabeos leves antes de pasar la ITV o tras un bache fuerte.',
    videos: [V_KIT_ARRASTRE, V_TENSAR_CADENA],
  },
  {
    id: "dinamometricas",
    name: "Dinamométrica grande (40–210 Nm) y pequeña (5–25 Nm)",
    type: "común · apriete crítico",
    rank: 3,
    scoreValue: 8.9,
    img: `${IMG}/familia-dinamometricas.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Apretar con el par exacto del manual: desde tapas finas de 8 Nm hasta ruedas y ejes a 110 Nm.",
      },
      {
        label: "Sin ella no puedes",
        value: "Saber si un tornillo en bloque de aluminio se va a aflojar en carretera o va a reventar la rosca interna.",
      },
      {
        label: "Compra barata",
        value: "Mannesmann o Parkside con escala grabada y certificado de calibración (±4 %) — unos 28–38 €/ud.",
      },
      {
        label: "Compra buena",
        value: "Bahco, Norbar o Wera con mecanismo de microajuste y ±3 % real — unos 95–160 €/ud.",
      },
      {
        label: "Marcas",
        value: "Bahco, Norbar, Mannesmann, Wera, Stanley.",
      },
      {
        label: "El error típico",
        value: "Pretender que una sola llave cubra todo de 10 a 200 Nm (no existe) y guardarlas tensadas tras usarlas.",
      },
    ],
    desc: 'No existe una llave dinamométrica que sirva para todo: las escalas mecánicas solo son fiables entre el 20 % y el 100 % de su rango útil. Por eso el aficionado serio tiene dos: una pequeña de 1/4" (5–25 Nm) para bujías, tapas de cárter y tornillería de M6; y una grande de 1/2" (40–210 Nm) para tuercas de rueda, corona y ejes de basculante. Amortizan su coste en el primer tapón de cárter que evitas trasroscar.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "extractores-mecanicos",
    name: "Extractores mecánicos (garras, volante y tornillos)",
    type: "común · rescate y desmontaje",
    rank: 4,
    scoreValue: 8.7,
    img: `${IMG}/familia-extractores-mecanicos.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Extraer poleas, rodamientos, volante magnético de stator y sacar tornillos partidos a ras.",
      },
      {
        label: "Sin ella no puedes",
        value: "Abrir cárteres con encendido magnético cónico o desmontar un rodamiento sin marcar el alojamiento.",
      },
      {
        label: "Compra barata",
        value: "Extractor de 3 garras reversible (75/100 mm) + extractor M27x1.0 + juego machos a izquierdas — unos 30 €.",
      },
      {
        label: "Compra buena",
        value: "Kukko o Gedore en garras de acero forjado; extractores cónicos Irwin/BGS — unos 70–120 €.",
      },
      {
        label: "Marcas",
        value: "BGS technic, Kukko, Buzzetti, Irwin, Mannesmann.",
      },
      {
        label: "El error típico",
        value: "Hacer palanca con destornilladores planos detrás del volante magnético o rodamiento: doblas el eje y rajas el aluminio.",
      },
    ],
    desc: 'Los extractores son las herramientas de rescate que convierten una pesadilla en una operación limpia de 10 minutos. El extractor de 2 o 3 garras tira de poleas y piñones clavados de forma concéntrica; el extractor roscado de volante magnético suelta el cono del cigüeñal con un toque de llave; y las colas de cerdo (extractores a izquierdas) salvan tornillos degollados taladrando el centro sin tocar la rosca.',
    videos: [V_HERRAMIENTAS, V_DESTORNILLADORES],
  },
  {
    id: "vasos-largos-torx",
    name: "Vasos largos, extensiones y vasos Torx / Allen de vaso",
    type: "común · moto y coche",
    rank: 5,
    scoreValue: 8.5,
    img: `${IMG}/familia-vasos-largos-torx.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Espárragos salientes, tuercas embutidas profundas y tornillería Torx (T y hembra E) común en coches europeos y motos modernas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Llegar a la tuerca de un amortiguador, soltar pinzas con espárrago largo o abrir tornillos Torx sin trasroscarlos.",
      },
      {
        label: "Compra barata",
        value: "Juego de vasos largos 3/8\" y 1/2\" + estuche de puntas Torx/Allen de cromo-vanadio — unos 25–35 €.",
      },
      {
        label: "Compra buena",
        value: "Wera Zyklop o BGS technic en aleación S2/Cr-Mo — unos 60–85 €.",
      },
      {
        label: "Marcas",
        value: "BGS technic, Wera, Stanley, Mannesmann, Bahco.",
      },
      {
        label: "El error típico",
        value: "Usar una llave Allen de L en tornillos de pinza apretados a 40 Nm: flexa, no puedes medir par y se escapa.",
      },
    ],
    desc: 'Los vasos normales se quedan cortos en cuanto el tornillo sobresale 3 centímetros por encima de la tuerca. Los vasos largos permiten trabajar en amortiguadores, barras estabilizadoras y tensores de cadena. Sumados a las puntas Torx (macho T y hembra E) montadas directamente sobre cuadradillo, te permiten aplicar dinamométrica con precisión absoluta en frenos y culatas.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "purga-frenos",
    name: "Kit de purga y sangrado de frenos",
    type: "común · sistema hidráulico",
    rank: 6,
    scoreValue: 8.3,
    img: `${IMG}/familia-purga-frenos.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Renovar el líquido de frenos (DOT 4 / DOT 5.1) y expulsar burbujas de aire de pinzas y bombas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Tener tacto duro e inmediato en la maneta o el pedal tras cambiar latiguillos, líquido o pinzas.",
      },
      {
        label: "Compra barata",
        value: "Válvula antirretorno con manguito de silicona y jeringa de 100 ml — unos 12–18 €.",
      },
      {
        label: "Compra buena",
        value: "Bomba manual de vacío metálica con vacuómetro y depósito colector de 120 ml — unos 30–45 €.",
      },
      {
        label: "Marcas",
        value: "Mityvac, BGS technic, Sealey, genéricas con vacuómetro.",
      },
      {
        label: "El error típico",
        value: "Dejar que el depósito de la bomba se quede seco mientras bombeas, metiendo aire en todo el circuito.",
      },
    ],
    desc: 'El líquido de frenos es higroscópico: absorbe humedad del aire y cada 2 años pierde punto de ebullición, volviéndose oscuro y esponjoso. Con una sencilla válvula antirretorno o una bomba manual de vacío de 25 €, una sola persona puede sustituir el líquido de toda la moto o el coche en media hora, ahorrándose los 70–120 € de taller con la tranquilidad de frenar al 100 %.',
    videos: [V_ZAPATAS_FRENO, V_HERRAMIENTAS],
  },
  {
    id: "calibre-galgas",
    name: "Calibre (pie de rey) y galgas de espesores",
    type: "común · metrología y precisión",
    rank: 7,
    scoreValue: 8.1,
    img: `${IMG}/familia-calibre-galgas.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Medir desgaste de discos/pastillas, diámetro de ejes y verificar la holgura de válvulas y electrodos de bujía.",
      },
      {
        label: "Sin ella no puedes",
        value: "Hacer reglaje de taqués o saber con certeza si un disco de freno está por debajo del grosor mínimo legal (Min TH).",
      },
      {
        label: "Compra barata",
        value: "Calibre digital de acero inoxidable 150 mm (0.01 mm) + juego de 32 galgas métricas — unos 20–25 €.",
      },
      {
        label: "Compra buena",
        value: "Mitutoyo analógico clásico de nonio o Vogel Germany de precisión templada — unos 60–110 €.",
      },
      {
        label: "Marcas",
        value: "Mitutoyo, Vogel, Parkside, BGS, Stanley.",
      },
      {
        label: "El error típico",
        value: "Comprar calibres de plástico que flexan 0,3 mm con solo apretar la rueda, dando lecturas falsas.",
      },
    ],
    desc: 'En mecánica de motor las distancias se miden en centésimas de milímetro. Un juego de galgas de acero fanned-out (desde 0.04 hasta 1.00 mm) cuesta menos de 10 € y permite ajustar la separación de electrodos de bujía y comprobar la holgura de válvulas en admisión y escape. Junto a un calibre de acero inox, elimina las dudas sobre el desgaste de componentes.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "banco-tornillo-fluidos",
    name: "Tornillo de banco, bandejas de vaciado y embudos",
    type: "común · puesto de trabajo",
    rank: 8,
    scoreValue: 7.9,
    img: `${IMG}/familia-banco-tornillo-fluidos.jpg`,
    etapa: 2,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Sujetar piezas con firmeza para taladrar, limar o serrar, y recoger fluidos sin manchar el suelo del garaje.",
      },
      {
        label: "Sin ella no puedes",
        value: "Hacer fuerza sobre una pieza suelta sin que gire descontrolada ni provocar derrames de aceite.",
      },
      {
        label: "Compra barata",
        value: "Tornillo de banco giratorio portátil de mordaza de 100 mm + cubeta de vaciado plana de 10 L — unos 40–55 €.",
      },
      {
        label: "Compra buena",
        value: "Tornillo de acero forjado Heuer / Stanley de 125 mm + bandeja cerrada con boquilla antigoteo — unos 110–180 €.",
      },
      {
        label: "Marcas",
        value: "Stanley, Heuer, Parkside, Bellota, BGS technic.",
      },
      {
        label: "El error típico",
        value: "Sujetar piezas de aluminio pulido o roscas directamente en las mordazas de acero dentado sin protectores de goma o aluminio.",
      },
    ],
    desc: 'La mecánica avanzada requiere trabajar fuera del vehículo: limpiar una pinza de freno, taladrar un soporte o enderezar una chapa. Un tornillo de banco anclado a una mesa o soporte rígido es la tercera mano que nunca se cansa. Y una bandeja colectora de perfil bajo con pico vertedor hace que reciclar el aceite usado en el punto limpio sea una tarea limpia y rápida.',
    videos: [V_HERRAMIENTAS],
  },
];

export const orden: OrdenRow[] = [
  { model: 'Carraca 1/2" y vasos grandes (13–32 mm)', tag: "winner", uso: 9, desbloqueo: 10, barata: 8.5, nota: 9.5 },
  { model: "Herramienta de cadena y radios (moto)", tag: null, uso: 8.5, desbloqueo: 9.5, barata: 8.5, nota: 9.1 },
  { model: "Dinamométrica grande (40–210 Nm) y pequeña (5–25 Nm)", tag: null, uso: 8.5, desbloqueo: 9.5, barata: 7.5, nota: 8.9 },
  { model: "Extractores mecánicos (garras, volante y tornillos)", tag: null, uso: 8, desbloqueo: 9.5, barata: 8, nota: 8.7 },
  { model: "Vasos largos, extensiones y vasos Torx / Allen", tag: null, uso: 8.5, desbloqueo: 8.5, barata: 8.5, nota: 8.5 },
  { model: "Kit de purga y sangrado de frenos", tag: null, uso: 7.5, desbloqueo: 9, barata: 9, nota: 8.3 },
  { model: "Calibre (pie de rey) y galgas de espesores", tag: null, uso: 8, desbloqueo: 8, barata: 8.5, nota: 8.1 },
  { model: "Tornillo de banco, bandejas de vaciado y embudos", tag: null, uso: 7.5, desbloqueo: 7.5, barata: 8.5, nota: 7.9 },
];

export const trilogiaEtapas: EtapaRow[] = [
  {
    n: 1,
    title: "Con 100 € empiezas",
    lema: "Mantenimiento esencial: aceite, filtros, bujías y pastillas.",
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
      { label: 'Carraca 1/2" y vasos grandes (13–32 mm)', id: "carraca-vasos-12" },
      { label: "Herramienta de cadena y radios (moto)", id: "herramienta-cadena-radios" },
      { label: "Dinamométrica grande y pequeña", id: "dinamometricas" },
      { label: "Extractores mecánicos (garras, volante y tornillos)", id: "extractores-mecanicos" },
      { label: "Vasos largos y Torx / Allen de vaso", id: "vasos-largos-torx" },
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
    marca: "Bahco",
    gama: "El salto bueno",
    bueno: "Acero sueco y tolerancias intachables. Sus carracas de 1/2\" y dinamométricas aguantan décadas sin holgura.",
    flojo: "Precio sensiblemente más alto que las opciones de gran superficie.",
    veredicto: "En carracas grandes y dinamométrica, una inversión definitiva.",
  },
  {
    marca: "Stanley",
    gama: "Ferretería de marca",
    bueno: "Gama FatMax muy robusta, carracas de 72 dientes suaves y vasos de cromo-vanadio muy honestos.",
    flojo: "Los maletines económicos tienen carracas más toscas.",
    veredicto: "Equilibrio precio-calidad óptimo para el aficionado avanzado.",
  },
  {
    marca: "Mannesmann",
    gama: "Ferretería de marca",
    bueno: "El mítico maletín verde de 215 piezas ha equipado a generaciones enteras por menos de 100 €.",
    flojo: "Los vasos pequeños y puntas sufren con uso intensivo; la carraca de 1/2\" es pesada.",
    veredicto: "Excelente para tener todas las medidas de golpe sin gastar una fortuna.",
  },
  {
    marca: "Parkside / Lidl",
    gama: "Marca del súper",
    bueno: "El maletín de 1/2\" y 1/4\" ronda los 45 € y rinde sorprendentemente bien en bricolaje casero.",
    flojo: "Rotación estacional difícil de comprar y acabados con más rebaba.",
    veredicto: "Perfecta para complementar piezas que no vas a usar a diario.",
  },
  {
    marca: "BGS technic",
    gama: "Especialista taller",
    bueno: "El catálogo más completo de útiles específicos: extractores, purgadores, útiles de cadena y vasos Torx.",
    flojo: "Venta casi exclusiva online; acabados funcionales sin florituras.",
    veredicto: "El proveedor secreto de los talleres independientes. Calidad media-alta a buen precio.",
  },
  {
    marca: "Facom",
    gama: "Profesional top",
    bueno: "El estándar de oro en aviación y competición. Garantía de sustitución legendaria y cero holguras.",
    flojo: "Precio prohibitivo para un garaje particular.",
    veredicto: "Para soñar o para la herramienta que te obsesione.",
  },
];

export const rutas: RutaRow[] = [
  {
    ruta: "Kit esencial de fuerza (120 €)",
    entra: 'Juego de carraca 1/2" con vasos 13-32 mm, útil de cadena y kit de purga de frenos.',
    llegas: "Cambio de ruedas, kit de arrastre completo y sustitución de líquido de frenos.",
    marcas: "Parkside, BGS technic, Mannesmann",
  },
  {
    ruta: "Taller avanzado completo (280 €)",
    entra: "Todo lo anterior más las dos dinamométricas (grande y pequeña), vasos largos Torx y extractores.",
    llegas: "Apertura de tapas de motor, reglaje de válvulas, bujes, rodamientos y suspensiones.",
    marcas: "Stanley, Bahco, BGS technic",
  },
  {
    ruta: "El salto profesional (500 €)",
    entra: "Herramienta de gama alta en dinamometría, calibre Mitutoyo, tornillo de banco de fundición y extractores forjados.",
    llegas: "Reconstrucción completa de motor y chasis con precisión de manual de taller.",
    marcas: "Bahco, Norbar, Kukko, Mitutoyo",
  },
];

export const tallerVsCasa: TallerVsCasaRow[] = [
  {
    trabajo: "Cambio de kit de arrastre (cadena + corona + piñón)",
    taller: "220–310 €",
    casa: "~85 €",
    ahorro: "135–225 €",
    herramienta: 'Carraca 1/2" y remachador de cadena',
  },
  {
    trabajo: "Sustitución de líquido de frenos delantero y trasero",
    taller: "75–120 €",
    casa: "~14 €",
    ahorro: "60–105 €",
    herramienta: "Kit de purga y llave fija de 8/10 mm",
  },
  {
    trabajo: "Reglaje de holgura de válvulas (moto monocilíndrica/bicilíndrica)",
    taller: "140–230 €",
    casa: "~12 €",
    ahorro: "128–218 €",
    herramienta: "Juego de galgas de espesores y dinamométrica 1/4\"",
  },
  {
    trabajo: "Cambio de rodamientos de rueda o basculante",
    taller: "160–240 €",
    casa: "~32 €",
    ahorro: "128–208 €",
    herramienta: 'Extractor de 3 garras y vasos grandes 1/2"',
  },
  {
    trabajo: "Sustitución de amortiguadores traseros",
    taller: "180–290 €",
    casa: "~80 € (piezas)",
    ahorro: "100–190 €",
    herramienta: 'Carraca 1/2", vasos largos y dinamométrica grande',
  },
];

export const paresApriete: ParAprieteRow[] = [
  {
    operacion: "Tuerca de eje trasero de rueda (moto)",
    par: "85–100 Nm",
    llave: 'Dinamométrica grande 1/2" (40–210 Nm)',
    aviso: "Punto crítico de seguridad vial. Apretar siempre con la moto apoyada y comprobar pasador de seguridad.",
  },
  {
    operacion: "Tornillos de corona de transmisión al buje",
    par: "45–60 Nm",
    llave: 'Dinamométrica grande 1/2" o media 3/8"',
    aviso: "Apretar en estrella/cruz con fijador de roscas medio (azul) para evitar que se aflojen con las vibraciones.",
  },
  {
    operacion: "Tuercas de rueda de turismo (coche)",
    par: "110–130 Nm",
    llave: 'Dinamométrica grande 1/2" (40–210 Nm)',
    aviso: "Apretar en cruz. Jamás usar la pistola de impacto al máximo para el apriete final: deforma los discos.",
  },
  {
    operacion: "Tornillo de fijación del piñón de ataque",
    par: "30–45 Nm",
    llave: 'Dinamométrica 1/2" o 3/8"',
    aviso: "Verificar la arandela de seguridad estriada; cambiarla si las pestañas de retención están fatigadas.",
  },
  {
    operacion: "Tornillos de tapa de balancines / cárter de magnesio/aluminio",
    par: "8–11 Nm",
    llave: 'Dinamométrica pequeña 1/4" (5–25 Nm)',
    aviso: "¡Peligro crítico! Nunca apretar a ojo con carraca grande: los tornillos de M6 parten la rosca en el bloque con mirarlos.",
  },
];

export const erroresTrampas: ErrorTrampaRow[] = [
  {
    error: "Usar un adaptador reductor de 1/2\" a 3/8\" o 1/4\" para hacer fuerza bruta",
    porQuePasa: "Tener una tuerca dura de 12 o 13 mm y querer hacer más palanca con la carraca grande de 1/2\".",
    consecuencia: "El cuello estrecho del adaptador reductor cede por torsión y se parte de cuajo, pudiendo dañarte los nudillos.",
    solucion: "Respeta el rango natural de cada cuadradillo. Si necesitas más palanca en 3/8\", usa un maneral articulado de esa medida.",
  },
  {
    error: "No limar la cabeza del remache antes de tronchar la cadena",
    porQuePasa: "Pensar que el punzón extractor tiene que vencer el ensanchamiento del remache de acero cementado a base de rosca.",
    consecuencia: "El punzón del tronchacadenas se dobla o parte al instante, arruinando la herramienta nueva en el primer uso.",
    solucion: "Pasa una lima plana o el disco de desbaste por el eslabón hasta dejar la chapa plana antes de empujar con el extractor.",
  },
  {
    error: "Apretar tornillos de tapa de motor con la dinamométrica de ruedas",
    porQuePasa: "Comprar una sola dinamométrica de 40 a 210 Nm creyendo que sirve para todo.",
    consecuencia: "En tornillos finos de 10 Nm la llave nunca llega a hacer 'clic' y trasrosca el cárter sin avisar.",
    solucion: "Una dinamométrica solo es fiable en su rango operativo. Para menos de 30 Nm hace falta obligatoriamente una llave de 1/4\".",
  },
  {
    error: "Hacer palanca con destornilladores para sacar un rodamiento o volante",
    porQuePasa: "La impaciencia de no tener a mano un extractor de garras o roscado.",
    consecuencia: "Mellas los bordes del alojamiento de aluminio, marcas el retén de estanqueidad o doblas el cigüeñal de forma irreversible.",
    solucion: "Usa siempre un extractor mecánico que aplique la fuerza en el eje central de forma perfectamente concéntrica.",
  },
];
