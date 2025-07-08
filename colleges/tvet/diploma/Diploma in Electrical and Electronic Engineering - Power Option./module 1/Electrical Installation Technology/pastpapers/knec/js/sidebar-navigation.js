// js/sidebar-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // --- Sidebar Active Link ---
    try {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to index if path is '/'
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
                // Optional: Scroll sidebar to show active link if needed
                // link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                link.classList.remove('active'); // Ensure only one is active
            }
        });
    } catch (e) {
        console.error("Error setting active sidebar link:", e);
    }

    // --- Smooth Scrolling for Internal Question Links ---
    try {
        // Select links starting with #question- specifically within the main content area
        const questionLinks = document.querySelectorAll('main a[href^="#question-"]');
        questionLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                // Check if the target element is on the *current* page
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault(); // Prevent default jump only if target is on this page
                    const headerOffset = 60; // Adjust this value based on your fixed header height (if any)
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    // Smooth scroll to target
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Add highlight effect (using CSS animation)
                    targetElement.classList.remove('highlight'); // Remove previous highlight if any
                    void targetElement.offsetWidth; // Trigger reflow to restart animation
                    targetElement.classList.add('highlight');
                    // CSS animation handles removal implicitly or use setTimeout if needed:
                    // setTimeout(() => {
                    //     targetElement.classList.remove('highlight');
                    // }, 2000); // Match CSS animation duration
                }
                // If targetElement is null, it's likely a link to a different page,
                // so the default browser behavior (navigation) should occur.
            });
        });
    } catch (e) {
        console.error("Error setting up smooth scroll for questions:", e);
    }


    // Note: Answers are always visible per instructions. No toggle needed.

    // --- Back to Top Button ---
    try {
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            const scrollThreshold = 300; // Pixels scrolled before button appears

            const toggleVisibility = () => {
                if (window.pageYOffset > scrollThreshold) {
                    backToTopBtn.style.display = 'block';
                    backToTopBtn.style.opacity = '0.8'; // Match CSS initial opacity
                } else {
                    backToTopBtn.style.opacity = '0';
                     // Use transition end to set display none for accessibility
                    backToTopBtn.addEventListener('transitionend', () => {
                        if (window.pageYOffset <= scrollThreshold) {
                             backToTopBtn.style.display = 'none';
                        }
                    }, { once: true }); // Ensure listener runs only once per transition
                }
            };

            window.addEventListener('scroll', toggleVisibility);
            toggleVisibility(); // Initial check on load

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
    // This part is more complex as MathJax rendering might need specific targeting.
    // The example assumes you *manually* add `class="math-copyable"` and `data-latex="..."`
    // to the elements containing the LaTeX source *before* MathJax renders it.
    // Or, you might need to configure MathJax to add these attributes.
    // A simpler approach might be to copy the rendered text, but that's less useful.

    // try {
    //     // Target elements potentially containing MathJax output that you've marked
    //     const mathEquations = document.querySelectorAll('.math-copyable'); // Requires manual setup
    //     const copyConfirmation = document.createElement('div');
    //     copyConfirmation.className = 'copy-confirmation'; // Use class for styling

    //     mathEquations.forEach(equation => {
    //         equation.style.cursor = 'pointer'; // Indicate clickability
    //         equation.setAttribute('title', 'Click to copy LaTeX'); // Tooltip

    //         equation.addEventListener('click', function(event) {
    //             event.stopPropagation(); // Prevent triggering other clicks if nested
    //             const equationText = this.getAttribute('data-latex');

    //             if (!equationText) {
    //                 console.warn("No data-latex attribute found on:", this);
    //                 return;
    //             }

    //             navigator.clipboard.writeText(equationText).then(() => {
    //                 // Show copy confirmation near the click or fixed
    //                 copyConfirmation.textContent = 'LaTeX Copied!';
    //                 document.body.appendChild(copyConfirmation);
    //                 copyConfirmation.classList.add('visible'); // Make it visible via CSS

    //                 // Remove after a delay
    //                 setTimeout(() => {
    //                     copyConfirmation.classList.remove('visible');
    //                     // Optional: Remove from DOM after transition
    //                      copyConfirmation.addEventListener('transitionend', () => {
    //                          if (!copyConfirmation.classList.contains('visible') && document.body.contains(copyConfirmation)) {
    //                              document.body.removeChild(copyConfirmation);
    //                          }
    //                      }, { once: true });
    //                 }, 1500); // Shorter duration
    //             }).catch(err => {
    //                 console.error('Failed to copy LaTeX: ', err);
    //                 copyConfirmation.textContent = 'Copy Failed!';
    //                 document.body.appendChild(copyConfirmation);
    //                 copyConfirmation.classList.add('visible');
    //                 setTimeout(() => {
    //                      copyConfirmation.classList.remove('visible');
    //                 }, 1500);
    //             });
    //         });
    //     });
    // } catch (e) {
    //     console.error("Error setting up math copy functionality:", e);
    // }

    setupDarkMode(); // Initialize Dark Mode
    setupPrintButton(); // Initialize Print Buttons
    setupMobileNav(); // Initialize Mobile Navigation

}); // End DOMContentLoaded

