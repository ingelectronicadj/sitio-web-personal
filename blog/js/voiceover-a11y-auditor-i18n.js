/**
 * Diccionario de traducciones específico para el artículo "VoiceOver A11Y Auditor: auditorías lineales de iOS en Xcode Simulator".
 * GENERADO por scripts/build.js - editar content/blog/voiceover-a11y-auditor.json y .body.html
 */
(function() {
  const blog5Translations = {
    es: {
      "blog5-page-title": "VoiceOver A11Y Auditor: auditorías en iOS Simulator - Diego Mena",
      "article5-p1": "Las auditorías móviles suelen limitarse a revisiones estáticas del código o a pruebas manuales esporádicas con VoiceOver. VoiceOver A11Y Auditor lleva la misma filosofía de auditoría lineal del ecosistema a iOS: recorre la interfaz elemento a elemento dentro del Xcode Simulator y documenta literalmente lo que el lector de pantalla anuncia.",
      "article5-h2-1": "AXAudit Bridge: del simulador al reporte",
      "article5-p2": "El núcleo de la herramienta es AXAudit Bridge, un puente que aprovecha los servicios de auditoría de accesibilidad de Apple para enumerar la jerarquía accesible de la app: etiquetas, traits, valores y marcos en pantalla. Sobre esa base, el auditor reproduce el recorrido del rotor y del gesto de deslizamiento de VoiceOver, en el mismo orden en que lo experimentaría una persona usuaria.",
      "article5-h2-2": "Cobertura UIKit, SwiftUI y WKWebView",
      "article5-p3": "El auditor no distingue entre tecnologías de interfaz: evalúa por igual vistas UIKit, componentes SwiftUI y contenido web embebido en WKWebView. Para las vistas web, abre una sesión de Safari Remote Web Inspector (RWI) que permite inspeccionar el DOM, los roles ARIA e incluso el estado persistido en IndexedDB, algo inalcanzable desde la capa nativa de accesibilidad.",
      "article5-h2-3": "Adaptación arm64 y ejecución reproducible",
      "article5-p4": "La herramienta incluye una capa de adaptación para chips Apple Silicon (arm64) que normaliza las diferencias entre arquitecturas del simulador. Cada ejecución produce un reporte interactivo con los hallazgos mapeados a criterios WCAG 2.2, trazable y repetible, lo que habilita su integración en pipelines de QA donde antes solo cabía la revisión manual.",
      "article5-h2-4": "Por qué importa la evidencia literal",
      "article5-p5": "Decir que un botón \"probablemente se anuncia bien\" no es una auditoría. Al capturar la secuencia real de anuncios de VoiceOver y cruzarla con el árbol accesible y el DOM inspeccionado vía RWI, cada hallazgo queda respaldado por evidencia reproducible, la misma vara de medir que aplican los auditores NVDA y TalkBack del ecosistema.",
      "article5-p6": "El proyecto es open source y está disponible en <a href=\"https://github.com/ingelectronicadj/voiceover-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/voiceover-a11y-auditor</a>."
    },
    en: {
      "blog5-page-title": "VoiceOver A11Y Auditor: audits on iOS Simulator - Diego Mena",
      "article5-p1": "Mobile audits are usually limited to static code reviews or sporadic manual VoiceOver testing. VoiceOver A11Y Auditor brings the ecosystem's linear audit philosophy to iOS: it traverses the interface element by element inside the Xcode Simulator and literally documents what the screen reader announces.",
      "article5-h2-1": "AXAudit Bridge: from simulator to report",
      "article5-p2": "The core of the tool is AXAudit Bridge, a bridge that leverages Apple's accessibility audit services to enumerate the app's accessible hierarchy: labels, traits, values and on-screen frames. On that foundation, the auditor reproduces the VoiceOver rotor and swipe-gesture traversal, in the same order a user would experience it.",
      "article5-h2-2": "UIKit, SwiftUI and WKWebView coverage",
      "article5-p3": "The auditor is UI-technology agnostic: it evaluates UIKit views, SwiftUI components and web content embedded in WKWebView equally. For web views, it opens a Safari Remote Web Inspector (RWI) session to inspect the DOM, ARIA roles and even IndexedDB-persisted state, something unreachable from the native accessibility layer.",
      "article5-h2-3": "arm64 adaptation and reproducible execution",
      "article5-p4": "The tool includes an adaptation layer for Apple Silicon chips (arm64) that normalizes differences between simulator architectures. Each run produces an interactive report with findings mapped to WCAG 2.2 criteria, traceable and repeatable, enabling integration into QA pipelines where only manual review previously fit.",
      "article5-h2-4": "Why literal evidence matters",
      "article5-p5": "Saying a button \"probably announces well\" is not an audit. By capturing the real sequence of VoiceOver announcements and cross-referencing it with the accessibility tree and the RWI-inspected DOM, every finding is backed by reproducible evidence, the same yardstick applied by the ecosystem's NVDA and TalkBack auditors.",
      "article5-p6": "The project is open source and available at <a href=\"https://github.com/ingelectronicadj/voiceover-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/voiceover-a11y-auditor</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog5Translations.es);
    Object.assign(window.i18n.translations.en, blog5Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog5Translations.es);
        Object.assign(window.i18n.translations.en, blog5Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
