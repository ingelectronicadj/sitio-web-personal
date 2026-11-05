/**
 * Diccionario de traducciones específico para el artículo "FreeSpeech SAAC: comunicador aumentativo en Vue 3 con WCAG 2.2 AA".
 * GENERADO por scripts/build.js - editar content/blog/freespeech-saac.json y .body.html
 */
(function() {
  const blog11Translations = {
    es: {
      "blog11-page-title": "FreeSpeech SAAC: comunicador aumentativo accesible - Diego Mena",
      "article11-p1": "Las personas con discapacidades de la comunicación dependen de sistemas aumentativos y alternativos (SAAC/AAC) para expresarse, pero la mayoría de opciones comerciales son costosas o exigen apps instaladas. FreeSpeech SAAC es un comunicador de pictogramas que corre en el navegador, construido en Vue 3.5 + Vite y diseñado con conformidad WCAG 2.2 AA desde la base.",
      "article11-h2-1": "345 pictogramas ARASAAC offline",
      "article11-p2": "El vocabulario visual usa el catálogo ARASAAC, la referencia abierta en pictografía para comunicación aumentativa. Los 345 pictogramas se sirven localmente, así que el comunicador funciona sin conexión: un requisito crítico en aulas, zonas rurales o instituciones con redes restringidas.",
      "article11-h2-2": "Accesibilidad que se practica, no solo se predica",
      "article11-p3": "Ser una herramienta para personas con discapacidad obligaba a un estándar ejemplar: objetivos táctiles de al menos 24x24 px (2.5.8), contraste AA en todos los estados, navegación completa por teclado, regiones en vivo para la frase construida y síntesis de voz mediante la Web Speech API para vocalizar cada selección.",
      "article11-h2-3": "SDK universal con trigger personalizable",
      "article11-p4": "Además de la aplicación completa en <a href=\"https://freespeech.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">freespeech.a11ypro.tech</a>, el proyecto incluye un SDK integrable en plataformas LMS y portales web. El anfitrión puede configurar el disparador (botón, atajo de teclado o elemento propio) sin tocar el núcleo del comunicador.",
      "article11-h2-4": "Por qué importa",
      "article11-p5": "Comunicarse es un derecho. Un SAAC web, gratuito, offline y accesible elimina las barreras económicas y técnicas que hoy dejan a muchas personas sin una voz alternativa. Publicarlo como open source busca que cualquier institución pueda desplegarlo y adaptarlo sin licencias.",
      "article11-p6": "El proyecto es open source en <a href=\"https://github.com/ingelectronicadj/freespeech\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/freespeech</a>."
    },
    en: {
      "blog11-page-title": "FreeSpeech SAAC: accessible augmentative communicator - Diego Mena",
      "article11-p1": "People with communication disabilities rely on augmentative and alternative communication systems (AAC) to express themselves, but most commercial options are expensive or require installed apps. FreeSpeech SAAC is a pictogram communicator that runs in the browser, built with Vue 3.5 + Vite and designed with WCAG 2.2 AA conformance from the ground up.",
      "article11-h2-1": "345 offline ARASAAC pictograms",
      "article11-p2": "The visual vocabulary uses the ARASAAC catalog, the open reference in pictography for augmentative communication. The 345 pictograms are served locally, so the communicator works offline: a critical requirement in classrooms, rural areas or institutions with restricted networks.",
      "article11-h2-2": "Accessibility that is practiced, not just preached",
      "article11-p3": "Being a tool for people with disabilities demanded an exemplary standard: touch targets of at least 24x24 px (2.5.8), AA contrast in all states, full keyboard navigation, live regions for the constructed phrase and voice synthesis via the Web Speech API to vocalize each selection.",
      "article11-h2-3": "Universal SDK with customizable trigger",
      "article11-p4": "Beyond the full application at <a href=\"https://freespeech.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">freespeech.a11ypro.tech</a>, the project includes an SDK integrable into LMS platforms and web portals. The host can configure the trigger (button, keyboard shortcut or custom element) without touching the communicator's core.",
      "article11-h2-4": "Why it matters",
      "article11-p5": "Communicating is a right. A web-based, free, offline and accessible AAC removes the economic and technical barriers that leave many people without an alternative voice today. Publishing it as open source aims to let any institution deploy and adapt it without licenses.",
      "article11-p6": "The project is open source at <a href=\"https://github.com/ingelectronicadj/freespeech\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/freespeech</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog11Translations.es);
    Object.assign(window.i18n.translations.en, blog11Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog11Translations.es);
        Object.assign(window.i18n.translations.en, blog11Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
