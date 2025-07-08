// js/sidebar-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // --- Sidebar Active Link ---
    function setActiveSidebarLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to index.html if path is empty
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

        sidebarLinks.forEach(link => {
            link.classList.remove('active'); // Remove active from all links first
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            }
        });
    }
    setActiveSidebarLink(); // Call on initial load

    // --- Smooth Scrolling for Internal Links ---
    function setupSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]'); // Links starting with #

        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                try {
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        e.preventDefault(); // Prevent default jump only if target exists
                        const offsetTop = targetElement.offsetTop;

                        window.scrollTo({
                            top: offsetTop - 60, // Adjust offset for fixed header/navigation (60px example)
                            behavior: 'smooth'
                        });

                        // Optional: Add highlight effect to target section/question
                        targetElement.classList.add('highlight');
                        setTimeout(() => {
                            targetElement.classList.remove('highlight');
                        }, 1500); // Highlight for 1.5 seconds
                    }
                    // If targetElement is null, default browser behavior will handle (or fail gracefully)
                } catch (error) {
                    // Catch potential errors with invalid selectors (though querySelector is quite robust)
                    console.error("Error finding element for smooth scroll:", error);
                    // Allow default behavior in case of error
                }
            });
        });
    }
    setupSmoothScrolling();

    // --- Back to Top Button ---
    function setupBackToTopButton() {
        const backToTopBtn = document.getElementById('back-to-top');

        if (backToTopBtn) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    // Use classList for smoother transition defined in CSS
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            }, { passive: true }); // Use passive listener for better scroll performance

            // Scroll to top when clicked
            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    setupBackToTopButton();

    // --- Math Equation Copy Functionality ---
    function setupMathCopy() {
        // Function to be called *after* MathJax has finished typesetting
        const trySetupCopy = () => {
            if (typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.promise) {
                MathJax.startup.promise.then(() => {
                    const mathElements = document.querySelectorAll('mjx-container[jax="CHTML"][display="true"], mjx-container[jax="CHTML"]:not([display="true"])'); // Target MathJax v3 elements

                    mathElements.forEach(container => {
                        const mathJaxMath = container.querySelector('mjx-math');
                        if (!mathJaxMath) return; // Skip if no inner math element

                        let latex = mathJaxMath.getAttribute('aria-label');
                        if (!latex) return; // Skip if no aria-label (contains LaTeX)

                        // Clean up LaTeX (optional, basic example)
                        latex = latex.replace(/^displaystyle /g, ''); // Remove display style prefix if present

                        container.style.cursor = 'pointer';
                        container.setAttribute('title', 'Copy LaTeX');
                        container.setAttribute('data-latex', latex);

                        container.addEventListener('click', function(e) {
                            e.stopPropagation(); // Prevent clicks bubbling up if nested
                            const equationText = this.getAttribute('data-latex');

                            navigator.clipboard.writeText(equationText).then(() => {
                                // Show copy confirmation
                                let confirmation = document.querySelector('.copy-confirmation');
                                if (!confirmation) {
                                    confirmation = document.createElement('div');
                                    confirmation.className = 'copy-confirmation';
                                    document.body.appendChild(confirmation);
                                }
                                confirmation.textContent = 'LaTeX Copied!';
                                confirmation.classList.add('show'); // Add class to trigger CSS transition

                                // Remove after 2 seconds
                                setTimeout(() => {
                                    confirmation.classList.remove('show');
                                }, 2000);
                            }).catch(err => {
                                console.error('Failed to copy LaTeX: ', err);
                                // Optional: Show a failure message
                                let confirmation = document.querySelector('.copy-confirmation');
                                if (!confirmation) {
                                     confirmation = document.createElement('div');
                                     confirmation.className = 'copy-confirmation';
                                     document.body.appendChild(confirmation);
                                }
                                confirmation.textContent = 'Copy Failed!';
                                confirmation.style.backgroundColor = 'red'; // Indicate error
                                confirmation.classList.add('show');
                                setTimeout(() => {
                                    confirmation.classList.remove('show');
                                     confirmation.style.backgroundColor = ''; // Reset color
                                }, 2000);
                            });
                        });
                    });
                }).catch(err => console.error('MathJax startup promise failed:', err));
            } else {
                 // Fallback or retry mechanism if MathJax isn't ready immediately
                 // console.log("MathJax not ready, retrying copy setup...");
                 // setTimeout(trySetupCopy, 500); // Retry after 500ms
            }
        };
        trySetupCopy(); // Initial attempt
    }
    setupMathCopy(); // Initialize Math Copy

    // --- Dark Mode ---
    function setupDarkMode() {
        const darkModeToggle = document.getElementById('dark-mode-toggle'); // Fixed toggle
        const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar'); // Sidebar toggle
        const htmlElement = document.documentElement;

        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';

        // Apply saved preference
        if (savedDarkMode) {
            htmlElement.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.checked = true;
            if (darkModeToggleSidebar) darkModeToggleSidebar.checked = true;
        } else {
            htmlElement.classList.remove('dark-mode'); // Ensure it's off if not saved as true
            if (darkModeToggle) darkModeToggle.checked = false;
            if (darkModeToggleSidebar) darkModeToggleSidebar.checked = false;
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
            // Sync the state of the other toggle if it exists and is not the source
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
    setupDarkMode(); // Initialize Dark Mode

    // --- Print Functionality ---
    function setupPrintButton() {
        const printButton = document.getElementById('print-page'); // On paper pages
        const printIndexButton = document.getElementById('print-index'); // On index page

        if (printButton) {
            printButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.print(); // Trigger print dialog for paper page
            });
        }

        if (printIndexButton) {
            printIndexButton.addEventListener('click', function(e) {
                e.preventDefault();
                // Add a class to body for print-specific index styles if needed
                document.body.classList.add('index-page');
                window.print(); // Trigger print dialog for index page
                // Optional: Remove class after printing (might be tricky to time correctly)
                // setTimeout(() => document.body.classList.remove('index-page'), 1000);
            });
        }
    }
    setupPrintButton(); // Initialize Print Buttons

    // --- Mobile Navigation ---
    function setupMobileNav() {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const sidebar = document.querySelector('.sidebar');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

        if (!mobileNavToggle || !sidebar || !sidebarBackdrop) {
            // Create elements if they don't exist (as per instructions)
            // This part might be better handled by ensuring the elements are in the base HTML
            console.warn("Mobile nav elements not found. Ensure .mobile-nav-toggle, .sidebar, and .sidebar-backdrop exist in HTML.");
            return; // Exit if essential elements are missing
        }

        const openSidebar = () => {
            sidebar.classList.add('active');
            sidebarBackdrop.classList.add('active');
            mobileNavToggle.setAttribute('aria-expanded', 'true');
            mobileNavToggle.innerHTML = '✕'; // Close icon
            document.body.style.overflow = 'hidden'; // Prevent body scroll when sidebar is open
        };

        const closeSidebar = () => {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.innerHTML = '☰'; // Hamburger icon
            document.body.style.overflow = ''; // Restore body scroll
        };

        // Toggle sidebar on button click
        mobileNavToggle.addEventListener('click', function() {
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Close sidebar when clicking the backdrop
        sidebarBackdrop.addEventListener('click', closeSidebar);

        // Close sidebar when clicking a link inside it (on mobile)
        const sidebarLinks = sidebar.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Check if mobile view is active (e.g., based on toggle visibility)
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                    closeSidebar();
                     // If it's an internal link, smooth scrolling is handled separately
                     // If it's an external link, the page will navigate away
                }
            });
        });

        // Optional: Close sidebar on ESC key press
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });

        // --- Swipe Gestures for Mobile Sidebar ---
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Minimum pixels for a swipe

        document.body.addEventListener('touchstart', e => {
             // Only capture start X if touch starts near edge or within open sidebar
             if (e.touches.length === 1) { // Ignore multi-touch gestures
                touchStartX = e.touches[0].clientX;
             }

        }, { passive: true });

        document.body.addEventListener('touchend', e => {
             if (e.changedTouches.length === 1) {
                 touchEndX = e.changedTouches[0].clientX;
                 handleSwipe();
             }
        }, { passive: true }); // Use passive here as we are not preventing scroll default

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            const isSidebarActive = sidebar.classList.contains('active');
            const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

            if (!isMobileView) return; // Only handle swipes in mobile view

            // Swipe Right (Open): If starts near left edge and sidebar is closed
            if (swipeDistance > swipeThreshold && touchStartX < 50 && !isSidebarActive) {
                openSidebar();
            }

            // Swipe Left (Close): If starts reasonably far from left edge (or anywhere) and sidebar is open
             // Added check for starting point to avoid accidental close when scrolling content
            if (swipeDistance < -swipeThreshold && isSidebarActive && touchStartX > 50) {
                closeSidebar();
            }

            // Reset touch points
            touchStartX = 0;
            touchEndX = 0;
        }


        // --- Handle Resize / Orientation Change ---
        let isMobile = window.innerWidth <= 768; // Initial check

        window.addEventListener('resize', () => {
            const currentlyMobile = window.innerWidth <= 768;
            if (isMobile !== currentlyMobile) { // Breakpoint crossed
                 isMobile = currentlyMobile;
                 if (!isMobile) { // Switched to desktop view
                    closeSidebar(); // Ensure sidebar is closed
                    sidebar.style.position = ''; // Reset position potentially set by JS
                    sidebar.style.left = '';
                 } else { // Switched to mobile view
                     // Reset styles if needed, but mostly handled by CSS media queries now
                 }
            }

             // Adjust MathJax display on resize (debounced)
             clearTimeout(window.resizeTimer);
             window.resizeTimer = setTimeout(() => {
                if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                     try {
                         MathJax.typesetPromise();
                     } catch (e) {
                         console.error("MathJax typesetting failed on resize:", e);
                     }
                 }
             }, 250); // Debounce time: 250ms

        });

    }
    setupMobileNav(); // Initialize Mobile Navigation

}); // End DOMContentLoaded