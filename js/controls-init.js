/**
 * Inicializacion compartida de controles del sidebar (tema / idioma / menu movil)
 * y observadores de viewport (fade-up / is-in-view).
 * Empaquetado dentro de js/bundle.min.js para index.html y todas las paginas de blog.
 */
document.addEventListener("DOMContentLoaded", function () {
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.getElementById("navbarSupportedContent");
  if (toggler && collapse) {
    toggler.addEventListener("click", function () {
      var isExpanded = collapse.classList.contains("show");
      collapse.classList.toggle("show");
      toggler.setAttribute("aria-expanded", String(!isExpanded));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && collapse.classList.contains("show")) {
        collapse.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
        toggler.focus();
      }
    });
  }

  var checkSwitch = document.getElementById("checkSwitch");
  var themeToggle = document.getElementById("themeToggle");
  if (checkSwitch && themeToggle) {
    var syncThemeBtn = function () {
      var dark = document.documentElement.classList.contains("dark");
      themeToggle.setAttribute("aria-pressed", String(dark));
      var icon = themeToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-moon", !dark);
        icon.classList.toggle("fa-sun", dark);
      }
    };
    themeToggle.addEventListener("click", function () {
      checkSwitch.click();
    });
    new MutationObserver(syncThemeBtn).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    syncThemeBtn();
  }

  var langToggle = document.getElementById("langToggle");
  if (langToggle && typeof i18n !== "undefined") {
    langToggle.addEventListener("click", function () {
      i18n.changeLang(i18n.currentLang === "es" ? "en" : "es");
    });
  }

  if (checkSwitch && typeof window.toggleContrast === "function") {
    checkSwitch.addEventListener("change", function () {
      window.toggleContrast("dark");
    });
  }

  if ("IntersectionObserver" in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".animate-fade-up").forEach(function (el) {
      fadeObserver.observe(el);
    });

    var hoverObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
          } else {
            entry.target.classList.remove("is-in-view");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll(".resume-item, .research-box")
      .forEach(function (el) {
        hoverObserver.observe(el);
      });
  } else {
    document.querySelectorAll(".animate-fade-up").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Limpiar cualquier Service Worker / cache de la PWA anterior en clientes existentes
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) {
        reg.unregister();
      });
    });
  }
  if ("caches" in window) {
    caches.keys().then(function (keys) {
      keys.forEach(function (k) {
        caches.delete(k);
      });
    });
  }
});
