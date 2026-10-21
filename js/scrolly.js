/**
 * Scrollytelling con GSAP + ScrollTrigger.
 * Todo el contenido es visible sin JS; las animaciones solo se registran
 * cuando el usuario no ha pedido movimiento reducido (WCAG 2.3.3).
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  var progressBar = document.querySelector(".scroll-progress");

  if (!hasGsap || reduceMotion) {
    if (progressBar) progressBar.style.display = "none";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Barra de progreso de lectura */
  gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
  });

  /* Entrada del hero al cargar (solo eje vertical Y para no alterar el ancho del viewport móvil ni #sideNav) */
  var intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from("#welcome-section h1", { y: 32, duration: 0.7 })
    .from(
      "#welcome-section .textMovil",
      { y: 20, duration: 0.55 },
      "-=0.45",
    )
    .from(
      ".events-carousel-wrapper",
      { y: 24, duration: 0.65 },
      "-=0.45",
    )
    .from(
      "#welcome-section .lead",
      { y: 20, duration: 0.55 },
      "-=0.45",
    );

  /* Parallax suave del contenido del hero al salir (sin alterar opacidad para mantener contraste WCAG) */
  gsap.to(".welcome-header-text", {
    yPercent: -6,
    ease: "none",
    scrollTrigger: {
      trigger: "#welcome-section",
      start: "bottom 90%",
      end: "bottom 30%",
      scrub: true,
    },
  });

  /* Encabezados de sección: barrido suave sin invadir el margen de la primera tarjeta */
  gsap.utils
    .toArray("section.resume-section:not(#welcome-section) h2")
    .forEach(function (h2) {
      gsap.from(h2, {
        y: 12,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: h2,
          start: "top 95%",
          toggleActions: "play none none reset",
        },
      });
    });

  /* Items de contenido: desplazamiento al entrar en viewport y re-animación al volver a bajar.
     Sin opacidad: el texto nunca queda ilegible por una animación. */
  var itemSelector =
    "section.resume-section:not(#welcome-section) .resume-item, section.resume-section:not(#welcome-section) .subheading, section.resume-section:not(#welcome-section) .about-card, section.resume-section:not(#welcome-section) .research-box, section.resume-section:not(#welcome-section) > .my-auto > .lead";

  gsap.utils.toArray(itemSelector).forEach(function (el) {
    gsap.from(el, {
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 94%",
        toggleActions: "play none none reset",
      },
    });
  });

  /* Chips de habilidades y certificaciones: cascada reactiva al scroll */
  gsap.utils.toArray("#skills .skill-tag, #skills .cert-pill").forEach(function (tag, i) {
    gsap.from(tag, {
      y: 14,
      scale: 0.96,
      duration: 0.35,
      delay: (i % 8) * 0.035,
      ease: "power2.out",
      scrollTrigger: {
        trigger: tag,
        start: "top 93%",
        toggleActions: "play none play reset",
      },
    });
  });

  /* Slider de proyectos: revelado */
  var slider = document.querySelector(".sliderProjects");
  if (slider) {
    gsap.from(slider, {
      y: 44,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: slider,
        start: "top 88%",
        toggleActions: "play none play reset",
      },
    });
  }

  /* Recalcular triggers cuando slick e imágenes terminan de cargar */
  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
})();
