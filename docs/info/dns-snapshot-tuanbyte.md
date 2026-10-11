# Backup de la zona DNS de `tuanbyte.es`

Snapshot real tomado el 2026-10-12 vía `dig`, **antes** de tocar nada.
Este es el estado "todo en Strato" al que se vuelve si hay arrepentimiento.
(Comprobado de paso: no hay ni SPF ni registros personalizados — solo los de
serie de Strato.)

## Registros actuales

| Registro | Valor |
|---|---|
| `A` @ (raíz) | `81.169.145.68` |
| `AAAA` @ (raíz) | `2a01:238:20a:202:1068::` |
| `MX` @ | `5 smtp.rzone.de.` |
| `TXT` `_dmarc` | `v=DMARC1;p=reject;` |
| `TXT` `strato-dkim-0002._domainkey` | DKIM RSA (clave pública de Strato, autogenerada) |
| `TXT` `strato-dkim-0003._domainkey` | DKIM ed25519 (autogenerada) |
| `NS` | `docks03.rzone.de.` y `shades12.rzone.de.` (nameservers de Strato) |
| `CNAME` `www` | `tuanbyte.es.` (alias implícito de Strato, no visible en el panel) |

## Cómo volver atrás si se usa GitHub Pages y se arrepiente

**Estado "GitHub"** (el que se pondría en el lanzamiento):
`A` raíz → `185.199.108.153` (+ `AAAA` raíz → `2606:50c0:8000::153`).

**Vuelta atrás (tras volver de GitHub a Strato):**

1. Panel de Strato → dominio `tuanbyte.es` → **Configuración de DNS**.
2. **Registro A → administrar** → "Dirección IP propia" → poner de nuevo:

   ```
   81.169.145.68
   ```

3. Si se había editado el AAAA, restablecerlo a:

   ```
   2a01:238:20a:202:1068::
   ```

   (o quitarlo: el A solo funciona; el AAAA solo mientras GitHub esté activo).
4. Esperar la propagación (minutos–horas). La web de Strato vuelve a servirse.

**No hay riesgo para el correo:** los MX (`smtp.rzone.de`) no se tocan con el
cambio del A; el email sigue igual mientras solo se muevan A/AAAA.

**Plan C (nuclear):** el panel de Strato tiene la función "Restablecer los
ajustes de las DNS", que borra *todos* los registros y vuelve a los valores
de serie de Strato. En este dominio es segura — los registros actuales ya son
todos de serie (nada personalizado que perder). No usarla si algún día se
añaden registros propios.

## Nota sobre el aviso de "cambio irreversible"

Strato marca el cambio de A como irreversible porque **no existe un botón
"deshacer"**: una vez puesto tu propio IP, el panel no "recupera" el estado
anterior con un clic — se vuelve re-introduciendo los valores de esta tabla
(o con el restablecimiento total del plan C). Los datos de tu hosting en
Strato (la web vieja, los ficheros) **no se pierden nunca** al cambiar el A:
siguen en el servidor; sólo la resolución de nombres deja de apuntar allí
mientras el A apunte a GitHub.
