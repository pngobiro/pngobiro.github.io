// Basic Navigation Helpers
(function() {
    'use strict';

    // Disable/enable navigation links
    function updateNavLinks() {
        const hash = window.location.hash;
        if (!hash) return;

        // For scroll-to-section functionality
        const target = document.querySelector(hash);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Handle keyboard navigation
    function handleKeyboardNav(e) {
        // Add keyboard shortcuts if needed
        if (e.key === 'Escape') {
            // Close any open menus or modals here
        }
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        updateNavLinks();
        document.addEventListener('keydown', handleKeyboardNav);
    });

    // Handle hash changes for single-page navigation
    window.addEventListener('hashchange', function() {
        updateNavLinks();
    });

    // Add loading states for navigation
    const navLinks = document.querySelectorAll('a[href]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only add loading state for external or slow navigation
            const href = this.getAttribute('href');
            if (href && (href.startsWith('http') || href.includes('.html'))) {
                // Add visual feedback
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 500);
            }
        });
    });

})();