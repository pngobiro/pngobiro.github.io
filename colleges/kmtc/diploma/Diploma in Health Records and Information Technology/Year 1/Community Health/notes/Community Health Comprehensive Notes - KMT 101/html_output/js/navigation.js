document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Optional: Add simple scroll-to-top behavior when clicking "Next Section" or "Previous Section"
    const navButtons = document.querySelectorAll('.nav-button:not(.disabled)');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Only scroll if it's an anchor link on the same page (optional future enhancement)
            // or let the browser handle standard navigation to new pages.
        });
    });
});