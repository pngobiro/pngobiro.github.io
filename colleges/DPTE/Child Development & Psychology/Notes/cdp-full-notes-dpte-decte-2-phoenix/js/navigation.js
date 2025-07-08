// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Note: The progress bar percentage and "Lecture X of Y" text in the HTML template
    // are intended to be filled with static, correct values for each specific chunk
    // during the HTML generation phase. This script does not dynamically update them.
});