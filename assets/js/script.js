$(document).ready(function () {
    $('.submitButton').on('click', function (e) {
        e.preventDefault();

        const formPrincipal = document.querySelector('.needs-validation');

        if (!formPrincipal.checkValidity()) {
            formPrincipal.classList.add('was-validated');
        } else {
            const modalReserva = new bootstrap.Modal(document.getElementById('modalReserva'));
            modalReserva.show();
        }
    });

    $('.confirmButton').on('click', function (e) {
        e.preventDefault();

        const formModal = document.querySelector('#formConfirmation');

        if (!formModal.checkValidity()) {
            formModal.classList.add('was-validated');
        } else {
            alert('¡Nunca compartas información confidencial así de fácil!');
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalReserva'));
            modal.hide();
        }
    });
});
