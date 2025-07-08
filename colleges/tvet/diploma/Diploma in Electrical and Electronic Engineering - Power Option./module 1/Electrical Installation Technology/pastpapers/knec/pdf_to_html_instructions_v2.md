# KNEC Past Papers: PDF to HTML Conversion Guide

## Project Goals
Convert PDF past papers into structured HTML files with proper styling, mathematical equations, and images.

## 1. Project Structure

Create this folder structure:
```
pastpapers/
├── js/                        # JavaScript files
├── components/                # Reusable HTML components (Optional, not used in base template)
├── images/                    # Downloaded images (Not used for Mathpix URLs directly)
├── styles.css                 # CSS styles
├── index.html                 # Main landing page
├── [paper-name].html          # Individual paper pages (e.g., 2023j.html)
└── [paper-name]_ocr.mmd       # OCR output files
```

## 2. OCR Process

Convert PDFs to Markdown Math (MMD) format using Mathpix OCR. Ensure you save the output to a file with a `.mmd` extension.
```bash
# Example command to run OCR for a single file
# Replace /full/path/to/2022n.pdf with the actual path
node /home/ngobiro/projects/mathpix-ocr-server/build/index.js "/full/path/to/2022n.pdf" > "2022n_ocr.mmd"

# Create a tracking file if needed
touch processed.txt
# Track processed files
echo "2022n.pdf" >> processed.txt
```

## 3. HTML Templates

### 3.1 Base HTML Structure (for each paper)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SUBJECT] - [MONTH] [YEAR] | KNEC Past Papers</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <!-- BEGIN HEADER -->
    <header>
        <div class="container">
            <h1>[SUBJECT]</h1>
            <h2>[MONTH] [YEAR]</h2>
            <div class="exam-details">
                <p>Paper Code: [PAPER CODE]</p>
                <p>Duration: [DURATION]</p>
                <p>Module: [MODULE]</p>
            </div>
        </div>
    </header>
    <!-- END HEADER -->

    <div class="container main-content">
        <!-- BEGIN SIDEBAR -->
        <div class="sidebar">
            <div class="sidebar-header">
                <h3>Past Papers</h3>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="2023j.html">July 2023</a></li>
                    <li><a href="2022n.html">November 2022</a></li>
                    <li><a href="2022j.html">July 2022</a></li>
                    <li><a href="index.html">Home</a></li>
                </ul>
            </nav>
             <!-- Dark Mode Toggle - Recommended placement in sidebar for desktop/consistent mobile toggle location -->
            <div class="dark-mode-container">
                <label class="dark-mode-toggle" for="dark-mode-toggle-sidebar">
                    <input type="checkbox" id="dark-mode-toggle-sidebar">
                    <span class="dark-mode-slider"></span>
                </label>
                <span class="dark-mode-label">Dark Mode</span>
            </div>
        </div>
        <!-- END SIDEBAR -->

        <!-- BEGIN MAIN CONTENT -->
        <main>
            <div class="paper-navigation top">
                <a href="previous-paper.html" class="btn">Previous Paper</a>
                <a href="index.html" class="btn">Home</a>
                <a href="next-paper.html" class="btn">Next Paper</a>
            </div>

            <!-- BEGIN INSTRUCTIONS -->
            <section class="paper-intro">
                <h3>Instructions to Candidates</h3>
                <ul>
                    <li>This paper consists of SIX questions.</li>
                    <li>Answer any FOUR questions.</li>
                    <li>All questions carry equal marks.</li>
                    <li>Write your answers in the answer booklet provided.</li>
                </ul>
            </section>
            <!-- END INSTRUCTIONS -->

            <!-- BEGIN QUESTIONS -->
            <section class="paper-content">
                <!-- Questions will be added here -->
            </section>
            <!-- END QUESTIONS -->

            <div class="paper-navigation bottom">
                <a href="previous-paper.html" class="btn">Previous Paper</a>
                <a href="index.html" class="btn">Home</a>
                <a href="next-paper.html" class="btn">Next Paper</a>
            </div>
        </main>
        <!-- END MAIN CONTENT -->
    </div>

    <!-- BEGIN FOOTER -->
    <footer>
        <div class="container">
            <p>&copy; 2025 [SUBJECT] Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
    <!-- END FOOTER -->

    <!-- Back to Top Button - Recommended placement in body for fixed positioning -->
    <button id="back-to-top" title="Back to Top">↑</button>
    <!-- Dark Mode Toggle for fixed position - Can be synced with sidebar toggle -->
     <div class="dark-mode-container">
        <label class="dark-mode-toggle" for="dark-mode-toggle">
            <input type="checkbox" id="dark-mode-toggle">
            <span class="dark-mode-slider"></span>
        </label>
        <span class="dark-mode-label">Dark Mode</span>
    </div>

