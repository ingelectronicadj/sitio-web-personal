/**
 * Diccionario de traducciones específico para el artículo "A11Y PRO Tests: 21 inspectores WCAG 2.2 en un bookmarklet bilingüe".
 * GENERADO por scripts/build.js - editar content/blog/a11y-pro-tests-bookmarklets.json y .body.html
 */
(function() {
  const blog7Translations = {
    es: {
      "blog7-page-title": "A11Y PRO Tests: 21 bookmarklets WCAG 2.2 - Diego Mena",
      "article7-p1": "Gran parte de los criterios WCAG no puede verificarlos un motor automático: requieren interacción, zoom, redimensión o navegación por teclado. A11Y PRO Tests empaqueta 21 inspectores de esos criterios \"manuales\" en un único bookmarklet bilingüe que se ejecuta sobre cualquier página, sin instalar nada ni depender de permisos de extensión.",
      "article7-h2-1": "Por qué un bookmarklet",
      "article7-p2": "Un bookmarklet es JavaScript guardado como favorito: se ejecuta en el contexto de la página actual, con los mismos permisos que el propio documento. Esto permite inyectar sondas de inspección incluso en entornos donde las extensiones están bloqueadas por políticas corporativas, una limitación real en auditorías sobre portales bancarios y gubernamentales.",
      "article7-h2-2": "Los 21 inspectores",
      "article7-p3": "La suite cubre las verificaciones manuales más costosas de WCAG 2.2: simulación de Zoom al 200% (1.4.4), Reflow a 320px (1.4.10), contraste de texto y de componentes UI (1.4.3 / 1.4.11), trazado visual del orden de foco incluyendo el criterio de no ocultamiento del foco (2.4.11), medición de tamaño de objetivo 2.5.8 y monitorización de regiones aria-live en tiempo real.",
      "article7-h2-3": "Laboratorio en vivo",
      "article7-p4": "El proyecto incluye un laboratorio en <a href=\"https://tests.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">tests.a11ypro.tech</a> donde cada inspector puede probarse sobre páginas deliberadamente accesibles e inaccesibles. Es a la vez una herramienta de auditoría y un entorno de formación para aprender a reconocer cada criterio en contexto.",
      "article7-h2-4": "Bilingüe y sin instalación",
      "article7-p5": "Todos los inspectores operan en español e inglés y emiten reportes que el auditor puede anexar a sus matrices de hallazgos. Al ser un favorito del navegador, la barrera de adopción es cero: arrastrar el enlace a la barra de marcadores y ejecutar.",
      "article7-p6": "El repositorio es open source en <a href=\"https://gitlab.com/a11ypro/a11y-pro-tests\" target=\"_blank\" rel=\"noopener noreferrer\">gitlab.com/a11ypro/a11y-pro-tests</a>."
    },
    en: {
      "blog7-page-title": "A11Y PRO Tests: 21 WCAG 2.2 bookmarklets - Diego Mena",
      "article7-p1": "A large share of WCAG criteria cannot be verified by an automated engine: they require interaction, zoom, resizing or keyboard navigation. A11Y PRO Tests packages 21 inspectors for those \"manual\" criteria into a single bilingual bookmarklet that runs on any page, with nothing to install and no extension permissions required.",
      "article7-h2-1": "Why a bookmarklet",
      "article7-p2": "A bookmarklet is JavaScript saved as a favorite: it runs in the context of the current page, with the same permissions as the document itself. This allows injecting inspection probes even in environments where extensions are blocked by corporate policies, a real limitation when auditing banking and government portals.",
      "article7-h2-2": "The 21 inspectors",
      "article7-p3": "The suite covers the most costly manual WCAG 2.2 verifications: 200% Zoom simulation (1.4.4), 320px Reflow (1.4.10), text and UI component contrast (1.4.3 / 1.4.11), visual focus-order tracing including the focus-not-obscured criterion (2.4.11), target size measurement 2.5.8 and real-time aria-live region monitoring.",
      "article7-h2-3": "Live laboratory",
      "article7-p4": "The project includes a lab at <a href=\"https://tests.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">tests.a11ypro.tech</a> where each inspector can be tried on deliberately accessible and inaccessible pages. It is both an audit tool and a training environment for learning to recognize each criterion in context.",
      "article7-h2-4": "Bilingual and install-free",
      "article7-p5": "All inspectors operate in Spanish and English and emit reports the auditor can attach to their findings matrices. Being a browser favorite, the adoption barrier is zero: drag the link to the bookmarks bar and run.",
      "article7-p6": "The repository is open source at <a href=\"https://gitlab.com/a11ypro/a11y-pro-tests\" target=\"_blank\" rel=\"noopener noreferrer\">gitlab.com/a11ypro/a11y-pro-tests</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog7Translations.es);
    Object.assign(window.i18n.translations.en, blog7Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog7Translations.es);
        Object.assign(window.i18n.translations.en, blog7Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
