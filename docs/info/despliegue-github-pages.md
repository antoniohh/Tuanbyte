# Despliegue a GitHub Pages — `www.tuanbyte.es`

Guía para publicar la web de Tuanbyte en **GitHub Pages** con el dominio
propio. Complementa el plan `docs/plans/web-landing-plan.md`.

## 0. Antes de empezar: qué dominio usará la web

La web acabará sirviéndose en `https://tuanbyte.es/` (raíz) con
`www.tuanbyte.es` como alias automático — ver sección 3: Ruta B. Durante el
desarrollo y hasta el lanzamiento no se toca nada del DNS: la landing actual
de Strato sigue en pie.

---

## 1. Lo que hay que hacer en el repo

1. **`public/CNAME`** (o archivo `CNAME` en la raíz del build): una línea
   con el dominio principal:

   ```
   tuanbyte.es
   ```

   GitHub sirve el sitio en ese dominio y redirige el `www` alias hacia él.
2. **Workflow de despliegue**: `.github/workflows/deploy.yml`
   (checkout → setup-node → npm ci → npm run build →
   `actions/upload-pages-artifact` → `actions/deploy-pages`).
   Referencia a copiar: el repo `antoniohh/Especiales`, que ya funciona.
3. Inicializar el proyecto web con el stack elegido (ver plan) y asegurarse
   de que `npm run build` genera el sitio estático en una carpeta
   (`dist/` para Astro y para Vite).

---

## 2. Activar Pages en GitHub (solo la primera vez)

1. Repo `antoniohh/Tuanbyte` → **Settings** → menú izquierdo → **Pages**.
2. **Build and deployment → Source: "GitHub Actions"** (no
   "Deploy from a branch").
3. **Custom domain**: `tuanbyte.es` → **Save**.
4. Push a `main` y esperar a que el workflow termine en verde en **Actions**.

Nota: el error `Failed to create deployment (status: 404)` del primer intento
ocurre si Pages sigue sin activar con Source = GitHub Actions. Nada más que
re-ejecutar el job (*Re-run failed jobs*) tras activarlo.

---

## 3. DNS en Strato para el subdominio www

Descubrimiento importante (comprobado por DNS): **Strato no lista el `www` en
"Mostrar subdominios" pero sí lo resuelve** — es un alias implícito:

```
www.tuanbyte.es → CNAME → tuanbyte.es → 81.169.145.68 (hosting Strato)
```

Por eso parece que "www ya existe por defecto": Strato responde el `www.`
de los dominios que aloja mediante ese alias interno, no editable. El raíz
(`tuanbyte.es`) no admite CNAME (limitación del DNS), solo registros A/AAAA.

### Ruta A — raíz a GitHub (recomendada, para el día del lanzamiento)

Cuando la web nueva esté lista y publicada en GitHub:

1. Dominio `tuanbyte.es` → Configuración de DNS → **Registro A →
   administrar → "Dirección IP propia"** → `185.199.108.153`
2. Añadir si el panel lo permite el **AAAA** →
   `2606:50c0:8000::153`.

Como el `www` implícito es un CNAME hacia el raíz, **sigue al raíz
automáticamente**: ambas URLs resuelven a GitHub sin tocar el www ni crear
subdominios. En **Settings → Pages**, el dominio `tuanbyte.es` es el
principal: GitHub redirige www ↔ raíz al principal.

⚠️ Este paso es el "lanzamiento": la landing vieja de Strato deja de
servirse en el raíz. Es lo esperado, pero hacerlo solo con la web nueva ya
publicada en GitHub.

### Ruta B — crear subdominio `www` explícito (alternativa)

Si se prefiriera servir la web desde `www` (por ejemplo, para no tocar el
raíz todavía):

1. **Mostrar subdominios** → **crear subdominio** `www`. Strato sustituye el
   alias implícito por uno real y editable.
2. Seleccionar `www` → **Configuración de DNS** → CNAME-Record →
   "Modificar la entrada CNAME" → valor `antoniohh.github.io.` (con punto
   final) → "Soy consciente…" → **Aceptar ajustes**.
3. En la sección 1, el `CNAME` del repo pasaría a decir `www.tuanbyte.es`.
4. En ese caso la web vive en `www.tuanbyte.es` y el raíz queda como esté
   (parking/Strato).

Extra de la Ruta B: no rompe nada mientras se hace — el raíz sigue
sirviendo la web vieja de Strato hasta el lanzamiento final.

---

## 4. El dominio raíz `tuanbyte.es` (sin www) — ver Ruta B de la sección 3

El DNS no permite CNAME en la raíz; se resuelve con registros A/AAAA. El raíz
no necesita gestión adicional: al poner sus A/AAAA hacia GitHub (Ruta B), el
`www` implícito lo sigue y GitHub redirige entre ambos al dominio principal.

En **Settings → Pages**, marcar **Enforce HTTPS** cuando el "DNS check" esté
en verde. El certificado SSL lo genera GitHub (Let's Encrypt), autorenovable —
**no hay que pagar SSL a Strato**.

---

## 5. Comprobación final

- `https://tuanbyte.es/` — la web nueva.
- `https://www.tuanbyte.es/` — sirve lo mismo / redirige al raíz.
- Candado del navegador en verde.

## 6. Rutina de publicación

```bash
git add -A
git commit -m "cambio"
git push
```

El workflow recompila y publica en minutos.

---

## Referencias

- Guía resuelta en `Especiales/docs/info/despliegue-github-pages.md`
  (mismo flujo, ya en producción).
- Strato: el CNAME solo se configura en subdominios; el registro A sí admite
  dominio y subdominio con "Dirección IP propia".
- GitHub: `docs.github.com/es/pages` — dominios personalizados y Enforce HTTPS.
