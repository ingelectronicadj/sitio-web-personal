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
  var delta = 10; // Margen de scroll aumentado para mayor estabilidad

  window.addEventListener("scroll", function () {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function () {
      updateActiveLink();
      handleNavbarVisibility();
    });
  });

  // Resetear estado al cambiar orientación o tamaño
  window.addEventListener("resize", function () {
    $("#sideNav").removeClass("nav-up");
  });

  function handleNavbarVisibility() {
    var $sideNav = $("#sideNav");
    var st = $(window).scrollTop();
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    // Solo actuar en mobile landscape (ancho < 992 y ancho > alto)
    // Usamos $(window).width() para mayor consistencia con el simulador
    var isMobileLandscape = winWidth < 992 && winWidth > winHeight;

    if (!isMobileLandscape) {
      $sideNav.removeClass("nav-up");
      return;
    }

    // Asegurarse de que el scroll sea mayor que el delta (reducimos a 2 para que sea más sensible al test)
    if (Math.abs(lastScrollTop - st) <= 2) return;

    // Si se hace scroll hacia abajo (> 20px para estabilidad), ocultar
    if (st > lastScrollTop && st > 20) {
      // Scroll Down
      $sideNav.addClass("nav-up");
    } else if (st < lastScrollTop) {
      // Scroll Up - Mostrar inmediatamente
      $sideNav.removeClass("nav-up");
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
