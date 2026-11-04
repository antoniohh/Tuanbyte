import type {
  ErrorTrampaRow,
  EtapaRow,
  Herramienta,
  MarcaRow,
  OrdenRow,
  RutaRow,
  TallerVsCasaRow,
} from "../../taller-minimo/types";

const IMG = "/images/especiales/taller-moderno";

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

export const herramientas: Herramienta[] = [
  {
    id: "llave-impacto",
    name: 'Llave de impacto a batería 1/2" ("la de las tuercas")',
    type: "común · fuerza a batería",
    rank: 1,
    scoreValue: 9.6,
    img: `${IMG}/familia-llave-impacto.jpg`,
    etapa: 3,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Desmontar en segundos tuercas de rueda, piñón de ataque, variadores de scooter y tornillos agarrotados.",
      },
      {
        label: "Sin ella no puedes",
        value: "Soltar tuercas de ejes rotativos sin necesidad de trabar la rueda a lo bruto ni usar compresores neumáticos ruidosos.",
      },
      {
        label: "Compra barata",
        value: "Parkside Performance 20V (400 Nm) o Einhell IMPAXXO 18/400 — unos 65–90 € (máquina suelta).",
      },
      {
        label: "Compra buena",
        value: "Milwaukee M18 FUEL Mid-Torque (610–881 Nm) o DeWalt DCF891 — unos 190–280 €.",
      },
      {
        label: "Marcas",
        value: "Parkside Performance, Einhell, Bosch azul, Milwaukee, DeWalt, Makita.",
      },
      {
        label: "El error típico",
        value: "Usar vasos cromados comunes: el impacto los raja y lanza esquirlas. Y apretar tuercas a tope con la máquina sin dinamométrica.",
      },
    ],
    desc: 'Es la auténtica reina de las herramientas modernas. El mecanismo de masa rotativa percute de forma tangencial (como miles de martillazos por minuto), soltando tuercas clavadas sin transmitir retroceso a tu muñeca ni hacer girar el eje de la moto o el buje del coche. Combinada con un juego de vasos de impacto de cromo-molibdeno (Cr-Mo), cambiar las 4 ruedas del coche o soltar la tuerca de embrague pasa de ser una lucha de media tarde a una operación limpia de dos minutos.',
    videos: [V_HERRAMIENTAS, V_KIT_ARRASTRE],
  },
  {
    id: "taladro-percutor",
    name: "Taladro / atornillador a batería con percutor",
    type: "común · rotación y mecanizado",
    rank: 2,
    scoreValue: 9.2,
    img: `${IMG}/familia-taladro-percutor.jpg`,
    etapa: 3,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Taladrar metales, limpiar óxido con cepillos de alambre, usar brocas cónicas escalonadas y pulir piezas.",
      },
      {
        label: "Sin ella no puedes",
        value: "Taladrar el centro de un tornillo partido para meter un extractor ni sanear corrosión profunda en chasis.",
      },
      {
        label: "Compra barata",
        value: "Parkside X20V Team o Einhell TE-CD 18/50 Li-i con portabrocas metálico de 13 mm — unos 45–60 €.",
      },
      {
        label: "Compra buena",
        value: "Bosch Professional GSB 18V-55 o Makita DHP484 brushless — unos 120–160 €.",
      },
      {
        label: "Marcas",
        value: "Bosch azul, Makita, Einhell, Parkside, DeWalt.",
      },
      {
        label: "El error típico",
        value: "Taladrar acero a máxima velocidad sin aceite de corte: quemas la broca en tres segundos sin hacer muesca.",
      },
    ],
    desc: 'Un taladro percutor de 18V/20V con motor sin escobillas (brushless) y embrague de par ajustable es el comodín definitivo de cualquier taller. Con un juego de cepillos de copa de alambre quita óxido de basculantes y llantas en segundos; con una broca escalonada abre orificios limpios en pletinas; y a bajas revoluciones con lubricante permite taladrar espárragos partidos con precisión milimétrica.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "diagnosis-obd2-basica",
    name: "Diagnosis OBD2 de bolsillo (Bluetooth / Wi-Fi + Móvil)",
    type: "coche / moto moderna · diagnosis inicial",
    rank: 3,
    scoreValue: 9.0,
    img: `${IMG}/familia-diagnosis-obd2-basica.jpg`,
    etapa: 3,
    alcance: "coche",
    specs: [
      {
        label: "Para qué",
        value: "Leer códigos de avería del motor (DTC), borrar la luz de 'Check Engine' y ver parámetros en tiempo real.",
      },
      {
        label: "Sin ella no puedes",
        value: "Saber por qué se ha encendido el testigo naranja del motor antes de ir a ciegas al taller.",
      },
      {
        label: "Compra barata",
        value: "Adaptador OBD2 ELM327 v1.5 Bluetooth o Wi-Fi con app gratuita Car Scanner ELM OBD2 — unos 12–20 €.",
      },
      {
        label: "Compra buena",
        value: "OBDLink LX/MX+, Carista OBD o Veepeak BLE+ con protocolo CAN de alta velocidad — unos 40–90 €.",
      },
      {
        label: "Marcas",
        value: "Carista, OBDLink, Veepeak, Vgate iCar Pro, genéricos ELM327.",
      },
      {
        label: "El error típico",
        value: "Borrar el fallo inmediatamente para que se apague la luz sin haber guardado el código ni analizado la causa raíz.",
      },
    ],
    desc: 'Cuesta menos que una comida y se lleva en la guantera. El conector OBD2 estándar (obligatorio en coches gasolina desde 2001 y diésel desde 2004, y en motos Euro 5) te permite conectar tu teléfono móvil mediante Bluetooth. En 30 segundos lees qué sensor de oxígeno falla, compruebas la temperatura del refrigerante o monitorizas la presión del turbo mientras conduces, evitando diagnósticos erróneos y facturas fantasma.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "carraca-electrica",
    name: "Carraca eléctrica compacta a batería (3/8\" o 1/4\")",
    type: "común · velocidad y accesibilidad",
    rank: 4,
    scoreValue: 8.8,
    img: `${IMG}/familia-carraca-electrica.jpg`,
    etapa: 3,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Quitar y poner tornillería larga a gran velocidad en espacios muy reducidos donde no cabe una llave de impacto.",
      },
      {
        label: "Sin ella no puedes",
        value: "Avanzar rápido en carenados, colectores de admisión o bajos sin tener que dar 60 golpes de muñeca por tornillo.",
      },
      {
        label: "Compra barata",
        value: "Parkside 12V PARS 4 A1 o Einhell TE-CR 12 Li — unos 35–45 €.",
      },
      {
        label: "Compra buena",
        value: "Milwaukee M12 FUEL cabeza plana o Bosch Pro GDR/GSA 12V — unos 120–180 €.",
      },
      {
        label: "Marcas",
        value: "Milwaukee M12, Parkside, Bosch azul, Einhell, Katsu.",
      },
      {
        label: "El error típico",
        value: "Esperar que la máquina apriete a 100 Nm: su motor da entre 35 y 55 Nm; el apriete fuerte final se da a mano usándola como carraca fija.",
      },
    ],
    desc: 'La carraca a batería es el secreto mejor guardado de los mecánicos profesionales. Con un perfil fino similar a una carraca manual pero accionada por un gatillo progresivo, rueda tornillos de 10 cm en dos segundos sin fatiga muscular. Además, como su mecanismo interno bloquea cuando dejas de pulsar, puedes usar el cuerpo de la herramienta para dar el apriete manual inicial o final.',
    videos: [V_HERRAMIENTAS, V_DESTORNILLADORES],
  },
  {
    id: "diagnosis-avanzada",
    name: "Diagnosis avanzada multimarca (escáner con pantalla)",
    type: "coche / moto moderna · diagnosis de sistemas",
    rank: 5,
    scoreValue: 8.6,
    img: `${IMG}/familia-diagnosis-avanzada.jpg`,
    etapa: 3,
    alcance: "coche",
    specs: [
      {
        label: "Para qué",
        value: "Retraer pinzas de freno de mano eléctrico (EPB), registrar cambio de batería (BMS), sangrar ABS y forzar regeneración DPF/FAP.",
      },
      {
        label: "Sin ella no puedes",
        value: "Cambiar pastillas de freno traseras en coches modernos con botón de freno de estacionamiento eléctrico sin romper el motor de la pinza.",
      },
      {
        label: "Compra barata",
        value: "Topdon ArtiDiag500 o Autel MaxiCheck MX808 / Launch Creader Elite — unos 120–190 €.",
      },
      {
        label: "Compra buena",
        value: "Autel MaxiCOM MK808S o interfaces específicas (VCDS/VAG-COM para Grupo VAG, BimmerCode para BMW) — unos 280–420 €.",
      },
      {
        label: "Marcas",
        value: "Autel, Launch, Topdon, Foxwell, Ross-Tech (VCDS).",
      },
      {
        label: "El error típico",
        value: "Modificar codificaciones de centralita (long coding) sin hacer una copia de seguridad previa de los valores de fábrica.",
      },
    ],
    desc: 'En los vehículos fabricados a partir de 2012, la mecánica pura se topa con la electrónica. Para cambiar las pastillas de freno traseras en un coche con freno de mano eléctrico, no se puede empujar el bombín: hay que ordenar por software al servomotor que retroceda al modo servicio. Un escáner multimarca con pantalla táctil autónoma abre todos los módulos (Airbag, ABS, climatización, cuadro) y amortiza su precio en la primera intervención electrónica.',
    videos: [V_HERRAMIENTAS],
  },
  {
    id: "cargador-multimetro",
    name: "Cargador inteligente de batería y multímetro automotriz",
    type: "común · electricidad y vida de batería",
    rank: 6,
    scoreValue: 8.4,
    img: `${IMG}/familia-cargador-multimetro.jpg`,
    etapa: 3,
    alcance: "común",
    specs: [
      {
        label: "Para qué",
        value: "Mantener la batería de moto/coche en invierno, recuperar baterías descargadas y medir caídas de tensión o consumos parásitos.",
      },
      {
        label: "Sin ella no puedes",
        value: "Evitar que una moto parada en invierno muera por sulfatación o saber si el alternador está cargando a 14.2V.",
      },
      {
        label: "Compra barata",
        value: "Cargador microprocesado Parkside ULGD 5.0 (Lidl) + multímetro digital básico de autorrango — unos 30–40 € el conjunto.",
      },
      {
        label: "Compra buena",
        value: "Ctek MXS 5.0 o Noco Genius 5 (con modo desulfatación) + multímetro Uni-T UT61E+ automotriz — unos 110–160 €.",
      },
      {
        label: "Marcas",
        value: "Ctek, Noco, Parkside, Uni-T, Fluke.",
      },
      {
        label: "El error típico",
        value: "Usar un arrancador de biberón rápido sin comprobar si la batería tiene un vaso comunicado, sobrecalentando el alternador.",
      },
    ],
    desc: 'La principal causa de llamada a la grúa en España sigue siendo una batería descargada. Un cargador inteligente de 5 amperios con microprocesador no solo carga: monitoriza el voltaje, desulfata placas de plomo y pasa a modo flotación para hibernar la moto en el garaje meses sin riesgo de sobrecarga. Junto a un multímetro digital, diagnosticas alternadores, relés y consumos parásitos en minutos.',
    videos: [V_HERRAMIENTAS],
  },
];

