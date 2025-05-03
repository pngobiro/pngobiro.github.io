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
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset for fixed header/navigation
                    behavior: 'smooth'
                });

                // Add highlight effect
                targetElement.classList.add('highlight');
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000); // Highlight for 2 seconds
            }
        });
    });

    // Note: Answers are always visible and not toggleable
    // No toggle functionality needed as answers should always be shown

    // Add back to top button functionality
    // Add a back to top button element to your HTML body for this to work
    // <button id="back-to-top" title="Back to Top">↑</button>
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add math equation copy functionality
    const mathEquations = document.querySelectorAll('.math-copyable'); // Need a class 'math-copyable' and data-latex attribute on the math elements

    mathEquations.forEach(equation => {
        equation.addEventListener('click', function() {
            const equationText = this.getAttribute('data-latex');

            // Copy to clipboard
            navigator.clipboard.writeText(equationText).then(() => {
                // Show copy confirmation
                const confirmation = document.createElement('div');
                confirmation.className = 'copy-confirmation';
                confirmation.textContent = 'Copied to clipboard!';

                // Position near the clicked equation, or center screen
                // For simplicity, let's add it to body and position fixed
                document.body.appendChild(confirmation);

                // Remove after 2 seconds
                setTimeout(() => {
                    if (document.body.contains(confirmation)) {
                        document.body.removeChild(confirmation);
                    }
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                // Optional: Show a different message for failure
            });
        });
    });
});

// Add dark mode toggle functionality
function setupDarkMode() {
    // Need a checkbox with id="dark-mode-toggle" in your HTML
    // and a label associated with it
    // Example: <input type="checkbox" id="dark-mode-toggle"><label for="dark-mode-toggle">Dark Mode</label>
    // Or use the provided dark mode container structure
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar'); // Also check for sidebar toggle
    const htmlElement = document.documentElement;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference
    if (savedDarkMode) {
        htmlElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
        if (darkModeToggleSidebar) {
             darkModeToggleSidebar.checked = true;
        }
    } else {
         // Ensure no dark-mode class if preference is false or not set
         htmlElement.classList.remove('dark-mode');
    }

    // Function to handle toggle change
    const handleToggleChange = (isDarkMode) => {
        if (isDarkMode) {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        // Sync the state of the other toggle
        if (darkModeToggle && darkModeToggle !== event.target) {
             darkModeToggle.checked = isDarkMode;
        }
         if (darkModeToggleSidebar && darkModeToggleSidebar !== event.target) {
             darkModeToggleSidebar.checked = isDarkMode;
         }
    };


    // Add toggle event listeners
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            handleToggleChange(this.checked);
        });
    }
     if (darkModeToggleSidebar) {
        darkModeToggleSidebar.addEventListener('change', function() {
            handleToggleChange(this.checked);
        });
    }
}

// Initialize dark mode functionality
document.addEventListener('DOMContentLoaded', setupDarkMode);

// Add print functionality
function setupPrintButton() {
    // Need a button with id="print-page" in your HTML
    const printButton = document.getElementById('print-page');

    if (printButton) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Always print with answers (no toggle option)
            // Trigger print dialog directly
            window.print();
        });
    }
     // Add print index functionality
    const printIndexButton = document.getElementById('print-index');
    if (printIndexButton) {
        printIndexButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    }
}

// Initialize print functionality
document.addEventListener('DOMContentLoaded', setupPrintButton);


