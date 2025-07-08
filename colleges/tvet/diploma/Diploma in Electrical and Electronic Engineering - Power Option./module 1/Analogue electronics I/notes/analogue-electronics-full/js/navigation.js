// js/navigation.js
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the link from navigating
            // Optionally, provide feedback like changing the cursor or a tooltip
        });
        // Make sure disabled links are not focusable for accessibility
        button.setAttribute('aria-disabled', 'true');
        button.setAttribute('tabindex', '-1');
    });

    // Example: Dynamically set progress bar width based on 'data-progress' attribute
    // You would need to add a data-progress attribute to the .progress-fill div in HTML
    // e.g., <div class="progress-fill" style="width: 0%;" data-progress="25"></div>
    /*
    const progressBarFill = document.querySelector('.progress-fill');
    if (progressBarFill && progressBarFill.dataset.progress) {
        progressBarFill.style.width = progressBarFill.dataset.progress + '%';
    }
    */

    // Potential future enhancements:
    // - Update progress bar based on current page index / total pages (more complex logic needed)
    // - Smooth scrolling for internal links (e.g., glossary terms)
    // - Keyboard navigation improvements for interactive elements like callouts or definitions
});