export const orden: OrdenRow[] = [
  { model: 'Llave de impacto a batería 1/2" ("la de las tuercas")', tag: "winner", uso: 9.5, desbloqueo: 10, barata: 8.5, nota: 9.6 },
  { model: "Taladro / atornillador a batería con percutor", tag: null, uso: 9.5, desbloqueo: 9, barata: 8.5, nota: 9.2 },
  { model: "Diagnosis OBD2 de bolsillo (Bluetooth + Móvil)", tag: null, uso: 8.5, desbloqueo: 9.5, barata: 9.5, nota: 9.0 },
  { model: "Carraca eléctrica compacta a batería", tag: null, uso: 9, desbloqueo: 8.5, barata: 8.5, nota: 8.8 },
  { model: "Diagnosis avanzada multimarca (escáner con pantalla)", tag: null, uso: 7.5, desbloqueo: 10, barata: 7, nota: 8.6 },
  { model: "Cargador inteligente de batería y multímetro", tag: null, uso: 8.5, desbloqueo: 8, barata: 9, nota: 8.4 },
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
      { label: "Diagnosis OBD2 de bolsillo (Bluetooth + Móvil)", id: "diagnosis-obd2-basica" },
      { label: "Carraca eléctrica compacta a batería", id: "carraca-electrica" },
      { label: "Diagnosis avanzada multimarca (escáner con pantalla)", id: "diagnosis-avanzada" },
      { label: "Cargador inteligente de batería y multímetro", id: "cargador-multimetro" },
    ],
  },
];

