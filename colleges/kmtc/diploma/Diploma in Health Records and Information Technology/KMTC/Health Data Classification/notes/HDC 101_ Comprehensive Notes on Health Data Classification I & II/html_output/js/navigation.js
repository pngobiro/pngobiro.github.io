// navigation.js – basic navigation helpers

// Disable navigation buttons when they have the "disabled" class
document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(function (btn) {
        if (btn.classList.contains('disabled')) {
            btn.setAttribute('aria-disabled', 'true');
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.5';
        }
    });
});
