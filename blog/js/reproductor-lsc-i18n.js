/**
 * Diccionario de traducciones específico para el artículo "Reproductor LSC: video HTML5 educativo en Lengua de Señas Colombiana".
 * GENERADO por scripts/build.js - editar content/blog/reproductor-lsc.json y .body.html
 */
(function() {
  const blog12Translations = {
    es: {
      "blog12-page-title": "Reproductor LSC: video accesible en Lengua de Señas - Diego Mena",
      "article12-p1": "Para la comunidad sorda colombiana, la Lengua de Señas Colombiana (LSC) es lengua primera y el español escrito es una segunda lengua. Un reproductor de video convencional no basta para aprenderla: hace falta ver la seña desde varios ángulos, repetir fragmentos y consultar el glosario. Reproductor LSC nació para eso.",
      "article12-h2-1": "Sincronización multicámara",
      "article12-p2": "La seña es tridimensional: involucra manos, expresión facial y orientación corporal. El reproductor reproduce dos o más flujos de video en perfecta sincronía (frontal y lateral), permitiendo alternar o combinar vistas sin perder el punto temporal, algo que requiere control preciso de la API HTMLMediaElement.",
      "article12-h2-2": "Bucle A-B para la práctica",
      "article12-p3": "Aprender una seña exige repetición. El modo bucle A-B permite marcar un punto de inicio y uno de fin y reproducir ese fragmento en ciclo, sin intervención, hasta dominar la producción. El control se expone tanto a ratón como a teclado, con anuncios en región en vivo del rango seleccionado.",
      "article12-h2-3": "Glosario interactivo con autoevaluación",
      "article12-p4": "El componente pedagógico se completa con un glosario de señas navegable y un modo autoevaluación que oculta la glosa y reta al estudiante a reconocer la seña mostrada. Los resultados se anuncian en una región <code>role=\"status\"</code> para no perder el contexto.",
      "article12-h2-4": "Accesible también para quien no usa lengua de señas",
      "article12-p5": "La propia interfaz del reproductor cumple los principios que predica: controles nativos operables por teclado, foco visible, etiquetas en español y LSC, y compatibilidad con lectores de pantalla. El objetivo es que la herramienta sirva tanto a docentes oyentes como a estudiantes sordos.",
      "article12-p6": "El proyecto es open source en <a href=\"https://github.com/ingelectronicadj/ReproductorLSC\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/ReproductorLSC</a>."
    },
    en: {
      "blog12-page-title": "LSC Player: accessible video in Sign Language - Diego Mena",
      "article12-p1": "For the Colombian deaf community, Colombian Sign Language (LSC) is the first language and written Spanish is a second language. A conventional video player is not enough to learn it: you need to see the sign from multiple angles, repeat fragments and consult the glossary. Reproductor LSC was built for that.",
      "article12-h2-1": "Multi-camera synchronization",
      "article12-p2": "Signing is three-dimensional: it involves hands, facial expression and body orientation. The player plays two or more video streams in perfect sync (front and side), allowing views to be switched or combined without losing the temporal point, something that requires precise control of the HTMLMediaElement API.",
      "article12-h2-2": "A-B loop for practice",
      "article12-p3": "Learning a sign demands repetition. A-B loop mode lets you mark a start and end point and replay that fragment in a cycle, without intervention, until the production is mastered. The control is exposed to both mouse and keyboard, with live-region announcements of the selected range.",
      "article12-h2-3": "Interactive glossary with self-assessment",
      "article12-p4": "The pedagogical component is completed with a browsable sign glossary and a self-assessment mode that hides the gloss and challenges the student to recognize the displayed sign. Results are announced in a <code>role=\"status\"</code> region to preserve context.",
      "article12-h2-4": "Accessible also for non-signers",
      "article12-p5": "The player's own interface fulfills the principles it preaches: native keyboard-operable controls, visible focus, labels in Spanish and LSC, and screen reader compatibility. The goal is for the tool to serve hearing teachers and deaf students alike.",
      "article12-p6": "The project is open source at <a href=\"https://github.com/ingelectronicadj/ReproductorLSC\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/ReproductorLSC</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog12Translations.es);
    Object.assign(window.i18n.translations.en, blog12Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog12Translations.es);
        Object.assign(window.i18n.translations.en, blog12Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
