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

  /* Entrada del hero al cargar */
  var intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from("#sideNav", { x: -40, opacity: 0, duration: 0.6 })
    .from("#welcome-section h1", { y: 60, opacity: 0, duration: 0.9 }, "-=0.2")
    .from(
      "#welcome-section .textMovil",
      { y: 30, opacity: 0, duration: 0.7 },
      "-=0.5",
    )
    .from(
      ".events-carousel-wrapper",
      { x: 60, opacity: 0, duration: 0.8 },
      "-=0.5",
    )
    .from(
      "#welcome-section .lead",
      { y: 30, opacity: 0, duration: 0.7 },
      "-=0.5",
    )
    .from(
      "#welcome-section .social-icons a",
      { y: 16, opacity: 0, stagger: 0.06, duration: 0.4 },
      "-=0.4",
    );

  /* Parallax suave del contenido del hero al salir */
  gsap.to(".welcome-header-text", {
    yPercent: -6,
    opacity: 0.4,
    ease: "none",
    scrollTrigger: {
      trigger: "#welcome-section",
      start: "bottom 90%",
      end: "bottom 30%",
      scrub: true,
    },
  });

  /* Encabezados de sección: barrido ascendente */
  gsap.utils
    .toArray("section.resume-section:not(#welcome-section) h2")
    .forEach(function (h2) {
      gsap.from(h2, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: h2, start: "top 85%", once: true },
      });
    });

  /* Items de contenido: desplazamiento al entrar en viewport.
     Sin opacidad: el texto nunca queda ilegible por una animación. */
  var itemSelector =
    "section.resume-section:not(#welcome-section) .resume-item, section.resume-section:not(#welcome-section) .subheading, section.resume-section:not(#welcome-section) > .my-auto > .lead";

  gsap.utils.toArray(itemSelector).forEach(function (el) {
    gsap.from(el, {
      y: 28,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });

  /* Chips de habilidades: cascada */
  gsap.utils.toArray("#skills .skill-tag").forEach(function (tag, i) {
    gsap.from(tag, {
      y: 12,
      duration: 0.35,
      delay: (i % 12) * 0.04,
      ease: "power2.out",
      scrollTrigger: { trigger: tag, start: "top 92%", once: true },
    });
  });

  /* Slider de proyectos: revelado */
  var slider = document.querySelector(".sliderProjects");
  if (slider) {
    gsap.from(slider, {
      y: 60,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: slider, start: "top 85%", once: true },
    });
  }

  /* Recalcular triggers cuando slick e imágenes terminan de cargar */
  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
})();
