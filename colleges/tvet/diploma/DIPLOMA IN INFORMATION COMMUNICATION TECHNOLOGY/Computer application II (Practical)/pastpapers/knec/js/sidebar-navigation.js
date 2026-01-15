document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop();
    
    // Function to set active link
    function setActiveLink() {
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === filename) {
                link.classList.add('active');
                // Ensure parent lists are visible
                let parentLi = link.closest('li');
                while (parentLi) {
                    if (parentLi.querySelector('ul')) {
                        parentLi.classList.add('expanded');
                    }
                    parentLi = parentLi.parentElement.closest('li');
                }
            }
        });
    }

    // Add scroll to top functionality
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.scroll-to-top')?.classList.add('visible');
        } else {
            document.querySelector('.scroll-to-top')?.classList.remove('visible');
        }
    };

    // Wait for sidebar to be injected then set active link
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) {
                    setActiveLink();
                    observer.disconnect();
                }
            }
        });
    });

    observer.observe(document.querySelector('.main-content'), {
        childList: true,
        subtree: true
    });
});
