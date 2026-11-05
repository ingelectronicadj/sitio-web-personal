/**
 * Diccionario de traducciones específico para el artículo "Pa11y Batch: auditorías WCAG masivas en español con CI/CD".
 * GENERADO por scripts/build.js - editar content/blog/pa11y-batch-ci-cd.json y .body.html
 */
(function() {
  const blog8Translations = {
    es: {
      "blog8-page-title": "Pa11y Batch: auditorías WCAG masivas en español y CI/CD - Diego Mena",
      "article8-p1": "Auditar una URL es fácil; auditar quinientas con trazabilidad es otra cosa. Pa11y Batch nace para escalar las auditorías automatizadas: ejecuta axe-core y HTML_CodeSniffer sobre lotes completos de URLs y consolida los resultados en reportes en español pensados tanto para perfiles técnicos como para dirección.",
      "article8-h2-1": "Dos motores, una matriz",
      "article8-p2": "Cada URL se evalúa con axe-core y con HTML_CodeSniffer de forma independiente. Correr dos motores reduce falsos negativos y permite contrastar criterios cuando las reglas se solapan: si ambos reportan el mismo elemento, la confianza del hallazgo aumenta; si divergen, el auditor humano decide con contexto.",
      "article8-h2-2": "Vista ejecutiva para stakeholders",
      "article8-p3": "El reporte incluye una vista agregada orientada a perfiles no técnicos: tendencia de conformidad por nivel WCAG, distribución de severidades y evolución entre ejecuciones. Junto a ella, la vista técnica ofrece inspección visual del DOM con capturas y selectores precisos para cada violación.",
      "article8-h2-3": "CI/CD con artefactos JUnit",
      "article8-p4": "La suite emite reportes en formato JUnit XML, el estándar que entienden Jenkins, GitLab CI, GitHub Actions y Azure DevOps. Esto permite convertir la accesibilidad en una puerta de calidad: el pipeline falla si aparecen violaciones por encima del umbral configurado.",
      "article8-h2-4": "Web Studio y reportes en español",
      "article8-p5": "Sobre el motor CLI se monta <a href=\"https://pa11y.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">Pa11y Batch Web Studio</a>, una interfaz web para lanzar auditorías sin terminal. Uno de sus diferenciales es que los hallazgos, las descripciones de reglas y las recomendaciones se entregan íntegramente en español, algo que las herramientas originales no ofrecen.",
      "article8-p6": "El proyecto es open source y está disponible en <a href=\"https://github.com/ingelectronicadj/pa11y_batch\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/pa11y_batch</a>."
    },
    en: {
      "blog8-page-title": "Pa11y Batch: bulk WCAG audits in Spanish and CI/CD - Diego Mena",
      "article8-p1": "Auditing one URL is easy; auditing five hundred with traceability is another matter. Pa11y Batch was built to scale automated audits: it runs axe-core and HTML_CodeSniffer over entire batches of URLs and consolidates results into Spanish-language reports aimed at both technical staff and management.",
      "article8-h2-1": "Two engines, one matrix",
      "article8-p2": "Each URL is evaluated independently by axe-core and HTML_CodeSniffer. Running two engines reduces false negatives and lets you cross-check criteria when rules overlap: if both flag the same element, confidence in the finding increases; if they diverge, the human auditor decides with context.",
      "article8-h2-2": "Executive view for stakeholders",
      "article8-p3": "The report includes an aggregated view aimed at non-technical profiles: conformance trend by WCAG level, severity distribution and evolution between runs. Alongside it, the technical view offers visual DOM inspection with screenshots and precise selectors for each violation.",
      "article8-h2-3": "CI/CD with JUnit artifacts",
      "article8-p4": "The suite emits reports in JUnit XML format, the standard understood by Jenkins, GitLab CI, GitHub Actions and Azure DevOps. This turns accessibility into a quality gate: the pipeline fails if violations appear above the configured threshold.",
      "article8-h2-4": "Web Studio and Spanish reports",
      "article8-p5": "On top of the CLI engine sits <a href=\"https://pa11y.a11ypro.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">Pa11y Batch Web Studio</a>, a web interface to launch audits without a terminal. One of its differentiators is that findings, rule descriptions and recommendations are delivered entirely in Spanish, something the original tools do not offer.",
      "article8-p6": "The project is open source and available at <a href=\"https://github.com/ingelectronicadj/pa11y_batch\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/pa11y_batch</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog8Translations.es);
    Object.assign(window.i18n.translations.en, blog8Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog8Translations.es);
        Object.assign(window.i18n.translations.en, blog8Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
