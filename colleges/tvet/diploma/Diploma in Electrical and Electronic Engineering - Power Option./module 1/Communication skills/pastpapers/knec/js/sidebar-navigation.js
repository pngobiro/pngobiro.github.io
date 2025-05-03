// js/sidebar-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Find all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    // Add active class to current page
    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Check for exact match or index.html for the root page
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
            // Optional: If the link is inside a collapsible section, expand it
            const parentList = link.closest('ul');
            if (parentList && parentList.previousElementSibling && parentList.previousElementSibling.matches('.collapsible')) {
                parentList.style.display = 'block';
                parentList.previousElementSibling.classList.add('active');
            }
        }
    });


    // Add smooth scrolling for question links (for navigation within the same page)
    const questionLinks = document.querySelectorAll('a[href^="#question-"]');

    questionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is on the current page
            if (window.location.pathname.split('/').pop() === this.pathname.split('/').pop()) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate offset for fixed header (adjust the value as needed)
                    const headerOffset = 80; // Example offset value
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


                    // Smooth scroll to target
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
             // If the link is to a different page, default browser behavior handles it
        });
    });

    // Note: Answers are always visible and not toggleable
    // No toggle functionality needed as answers should always be shown

    // Add back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                backToTopBtn.style.display = 'block';
                 setTimeout(() => { backToTopBtn.style.opacity = '0.8'; }, 10); // Fade in
            } else {
                backToTopBtn.style.opacity = '0';
                 setTimeout(() => { backToTopBtn.style.display = 'none'; }, 300); // Hide after fade out
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

    function setupMathCopy() {
        const mathEquations = document.querySelectorAll('.MathJax'); // Target rendered MathJax elements

        mathEquations.forEach(equation => {
             // Check if it already has the listener to avoid duplicates
             if (equation.dataset.copyListenerAttached === 'true') return;
             equation.dataset.copyListenerAttached = 'true'; // Mark as listener attached

            equation.style.cursor = 'pointer';
            equation.setAttribute('title', 'Copy LaTeX to clipboard');

            equation.addEventListener('click', function() {
                // Try to find the original LaTeX source
                let latexSource = '';
                const scriptElement = equation.previousElementSibling; // Often a <script type="math/tex">
                if (scriptElement && scriptElement.tagName === 'SCRIPT' && (scriptElement.type.includes('math/tex') || scriptElement.type.includes('math/mml'))) {
                    latexSource = scriptElement.textContent.trim();
                } else {
                    // Fallback: Look for a data attribute (if added manually)
                     latexSource = equation.getAttribute('data-latex');
                     // As a last resort, try to get the accessible text if available
                     if (!latexSource && equation.textContent) {
                         // This might not be pure LaTeX but could be useful
                         latexSource = equation.textContent.trim();
                         console.warn("Could not find original LaTeX, copying rendered text instead.");
                     }
                }


                if (latexSource) {
                    navigator.clipboard.writeText(latexSource).then(() => {
                        showCopyConfirmation(equation);
                    }).catch(err => {
                        console.error('Failed to copy LaTeX: ', err);
                        alert('Failed to copy equation.'); // Provide feedback
                    });
                } else {
                    console.warn("Could not extract LaTeX source for this equation.");
                    alert("Could not extract LaTeX source for copying.");
                }
            });
        });
    }

    // Function to show copy confirmation
    function showCopyConfirmation(element) {
        // Remove existing confirmations first
        const existingConfirmations = document.querySelectorAll('.copy-confirmation');
        existingConfirmations.forEach(conf => conf.remove());

        const confirmation = document.createElement('div');
        confirmation.className = 'copy-confirmation';
        confirmation.textContent = 'LaTeX Copied!';
        document.body.appendChild(confirmation);

        // Position near the element (optional, basic fixed positioning is default)
         // const rect = element.getBoundingClientRect();
         // confirmation.style.top = `${rect.top + window.scrollY - 35}px`;
         // confirmation.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
         // confirmation.style.transform = 'translateX(-50%)'; // Center above element

        // Trigger animation and removal
        setTimeout(() => {
            if (document.body.contains(confirmation)) {
                document.body.removeChild(confirmation);
            }
        }, 2000); // Duration matches CSS animation
    }


    // Run MathJax first, then set up copy functionality
     if (typeof MathJax !== 'undefined' && MathJax.startup) {
        MathJax.startup.promise.then(() => {
            console.log('MathJax ready, setting up copy functionality.');
            setupMathCopy();
             // Optional: Set up a MutationObserver to handle dynamically loaded content
             const observer = new MutationObserver((mutationsList) => {
                 for(let mutation of mutationsList) {
                     if (mutation.type === 'childList') {
                         // Check added nodes for MathJax elements
                         mutation.addedNodes.forEach(node => {
                             if (node.nodeType === 1 && (node.matches('.MathJax') || node.querySelector('.MathJax'))) {
                                 console.log('Dynamically added MathJax detected, setting up copy.');
                                 setupMathCopy(); // Re-run setup
                             }
                         });
                     }
                 }
             });
             observer.observe(document.body, { childList: true, subtree: true });

        });
    } else {
        console.warn('MathJax not found or not ready.');
        // Fallback or wait longer if needed
        setTimeout(setupMathCopy, 1000); // Try again after 1 second
    }


});

// Add dark mode toggle functionality
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar');
    const htmlElement = document.documentElement; // Target the <html> element

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference immediately
    if (savedDarkMode) {
        htmlElement.classList.add('dark-mode');
    } else {
        htmlElement.classList.remove('dark-mode'); // Ensure it's removed if not saved as true
    }

    // Sync toggles after initial state is set
     if (darkModeToggle) darkModeToggle.checked = savedDarkMode;
     if (darkModeToggleSidebar) darkModeToggleSidebar.checked = savedDarkMode;


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

