/**
 * Inicialización del carrusel Slick Slider
 * Configura los carruseles principal y de miniaturas de la sección de proyectos
 */
document.addEventListener("DOMContentLoaded", function () {
  // Carrusel principal de proyectos
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: true,
    asNavFor: ".slider-nav",
    instructionsText:
      "Al cambiar el contenido actual de este carrusel, cambiará el contenido de miniaturas que le sigue.",
    regionLabel: "Carrusel de imágenes principal",
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Carrusel de miniaturas
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    instructionsText:
      "Al cambiar el contenido actual de este carrusel cambiará el contenido del principal que le antecede.",
    regionLabel: "Carrusel de miniaturas",
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  // Carrusel de eventos y participaciones
  $(".events-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    dots: true,
    regionLabel: "Carrusel de eventos y participaciones",
    instructionsText:
      "Carrusel de fotografías de eventos en los que Diego ha participado.",
  });

  // Puntos de paginación: indicadores decorativos — fuera del orden de
  // tabulación (la navegación del carrusel se hace con las flechas)
  $(".slick-dots button").attr("tabindex", "-1");

  // Evitar aria-hidden-focus cuando Slick rota slides: sincronizar tabindex
  // de enlaces internos con el estado aria-hidden de cada slide
  function syncSlideFocus($slider) {
    $slider.find(".slick-slide[aria-hidden='true'] a").attr("tabindex", "-1");
    $slider.find(".slick-slide[aria-hidden='false'] a").removeAttr("tabindex");
  }
  var $for = $(".slider-for");
  syncSlideFocus($for);
  $for.on("init reInit afterChange setPosition", function () {
    syncSlideFocus($for);
  });
  $for.on("beforeChange", function (_e, _slick, currentSlide, nextSlide) {
    if (currentSlide === nextSlide) return;
    $for
      .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
      .attr("aria-hidden", "true")
      .find("a")
      .attr("tabindex", "-1");
  });
});
