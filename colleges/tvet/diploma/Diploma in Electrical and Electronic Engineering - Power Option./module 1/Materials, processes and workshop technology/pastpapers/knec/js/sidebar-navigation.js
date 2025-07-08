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
            // Optional: Scroll sidebar to show active link
            // link.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    });

    // Add smooth scrolling for question links (for navigation within the same page)
    const questionLinks = document.querySelectorAll('a[href^="#question-"]');

    questionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is on the current page (or index page linking to anchor)
            const targetId = this.getAttribute('href');
            if (window.location.pathname.split('/').pop() === this.pathname.split('/').pop() || currentPage === 'index.html') {
                e.preventDefault();

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate target position, considering fixed header height if any
                    const headerOffset = 60; // Adjust this value based on your header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Add highlight effect
                    targetElement.classList.add('highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight');
                    }, 1500); // Highlight duration
                }
            }
             // If the link is to a different page, default behavior is fine
        });
    });

    // Add smooth scrolling for index page links (e.g., #recent-papers, #exam-years)
    const indexLinks = document.querySelectorAll('a[href^="#"]');
    indexLinks.forEach(link => {
        // Exclude question links already handled
        if (!link.getAttribute('href').startsWith('#question-')) {
            link.addEventListener('click', function(e) {
                 const targetId = this.getAttribute('href');
                 // Ensure it's a link on the same page
                 if (window.location.pathname.split('/').pop() === this.pathname.split('/').pop() && targetId.length > 1) {
                     e.preventDefault();
                     const targetElement = document.querySelector(targetId);
                     if (targetElement) {
                         const headerOffset = 60; // Adjust as needed
                         const elementPosition = targetElement.getBoundingClientRect().top;
                         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                         window.scrollTo({
                             top: offsetPosition,
                             behavior: 'smooth'
                         });
                     }
                 }
            });
        }
    });


    // Note: Answers are always visible and not toggleable
    // No toggle functionality needed as answers should always be shown

    // Add back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                // backToTopBtn.style.display = 'block'; // Replaced with class-based visibility
                backToTopBtn.classList.add('visible');
            } else {
                // backToTopBtn.style.display = 'none';
                 backToTopBtn.classList.remove('visible');
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

    // Add math equation copy functionality (requires MathJax rendering to complete)
    function setupMathCopy() {
        // Ensure MathJax is loaded and typeset before adding listeners
        if (typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.promise) {
            MathJax.startup.promise.then(() => {
                // Target MathJax elements more robustly
                // MathJax v3 often uses mjx-container tags or spans with specific classes
                const mathEquations = document.querySelectorAll('mjx-container[jax="CHTML"][display="true"], .MathJax_Display, .math.display'); // Common patterns

                mathEquations.forEach(equation => {
                     // Add a visual cue (optional)
                     equation.style.cursor = 'pointer';
                     equation.title = 'Copy LaTeX to clipboard'; // Tooltip

                    equation.addEventListener('click', function(event) {
                        event.stopPropagation(); // Prevent triggering other clicks if nested
                        // Attempt to find the LaTeX source. Often stored in a script tag of type "math/tex" or an annotation node.
                        let latexSource = '';
                        // Try common MathJax 3 annotation
                        const annotation = equation.querySelector('mjx-assistive-mml script[type="math/tex"]');
                         if (annotation) {
                            latexSource = annotation.textContent;
                        } else {
                            // Fallback for other structures might be needed
                            // For example, finding a sibling script tag
                             let potentialSource = equation.previousElementSibling;
                             if (potentialSource && potentialSource.tagName === 'SCRIPT' && potentialSource.type.includes('math/tex')) {
                                 latexSource = potentialSource.textContent;
                             } else {
                                 // Further fallbacks or default message
                                 console.warn("Could not find LaTeX source for:", equation);
                                 // Maybe try grabbing inner text as a last resort, though likely not LaTeX
                                 latexSource = equation.textContent.trim();
                             }
                        }


                        if (latexSource) {
                             // Copy to clipboard
                            navigator.clipboard.writeText(latexSource).then(() => {
                                // Show copy confirmation
                                const confirmation = document.createElement('div');
                                confirmation.className = 'copy-confirmation';
                                confirmation.textContent = 'LaTeX Copied!';
                                document.body.appendChild(confirmation);
                                confirmation.classList.add('visible'); // Make it visible

                                // Remove after 2 seconds
                                setTimeout(() => {
                                    confirmation.classList.remove('visible');
                                    setTimeout(() => { // Remove from DOM after fade out
                                        if (document.body.contains(confirmation)) {
                                            document.body.removeChild(confirmation);
                                        }
                                    }, 300); // Match CSS transition duration
                                }, 2000);
                            }).catch(err => {
                                console.error('Failed to copy LaTeX: ', err);
                                // Optional: Show a different message for failure
                                const confirmation = document.createElement('div');
                                confirmation.className = 'copy-confirmation';
                                confirmation.textContent = 'Copy Failed!';
                                confirmation.style.backgroundColor = 'red'; // Indicate error
                                document.body.appendChild(confirmation);
                                confirmation.classList.add('visible');
                                setTimeout(() => {
                                     confirmation.classList.remove('visible');
                                     setTimeout(() => {
                                        if (document.body.contains(confirmation)) {
                                           document.body.removeChild(confirmation);
                                        }
                                    }, 300);
                                }, 2000);
                            });
                        }
                    });
                });
            });
        } else {
             console.warn("MathJax not fully loaded yet for copy setup.");
             // Optionally retry after a delay
             // setTimeout(setupMathCopy, 500);
        }
    }
    // Initial call
    setupMathCopy();


    // Add dark mode toggle functionality
    setupDarkMode();

    // Add print functionality
    setupPrintButton();

    // Add mobile navigation functionality
    setupMobileNavigation();

}); // End DOMContentLoaded

