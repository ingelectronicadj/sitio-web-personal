/**
 * Diccionario de traducciones específico para el artículo "react-aria-live: regiones aria-live compatibles con lectores reales".
 * GENERADO por scripts/build.js - editar content/blog/react-aria-live.json y .body.html
 */
(function() {
  const blog9Translations = {
    es: {
      "blog9-page-title": "react-aria-live: anuncios accesibles en React - Diego Mena",
      "article9-p1": "Las regiones aria-live son el mecanismo estándar para anunciar contenido dinámico a lectores de pantalla, pero su comportamiento real difiere entre VoiceOver, NVDA y JAWS: un mismo patrón que anuncia en un lector queda mudo en otro. react-aria-live encapsula esos detalles de interoperabilidad en una API mínima y tipada.",
      "article9-h2-1": "El problema: anuncios que nadie escucha",
      "article9-p2": "Los errores más comunes son montar la región en vivo junto con el mensaje (el lector aún no la observa), cambiar aria-live dinámicamente o confiar en que un cambio de texto siempre se anuncia. VoiceOver en iOS, por ejemplo, es especialmente estricto con la estabilidad del nodo contenedor y con los tiempos de mutación.",
      "article9-h2-2": "useAnnouncer(): API mínima",
      "article9-p3": "El hook <code>useAnnouncer()</code> mantiene las regiones montadas desde el primer render y expone dos métodos: <code>announcePolite</code> para notificaciones rutinarias y <code>announceAssertive</code> reservado a errores críticos. Internamente aplica las técnicas que maximizan la compatibilidad real: nodos persistentes, atomicidad y control de mensajes repetidos.",
      "article9-h2-3": "Probado contra lectores reales",
      "article9-p4": "La matriz de compatibilidad de la librería se validó con VoiceOver en iOS y macOS, NVDA y JAWS en Windows, documentando qué combinaciones de <code>aria-live</code>, <code>aria-atomic</code> y roles de status/alert anuncian de forma fiable en cada uno. Es el mismo rigor empírico que aplican los auditores lineales del ecosistema.",
      "article9-h2-4": "TypeScript estricto",
      "article9-p5": "Todo el paquete está tipado en TypeScript estricto, lo que convierte los errores de uso (por ejemplo, intentar anunciar antes de montar el proveedor de regiones) en errores de compilación y no en silencios en producción.",
      "article9-p6": "La librería es open source en <a href=\"https://github.com/ingelectronicadj/react-aria-live\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/react-aria-live</a>."
    },
    en: {
      "blog9-page-title": "react-aria-live: accessible announcements in React - Diego Mena",
      "article9-p1": "aria-live regions are the standard mechanism for announcing dynamic content to screen readers, but their real behavior differs between VoiceOver, NVDA and JAWS: the same pattern that announces in one reader stays silent in another. react-aria-live encapsulates those interoperability details in a minimal, typed API.",
      "article9-h2-1": "The problem: announcements nobody hears",
      "article9-p2": "The most common mistakes are mounting the live region together with the message (the reader is not observing it yet), changing aria-live dynamically, or assuming a text change is always announced. VoiceOver on iOS, for example, is especially strict about container node stability and mutation timing.",
      "article9-h2-2": "useAnnouncer(): minimal API",
      "article9-p3": "The <code>useAnnouncer()</code> hook keeps the regions mounted from the first render and exposes two methods: <code>announcePolite</code> for routine notifications and <code>announceAssertive</code> reserved for critical errors. Internally it applies the techniques that maximize real compatibility: persistent nodes, atomicity and control of repeated messages.",
      "article9-h2-3": "Tested against real screen readers",
      "article9-p4": "The library's compatibility matrix was validated with VoiceOver on iOS and macOS, NVDA and JAWS on Windows, documenting which combinations of <code>aria-live</code>, <code>aria-atomic</code> and status/alert roles announce reliably on each. It is the same empirical rigor applied by the ecosystem's linear auditors.",
      "article9-h2-4": "Strict TypeScript",
      "article9-p5": "The entire package is typed in strict TypeScript, turning usage errors (for example, trying to announce before mounting the region provider) into compile-time errors rather than production silences.",
      "article9-p6": "The library is open source at <a href=\"https://github.com/ingelectronicadj/react-aria-live\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/react-aria-live</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog9Translations.es);
    Object.assign(window.i18n.translations.en, blog9Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog9Translations.es);
        Object.assign(window.i18n.translations.en, blog9Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
