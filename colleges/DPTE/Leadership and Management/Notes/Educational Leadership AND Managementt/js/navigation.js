// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    document.querySelectorAll('.nav-button.disabled').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Update progress bar width based on data attribute
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progress = progressBar.getAttribute('data-progress');
        if (progress) {
            progressBar.style.width = progress + '%';
        }
    }
});