</body>
</html>
```

### 3.2 Index Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SUBJECT] Past Papers Collection</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
</head>
<body>
    <!-- BEGIN HEADER -->
    <header>
        <div class="container">
            <h1>[SUBJECT]</h1>
            <h2>Past Papers Collection</h2>
            <div class="exam-details">
                <p>Paper Code: [PAPER CODE]</p>
                <p>Module: [MODULE]</p>
            </div>
        </div>
    </header>
    <!-- END HEADER -->

    <div class="container main-content">
        <!-- BEGIN SIDEBAR -->
        <div class="sidebar">
            <div class="sidebar-header">
                <h3>Past Papers</h3>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="2023j.html">July 2023</a></li>
                    <li><a href="2022n.html">November 2022</a></li>
                    <li><a href="2022j.html">July 2022</a></li>
                    <li><a href="index.html" class="active">Home</a></li>
                </ul>
            </nav>
             <!-- Dark Mode Toggle - Recommended placement in sidebar for desktop/consistent mobile toggle location -->
            <div class="dark-mode-container">
                <label class="dark-mode-toggle" for="dark-mode-toggle-sidebar">
                    <input type="checkbox" id="dark-mode-toggle-sidebar">
                    <span class="dark-mode-slider"></span>
                </label>
                <span class="dark-mode-label">Dark Mode</span>
            </div>
        </div>
        <!-- END SIDEBAR -->

        <!-- BEGIN MAIN CONTENT -->
        <main>
            <section class="intro">
                <h2>Past Papers with Detailed Solutions</h2>
                <p>A comprehensive collection of KNEC [SUBJECT] past papers with detailed answers and explanations.</p>
            </section>

            <!-- Top Navigation Section for Index Page -->
            <section class="quick-links">
                <h2>Quick Links</h2>
                <div class="nav-buttons">
                    <a href="#recent-papers" class="btn btn-primary">Recent Papers</a>
                    <a href="#exam-years" class="btn btn-secondary">All Years</a>
                    <a href="#modules" class="btn btn-accent">Modules</a>
                    <button id="print-index" class="btn btn-outline">Print Index</button>
                </div>
            </section>

            <!-- Search Component for Index Page -->
            <section class="search-container">
                <div class="search-box">
                    <input type="text" id="paper-search" placeholder="Search papers by year, month or topic...">
                    <button id="search-button">Search</button>
                </div>
                <div class="filter-options">
                    <select id="year-filter">
                        <option value="">All Years</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                    <select id="month-filter">
                        <option value="">All Sessions</option>
                        <option value="july">July</option>
                        <option value="november">November</option>
                    </select>
                </div>
            </section>

            <!-- Statistics Section for Index Page -->
            <section class="stats-container">
                <h2>Collection Statistics</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">24</div>
                        <div class="stat-label">Past Papers</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">6</div>
                        <div class="stat-label">Years Covered</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">144</div>
                        <div class="stat-label">Questions</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">100%</div>
                        <div class="stat-label">With Solutions</div>
                    </div>
                </div>
            </section>

            <!-- BEGIN 2023 PAPERS -->
            <section class="year-section">
                <h2>2023</h2>
                <div class="paper-grid">
                    <div class="paper-card">
                        <h3>July 2023</h3>
                        <div class="meta">
                            <p>Questions: 6 | Duration: 2½ hours</p>
                        </div>
                        <div class="actions">
                            <a href="2023j.html" class="btn">View Online</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END 2023 PAPERS -->

            <!-- BEGIN 2022 PAPERS -->
            <section class="year-section">
                <h2>2022</h2>
                <div class="paper-grid">
                    <div class="paper-card">
                        <h3>November 2022</h3>
                        <div class="meta">
                            <p>Questions: 6 | Duration: 2½ hours</p>
                        </div>
                        <div class="actions">
                            <a href="2022n.html" class="btn">View Online</a>
                        </div>
                    </div>
                    <div class="paper-card">
                        <h3>July 2022</h3>
                        <div class="meta">
                            <p>Questions: 6 | Duration: 2½ hours</p>
                        </div>
                        <div class="actions">
                            <a href="2022j.html" class="btn">View Online</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END 2022 PAPERS -->
        </main>
        <!-- END MAIN CONTENT -->
    </div>

    <!-- BEGIN FOOTER -->
    <footer>
        <div class="container">
            <p>&copy; 2025 [SUBJECT] Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
    <!-- END FOOTER -->

    <!-- Back to Top Button - Recommended placement in body for fixed positioning -->
    <button id="back-to-top" title="Back to Top">↑</button>
     <!-- Dark Mode Toggle for fixed position - Can be synced with sidebar toggle -->
     <div class="dark-mode-container">
        <label class="dark-mode-toggle" for="dark-mode-toggle">
            <input type="checkbox" id="dark-mode-toggle">
            <span class="dark-mode-slider"></span>
        </label>
        <span class="dark-mode-label">Dark Mode</span>
    </div>
</body>
</html>
```

### 3.3 Question Structure Template

For each question, use this structure with clear comment markers. **Strictly follow this structure.**

```html
<!-- BEGIN QUESTION 1 -->
<div class="question" id="question-1">
    <h3>Question 1 (15 marks)</h3>
    <div class="question-content">
        <p>(a) Question text for part a... (5 marks)</p>
        <p>(b) Question text for part b... (5 marks)</p>
        <p>(c) Question text for part c... (5 marks)</p>

        <!-- BEGIN FIGURE 1 -->
        <figure class="question-figure">
            <!-- Image URL from Mathpix OCR -->
            <img src="https://cdn.mathpix.com/snip/images/your_image_id.png" alt="Description of figure derived from question context">
            <figcaption>Figure 1: Description</figcaption>
        </figure>
        <!-- END FIGURE 1 -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
            <!-- Answer content here. Use p, ul, ol, table, pre, etc. -->
            <!-- DO NOT ADD EXTRA CONTAINER DIVS like <div class="answer-part"> inside answer-detail -->

            <p class="answer-intro">Introduction to the answer, providing context...</p>

            <p><strong>(a)</strong> Detailed answer to part a...</p>
            <ul>
                <li>Point 1</li>
                <li>Point 2</li>
            </ul>

            <p><strong>(b)</strong> Detailed answer to part b...</p>
             <pre>
// Code example (use <pre><code>)
function example() {
    console.log("hello");
}
             </pre>

            <p><strong>(c)</strong> Detailed answer to part c...</p>
            <figure class="answer-figure">
                 <!-- ASCII diagram for answer explanation -->
                 <pre>
+---+
|   |
+---+
                 </pre>
                <figcaption>Diagram illustrating concept (Optional caption)</figcaption>
            </figure>


            <p class="answer-conclusion">Summary or concluding remarks...</p>
        </div>
    </div>
</div>
<!-- END QUESTION 1 -->
```

