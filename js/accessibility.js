function contrast_type(classContrast) {
    //Para todos los textos
    $("h1,h2,h3,h4,h5,h6,p,a,em,span,strong,b,body").toggleClass(classContrast);
    //Para todos los bloques, contenedores del grid, barra de miga de pan, cabecera, menu 
    $(".block,.panel,.gtopics,.breadcrumb,.container-fluid,header,.menu").toggleClass(classContrast);
    $("hr").toggleClass(classContrast);
    $("nav").toggleClass(classContrast);
    //Quita la seleccion de contraste
    $(".fa-stack,.ir-arriba,.text-primary,.flags-lang,.prev,.next,.nav-link,.navbar-toggler-icon,#caption").toggleClass(classContrast);
}

window.onload = function () {
    get_contrast();
}

//LocalStorage: Guarda cadena de texto en el navegador del usuario en formato JSON {clave: valor}
//setItem => Guarda info || getItem => Obtener info
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
