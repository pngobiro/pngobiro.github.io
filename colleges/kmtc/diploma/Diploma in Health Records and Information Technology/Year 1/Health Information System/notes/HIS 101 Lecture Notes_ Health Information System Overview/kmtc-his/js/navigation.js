// Basic navigation helper functions for KMTC HIS course
// This file provides basic functionality for navigation and user interactions

/**
 * Initialize navigation functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('KMTC HIS Navigation initialized');

    // Disable disabled navigation links
    const disabledLinks = document.querySelectorAll('.nav-button.disabled');
    disabledLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Disabled link clicked - no action taken');
        });
    });

    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add basic keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Handle Escape key for modals or overlays (if any)
        if (e.key === 'Escape') {
            // Close any open modals or overlays
            closeAnyOpenMenus();
        }

        // Handle Tab navigation improvements
        if (e.key === 'Tab') {
            // Ensure focus indicators are visible
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class when mouse is used
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

/**
 * Handle progress bar updates (placeholder for future functionality)
 */
function updateProgress(current, total) {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const percentage = Math.round((current / total) * 100);
        bar.style.width = percentage + '%';

        // Update ARIA label for accessibility
        const progressContainer = bar.closest('.document-progress');
        if (progressContainer) {
            const progressText = progressContainer.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `Lecture ${current} of ${total}`;
            }
        }
    });
}

/**
 * Close any open menus or overlays (placeholder for future functionality)
 */
function closeAnyOpenMenus() {
    // Implementation for closing dropdowns, modals, etc.
    // Currently a placeholder for future enhancements
    console.log('Close any open menus called');
}

/**
 * Utility function to check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Handle page transitions (placeholder for future functionality)
 */
function navigateToPage(pageUrl, direction = 'next') {
    // Add transition class for smooth animations
    document.body.classList.add('page-transitioning');

    // Simple page navigation with optional direction indicator
    setTimeout(() => {
        window.location.href = pageUrl;
    }, 200);
}

// Export functions for potential use by other scripts
window.kmtcNavigation = {
    updateProgress: updateProgress,
    navigateToPage: navigateToPage,
    isInViewport: isInViewport
};