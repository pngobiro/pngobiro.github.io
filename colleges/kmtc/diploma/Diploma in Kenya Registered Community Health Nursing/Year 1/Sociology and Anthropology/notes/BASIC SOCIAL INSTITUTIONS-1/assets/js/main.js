// Main JavaScript file for Basic Social Institutions web project
// Handles navigation, search, accessibility, and interactive features

class DocumentManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.setupSearch();
        this.setupScrollProgress();
        this.setupBackToTop();
        this.setupAccessibility();
        this.setupLazyLoading();
        this.initializeApp();
    }

    // Event listeners setup
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.highlightActiveSection();
        });

        window.addEventListener('scroll', this.throttle(() => {
            this.updateScrollProgress();
            this.highlightActiveSection();
            this.toggleBackToTop();
        }, 100));

        window.addEventListener('resize', this.throttle(() => {
            this.handleResize();
        }, 250));

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.scrollToSection(e.state.section, false);
            }
        });
    }

    // Navigation functionality
    setupNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                
                // Animate hamburger
                navToggle.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.classList.remove('active');
                }
            });
        }

        // Navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId, true);
                
                // Close mobile menu
                if (navMenu) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        navToggle.setAttribute('aria-expanded', 'false');
                        navToggle.classList.remove('active');
                    }
                }
            });
        });

        // Table of contents links
        const tocLinks = document.querySelectorAll('.toc a');
        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId, true);
            });
        });
    }

    // Smooth scrolling to sections
    scrollToSection(sectionId, updateHistory = true) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL and history
            if (updateHistory) {
                const newUrl = `${window.location.pathname}#${sectionId}`;
                history.pushState({ section: sectionId }, '', newUrl);
            }

            // Focus management for accessibility
            section.setAttribute('tabindex', '-1');
            section.focus();
            section.addEventListener('blur', () => {
                section.removeAttribute('tabindex');
            }, { once: true });
        }
    }

    // Highlight active section in navigation
    highlightActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        const tocLinks = document.querySelectorAll('.toc a');
        const headerHeight = document.querySelector('.nav').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && 
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        // Update navigation active states
        [...navLinks, ...tocLinks].forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Search functionality
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const searchResults = document.getElementById('search-results');
        const searchResultsContent = document.getElementById('search-results-content');

        if (!searchInput || !searchButton || !searchResults) return;

        let searchIndex = this.buildSearchIndex();

        const performSearch = () => {
            const query = searchInput.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            const results = this.searchContent(query, searchIndex);
            this.displaySearchResults(results, searchResultsContent);
            searchResults.style.display = results.length > 0 ? 'block' : 'none';
        };

        // Search input events
        searchInput.addEventListener('input', this.debounce(performSearch, 300));
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchResults.style.display = 'none';
                searchInput.blur();
            }
        });

        // Search button click
        searchButton.addEventListener('click', performSearch);

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && 
                !searchResults.contains(e.target) &&
                !searchButton.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // Build search index from content
    buildSearchIndex() {
        const sections = document.querySelectorAll('.section');
        const index = [];

        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.querySelector('h2')?.textContent || '';
            const subsections = section.querySelectorAll('h3, h4, h5');
            const paragraphs = section.querySelectorAll('p');
            const lists = section.querySelectorAll('li');

            // Index section title
            if (sectionTitle) {
                index.push({
                    id: sectionId,
                    title: sectionTitle,
                    content: sectionTitle,
                    type: 'section'
                });
            }

            // Index subsections
            subsections.forEach(subsection => {
                index.push({
                    id: sectionId,
                    title: `${sectionTitle} - ${subsection.textContent}`,
                    content: subsection.textContent,
                    type: 'subsection'
                });
            });

            // Index paragraphs
            paragraphs.forEach(paragraph => {
                const content = paragraph.textContent.trim();
                if (content.length > 10) {
                    index.push({
                        id: sectionId,
                        title: sectionTitle,
                        content: content,
                        type: 'paragraph'
                    });
                }
            });

            // Index list items
            lists.forEach(listItem => {
                const content = listItem.textContent.trim();
                if (content.length > 5) {
                    index.push({
                        id: sectionId,
                        title: sectionTitle,
                        content: content,
                        type: 'list'
                    });
                }
            });
        });

        return index;
    }

    // Search content using the index
    searchContent(query, index) {
        const results = [];
        const queryWords = query.split(' ').filter(word => word.length > 1);

        index.forEach(item => {
            const content = item.content.toLowerCase();
            let score = 0;
            let matches = [];

            queryWords.forEach(word => {
                const wordIndex = content.indexOf(word);
                if (wordIndex !== -1) {
                    score += item.type === 'section' ? 10 : 
                            item.type === 'subsection' ? 5 : 1;
                    matches.push(word);
                }
            });

            if (score > 0) {
                // Get context around matches
                const context = this.getSearchContext(item.content, matches);
                results.push({
                    ...item,
                    score,
                    context,
                    matches
                });
            }
        });

        // Sort by score and remove duplicates
        return results
            .sort((a, b) => b.score - a.score)
            .filter((item, index, self) => 
                index === self.findIndex(i => i.id === item.id && i.content === item.content)
            )
            .slice(0, 10);
    }

    // Get context around search matches
    getSearchContext(content, matches) {
        const maxLength = 150;
        if (content.length <= maxLength) return content;

        // Find the first match position
        const firstMatch = matches.reduce((pos, match) => {
            const matchPos = content.toLowerCase().indexOf(match);
            return matchPos !== -1 && (pos === -1 || matchPos < pos) ? matchPos : pos;
        }, -1);

        if (firstMatch === -1) return content.substring(0, maxLength) + '...';

        // Create context around the match
        const start = Math.max(0, firstMatch - 50);
        const end = Math.min(content.length, start + maxLength);
        
        let context = content.substring(start, end);
        if (start > 0) context = '...' + context;
        if (end < content.length) context = context + '...';

        return context;
    }

    // Display search results
    displaySearchResults(results, container) {
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p>No results found.</p>';
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item">
                <h3><a href="#${result.id}">${this.escapeHtml(result.title)}</a></h3>
                <p>${this.highlightMatches(this.escapeHtml(result.context), result.matches)}</p>
                <small>Type: ${result.type}</small>
            </div>
        `).join('');

        container.innerHTML = resultsHTML;

        // Add click handlers to result links
        container.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId, true);
                document.getElementById('search-results').style.display = 'none';
            });
        });
    }

    // Highlight search matches in text
    highlightMatches(text, matches) {
        let highlightedText = text;
        matches.forEach(match => {
            const regex = new RegExp(`(${this.escapeRegex(match)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        return highlightedText;
    }

    // Scroll progress indicator
    setupScrollProgress() {
        this.progressBar = document.getElementById('progress-bar');
    }

    updateScrollProgress() {
        if (!this.progressBar) return;

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        this.progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // Back to top functionality
    setupBackToTop() {
        this.backToTopBtn = document.getElementById('back-to-top');
        
        if (this.backToTopBtn) {
            this.backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Focus management
                document.querySelector('.skip-link') || document.body.focus();
            });
        }
    }

    toggleBackToTop() {
        if (!this.backToTopBtn) return;

        if (window.scrollY > 300) {
            this.backToTopBtn.style.display = 'flex';
        } else {
            this.backToTopBtn.style.display = 'none';
        }
    }

    // Accessibility enhancements
    setupAccessibility() {
        // Keyboard navigation for nav menu
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextLink = navLinks[index + 1] || navLinks[0];
                    nextLink.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevLink = navLinks[index - 1] || navLinks[navLinks.length - 1];
                    prevLink.focus();
                }
            });
        });

        // Improve focus indicators
        this.addFocusIndicators();
    }

    addFocusIndicators() {
        // Add custom focus indicators for better visibility
        const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.setAttribute('data-focus-visible', 'true');
            });
            
            element.addEventListener('blur', () => {
                element.removeAttribute('data-focus-visible');
            });
        });
    }

    // Lazy loading for images
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Handle window resize
    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            
            if (navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
            }
        }
    }

    // Initialize app state
    initializeApp() {
        // Handle initial hash in URL
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            setTimeout(() => {
                this.scrollToSection(sectionId, false);
            }, 100);
        }

        // Set initial progress
        this.updateScrollProgress();
        this.toggleBackToTop();
        this.highlightActiveSection();
    }

    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// Print functionality
