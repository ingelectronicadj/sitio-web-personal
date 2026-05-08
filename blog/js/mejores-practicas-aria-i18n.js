/**
 * Diccionario de traducciones específico para el Artículo 2 del Blog.
 */
(function() {
  const blog2Translations = {
    es: {
      "blog2-page-title": "Mejores prácticas para implementar ARIA en SPA - Diego Perafán",
      "article2-p1": "Las Single Page Applications (SPA) ofrecen experiencias fluidas, pero destruyen la semántica nativa del navegador al cambiar de ruta. Al no recargar la página, los lectores de pantalla se quedan en silencio tras hacer clic en un enlace, desorientando completamente al usuario con discapacidad visual.",
      "article2-h2-1": "Gestión del Foco Programático",
      "article2-p2": "El primer paso es asegurar que el foco del teclado se mueva lógicamente cuando la vista cambia. Una técnica recomendada es enfocar el contenedor principal o el encabezado principal de la nueva vista montada tan pronto como la transición de la ruta finalice.",
      "article2-p3": "Asegúrate de que el elemento que va a recibir el foco (si no es un elemento interactivo por defecto) tenga un atributo <code>tabindex=\"-1\"</code> para que pueda recibir el foco mediante JavaScript sin alterar la secuencia natural de tabulación del usuario.",
      "article2-h2-2": "Regiones en Vivo (aria-live)",
      "article2-p4": "Las notificaciones asíncronas como 'Guardado con éxito' o alertas de error no son leídas automáticamente a menos que las marques como regiones en vivo. Usar <code>aria-live=\"polite\"</code> es ideal para notificaciones informativas, mientras que <code>aria-live=\"assertive\"</code> o <code>role=\"alert\"</code> debe reservarse para errores críticos que exigen la atención inmediata.",
      "article2-h2-3": "Modales y Trampas de Foco (Focus Trap)",
      "article2-p5": "Abrir un componente modal en una SPA requiere, por norma, crear una 'trampa de foco'. Esto significa que la tabulación debe ciclar internamente dentro del modal y no permitir que el usuario interactúe con el fondo oscurecido por error. Además, la tecla <code>Escape</code> siempre debe cerrar la ventana emergente para mantener los atajos nativos esperados."
    },
    en: {
      "blog2-page-title": "Best practices for implementing ARIA in SPA - Diego Perafán",
      "article2-p1": "Single Page Applications (SPAs) offer fluid experiences but destroy the browser's native semantics when changing routes. Without page reloads, screen readers remain silent after a link click, completely disorienting visually impaired users.",
      "article2-h2-1": "Programmatic Focus Management",
      "article2-p2": "The first step is ensuring keyboard focus moves logically when the view changes. A recommended technique is to focus the main container or the primary heading of the newly mounted view as soon as the route transition finishes.",
      "article2-p3": "Ensure the element receiving focus (if not interactive by default) has a <code>tabindex=\"-1\"</code> attribute so it can receive focus via JavaScript without altering the user's natural tab sequence.",
      "article2-h2-2": "Live Regions (aria-live)",
      "article2-p4": "Asynchronous notifications like 'Saved successfully' or error alerts are not read automatically unless marked as live regions. Using <code>aria-live=\"polite\"</code> is ideal for informational notifications, while <code>aria-live=\"assertive\"</code> or <code>role=\"alert\"</code> should be reserved for critical errors requiring immediate attention.",
      "article2-h2-3": "Modals and Focus Traps",
      "article2-p5": "Opening a modal component in an SPA requires, by rule, creating a 'focus trap'. This means tabbing must cycle internally within the modal and not allow the user to interact with the darkened background by mistake. Additionally, the <code>Escape</code> key must always close the popup to maintain expected native shortcuts."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog2Translations.es);
    Object.assign(window.i18n.translations.en, blog2Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog2Translations.es);
        Object.assign(window.i18n.translations.en, blog2Translations.en);
        window.i18n.updateContent(window.i18n.currentLang);
      }
    });
  }
})();
