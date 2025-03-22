// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentPath = window.location.pathname;
        const nextBtn = document.querySelector('.paper-navigation .btn:last-child');
        const prevBtn = document.querySelector('.paper-navigation .btn:nth-child(2)');
        
        // Next paper with right arrow
        if (e.key === 'ArrowRight' && nextBtn && nextBtn.textContent.includes('Next')) {
            nextBtn.click();
        }
        
        // Previous paper with left arrow
        if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.textContent.includes('Home')) {
            prevBtn.click();
        }
        
        // Home with H key
        if (e.key.toLowerCase() === 'h') {
            const homeLink = document.querySelector('a[href="index.html"]');
            if (homeLink) {
                homeLink.click();
            }
        }
    });

    // Mark current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Add accessibility information
    document.querySelectorAll('.question').forEach((question, index) => {
        const title = question.querySelector('h3').textContent;
        question.setAttribute('aria-label', title);
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
