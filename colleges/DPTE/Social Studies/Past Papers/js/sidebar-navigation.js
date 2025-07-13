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

    // Add smooth scrolling for question links (for navigation within the same page)
    const questionLinks = document.querySelectorAll('a[href^="#question-"]');

    questionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is on the current page
            if (currentPage === window.location.pathname.split('/').pop()) {
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
            }
             // If the link is to a different page, default behavior is fine (no preventDefault)
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

    // Add math equation copy functionality (requires adding class="math-copyable" and data-latex="[latex code]" to math elements)
    // MathJax 3 often renders math inside spans or divs. You might need to target these specifically.
    // Example: <span class="MathJax math-copyable" data-latex="...">...</span>
    // Or potentially wrap the MathJax output in a div/span you control.
    const mathEquations = document.querySelectorAll('.math-copyable');

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
    // Needs checkboxes with id="dark-mode-toggle" and id="dark-mode-toggle-sidebar"
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar');
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

    // Function to handle toggle change and sync
    const handleToggleChange = (isDarkMode, sourceToggle) => {
        if (isDarkMode) {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        // Sync the state of the other toggle if it's not the source
        if (darkModeToggle && darkModeToggle !== sourceToggle) {
             darkModeToggle.checked = isDarkMode;
        }
         if (darkModeToggleSidebar && darkModeToggleSidebar !== sourceToggle) {
             darkModeToggleSidebar.checked = isDarkMode;
         }
    };


    // Add toggle event listeners
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

// Initialize dark mode functionality
document.addEventListener('DOMContentLoaded', setupDarkMode);

// Add print functionality
function setupPrintButton() {
    // Needs buttons with id="print-page" (on paper pages) and id="print-index" (on index page)
    const printButton = document.getElementById('print-page');

    if (printButton) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Answers are always shown for printing based on CSS @media print
            window.print(); // Trigger print dialog
        });
    }

     // Add print index functionality
    const printIndexButton = document.getElementById('print-index');
    if (printIndexButton) {
        printIndexButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print(); // Trigger print dialog for index page
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

    // Only add mobile specific elements if the sidebar exists
    if (sidebar) {
        if (!mobileNavToggle) {
            mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰'; // Hamburger icon
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileNavToggle.setAttribute('aria-expanded', 'false'); // ARIA attribute
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

            // Change button text/icon (Hamburger <-> Close)
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
                // Check if mobile view is active (based on CSS breakpoint display of toggle)
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                     sidebar.classList.remove('active');
                     sidebarBackdrop.classList.remove('active');
                     mobileNavToggle.innerHTML = '☰';
                     mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Enable image zoom on mobile (toggle class for CSS scaling)
        const figureImages = document.querySelectorAll('.question-figure img');
        figureImages.forEach(img => {
            img.addEventListener('click', function() {
                 // Check if mobile view is active
                 if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                     this.classList.toggle('zoomed');
                 }
            });
        });

        // Add swipe gestures for mobile navigation
        let touchStartX = 0;
        const swipeThreshold = 75; // Minimum distance for a swipe
        const sidebarWidth = 250; // Should match CSS --sidebar-width

        // Track touch start
        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            // Potentially prevent default touch behavior if starting near the edge,
            // but this can interfere with scrolling if not done carefully.
            // Using passive: true initially for better performance.
        }, { passive: true });

        // Track touch end and handle swipe
        document.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            handleSwipe(touchStartX, touchEndX);
            // If a swipe gesture was detected and handled, you might want to prevent default,
            // but detecting *only* a swipe vs. a scroll attempt is hard.
            // Relying on passive: false for touchend allows preventDefault().
        }, { passive: false });

        // Handle horizontal swipes
        function handleSwipe(startX, endX) {
            const swipeDistance = endX - startX;
            const sidebarActive = sidebar.classList.contains('active');

            // Left to right swipe (open sidebar) - if swipe starts near left edge
            if (swipeDistance > swipeThreshold && startX < 50 && !sidebarActive) {
                sidebar.classList.add('active');
                sidebarBackdrop.classList.add('active');
                mobileNavToggle.innerHTML = '✕'; // Change to close icon
                mobileNavToggle.setAttribute('aria-expanded', 'true');
                // Potentially e.preventDefault() here if touchend was passive: false
            }

            // Right to left swipe (close sidebar) - if sidebar is active
            if (swipeDistance < -swipeThreshold && sidebarActive) {
                 // Optional: Check if swipe started from within the sidebar area
                 const touchStartIsInsideSidebar = startX > (window.innerWidth - sidebarWidth);
                 // For simplicity, let's allow swipe from anywhere if sidebar is open
                 // if (touchStartIsInsideSidebar) { // <-- use this line for stricter check
                    sidebar.classList.remove('active');
                    sidebarBackdrop.classList.remove('active');
                    mobileNavToggle.innerHTML = '☰'; // Change to hamburger icon
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                 // } // <-- close stricter check
                // Potentially e.preventDefault() here if touchend was passive: false
            }
        }

        // Handle device orientation changes or window resize below breakpoint
        window.addEventListener('resize', function() {
             // Check if breakpoint is crossed
             const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

             if (!isMobileView) { // Desktop view
                 // Ensure sidebar is visible and mobile controls are hidden
                 sidebar.classList.remove('active'); // Ensure sidebar is not in 'active' mobile state
                 sidebarBackdrop.classList.remove('active');
                 mobileNavToggle.style.display = 'none';
                 sidebarBackdrop.style.display = 'none';
                 sidebar.style.position = 'sticky'; // Revert to sticky
                 sidebar.style.left = 'auto';

             } else { // Mobile view
                 // Ensure mobile toggle is visible and sidebar is positioned for mobile
                 mobileNavToggle.style.display = 'block';
                 sidebar.style.position = 'fixed'; // Use fixed position for mobile sidebar
                 // sidebar.style.left is controlled by active class
             }

             // Adjust MathJax display on orientation change or resize below threshold
             if (typeof MathJax !== 'undefined') {
                 // Debounce or throttle this if needed
                 setTimeout(() => {
                     try {
                         MathJax.typesetPromise(); // Use typesetPromise for MathJax v3+
                     } catch (e) {
                         console.error("MathJax typesetting failed on resize/orientation change:", e);
                     }
                 }, 500); // Delay slightly to allow layout to adjust
             }
        });

        // Initial check on load
        const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
        if (isMobileView) { // Mobile view initially
             mobileNavToggle.style.display = 'block';
             sidebar.style.position = 'fixed';
             sidebar.style.left = '-280px'; // Ensure it starts hidden on mobile
             sidebarBackdrop.style.display = 'none'; // Ensure backdrop is hidden initially
         } else { // Desktop view initially
             mobileNavToggle.style.display = 'none';
             sidebarBackdrop.style.display = 'none';
             sidebar.style.position = 'sticky';
             sidebar.style.left = 'auto';
         }
    }
});
