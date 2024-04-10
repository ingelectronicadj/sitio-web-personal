/* Funcionalidad Modo Oscuro */
function toggleContrast(classContrast) {
    //Para todos los textos
    $("h1,h2,h3,h4,h5,h6,p,a,em,span,strong,b,body").toggleClass(classContrast);
    //Para todos los bloques, contenedores del grid, barra de miga de pan, cabecera, menu 
    $("div","section").toggleClass(classContrast);
    $("hr").toggleClass(classContrast);
    $("nav").toggleClass(classContrast);
    //Quita la seleccion de contraste
    $(".fa-stack,.ir-arriba,.text-primary,.flags-lang,.prev,.next,.nav-link,.navbar-toggler-icon,#caption").toggleClass(classContrast);
}

function setContrast() {
    let status_btn_contrast = document.getElementById("checkSwitch").checked;
    localStorage.setItem("status_contrast", status_btn_contrast);
}

function getContrast() {
    let status_contrast_localStorage = localStorage.getItem("status_contrast");
    if (status_contrast_localStorage == "true") {
        document.getElementById("checkSwitch").checked = true;
        toggleContrast("high-contrast");
    } else {
        setContrast();
    }
}


/* Funcionalidad para dar foco a encabezados de sección 
    de acuerdo a elementos de navegación */
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

function ocultarIconosInaccesibles() {
    let iconos = document.querySelectorAll('.mb2mm-arrow, [class^="fab fa-"]'); //.iconel i, .static-icon i, ...
    // Verificar si se encontraron iconos antes de intentar ocultarlos
    if (iconos.length === 0) {
        console.warn('No se encontraron iconos para ocultar.');
        return;
    }
    iconos.forEach(function(icono) {
        icono.setAttribute('aria-hidden', 'true');
    });
}

function agregarSpanEnlacesExternos() {
    let enlacesExternos = document.querySelectorAll('.link-new-window');
    if (enlacesExternos.length === 0) {
        console.warn('No se encontraron enlaces con la clase .link-new-window".');
        return;
    }
    enlacesExternos.forEach(function(enlace) {
        let span = document.createElement('span');
        span.textContent = '(Abre en una nueva ventana)';
        span.classList.add('sr-only');
        enlace.appendChild(span);
    });
}


// DOM Listo
document.addEventListener('DOMContentLoaded', () => {
    const status_btn_contrast = document.getElementById("checkSwitch");
    status_btn_contrast.addEventListener("click", setContrast);
    getContrast();
    ocultarIconosInaccesibles();
    agregarSpanEnlacesExternos();
    
    const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', handleClickFocus);
    });
});