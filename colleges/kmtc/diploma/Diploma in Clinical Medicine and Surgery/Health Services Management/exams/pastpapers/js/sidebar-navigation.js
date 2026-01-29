// Sidebar Navigation and Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    const body = document.body;

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            body.classList.toggle('sidebar-open');
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', function() {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            body.classList.remove('sidebar-open');
        });
    }

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        updateThemeToggleIcon(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = html.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggleIcon(!isDark);
        });
    }

    function updateThemeToggleIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            text.textContent = 'Light Mode';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            text.textContent = 'Dark Mode';
        }
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or a disabled link
            if (href === '#' || this.classList.contains('disabled')) {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile sidebar if open
                sidebar.classList.remove('active');
                backdrop.classList.remove('active');
                body.classList.remove('sidebar-open');
            }
        });
    });

    // Active Navigation Highlighting
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '#') {
            item.classList.add('active');
        }
    });

    // Back to Top Button (if exists)
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Print Functionality
    const printButtons = document.querySelectorAll('[data-print]');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // ESC to close sidebar
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            body.classList.remove('sidebar-open');
        }

        // Ctrl/Cmd + K for search (if implemented)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });

    // Answer Toggle Animation
    const answerDetails = document.querySelectorAll('.answer-box details');
    answerDetails.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                const summary = this.querySelector('summary');
                summary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // Question Navigation (for exam papers)
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach((card, index) => {
        card.setAttribute('data-question-index', index);
    });

    // Add loading state to buttons
    const actionButtons = document.querySelectorAll('.btn:not([disabled])');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only add loading state for non-anchor buttons
            if (this.tagName === 'BUTTON') {
                this.classList.add('loading');
                this.disabled = true;
            }
        });
    });
});
