# Estado de sesión — 2026-11-04

Sesión de desarrollo mayor: creación y despliegue de la **Trilogía completa de Especiales de Taller** en Tuanbyte (versión **v1.6.0**), estructuración de rutas interconectadas, generación de fotografías técnicas con IA y planificación del próximo especial para programadores web.

---

## 1. Trilogía de Taller completada y operativa (100 %)

La saga queda dividida en 3 entregas con diseño homogéneo, portadas cenitales sobre papel kraft claro y navegación interactiva cruzada:

1. **Parte 1: «El taller mínimo viable» (`/especiales/taller-minimo/`)**
   - 9 familias de arranque operativas (vasos 3/8", llaves combinadas, destornilladores, Allen, alicates, bujías, martillo/mazo, caballete/borriquetas, linterna frontal).
   - Ganadora: *Juego de vasos 3/8" y carraca* (9,60).
   - Dossier con 5 tablas técnicas y sincronización Consent Mode v2.

2. **Parte 2: «Taller de maniobra» (`/especiales/taller-maniobra/`)**
   - 8 familias completas para mecánica pesada y rescate:
     1. `carraca-vasos-12`: Carraca 1/2" y vasos grandes (13–32 mm) (Ganadora: 9,50).
     2. `herramienta-cadena-radios`: Tronchacadenas / remachador de cadena y llave de radios.
     3. `dinamometricas`: Dinamométrica grande (40–210 Nm) y pequeña de precisión (5–25 Nm).
     4. `extractores-mecanicos`: Extractores de garras 2-3 patas, volante magnético y tornillos partidos a izquierdas.
     5. `vasos-largos-torx`: Vasos largos de impacto, extensiones y vasos Torx hembra/macho.
     6. `purga-frenos`: Kit de sangrado y purga de frenos con válvula antirretorno y jeringa/bomba.
     7. `calibre-galgas`: Calibre de acero inoxidable (pie de rey) y galgas de espesores en abanico.
     8. `banco-tornillo-fluidos`: Tornillo de banco, cubeta colectora de aceite y embudos con flexible.
   - **Apartado editorial técnico exclusivo**:
     - *«El enigma de las pulgadas: 1/4", 3/8" y 1/2" explicados en cristiano»*: origen histórico anglosajón del sistema imperial en el cuadradillo frente a la tornillería métrica universal, límites de par de torsión (Nm) por medida y el peligro de los adaptadores reductores.
   - Dossier técnico con tablas de marcas, presupuestos de maniobra, comparativa taller vs. casa y pares de apriete críticos.

3. **Parte 3: «Taller moderno» (`/especiales/taller-moderno/`)**
   - 6 familias centradas en herramientas a batería y diagnosis electrónica:
     1. `llave-impacto`: Llave de impacto a batería 1/2" con vasos Cr-Mo de impacto (Ganadora: 9,60).
     2. `taladro-percutor`: Taladro atornillador percutor a batería (brushless) con accesorios para desbaste y metal.
     3. `diagnosis-obd2-basica`: Diagnosis OBD2 de bolsillo (Bluetooth/Wi-Fi + App móvil tipo Car Scanner/Carista).
     4. `carraca-electrica`: Carraca eléctrica compacta 3/8" para vanos motor y trabajo rápido.
     5. `diagnosis-avanzada`: Escáner de diagnosis multimarca autónomo con pantalla táctil (Autel/Launch/Topdon).
     6. `cargador-multimetro`: Cargador inteligente de batería con microprocesador y multímetro digital automotriz.
   - **Apartado editorial técnico exclusivo**:
     - *«El mapa de la diagnosis: del conector del móvil al escáner multimarca»*: desglose por niveles (Nivel 1 móvil EOBD vs Nivel 2 escáner de mano con funciones de servicio para freno de mano eléctrico EPB, ABS y BMS vs Nivel 3 software de fábrica).
   - Dossier técnico con comparativa de ecosistemas de batería (Parkside X20V, Einhell, Milwaukee, Bosch), tabla de niveles de diagnosis y amortización económica.

---

## 2. Mejoras de Arquitectura y Componentes
- **Navegación bidireccional entre rutas (`Etapas.astro`)**:
  - Las 3 cajas de la ruta se renderizan debajo del veredicto en los 3 reportajes.
  - Indicador dinámico `Estás aquí` / `Viendo esta entrega` con borde y resalte temático.
  - Enlaces directos a las otras entregas de la saga y anclas `#ficha-<id>` para salto directo a los productos.
- **Sección destacada adaptable en `Reportaje.astro`**:
  - Nuevo bloque `apartadoDestacado` con tarjetas técnicas y notas de taller.
- **Catálogo de Especiales (`/especiales/index.astro`)**:
  - Añadidas las tarjetas individuales de las Partes 1, 2 y 3 con fotos, kickers y sinopsis.
- **Sitemap (`public/sitemap.xml`)**:
  - Incorporadas las URLs canónicas `/especiales/taller-maniobra/` y `/especiales/taller-moderno/`.
- **Fotografías dedicadas de Ruta 3 procesadas**:
  - Sustituidas las imágenes temporales por las fotos individuales y aisladas de alta resolución:
    - `familia-diagnosis-obd2-basica.jpg`: Adaptador OBD2 Bluetooth con LED naranja y conector de 16 pines centrado sobre papel kraft.
    - `familia-diagnosis-avanzada.jpg`: Escáner de mano con pantalla iluminada en azul ("DIAGNOSTICS: OBDII/EOBD"), teclado y cable.
    - `familia-cargador-multimetro.jpg`: Cargador inteligente con display digital (13.4V), pinzas de cocodrilo roja y negra y cables bobinados.

---

## 3. Preparación del próximo especial
- Creado [`docs/plans/proximo-especial-programador-web.md`](file:///home/antoniohh/Proyectos/Tuanbyte/docs/plans/proximo-especial-programador-web.md) para el reportaje: **«El entorno del programador web moderno»** (Instalación de Sistema Operativo, entorno PHP multiversión con Composer y FrankenPHP, entorno Node.js/TypeScript con fnm y pnpm, editores IDE con VS Code y extensiones, y agentes y asistentes de IA en terminal y editor).
