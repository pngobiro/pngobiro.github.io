// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
        // Optional: Remove hover effects if CSS doesn't handle it well
        button.style.cursor = 'not-allowed';
    });

    // Potential future enhancements:
    // - Dynamically calculate and set progress bar percentage
    // - Smooth scrolling for internal links (e.g., glossary terms referenced with <a href="#term-id">)
    // - Implement keyboard navigation enhancements (e.g., arrow keys for prev/next)
});