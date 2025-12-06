// js/sidebar-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Find all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    // Add active class to current page
    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    // Add smooth scrolling for question links
    const questionLinks = document.querySelectorAll('a[href^="#question-"]');

    questionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (currentPage === window.location.pathname.split('/').pop()) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });

                    targetElement.classList.add('highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight');
                    }, 2000);
                }
            }
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Dark mode functionality
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar');
    const htmlElement = document.documentElement;

    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedDarkMode) {
        htmlElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
        if (darkModeToggleSidebar) {
            darkModeToggleSidebar.checked = true;
        }
    } else {
        htmlElement.classList.remove('dark-mode');
    }

    const handleToggleChange = (isDarkMode, sourceToggle) => {
        if (isDarkMode) {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        if (darkModeToggle && darkModeToggle !== sourceToggle) {
            darkModeToggle.checked = isDarkMode;
        }
        if (darkModeToggleSidebar && darkModeToggleSidebar !== sourceToggle) {
            darkModeToggleSidebar.checked = isDarkMode;
        }
    };

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            handleToggleChange(this.checked, this);
        });
    }
    if (darkModeToggleSidebar) {
        darkModeToggleSidebar.addEventListener('change', function() {
            handleToggleChange(this.checked, this);
        });
    }
}

document.addEventListener('DOMContentLoaded', setupDarkMode);

// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebarBackdrop = document.querySelector('.sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        if (!mobileNavToggle) {
            mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            document.body.appendChild(mobileNavToggle);
        }

        if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
        }

        mobileNavToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            sidebarBackdrop.classList.toggle('active');

            const isExpanded = sidebar.classList.contains('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
            mobileNavToggle.innerHTML = isExpanded ? '✕' : '☰';
        });

        sidebarBackdrop.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });

        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                    sidebar.classList.remove('active');
                    sidebarBackdrop.classList.remove('active');
                    mobileNavToggle.innerHTML = '☰';
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        window.addEventListener('resize', function() {
            const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

            if (!isMobileView) {
                sidebar.classList.remove('active');
                sidebarBackdrop.classList.remove('active');
                mobileNavToggle.style.display = 'none';
                sidebarBackdrop.style.display = 'none';
                sidebar.style.position = 'sticky';
                sidebar.style.left = 'auto';
            } else {
                mobileNavToggle.style.display = 'block';
                sidebar.style.position = 'fixed';
            }
        });

        const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
        if (isMobileView) {
            mobileNavToggle.style.display = 'block';
            sidebar.style.position = 'fixed';
            sidebar.style.left = '-280px';
            sidebarBackdrop.style.display = 'none';
        } else {
            mobileNavToggle.style.display = 'none';
            sidebarBackdrop.style.display = 'none';
            sidebar.style.position = 'sticky';
            sidebar.style.left = 'auto';
        }
    }
});
