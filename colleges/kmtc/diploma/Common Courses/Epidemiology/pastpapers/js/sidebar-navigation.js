document.addEventListener('DOMContentLoaded', function() {
    // -------------------------------------------------------------------------
    // 1. Navigation Highlighting
    // -------------------------------------------------------------------------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Handle anchor links on the same page vs actual page links
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else if (linkHref.startsWith('#')) {
            // It's an anchor link, we handle this via IntersectionObserver later or leave as sub-item
            link.classList.remove('active');
        }
    });

    // -------------------------------------------------------------------------
    // 2. Smooth Scrolling & Hash Handling
    // -------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Mobile: Close sidebar if open
                const sidebar = document.querySelector('.sidebar');
                const backdrop = document.querySelector('.sidebar-backdrop');
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    backdrop.classList.remove('active');
                    document.querySelector('.mobile-nav-toggle').innerHTML = '<i class="fas fa-bars"></i>';
                }

                // Scroll
                const headerOffset = 20;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Highlight effect
                targetElement.classList.add('highlight');
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000);
            }
        });
    });

    // -------------------------------------------------------------------------
    // 3. Mobile Navigation
    // -------------------------------------------------------------------------
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');

    if (mobileNavToggle && sidebar && backdrop) {
        mobileNavToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            const isActive = sidebar.classList.contains('active');
            mobileNavToggle.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        backdrop.addEventListener('click', () => {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    }

    // -------------------------------------------------------------------------
    // 4. Dark Mode Logic
    // -------------------------------------------------------------------------
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    const text = themeToggle ? themeToggle.querySelector('span') : null;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        htmlElement.classList.add('dark-mode');
        updateThemeUI(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark-mode');
            const isDark = htmlElement.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeUI(isDark);
        });
    }

    function updateThemeUI(isDark) {
        if (!icon || !text) return;
        if (isDark) {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }

    // -------------------------------------------------------------------------
    // 5. Back to Top (Auto-injected)
    // -------------------------------------------------------------------------
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    
    // Styles for the button
    Object.assign(backToTop.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: '99'
    });
    
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});