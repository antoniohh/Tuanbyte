# Estado de sesión — 2026-10-13

Punto de arranque para mañana. La web está **en producción y al día**:
`origin/main` = HEAD (`4575320`) y `https://tuanbyte.es/` sirve el catálogo con
los títulos en español.

## Resumen del día

- **Release final v1.2.0** preparada: titular «El taller de Tuanbyte», meta
  título con los pilares, especiales mudados a `especiales.tuanbyte.es`,
  documentación del dominio y detalles de copy.
- **Marca aplicada**: escudo como favicon (48/96/180) y cabecera; tipografía de
  marca (Barlow 900, identificada del escudo) **solo** en el wordmark; banda
  roja de marca en el pie. Fuera el `>_` del placeholder.
- **Contenido real**: listas de reproducción del canal (scrape + fallback,
  mínimo 5 vídeos), 10 vídeos en el catálogo, regleta con fecha del último
  vídeo, edición «enero de 2016 → hoy · N años en YouTube».
- **Copy en español de España**, revisado término a término contigo.
- **Pie reinventado** (colofón: marca, sello de años, secciones, banda roja).
- **`LICENSE`** (texto legal CC BY 4.0 + atribución) y **`README.md`** con
  badges, arquitectura, árbol, puesta en marcha y versionado.
- **`CHANGELOG.md`** sobre la numeración real (los tags `v1.0.0`→`v1.0.7` ya
  existían en origin).
- **Rebuild diario** (cron `06:17 UTC`): vídeos y fecha se refrescan solos.
- **Títulos en inglés, resuelto**: YouTube servía los títulos autotraducidos
  porque el runner no declaraba idioma. Ahora todas las peticiones (scrape y
  feed) van con `Accept-Language: es-ES` y `PREF=hl=es&gl=ES`.
- **Cabecera móvil** rehecha (tira de 4 pestañas) y altura de escritorio
  restaurada (78 px).
- **Especiales**: marco limpio (descartado el canto que parecía descuadrado) y
  capturas sin la línea roja heredada.

## Pendiente mañana (por orden)

1. **Publicar la release**: commit + `git tag -a v1.2.0` + `git push && git
   push --tags`. Después, opcional: crear la *Release* en GitHub pegando la
   sección 1.2.0 del CHANGELOG. (El tag `v1.1.2` local se retiró: nunca se
   publicó y su contenido va dentro de la 1.2.0.)
2. **DNS de `tuanbyte.es`**: GitHub mostraba «DNS Check in Progress» y por eso
   Enforce HTTPS sigue bloqueado. Comprobar si ya está en verde y, si no:
   - Esperar el rechequeo (hasta 24 h).
   - Si GitHub pide un TXT de verificación, crearlo en Strato tal cual lo
     indique (`_github-pages-challenge-…`).
   - Refuerzo recomendado en el DNS: los **4 registros A**
     (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) y el **AAAA**
     (`2606:50c0:8000::153`).
   - Con el chequeo verde → marcar **Enforce HTTPS** (el certificado ya existe).
   Nota: el sitio ya funciona por HTTPS con candado; esto solo activa el
   redirect forzado.
3. Comprobar en la web publicada que los **títulos siguen en español** tras el
   próximo build del runner (hoy verificado: español ✅).

## Opcional aparcado (otra ronda)

- Analítica sin cookies (GoatCounter, un script).
- Enlazar `tuanbyte.es` en las descripciones de los vídeos en YouTube Studio.
- Nuevos especiales según `Especiales/docs/plans/ruta-nuevos-especiales.md`.

## Referencias rápidas

- Despliegue y DNS: `docs/info/despliegue-github-pages.md`
- Snapshot DNS: `docs/info/dns-snapshot-tuanbyte.md`
- Plan de la web: `docs/plans/web-landing-plan.md`
- Sistema de diseño: `DESIGN.md` · Producto: `PRODUCT.md`
- Sesión de OpenCode: "Tuanbyte — landing catálogo de barrio (v1.1.0)"
