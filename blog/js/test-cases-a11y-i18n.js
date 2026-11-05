/**
 * Diccionario de traducciones específico para el artículo "Test Cases A11Y: 87 casos de prueba bilingües WCAG 2.2".
 * GENERADO por scripts/build.js - editar content/blog/test-cases-a11y.json y .body.html
 */
(function() {
  const blog10Translations = {
    es: {
      "blog10-page-title": "Test Cases A11Y: 87 casos WCAG 2.2 en Gherkin - Diego Mena",
      "article10-p1": "Una auditoría sin casos de prueba reproducibles es una opinión. Test Cases A11Y convierte los 87 criterios de conformidad de WCAG 2.2 (niveles A, AA y AAA) en un catálogo estructurado y bilingüe de procedimientos ejecutables, listo para integrarse en el ciclo de QA de cualquier equipo.",
      "article10-h2-1": "Gherkin como lengua franca",
      "article10-p2": "Cada criterio se documenta en formato Gherkin (Given / When / Then), el mismo lenguaje que usan las herramientas BDD como Cucumber. Así, un caso de prueba de accesibilidad lo puede ejecutar un auditor humano, pero también evolucionar hacia una especificación automatizable sin rescribirlo.",
      "article10-h2-2": "Mapeo con reglas axe-core",
      "article10-p3": "Cada caso indica qué reglas de axe-core lo cubren parcialmente y qué parte exige verificación humana. Esta distinción es clave: las herramientas automáticas cubren una fracción de WCAG, y el catálogo explicita exactamente cuál es la frontera entre lo automatizable y lo manual en cada criterio.",
      "article10-h2-3": "Exportación a Jira y Xray",
      "article10-p4": "El catálogo incluye un exportador que transforma los casos al formato de importación de Jira y Xray, para que el plan de pruebas de accesibilidad viva junto al resto de la gestión de calidad del proyecto en lugar de quedar en una hoja de cálculo aislada.",
      "article10-h2-4": "Bilingüe desde el diseño",
      "article10-p5": "Todos los casos existen en español e inglés, lo que permite a equipos internacionales auditar con el mismo corpus y reportar en el idioma del cliente sin traducciones improvisadas que distorsionen la redacción normativa de WCAG.",
      "article10-p6": "El catálogo es open source en <a href=\"https://github.com/ingelectronicadj/test-cases-a11y\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/test-cases-a11y</a>."
    },
    en: {
      "blog10-page-title": "Test Cases A11Y: 87 WCAG 2.2 cases in Gherkin - Diego Mena",
      "article10-p1": "An audit without reproducible test cases is an opinion. Test Cases A11Y turns the 87 WCAG 2.2 success criteria (levels A, AA and AAA) into a structured, bilingual catalog of executable procedures, ready to integrate into any team's QA cycle.",
      "article10-h2-1": "Gherkin as a lingua franca",
      "article10-p2": "Each criterion is documented in Gherkin format (Given / When / Then), the same language used by BDD tools like Cucumber. This way, an accessibility test case can be executed by a human auditor, but it can also evolve into an automatable specification without being rewritten.",
      "article10-h2-2": "Mapping to axe-core rules",
      "article10-p3": "Each case states which axe-core rules partially cover it and which part demands human verification. This distinction is key: automated tools cover a fraction of WCAG, and the catalog makes explicit exactly where the boundary between automatable and manual lies for each criterion.",
      "article10-h2-3": "Export to Jira and Xray",
      "article10-p4": "The catalog includes an exporter that transforms the cases into Jira and Xray import format, so the accessibility test plan lives alongside the rest of the project's quality management instead of sitting in an isolated spreadsheet.",
      "article10-h2-4": "Bilingual by design",
      "article10-p5": "All cases exist in Spanish and English, allowing international teams to audit with the same corpus and report in the client's language without improvised translations that distort WCAG's normative wording.",
      "article10-p6": "The catalog is open source at <a href=\"https://github.com/ingelectronicadj/test-cases-a11y\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/test-cases-a11y</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog10Translations.es);
    Object.assign(window.i18n.translations.en, blog10Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog10Translations.es);
        Object.assign(window.i18n.translations.en, blog10Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
