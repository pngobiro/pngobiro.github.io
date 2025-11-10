/* ================================================
   Navigation and Utility Scripts
   ================================================ */

/**
 * Document Navigation Helper
 * Provides functionality for navigating between document sections
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeTableOfContents();
});

/**
 * Initialize Document Navigation
 */
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        if (!button.classList.contains('disabled')) {
            button.addEventListener('click', function(e) {
                // Allow normal link behavior
                const href = this.getAttribute('href');
                if (href && !href.startsWith('#')) {
                    window.location.href = href;
                }
            });
        }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Alt + Left Arrow: Previous section
        if (e.altKey && e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('a.nav-button:not(.disabled)');
            if (prevBtn && prevBtn.textContent.includes('Previous')) {
                prevBtn.click();
            }
        }
        // Alt + Right Arrow: Next section
        if (e.altKey && e.key === 'ArrowRight') {
            const nextBtn = Array.from(document.querySelectorAll('a.nav-button:not(.disabled)'))
                .find(btn => btn.textContent.includes('Next'));
            if (nextBtn) {
                nextBtn.click();
            }
        }
        // Alt + H: Go to home/TOC
        if (e.altKey && e.key === 'h') {
            const homeBtn = Array.from(document.querySelectorAll('a.nav-button'))
                .find(btn => btn.textContent.includes('Table of Contents'));
            if (homeBtn) {
                homeBtn.click();
            }
        }
    });
}

/**
 * Initialize Search Functionality
 */
function initializeSearch() {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer) return;

    const searchInput = searchContainer.querySelector('input[type="search"]');
    const searchResults = searchContainer.querySelector('.search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            const searchableContent = document.querySelector('[role="main"]');
            if (!searchableContent) return;

            const text = searchableContent.innerText;
            const results = [];

            // Simple search implementation
            const lines = text.split('\n');
            lines.forEach((line, index) => {
                if (line.toLowerCase().includes(query)) {
                    results.push({
                        line: line.trim(),
                        context: index
                    });
                }
            });

            displaySearchResults(results, searchResults);
        });
    }
}

/**
 * Display Search Results
 */
function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found</p>';
        return;
    }

    let html = `<p class="search-count">${results.length} result${results.length !== 1 ? 's' : ''} found</p>`;
    html += '<ul>';
    
    results.slice(0, 10).forEach(result => {
        const truncated = result.line.substring(0, 100) + 
                         (result.line.length > 100 ? '...' : '');
        html += `<li class="search-result">${truncated}</li>`;
    });
    
    html += '</ul>';
    container.innerHTML = html;
}

/**
 * Initialize Table of Contents Link Generation
 */
function initializeTableOfContents() {
    const mainContent = document.querySelector('[role="main"]');
    if (!mainContent || mainContent.classList.contains('toc-content')) return;

    const headings = mainContent.querySelectorAll('h2, h3');
    const tocList = document.createElement('ul');
    tocList.className = 'auto-toc';

    headings.forEach((heading, index) => {
        // Add ID if not present
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }

        const li = document.createElement('li');
        li.className = heading.tagName === 'H2' ? 'toc-level-1' : 'toc-level-2';
        
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        
        li.appendChild(link);
        tocList.appendChild(li);
    });

    return tocList;
}

/**
 * Smooth Scroll to Anchor
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Highlight Active Navigation Item
 */
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('a.nav-button, .toc-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.endsWith(href)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

highlightActiveNav();

/**
 * Print Page Helper
 */
function printCurrentPage() {
    window.print();
}

/**
 * Dark Mode Toggle (Optional)
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

/**
 * Copy to Clipboard Helper
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

/**
 * Lazy Load Images
 */
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
}

lazyLoadImages();

/**
 * Update Progress Indicator
 */
function updateProgressIndicator(current, total) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        const percentage = (current / total) * 100;
        progressFill.style.width = percentage + '%';
        progressText.textContent = `Lecture ${current} of ${total}`;
    }
}

/**
 * Export namespace for external use
 */
window.DocumentNav = {
    print: printCurrentPage,
    toggleDarkMode: toggleDarkMode,
    copyToClipboard: copyToClipboard,
    updateProgress: updateProgressIndicator
};

console.log('Navigation scripts loaded successfully');
