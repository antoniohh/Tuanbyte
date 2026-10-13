# Despliegue a GitHub Pages — `tuanbyte.es`

Guía de publicación de la web de Tuanbyte en **GitHub Pages** con dominio
propio. Complementa el plan `docs/plans/web-landing-plan.md`.

Estado: **resuelto y en producción** (13/10/2026). Este documento explica la
configuración final, por qué es así y cómo verificarla.

---

## 1. Configuración final (la que hay hoy)

### DNS en Strato

| Nombre | Tipo | Valor | Para qué |
|---|---|---|---|
| `tuanbyte.es` | **A** | `185.199.108.153` | Sirve el sitio en el raíz |
| `tuanbyte.es` | **AAAA** | `2606:50c0:8000::153` | Lo mismo por IPv6 |
| `www.tuanbyte.es` | **CNAME** | `antoniohh.github.io.` | Alias directo a Pages |

Solo hace falta esos tres registros. GitHub publica cuatro A y cuatro AAAA
(108–111 / ::153–::156) por redundancia; con uno de cada ya funciona, y se
pueden añadir después sin romper nada.

> **La clave de todo:** el `www` apunta **directo a `antoniohh.github.io`**, no
> al raíz. Es lo que permite que GitHub emita un certificado que cubre **los dos
> nombres** (`DNS:tuanbyte.es, DNS:www.tuanbyte.es`).

### GitHub Pages (repo → Settings → Pages)

- **Build and deployment → Source: `GitHub Actions`**.
- **Custom domain: `tuanbyte.es`** — el raíz, que es el dominio canónico.
  (No poner `www` aquí: rompería el candado del raíz.)
- **Enforce HTTPS: activado** → todo `http://` redirige a `https://`.

Resultado: quien entre por `tuanbyte.es` o por `www.tuanbyte.es` acaba en
`https://tuanbyte.es/` con candado. **No se paga SSL a Strato**: el
certificado lo emite GitHub (Let's Encrypt) y se renueva solo.

---

## 2. Por qué es así (los tres tropiezos, resueltos)

1. **El `www` de Strato es un alias implícito.** Strato resuelve el `www.` de
   los dominios que aloja sin listarlo como subdominio editable
   (`www → CNAME → raíz → IP de Strato`). Mientras el `www` apunte al raíz,
   GitHub no puede reclamarlo para el certificado: el `https://www` sirve el
   certificado genérico `*.github.io` y salta el aviso del navegador.
   **Solución:** crear el subdominio `www` explícito en Strato y ponerle
   `CNAME → antoniohh.github.io.`.
2. **El raíz no admite CNAME.** Es una limitación del DNS, no de Strato: para
   la raíz se usan registros **A** (y AAAA). De ahí la combinación A-para-el-
   raíz + CNAME-para-el-www.
3. **Cada cambio de dominio reinicia el chequeo.** Al re-guardar el dominio en
   *Pages*, GitHub vuelve a poner "DNS Check in Progress" y bloquea el botón
   *Enforce HTTPS* hasta terminar (de minutos a 24 h). Si el chequeo se repite
   tras un fallo, GitHub puede pedir un **TXT de verificación**
   (`_github-pages-challenge-…`) que se crea en Strato tal cual lo indique.

Extra aprendido en el camino: el `404 Failed to create deployment` del primer
despliegue significa que *Pages* aún no está activado con Source =
`GitHub Actions`; se arregla activándolo y re-ejecutando el job.

---

## 3. Verificación (comandos)

```bash
# DNS
dig +short A tuanbyte.es                    # esperado: 185.199.108.153
dig +short AAAA tuanbyte.es                 # esperado: 2606:50c0:8000::153
dig +short CNAME www.tuanbyte.es            # esperado: antoniohh.github.io.

# Certificado (debe incluir los dos nombres)
echo | openssl s_client -connect tuanbyte.es:443 -servername tuanbyte.es 2>/dev/null \
  | openssl x509 -noout -ext subjectAltName
# esperado: DNS:tuanbyte.es, DNS:www.tuanbyte.es

# Comportamiento
curl -sI https://tuanbyte.es/ | head -1        # 200
curl -sI https://www.tuanbyte.es/ | head -4    # 301 → https://tuanbyte.es/
curl -sI http://tuanbyte.es/ | head -4         # 301 → https://tuanbyte.es/ (Enforce HTTPS)
```

---

## 4. Publicación

Cada `push` a `main` compila y publica. Además hay un **rebuild diario
programado** (cron `06:17 UTC`) para refrescar los vídeos y la fecha de
edición aunque no se toque el repositorio.

Rutina normal: `git add -A && git commit -m "…" && git push`.

---

## 5. Volver atrás (si hiciera falta)

Los valores originales de la zona DNS (todo apuntando al hosting de Strato)
están guardados en `docs/info/dns-snapshot-tuanbyte.md`. Strato no ofrece un
botón de "deshacer": se vuelve re-introduciendo aquellos valores en su panel.
El correo no corre riesgo mientras solo se toquen A/AAAA y CNAME del `www`
(los MX van aparte).
