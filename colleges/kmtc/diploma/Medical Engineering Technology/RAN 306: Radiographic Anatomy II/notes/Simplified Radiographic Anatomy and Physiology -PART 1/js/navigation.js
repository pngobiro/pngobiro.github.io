document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons
    const tocButton = document.querySelector('.nav-button[href*="index.html"]');
    const prevButton = document.querySelector('.nav-links .nav-button:nth-child(2)');
    const nextButton = document.querySelector('.nav-links .nav-button:last-child');

    // Disable navigation buttons if they lead nowhere
    if (prevButton && prevButton.getAttribute('href') === '#') {
        prevButton.classList.add('disabled');
        prevButton.style.opacity = '0.5';
        prevButton.style.cursor = 'not-allowed';
    }

    if (nextButton && nextButton.getAttribute('href') === '#') {
        nextButton.classList.add('disabled');
        nextButton.style.opacity = '0.5';
        nextButton.style.cursor = 'not-allowed';
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {  // Only trigger with Alt key pressed
            switch(e.key) {
                case 'ArrowLeft':  // Alt + Left Arrow for Previous
                    if (prevButton && !prevButton.classList.contains('disabled')) {
                        window.location.href = prevButton.getAttribute('href');
                    }
                    break;
                case 'ArrowRight':  // Alt + Right Arrow for Next
                    if (nextButton && !nextButton.classList.contains('disabled')) {
                        window.location.href = nextButton.getAttribute('href');
                    }
                    break;
                case 'Home':  // Alt + Home for Table of Contents
                    if (tocButton) {
                        window.location.href = tocButton.getAttribute('href');
                    }
                    break;
            }
        }
    });

    // Update progress information
    const progressElement = document.querySelector('.document-progress');
    if (progressElement) {
        // Extract current page information from URL
        const path = window.location.pathname;
        const match = path.match(/chapter(\d+)-part(\d+)\.html/);
        
        if (match) {
            const chapter = match[1];
            const part = match[2];
            progressElement.textContent = `Chapter ${chapter} - Part ${part}`;
        }
    }

    // Add hover effects for navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(-2px)';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Handle navigation button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
            }
        });
    });
});