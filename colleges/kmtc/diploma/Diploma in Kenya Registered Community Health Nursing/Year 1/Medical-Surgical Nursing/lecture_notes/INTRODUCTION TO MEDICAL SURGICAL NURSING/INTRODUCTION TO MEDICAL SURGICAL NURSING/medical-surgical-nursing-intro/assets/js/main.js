// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Disable navigation buttons if at start/end
    const prevButtons = document.querySelectorAll('.nav-button[href*="previous"]');
    const nextButtons = document.querySelectorAll('.nav-button[href*="next"]');
    
    // Check if previous link exists
    if (prevButtons.length > 0) {
        const prevLink = prevButtons[0].getAttribute('href');
        if (prevLink === '#' || !prevLink || prevLink.includes('disabled')) {
            prevButtons.forEach(btn => {
                btn.classList.add('disabled');
                btn.href = '#';
            });
        }
    }
    
    // Check if next link exists
    if (nextButtons.length > 0) {
        const nextLink = nextButtons[0].getAttribute('href');
        if (nextLink === '#' || !nextLink || nextLink.includes('disabled')) {
            nextButtons.forEach(btn => {
                btn.classList.add('disabled');
                btn.href = '#';
            });
        }
    }
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Left arrow for previous section
        if (e.key === 'ArrowLeft') {
            const prevLink = document.querySelector('.nav-button[href*="previous"]:not(.disabled)');
            if (prevLink) {
                window.location.href = prevLink.href;
            }
        }
        
        // Right arrow for next section
        if (e.key === 'ArrowRight') {
            const nextLink = document.querySelector('.nav-button[href*="next"]:not(.disabled)');
            if (nextLink) {
                window.location.href = nextLink.href;
            }
        }
        
        // Home key for table of contents
        if (e.key === 'Home') {
            const tocLink = document.querySelector('.nav-button[href*="index.html"]');
            if (tocLink) {
                window.location.href = tocLink.href;
            }
        }
    });
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        if (width) {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
    
    // Add focus styles for accessibility
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(el => {
        el.style.outline = 'none';
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid #007bff';
        });
        el.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Mobile menu toggle (if needed for future expansion)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const nav = document.querySelector('.document-nav');
            nav.classList.toggle('active');
        });
    }
});

// Simple search functionality (placeholder for future implementation)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const contentSections = document.querySelectorAll('.content-section');
            
            contentSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    section.style.display = 'block';
                    section.scrollIntoView({ behavior: 'smooth' });
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch);

// MathJax configuration (if needed)
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        tags: 'ams'
    },
    svg: { fontCache: 'global' },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
};