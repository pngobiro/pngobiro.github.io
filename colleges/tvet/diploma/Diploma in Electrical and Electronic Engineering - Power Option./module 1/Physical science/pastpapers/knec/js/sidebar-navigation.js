// js/sidebar-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // --- Sidebar Active Link ---
    try {
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage) {
            const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
            sidebarLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active'); // Ensure only one is active
                }
            });
        }
    } catch (e) {
        console.error("Error setting active sidebar link:", e);
    }

    // --- Smooth Scrolling for Question Links ---
    try {
        const questionLinks = document.querySelectorAll('a[href^="#question-"]');
        questionLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                // Check if the target is on the current page
                if (window.location.pathname.split('/').pop() === targetId.split('#')[0] || !targetId.includes('.html')) {
                     // Only prevent default and scroll if the target is on the *current* page
                    if(document.querySelector(targetId)) {
                        e.preventDefault();
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            const headerOffset = 80; // Adjust this value based on your fixed header height + some margin
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
                            }, 2000); // Highlight for 2 seconds
                        }
                    }
                }
                 // If the link points to a different page (e.g., "paper.html#question-1"), let the browser handle navigation.
            });
        });
    } catch (e) {
        console.error("Error setting up smooth scroll:", e);
    }


    // --- Back to Top Button ---
    try {
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 200) { // Show after scrolling 200px
                    backToTopBtn.style.display = 'block';
                     // Check dark mode state to set correct initial style if needed here
                } else {
                    backToTopBtn.style.display = 'none';
                }
            }, { passive: true }); // Use passive listener for scroll performance

            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } catch (e) {
        console.error("Error setting up back-to-top button:", e);
    }

     // --- Math Equation Copy Functionality ---
     try {
         // Use event delegation on the document for potentially dynamic elements
         document.body.addEventListener('click', function(event) {
             // Target MathJax v3 output (might need adjustment based on specific rendering)
             const mathElement = event.target.closest('.MathJax, mjx-container'); // Adjust selector if needed

             if (mathElement && mathElement.hasAttribute('data-latex')) { // Check for a data-latex attribute
                 const equationText = mathElement.getAttribute('data-latex');

                 if (equationText) {
                     navigator.clipboard.writeText(equationText).then(() => {
                         // Show copy confirmation
                         let confirmation = document.querySelector('.copy-confirmation');
                         if (!confirmation) {
                             confirmation = document.createElement('div');
                             confirmation.className = 'copy-confirmation';
                             document.body.appendChild(confirmation);
                         }
                         confirmation.textContent = 'LaTeX Copied!';
                         confirmation.classList.add('visible'); // Make it visible

                         // Hide after 2 seconds
                         setTimeout(() => {
                             confirmation.classList.remove('visible');
                         }, 1500); // Shorter duration

                     }).catch(err => {
                         console.error('Failed to copy LaTeX: ', err);
                         // Optional: Show a failure message
                     });
                 }
             }
         });

         // Add the data-latex attribute and copy class dynamically after MathJax typesets
         if (typeof MathJax !== 'undefined' && MathJax.startup) {
             MathJax.startup.promise.then(() => {
                 MathJax.typesetPromise().then(() => {
                     document.querySelectorAll('.MathJax, mjx-container').forEach(el => {
                         const latex = el.querySelector('script[type^="math/tex"]');
                         if (latex) {
                             el.setAttribute('data-latex', latex.textContent);
                             el.classList.add('math-copyable'); // Add class for potential styling/targeting
                             el.setAttribute('title', 'Click to copy LaTeX'); // Add tooltip
                         }
                     });
                 });
             });
         }

     } catch (e) {
         console.error("Error setting up math copy:", e);
     }

});

