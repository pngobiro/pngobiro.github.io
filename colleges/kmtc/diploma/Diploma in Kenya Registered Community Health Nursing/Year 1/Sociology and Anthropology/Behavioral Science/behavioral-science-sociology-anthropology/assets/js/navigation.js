/**
 * Navigation JavaScript for Behavioral Science Course
 * Handles navigation controls, progress tracking, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProgressTracking();
    initializeAccessibilityFeatures();
    initializeInteractiveElements();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Handle disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Add ARIA attributes for accessibility
        button.setAttribute('aria-disabled', 'true');
        button.setAttribute('tabindex', '-1');
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Alt + Left Arrow = Previous page
        if (e.altKey && e.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-button[href*="previous"]:not(.disabled)');
            if (prevButton) {
                window.location.href = prevButton.href;
            }
        }
        
        // Alt + Right Arrow = Next page
        if (e.altKey && e.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-button[href*="next"]:not(.disabled)');
            if (nextButton) {
                window.location.href = nextButton.href;
            }
        }
        
        // Alt + Home = Table of Contents
        if (e.altKey && e.key === 'Home') {
            const tocButton = document.querySelector('.nav-button[href*="index.html"]');
            if (tocButton) {
                window.location.href = tocButton.href;
            }
        }
    });
}

/**
 * Initialize progress tracking
 */
function initializeProgressTracking() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        // Animate progress bar on load
        setTimeout(() => {
            const currentWidth = progressFill.style.width;
            progressFill.style.width = '0%';
            setTimeout(() => {
                progressFill.style.width = currentWidth;
            }, 100);
        }, 500);
    }
}

/**
 * Initialize accessibility features
 */
function initializeAccessibilityFeatures() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if it doesn't exist
    const mainContent = document.querySelector('main, .section-content, .content-section');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Enhance focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

/**
 * Initialize interactive elements
 */
function initializeInteractiveElements() {
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
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
                
                // Update focus for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                targetElement.addEventListener('blur', function() {
                    this.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    });
    
    // Add tooltips for definition terms
    const definitions = document.querySelectorAll('dfn');
    definitions.forEach(dfn => {
        dfn.addEventListener('mouseenter', function() {
            showTooltip(this);
        });
        
        dfn.addEventListener('mouseleave', function() {
            hideTooltip();
        });
        
        dfn.addEventListener('focus', function() {
            showTooltip(this);
        });
        
        dfn.addEventListener('blur', function() {
            hideTooltip();
        });
    });
    
    // Add collapsible sections functionality
    const collapsibleTriggers = document.querySelectorAll('[data-toggle="collapse"]');
    collapsibleTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.querySelector(targetId);
            
            if (target) {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                target.style.display = isExpanded ? 'none' : 'block';
            }
        });
    });
    
    // Initialize reading progress indicator
    initializeReadingProgress();
}

/**
 * Show tooltip for definition terms
 */
function showTooltip(element) {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = element.title || 'Definition term';
    tooltip.style.cssText = `
        position: absolute;
        background: var(--primary-color);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

/**
 * Hide tooltip
 */
function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

/**
 * Initialize reading progress indicator
 */
function initializeReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-color), var(--success-color));
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = Math.min(progress, 100) + '%';
    });
}

/**
 * Print functionality
 */
function printPage() {
    window.print();
}

/**
 * Search functionality (basic implementation)
 */
function searchContent(query) {
    if (!query || query.length < 2) {
        clearSearchHighlights();
        return;
    }
    
    const content = document.querySelector('main, .section-content');
    if (!content) return;
    
    clearSearchHighlights();
    
    const walker = document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        
        if (regex.test(text)) {
            const highlightedText = text.replace(regex, '<mark class="search-highlight">$1</mark>');
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(span, textNode);
        }
    });
}

/**
 * Clear search highlights
 */
function clearSearchHighlights() {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}

/**
 * Escape special regex characters
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Theme switching (light/dark mode)
 */
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

/**
 * Initialize theme from localStorage
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Export functions for global use
window.NavigationHelpers = {
    printPage,
    searchContent,
    clearSearchHighlights,
    toggleTheme
};
