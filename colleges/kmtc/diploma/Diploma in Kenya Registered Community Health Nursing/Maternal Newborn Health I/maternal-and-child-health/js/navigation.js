document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        // Left arrow key for previous section
        if (event.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-button:not([href="../index.html"]):not(:last-child):not(.disabled)');
            if (prevButton) {
                window.location.href = prevButton.getAttribute('href');
            }
        }
        // Right arrow key for next section
        else if (event.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-button:last-child:not(.disabled)');
            if (nextButton) {
                window.location.href = nextButton.getAttribute('href');
            }
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to current section in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});