// Add mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile navigation toggle and backdrop if they don't exist
    let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebarBackdrop = document.querySelector('.sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');

    if (!mobileNavToggle) {
        mobileNavToggle = document.createElement('button');
        mobileNavToggle.className = 'mobile-nav-toggle';
        mobileNavToggle.innerHTML = '☰';
        mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
        mobileNavToggle.setAttribute('aria-expanded', 'false'); // Add ARIA attribute
        document.body.appendChild(mobileNavToggle);
    }

     if (!sidebarBackdrop) {
        sidebarBackdrop = document.createElement('div');
        sidebarBackdrop.className = 'sidebar-backdrop';
        document.body.appendChild(sidebarBackdrop);
    }

    // Toggle sidebar on button click
    mobileNavToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarBackdrop.classList.toggle('active');

        // Toggle aria-expanded state
        const isExpanded = sidebar.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);

        // Change button text/icon
        mobileNavToggle.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Close sidebar when clicking outside
    sidebarBackdrop.addEventListener('click', function() {
        sidebar.classList.remove('active');
        sidebarBackdrop.classList.remove('active');
        mobileNavToggle.innerHTML = '☰';
        mobileNavToggle.setAttribute('aria-expanded', 'false');
    });

    // Close sidebar when clicking a link (mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if mobile view is active (based on CSS breakpoint)
            if (window.getComputedStyle(mobileNavToggle).display === 'block') {
                 sidebar.classList.remove('active');
                 sidebarBackdrop.classList.remove('active');
                 mobileNavToggle.innerHTML = '☰';
                 mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Enable image zoom on mobile
    const figureImages = document.querySelectorAll('.question-figure img');
    figureImages.forEach(img => {
        img.addEventListener('click', function() {
             // Check if mobile view is active
            if (window.getComputedStyle(mobileNavToggle).display === 'block') {
                 // Toggle 'zoomed' class for CSS scaling
                this.classList.toggle('zoomed');
            }
        });
    });

    // Add swipe gestures for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 75; // Minimum distance for a swipe
    const sidebarWidth = 250; // Should match CSS --sidebar-width

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
         // Only consider touches starting near the left edge for opening
        if (touchStartX < 50) {
             e.stopPropagation(); // Prevent potential conflicts
        }
    }, { passive: true }); // Use passive listener for better performance

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
         if (e.cancelable) { // Check if event is cancelable before calling preventDefault
             e.preventDefault(); // Prevent default touch behavior if it was a swipe attempt
         }
    }, { passive: false }); // Not passive because we might call preventDefault

     document.addEventListener('touchmove', e => {
        // Optional: add logic to prevent scrolling during horizontal swipe
        // This can be complex and might interfere with normal scrolling
        // For now, rely on passive listeners where possible
    }, { passive: true });


    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const sidebarActive = sidebar.classList.contains('active');

        // Left to right swipe (open sidebar) - only near left edge
        if (swipeDistance > swipeThreshold && touchStartX < 50 && !sidebarActive) {
            sidebar.classList.add('active');
            sidebarBackdrop.classList.add('active');
            mobileNavToggle.innerHTML = '✕';
            mobileNavToggle.setAttribute('aria-expanded', 'true');
        }

        // Right to left swipe (close sidebar) - only if sidebar is active
        if (swipeDistance < -swipeThreshold && sidebarActive) {
             // Check if the swipe started *within* the sidebar area on the screen
             const touchStartIsInsideSidebar = touchStartX > (window.innerWidth - sidebarWidth);

             if (touchStartIsInsideSidebar) {
                sidebar.classList.remove('active');
                sidebarBackdrop.classList.remove('active');
                mobileNavToggle.innerHTML = '☰';
                mobileNavToggle.setAttribute('aria-expanded', 'false');
             }
        }
    }

    // Handle device orientation changes
    window.addEventListener('orientationchange', function() {
        // Adjust math display when orientation changes
        // Debounce or throttle this if needed
        setTimeout(() => {
            if (typeof MathJax !== 'undefined') {
                 try {
                     MathJax.typesetPromise(); // Use typesetPromise for MathJax v3+
                 } catch (e) {
                     console.error("MathJax typesetting failed on orientation change:", e);
                 }
            }
        }, 500); // Delay slightly to allow layout to adjust
    });

     // Add resize listener to adjust sidebar visibility on larger screens
     window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
             // Ensure sidebar and backdrop are hidden if they were active on mobile
             if (sidebar.classList.contains('active')) {
                 sidebar.classList.remove('active');
                 sidebarBackdrop.classList.remove('active');
                 mobileNavToggle.innerHTML = '☰';
                 mobileNavToggle.setAttribute('aria-expanded', 'false');
             }
             mobileNavToggle.style.display = 'none'; // Hide toggle on desktop
             sidebarBackdrop.style.display = 'none'; // Hide backdrop on desktop

             // Ensure sidebar is positioned correctly for desktop
             sidebar.style.position = 'sticky';
             sidebar.style.left = 'auto';

        } else {
             // On mobile, show toggle and ensure sidebar position is fixed
             mobileNavToggle.style.display = 'block';
             sidebar.style.position = 'fixed';
             // Don't change sidebar.left here, it's controlled by the 'active' class
        }
     });

     // Initial check on load
     if (window.innerWidth <= 768) {
         mobileNavToggle.style.display = 'block';
         sidebar.style.position = 'fixed';
         sidebar.style.left = '-280px'; // Ensure it starts hidden on mobile
     } else {
         mobileNavToggle.style.display = 'none';
         sidebar.style.position = 'sticky';
         sidebar.style.left = 'auto';
     }
});