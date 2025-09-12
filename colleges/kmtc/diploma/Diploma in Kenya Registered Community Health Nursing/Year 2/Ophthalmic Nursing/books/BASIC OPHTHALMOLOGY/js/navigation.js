document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Potential future enhancements:
    // Update progress bar based on current page index / total pages (already done with static values in HTML)
    // Smooth scrolling for internal links (e.g., glossary terms)
    // Keyboard navigability for interactive elements
});