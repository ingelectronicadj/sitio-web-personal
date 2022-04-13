var alerts = {
    textAndLinkToReport: '<a href="mailto:ingelectronicadj@gmail.com?Subject=Interesado%20en%20su%20perfil">Contacta al desarrollador</a>',
    typeError: function(someTitle, someText) {
        Swal.fire({
            icon: 'error',
            title: someTitle,
            html: someText,
            backdrop: true,
            allowOutsideClick: false,
            footer: this.textAndLinkToReport
        });
    },
    typeSuccess: function(someTitle, someText) {
        Swal.fire({
            icon: 'success',
            title: someTitle,
            html: someText,
            backdrop: true,
            timer: 2000,
            showConfirmButton: false
        });
    },
    typeWarning: function(someTitle, someText) {
        Swal.fire({
            icon: 'warning',
            title: someTitle,
            html: someText,
            backdrop: true,
            allowOutsideClick: false,
            footer: this.textAndLinkToReport
        });
    }
}