### 3.4 JavaScript for Main Functionality

```javascript
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
```

## 4. Conversion Process Requirements

### 4.1 Simultaneous Question and Answer Creation

IMPORTANT: When converting questions from MMD to HTML, always create comprehensive answers simultaneously. Do not process all questions first and add answers later.

1.  **Single-Step Approach Required**
    *   Process each question and immediately create its answer
    *   Never leave the answer section empty or with placeholder text
    *   Complete one question fully (with answer) before moving to the next

2.  **Process Flow for Each Question:**
    ```
    1. Extract question content from MMD
    2. Format question structure in HTML
    3. Handle any images referenced in the question (use Mathpix URL directly in <img>)
    4. Research and develop comprehensive answer
    5. Format answer content using **semantic HTML elements** (p, ul, ol, table, pre) and **specific styling classes** (answer-intro, key-point, step-by-step, formula-explanation, answer-conclusion).
    6. Handle any diagrams needed *within* the answer using **ASCII art or text descriptions** within <pre> or <p> tags, captioned with <figcaption> within a <figure class="answer-figure">.
    7. Verify both question and answer for completeness and correct formatting.
    8. Only then move to the next question
    ```

3.  **Benefits of Simultaneous Creation:**
    *   Ensures all questions have matching answers
    *   Maintains context and understanding while the question is fresh
    *   Prevents mismatch between question content and answers
    *   Avoids disruptions in formatting and style consistency

4.  **Verification During Creation:**
    *   Check math notation in both question and answer
    *   Ensure image references (Mathpix URLs) are correct and `alt` text is descriptive.
    *   Verify that answer addresses all parts of the question
    *   Confirm correct mark allocation across question parts
    *   Handle any ambiguous or conflicting information found in the OCR (e.g., inconsistent numbers, fragmented text) by making reasonable assumptions and noting them clearly within the answer using a `.key-point` styled div.

By creating answers simultaneously with questions, you ensure complete, well-matched content and avoid the inefficiency and potential errors of a two-pass approach.

### 4.2 Preventing Common Structural Problems

#### 4.2.1 Avoiding Unnecessary Div Nesting

**Strictly follow the exact HTML structure provided in the templates (Section 3.3).** Avoid adding extra container divs beyond those specified.

1.  **Follow the Exact HTML Structure**
    *   Use the provided templates without adding extra container divs
    *   Maintain the specific nesting levels defined in the question structure template (`.question > .question-content`, `.question > .answer-section > .answer-content > .answer-detail`).

2.  **Standard Question Structure - DO NOT ADD ADDITIONAL DIVS inside `.answer-detail` for content parts.**
    ```html
    <!-- DO THIS: Clean structure -->
    <div class="question" id="question-1">
      <h3>Question 1 (15 marks)</h3>
      <div class="question-content">
        <p>(a) Question text...</p>
        <p class="indented-1">(i) Subpart text...</p>
         <!-- ... other question parts -->
      </div>
      <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
          <div class="answer-detail">
            <!-- Answer content directly here -->
            <p class="answer-intro">Introduction...</p>

            <p><strong>(a)</strong> Detailed answer to part a...</p>
            <ul>
                <li>Point 1</li>
            </ul>

             <p><strong>(b)</strong> Detailed answer to part b...</p>
             <figure class="answer-figure">
                  <pre>Diagram (ASCII)</pre>
                  <figcaption>Diagram caption</figcaption>
             </figure>

             <p class="key-point">Note about assumption or ambiguity...</p>

            <p class="answer-conclusion">Conclusion...</p>

            <!-- DO NOT ADD <div class="answer-part"> or other divs here -->
          </div>
        </div>
      </div>
    </div>
    ```

3.  **AVOID Unnecessary Nesting**
    ```html
    <!-- DON'T DO THIS: Excessive nesting -->
    <div class="question" id="question-1">
      <div> <!-- Unnecessary div -->
        <h3>Question 1 (15 marks)</h3>
        <div class="question-content">
          <div> <!-- Unnecessary div -->
            <p>Question text...</p>
          </div>
        </div>
      </div>
       <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
          <div class="answer-detail">
             <div class="answer-part"> <!-- AVOID THIS EXTRA DIV -->
                 <p><strong>(a)</strong> Answer content...</p>
             </div>
          </div>
        </div>
       </div>
    </div>
    ```

