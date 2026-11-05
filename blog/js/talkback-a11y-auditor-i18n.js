/**
 * Diccionario de traducciones específico para el artículo "TalkBack A11Y Auditor: auditorías lineales de Android con gestos reales".
 * GENERADO por scripts/build.js - editar content/blog/talkback-a11y-auditor.json y .body.html
 */
(function() {
  const blog6Translations = {
    es: {
      "blog6-page-title": "TalkBack A11Y Auditor: auditorías en Android con OCR - Diego Mena",
      "article6-p1": "TalkBack es el lector de pantalla dominante en Android, pero auditar con él de forma manual exige gestos precisos y una escucha atenta que no escala. TalkBack A11Y Auditor automatiza ese recorrido dentro de un emulador QEMU, produciendo un reporte lineal de lo que TalkBack anuncia realmente en cada elemento.",
      "article6-h2-1": "Gestos swipe reales sobre QEMU",
      "article6-p2": "A diferencia de las inspecciones estáticas del árbol de accesibilidad, el auditor inyecta gestos de deslizamiento reales en el emulador, los mismos que ejecuta una persona usuaria para avanzar por la interfaz. Esto expone problemas que el árbol declara pero el recorrido no alcanza: elementos fuera del orden de foco, regiones inalcanzables o controles duplicados.",
      "article6-h2-2": "Captura de la salida hablada por OCR",
      "article6-p3": "El componente más original del proyecto es la captura de la voz hablada: TalkBack no expone su salida de forma programática, así que el auditor graba la salida de audio del emulador y la transcribe mediante OCR/ASR para obtener el texto literal de cada anuncio. Esa transcripción queda vinculada al elemento enfocado en ese instante.",
      "article6-h2-3": "Inspección del WebView vía Chrome CDP",
      "article6-p4": "Para el contenido web embebido, el auditor se conecta al WebView de Android mediante Chrome DevTools Protocol y evalúa el DOM, los roles ARIA y los nombres accesibles computados, del mismo modo que lo hace el auditor NVDA en escritorio. El cruce entre el DOM y lo verbalizado permite detectar divergencias entre lo que el marcado declara y lo que TalkBack pronuncia.",
      "article6-h2-4": "La trilogía cross-platform completa",
      "article6-p5": "Con este auditor se cierra la trilogía del ecosistema: NVDA A11Y Auditor en escritorio Windows, VoiceOver A11Y Auditor en iOS y TalkBack A11Y Auditor en Android. Ejecutar los tres sobre la misma interfaz revela divergencias de interpretación entre lectores de pantalla que ninguna auditoría mono-plataforma detectaría.",
      "article6-p6": "El proyecto es open source y está disponible en <a href=\"https://github.com/ingelectronicadj/talkback-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/talkback-a11y-auditor</a>."
    },
    en: {
      "blog6-page-title": "TalkBack A11Y Auditor: Android audits with OCR - Diego Mena",
      "article6-p1": "TalkBack is the dominant screen reader on Android, but auditing with it manually requires precise gestures and attentive listening that does not scale. TalkBack A11Y Auditor automates that traversal inside a QEMU emulator, producing a linear report of what TalkBack actually announces on each element.",
      "article6-h2-1": "Real swipe gestures on QEMU",
      "article6-p2": "Unlike static accessibility-tree inspections, the auditor injects real swipe gestures into the emulator, the same ones a user performs to move through the interface. This exposes problems the tree declares but the traversal never reaches: elements outside the focus order, unreachable regions or duplicated controls.",
      "article6-h2-2": "Spoken output capture via OCR",
      "article6-p3": "The most original component is spoken-voice capture: TalkBack does not expose its output programmatically, so the auditor records the emulator's audio output and transcribes it via OCR/ASR to obtain the literal text of each announcement. That transcription is linked to the element focused at that instant.",
      "article6-h2-3": "WebView inspection via Chrome CDP",
      "article6-p4": "For embedded web content, the auditor connects to Android's WebView through Chrome DevTools Protocol and evaluates the DOM, ARIA roles and computed accessible names, the same way the NVDA auditor does on desktop. Cross-referencing the DOM against the verbalized output detects divergences between what the markup declares and what TalkBack pronounces.",
      "article6-h2-4": "The complete cross-platform trilogy",
      "article6-p5": "This auditor completes the ecosystem's trilogy: NVDA A11Y Auditor on Windows desktop, VoiceOver A11Y Auditor on iOS and TalkBack A11Y Auditor on Android. Running all three on the same interface reveals interpretation divergences between screen readers that no single-platform audit would detect.",
      "article6-p6": "The project is open source and available at <a href=\"https://github.com/ingelectronicadj/talkback-a11y-auditor\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/ingelectronicadj/talkback-a11y-auditor</a>."
    }
  };

  // Inject translations
  if (window.i18n && window.i18n.translations) {
    Object.assign(window.i18n.translations.es, blog6Translations.es);
    Object.assign(window.i18n.translations.en, blog6Translations.en);
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.i18n && window.i18n.translations) {
        Object.assign(window.i18n.translations.es, blog6Translations.es);
        Object.assign(window.i18n.translations.en, blog6Translations.en);
        window.i18n.changeLang(window.i18n.currentLang);
      }
    });
  }
})();
