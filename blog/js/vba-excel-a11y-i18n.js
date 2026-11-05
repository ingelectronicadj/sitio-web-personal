/**
 * Diccionario de traducciones específico para el artículo "A11Y Help VBA Excel: las 105 reglas de axe-core dentro de Excel".
 * GENERADO por scripts/build.js - editar content/blog/vba-excel-a11y.json y .body.html
 */
(function() {
  const blog13Translations = {
    es: {
      "blog13-page-title": "A11Y Help VBA Excel: reglas WCAG dentro de Excel - Diego Mena",
      "article13-p1": "En la práctica real de la auditoría, Excel sigue siendo la herramienta de trabajo: matrices de hallazgos, trazabilidad de criterios y evidencias viven en hojas de cálculo. A11Y Help VBA Excel lleva la referencia normativa al lugar donde ya se trabaja, en lugar de obligar a saltar entre la documentación y la matriz.",
      "article13-h2-1": "105 reglas de axe-core en español",
      "article13-p2": "El complemento incorpora el catálogo completo de las 105 reglas de axe-core traducidas al español: identificador de regla, criterios WCAG asociados, nivel, impacto y descripción de la falla. Cada regla puede consultarse con un buscador incremental e insertarse directamente en la celda activa.",
      "article13-h2-2": "Buscador integrado en la matriz",
      "article13-p3": "El flujo es simple: el auditor redacta un hallazgo, abre el panel del complemento, filtra por criterio o texto libre y pulsa insertar. La regla correspondiente se escribe con su formato normalizado, eliminando los errores de transcripción que eran habituales al copiar descripciones desde la web o desde reportes de axe.",
      "article13-h2-3": "Por qué VBA y no una app externa",
      "article13-p4": "Porque el objetivo era cero fricción: sin instalaciones con permisos de administrador, sin servicios externos y sin dependencias de red. Un archivo .bas se importa en cualquier Excel corporativo y funciona incluso en los entornos restringidos típicos de banca y gobierno donde operan muchas auditorías.",
      "article13-h2-4": "Complemento del ecosistema",
      "article13-p5": "Junto a Test Cases A11Y (casos de prueba Gherkin) y Pa11y Batch (automatización masiva), este complemento cubre la tercera pata del flujo: la documentación formal de hallazgos en la herramienta que los equipos de QA realmente usan.",
      "article13-p6": "El proyecto es open source en <a href=\"https://github.com/ingelectronicadj/a11y-help-VBAexcel\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/a11y-help-VBAexcel</a>."
    },
    en: {
      "blog13-page-title": "A11Y Help VBA Excel: WCAG rules inside Excel - Diego Mena",
      "article13-p1": "In real-world auditing, Excel remains the working tool: findings matrices, criteria traceability and evidence live in spreadsheets. A11Y Help VBA Excel brings the normative reference to where work already happens, instead of forcing a jump between documentation and the matrix.",
      "article13-h2-1": "105 axe-core rules in Spanish",
      "article13-p2": "The add-in embeds the complete catalog of the 105 axe-core rules translated into Spanish: rule identifier, associated WCAG criteria, level, impact and failure description. Each rule can be looked up with an incremental search and inserted directly into the active cell.",
      "article13-h2-2": "Search integrated into the matrix",
      "article13-p3": "The flow is simple: the auditor writes a finding, opens the add-in panel, filters by criterion or free text and clicks insert. The matching rule is written in its normalized format, eliminating the transcription errors that were common when copying descriptions from the web or from axe reports.",
      "article13-h2-3": "Why VBA and not an external app",
      "article13-p4": "Because the goal was zero friction: no admin-privilege installs, no external services and no network dependencies. A .bas file imports into any corporate Excel and works even in the restricted environments typical of banking and government where many audits operate.",
      "article13-h2-4": "Ecosystem companion",
      "article13-p5": "Together with Test Cases A11Y (Gherkin test cases) and Pa11y Batch (bulk automation), this add-in covers the third leg of the workflow: formal findings documentation in the tool QA teams actually use.",
      "article13-p6": "The project is open source at <a href=\"https://github.com/ingelectronicadj/a11y-help-VBAexcel\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/a11y-help-VBAexcel</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog13Translations.es);
    Object.assign(window.i18n.translations.en, blog13Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog13Translations.es);
        Object.assign(window.i18n.translations.en, blog13Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