4.  **Use Semantic Elements and Styling Classes for Content Structure**
    *   Use `<p>` for paragraphs
    *   Use `<ul>` and `<li>` for lists
    *   Use `<figure>` and `<figcaption>` for images (question images) or answer diagrams (ASCII).
    *   Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` for tables.
    *   Use `<pre>` and `<code>` for code blocks or ASCII diagrams.
    *   Use classes like `.answer-intro`, `.key-point`, `.step-by-step`, `.formula-explanation`, `.answer-conclusion` as defined in the CSS to structure content *within* `.answer-detail`.

5.  **Verify Structure After Each Question**
    *   Check for balanced closing tags
    *   Confirm nesting levels match the template
    *   Remove any redundant container elements

#### 4.2.2 Preventing Answer Mix-ups

To ensure answers correctly match their questions:

1.  **Consistent ID Matching System**
    *   Each question must have an ID: `id="question-X"`
    *   Each answer must have a matching ID: `id="answer-X"`
    *   X must be the same number in both IDs

2.  **Strict Containment Rule**
    *   Answer for Question X must ALWAYS be inside Question X's `div` element (`<div class="question" id="question-X">`).
    *   Never place answers in separate sections
    *   The structure is always `.question > .answer-section > .answer-content > .answer-detail`.

3.  **Question-Answer Verification Checklist**
    *   Double-check that answer content actually addresses the question
    *   Verify that each sub-part (a, b, c, i, ii, etc.) has a matching answer component or addresses the point.
    *   Ensure answer IDs match their corresponding question IDs
    *   Validate that all question parts are fully answered

4.  **Use Clear Answer Section Headers**
    *   Begin each answer section with `<h4>Answer</h4>`.
    *   For multi-part questions, use consistent labeling for each part within the answer content (e.g., `<p><strong>(a)</strong> Detailed answer to part a...</p>`).

5.  **Handling Ambiguous or Conflicting Data:**
    *   Some OCR output may contain inconsistent numbers, conflicting values, or fragmented text that makes a question difficult to answer definitively.
    *   In such cases, make the *most reasonable assumption* based on the context and standard principles of the subject matter.
    *   Clearly **document your assumption** within the answer content using a `.key-point` styled `div` or similar explicit text.
    *   Perform calculations based on your assumption and state the result. Note that the result relies on this assumption.

#### 4.2.3 Handling Potential File Operation Errors

(This section remains relevant if using scripts for processing/updating files. Keep the instructions on whole-file processing, backups, and safe writes).

When editing HTML files or adding answers, file operation errors can occur. Here's how to prevent them:

1.  **Always Process Entire Files, Not Line Ranges**
    *   When updating a file, read the entire file first, modify it in memory (e.g., using a DOM parser like Cheerio in Node.js), then write the entire modified content back to the file.
    *   Never rely on specific line numbers for insertion points, as they change when content is modified.

2.  **Use Pattern Matching Instead of Line Counting**
    *   Locate insertion points using reliable markers like HTML comment tags (`<!-- BEGIN QUESTION X -->`, `<!-- END QUESTION X -->`).

3.  **Process Each Question as a Complete Block**
    *   Always include clear beginning and ending markers for each question (`<!-- BEGIN QUESTION X -->` and `<!-- END QUESTION X -->`). Treat each question's HTML block as a self-contained unit.

4.  **Replace Entire Question Blocks**
    *   When updating a question or adding an answer, modify the entire block from its beginning to end marker in memory, then replace the old block in the file content string.

5.  **Use Backups and Safe Writes**
    *   Create a backup copy of the original file before writing any changes.
    *   Consider writing changes to a temporary file first, verifying it, and then atomically replacing the original file (e.g., using `fs.renameSync` in Node.js).

6.  **Verify File Integrity After Writing**
    *   Read the file back after writing to ensure it's not corrupted and contains the expected changes.

### 4.3 Complete CSS Styles

(This section contains the full CSS code and remains unchanged).

```css
/* Base styles */
:root {
    --primary-color: #1a73e8;
    --secondary-color: #4285f4;
    --accent-color: #e74c3c;
    --text-color: #202124;
    --light-bg: #f8f9fa;
    --border-color: #dadce0;
    --sidebar-width: 250px;
    --header-bg: #1a73e8;
    --header-text: #ffffff;
    --background-color: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

/* Container */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header */
header {
    background-color: var(--header-bg);
    color: var(--header-text);
    padding: 2rem 0;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

header h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
}

.exam-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}