class PrintManager {
    static optimizeForPrint() {
        // Add print-specific optimizations
        const style = document.createElement('style');
        style.textContent = `
            @media print {
                .section {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                .section h2 {
                    break-after: avoid;
                    page-break-after: avoid;
                }
                img {
                    max-height: 300px;
                    page-break-inside: avoid;
                }
            }
        `;
        document.head.appendChild(style);
    }

    static handlePrint() {
        window.addEventListener('beforeprint', () => {
            // Expand all collapsed sections
            console.log('Preparing for print...');
        });

        window.addEventListener('afterprint', () => {
            // Restore original state
            console.log('Print completed');
        });
    }
}

// Theme manager for dark/light mode
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Check for saved theme preference or default to 'auto'
        const savedTheme = localStorage.getItem('theme') || 'auto';
        this.setTheme(savedTheme);
        this.setupThemeToggle();
    }

    setTheme(theme) {
        if (theme === 'auto') {
            // Use system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        localStorage.setItem('theme', theme);
    }

    setupThemeToggle() {
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (localStorage.getItem('theme') === 'auto') {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Analytics and performance monitoring
class AnalyticsManager {
    static trackPageView() {
        // Track page views if analytics is enabled
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID');
        }
    }

    static trackSectionView(sectionId) {
        // Track section views
        if (typeof gtag !== 'undefined') {
            gtag('event', 'section_view', {
                section_id: sectionId,
                page_title: document.title
            });
        }
    }

    static trackSearch(query, resultsCount) {
        // Track search usage
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                search_term: query,
                results_count: resultsCount
            });
        }
    }
}

// Performance monitoring
class PerformanceManager {
    static measurePerformance() {
        // Measure and log performance metrics
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load performance:', {
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                    totalTime: perfData.loadEventEnd - perfData.navigationStart
                });
            }, 0);
        });
    }

    static observeElementPerformance() {
        // Use Intersection Observer to track element visibility
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        if (sectionId) {
                            AnalyticsManager.trackSectionView(sectionId);
                        }
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.section').forEach(section => {
                observer.observe(section);
            });
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionality
    new DocumentManager();
    new ThemeManager();
    
    // Initialize print functionality
    PrintManager.optimizeForPrint();
    PrintManager.handlePrint();
    
    // Track analytics
    AnalyticsManager.trackPageView();
    
    // Monitor performance
    PerformanceManager.measurePerformance();
    PerformanceManager.observeElementPerformance();
    
    console.log('Basic Social Institutions web application initialized successfully');
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DocumentManager, ThemeManager, PrintManager, AnalyticsManager };
}
