function contrast_type(classContrast) {
    //Para todos los textos
    $("h1,h2,h3,h4,h5,h6,p,a,em,span,strong,b,body").toggleClass(classContrast);
    //Para todos los bloques, contenedores del grid, barra de miga de pan, cabecera, menu 
    $(".block,.panel,.gtopics,.breadcrumb,.container-fluid,header,.menu").toggleClass(classContrast);
    //Para el contenedor al interior del grid de los entornos
    $("#gridshadebox_content.absolute").toggleClass(classContrast);
    //Para fondo cercano a botones de moodle
    $(".form-buttons,.fitem").toggleClass(classContrast);
    //Retira la clase para ajuste de texto entre fondo blanco
    $(".etiqueta-gestion-estudiante h1").toggleClass(classContrast);
    //Retira la clase para ajuste de texto al interior de botones
    $("button>span").toggleClass(classContrast);
    //Para bloques acoplados a la izquierda
    $(".dockeditempanel_content").toggleClass(classContrast);
    // Tratamiento para imagenes
    $("img.activityicon").css("opacity", "1");
    //Para fuera del curso, en listado de cursos, fondo de celdas
    $(".coursebox.clearfix.even,.categoryname,td").toggleClass(classContrast);
    //Quita la clase para ajustar controles de accesibilidad
    $(".accordion-accessibility,.a-action").toggleClass(classContrast);
    $("hr").toggleClass(classContrast);
    $("nav").toggleClass(classContrast);
    $(".fa-stack,.ir-arriba,.text-primary").toggleClass(classContrast);
}
