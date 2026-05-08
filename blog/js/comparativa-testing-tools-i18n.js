/**
 * Diccionario de traducciones específico para el Artículo 3 del Blog.
 */
(function() {
  const blog3Translations = {
    es: {
      "blog3-page-title": "Comparativa de herramientas de testing: axe-core vs ARC Toolkit - Diego Perafán",
      "article3-p1": "Las herramientas automatizadas son el primer nivel de defensa en cualquier estrategia \"Shift Left\", capaces de capturar entre el 30% y el 50% de los errores totales de accesibilidad (WCAG). En este artículo, ponemos frente a frente a dos gigantes de la industria: axe-core de Deque Systems y ARC Toolkit de TPGi.",
      "article3-h2-1": "Axe-Core: El Rey de la Integración (CI/CD)",
      "article3-p2": "El mayor superpoder de axe-core es su API extremadamente amigable para desarrolladores. Al estar construido puramente en JavaScript, puede inyectarse en Cypress, Selenium, Jest, Pa11y y, mi favorito personal, Playwright. Esto permite romper los despliegues si la interfaz de usuario introduce regresiones de accesibilidad.",
      "article3-p3": "Al arrojar un error por cada violación encontrada en la terminal, axe-core educa activamente al equipo de desarrollo mientras escriben el código.",
      "article3-h2-2": "ARC Toolkit: Auditoría Visual Profunda",
      "article3-p4": "Mientras que axe-core brilla en la terminal, ARC Toolkit (una extensión del navegador) brilla en la pantalla. Esta herramienta destaca por su capacidad de inyectar estilos visuales en el DOM para mostrar el orden lógico de lectura, destacar contenedores sin regiones ARIA y verificar el espaciado y el flujo estructural visualmente.",
      "article3-h2-3": "El Veredicto",
      "article3-p5": "No tienes que elegir una sola. La mejor estrategia es usar axe-core en los pipelines automatizados para evitar que código inaccesible llegue a producción, y utilizar ARC Toolkit de manera exploratoria por los QA de accesibilidad para identificar problemas estructurales que la automatización pura pasaría por alto."
    },
    en: {
      "blog3-page-title": "Testing tools comparison: axe-core vs ARC Toolkit - Diego Perafán",
      "article3-p1": "Automated tools are the first line of defense in any \"Shift Left\" strategy, capable of catching between 30% and 50% of total accessibility errors (WCAG). In this article, we compare two industry giants: axe-core by Deque Systems and ARC Toolkit by TPGi.",
      "article3-h2-1": "Axe-Core: The King of Integration (CI/CD)",
      "article3-p2": "The biggest superpower of axe-core is its extremely developer-friendly API. Being built purely in JavaScript, it can be injected into Cypress, Selenium, Jest, Pa11y and, my personal favorite, Playwright. This allows you to break deployments if the UI introduces accessibility regressions.",
      "article3-p3": "By throwing an error for each violation found in the terminal, axe-core actively educates the development team while they write code.",
      "article3-h2-2": "ARC Toolkit: Deep Visual Auditing",
      "article3-p4": "While axe-core shines in the terminal, ARC Toolkit (a browser extension) shines on the screen. This tool stands out for its ability to inject visual styles into the DOM to show the logical reading order, highlight containers without ARIA regions, and verify spacing and structural flow visually.",
      "article3-h2-3": "The Verdict",
      "article3-p5": "You don't have to choose just one. The best strategy is to use axe-core in automated pipelines to prevent inaccessible code from reaching production, and use ARC Toolkit in an exploratory manner by accessibility QA testers to identify structural issues that pure automation would miss."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog3Translations.es);
    Object.assign(window.i18n.translations.en, blog3Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog3Translations.es);
        Object.assign(window.i18n.translations.en, blog3Translations.en);
        window.i18n.updateContent(window.i18n.currentLang);
      }
    });
  }
})();
