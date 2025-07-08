document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const prevButton = document.querySelector('.nav-button:nth-child(2)');
    const nextButton = document.querySelector('.nav-button:last-child');
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    // Disable navigation buttons if they point to "#"
    if (prevButton && prevButton.getAttribute('href') === '#') {
        prevButton.classList.add('disabled');
        prevButton.setAttribute('tabindex', '-1');
    }
    if (nextButton && nextButton.getAttribute('href') === '#') {
        nextButton.classList.add('disabled');
        nextButton.setAttribute('tabindex', '-1');
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Left arrow for previous page
        if (e.key === 'ArrowLeft' && prevButton && !prevButton.classList.contains('disabled')) {
            window.location.href = prevButton.href;
        }
        // Right arrow for next page
        if (e.key === 'ArrowRight' && nextButton && !nextButton.classList.contains('disabled')) {
            window.location.href = nextButton.href;
        }
        // Home key for table of contents
        if (e.key === 'Home') {
            const tocLink = document.querySelector('.nav-button[href*="index.html"]');
            if (tocLink) {
                window.location.href = tocLink.href;
            }
        }
    });

    // Update progress bar if values are set in the HTML
    const progressElement = document.querySelector('.document-progress');
    if (progressElement) {
        const currentSection = progressElement.dataset.current;
        const totalSections = progressElement.dataset.total;
        if (currentSection && totalSections) {
            const progress = (currentSection / totalSections) * 100;
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            if (progressText) {
                progressText.textContent = `Section ${currentSection} of ${totalSections}`;
            }
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});