.exam-details p {
    padding: 5px 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

/* Main content layout */
.main-content {
    display: flex;
    gap: 2rem;
    margin: 2rem auto;
}

/* Sidebar */
.sidebar {
    width: var(--sidebar-width);
    flex-shrink: 0;
    background: var(--light-bg);
    border-radius: 10px;
    padding: 1.2rem;
    position: sticky;
    top: 1rem;
    height: calc(100vh - 2rem);
    overflow-y: auto;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.sidebar-header {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
}

.sidebar-nav ul,
.question-content ol,
.question-content ul,
.answer-detail ol,
.answer-detail ul {
    list-style: disc;
    padding-left: 2rem;
}

.question-content ol,
.answer-detail ol {
    list-style: decimal;
}

.sidebar-nav a {
    display: block;
    padding: 0.6rem;
    color: var(--text-color);
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
    background-color: var(--secondary-color);
    color: white;
}

/* Main content area */
main {
    flex-grow: 1;
    max-width: calc(100% - var(--sidebar-width) - 2rem);
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

/* Question styling */
.question {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    margin-bottom: 2rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.question h3 {
    color: white;
    background-color: var(--primary-color);
    padding: 10px 15px;
    border-radius: 4px;
    margin-bottom: 20px;
}

.question-content {
    margin-bottom: 1.5rem;
}

.answer-section {
    background: var(--light-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.2rem;
    margin-top: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    border-left: 4px solid var(--accent-color);
}

.answer-section h4 {
    color: var(--accent-color);
    margin-bottom: 1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
}

.answer-detail {
    font-size: 0.95rem;
    /* Add padding/margins directly to children within answer-detail */
}

.answer-detail p {
    margin-bottom: 15px;
}

.answer-detail strong {
    color: var(--primary-color);
}

/* Adjust margins for lists within answer-detail if needed */
.answer-detail ul, .answer-detail ol {
    margin-left: 20px; /* Maintain indentation */
    margin-bottom: 15px;
}

.answer-detail li {
    margin-bottom: 5px;
}

/* Math Formulas */
.answer-detail .MathJax {
    margin: 10px 0;
}

/* Code blocks / ASCII Diagrams */
pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    font-family: 'Consolas', 'Monaco', monospace;
    margin: 1rem 0;
    white-space: pre-wrap; /* Wrap long lines */
    word-break: break-all; /* Break words to prevent overflow */
}

code {
    font-family: 'Consolas', 'Monaco', monospace;
}

/* Tables */
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

.data-table th,
.data-table td {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
}

.data-table th {
    background: var(--light-bg);
    font-weight: 600;
}

/* Navigation buttons */
.paper-navigation {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
}

.paper-navigation.bottom {
    margin-top: 30px;
    margin-bottom: 0;
    padding-top: 15px;
    padding-bottom: 0;
    border-top: 1px solid var(--border-color);
    border-bottom: none;
}

.btn {
    display: inline-block;
    padding: 8px 16px;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background: var(--secondary-color);
}

/* Paper intro */
.paper-intro {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f8f9fa;
    border-left: 4px solid var(--secondary-color);
    border-radius: 0 4px 4px 0;
}

.paper-intro h3 {
    margin-bottom: 15px;
    color: var(--primary-color);
}

.paper-intro ul {
    margin-left: 20px;
}

.paper-intro li {
    margin-bottom: 5px;
}

/* Paper content */
.paper-content {
    margin-bottom: 2rem;
}

/* Figure styling (for images from OCR) */
.question-figure {
    margin: 1.5rem 0;
    text-align: center;
}

.question-figure img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 5px;
    background-color: white;
}

/* Figure styling for diagrams *within* answers (e.g., ASCII art) */
.answer-figure {
    margin: 1.5rem 0;
    text-align: center;
    border: 1px solid var(--border-color);
    padding: 10px;
    background-color: #f0f0f0; /* Light grey background for clarity */
    border-radius: 4px;
}

.answer-figure pre {
     margin: 0; /* Remove margin from pre inside figure */
     padding: 0.5rem; /* Adjust padding */
     background: none; /* Remove dark background */
     color: inherit; /* Inherit text color */
     text-align: left; /* Align diagram text left */
     white-space: pre; /* Preserve whitespace strictly */
     overflow-x: auto; /* Allow horizontal scrolling for wide diagrams */
     word-break: normal; /* Prevent breaking diagram lines */
}

.answer-figure figcaption {
    margin-top: 0.5rem;
    font-style: italic;
    color: #666;
}


/* Footer */
footer {
    background-color: var(--header-bg);
    color: var(--header-text);
    padding: 20px 0;
    text-align: center;
    margin-top: 4rem;
    font-size: 0.9rem;
}

/* Index page styles */
.paper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.paper-card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.paper-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.paper-card h3 {
    background-color: var(--primary-color);
    color: white;
    padding: 15px;
    font-size: 1.2rem;
}

.paper-card .meta {
    padding: 15px;
    color: #666;
    border-bottom: 1px solid var(--border-color);
}

.paper-card .actions {
    padding: 15px;
    display: flex;
    gap: 1rem;
}

.year-section {
    margin-bottom: 3rem;
}

.year-section h2 {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--border-color);
}

/* Diagram styling */
/* Use .question-figure for images from OCR (in question content) */
/* Use .answer-figure for diagrams *within* answers (e.g., ASCII art in pre) */


/* Search and Filter Components */
.search-container {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: var(--light-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.search-box {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
}

.search-box input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
}

.search-box button {
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.filter-options {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    gap: 15px;
}

.filter-options select {
    padding: 8px 12px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: white;
    min-width: 150px;
}

/* Stats Container */
.stats-container {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 1.5rem;
}

.stat-card {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--light-bg);
    border-radius: 8px;
}

.stat-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    color: #666;
}

/* Quick Links Section */
.quick-links {
    margin: 2rem 0;
}

.nav-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 1rem;
}

.btn-primary {
    background-color: var(--primary-color);
}

.btn-secondary {
    background-color: var(--secondary-color);
}

.btn-accent {
    background-color: var(--accent-color);
}

.btn-outline {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: white;
}

/* Dark Mode Styles */
:root.dark-mode {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
  --text-color: #f0f0f0;
  --background-color: #121212;
  --sidebar-bg: #1e1e1e;
  --header-bg: #0f0f0f;
  --header-text: #ffffff;
  --border-color: #333;
  --light-bg: #1e1e1e;
}

.dark-mode body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode main,
.dark-mode .paper-card {
  background-color: #1a1a1a;
}

.dark-mode .paper-intro,
.dark-mode .answer-section {
  background-color: #1e1e1e;
}

.dark-mode .sidebar-nav a:hover {
  background-color: rgba(46, 204, 113, 0.1);
}

.dark-mode .question-figure img {
  background-color: #2a2a2a;
  border-color: #333;
}

.dark-mode .answer-figure {
    background-color: #2a2a2a;
    border-color: #333;
}

.dark-mode .answer-figure pre {
     color: #f0f0f0; /* Ensure text is visible in dark mode */
}


.dark-mode .copy-confirmation {
  background-color: var(--secondary-color);
  color: #121212;
}

/* Dark Mode Toggle Styles */
.dark-mode-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 20px;
}

.dark-mode-toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.dark-mode-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.dark-mode-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.dark-mode-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .dark-mode-slider {
  background-color: var(--secondary-color);
}

input:checked + .dark-mode-slider:before {
  transform: translateX(20px);
}

