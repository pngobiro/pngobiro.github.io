document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation areas (top and bottom)
    const navAreas = document.querySelectorAll('.document-nav');

    navAreas.forEach(navArea => {
        // Find Previous and Next buttons within each navigation area
        // Assuming Previous is the second button and Next is the last button
        const navButtons = navArea.querySelectorAll('.nav-button');
        if (navButtons.length >= 3) { // Need at least ToC, Prev, Next
            const prevButton = navButtons[1]; // Second button
            const nextButton = navButtons[navButtons.length - 1]; // Last button

            // Check and disable Previous button if href is '#'
            if (prevButton && (prevButton.getAttribute('href') === '#' || prevButton.href.endsWith('#'))) {
                prevButton.classList.add('disabled');
                prevButton.setAttribute('aria-disabled', 'true');
                // Optional: Prevent click action if needed, though CSS handles appearance
                prevButton.addEventListener('click', (e) => e.preventDefault());
            }

            // Check and disable Next button if href is '#'
            if (nextButton && (nextButton.getAttribute('href') === '#' || nextButton.href.endsWith('#'))) {
                nextButton.classList.add('disabled');
                nextButton.setAttribute('aria-disabled', 'true');
                // Optional: Prevent click action
                nextButton.addEventListener('click', (e) => e.preventDefault());
            }
        }
    });
});