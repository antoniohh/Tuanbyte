# Plan: Especial «El entorno del programador web moderno»

> **De máquina limpia a producción: Sistema Operativo, PHP, Node.js, herramientas de código y agentes de IA.**

Cuarto gran reportaje especial del catálogo de **Tuanbyte**.  
Va dirigido tanto a desarrolladores noveles como a programadores con experiencia que quieren una guía definitiva, probada y sin rodeos para configurar una estación de trabajo rápida, limpia y moderna para desarrollo web profesional.

---

## 1. La filosofía del reportaje
* **Cero recetas mágicas que rompen dependencias:** Nada de tutoriales obsoletos que te dicen que instales con `sudo apt install php` genérico y luego no puedes cambiar de versión. Todo con gestores de versiones limpios (`fnm`, `mise`, `ondrej/php`, `docker`).
* **Enfoque profesional y pragmático:** El stack de trabajo real que se usa hoy para desarrollar aplicaciones backend y frontend (PHP moderno con Laravel/Symfony + Node/TypeScript con Vite/Next/Astro).
* **La IA como copiloto real:** La inteligencia artificial integrada en el flujo diario (asistentes, agentes en terminal, refactorización y testing asistido), no como truco de magia, sino como multiplicador de productividad.

---

## 2. Estructura de la guía: Las 5 Etapas del Setup

### Etapa 1 · El Sistema Operativo y la Terminal (Los cimientos)
1. **Elección del Sistema Operativo:**
   - Linux nativo (Ubuntu LTS / Debian / Fedora) como el entorno ideal de producción.
   - macOS para desarrollo multiplataforma.
   - Windows 11 + WSL2 (Ubuntu) configurado correctamente sin caídas de rendimiento en el sistema de archivos (`/home/` vs `/mnt/c/`).
2. **Terminal moderna y productiva:**
   - Emulador de terminal: Ghostty, WezTerm, Alacritty o Windows Terminal.
   - Shell moderno: Zsh + Starship prompt (o Fish).
   - Utilidades de consola que ahorran horas: `ripgrep` (`rg`), `fzf` (búsqueda interactiva), `bat` (cat con sintaxis), `eza` (ls moderno), `zoxide` (navegación instantánea de directorios).
3. **Control de versiones (Git):**
   - Configuración global de identidad, clave SSH (ed25519) para GitHub/GitLab.
   - Firma criptográfica de commits (GPG o SSH commit signing).
   - `.gitignore` global para no subir `.DS_Store`, carpetas `.idea` o `.vscode` a repositorios compartidos.

---

### Etapa 2 · El Entorno PHP (Backend moderno y robusto)
1. **Gestión multiversión de PHP:**
   - Instalación mediante PPA de Ondřej Surý en Debian/Ubuntu o `mise/asdf`.
   - Coexistencia de PHP 8.2, 8.3 y 8.4 sin conflictos (`update-alternatives`).
   - Extensiones críticas indispensables: `pdo_mysql`, `pdo_sqlite`, `curl`, `mbstring`, `xml`, `zip`, `gd`, `intl`, `redis`, `bcmath`.
2. **Gestión de paquetes y herramientas:**
   - Composer: instalación segura global, acelerador de descargas y optimizador de autoloader (`composer dump-autoload -o`).
3. **Entorno local de ejecución y servidores:**
   - Servidor web y servidores de aplicaciones modernos: Nginx + PHP-FPM, FrankenPHP (el servidor de alto rendimiento basado en Caddy) y RoadRunner.
   - Soluciones locales ágiles: Laravel Herd (en Linux/macOS) o contenedores con Docker Sail.
   - Depuración: configuración básica de Xdebug con VS Code / PhpStorm.

---

### Etapa 3 · El Entorno JavaScript / TypeScript (Node.js & Ecosistema)
1. **Gestor de versiones de Node.js:**
   - Por qué evitar instalar Node con `apt` (paquetes congelados y permisos rotos).
   - Uso de `fnm` (Fast Node Manager en Rust) o `nvm`: cambio instantáneo de versiones con `.nvmrc` por proyecto.
2. **Gestores de paquetes modernos:**
   - `pnpm` (el más rápido y eficiente en disco mediante enlaces duros) vs `npm` nativo y `bun`.
   - Configuración de `corepack` para fijar versiones de gestores en equipo.
3. **Runtimes y empaquetadores actuales:**
   - Node.js LTS (Active LTS) como estándar de estabilidad.
   - Bun como runtime ultrarrápido para scripts locales, tests y ejecución de utilidades.
   - Vite y TypeScript como la base universal para proyectos frontend y full-stack.

---

### Etapa 4 · Editores de Código y Entornos de Desarrollo (IDEs)
1. **Visual Studio Code (La referencia universal):**
   - Perfil optimizado y limpio de extensiones:
     - PHP: *PHP Intelephense*, *PHP CS Fixer*, *PHPUnit*.
     - JS/TS: *ESLint*, *Prettier*, *Tailwind CSS IntelliSense*.
     - General: *GitLens*, *Docker*, *Error Lens*.
   - Tipografía con ligaduras técnicas de programación: *JetBrains Mono*, *Fira Code* o *Geist Mono*.
2. **PhpStorm (Para proyectos grandes de empresa):**
   - Ventajas en refactorización profunda, análisis estático y base de datos integrada.
3. **Alternativas de terminal / alto rendimiento:**
   - Neovim con LazyVim para desarrolladores que no quieren levantar las manos del teclado.

---

### Etapa 5 · La Inteligencia Artificial en el Flujo de Trabajo
1. **Asistentes de código integrados en el editor:**
   - Cursor / Windsurf / GitHub Copilot: autocompletado multilínea contextual.
2. **Agentes y herramientas de línea de comandos (CLI):**
   - Uso de asistentes en terminal (Antigravity CLI `agy`, Aider, Claude Code) para refactorizaciones de repositorio completo, creación de tests y documentación.
3. **Buenas prácticas con IA para desarrolladores:**
   - Cómo redactar prompts técnicos que no inventen APIs (dar contexto del framework y versiones).
   - Generación guiada de tests unitarios (Pest / PHPUnit para PHP, Vitest / Jest para Node).
   - Auditoría de seguridad: pedir a la IA que revise inyecciones SQL, XSS o fugas de tokens antes de hacer push.

---

### Etapa 6 · Contenedores, Base de Datos y Despliegue
1. **Docker y Docker Compose:**
   - Levantar MySQL, PostgreSQL, Redis y Mailpit (servidor SMTP de prueba) en un fichero `compose.yaml` sin instalar servicios pesados en el host.
2. **Puesta en producción básica:**
   - Configuración de servidor VPS (Ubuntu Server) con SSH protegido (puerto no estándar, disable root login).
   - Cortafuegos `ufw` y certificados SSL automáticos con Certbot / Let's Encrypt.
   - Despliegue automatizado con GitHub Actions (CI/CD básico).

---

## 3. Formato del especial
* **URL:** `/especiales/setup-programador-web`
* **Estructura visual:** Idéntica al sistema de especiales de Tuanbyte (Portada, Veredicto con las reglas de oro de un entorno limpio, Etapas desplegables, Ranking multicriterio de herramientas y Dossier técnico con comandos exactos y tablas comparativas).
* **Material audiovisual:** Enlaces a vídeos de configuración, comandos terminales y pruebas de rendimiento.
