// Epidemiology Notes - Navigation and Interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Keyboard navigation for table of contents
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (index < tocLinks.length - 1) {
                    tocLinks[index + 1].focus();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (index > 0) {
                    tocLinks[index - 1].focus();
                }
            }
        });
    });

    // Track scroll position for progress bar
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        window.addEventListener('scroll', function() {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressFill.style.width = Math.min(scrollPercentage, 100) + '%';
        });
    }

    // Add copy button to code blocks (optional enhancement)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-button';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        copyButton.addEventListener('click', function() {
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });
        
        if (pre.parentElement.tagName === 'DIV') {
            pre.parentElement.style.position = 'relative';
        }
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });

    // Mobile menu toggle (if applicable)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        });
    }

    // Print page functionality
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Add aria-current to current page link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('a[href]');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) && href !== '/') {
            link.setAttribute('aria-current', 'page');
        }
    });

    // Enhance table accessibility
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.getAttribute('role')) {
            table.setAttribute('role', 'table');
        }
        const thead = table.querySelector('thead');
        if (thead) {
            thead.setAttribute('role', 'rowgroup');
        }
        const tbody = table.querySelector('tbody');
        if (tbody) {
            tbody.setAttribute('role', 'rowgroup');
        }
    });

    // Dark mode toggle (optional)
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const newDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', newDarkMode);
        });
    }

    // Expand/collapse sections functionality
    const collapsibleHeaders = document.querySelectorAll('[data-collapsible]');
    collapsibleHeaders.forEach(header => {
        const content = header.nextElementSibling;
        if (content) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                header.classList.toggle('expanded');
            });
        }
    });
});

// Utility function: Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Utility function: Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Utility function: Debounce function for performance
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Add "to top" button functionality
window.addEventListener('scroll', debounce(function() {
    const toTopButton = document.querySelector('.to-top-button');
    if (toTopButton) {
        if (window.scrollY > 300) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    }
}, 100));
