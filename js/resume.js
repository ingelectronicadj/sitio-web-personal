/*!
 * Resume - Scripts principales (vanilla JS + jQuery para animaciones)
 * Reemplaza dependencias de Bootstrap JS (scrollspy, collapse)
 */

(function ($) {
  "use strict";

  // Scroll suave al hacer click en enlaces con ancla
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top },
          1000,
          "easeInOutExpo",
        );
        return false;
      }
    }
  });

  // Cerrar menú móvil al hacer click en un enlace (reemplaza Bootstrap collapse("hide"))
  $(".js-scroll-trigger").click(function () {
    var navCollapse = document.getElementById("navbarSupportedContent");
    var toggler = document.querySelector(".navbar-toggler");
    if (navCollapse && navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
      if (toggler) {
        toggler.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Scrollspy vanilla (reemplaza Bootstrap scrollspy)
  var sections = [];
  var navLinks = document.querySelectorAll(
    "#sideNav .nav-link.js-scroll-trigger",
  );

  // Recopilar secciones objetivo
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      var section = document.querySelector(href);
      if (section) {
        sections.push({ element: section, link: link });
      }
    }
  });

  // Función para actualizar el estado activo
  function updateActiveLink() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var offset = 100; // Margen para activar la sección

    var activeSection = null;
    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].element.offsetTop <= scrollPos + offset) {
        activeSection = sections[i];
        break;
      }
    }

    // Remover .active de todos los enlaces
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Agregar .active al enlace correspondiente
    if (activeSection) {
      activeSection.link.classList.add("active");
    }
  }

  // Escuchar scroll con throttle para rendimiento
  var scrollTimeout;
  var lastScrollTop = 0;
  var delta = 5; // Margen de scroll para activar
  var navbarHeight = $("#sideNav").outerHeight();

  window.addEventListener("scroll", function () {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function () {
      updateActiveLink();
      handleNavbarVisibility();
    });
  });

  function handleNavbarVisibility() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    // Solo actuar en mobile landscape (ancho < 992 y orientación horizontal)
    var isMobileLandscape = window.matchMedia(
      "(max-width: 991px) and (orientation: landscape)",
    ).matches;

    if (!isMobileLandscape) {
      $("#sideNav").removeClass("nav-up");
      return;
    }

    // Asegurarse de que el scroll sea mayor que el delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // Si se hace scroll hacia abajo y se ha pasado el alto del navbar, ocultar
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("#sideNav").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("#sideNav").removeClass("nav-up");
      }
    }

    lastScrollTop = st;
  }

  // Ejecutar al cargar la página
  updateActiveLink();
})(jQuery);

// Botón volver arriba y bajar
$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate({ scrollTop: "0px" }, 1000);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(600);
    } else {
      $(".ir-arriba").slideUp(600);
    }
  });

  $(".ir-abajo").click(function () {
    $("body, html").animate({ scrollTop: "1000px" }, 1000);
  });
});
