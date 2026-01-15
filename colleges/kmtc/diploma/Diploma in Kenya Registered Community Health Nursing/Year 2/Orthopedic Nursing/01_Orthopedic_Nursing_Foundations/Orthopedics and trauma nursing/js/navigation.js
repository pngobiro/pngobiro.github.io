// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Update progress bar based on current page (if data attributes are present)
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    if (progressFill && progressText) {
        const currentPage = progressFill.dataset.current || 0;
        const totalPages = progressFill.dataset.total || 1;
        const percentage = (currentPage / totalPages) * 100;
        progressFill.style.width = percentage + '%';
    }

    // Keyboard navigation for chapter links
    document.addEventListener('keydown', function(e) {
        // Alt + Left Arrow for Previous
        if (e.altKey && e.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-button[href*="prev"]');
            if (prevButton && !prevButton.classList.contains('disabled')) {
                window.location.href = prevButton.href;
            }
        }
        // Alt + Right Arrow for Next
        if (e.altKey && e.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-button[href*="next"]');
            if (nextButton && !nextButton.classList.contains('disabled')) {
                window.location.href = nextButton.href;
            }
        }
        // Alt + H for Home/ToC
        if (e.altKey && e.key === 'h') {
            const homeButton = document.querySelector('.nav-button[href="index.html"], .nav-button[href="../index.html"]');
            if (homeButton) {
                window.location.href = homeButton.href;
            }
        }
    });
});
