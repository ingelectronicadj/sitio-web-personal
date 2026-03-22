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
});
