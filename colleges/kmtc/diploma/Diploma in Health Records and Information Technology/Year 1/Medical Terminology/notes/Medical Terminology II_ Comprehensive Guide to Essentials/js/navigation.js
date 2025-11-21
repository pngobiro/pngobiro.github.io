// Medical Terminology II - Navigation Script
// Basic JS for disabled links and potential future enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Add smooth scrolling for internal anchor links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(event) {
        // Alt + Left Arrow - Previous section
        if (event.altKey && event.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-button[href*="previous"]:not(.disabled)');
            if (prevButton) {
                prevButton.click();
            }
        }
        
        // Alt + Right Arrow - Next section
        if (event.altKey && event.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-button[href*="next"]:not(.disabled)');
            if (nextButton) {
                nextButton.click();
            }
        }
        
        // Alt + Home - Table of Contents
        if (event.altKey && event.key === 'Home') {
            const tocButton = document.querySelector('.nav-button[href*="index.html"]');
            if (tocButton) {
                tocButton.click();
            }
        }
    });

    // Potential future enhancements:
    // - Update progress bar based on scroll position
    // - Add tooltips for navigation buttons
    // - Implement search functionality
    // - Add theme switcher (light/dark mode)
    // - Add print-friendly view toggle
});
