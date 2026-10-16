# Changelog

## [2.2.0] - 2026-10-15

### Removed

- Artefactos de la PWA heredada eliminados (`manifest.json`,
  `offline.html`, `img/pwa/` y metadatos `apple-touch-*`/registro del SW en
  `index.html`). `sw.js` se reemplaza por un worker de auto-desregistro que
  borra todos los `caches`, llama `registration.unregister()` y recarga las
  pestanas abiertas; `js/controls-init.js` desregistra cualquier SW residual
  al cargar.

### Added

- Variantes `*-dark.webp` generadas con Pillow para los cinco logos que
  perdian contraste en modo oscuro (Dokuma, UNAB, Fundacion Neumologica,
  Alcaldia de Medellin y Assersum): isotipos a color intactos, texto oscuro
  convertido a claro y fondos blancos opacos recortados. Cableadas con el
  patron `theme-logo--light` / `theme-logo--dark`.

### Changed

- Menu superior `#navbar ul.horizontal` integrado al sistema **Glass Pill**
  (`--btn-*`): capsula flotante con items pill internos (`border-radius:
  999px`), alineacion exacta en columna sobre `.events-carousel-wrapper` y
  `20px` de separacion vertical limpia (`section#welcome-section.resume-section
  { padding-top: 5rem }` + `#welcome-section > .my-auto { margin-top: 0 }`).
- Alineacion al centro de logos, cargos (`h3`), empresa (`.subheading`),
  fechas (`.resume-date`) y enlaces de certificados en las cards de
  experiencia en vista movil (`<= 767.98px`).
- Boton pause/play de carrusel (`.slick-autoplay-toggle-button`): glifos
  emoji del sistema reemplazados por iconos vectoriales Font Awesome 5
  (`\f04c` / `\f04b`) centrados con posicion absoluta respecto al circulo
  `38x38px`.

### Fixed

- Boton de cambio de idioma (`#langToggle`) no disparaba `i18n.changeLang`
  porque `const i18n` no exponia `window.i18n` al empaquetarse con
  `controls-init.js`.
- Desfase vertical de `16px` entre `.hero-cv-btn` y `.social-icons a`
  causado por tween redundante `y: 16` en `js/scrolly.js` en conflicto con
  `transition: transform !important`.
- Flecha de `.ir-arriba` en modo oscuro usaba `#0a0a1a` heredado sobre fondo
  glass oscuro; actualizada a `var(--btn-fg)` (`#38bdf8`) en reposo y
  `var(--btn-hover-fg)` en `:hover`.
- `#navbar` perdia `position: fixed` por la regla posterior `main, #navbar {
  position: relative }` y provocaba scroll horizontal; `<nav>` interno del
  sidebar en modo oscuro recibia fondo `#070714`.
- Anillo de foco `:focus-visible` aplastado por `box-shadow !important` de
  componentes con mayor especificidad; regla final elevada a selectores con
  ID y `:focus` retirado de las reglas `:hover` (patron doble-anillo A11Y
  PRO: separacion + blanco + azul/cyan en ambos temas).
- Menu movil: `.navbar-toggler` quedaba `22px` descentrado y `6.4px` mas
  alto que los `.ctrl-btn`; ahora posicionado absoluto con `top: 8px` y
  `.toogleContainer { margin: 0 auto }` centrado con "DIEGO MENA".
- Contraste del icono hamburguesa y del texto `ES` en modo oscuro: `html.dark
  span` los forzaba a `#f9fafb` sobre hover cyan; ahora usan
  `var(--btn-fg)`/`var(--btn-hover-fg)` (10.4:1 sobre `#38bdf8`).
- `.side-nav-canvas` se estiraba 6.8x al abrir el menu movil; oculto en
  `<= 991.98px` y fondo opaco restaurado en `#navbarSupportedContent`.
- Glifo de pause/play descentrado por caja `:before` fija de `20x20px`;
  ahora `width/height: auto` + `translate(-50%, -50%)`.
- Cards moviles pegadas al borde: padding lateral de seccion a `1.5rem`,
  padding interno a `1.35rem` y `translateX` de `.is-in-view`/`:hover`
  desactivado en `<= 991.98px`.

## [2.1.0] - 2026-10-15

### Added

- Pipeline de compilacion con Node.js, EJS y esbuild (`scripts/build.js`,
  `package.json`):
  - Plantillas compartidas en `views/post.ejs` y
    `views/partials/{head-post,sidebar,scripts-post}.ejs`.
  - Fuente declarativa por articulo en `content/blog/*.json` que genera
    `blog/<slug>.html`, las tarjetas de `#blog` en `index.html` y
    `sitemap.xml`.
  - Bundles minificados `css/bundle.min.css` y `js/bundle.min.js`.
- Script compartido `js/controls-init.js` para controles de tema, idioma,
  menu movil y observadores de viewport.
- Sistema unificado de botones **Glass Pill** (`--btn-*`): misma geometria
  circular `44x44px` (`border-radius: 999px`) para `.ctrl-btn`,
  `.navbar-toggler`, `.social-icons a`, `.slick-prev/.slick-next`,
  `.ir-arriba` y paginacion, mas variante pill para `.hero-cv-btn`,
  `.research-link-chip`, `.diploma-label` y `.back-btn`.
- `README.md` con documentacion de arquitectura, comandos y flujo para
  publicar nuevos articulos.

### Changed

- `js/ambient.js` reescrito con la fisica de `hero-anim.js` de la landing de
  A11Y PRO: friccion `0.992` (en reposo la red solo respira ~3px alrededor de
  cada ancla), alpha de lineas graduado por distancia, hilos nodo->cursor,
  halo progresivo, ondas al hacer clic y micro-glifos de accesibilidad en
  los margenes laterales; soporte `devicePixelRatio` y bloqueo de re-seed en
  cambios de barra de URL movil.
- Reubicacion UI/UX del Hero: redes sociales y boton pill "Hoja de vida en
  PDF" integrados dentro del bloque de identidad junto a email y telefono con
  iconos; ancho de `.welcome-header-row` alineado al 100% con `.about-card`.
- Introduccion de Habilidades y parrafos de Intereses envueltos en
  `.about-card` translucida.
- Tamano de logos de empresas (`.company-logo`) ampliado a `68px` alto /
  `210px` ancho max en desktop y tablet (`76px / 220px` en movil) y
  miniaturas de diplomas a `165px` (`185px` en movil).
- Foto de perfil en tablet/movil limitada a `max-width: 180px` con anillo
  cyan.

### Fixed

- Boton `.ir-arriba` habia perdido `position: fixed` por la regla de
  stacking `position: relative`; restaurado a flotante (`bottom: 92px`) con
  `aria-label` e i18n.
- Flecha `.slick-prev/.slick-next` desaparecia al salir de `:hover` tras
  hacer clic (retenia `:focus` con icono blanco sobre fondo blanco).
- `aria-hidden-focus` en slides inactivos de Slick durante transiciones
  `fade` (`beforeChange` sincroniza `aria-hidden` y `tabindex="-1"`).
- Contraste del titular `h1` al hacer scroll: removida la reduccion de
  opacidad del parallax en `js/scrolly.js`.
- Contraste de `code` inline y enlaces `.text-info` en articulos de blog en
  ambos temas.
- Typo en Intereses (`"siempre ha estado guiada"`) y espacio antes de punto
  en Proyectos (`GitHub.`).

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
