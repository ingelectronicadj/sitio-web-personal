/**
 * Diccionario de traducciones específico para el Artículo 1 del Blog.
 * Se inyecta en el objeto global de i18n principal de forma separada.
 */
(function() {
  const blog1Translations = {
    es: {
      "blog1-page-title": "Impacto de la Inteligencia Artificial en auditorías WCAG - Diego Perafán",
      "blog-back-btn": "<i class=\"fas fa-arrow-left\" aria-hidden=\"true\"></i> Volver al Portafolio",
      "article1-p1": "El enfoque \"Shift Left\" (desplazar las pruebas hacia las etapas tempranas del ciclo de desarrollo) se ha posicionado como el camino correcto para garantizar productos digitales robustos. Es una visión técnica muy potente que, bien refinada, nos permitirá escalar significativamente la calidad de nuestras entregas. Al adoptar este enfoque en la accesibilidad, dejamos de tratar las auditorías WCAG como un cuello de botella al final del proceso, para convertirlas en un pilar del diseño y desarrollo.",
      "article1-h2-1": "La Brecha entre la IA y la Accesibilidad Dinámica",
      "article1-p2": "Sin embargo, desde la perspectiva estricta de QA y accesibilidad, todavía enfrentamos una brecha importante en la automatización. La Inteligencia Artificial y los Modelos de Lenguaje Grande (LLMs) son excelentes analizando la semántica estática del HTML, pero en proyectos reales modernos construidos con React, Angular o Vue, la accesibilidad es principalmente dinámica.",
      "article1-p3": "La reactividad del DOM y la gestión compleja de estados hacen que los nodos aparezcan y desaparezcan constantemente, que el foco del teclado deba ser reasignado programáticamente, y que las regiones en vivo (aria-live) emitan anuncios asíncronos. Es precisamente en este escenario de interacción fluida donde la IA generalista aún tiene dificultades para entender la intención real del usuario y validar la lógica de navegación compleja sin intervención humana.",
      "article1-h2-2": "Refinando los Steering Files para la IA",
      "article1-p4": "Para intentar cerrar esa brecha, propongo la revisión exhaustiva y la inyección de criterios de accesibilidad en los \"Steering Files\" o archivos de dirección (.agents / .md) utilizados para contextualizar a los asistentes de IA, como GitHub Copilot. Mi objetivo es aportar criterios específicos basados en las incidencias recurrentes y las barreras de accesibilidad críticas que detectamos a diario en las auditorías.",
      "article1-p5": "Al proporcionar a la IA un contexto compartido que incluya patrones de diseño accesibles (como la correcta implementación de ARIA, gestión del foco y soporte para lectores de pantalla en componentes interactivos), logramos que las directrices del código generado sean mucho más robustas ante comportamientos dinámicos, previniendo errores desde la escritura misma del código.",
      "article1-h2-3": "Delegación de Tareas: Agentes Especializados",
      "article1-p6": "He estado siguiendo de cerca el proyecto de código abierto <a href=\"https://github.com/Community-Access/accessibility-agents\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-info\">Community-Access/accessibility-agents <span class=\"visually-hidden\">(Se abre en una nueva pestaña)</span></a>, el cual está ganando mucha tracción por su alta compatibilidad con herramientas de asistencia de código. Este proyecto propone un enfoque fascinante: la delegación de tareas a distintos agentes de IA especializados.",
      "article1-p7": "En lugar de un solo agente intentando auditar todo, existen sub-agentes enfocados exclusivamente en contraste de color, otros en semántica ARIA, y otros en navegación por teclado. Estos hallazgos luego son filtrados y consolidados por un \"Accessibility Lead\" algorítmico. Considero que extraer aprendizajes de esta arquitectura modular para nuestras propias convenciones de creación de Documentos de Diseño de Software (SDD) podría ser un salto cualitativo en la forma en que auditamos y diseñamos la accesibilidad.",
      "article1-h2-4": "Próximos Pasos",
      "article1-p8": "Avanzar hacia una automatización inteligente requiere que alimentemos a las herramientas con las directrices correctas. Coordinar esta revisión de los steering files es fundamental para asegurar que nuestro \"contexto compartido\" con la IA cubra realmente los escenarios de interacción más críticos para los usuarios con discapacidad, logrando que el \"Shift Left\" sea una realidad tangible y no solo un concepto teórico."
    },
    en: {
      "blog1-page-title": "Impact of Artificial Intelligence on WCAG Audits - Diego Perafán",
      "blog-back-btn": "<i class=\"fas fa-arrow-left\" aria-hidden=\"true\"></i> Back to Portfolio",
      "article1-p1": "The \"Shift Left\" approach (moving testing to the early stages of the development cycle) has positioned itself as the right path to guarantee robust digital products. It is a very powerful technical vision that, properly refined, will allow us to significantly scale the quality of our deliveries. By adopting this approach in accessibility, we stop treating WCAG audits as a bottleneck at the end of the process, turning them into a pillar of design and development.",
      "article1-h2-1": "The Gap Between AI and Dynamic Accessibility",
      "article1-p2": "However, from a strict QA and accessibility perspective, we still face a significant gap in automation. Artificial Intelligence and Large Language Models (LLMs) are excellent at analyzing static HTML semantics, but in real modern projects built with React, Angular, or Vue, accessibility is primarily dynamic.",
      "article1-p3": "DOM reactivity and complex state management cause nodes to constantly appear and disappear, keyboard focus to be reassigned programmatically, and live regions (aria-live) to emit asynchronous announcements. It is precisely in this fluid interaction scenario where generalist AI still struggles to understand the user's true intent and validate complex navigation logic without human intervention.",
      "article1-h2-2": "Refining Steering Files for AI",
      "article1-p4": "To try and bridge this gap, I propose a comprehensive review and the injection of accessibility criteria into the \"Steering Files\" (.agents / .md) used to provide context to AI assistants, such as GitHub Copilot. My goal is to provide specific criteria based on recurring issues and critical accessibility barriers we detect daily during audits.",
      "article1-p5": "By providing AI with a shared context that includes accessible design patterns (such as correct ARIA implementation, focus management, and screen reader support in interactive components), we ensure the generated code guidelines are much more robust against dynamic behaviors, preventing errors right from the code writing phase.",
      "article1-h2-3": "Task Delegation: Specialized Agents",
      "article1-p6": "I have been closely following the open-source project <a href=\"https://github.com/Community-Access/accessibility-agents\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-info\">Community-Access/accessibility-agents <span class=\"visually-hidden\">(Opens in a new tab)</span></a>, which is gaining traction due to its high compatibility with code assistance tools. This project proposes a fascinating approach: delegating tasks to different specialized AI agents.",
      "article1-p7": "Instead of a single agent trying to audit everything, there are sub-agents exclusively focused on color contrast, others on ARIA semantics, and others on keyboard navigation. These findings are then filtered and consolidated by an algorithmic \"Accessibility Lead\". I believe extracting lessons from this modular architecture for our own Software Design Documents (SDD) conventions could be a qualitative leap in how we audit and design accessibility.",
      "article1-h2-4": "Next Steps",
      "article1-p8": "Advancing towards intelligent automation requires us to feed these tools with the right guidelines. Coordinating this review of steering files is crucial to ensure that our \"shared context\" with AI truly covers the most critical interaction scenarios for users with disabilities, making \"Shift Left\" a tangible reality rather than just a theoretical concept."
    }
  };

  // Inject translations into the global i18n object if it exists
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog1Translations.es);
    Object.assign(window.i18n.translations.en, blog1Translations.en);
  } else {
    // If it hasn't loaded yet, try again after DOMContentLoaded
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog1Translations.es);
        Object.assign(window.i18n.translations.en, blog1Translations.en);
        // Force an update to catch up
        window.i18n.updateContent(window.i18n.currentLang);
      }
    });
  }
})();
