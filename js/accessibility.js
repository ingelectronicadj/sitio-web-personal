function contrast_type(classContrast) {
    //Para todos los textos
    $("h1,h2,h3,h4,h5,h6,p,a,em,span,strong,b,body").toggleClass(classContrast);
    //Para todos los bloques, contenedores del grid, barra de miga de pan, cabecera, menu 
    $("div","section").toggleClass(classContrast);
    $("hr").toggleClass(classContrast);
    $("nav").toggleClass(classContrast);
    //Quita la seleccion de contraste
    $(".fa-stack,.ir-arriba,.text-primary,.flags-lang,.prev,.next,.nav-link,.navbar-toggler-icon,#caption").toggleClass(classContrast);
}

var status_btn_contrast = document.getElementById("checkSwitch");
var status_contrast_localStorage = localStorage.getItem("status_contrast");

function set_contrast() {
    var status_btn_contrast = document.getElementById("checkSwitch").checked;
    localStorage.setItem("status_contrast", status_btn_contrast);
}

function get_contrast() {
    var status_contrast_localStorage = localStorage.getItem("status_contrast");
    if (status_contrast_localStorage == "true") {
        document.getElementById("checkSwitch").checked = true;
        contrast_type("high-contrast");
    } else {
        set_contrast();
    }
}

status_btn_contrast.addEventListener("click", set_contrast);

function handleClickFocus(event) {
    event.preventDefault(); // Evitar la acción predeterminada del enlace

    const targetId = this.getAttribute('href'); // Obtener el ID del destino

    const targetElement = document.querySelector(targetId); // Seleccionar el elemento destino

    if (targetElement) {
        targetElement.tabIndex = -1; // Establecer el índice de tabulación para permitir el enfoque
        targetElement.focus(); // Enfocar el elemento destino
        targetElement.removeAttribute('tabindex'); // Eliminar el índice de tabulación después del enfoque
    }
}

document.addEventListener('DOMContentLoaded', () => {
    get_contrast();

    const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', handleClickFocus);
    });
});