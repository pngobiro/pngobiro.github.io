document.addEventListener('DOMContentLoaded', () => {
    const navLinksContainers = document.querySelectorAll('.nav-links');

    navLinksContainers.forEach(navLinks => {
        // Select buttons within each nav container (top and bottom)
        // Assuming fixed positions: 2nd child is Previous, last child is Next
        const prevButton = navLinks.querySelector('.nav-button:nth-child(2)');
        const nextButton = navLinks.querySelector('.nav-button:last-child');

        // Disable Previous button if href is '#'
        if (prevButton && prevButton.getAttribute('href') === '#') {
            prevButton.classList.add('disabled');
            // Optional: Prevent click action
            prevButton.addEventListener('click', (e) => e.preventDefault());
        }

        // Disable Next button if href is '#'
        if (nextButton && nextButton.getAttribute('href') === '#') {
            nextButton.classList.add('disabled');
            // Optional: Prevent click action
            nextButton.addEventListener('click', (e) => e.preventDefault());
        }
    });
});