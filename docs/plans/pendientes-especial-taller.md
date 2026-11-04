# Plan y tareas pendientes: Especial «El taller mínimo viable»

**Fecha de actualización:** 1 de noviembre de 2026  
**Ruta:** `/especiales/taller-minimo`  
**Estado:** Etapa 1 completa (9 fichas operativas) + Dossier ampliado (5 tablas técnicas) + Consent Mode v2 corregido.

---

## 1. Lo que ya está completado y operativo

1. **Etapa 1 al 100 % (Las 9 familias de arranque):**
   - 9 fichas desplegables con sus 6 especificaciones de taller, descripciones y precios:
     1. `vasos-38`: Juego de vasos 3/8" y carraca (ganadora del veredicto: 9,60).
     2. `llaves-combinadas`: Llaves combinadas 6–22 mm.
     3. `destornilladores`: Destornilladores plano, estrella y Pozidriv/JIS.
     4. `llaves-allen`: Llaves Allen en milímetros.
     5. `alicates`: Juego de alicates (universal, punta y corte).
     6. `llave-bujias`: Vaso/llave de bujías 16 y 21 mm con goma.
     7. `martillo-mazo`: Martillo de acero y mazo de nylon/goma.
     8. `gato-caballete`: Caballete trasero de moto o borriquetas de chasis para coche.
     9. `linterna-frontal`: Linterna frontal recargable USB para trabajo con manos libres.
   - Enlace ancla (`#ficha-<id>`) directo desde el componente `Etapas.astro` a cada una de las 9 fichas.
2. **Vídeos reales de Tuanbyte vinculados en las fichas:**
   - Vídeos de herramientas de Parkside, Workzone y Bosch.
   - Reparaciones y mantenimientos reales en la Honda CB250 (bujías NGK, zapatas traseras, kit de arrastre, tensado de cadena).
3. **El orden (Ranking ponderado):**
   - 9 filas calculadas según Uso (40 %), Desbloqueo (40 %) y Precio (20 %).
4. **Dossier técnico (5 tablas completas):**
   - *Las marcas, una a una* (Parkside, Workzone, Bosch verde/azul, Einhell, Stanley, Bahco, Knipex).
   - *Los tres presupuestos* (rutas de 100 €, 300 € y 600 €).
   - *Taller vs. Casa* (la cuenta del ahorro neto por operación y herramienta necesaria).
   - *Pares de apriete y dinamométricas* (valores de manual, rangos de llave 1/4", 3/8" y 1/2", avisos de taller).
   - *Errores y trampas típicas* (maletines de 200 piezas, llave inglesa en tornillos agarrotados, vasos de 12 caras, dinamométrica guardada tensada, tubo en la carraca).
5. **Consentimiento de Cookies y Consent Mode v2:**
   - Sincronizado en `<head>` con `localStorage` (`tb-consent`), idéntico al sistema validado en GlucoLuna.
   - Cero errores en Google Tag Assistant y compatibilidad con GA4.

---

## 2. Tareas pendientes (Hoja de ruta)

### Bloque A · Fotografía real y multimedia
* [x] **Imágenes reales de la Etapa 1 generadas e integradas** en `public/images/especiales/taller-minimo/`:
  - `portada.jpg`: Plano cenital del kit de arranque sobre fondo papel kraft.
  - `familia-vasos-38.jpg` (Carraca y vasos 3/8" cromo-vanadio)
  - `familia-llaves-combinadas.jpg` (Juego de llaves combinadas 6-22 mm)
  - `familia-destornilladores.jpg` (Juego plano, Phillips y Pozidriv)
  - `familia-llaves-allen.jpg` (Juego Allen métrico con punta de bola)
  - `familia-alicates.jpg` (Universal, punta larga y corte diagonal)
  - `familia-llave-bujias.jpg` (Vaso 16/21 mm y bujías NGK)
  - `familia-martillo-mazo.jpg` (Martillo de peña y mazo de nylon)
  - `familia-gato-caballete.jpg` (Caballete de basculante y borriquetas)
  - `familia-linterna-frontal.jpg` (Frontal recargable USB COB)
* [x] **Tarjeta Open Graph generada (`og.png` 1200×630 px)** para previsualización en WhatsApp, Twitter/X y Telegram.
* [ ] **Sustitución fotográfica final propia (opcional):** Tomar las fotos definitivas con las herramientas físicas reales del taller de Antonio cuando le sea posible.

---

### Bloque B · Contenido editorial adicional (Opcional)
* [ ] **Glosario técnico plegable (`<details>`):**
  - Añadir al final del reportaje un bloque de dudas frecuentes de taller:
    - *Cuadradillo (1/4", 3/8", 1/2")*: diferencias y aplicaciones.
    - *Vasos de 6 caras vs. 12 caras*: por qué los de 6 caras no redondean tuercas agarrotadas.
    - *Qué es un Newton-metro (Nm)*: explicación intuitiva de par de apriete.
    - *Phillips vs. Pozidriv vs. JIS*: por qué se trasroscan los tornillos de estrella.
* [ ] **Tabla Moto vs. Coche:**
  - Comparativa rápida de qué herramientas son compartidas y qué herramientas son exclusivas según el vehículo.

---

### Bloque C · Expansión del catálogo (Fases futuras)
* [ ] **Etapa 2 · «Cuando ya te manchas las manos» (Mecánica avanzada tradicional):**
  - Redacción de fichas e integración técnica:
    10. Herramienta de cadena (tronchacadenas / remachador) y llave de radios (moto).
    11. Extractores más comunes (extractor de garras 2-3 patas para rodamientos/poleas, extractor de volante magnético, extractores a izquierdas de tornillos partidos y extractor de rótulas).
    12. Carraca 1/2" y vasos grandes (ruedas, tuercas de embrague/eje/buje).
    13. Vasos largos, extensiones y vasos Torx / Allen de vaso.
    14. Dinamométrica grande (40–210 Nm).
    15. Dinamométrica pequeña de precisión (5–25 Nm).
    16. Kit de purga y sangrado de frenos.
    17. Calibre (pie de rey) y galgas de espesores (ajuste de válvulas y bujías).
    18. Tornillo de banco, bandejas de vaciado y embudos.
* [ ] **Etapa 3 · «El salto moderno: a batería y diagnosis electrónica»:**
  - Redacción de fichas e integración técnica:
    19. Llave de impacto a batería 1/2" («la de las tuercas», con vasos Cr-Mo de impacto).
    20. Taladro / atornillador a batería con percutor (taladrado, cepillos de alambre, brocas escalonadas).
    21. Carraca eléctrica compacta a batería (3/8" o 1/4" para vanos motor y trabajo rápido).
    22. Diagnosis OBD2 básica (adaptador Bluetooth/Wi-Fi + App móvil para códigos DTC y motor).
    23. Diagnosis avanzada multimarca (escáner autónomo con pantalla tipo Autel/Launch/Topdon para reseteo de servicios, freno de mano eléctrico, ABS, DPF y batería).
    24. Cargador / mantenedor inteligente de batería y multímetro automotriz.

---

### Bloque D · Cierre de versión y publicación
* [x] Actualizar `CHANGELOG.md` documentando la versión **v1.5.0** (Especial «El taller mínimo viable»), **v1.5.1** (SEO trailing slash) y **v1.5.2** (Consent Mode v2 regional).
* [x] Actualizar versión en `package.json` a `1.5.2`.
* [x] Crear tag git `v1.5.0` y `v1.5.1`.
* [ ] `git push origin main` para desplegar en producción.
