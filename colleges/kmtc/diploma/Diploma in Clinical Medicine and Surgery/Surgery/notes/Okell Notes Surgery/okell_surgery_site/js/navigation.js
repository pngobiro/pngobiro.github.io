
document.addEventListener('DOMContentLoaded', function() {
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', e => e.preventDefault());
    });
});
