$(document).ready(function () {

    $('.submitButton').on('click', function (e) {
        e.preventDefault();

        var modalReserva = new bootstrap.Modal(document.getElementById('modalReserva'));
        modalReserva.show();
    });

    $('.confirmButton').on('click', function (e) {
        e.preventDefault();
        alert('¡Nunca compartas información confidencial así de facil!');
    })
});