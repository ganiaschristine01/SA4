document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.querySelector(this.getAttribute('data-bs-target')));
        modal.show();
    });
});