// --- Dark Mode Function ---
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // Fixed toggle
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar'); // Sidebar toggle
    const htmlElement = document.documentElement;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference
    const applyDarkMode = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
        }
        // Sync toggles
        if (darkModeToggle) darkModeToggle.checked = isDark;
        if (darkModeToggleSidebar) darkModeToggleSidebar.checked = isDark;
    };

    // Initialize based on saved preference
    applyDarkMode(savedDarkMode);

    // Function to handle toggle change and sync
    const handleToggleChange = (isDarkMode, sourceToggle) => {
         applyDarkMode(isDarkMode);
         localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
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

// --- Print Functionality ---
function setupPrintButton() {
    const printPageButton = document.getElementById('print-page'); // Specific to paper pages
    const printIndexButton = document.getElementById('print-index'); // Specific to index page

    if (printPageButton) {
        printPageButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print(); // Trigger print dialog
        });
    }

    if (printIndexButton) {
        printIndexButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print(); // Trigger print dialog for index page
        });
    }
}


// --- Mobile Navigation Functionality ---
function setupMobileNavigation() {
    let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebarBackdrop = document.querySelector('.sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Only proceed if sidebar exists
    if (sidebar) {
        // Create elements if they don't exist (robustness)
        if (!mobileNavToggle) {
            mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰'; // Hamburger icon
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.setAttribute('aria-controls', 'sidebar'); // ARIA
            sidebar.setAttribute('id', 'sidebar'); // Ensure sidebar has an ID for ARIA
            body.appendChild(mobileNavToggle);
        }

         if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            body.appendChild(sidebarBackdrop);
        }

        const toggleSidebar = (show) => {
            const isActive = typeof show === 'boolean' ? show : !sidebar.classList.contains('active');
            sidebar.classList.toggle('active', isActive);
            sidebarBackdrop.classList.toggle('active', isActive);
            body.classList.toggle('sidebar-open', isActive); // Prevent body scroll
            mobileNavToggle.setAttribute('aria-expanded', isActive);
            mobileNavToggle.innerHTML = isActive ? '✕' : '☰'; // Close/Hamburger icon
        };


        // Toggle sidebar on button click
        mobileNavToggle.addEventListener('click', () => toggleSidebar());

        // Close sidebar when clicking outside (on backdrop)
        sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));

        // Close sidebar when clicking a link (mobile)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Check if mobile view is active (based on CSS display of toggle)
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                     toggleSidebar(false);
                }
            });
        });

        // Enable image zoom on click (simple toggle class) - keep simple
        const figureImages = document.querySelectorAll('.question-figure img');
        figureImages.forEach(img => {
            img.addEventListener('click', function() {
                 // Only zoom if not already zoomed (prevents issues if clicked again quickly)
                 if (!this.classList.contains('zoomed')) {
                     this.classList.add('zoomed');
                     // Add listener to close zoom on next click anywhere
                     const closeZoom = (event) => {
                         // Make sure not clicking the image itself again
                         if (event.target !== img) {
                             img.classList.remove('zoomed');
                             document.removeEventListener('click', closeZoom);
                         }
                     };
                     // Use setTimeout to avoid capturing the same click
                     setTimeout(() => { document.addEventListener('click', closeZoom); }, 0);
                 } else {
                      // If clicked while zoomed, just unzoom
                      this.classList.remove('zoomed');
                 }
            });
        });


        // Handle window resize: ensure correct state
        window.addEventListener('resize', function() {
             const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

             if (!isMobileView && sidebar.classList.contains('active')) { // Desktop view with mobile sidebar open
                 toggleSidebar(false); // Close mobile sidebar
                 sidebar.style.position = ''; // Reset style attribute
                 sidebar.style.left = '';
             } else if (isMobileView) {
                 // Ensure fixed position is set if mobile (might be removed by other logic)
                 sidebar.style.position = 'fixed';
             } else {
                 // Ensure non-mobile styles are applied
                 sidebar.style.position = '';
                 sidebar.style.left = '';
             }
        });

        // Initial check on load
        const isMobileViewInitial = window.getComputedStyle(mobileNavToggle).display !== 'none';
        if (isMobileViewInitial) {
             sidebar.style.position = 'fixed';
             // Ensure it starts hidden if mobile
             if (!sidebar.classList.contains('active')) {
                 sidebar.style.left = '-280px';
             }
         } else {
             sidebar.style.position = ''; // Use CSS default (sticky)
             sidebar.style.left = '';
         }


        // --- Swipe Gestures (Optional Enhancement) ---
        let touchStartX = 0;
        let touchStartY = 0; // To detect vertical scroll vs horizontal swipe
        const swipeThreshold = 50; // Min distance (px)
        const maxVerticalThreshold = 75; // Max vertical distance allowed for a swipe

        document.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true }); // Use passive for scroll performance

        document.addEventListener('touchend', e => {
            if (!sidebar) return; // Ensure sidebar exists

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

            // Only handle swipes in mobile view and if swipe is mostly horizontal
            if (isMobileView && Math.abs(deltaX) > swipeThreshold && Math.abs(deltaY) < maxVerticalThreshold) {
                const sidebarActive = sidebar.classList.contains('active');

                // Open Swipe (Rightward from left edge)
                if (deltaX > 0 && touchStartX < 50 && !sidebarActive) {
                     toggleSidebar(true);
                }
                // Close Swipe (Leftward when sidebar is open)
                else if (deltaX < 0 && sidebarActive) {
                    // Allow closing swipe starting anywhere on the screen or just on sidebar
                    // Example: Allow closing swipe starting within sidebar width from right edge
                    // const touchStartInsideSidebar = touchStartX > (window.innerWidth - sidebar.offsetWidth);
                    // if (touchStartInsideSidebar) {
                        toggleSidebar(false);
                    // }
                }
            }
        }, { passive: true }); // Can be passive as we are not preventing default scroll

    } // End if(sidebar)
} // End setupMobileNavigation