export const ecosistemasBateria: MarcaRow[] = [
  {
    marca: "Parkside X20V / Performance (Lidl)",
    gama: "Batería accesible",
    bueno: "Relación precio-potencia imbatible. La serie Performance negra lleva motores brushless excelentes y baterías de 4Ah por menos de 30 €.",
    flojo: "Disponibilidad estacional en tiendas físicas y cargadores algo lentos en la gama básica.",
    veredicto: "La plataforma indiscutible para equipar un taller doméstico completo por una fracción de lo normal.",
  },
  {
    marca: "Einhell Power X-Change",
    gama: "Ferretería / Taller",
    bueno: "Un catálogo inmenso de más de 300 herramientas con la misma batería de 18V. Siempre en stock y servicio técnico en España.",
    flojo: "La llave de impacto de gama de entrada se queda corta en tuercas de más de 120 Nm.",
    veredicto: "La mejor alternativa comercial continua si no quieres depender de los catálogos del Lidl.",
  },
  {
    marca: "Milwaukee M12 y M18",
    gama: "Profesional automoción",
    bueno: "La reina absoluta del sector del motor. Sus llaves de impacto compactas y carracas eléctricas marcan el estándar del mercado.",
    flojo: "Precios muy altos: un kit de impacto y dos baterías puede superar los 350 € con facilidad.",
    veredicto: "Para el aficionado exigente que busca la mejor herramienta que el dinero puede comprar.",
  },
  {
    marca: "Bosch Professional 18V (Azul)",
    gama: "Profesional industria",
    bueno: "Motores BiTURBO con potencia brutal, baterías ProCORE ligeras y fiabilidad legendaria.",
    flojo: "Menor surtido de útiles específicos para automoción que Milwaukee.",
    veredicto: "Apuesta segura para taladro, amoladora y llave de impacto si buscas robustez para 20 años.",
  },
  {
    marca: "Autel / Launch (Diagnosis)",
    gama: "Diagnosis especializada",
    bueno: "Actualizaciones frecuentes de modelos, menús claros en español y soporte de funciones de servicio (frenos, DPF, BMS).",
    flojo: "Suscripción de actualización de software tras el primer o segundo año (aunque siguen funcionando sin actualizar).",
    veredicto: "Los dos gigantes mundiales de diagnosis independiente. Imprescindibles para coches modernos.",
  },
];