.dark-mode-label {
  margin-left: 10px;
  color: white;
  font-size: 0.8rem;
}

/* Print Styles */
@media print {
  .sidebar,
  .paper-navigation,
  .dark-mode-container,
  #back-to-top,
  #print-page,
   .mobile-nav-toggle,
    .sidebar-backdrop {
    display: none !important;
  }

  /* Answers are always shown in print version */

  main {
    flex: 1;
    width: 100%;
    max-width: 100%; /* Allow main to take full width */
    box-shadow: none;
    padding: 0; /* Remove padding for printing */
  }

  .container {
    padding: 0; /* Remove container padding */
  }


  .question {
    page-break-inside: avoid; /* Avoid breaking questions across pages */
    border: 1px solid #ccc; /* Add borders for clarity */
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: none;
  }

  .question h3 {
      background-color: #eee !important; /* Use lighter background */
      color: #000 !important;
      print-color-adjust: exact; /* Ensure colors print */
      -webkit-print-color-adjust: exact;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
  }

   .answer-section {
       background-color: #f9f9f9 !important; /* Lighter background for answer */
       border: 1px solid #ccc;
       border-left: 4px solid #bbb; /* Less prominent accent color */
       print-color-adjust: exact;
       -webkit-print-color-adjust: exact;
       margin-top: 1rem;
       padding: 1rem;
   }

  .answer-section h4 {
      color: #555 !important;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 10px;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
  }

   .answer-detail p,
   .answer-detail li {
       font-size: 10pt; /* Smaller font for print */
       margin-bottom: 8px;
   }

   .answer-detail ul,
   .answer-detail ol {
       margin-left: 15px; /* Adjust list indentation */
       margin-bottom: 8px;
   }

   .question-figure img {
       max-width: 80%; /* Reduce image size for print */
       page-break-inside: avoid;
   }

    .answer-figure {
       background-color: #f0f0f0 !important; /* Ensure light background for print */
       border-color: #ccc;
       print-color-adjust: exact;
       -webkit-print-color-adjust: exact;
    }

   .answer-figure pre {
       color: #000 !important; /* Ensure text is black for print */
       print-color-adjust: exact;
       -webkit-print-color-adjust: exact;
   }

   /* Hide dark mode toggle when printing */
    .dark-mode-container {
        display: none !important;
    }

    /* Ensure main content uses flex basis 100% in print if it was column layout */
    .main-content {
        flex-direction: column !important;
    }
    main {
        max-width: 100% !important;
    }
    .sidebar {
        display: none !important;
    }


}

/* Responsive Styles */
@media (max-width: 992px) {
  .main-content {
    flex-direction: column;
  }

  .sidebar {
    flex: 0 0 100%;
    margin-bottom: 20px;
    position: static; /* Remove sticky positioning on wider mobile views */
    height: auto; /* Allow sidebar to expand */
    overflow-y: visible; /* Allow normal scrolling */
    box-shadow: none; /* Remove box shadow */
    /* Revert mobile specific fixed positioning if applied below this breakpoint */
    left: auto;
    width: auto;
  }
   /* Hide sidebar content on wider mobile views when not active */
  .sidebar-nav, .sidebar-header, .dark-mode-container {
     display: block; /* Ensure content is block layout */
     width: auto;
  }


  .exam-details {
    flex-direction: column;
    gap: 10px;
  }

  .paper-navigation {
    flex-wrap: wrap;
    gap: 10px;
  }

  .btn {
    flex: 1;
    text-align: center;
  }

  .paper-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
   /* Ensure main content takes full width */
  main {
       max-width: 100%;
   }
}

