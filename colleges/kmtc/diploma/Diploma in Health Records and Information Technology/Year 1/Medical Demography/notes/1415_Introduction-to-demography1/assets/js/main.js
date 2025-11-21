// Introduction to Demography - Navigation Script
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

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const prevButton = document.querySelector('.nav-button[href*="previous"]:not(.disabled)');
        const nextButton = document.querySelector('.nav-button[href*="next"]:not(.disabled)');
        
        // Alt + Left Arrow for previous page
        if (e.altKey && e.key === 'ArrowLeft' && prevButton) {
            window.location.href = prevButton.href;
        }
        
        // Alt + Right Arrow for next page
        if (e.altKey && e.key === 'ArrowRight' && nextButton) {
            window.location.href = nextButton.href;
        }
        
        // Alt + Home for table of contents
        if (e.altKey && e.key === 'Home') {
            const tocButton = document.querySelector('.nav-button[href*="index.html"]');
            if (tocButton) {
                window.location.href = tocButton.href;
            }
        }
    });

    // Add table of contents highlighting (if on index page)
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        highlightCurrentSection();
    }

    // Add image lazy loading fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    // Add copy code button to pre code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
        
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
    });

    // Print page title in console for debugging
    console.log('Page loaded:', document.title);
    console.log('MathJax loaded:', typeof MathJax !== 'undefined');
});

function highlightCurrentSection() {
    const currentPath = window.location.pathname;
    const tocLinks = document.querySelectorAll('.toc a');
    
    tocLinks.forEach(link => {
        if (link.href && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}

// Add MathJax ready callback
window.MathJax = window.MathJax || {
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
    },
    startup: {
        ready: () => {
            console.log('MathJax is ready!');
            MathJax.startup.defaultReady();
        }
    }
};