export const rutas: RutaRow[] = [
  {
    ruta: "Ruta de entrada electrónica (~120 €)",
    entra: "Adaptador OBD2 Bluetooth (Carista / ELM327) + cargador inteligente Parkside + taladro atornillador a batería.",
    llegas: "Lectura/borrado de fallos de motor, hibernación de batería y trabajos habituales de taladrado y pulido.",
    marcas: "Parkside, Carista, Vgate",
  },
  {
    ruta: "Ruta de fuerza a batería (~280 €)",
    entra: "Llave de impacto 1/2\" brushless + juego de vasos de impacto Cr-Mo + carraca eléctrica compacta + dos baterías de litio.",
    llegas: "Cambio rápido de ruedas y transmisiones, desmontaje de suspensiones y trabajo veloz sin esfuerzo en motor.",
    marcas: "Parkside Performance, Einhell",
  },
  {
    ruta: "Taller autónomo siglo XXI (~550 €)",
    entra: "Todo lo anterior más escáner de diagnosis multimarca autónomo con pantalla táctil y cargador/desulfatador Ctek.",
    llegas: "Sustitución de pastillas con freno eléctrico, reseteo de revisiones, purga de ABS y autonomía técnica completa.",
    marcas: "Parkside Performance, Autel, Ctek, Bosch",
  },
];

