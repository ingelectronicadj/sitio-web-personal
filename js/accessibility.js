function contrast_type(classContrast) {
    //Para todos los textos
    $("h1,h2,h3,h4,h5,h6,p,a,em,span,strong,b,body").toggleClass(classContrast);
    //Para todos los bloques, contenedores del grid, barra de miga de pan, cabecera, menu 
    $(".block,.panel,.gtopics,.breadcrumb,.container-fluid,header,.menu").toggleClass(classContrast);
    $("hr").toggleClass(classContrast);
    $("nav").toggleClass(classContrast);
    //Quita la seleccion de contraste
    $(".fa-stack,.ir-arriba,.text-primary,.flags-lang,.prev,.next,.nav-link").toggleClass(classContrast);
}

window.onload = function () {
    btn_contrast = document.getElementById("checkSwitch").checked;
    if (btn_contrast == true) {
        contrast_type("high-contrast");
    } else {
        console.log("no hay bug al reload");
    }
}