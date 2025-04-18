document.addEventListener('DOMContentLoaded', function() {
    // Update progress bar if it exists
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        // Get current page number from meta tag or derive from URL
        const currentPath = window.location.pathname;
        const match = currentPath.match(/chapter-(\d+)(?:-section-(\d+))?(?:-part-(\d+))?/);
        
        if (match) {
            // Extract chapter, section, and part numbers
            const chapter = match[1];
            const section = match[2] || '';
            const part = match[3] || '';
            
            // Update progress text
            let locationText = `Chapter ${chapter}`;
            if (section) locationText += `, Section ${section}`;
            if (part) locationText += `, Part ${part}`;
            progressText.textContent = locationText;
            
            // Set a basic progress percentage (can be enhanced with actual progress data)
            const progressPercentage = '30%'; // This should be calculated based on total sections
            progressFill.style.width = progressPercentage;
        }
    }

    // Handle navigation button states
    const prevButton = document.querySelector('.nav-button[href*="previous"]');
    const nextButton = document.querySelector('.nav-button[href*="next"]');

    // Disable navigation buttons if they point to '#'
    if (prevButton && prevButton.getAttribute('href') === '#') {
        prevButton.classList.add('disabled');
        prevButton.setAttribute('aria-disabled', 'true');
    }

    if (nextButton && nextButton.getAttribute('href') === '#') {
        nextButton.classList.add('disabled');
        nextButton.setAttribute('aria-disabled', 'true');
    }
});