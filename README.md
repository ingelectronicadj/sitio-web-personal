# diegomena.rocks — Sitio Web Personal y Portafolio

Sitio web personal, portafolio profesional y blog técnico de **Diego Mena** (Experto en Accesibilidad Digital — WCAG 2.2, Auditorías, Shift Left Testing e IA), desplegado en [diegomena.rocks](https://diegomena.rocks/).

- **Versión actual:** `2.5.0`
- **Despliegue:** Cloudflare Pages (estático generado con Node.js + EJS + esbuild)

---

## Arquitectura

```text
.
├── content/
│   └── blog/                  # Fuente declarativa de cada artículo (.json)
├── views/
│   ├── post.ejs               # Plantilla principal de artículo de blog
│   └── partials/
│       ├── head-post.ejs      # <head> con anti-FOUC, Open Graph y JSON-LD BlogPosting
│       ├── sidebar.ejs        # Barra lateral y controles compartidos (tema/idioma/fx)
│       └── scripts-post.ejs   # Carga de bundle JS + i18n del artículo + widget A11Y PRO
├── css/
│   ├── resume.css             # Estilos base, layout, cards glass y sistema de botones
│   ├── darkMode_v2.css        # Tokens y overrides de modo oscuro (html.dark)
│   ├── blog.css               # Estilos de artículos de blog y bloques de código
│   └── bundle.min.css         # [Generado] Bundle minificado único
├── js/
│   ├── ambient.js             # Constelación de accesibilidad (física A11Y PRO)
│   ├── cuelume.js             # Motor WebAudio de microinteracciones sonoras
│   ├── cuelume-init.js        # Bindings de sonido para enlaces, botones y controles
│   ├── scrolly.js             # Scrollytelling con GSAP + ScrollTrigger
│   ├── i18n.js                # Internacionalización ES / EN
│   ├── controls-init.js       # Inicialización de controles y observadores
│   └── bundle.min.js          # [Generado] Bundle JS minificado único
├── scripts/
│   └── build.js               # Pipeline: EJS -> HTML + esbuild CSS/JS + sitemap.xml
├── index.html                 # Página principal del portafolio
├── robots.txt                 # Directivas para buscadores y bots de citación IA
├── sitemap.xml                # [Generado] Mapa XML del sitio
└── llms.txt                   # Mapa estructurado para agentes y motores generativos
```

---

## Requisitos y comandos

- **Node.js** `>= 18` y **pnpm** `>= 10`

```bash
# Instalar dependencias (ejs + esbuild)
pnpm install

# Compilar plantillas EJS, sincronizar cards en index.html,
# generar css/bundle.min.css, js/bundle.min.js y sitemap.xml
pnpm run build

# Levantar servidor local en http://localhost:8901
pnpm run dev
```

---

## Cómo añadir un nuevo artículo al blog

1. Crear `content/blog/<slug>.json` siguiendo la estructura de los artículos existentes (`order`, `slug`, `i18nPrefix`, `pageTitle`, `ogTitle`, `cardTitle`, `titleHtml`, `metaDescription`, `dateLabel`, `datePublished`, `dateModified`, `excerpt`, `cardAria`, `image`, `bodyHtml`).
2. *(Opcional)* Añadir el archivo de traducción en `blog/js/<slug>-i18n.js` y las claves de tarjeta en `js/i18n.js`.
3. Ejecutar:
   ```bash
   pnpm run build
   ```
   Esto genera automáticamente `blog/<slug>.html`, inserta la tarjeta en `#blog` dentro de `index.html`, empaqueta CSS/JS y actualiza `sitemap.xml`.

---

## Accesibilidad y estándares

- Cumplimiento **WCAG 2.2 AA** verificado automáticamente con `axe-core` en modo claro y oscuro (desktop, tablet y móvil).
- Anillo de foco de doble capa (`#ffffff` + `#0055b3` / `#38bdf8`) compatible con **Forced Colors** (`outline: 3px solid transparent`).
- Respeto estricto a `prefers-reduced-motion: reduce` (desactiva GSAP, partículas y sonidos Cuelume) y control manual persistente (`#fxToggle`, WCAG 2.2.2).
- Prevención de FOUC de tema (`html.dark`) e idioma (`html.i18n-pending`) en `<head>` antes del primer pintado.