// Initialize dark mode functionality
document.addEventListener('DOMContentLoaded', setupDarkMode);

// Add print functionality
function setupPrintButton() {
    const printButton = document.getElementById('print-page'); // Button on individual paper pages
    const printIndexButton = document.getElementById('print-index'); // Button on the index page

    if (printButton) {
        printButton.addEventListener('click', function(e) {
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

// Initialize print functionality
document.addEventListener('DOMContentLoaded', setupPrintButton);


// Add mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebarBackdrop = document.querySelector('.sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Only run if sidebar exists
    if (sidebar) {
         // Ensure backdrop exists
        if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
        }

        // Toggle sidebar on button click
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', function() {
                const isExpanded = sidebar.classList.toggle('active');
                sidebarBackdrop.classList.toggle('active');
                body.classList.toggle('sidebar-open'); // Prevent body scroll when sidebar is open

                // Toggle aria-expanded state
                mobileNavToggle.setAttribute('aria-expanded', isExpanded);

                // Change button text/icon (Hamburger <-> Close)
                mobileNavToggle.innerHTML = isExpanded ? '✕' : '☰';
            });
        }

        // Close sidebar when clicking outside or the backdrop
        sidebarBackdrop.addEventListener('click', function() {
            closeMobileSidebar();
        });

        // Close sidebar when clicking a link (mobile)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Check if mobile view is active (based on CSS breakpoint display of toggle)
                 if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                     closeMobileSidebar();
                }
            });
        });

         // Function to close the mobile sidebar
         function closeMobileSidebar() {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            body.classList.remove('sidebar-open');
            if (mobileNavToggle) {
                mobileNavToggle.innerHTML = '☰';
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
         }


        // Enable image zoom on mobile (toggle class for CSS scaling) - REMOVED - Requires JS or library
        // const figureImages = document.querySelectorAll('.question-figure img');
        // figureImages.forEach(img => {
        //     img.addEventListener('click', function() {
        //          // Check if mobile view is active
        //          if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
        //              this.classList.toggle('zoomed'); // Add/remove 'zoomed' class
        //          }
        //     });
        // });

        // Add swipe gestures for mobile navigation (Basic Example)
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Minimum distance for a swipe

        body.addEventListener('touchstart', e => {
            // Check if the touch starts inside the sidebar or near the edge
            const touchX = e.changedTouches[0].clientX;
            const sidebarActive = sidebar.classList.contains('active');

             // Only record startX if swipe is intended for sidebar
             // (e.g., starting near left edge when closed, or inside when open)
            if ((!sidebarActive && touchX < 40) || (sidebarActive && touchX < sidebar.offsetWidth)) {
                touchStartX = touchX;
            } else {
                 touchStartX = null; // Ignore swipes starting elsewhere
            }

        }, { passive: true }); // Use passive for performance on touchstart

         body.addEventListener('touchend', e => {
             if (touchStartX === null) return; // Ignore if swipe didn't start in the intended area

             touchEndX = e.changedTouches[0].clientX;
             handleSwipe();
             // Reset touchStartX to prevent interference
             touchStartX = null;
         }, { passive: false }); // Use passive: false on touchend to potentially preventDefault if needed


        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            const sidebarActive = sidebar.classList.contains('active');

            // Left to right swipe (open sidebar)
            if (swipeDistance > swipeThreshold && !sidebarActive && touchStartX < 40) { // Ensure started near edge
                 sidebar.classList.add('active');
                 sidebarBackdrop.classList.add('active');
                 body.classList.add('sidebar-open');
                 if (mobileNavToggle) {
                     mobileNavToggle.innerHTML = '✕';
                     mobileNavToggle.setAttribute('aria-expanded', 'true');
                 }
            }

            // Right to left swipe (close sidebar)
            if (swipeDistance < -swipeThreshold && sidebarActive) {
                 // Ensure the swipe started within the sidebar's width
                 if (touchStartX < sidebar.offsetWidth) {
                    closeMobileSidebar();
                 }
            }
        }

        // Handle device orientation changes or window resize
        window.addEventListener('resize', function() {
             const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

             if (!isMobileView) { // Resized to desktop view
                // Ensure mobile overlay/styles are removed
                closeMobileSidebar();
                 body.classList.remove('sidebar-open');
                 sidebar.style.position = ''; // Reset position if needed
                 sidebar.style.left = '';
             } else {
                 // Ensure sidebar is correctly positioned if it was open during resize
                 if (!sidebar.classList.contains('active')) {
                     sidebar.style.left = `-${sidebar.offsetWidth}px`; // Ensure it's hidden if not active
                 }
             }

             // Adjust MathJax display on orientation change or resize
             if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                 // Debounce or throttle this if needed for performance
                 // Basic timeout:
                 clearTimeout(window.resizeTimer);
                 window.resizeTimer = setTimeout(() => {
                     MathJax.typesetPromise().catch(err => console.error("MathJax typesetting failed on resize:", err));
                 }, 250);
             }
        });

        // Initial check on load to set correct state
        const isInitialMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
        if (isInitialMobileView) {
            sidebar.style.position = 'fixed'; // Ensure fixed position for mobile overlay
             sidebar.style.left = `-${sidebar.offsetWidth}px`; // Start hidden
        } else {
            sidebar.style.position = ''; // Use default CSS (sticky)
            sidebar.style.left = '';
        }

    } // End if(sidebar)
});