/* Mobile Optimization */
@media (max-width: 768px) {
  header h1 {
    font-size: 1.8rem;
  }

  header h2 {
    font-size: 1.2rem;
  }

  .container {
    padding: 0 10px;
  }

  main {
    padding: 15px;
  }

  .sidebar {
    padding: 15px;
    /* Mobile specific fixed positioning */
    position: fixed;
    top: 0;
    left: -280px; /* Hidden by default */
    height: 100vh;
    width: 250px; /* Fixed width */
    z-index: 999;
    transition: left 0.3s ease;
    overflow-y: auto; /* Scrollable */
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
  }

  .sidebar.active {
    left: 0; /* Visible when active */
  }

  .sidebar-backdrop {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5); /* Semi-transparent overlay */
    z-index: 998;
  }

  .sidebar-backdrop.active {
    display: block; /* Visible when sidebar is active */
  }

  /* Hide regular sidebar content when mobile toggle is active */
   .sidebar-nav, .sidebar-header, .dark-mode-container {
       /* display: none; */ /* Initially hidden, shown when sidebar active via JS */
   }


  .question h3 {
    font-size: 1.1rem;
    padding: 8px 12px;
  }

  .paper-navigation .btn {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .paper-grid {
    grid-template-columns: 1fr;
  }

  .answer-section {
    padding: 15px;
  }

  .answer-detail {
    font-size: 0.9rem;
  }

  /* Improve tap targets */
  .sidebar-nav a {
    padding: 12px 10px;
  }

  .btn, button {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mobile navigation toggle */
  .mobile-nav-toggle {
    display: block; /* Shown only on mobile */
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1000;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  /* Improve readability for math on small screens */
  .question-content .math-display {
    overflow-x: auto;
    padding: 5px 0;
  }

  /* Touch-friendly figure zoom */
  .question-figure img {
    transition: transform 0.3s ease;
    cursor: zoom-in;
  }

  .question-figure img.zoomed {
    transform: scale(1.5);
    transform-origin: center center;
    cursor: zoom-out;
  }

  /* Ensure sidebar content is visible when sidebar is active on mobile */
  .sidebar.active .sidebar-nav,
  .sidebar.active .sidebar-header,
  .sidebar.active .dark-mode-container {
      display: block; /* Show content */
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  header h1 {
    font-size: 1.5rem;
  }

  header h2 {
    font-size: 1rem;
  }

  .btn {
    font-size: 0.85rem;
    padding: 6px 10px;
  }

  main {
    padding: 12px;
  }

  .paper-intro {
    padding: 15px;
  }

  .paper-intro h3 {
    font-size: 1.1rem;
  }

  .answer-section h4 {
    font-size: 1rem;
  }

  .search-container {
    padding: 1rem;
  }

  .search-box {
    flex-direction: column;
  }

  .filter-options {
    flex-direction: column;
    gap: 10px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav-buttons {
    flex-direction: column;
  }
}

/* Back to Top Button */
#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: none;
  z-index: 99;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

#back-to-top:hover {
  background-color: var(--secondary-color);
}

/* Copy confirmation for equations */
.copy-confirmation {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
}

/* Highlight effect for question navigation */
.question.highlight {
  animation: highlight-pulse 2s ease-out;
}

@keyframes highlight-pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
}

/* Answer styling enhancements */
.answer-intro {
  font-style: italic;
  border-left: 3px solid var(--secondary-color);
  padding-left: 10px;
  margin-bottom: 20px;
  background-color: rgba(52, 152, 219, 0.05);
  padding: 10px;
  border-radius: 4px;
}

/* answer-part div removed, apply styling directly to children */


.answer-conclusion {
  margin-top: 20px;
  font-weight: 500;
  border-top: 1px solid var(--border-color);
  padding-top: 15px;
}

.key-point {
  background-color: rgba(46, 204, 113, 0.1);
  border-left: 3px solid #2ecc71;
  padding: 10px;
  margin: 15px 0;
  border-radius: 4px;
}

.step-by-step {
  counter-reset: step-counter;
  margin: 20px 0;
}

.step {
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
}

.step:before {
  content: counter(step-counter);
  counter-increment: step-counter;
  position: absolute;
  left: 0;
  top: 0; /* Align with the top of the step content */
  background: var(--primary-color);
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  font-weight: bold;
}
/* Adjust spacing for content following the step number */
.step p, .step ul, .step ol {
    margin-top: 0;
    margin-bottom: 0;
}
.step p:first-child, .step ul:first-child, .step ol:first-child {
    margin-top: 0;
}


.formula-explanation {
  display: flex;
  margin: 15px 0;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.formula {
  flex: 0 0 40%;
  background: rgba(52, 152, 219, 0.05);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.explanation {
  flex: 0 0 60%;
  padding: 15px;
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.mt-3 {
  margin-top: 15px;
}

.mb-3 {
  margin-bottom: 15px;
}

/* Indentation for nested question parts */
.indented-1 {
  margin-left: 20px;
}

.indented-2 {
  margin-left: 40px;
}
```

## 4. Conversion Process Requirements

### 4.1 Simultaneous Question and Answer Creation

IMPORTANT: When converting questions from MMD to HTML, always create comprehensive answers simultaneously. Do not process all questions first and add answers later.

1.  **Single-Step Approach Required**
    *   Process each question and immediately create its answer
    *   Never leave the answer section empty or with placeholder text
    *   Complete one question fully (with answer) before moving to the next

2.  **Process Flow for Each Question:**
    ```
    1. Extract question content from MMD
    2. Format question structure in HTML
    3. Handle any images referenced in the question (use Mathpix URL directly in <img>)
    4. Research and develop comprehensive answer
    5. Format answer content using **semantic HTML elements** (p, ul, ol, table, pre) and **specific styling classes** (answer-intro, key-point, step-by-step, formula-explanation, answer-conclusion).
    6. Handle any diagrams needed *within* the answer using **ASCII art or text descriptions** within <pre> or <p> tags, captioned with <figcaption> within a <figure class="answer-figure">.
    7. Verify both question and answer for completeness and correct formatting.
    8. Only then move to the next question
    ```

3.  **Benefits of Simultaneous Creation:**
    *   Ensures all questions have matching answers
    *   Maintains context and understanding while the question is fresh
    *   Prevents mismatch between question content and answers
    *   Avoids disruptions in formatting and style consistency

4.  **Verification During Creation:**
    *   Check math notation in both question and answer
    *   Ensure image references (Mathpix URLs) are correct and `alt` text is descriptive.
    *   Verify that answer addresses all parts of the question
    *   Confirm correct mark allocation across question parts
    *   Handle any ambiguous or conflicting information found in the OCR (e.g., inconsistent numbers, fragmented text) by making reasonable assumptions and noting them clearly within the answer using a `.key-point` styled div.

By creating answers simultaneously with questions, you ensure complete, well-matched content and avoid the inefficiency and potential errors of a two-pass approach.

### 4.2 Preventing Common Structural Problems

#### 4.2.1 Avoiding Unnecessary Div Nesting

**Strictly follow the exact HTML structure provided in the templates (Section 3.3).** Avoid adding extra container divs beyond those specified.

1.  **Follow the Exact HTML Structure**
    *   Use the provided templates without adding extra container divs
    *   Maintain the specific nesting levels defined in the question structure template (`.question > .question-content`, `.question > .answer-section > .answer-content > .answer-detail`).

2.  **Standard Question Structure - DO NOT ADD ADDITIONAL DIVS inside `.answer-detail` for content parts.**
    ```html
    <!-- DO THIS: Clean structure -->
    <div class="question" id="question-1">
      <h3>Question 1 (15 marks)</h3>
      <div class="question-content">
        <p>(a) Question text...</p>
        <p class="indented-1">(i) Subpart text...</p>
         <!-- ... other question parts -->
      </div>
      <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
          <div class="answer-detail">
            <!-- Answer content directly here -->
            <p class="answer-intro">Introduction...</p>

            <p><strong>(a)</strong> Detailed answer to part a...</p>
            <ul>
                <li>Point 1</li>
            </ul>

             <p><strong>(b)</strong> Detailed answer to part b...</p>
             <figure class="answer-figure">
                  <pre>Diagram (ASCII)</pre>
                  <figcaption>Diagram caption</figcaption>
             </figure>

             <p class="key-point">Note about assumption or ambiguity...</p>

            <p class="answer-conclusion">Conclusion...</p>

            <!-- DO NOT ADD <div class="answer-part"> or other divs here -->
          </div>
        </div>
      </div>
    </div>
    ```

3.  **AVOID Unnecessary Nesting**
    ```html
    <!-- DON'T DO THIS: Excessive nesting -->
    <div class="question" id="question-1">
      <div> <!-- Unnecessary div -->
        <h3>Question 1 (15 marks)</h3>
        <div class="question-content">
          <div> <!-- Unnecessary div -->
            <p>Question text...</p>
          </div>
        </div>
      </div>
       <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
          <div class="answer-detail">
             <div class="answer-part"> <!-- AVOID THIS EXTRA DIV -->
                 <p><strong>(a)</strong> Answer content...</p>
             </div>
          </div>
        </div>
       </div>
    </div>
    ```

4.  **Use Semantic Elements and Styling Classes for Content Structure**
    *   Use `<p>` for paragraphs
    *   Use `<ul>` and `<li>` for lists
    *   Use `<figure>` and `<figcaption>` for images (question images) or answer diagrams (ASCII).
    *   Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` for tables.
    *   Use `<pre>` and `<code>` for code blocks or ASCII diagrams.
    *   Use classes like `.answer-intro`, `.key-point`, `.step-by-step`, `.formula-explanation`, `.answer-conclusion` as defined in the CSS to structure content *within* `.answer-detail`.

5.  **Verify Structure After Each Question**
    *   Check for balanced closing tags
    *   Confirm nesting levels match the template
    *   Remove any redundant container elements

#### 4.2.2 Preventing Answer Mix-ups

To ensure answers correctly match their questions:

1.  **Consistent ID Matching System**
    *   Each question must have an ID: `id="question-X"`
    *   Each answer must have a matching ID: `id="answer-X"`
    *   X must be the same number in both IDs

2.  **Strict Containment Rule**
    *   Answer for Question X must ALWAYS be inside Question X's `div` element (`<div class="question" id="question-X">`).
    *   Never place answers in separate sections
    *   The structure is always `.question > .answer-section > .answer-content > .answer-detail`.

3.  **Question-Answer Verification Checklist**
    *   Double-check that answer content actually addresses the question
    *   Verify that each sub-part (a, b, c, i, ii, etc.) has a matching answer component or addresses the point.
    *   Ensure answer IDs match their corresponding question IDs
    *   Validate that all question parts are fully answered

4.  **Use Clear Answer Section Headers**
    *   Begin each answer section with `<h4>Answer</h4>`.
    *   For multi-part questions, use consistent labeling for each part within the answer content (e.g., `<p><strong>(a)</strong> Detailed answer to part a...</p>`).

5.  **Handling Ambiguous or Conflicting Data:**
    *   Some OCR output may contain inconsistent numbers, conflicting values, or fragmented text that makes a question difficult to answer definitively.
    *   In such cases, make the *most reasonable assumption* based on the context and standard principles of the subject matter.
    *   Clearly **document your assumption** within the answer content using a `.key-point` styled `div` or similar explicit text.
    *   Perform calculations based on your assumption and state the result. Note that the result relies on this assumption.

#### 4.2.3 Handling Potential File Operation Errors

(This section remains relevant if using scripts for processing/updating files. Keep the instructions on whole-file processing, backups, and safe writes).

When editing HTML files or adding answers, file operation errors can occur. Here's how to prevent them:

1.  **Always Process Entire Files, Not Line Ranges**
    *   When updating a file, read the entire file first, modify it in memory (e.g., using a DOM parser like Cheerio in Node.js), then write the entire modified content back to the file.
    *   Never rely on specific line numbers for insertion points, as they change when content is modified.

2.  **Use Pattern Matching Instead of Line Counting**
    *   Locate insertion points using reliable markers like HTML comment tags (`<!-- BEGIN QUESTION X -->`, `<!-- END QUESTION X -->`).

3.  **Process Each Question as a Complete Block**
    *   Always include clear beginning and ending markers for each question (`<!-- BEGIN QUESTION X -->` and `<!-- END QUESTION X -->`). Treat each question's HTML block as a self-contained unit.

4.  **Replace Entire Question Blocks**
    *   When updating a question or adding an answer, modify the entire block from its beginning to end marker in memory, then replace the old block in the file content string.

5.  **Use Backups and Safe Writes**
    *   Create a backup copy of the original file before writing any changes.
    *   Consider writing changes to a temporary file first, verifying it, and then atomically replacing the original file (e.g., using `fs.renameSync` in Node.js).

6.  **Verify File Integrity After Writing**
    *   Read the file back after writing to ensure it's not corrupted and contains the expected changes.