export const tallerVsCasa: TallerVsCasaRow[] = [
  {
    trabajo: "Sustitución de pastillas traseras con freno de mano eléctrico (EPB)",
    taller: "160–240 €",
    casa: "~38 €",
    ahorro: "120–200 €",
    herramienta: "Escáner diagnosis (modo servicio) y vasos 13/15 mm",
  },
  {
    trabajo: "Cambio de 4 neumáticos de invierno/verano (llanta completa)",
    taller: "40–60 € / temporada",
    casa: "0 €",
    ahorro: "80–120 € / año",
    herramienta: 'Llave de impacto a batería 1/2" y dinamométrica',
  },
  {
    trabajo: "Diagnosis y borrado de fallo motor (Check Engine)",
    taller: "45–80 €",
    casa: "0 €",
    ahorro: "45–80 € / uso",
    herramienta: "Adaptador OBD2 Bluetooth + App móvil",
  },
  {
    trabajo: "Sustitución y codificación de batería Start-Stop AGM",
    taller: "210–320 €",
    casa: "~110 € (batería)",
    ahorro: "100–210 €",
    herramienta: "Escáner diagnosis (registro BMS) y llave 10 mm",
  },
  {
    trabajo: "Desmontaje de piñón de ataque o variador de embrague",
    taller: "90–150 €",
    casa: "0 €",
    ahorro: "90–150 €",
    herramienta: 'Llave de impacto 1/2" con vaso de impacto',
  },
];

export const diagnosisNiveles: { nivel: string; hardware: string; coste: string; alcance: string; operaciones: string }[] = [
  {
    nivel: "Nivel 1 · Bolsillo / Móvil",
    hardware: "Adaptador OBD2 Bluetooth/Wi-Fi (ELM327, Carista, Veepeak) + App",
    coste: "15–45 €",
    alcance: "Módulo motor estándar (OBD2/EOBD genérico)",
    operaciones: "Lectura y borrado de averías Check Engine (DTCs P0xxx), datos en vivo (sensores O2, temperatura, RPM, presión).",
  },
  {
    nivel: "Nivel 2 · Escáner de mano",
    hardware: "Tableta autónoma con pantalla táctil y cable directo (Autel, Launch, Topdon)",
    coste: "120–250 €",
    alcance: "Todos los sistemas (Motor, ABS, Airbag, BSI, Cuadro, Transmisión)",
    operaciones: "Retracción de freno eléctrico para pastillas, reseteo de intervalos de aceite, registro de batería, sangrado ABS.",
  },
  {
    nivel: "Nivel 3 · Software de fábrica",
    hardware: "Cable especializado + Portátil (VCDS para VAG, ISTA para BMW, Diagbox para PSA)",
    coste: "60–350 €",
    alcance: "Control total a nivel de concesionario oficial",
    operaciones: "Codificación avanzada de centralitas, adaptación de llaves, reprogramación de módulos y calibración de radares ADAS.",
  },
];

export const erroresTrampas: ErrorTrampaRow[] = [
  {
    error: "Usar vasos cromados estándar en la llave de impacto",
    porQuePasa: "Aprovechar el maletín de carraca normal que ya tienes en casa.",
    consecuencia: "El acero cromo-vanadio es rígido y quebradizo ante golpes secos: se raja el vaso y puede proyectar esquirlas de metal a gran velocidad.",
    solucion: "Usa siempre vasos de impacto negros de cromo-molibdeno (Cr-Mo), diseñados con paredes más gruesas y acero elástico que absorbe el choque.",
  },
  {
    error: "Apretar tornillos de rueda al máximo con la llave de impacto",
    porQuePasa: "La comodidad de no sacar la dinamométrica después de usar la máquina.",
    consecuencia: "La máquina puede aplicar más de 250 Nm sin que te des cuenta: deforma los discos de freno, estira los espárragos y en carretera no habrá forma de aflojarlos con la llave de mano.",
    solucion: "Aproxima las tuercas con la máquina en potencia 1 (baja) y da el par final exacto (110–130 Nm) siempre con llave dinamométrica manual.",
  },
  {
    error: "Borrar el fallo motor (DTC) antes de anotar los datos congelados",
    porQuePasa: "Las prisas por apagar la luz naranja de avería en el cuadro.",
    consecuencia: "Borras la memoria 'Freeze Frame' que guardaba a qué temperatura, velocidad y carga falló el sensor, complicando enormemente saber qué pieza está rota.",
    solucion: "Guarda un pantallazo o informe en PDF con la app antes de borrar cualquier código de avería.",
  },
  {
    error: "Empujar el pistón de freno trasero sin poner el freno eléctrico en modo servicio",
    porQuePasa: "Intentar cambiar pastillas como en un coche clásico con gato o sargento.",
    consecuencia: "Revienta el servomotor eléctrico integrado en la pinza de freno o parte el engranaje helicoidal interno (avería de más de 400 €).",
    solucion: "Retrae siempre el motor mediante escáner de diagnosis o app especializada antes de tocar mecánicamente la pinza.",
  },
];
