/**
 * Microinteracciones de sonido via cuelume (misma lib que A11Y PRO).
 * - Auto-asigna sonidos: enlaces → whisper/tick, botones → tick+press,
 *   controles de tema/idioma/fx → toggle.
 * - Estado compartido con el botón #fxToggle (localStorage "fx_enabled"
 *   y evento "fx:toggled" emitido por ambient.js).
 * - Silenciado si el usuario prefiere movimiento reducido.
 */
document.addEventListener("DOMContentLoaded", function () {
  try {
    if (!window.cuelume || !window.cuelume.bind) {
      console.warn("Cuelume UMD not found on window");
      return;
    }

    // Enlaces: susurro al hover (o tick si son tipo botón)
    document
      .querySelectorAll("a:not([data-cuelume-hover])")
      .forEach(function (el) {
        el.setAttribute(
          "data-cuelume-hover",
          el.classList.contains("btn") ? "tick" : "whisper",
        );
      });

    // Botones: tick al hover + press al pulsar
    document
      .querySelectorAll("button:not([data-cuelume-hover])")
      .forEach(function (el) {
        el.setAttribute("data-cuelume-hover", "tick");
        if (
          !el.hasAttribute("data-cuelume-press") &&
          !el.hasAttribute("data-cuelume-toggle")
        ) {
          el.setAttribute("data-cuelume-press", "press");
        }
      });

    // Controles superiores: sonido de interruptor al click
    ["themeToggle", "langToggle", "fxToggle"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.setAttribute("data-cuelume-toggle", "toggle");
        el.removeAttribute("data-cuelume-press");
      }
    });

    window.cuelume.bind();

    // Estado inicial: compartido con fondo ambiente + reduced-motion
    var fxOn = true;
    try {
      fxOn = localStorage.getItem("fx_enabled") !== "false";
    } catch (e) {}
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fxOn = false;
    }
    window.cuelume.setEnabled(fxOn);

    // Sincronizar con el botón #fxToggle (evento de ambient.js)
    document.addEventListener("fx:toggled", function (e) {
      window.cuelume.setEnabled(!!(e.detail && e.detail.enabled));
    });

    // Accesibilidad por teclado: sonido al enfocar elementos interactivos
    document
      .querySelectorAll("[data-cuelume-hover]")
      .forEach(function (el) {
        el.addEventListener("focus", function () {
          window.cuelume.play(el.getAttribute("data-cuelume-hover"));
        });
      });
  } catch (e) {
    console.warn("Cuelume initialization error:", e);
  }
});
