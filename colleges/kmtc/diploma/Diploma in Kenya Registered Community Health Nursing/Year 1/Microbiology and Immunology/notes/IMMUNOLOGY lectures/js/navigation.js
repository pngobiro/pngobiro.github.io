// js/navigation.js
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Dynamically update ToC link icons if needed, or ensure they are set in HTML
    const tocButton = document.querySelector('.nav-button[href*="index.html"] .nav-icon');
    if (tocButton && tocButton.textContent.trim() === "") { // Check if icon text is empty
        // tocButton.textContent = "☰"; // Example fallback if not set in HTML
    }
    
    const prevButtonIcon = document.querySelector('.nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled) .nav-icon');
     if (prevButtonIcon && prevButtonIcon.textContent.trim() === "←") {
        // Icon is already set or handled by CSS, no action needed
        // If it was meant to be dynamically set and is empty:
        // prevButtonIcon.textContent = "←";
    }

    const nextButtonIcon = document.querySelector('.nav-button:last-child:not([href*="index.html"]):not(.disabled) .nav-icon');
    if (nextButtonIcon && nextButtonIcon.textContent.trim() === "→") {
        // Icon is already set or handled by CSS, no action needed
        // If it was meant to be dynamically set and is empty:
        // nextButtonIcon.textContent = "→";
    }


    // Potential future enhancements:
    // Update progress bar based on current page index / total pages (already done with static values in HTML)
    // Smooth scrolling for internal links (e.g., glossary terms)
    // Keyboard navigability for interactive elements
});