// --- Dark Mode Toggle Functionality ---
function setupDarkMode() {
    try {
        const darkModeToggleFixed = document.getElementById('dark-mode-toggle');
        const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar');
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
             // Update checkbox states
             if(darkModeToggleFixed) darkModeToggleFixed.checked = isDark;
             if(darkModeToggleSidebar) darkModeToggleSidebar.checked = isDark;
        };

        applyDarkMode(savedDarkMode);

        // Function to handle toggle change and sync
        const handleToggleChange = (isDarkMode, sourceToggleId) => {
            applyDarkMode(isDarkMode);
            localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
        };

        // Add toggle event listeners
        if (darkModeToggleFixed) {
            darkModeToggleFixed.addEventListener('change', function() {
                handleToggleChange(this.checked, 'dark-mode-toggle');
            });
        }
         if (darkModeToggleSidebar) {
            darkModeToggleSidebar.addEventListener('change', function() {
                handleToggleChange(this.checked, 'dark-mode-toggle-sidebar');
            });
        }
    } catch (e) {
        console.error("Error setting up dark mode:", e);
    }
}

// Initialize dark mode
document.addEventListener('DOMContentLoaded', setupDarkMode);


// --- Print Functionality ---
function setupPrintButton() {
    try {
        // Button specific to individual paper pages (if you add one)
        const printPageButton = document.getElementById('print-page');
        if (printPageButton) {
            printPageButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.print();
            });
        }

        // Button specific to the index page
        const printIndexButton = document.getElementById('print-index');
        if (printIndexButton) {
            printIndexButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.print();
            });
        }
    } catch (e) {
        console.error("Error setting up print buttons:", e);
    }
}

// Initialize print functionality
document.addEventListener('DOMContentLoaded', setupPrintButton);


// --- Mobile Navigation Functionality ---
document.addEventListener('DOMContentLoaded', function() {
    try {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return; // Exit if no sidebar exists

        let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        let sidebarBackdrop = document.querySelector('.sidebar-backdrop');

        // Create toggle and backdrop if they don't exist
        if (!mobileNavToggle) {
            mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰'; // Hamburger icon
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            // Prepend to body to ensure it's accessible early
             document.body.insertBefore(mobileNavToggle, document.body.firstChild);
        }

         if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            // Insert backdrop after sidebar
             sidebar.parentNode.insertBefore(sidebarBackdrop, sidebar.nextSibling);
        }

        const toggleSidebar = (show) => {
            const isActive = typeof show === 'boolean' ? show : !sidebar.classList.contains('active');
            sidebar.classList.toggle('active', isActive);
            sidebarBackdrop.classList.toggle('active', isActive);
            mobileNavToggle.setAttribute('aria-expanded', isActive);
            mobileNavToggle.innerHTML = isActive ? '✕' : '☰'; // Toggle icon
        };

        // Toggle sidebar on button click
        mobileNavToggle.addEventListener('click', (e) => {
             e.stopPropagation(); // Prevent click from closing immediately if backdrop listener fires
             toggleSidebar();
         });


        // Close sidebar when clicking the backdrop
        sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));

        // Close sidebar when clicking a link inside (for SPA-like behavior or same-page links)
        sidebar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                // Check if mobile view is active based on toggle visibility
                 if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                    toggleSidebar(false);
                 }
            }
        });

        // Close sidebar on 'Escape' key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                toggleSidebar(false);
            }
        });


        // --- Basic Image Zoom on Mobile ---
        // Use event delegation for potentially dynamic images
        document.body.addEventListener('click', function(event) {
            if (event.target.matches('.question-figure img')) {
                 // Check if mobile view is active (simple check: toggle button is visible)
                 if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                      event.target.classList.toggle('zoomed');
                      // Optional: Add a backdrop for zoomed images
                 }
            } else if (event.target.matches('.question-figure img.zoomed')) {
                 // If already zoomed, clicking again unzooms
                  event.target.classList.remove('zoomed');
            }
        });


        // --- Handle Resize ---
        // Debounce resize handler for performance
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                 const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
                 if (!isMobileView && sidebar.classList.contains('active')) {
                     // If resized to desktop view while mobile menu was open, close it.
                     toggleSidebar(false);
                 }
                 // Ensure correct initial state display based on resize
                 mobileNavToggle.style.display = isMobileView ? 'block' : 'none';

            }, 250); // Adjust debounce time as needed
        });

        // Initial check in case the page loads in mobile view
         const isInitiallyMobile = window.getComputedStyle(mobileNavToggle).display !== 'none';
         mobileNavToggle.style.display = isInitiallyMobile ? 'block' : 'none';


    } catch (e) {
        console.error("Error setting up mobile navigation:", e);
    }
});