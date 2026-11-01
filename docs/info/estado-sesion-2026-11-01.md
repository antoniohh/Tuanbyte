# Estado de sesión — 2026-11-01

Sesión de reactivación y finalización de la **Ruta 1 (Etapa 1: Con 100 € empiezas)** del especial **«El taller mínimo viable»**, corrección de Google Consent Mode v2 y preparación para la Ruta 2.

---

## Hecho en esta sesión

### 1. Consentimiento de cookies y Google Consent Mode v2
- Sincronización en `<head>` de `gtag('consent', 'default')` leyendo `localStorage` (`tb-consent`) de forma idéntica a la solución de **GlucoLuna**.
- Eliminados los avisos de secuenciación de Google Tag Assistant (las visitas con consentimiento previo nacen directamente con `analytics_storage: 'granted'`).
- Mantención estricta de `ad_storage`, `ad_user_data` y `ad_personalization` en `'denied'`.
- Activado `anonymize_ip: true` en `gtag('config')`.
- Aviso de cookies visible tanto en dev como en prod, con retardo de 300 ms y enlaces `[data-cookies-open]` y `[data-open-cookie-preferences]`.

### 2. Ruta 1 (Etapa 1) completada al 100 %
- 9 fichas reales cerradas con sus 6 especificaciones de taller, descripciones y vídeos:
  1. `vasos-38`: Juego de vasos 3/8" y carraca.
  2. `llaves-combinadas`: Llaves combinadas 6–22 mm.
  3. `destornilladores`: Destornilladores (plano, Phillips, Pozidriv).
  4. `llaves-allen`: Llaves Allen métricas con punta de bola.
  5. `alicates`: Juego de alicates (universal, punta y corte).
  6. `llave-bujias`: Vaso de bujías 16/21 mm con retén de goma.
  7. `martillo-mazo`: Martillo de peña y mazo de doble cara nylon/goma.
  8. `gato-caballete`: Caballete trasero de basculante y borriquetas de chasis.
  9. `linterna-frontal`: Linterna frontal LED COB recargable USB.
- Anclas directas `#ficha-<id>` desde el componente `Etapas.astro`.
- Vinculación de vídeos reales de mantenimiento de la Honda CB250.
- Ranking «El orden» actualizado con las 9 familias calculadas y ponderadas.

### 3. Dossier técnico ampliado
- **Las marcas, una a una:** Incorporadas las referencias profesionales top solicitadas por el autor: **Milwaukee, DeWalt, Makita, Metabo y Facom**, junto a Parkside, Workzone, Bosch, Einhell, Stanley, Bahco y Knipex.
- **Taller vs. Casa:** La tabla económica que demuestra el ahorro neto por trabajo (aceite, pastillas, bujías, kit de arrastre, batería, filtros) y cómo la herramienta se paga sola.
- **Pares de apriete y dinamométricas:** Operaciones críticas, valores Nm de manual y rangos de dinamométrica recomendada (1/4", 3/8" y 1/2").
- **Errores y trampas típicas:** 5 trampas habituales del aficionado y las reglas de oro de taller para evitarlas.

### 4. Fotografía real y Open Graph
- Generadas las 10 fotografías cenitales en estilo catálogo sobre fondo papel kraft claro de taller.
- Generada la tarjeta social `og.png` (1200×630 px) para previsualizaciones en WhatsApp/Twitter/Telegram.
- Eliminados los antiguos placeholders SVG que decían "FOTO PENDIENTE".
- Tarjeta de la portada principal y del índice `/especiales` apuntando a `portada.jpg`.

### 5. Documentación
- Creado `docs/plans/pendientes-especial-taller.md` con la hoja de ruta integral.

---

## Para la próxima sesión (Mañana)

* **Montar la Ruta 2 (Etapa 2 · «Cuando ya te manchas las manos»):**
  - Desarrollar las 12 familias de la etapa 2:
    10. Carraca 1/2" y vasos grandes.
    11. Vasos largos, extensiones y junta cardán universal.
    12. Vasos Torx y puntas Allen de impacto.
    13. Dinamométrica grande (40–210 Nm).
    14. Dinamométrica pequeña (5–25 Nm).
    15. Extractores de tornillos pasados o partidos.
    16. Alicates para abrazaderas de manguitos.
    17. Kit de purga y sangrado de frenos.
    18. Multímetro digital (electricidad y batería).
    19. Calibre (pie de rey) y galgas de espesores.
    20. Tornillo de banco y banco de trabajo portátil.
    21. Bandeja de vaciado, embudos y bomba de trasvase.
  - Obtener / generar sus correspondientes fotografías.
  - Actualizar el ranking y los enlaces de `Etapas.astro`.
