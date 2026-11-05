/**
 * Diccionario de traducciones específico para el artículo "NVDA A11Y Auditor: auditorías lineales con NVDA y Chrome CDP".
 * GENERADO por scripts/build.js - editar content/blog/nvda-a11y-auditor.json y .body.html
 */
(function() {
  const blog4Translations = {
    es: {
      "blog4-page-title": "NVDA A11Y Auditor: auditorías lineales automatizadas - Diego Mena",
      "article4-p1": "Auditar con un lector de pantalla real es la única forma de conocer la experiencia verdadera de una persona usuaria ciega, pero hacerlo de forma manual es lento y difícil de reproducir. NVDA A11Y Auditor resuelve ese problema orquestando NVDA en Windows para recorrer la página de forma lineal y registrar exactamente lo que el lector anuncia.",
      "article4-h2-1": "Dos sondas de navegación: exploración y foco",
      "article4-p2": "La herramienta ejecuta dos pasadas independientes sobre la misma URL. La sonda de modo exploración (browse mode) simula las teclas de navegación rápida de NVDA para recorrer encabezados, enlaces, formularios y regiones. La sonda de foco (focus mode) tabula secuencialmente por cada control interactivo, comparando el orden de tabulación real contra el orden visual y el DOM.",
      "article4-h2-2": "Speech viewer como fuente de verdad",
      "article4-p3": "En lugar de inferir la salida del lector desde el DOM, el auditor captura los subtítulos del speech viewer de NVDA en tiempo real. Cada anuncio se asocia al elemento que lo produjo, lo que permite detectar nombres accesibles vacíos, roles incorrectos o anuncios duplicados con evidencia literal de lo que escuchó el usuario.",
      "article4-h2-3": "Inspección AccName vía Chrome DevTools Protocol",
      "article4-p4": "En paralelo a la escucha, el auditor abre una sesión de Chrome DevTools Protocol (CDP) y consulta el árbol de accesibilidad del navegador para evaluar el algoritmo W3C AccName 1.2: <code>aria-label</code>, <code>aria-labelledby</code>, contenido de texto y atributos nativos. El resultado se contrasta con el anuncio de NVDA para detectar divergencias entre lo computado y lo verbalizado.",
      "article4-h2-4": "86 criterios WCAG 2.2 y comparativa cross-platform",
      "article4-p5": "El reporte final evalúa 86 criterios de conformidad WCAG 2.2 y cruza los resultados con sus homólogos VoiceOver A11Y Auditor (iOS) y TalkBack A11Y Auditor (Android). Esa comparativa cross-platform revela comportamientos divergentes entre lectores de pantalla frente al mismo marcado, un punto ciego habitual en las auditorías que solo usan un único AT.",
      "article4-p6": "El proyecto es open source y está disponible en <a href=\"https://github.com/ingelectronicadj/nvda-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/nvda-a11y-auditor</a>."
    },
    en: {
      "blog4-page-title": "NVDA A11Y Auditor: automated linear audits - Diego Mena",
      "article4-p1": "Auditing with a real screen reader is the only way to know the true experience of a blind user, but doing it manually is slow and hard to reproduce. NVDA A11Y Auditor solves this by orchestrating NVDA on Windows to traverse the page linearly and record exactly what the reader announces.",
      "article4-h2-1": "Two navigation probes: browse and focus",
      "article4-p2": "The tool runs two independent passes over the same URL. The browse mode probe simulates NVDA's quick navigation keys to traverse headings, links, forms and landmarks. The focus mode probe tabs sequentially through every interactive control, comparing the real tab order against the visual order and the DOM.",
      "article4-h2-2": "Speech viewer as the source of truth",
      "article4-p3": "Instead of inferring reader output from the DOM, the auditor captures NVDA's speech viewer captions in real time. Each announcement is linked to the element that produced it, enabling detection of empty accessible names, incorrect roles or duplicated announcements with literal evidence of what the user heard.",
      "article4-h2-3": "AccName inspection via Chrome DevTools Protocol",
      "article4-p4": "In parallel with listening, the auditor opens a Chrome DevTools Protocol (CDP) session and queries the browser's accessibility tree to evaluate the W3C AccName 1.2 algorithm: <code>aria-label</code>, <code>aria-labelledby</code>, text content and native attributes. The result is contrasted with NVDA's announcement to detect divergences between the computed and the verbalized name.",
      "article4-h2-4": "86 WCAG 2.2 criteria and cross-platform comparison",
      "article4-p5": "The final report evaluates 86 WCAG 2.2 success criteria and cross-references results with its counterparts VoiceOver A11Y Auditor (iOS) and TalkBack A11Y Auditor (Android). This cross-platform comparison reveals divergent screen reader behaviors against the same markup, a common blind spot in audits that use only one AT.",
      "article4-p6": "The project is open source and available at <a href=\"https://github.com/ingelectronicadj/nvda-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/nvda-a11y-auditor</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog4Translations.es);
    Object.assign(window.i18n.translations.en, blog4Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog4Translations.es);
        Object.assign(window.i18n.translations.en, blog4Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
