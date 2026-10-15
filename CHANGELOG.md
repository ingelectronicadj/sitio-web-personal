# Changelog

## [2.0.0] - 2026-10-15

### Added

- Fondo ambiente animado con canvas: starfield + nebulosas en modo oscuro,
  red de particulas azules en modo claro, particulas blancas en sidebar,
  atraccion suave al puntero (`js/ambient.js`).
- Microinteracciones de sonido Cuelume (misma libreria de A11Y PRO):
  hover/press/toggle en enlaces y controles (`js/cuelume.js`,
  `js/cuelume-init.js`).
- Animaciones GSAP + ScrollTrigger: entrada del hero, reveals por scroll,
  barra de progreso (`js/scrolly.js`).
- Tres controles de utilidad en el sidebar: tema claro/oscuro, idioma ES/EN
  y pausa de microinteracciones (`#themeToggle`, `#langToggle`, `#fxToggle`).
- Tarjeta translucida para la bio "Acerca de mi" (`.about-card`).
- SEO/GEO/AEO: `canonical`, Open Graph `article` y JSON-LD `BlogPosting` en
  las tres paginas de blog; bots de cita de IA explicitos en `robots.txt`;
  `sitemap.xml` con `lastmod` actualizado.
- `CHANGELOG.md`.

### Changed

- Paleta teal/verde migrada a azul A11Y PRO (`#0055b3`, `#38bdf8`,
  `#0a0a1a`) en `resume.css`, `darkMode_v2.css`, `blog.css`,
  `accessible-slick-theme.min.css`, `manifest.json` y `offline.html`.
- Clase de tema movida de `body.dark` a `html.dark` + script temprano en
  `<head>`: elimina el flash claro/oscuro y el salto ES->EN al recargar
  (`i18n-pending`).
- Sidebar: gradiente navy, foto con anillo cyan, enlaces pill, controles
  glass.
- Cards: panel translucido + blur + franja lateral de 3px que enciende en
  hover/foco; experiencia sin riel vertical.
- Menu superior dark: pill glass flotante en vez de barra plana.
- Anillo de foco estilo A11Y PRO: doble separador blanco + anillo de marca
  (azul en claro, cyan en oscuro), resistente a Forced Colors.
- Blog: contenido en card glass, boton volver tipo pill, bloques de codigo
  navy, jQuery por CDN (vendor local removido).
- Dots decorativos del carrusel fuera del orden de tabulacion
  (`tabindex="-1"`).

### Fixed

- `aria-prohibited-attr` en el switch de tema (aria movido al input).
- `label-content-name-mismatch` en `#langToggle` (nombre incluye ES/EN
  visible) y enlaces de hitos.
- Contraste de enlaces `.text-info` y `.blog-code-title` en blog.
- Anillo de foco recortado por `overflow: hidden` del menu horizontal.
- Canvas ambiente invisible por `z-index: -1` bajo el fondo propagado de
  `body`; contenido elevado a `z-index: 1`.
- Bloques planos `#070714` sobre el gradiente del sidebar en modo oscuro.