// --- Dark Mode Functionality ---
function setupDarkMode() {
    try {
        // Select all toggles - allows multiple toggles (e.g., sidebar + fixed)
        const darkModeToggles = document.querySelectorAll('input[type="checkbox"][id^="dark-mode-toggle"]');
        const htmlElement = document.documentElement;

        // 1. Check for saved preference in localStorage
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';

        // 2. Apply saved preference on initial load
        const applyDarkMode = (isDark) => {
            if (isDark) {
                htmlElement.classList.add('dark-mode');
            } else {
                htmlElement.classList.remove('dark-mode');
            }
            // Update the state of all toggles
            darkModeToggles.forEach(toggle => {
                toggle.checked = isDark;
            });
        };

        applyDarkMode(savedDarkMode);

        // 3. Function to handle toggle change and sync state
        const handleToggleChange = (isDarkMode, sourceToggleId) => {
            if (isDarkMode) {
                htmlElement.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                htmlElement.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
            // Sync the state of other toggles
            darkModeToggles.forEach(toggle => {
                if (toggle.id !== sourceToggleId) {
                    toggle.checked = isDarkMode;
                }
            });
        };

        // 4. Add event listeners to all toggles
        darkModeToggles.forEach(toggle => {
            toggle.addEventListener('change', function() {
                handleToggleChange(this.checked, this.id);
            });
        });

         // 5. Listen for storage changes from other tabs/windows (optional but good practice)
         window.addEventListener('storage', (event) => {
            if (event.key === 'darkMode') {
                applyDarkMode(event.newValue === 'true');
            }
         });

    } catch (e) {
        console.error("Error setting up dark mode:", e);
    }
}

// --- Print Functionality ---
function setupPrintButton() {
    try {
        // Button on individual paper pages (if you add it)
        const printPageButton = document.getElementById('print-page');
        if (printPageButton) {
            printPageButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.print(); // Trigger browser print dialog
            });
        }

        // Button on the index page
        const printIndexButton = document.getElementById('print-index');
        if (printIndexButton) {
            printIndexButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.print(); // Trigger browser print dialog
            });
        }
    } catch (e) {
        console.error("Error setting up print buttons:", e);
    }
}

// --- Mobile Navigation Functionality ---
function setupMobileNav() {
    try {
        const sidebar = document.querySelector('.sidebar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle'); // Assumes button exists in HTML/CSS for mobile
        let sidebarBackdrop = document.querySelector('.sidebar-backdrop');

        // Only proceed if essential elements exist
        if (!sidebar || !mobileNavToggle) {
             // If toggle doesn't exist, mobile nav isn't needed or CSS handles hiding/showing sidebar differently
             // console.log("Mobile nav toggle or sidebar not found, skipping mobile nav setup.");
            return;
        }

        // Dynamically create backdrop if it doesn't exist
        if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
        }

        const toggleSidebar = (forceClose = false) => {
            const isActive = sidebar.classList.contains('active') && !forceClose;
            if (isActive) { // Close sidebar
                sidebar.classList.remove('active');
                sidebarBackdrop.classList.remove('active');
                mobileNavToggle.innerHTML = '☰'; // Hamburger
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.setAttribute('aria-label', 'Open navigation menu');
            } else if (!forceClose) { // Open sidebar
                 sidebar.classList.add('active');
                 sidebarBackdrop.classList.add('active');
                 mobileNavToggle.innerHTML = '✕'; // Close icon
                 mobileNavToggle.setAttribute('aria-expanded', 'true');
                 mobileNavToggle.setAttribute('aria-label', 'Close navigation menu');
            }
        };

        // Toggle sidebar on button click
        mobileNavToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling up
            toggleSidebar();
        });

        // Close sidebar when clicking on the backdrop
        sidebarBackdrop.addEventListener('click', () => {
             toggleSidebar(true); // Force close
        });

        // Close sidebar when clicking a link inside the sidebar (on mobile)
        const sidebarLinks = sidebar.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if mobile view is active (e.g., toggle button is visible)
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                    toggleSidebar(true); // Force close
                }
            });
        });

        // Optional: Close sidebar on ESC key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                toggleSidebar(true); // Force close
            }
        });

        // --- Mobile Image Zoom ---
        // Simple toggle class based zoom - adjust CSS for desired effect
        const figureImages = document.querySelectorAll('.question-figure img');
        figureImages.forEach(img => {
            img.addEventListener('click', function() {
                 // Check if mobile view is active (optional, could allow zoom on desktop too)
                 // if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                     this.classList.toggle('zoomed');
                     // Add/remove body class to prevent scrolling when zoomed?
                     // document.body.classList.toggle('no-scroll', this.classList.contains('zoomed'));
                 // }
            });
        });

        // --- Swipe Gestures (Basic Implementation) ---
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Min distance for swipe
        const edgeThreshold = 50; // How close to edge swipe must start

        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true }); // Use passive for performance unless preventDefault is needed

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            const isSidebarActive = sidebar.classList.contains('active');
            const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

            if (!isMobileView) return; // Only handle swipes on mobile view

            // Swipe Right (Open): If starts near left edge and sidebar is closed
            if (swipeDistance > swipeThreshold && touchStartX < edgeThreshold && !isSidebarActive) {
                toggleSidebar(); // Open
            }

            // Swipe Left (Close): If sidebar is open (allow swipe from anywhere on screen for simplicity)
            if (swipeDistance < -swipeThreshold && isSidebarActive) {
                 toggleSidebar(true); // Close
            }
        }

        // Handle Resize: Ensure correct state if window resized across breakpoint
        window.addEventListener('resize', () => {
             const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
             if (!isMobileView && sidebar.classList.contains('active')) {
                 // If resized to desktop view while mobile sidebar was open, close it
                 toggleSidebar(true);
             }
             // You might need additional logic here if CSS doesn't handle the transition smoothly
        });


    } catch (e) {
        console.error("Error setting up mobile navigation:", e);
    }
}