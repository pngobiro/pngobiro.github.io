/**
 * Health Care Statistics - Navigation Helper Scripts
 * Provides utilities for navigation, accessibility, and interactive features
 */

(function() {
    'use strict';

    // ========================================================================
    // Utility Functions
    // ========================================================================

    /**
     * Smooth scroll to element
     * @param {string} selector - CSS selector of the element to scroll to
     */
    function smoothScrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Set focus for accessibility
            element.focus();
        }
    }

    /**
     * Add active class to current navigation link
     */
    function highlightCurrentNav() {
        const navLinks = document.querySelectorAll('.nav-list a, .topics-list a');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href)) {
                link.setAttribute('aria-current', 'page');
                link.parentElement.classList.add('active');
            }
        });
    }

    /**
     * Handle keyboard navigation for links
     */
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(event) {
            // Alt + H: Jump to main heading
            if (event.altKey && event.key === 'h') {
                event.preventDefault();
                smoothScrollToElement('h1');
            }
            // Alt + M: Jump to main content
            if (event.altKey && event.key === 'm') {
                event.preventDefault();
                smoothScrollToElement('.main-content');
            }
            // Alt + N: Jump to navigation
            if (event.altKey && event.key === 'n') {
                event.preventDefault();
                smoothScrollToElement('.main-nav');
            }
        });
    }

    /**
     * Toggle table of contents or expand sections
     */
    function setupToggleSections() {
        const collapsibleHeaders = document.querySelectorAll('[data-collapsible]');

        collapsibleHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const nextElement = this.nextElementSibling;
                if (nextElement) {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded);
                    nextElement.style.display = isExpanded ? 'none' : 'block';
                }
            });
        });
    }

    /**
     * Dynamically generate table of contents from headings
     */
    function generateTableOfContents() {
        const toc = document.getElementById('auto-toc');
        if (!toc) return;

        const headings = document.querySelectorAll('main h2, main h3');
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';

        let currentLevel = 2;
        let currentList = tocList;
        const listStack = [{ level: 2, list: tocList }];

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }

            const level = parseInt(heading.tagName[1]);
            const item = document.createElement('li');
            const link = document.createElement('a');

            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;

            item.appendChild(link);

            // Handle nested lists
            if (level > currentLevel) {
                for (let i = currentLevel; i < level; i++) {
                    const newList = document.createElement('ul');
                    const lastItem = currentList.lastElementChild;
                    if (lastItem) {
                        lastItem.appendChild(newList);
                    } else {
                        currentList.appendChild(newList);
                    }
                    listStack.push({ level: i + 1, list: newList });
                    currentList = newList;
                }
            } else if (level < currentLevel) {
                while (listStack.length > 0 && listStack[listStack.length - 1].level > level) {
                    listStack.pop();
                }
                currentList = listStack[listStack.length - 1].list;
            }

            currentList.appendChild(item);
            currentLevel = level;
        });

        toc.appendChild(tocList);
    }

    /**
     * Setup MathJax for formula rendering
     */
    function setupMathJax() {
        if (window.MathJax) {
            window.MathJax.typesetPromise().catch(err => console.log(err));
        }
    }

    /**
     * Add copy-to-clipboard functionality for code blocks
     */
    function setupCodeBlockCopy() {
        const codeBlocks = document.querySelectorAll('pre code');

        codeBlocks.forEach((block) => {
            const pre = block.parentElement;
            const button = document.createElement('button');
            button.className = 'copy-btn';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code to clipboard');

            button.addEventListener('click', function() {
                const text = block.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            });

            pre.appendChild(button);
        });
    }

    /**
     * Setup skip-to-content link
     */
    function setupSkipToContent() {
        const skipLink = document.querySelector('.skip-to-content');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.focus();
                    mainContent.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    /**
     * Setup navigation breadcrumbs
     */
    function setupBreadcrumbs() {
        const breadcrumbContainer = document.querySelector('.breadcrumb');
        if (!breadcrumbContainer) return;

        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const breadcrumbItems = [];

        // Add home
        const homeItem = document.createElement('li');
        const homeLink = document.createElement('a');
        homeLink.href = '/';
        homeLink.textContent = 'Home';
        homeItem.appendChild(homeLink);
        breadcrumbItems.push(homeItem);

        // Add path segments
        let currentPath = '';
        pathSegments.forEach((segment, index) => {
            currentPath += '/' + segment;
            const item = document.createElement('li');

            if (index === pathSegments.length - 1) {
                // Last item is current page (no link)
                item.textContent = decodeURIComponent(segment.replace(/-/g, ' '));
            } else {
                const link = document.createElement('a');
                link.href = currentPath;
                link.textContent = decodeURIComponent(segment.replace(/-/g, ' '));
                item.appendChild(link);
            }

            breadcrumbItems.push(item);
        });

        // Clear and populate breadcrumb
        breadcrumbContainer.innerHTML = '';
        breadcrumbItems.forEach(item => breadcrumbContainer.appendChild(item));
    }

    /**
     * Initialize all navigation features
     */
    function initNavigation() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        function init() {
            highlightCurrentNav();
            setupKeyboardNavigation();
            setupToggleSections();
            generateTableOfContents();
            setupMathJax();
            setupCodeBlockCopy();
            setupSkipToContent();
            setupBreadcrumbs();

            // Re-render MathJax when content changes
            const observer = new MutationObserver(function() {
                setupMathJax();
            });

            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                observer.observe(mainContent, { childList: true, subtree: true });
            }
        }
    }

    // ========================================================================
    // Chunk Navigation Helpers
    // ========================================================================

    /**
     * Navigate to next/previous chunk
     * @param {string} direction - 'next' or 'prev'
     */
    window.navigateChunk = function(direction) {
        const link = document.querySelector(`.chunk-nav a[data-direction="${direction}"]`);
        if (link && !link.classList.contains('disabled')) {
            window.location.href = link.href;
        }
    };

    /**
     * Get current chunk info from data attributes
     */
    window.getChunkInfo = function() {
        const article = document.querySelector('article');
        if (article && article.dataset) {
            return {
                current: article.dataset.chunk,
                total: article.dataset.totalChunks,
                title: article.dataset.chunkTitle
            };
        }
        return null;
    };

    // ========================================================================
    // Accessibility Enhancements
    // ========================================================================

    /**
     * Announce content changes to screen readers
     * @param {string} message - Message to announce
     */
    window.announceToScreenReader = function(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => {
            announcement.remove();
        }, 1000);
    };

    /**
     * Add focus visible styles for keyboard navigation
     */
    function setupFocusStyles() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // ========================================================================
    // Performance & Resource Loading
    // ========================================================================

    /**
     * Lazy load images
     */
    function setupLazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // ========================================================================
    // Initialize on Load
    // ========================================================================

    initNavigation();
    setupFocusStyles();
    setupLazyLoadImages();

    // Log initialization
    console.log('Health Care Statistics - Navigation initialized');
})();
