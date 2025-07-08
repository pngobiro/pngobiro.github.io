// --- Copied content from JavaScript (navigation.js) section ---
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Optionally provide feedback like changing cursor or a tooltip
            // button.style.cursor = 'not-allowed'; // CSS already handles this
        });
        // Ensure tabindex is -1 for disabled buttons to remove from tab order
        button.setAttribute('tabindex', '-1');
        button.setAttribute('aria-disabled', 'true');
    });

     // Enable buttons that are not disabled (redundant if they don't have the class, but safe)
    const enabledButtons = document.querySelectorAll('.nav-button:not(.disabled)');
     enabledButtons.forEach(button => {
        button.removeAttribute('aria-disabled');
        button.removeAttribute('tabindex'); // Allow tabbing
    });


    // Potential future enhancements:
    // - Update progress bar based on current page index / total pages
    // - Smooth scrolling for internal links (e.g., glossary terms)
    // - Keyboard navigation for interactive elements
});
// --- End of JavaScript (navigation.js) section ---