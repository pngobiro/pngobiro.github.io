document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌓';
    themeToggle.setAttribute('title', 'Toggle dark/light mode');
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Save scroll position
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            localStorage.setItem(
                'scrollPosition_' + window.location.pathname,
                window.scrollY
            );
        }, 100);
    });

    // Restore scroll position
    const savedScrollPosition = localStorage.getItem(
        'scrollPosition_' + window.location.pathname
    );
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition));
    }

    // Add a return to top button
    const topButton = document.createElement('button');
    topButton.className = 'back-to-top';
    topButton.innerHTML = '↑';
    topButton.setAttribute('title', 'Back to top');
    document.body.appendChild(topButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            topButton.classList.add('visible');
        } else {
            topButton.classList.remove('visible');
        }
    });

    topButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Alt + T for theme toggle
        if (e.altKey && e.key === 't') {
            themeToggle.click();
        }
        // Alt + ArrowUp for scroll to top
        if (e.altKey && e.key === 'ArrowUp') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});