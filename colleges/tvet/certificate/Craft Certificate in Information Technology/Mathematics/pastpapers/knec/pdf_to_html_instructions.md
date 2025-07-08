# KNEC Past Papers: PDF to HTML Conversion Guide

## Project Goals
Convert PDF past papers into structured HTML files with proper styling, mathematical equations, and images.

## 1. Project Structure

Create this folder structure:
```
pastpapers/
├── js/                        # JavaScript files
├── components/                # Reusable HTML components  
├── images/                    # Downloaded images
├── styles.css                 # CSS styles
├── index.html                 # Main landing page
├── [paper-name].html          # Individual paper pages (e.g., 2023j.html)
└── [paper-name]_ocr.mmd       # OCR output files
```

## 2. OCR Process

Convert PDFs to Markdown Math (MMD) format using Mathpix OCR:
```bash
# Create tracking file
touch processed.txt

# Run OCR on each PDF
node /home/ngobiro/projects/mathpix-ocr-server/build/index.js "/full/path/to/2022n.pdf" > "2022n_ocr.mmd"

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
</body>
</html>
```

### 3.3 Question Structure Template

For each question, use this structure with clear comment markers:

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
            <img src="images/2022n_q1-fig1.png" alt="Figure for Question 1">
            <figcaption>Figure 1: Description</figcaption>
        </figure>
        <!-- END FIGURE 1 -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-1">
            <div class="answer-detail">
                <p><strong>(a)</strong> Detailed answer to part a...</p>
                <p><strong>(b)</strong> Detailed answer to part b...</p>
                <p><strong>(c)</strong> Detailed answer to part c...</p>
            </div>
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
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
                
                // Add highlight effect
                targetElement.classList.add('highlight');
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000);
            }
        });
    });
    
    // Note: Answers are always visible and not toggleable
    // No toggle functionality needed as answers should always be shown
    
    // Add back to top button functionality
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
                
                document.body.appendChild(confirmation);
                
                // Remove after 2 seconds
                setTimeout(() => {
                    document.body.removeChild(confirmation);
                }, 2000);
            });
        });
    });
});

// Add dark mode toggle functionality
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference
    if (savedDarkMode) {
        htmlElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }
    
    // Add toggle event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                htmlElement.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
}

// Initialize dark mode functionality
document.addEventListener('DOMContentLoaded', setupDarkMode);

// Add print functionality
function setupPrintButton() {
    const printButton = document.getElementById('print-page');
    
    if (printButton) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Always print with answers (no toggle option)
            // Trigger print dialog directly
            window.print();
        });
    }
}

// Initialize print functionality
document.addEventListener('DOMContentLoaded', setupPrintButton);

// Add mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile navigation toggle and backdrop
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '☰';
    mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
    document.body.appendChild(mobileNavToggle);
    
    const sidebarBackdrop = document.createElement('div');
    sidebarBackdrop.className = 'sidebar-backdrop';
    document.body.appendChild(sidebarBackdrop);
    
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle sidebar on button click
    mobileNavToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarBackdrop.classList.toggle('active');
        
        // Toggle aria-expanded state
        const isExpanded = sidebar.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        
        // Change button text
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
            if (window.innerWidth <= 768) {
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
            if (window.innerWidth <= 768) {
                this.classList.toggle('zoomed');
            }
        });
    });
    
    // Add swipe gestures for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        // Right to left swipe (close sidebar)
        if (touchStartX - touchEndX > 75 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Left to right swipe (open sidebar)
        if (touchEndX - touchStartX > 75 && touchStartX < 50 && !sidebar.classList.contains('active')) {
            sidebar.classList.add('active');
            sidebarBackdrop.classList.add('active');
            mobileNavToggle.innerHTML = '✕';
            mobileNavToggle.setAttribute('aria-expanded', 'true');
        }
    }
    
    // Handle device orientation changes
    window.addEventListener('orientationchange', function() {
        // Adjust math display when orientation changes
        setTimeout(() => {
            if (typeof MathJax !== 'undefined') {
                MathJax.typeset();
            }
        }, 500);
    });
});
```

## 4. Conversion Process Requirements

### 4.1 Simultaneous Question and Answer Creation

IMPORTANT: When converting questions from MMD to HTML, always create comprehensive answers simultaneously. Do not process all questions first and add answers later.

1. **Single-Step Approach Required**
   - Process each question and immediately create its answer
   - Never leave the answer section empty or with placeholder text
   - Complete one question fully (with answer) before moving to the next

2. **Process Flow for Each Question:**
   ```
   1. Extract question content from MMD
   2. Format question structure in HTML
   3. Download any required images
   4. Research and develop comprehensive answer
   5. Format answer using enhanced styling guidelines
   6. Verify both question and answer for completeness
   7. Only then move to the next question
   ```

3. **Benefits of Simultaneous Creation:**
   - Ensures all questions have matching answers
   - Maintains context and understanding while the question is fresh
   - Prevents mismatch between question content and answers
   - Avoids disruptions in formatting and style consistency

4. **Verification During Creation:**
   - Check math notation in both question and answer
   - Ensure image references are consistent 
   - Verify that answer addresses all parts of the question
   - Confirm correct mark allocation across question parts

By creating answers simultaneously with questions, you ensure complete, well-matched content and avoid the inefficiency and potential errors of a two-pass approach.

### 4.2 Preventing Common Structural Problems

#### 4.2.1 Avoiding Nested Div Issues

Excessive div nesting creates hard-to-maintain code and rendering problems. Follow these guidelines to prevent div nesting issues:

1. **Follow the Exact HTML Structure**
   - Use the provided templates without adding extra container divs
   - Maintain the specific nesting levels defined in the question structure template

2. **Standard Question Structure - No Additional Divs**
   ```html
   <!-- DO THIS: Clean structure -->
   <div class="question" id="question-1">
     <h3>Question 1 (15 marks)</h3>
     <div class="question-content">
       <p>Question text...</p>
     </div>
     <div class="answer-section">
       <h4>Answer</h4>
       <div class="answer-content" id="answer-1">
         <div class="answer-detail">
           <p>Answer text...</p>
         </div>
       </div>
     </div>
   </div>
   ```

3. **AVOID Unnecessary Nesting**
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
   </div>
   ```

4. **Use Semantic Elements Instead of Extra Divs**
   - Use `<p>` for paragraphs
   - Use `<ul>` and `<li>` for lists
   - Use `<figure>` and `<figcaption>` for images
   - Use `<section>` for logical content sections

5. **Verify Structure After Each Question**
   - Check for balanced closing tags
   - Confirm nesting levels match the template
   - Remove any redundant container elements

#### 4.2.2 Preventing Answer Mix-ups

To ensure answers correctly match their questions:

1. **Consistent ID Matching System**
   - Each question must have an ID: `id="question-X"`
   - Each answer must have a matching ID: `id="answer-X"`
   - X must be the same number in both IDs

2. **Strict Containment Rule**
   - Answer for Question X must ALWAYS be inside Question X's div
   - Never place answers in separate sections
   
   ```html
   <!-- CORRECT: Answer contained within its question div -->
   <div class="question" id="question-1">
     <!-- Question content -->
     <div class="answer-section">
       <h4>Answer</h4>
       <div class="answer-content" id="answer-1">
         <!-- Answer for Question 1 only -->
       </div>
     </div>
   </div>
   ```

3. **Question-Answer Verification Checklist**
   - Double-check that answer content actually addresses the question
   - Verify that each sub-part (a, b, c) has a matching answer component
   - Ensure answer IDs match their corresponding question IDs
   - Validate that all question parts are fully answered

4. **Use Clear Answer Section Headers**
   - Begin each answer with a clearly labeled heading: `<h4>Answer</h4>`
   - For multi-part questions, use consistent labeling for each part
   - Example: `<p><strong>(a)</strong> Answer to part a...</p>`

5. **Review After Completion**
   - After adding all questions and answers, do a final review
   - Check each question-answer pair individually
   - Verify correct content alignment between questions and answers

By following these structural guidelines, you'll avoid common issues with nested divs and prevent answer mix-ups, ensuring a clean, maintainable HTML structure with correctly matched question-answer pairs.

### 4.3 Complete CSS Styles

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
.question-content ul {
    list-style: disc;
    padding-left: 2rem;
}

.question-content ol {
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
}

.answer-detail p {
    margin-bottom: 15px;
}

.answer-detail strong {
    color: var(--primary-color);
}

.answer-detail ul, .answer-detail ol {
    margin-left: 20px;
    margin-bottom: 15px;
}

.answer-detail li {
    margin-bottom: 5px;
}

/* Math Formulas */
.answer-detail .MathJax {
    margin: 10px 0;
}

/* Code blocks */
pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    font-family: 'Consolas', 'Monaco', monospace;
    margin: 1rem 0;
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

/* Figure styling */
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

.question-figure figcaption {
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
.diagram {
    margin: 1.5rem 0;
}

.diagram-code {
    font-family: monospace;
    white-space: pre;
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.diagram-caption {
    margin-top: 0.5rem;
    font-style: italic;
    text-align: center;
    color: #666;
}

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
  #print-page {
    display: none !important;
  }
  
  /* Answers are always shown in print version */
  
  main {
    flex: 1;
    width: 100%;
    box-shadow: none;
  }
  
  .question {
    page-break-inside: avoid;
  }
  
  .main-content {
    flex-direction: column;
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
  
  /* Mobile navigation improvements */
  .mobile-nav-toggle {
    display: block;
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
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: -280px;
    height: 100vh;
    width: 250px;
    z-index: 999;
    transition: left 0.3s ease;
    overflow-y: auto;
  }
  
  .sidebar.active {
    left: 0;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
  }
  
  .sidebar-backdrop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 998;
  }
  
  .sidebar-backdrop.active {
    display: block;
  }
  
  /* Improved readability for math on small screens */
  .question-content .math-display {
    overflow-x: auto;
    padding: 5px 0;
  }
  
  /* Touch-friendly figure zoom */
  .question-figure img {
    transition: transform 0.3s ease;
  }
  
  .question-figure img.zoomed {
    transform: scale(1.5);
    transform-origin: center center;
    cursor: zoom-out;
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

.answer-part {
  margin-bottom: 25px;
}

.answer-subpart {
  margin-left: 20px;
  margin-bottom: 15px;
}

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
  top: 0;
  background: var(--primary-color);
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  font-weight: bold;
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

## 5. Content Formatting Examples

### 5.1 Mathematical Question Example

#### MMD Content:
```
# Question 2 (15 marks)

(a) Define the term "resonant frequency." (3 marks)

(b) A series RLC circuit has a resistor of $10 \Omega$, an inductor of $5 \mathrm{mH}$, and a capacitor of $4 \mu \mathrm{F}$. Calculate:
   (i) The resonant frequency of the circuit. (4 marks)
   (ii) The quality factor (Q factor) of the circuit. (4 marks)

(c) Explain why the impedance of a series RLC circuit is minimum at resonance. (4 marks)

![](https://cdn.mathpix.com/snip/images/abc123def456.png)
```

#### HTML Output:
```html
<!-- BEGIN QUESTION 2 -->
<div class="question" id="question-2">
    <h3>Question 2 (15 marks)</h3>
    <div class="question-content">
        <p>(a) Define the term "resonant frequency." (3 marks)</p>
        
        <p>(b) A series RLC circuit has a resistor of \(10 \Omega\), an inductor of \(5 \mathrm{mH}\), and a capacitor of \(4 \mu \mathrm{F}\). Calculate:</p>
        <p class="indented-1">(i) The resonant frequency of the circuit. (4 marks)</p>
        <p class="indented-1">(ii) The quality factor (Q factor) of the circuit. (4 marks)</p>
        
        <p>(c) Explain why the impedance of a series RLC circuit is minimum at resonance. (4 marks)</p>
        
        <!-- BEGIN FIGURE 1 -->
        <figure class="question-figure">
            <img src="images/2022n_q2-fig1.png" alt="RLC Circuit Diagram">
            <figcaption>Figure 1: Series RLC Circuit</figcaption>
        </figure>
        <!-- END FIGURE 1 -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-2">
            <div class="answer-detail">
                <p class="answer-intro">This problem involves understanding resonance in RLC circuits and applying the relevant formulas to calculate specific parameters.</p>
                
                <div class="answer-part">
                    <p><strong>(a) Resonant Frequency:</strong> The frequency at which the inductive reactance and capacitive reactance are equal in magnitude but opposite in phase, resulting in a purely resistive impedance in the circuit.</p>
                </div>
                
                <div class="answer-part">
                    <p><strong>(b)(i) Resonant Frequency calculation:</strong></p>
                    
                    <div class="key-point">
                        <p><strong>Given:</strong></p>
                        <ul>
                            <li>Resistance: \(R = 10\, \Omega\)</li>
                            <li>Inductance: \(L = 5\, \mathrm{mH} = 5 \times 10^{-3}\, \mathrm{H}\)</li>
                            <li>Capacitance: \(C = 4\, \mu\mathrm{F} = 4 \times 10^{-6}\, \mathrm{F}\)</li>
                        </ul>
                        <p><strong>Find:</strong> Resonant frequency \(f_0\)</p>
                    </div>
                    
                    <div class="formula-explanation">
                        <div class="formula">
                            <p>\[f_0 = \frac{1}{2\pi\sqrt{LC}}\]</p>
                        </div>
                        <div class="explanation">
                            <p>The resonant frequency formula for an RLC circuit, where:</p>
                            <ul>
                                <li>\(L\) is the inductance in henries</li>
                                <li>\(C\) is the capacitance in farads</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="step-by-step">
                        <div class="step">
                            <p>Substitute the values into the resonant frequency formula:</p>
                            <p>\[f_0 = \frac{1}{2\pi\sqrt{5 \times 10^{-3} \times 4 \times 10^{-6}}}\]</p>
                        </div>
                        <div class="step">
                            <p>Multiply values inside the square root:</p>
                            <p>\[f_0 = \frac{1}{2\pi\sqrt{20 \times 10^{-9}}}\]</p>
                        </div>
                        <div class="step">
                            <p>Calculate the square root:</p>
                            <p>\[f_0 = \frac{1}{2\pi \times 4.47 \times 10^{-5}}\]</p>
                        </div>
                        <div class="step">
                            <p>Calculate the denominator:</p>
                            <p>\[f_0 = \frac{1}{2.81 \times 10^{-4}}\]</p>
                        </div>
                        <div class="step">
                            <p>Calculate the final result:</p>
                            <p>\[f_0 = 3,559.9\, \mathrm{Hz} \approx 3.56\, \mathrm{kHz}\]</p>
                        </div>
                    </div>
                </div>
                
                <div class="answer-part">
                    <p><strong>(b)(ii) Quality Factor calculation:</strong></p>
                    
                    <div class="formula-explanation">
                        <div class="formula">
                            <p>\[Q = \frac{1}{R}\sqrt{\frac{L}{C}}\]</p>
                        </div>
                        <div class="explanation">
                            <p>The quality factor Q is given by this formula, where:</p>
                            <ul>
                                <li>\(R\) is the resistance in ohms</li>
                                <li>\(L\) is the inductance in henries</li>
                                <li>\(C\) is the capacitance in farads</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="step-by-step">
                        <div class="step">
                            <p>Substitute the values:</p>
                            <p>\[Q = \frac{1}{10}\sqrt{\frac{5 \times 10^{-3}}{4 \times 10^{-6}}}\]</p>
                        </div>
                        <div class="step">
                            <p>Simplify inside the square root:</p>
                            <p>\[Q = \frac{1}{10}\sqrt{\frac{5 \times 10^{-3} \times 10^{6}}{4}}\]</p>
                        </div>
                        <div class="step">
                            <p>Further simplify:</p>
                            <p>\[Q = \frac{1}{10}\sqrt{\frac{5000}{4}}\]</p>
                        </div>
                        <div class="step">
                            <p>Calculate the square root:</p>
                            <p>\[Q = \frac{1}{10}\sqrt{1250}\]</p>
                            <p>\[Q = \frac{35.36}{10}\]</p>
                        </div>
                        <div class="step">
                            <p>Final result:</p>
                            <p>\[Q = 3.536 \approx 3.54\]</p>
                        </div>
                    </div>
                </div>
                
                <div class="answer-part">
                    <p><strong>(c) Impedance at Resonance:</strong></p>
                    <p>The impedance of a series RLC circuit is given by:</p>
                    <p>\[Z = R + j(X_L - X_C)\]</p>
                    <p>Where:</p>
                    <ul>
                        <li>\(X_L = 2\pi fL\) (inductive reactance)</li>
                        <li>\(X_C = \frac{1}{2\pi fC}\) (capacitive reactance)</li>
                    </ul>
                    <p>At resonance, \(X_L = X_C\), which means:</p>
                    <p>\[2\pi f_0 L = \frac{1}{2\pi f_0 C}\]</p>
                    <p>Therefore, the term \(j(X_L - X_C)\) becomes zero, and the impedance becomes purely resistive:</p>
                    <p>\[Z = R\]</p>
                    <p>This is the minimum possible impedance for the circuit, as any deviation from the resonant frequency would introduce a reactive component, which would increase the total impedance magnitude.</p>
                </div>
                
                <p class="answer-conclusion">In summary, at the resonant frequency of 3.56 kHz, this RLC circuit has a quality factor of 3.54 and exhibits minimum impedance, which is equal to the resistance value of 10Ω.</p>
            </div>
        </div>
    </div>
</div>
<!-- END QUESTION 2 -->
```

### 5.2 Network/IT Question Example

#### MMD Content:
```
# Question 3 (15 marks)

(a) List and explain three types of network topologies. (6 marks)

(b) Compare and contrast TCP and UDP protocols. (6 marks)

(c) What is a firewall and why is it important in network security? (3 marks)

![](https://cdn.mathpix.com/snip/images/network_topology_diagram.png)
```

#### HTML Output:
```html
<!-- BEGIN QUESTION 3 -->
<div class="question" id="question-3">
    <h3>Question 3 (15 marks)</h3>
    <div class="question-content">
        <p>(a) List and explain three types of network topologies. (6 marks)</p>
        <p>(b) Compare and contrast TCP and UDP protocols. (6 marks)</p>
        <p>(c) What is a firewall and why is it important in network security? (3 marks)</p>
        
        <!-- BEGIN FIGURE 1 -->
        <figure class="question-figure">
            <img src="images/2022n_q3-fig1.png" alt="Network Topology Diagram">
            <figcaption>Figure 1: Network Topology Examples</figcaption>
        </figure>
        <!-- END FIGURE 1 -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content" id="answer-3">
            <div class="answer-detail">
                <p class="answer-intro">This question covers fundamental networking concepts including physical network design, transport layer protocols, and security mechanisms.</p>
                
                <div class="answer-part">
                    <p><strong>(a) Network Topologies:</strong></p>
                    <ul>
                        <li><strong>Star Topology:</strong>
                            <ul>
                                <li>All devices connect to a central hub/switch</li>
                                <li>Easy to troubleshoot and modify</li>
                                <li>Failure of one node doesn't affect others</li>
                                <li>Central point of failure at the hub</li>
                            </ul>
                        </li>
                        <li><strong>Bus Topology:</strong>
                            <ul>
                                <li>All devices connect to a single cable</li>
                                <li>Simple and inexpensive to implement</li>
                                <li>Limited in length and devices</li>
                                <li>Single point of failure affects the entire network</li>
                            </ul>
                        </li>
                        <li><strong>Ring Topology:</strong>
                            <ul>
                                <li>Devices connect to form a closed loop</li>
                                <li>Data travels in one direction</li>
                                <li>Each device acts as a repeater</li>
                                <li>Failure of one device can impact the entire network</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="answer-part">
                    <p><strong>(b) TCP vs UDP:</strong></p>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>TCP (Transmission Control Protocol)</th>
                                <th>UDP (User Datagram Protocol)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Connection</td>
                                <td>Connection-oriented</td>
                                <td>Connectionless</td>
                            </tr>
                            <tr>
                                <td>Reliability</td>
                                <td>Reliable - guarantees delivery and correct order</td>
                                <td>Unreliable - no guarantee of delivery or order</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>Slower due to overhead</td>
                                <td>Faster due to less overhead</td>
                            </tr>
                            <tr>
                                <td>Header Size</td>
                                <td>20-60 bytes</td>
                                <td>8 bytes</td>
                            </tr>
                            <tr>
                                <td>Flow Control</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Use Cases</td>
                                <td>Web browsing, email, file transfers</td>
                                <td>Video streaming, DNS, VoIP, online games</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <p>TCP establishes a connection before data transfer and ensures all data is received correctly and in order. It includes mechanisms for flow control, congestion control, and error recovery. This reliability comes at the cost of higher overhead and latency.</p>
                    
                    <p>UDP simply sends packets (datagrams) without establishing a connection or verifying receipt. It offers no guarantees about delivery or ordering but provides faster transmission with less overhead, making it suitable for real-time applications where some data loss is acceptable.</p>
                </div>
                
                <div class="answer-part">
                    <p><strong>(c) Firewall and Its Importance:</strong></p>
                    <p>A firewall is a network security device or software that monitors and filters incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, such as the Internet.</p>
                    <p>Importance in network security:</p>
                    <ul>
                        <li>Prevents unauthorized access to private networks</li>
                        <li>Blocks malicious traffic, including malware and viruses</li>
                        <li>Controls which applications can access the network</li>
                        <li>Provides logging capabilities for security auditing</li>
                        <li>Acts as a first line of defense against cyber attacks</li>
                    </ul>
                    <p>Firewalls use various techniques like packet filtering, stateful inspection, application-level gateways, and next-generation features to protect networks against a wide range of threats, making them an essential component of any comprehensive network security strategy.</p>
                </div>
                
                <p class="answer-conclusion">In modern networks, these concepts are often used in combination. Networks typically employ hybrid topologies, utilize both TCP and UDP protocols for different services, and implement multiple layers of firewalls for defense in depth.</p>
            </div>
        </div>
    </div>
</div>
<!-- END QUESTION 3 -->
```

## 6. Handling Mathematical Equations

### 6.1 Converting Math Expressions from MMD to HTML/MathJax

| MMD Format | HTML/MathJax Format |
|------------|---------------------|
| `$x^2 + y^2$` | `\(x^2 + y^2\)` |
| `$$E = mc^2$$` | `\[E = mc^2\]` |

### 6.2 Common Math Symbols Reference

| Symbol | LaTeX Code | Description |
|--------|------------|-------------|
| α, β, γ | `\alpha`, `\beta`, `\gamma` | Greek letters |
| ∑, ∏ | `\sum`, `\prod` | Summation, product |
| ∫, ∬ | `\int`, `\iint` | Integrals |
| ≤, ≥ | `\leq`, `\geq` | Less/greater than or equal |
| ±, × | `\pm`, `\times` | Plus-minus, multiplication |
| √, ∛ | `\sqrt{x}`, `\sqrt[3]{x}` | Square root, cube root |
| ∞ | `\infty` | Infinity |
| ∈, ⊂ | `\in`, `\subset` | Set membership, subset |
| → | `\rightarrow` | Arrow |
| ⋅, ∘ | `\cdot`, `\circ` | Multiplication dot, composition |

### 6.3 Units in Equations

Use `\mathrm{}` for units:
```
\(5 \mathrm{kg} \cdot 9.8 \mathrm{m/s^2} = 49 \mathrm{N}\)
```

## 7. Creating Comprehensive, Well-Formatted Answers

### 7.1 Answer Structure and Format

Each answer should follow this structured approach:

1. **Begin with an Introduction**
   - Provide context and highlight core concepts
   - Show what approach will be used to solve the problem

2. **Create Clear Sections for Each Part**
   - Separate answer parts for each question part
   - Use consistent formatting for different parts

3. **Show Work Clearly for Mathematical Problems**
   - List all given information and what to find
   - Present relevant formulas with explanations
   - Provide step-by-step calculations
   - Include units throughout
   - Highlight final answers

4. **Add Visual Elements When Helpful**
   - Use tables for comparisons
   - Include diagrams for complex processes
   - Create step-by-step visuals for multi-step solutions

5. **End with a Conclusion**
   - Summarize key findings
   - Connect the answer back to the original problem context

### 7.2 Mathematical Solutions Guidelines

For mathematical problems, follow this pattern:

1. **Key-point box with all given information**
2. **Formula presentation with explanation**
3. **Step-by-step calculation with clear progression**
4. **Final result clearly formatted and with proper units**

### 7.3 Programming Solutions Guidelines

For code-related questions:

1. **Explain the algorithm or approach first**
2. **Show well-commented code**
3. **Explain key parts of the code**
4. **Discuss efficiency and alternatives**
5. **Provide example output**

### 7.4 Theoretical/Conceptual Question Guidelines

For explanatory questions:

1. **Start with clear definitions**
2. **Use structured comparisons for compare/contrast questions**
3. **Include examples and counter-examples**
4. **Reference diagrams and figures when applicable**
5. **Include key takeaways**

## 8. Preserving Question Order and Structure

It is critical to maintain the exact same question sequence and structure from the original MMD file when converting to HTML.

### 8.1 Question Order Preservation Guidelines

1. **Always Process Questions Sequentially**
   - Extract questions from the MMD file in their original order
   - Assign HTML IDs that match question numbers (e.g., `id="question-1"` for Question 1)
   - Never rearrange questions even if it might seem logical to group similar topics

2. **Important: Use Document Position, Not Question Numbers**
   - Always determine question order based on where they appear in the document
   - Do not sort questions by their numbers as this may disrupt the intended sequence
   - Questions must appear in the HTML file in exactly the same order as in the MMD

3. **Verify Question Ordering**
   - After processing, verify that questions appear in the same order as the source document
   - Check that all questions are present and none have been duplicated or omitted
   - Ensure sub-questions (a, b, c, etc.) maintain their original order

### 8.2 Question Structure Preservation

Each question's internal structure must also be preserved:

1. **Part and Subpart Hierarchy**
   - Maintain all levels of question hierarchy (parts, subparts, sub-subparts)
   - For example, if the original has structure "1. (a) (i)", preserve this exact structure
   - Use consistent formatting for each level (bold for main parts, regular for subparts)

2. **Spacing and Indentation**
   - Preserve whitespace between question parts where it adds to readability
   - Use consistent indentation for nested question parts:
     ```html
     <p>(a) Main part question text... (5 marks)</p>
     <p class="indented-1">(i) First subpart... (2 marks)</p>
     <p class="indented-1">(ii) Second subpart... (3 marks)</p>
     ```

3. **Mark Allocation**
   - Preserve all mark allocations exactly as they appear in the original
   - The total marks for parts should sum to the total marks for the question

## 9. Local Image Processing Requirements

All images in the past papers must be properly downloaded and stored locally before HTML generation. Images in MMD files typically appear as URLs, and these must be processed to create a complete offline-accessible resource.

### 9.1 Image Extraction and Download Guidelines

1. **Extract All Image URLs from MMD Files First**
   - Before starting HTML conversion, extract all image URLs from the MMD file
   - Image references in MMD typically appear as: `![](https://cdn.mathpix.com/snip/images/image_id.png)`
   - Create a complete list of all images needed for the document

2. **Download All Images Using curl**
   - Use curl to download all images to the local `images` directory
   - All images must be downloaded before beginning HTML processing
   - Follow consistent naming conventions

3. **Example Process:**
   ```
   # 1. Extract all image URLs from MMD file
   grep -o "https://cdn\.mathpix\.com/[^)]*" 2022n_ocr.mmd > image_urls.txt
   
   # 2. Download all images to local directory
   mkdir -p images
   while read url; do
     # Extract question number from context (important!)
     # Use consistent naming pattern: paper-id_qX-figY.png
     curl -o "images/2022n_q1-fig1.png" -s -L "$url"
   done < image_urls.txt
   ```

### 9.2 Image Naming Convention

Follow this strict naming convention that includes the past paper name to avoid conflicts:

1. **Pattern: `[paper-id]_qX-figY.png`**
   - `[paper-id]` = Paper identifier (e.g., "2022j" for July 2022, "2023n" for November 2023)
   - `X` = Question number (1, 2, 3, etc.)
   - `Y` = Figure number within that question (1, 2, 3, etc.)
   - Example: `2022j_q2-fig3.png` for the third figure in Question 2 of July 2022 paper

2. **Examples for Different Papers:**
   - `2023j_q1-fig1.png` - First figure in Question 1 of July 2023 paper
   - `2022n_q1-fig1.png` - First figure in Question 1 of November 2022 paper
   - `2021j_q1-fig1.png` - First figure in Question 1 of July 2021 paper

3. **Importance of Paper ID in Naming**
   - Different past papers will have the same question numbers (Q1, Q2, etc.)
   - Including the paper ID prevents file conflicts and overwrites
   - Maintains clear organization across multiple papers
   - Allows for unambiguous referencing in the HTML

4. **Directory Structure Options:**
   - Option 1 (Preferred): All images in single `images` directory with paper ID in filename
   - Option 2: Subdirectories for each paper (`images/2022j/`, `images/2023n/`, etc.)

5. **Image Download Command:**
   ```
   # Extract paper ID from filename (e.g., "2022j" from "2022j_ocr.mmd")
   PAPER_ID=$(basename $MMD_FILE _ocr.mmd)
   
   # Download with paper ID in filename
   curl -o "images/${PAPER_ID}_q1-fig1.png" -s -L "$image_url"
   ```

6. **HTML Reference Format:**
   ```html
   <figure class="question-figure">
     <img src="images/2022j_q2-fig1.png" alt="Description of figure">
     <figcaption>Figure 1: [Caption]</figcaption>
   </figure>
   ```

### 9.3 Image Verification Checklist

Before finalizing the HTML conversion, verify all images:

1. **Completeness Check**
   - All images referenced in MMD are downloaded locally
   - No remote URLs remain in the HTML

2. **File Existence Verification**
   - All local image paths in HTML point to existing files
   - No broken image links

3. **Quality and Format Check**
   - Images are readable and properly formatted
   - Mathematical diagrams and figures are clear

4. **Alternative Text Verification**
   - All images have appropriate alt text
   - Alt text describes the image content effectively

### 9.4 Important Note on Remote URLs

NEVER leave remote URLs in the final HTML. All images must be accessed locally to ensure:
- Papers are usable offline
- No dependency on external servers
- Consistent loading times
- Long-term availability of resources

## 10. Handling LaTeX Conversion Issues

When converting PDF files that contain LaTeX content, you may encounter specific errors related to LaTeX environments. One common error is "Unknown environment 'tabular'".

### 10.1 Handling "Unknown environment 'tabular'" Error

The 'tabular' environment is commonly used in LaTeX to create tables. When OCR software encounters this, it might generate an error because it's trying to preserve LaTeX syntax that needs to be converted to HTML.

#### Problem Example
```
\begin{tabular}{|c|c|c|}
\hline
Header 1 & Header 2 & Header 3 \\
\hline
Data 1 & Data 2 & Data 3 \\
Data 4 & Data 5 & Data 6 \\
\hline
\end{tabular}
```

#### Solution: Convert to HTML Tables

When you encounter this error, manually convert the LaTeX tabular environment to an HTML table:

```html
<table class="data-table">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
</table>
```

### 10.2 LaTeX to HTML Conversion Reference

Here's a reference for converting common LaTeX elements to HTML:

| LaTeX Structure | HTML Equivalent |
|-----------------|-----------------|
| `\begin{tabular}...\end{tabular}` | `<table>...</table>` |
| `\begin{array}...\end{array}` | `<table class="math-array">...</table>` |
| `\begin{itemize}...\end{itemize}` | `<ul>...</ul>` |
| `\begin{enumerate}...\end{enumerate}` | `<ol>...</ol>` |
| `\begin{equation}...\end{equation}` | `<div class="equation">\[...\]</div>` |
| `\begin{align}...\end{align}` | `<div class="aligned-equation">\begin{align}...\end{align}</div>` |
| `\begin{figure}...\end{figure}` | `<figure>...</figure>` |
| `\begin{center}...\end{center}` | `<div class="centered">...</div>` |
| `\emph{text}` | `<em>text</em>` |
| `\textbf{text}` | `<strong>text</strong>` |
| `\\` (in tables) | `</tr><tr>` |
| `&` (in tables) | `</td><td>` or `</th><th>` |

### 10.3 Handling Complex LaTeX Tables

For more complex LaTeX tables with merged cells and special formatting:

#### LaTeX Example with Cell Merging
```
\begin{tabular}{|c|c|c|}
\hline
\multicolumn{2}{|c|}{Merged Header} & Header 3 \\
\hline
Data 1 & Data 2 & Data 3 \\
Data 4 & \multicolumn{2}{c|}{Merged Data} \\
\hline
\end{tabular}
```

#### HTML Solution
```html
<table class="data-table">
  <thead>
    <tr>
      <th colspan="2">Merged Header</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td colspan="2">Merged Data</td>
    </tr>
  </tbody>
</table>
```

### 10.4 Handling Math Mode in Tables

For tables containing mathematical expressions:

#### LaTeX Example with Math
```
\begin{tabular}{|c|c|}
\hline
Symbol & Meaning \\
\hline
$\alpha$ & Alpha \\
$\beta$ & Beta \\
$\sum_{i=1}^{n} x_i$ & Sum of x from 1 to n \\
\hline
\end{tabular}
```

#### HTML Solution
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\(\alpha\)</td>
      <td>Alpha</td>
    </tr>
    <tr>
      <td>\(\beta\)</td>
      <td>Beta</td>
    </tr>
    <tr>
      <td>\(\sum_{i=1}^{n} x_i\)</td>
      <td>Sum of x from 1 to n</td>
    </tr>
  </tbody>
</table>
```

### 10.5 Preventative Measures

To minimize LaTeX conversion issues:

1. **Pre-Process OCR Output**
   - Identify and flag all LaTeX environments
   - Convert common LaTeX structures to HTML before proceeding with main conversion

2. **Create a Conversion Dictionary**
   - Maintain a mapping of LaTeX structures to HTML equivalent for your specific documents
   - Update this dictionary as new patterns emerge

3. **Use MathJax Appropriately**
   - Ensure MathJax is used only for mathematical notation
   - Don't try to use it to render tables or other structural elements

4. **Validate Converted Content**
   - Run HTML validation after conversion
   - Check specifically for proper nesting of table elements

## 11. Preventing File Conflicts During Conversion

When working with multiple HTML files or when using automated tools to assist with conversion, file conflicts can occur. Here's how to prevent and resolve these issues:

### 11.1 File Locking Mechanism

Implement a simple file locking system to prevent simultaneous edits:

```bash
# Before editing a file
if [ -f "${filename}.lock" ]; then
    echo "File is currently being edited. Try again later."
    exit 1
else
    touch "${filename}.lock"
    echo "$(date): Started editing by $USER" > "${filename}.lock"
fi

# Perform edits...

# After completing edits
rm "${filename}.lock"
```

### 11.2 Complete File Updates Instead of Diffs

When updating HTML files, avoid partial updates or diffs which can lead to conflicts:

```javascript
// Instead of this (partial updates):
function updateQuestion(htmlFile, questionNumber, newContent) {
    const fileContent = fs.readFileSync(htmlFile, 'utf8');
    const questionPattern = new RegExp(`<!-- BEGIN QUESTION ${questionNumber} -->.*?<!-- END QUESTION ${questionNumber} -->`, 's');
    const updatedContent = fileContent.replace(questionPattern, newContent);
    fs.writeFileSync(htmlFile, updatedContent);
}

// Do this (complete file handling):
function updateQuestion(htmlFile, questionNumber, newContent) {
    // Read entire file
    const fileContent = fs.readFileSync(htmlFile, 'utf8');
    
    // Create backup
    fs.writeFileSync(`${htmlFile}.bak`, fileContent);
    
    // Prepare complete new content
    const questionPattern = new RegExp(`<!-- BEGIN QUESTION ${questionNumber} -->.*?<!-- END QUESTION ${questionNumber} -->`, 's');
    const updatedContent = fileContent.replace(questionPattern, newContent);
    
    // Write complete file at once
    fs.writeFileSync(htmlFile, updatedContent);
}
```

### 11.3 Implement Version Control

Using Git provides better handling of file changes:

```bash
# Initialize repository
git init

# Before making changes
git pull
git checkout -b update-july-2019

# After making changes
git add 2019july.html
git commit -m "Added answers to July 2019 paper"
git checkout main
git merge update-july-2019
```

### 11.4 Atomic File Operations

Use atomic operations when possible to prevent partial updates:

```javascript
// For Node.js
const fs = require('fs');
const tempFile = `${htmlFile}.tmp`;

// Write to temporary file first
fs.writeFileSync(tempFile, updatedContent);

// Then use atomic rename operation
fs.renameSync(tempFile, htmlFile);
```

### 11.5 Handling "apply_diff" Errors

If you encounter errors like "The `apply_diff` tool was partially successful" when using automated tools:

1. **Stop all processes** that might be accessing the file
2. **Create a full backup** of the current file
3. **Read the entire file** and make a fresh copy
4. **Make all changes at once** instead of incremental updates
5. **Write back the complete file** in a single operation
6. **Verify file integrity** after the update

### 11.6 Processing Large Files

For very large HTML files, break the process into these discrete steps:

1. **Extract file structure first** (no content changes)
2. **Add questions one at a time** with complete content
3. **Add answers in a separate pass** after all questions are in place
4. **Process images last** after the HTML structure is stable

## 12. Mobile Optimization Features

The HTML, CSS, and JavaScript have been specifically optimized for mobile devices with the following features:

### 12.1 Mobile-Friendly Navigation
- Slide-in sidebar menu with touch gestures
- Larger touch targets for buttons and links
- Swipe navigation (left to right to open menu, right to left to close)
- Fixed navigation toggle that's always accessible

### 12.2 Responsive Design Improvements
- Responsive breakpoints for different device sizes
- Mobile-specific typography adjustments
- Optimized spacing and padding for small screens
- Single-column layout on mobile devices

### 12.3 Touch-Optimized Interactions
- Image zoom functionality with tap gestures
- Larger buttons meeting accessibility standards (min 44px height)
- Improved scrolling behavior for mathematical content
- Touch-friendly sidebar links

### 12.4 Mobile Performance Optimizations
- Lightweight CSS with minimal animations
- Efficient event handling for touch interactions
- MathJax recalculation on orientation changes
- Memory-efficient DOM manipulations

### 12.5 Mobile Display Enhancements
- Better readability of mathematical formulas on small screens
- Scrollable math containers for complex equations
- Simplified navigation between questions
- Improved contrast for readability in various lighting conditions

## 13. Final Verification Checklist

Before finalizing any conversion, use this comprehensive checklist:

### 13.1 Structure Verification
- [ ] HTML file exists with correct name (e.g., `2022n.html`)
- [ ] CSS and JS files are present and properly linked
- [ ] All images downloaded to `images/` directory with proper naming
- [ ] File naming conventions followed consistently

### 13.2 Content Verification
- [ ] Paper details (subject, date, code) correctly displayed
- [ ] All questions present with correct numbering and marks
- [ ] Questions appear in the same order as in the original document
- [ ] Questions properly formatted with subparts
- [ ] Mathematical equations render correctly
- [ ] Tables and diagrams properly formatted
- [ ] Code snippets have syntax highlighting
- [ ] Images display with proper captions and alt text

### 13.3 Navigation
- [ ] Sidebar links to all papers
- [ ] Current paper highlighted in sidebar
- [ ] Previous/next paper links updated
- [ ] Index page shows all available papers

### 13.4 Mobile Compatibility
- [ ] Test on various mobile device sizes
- [ ] Verify slide-in menu functionality
- [ ] Check image zoom features
- [ ] Ensure math equations are readable on small screens

### 13.5 Accessibility
- [ ] All images have proper alt text
- [ ] Proper heading structure
- [ ] Sufficient color contrast
- [ ] Touch targets adequately sized

## 14. Conclusion

This comprehensive guide provides everything needed to create high-quality HTML conversions of PDF past papers with detailed, educational answers. By following these guidelines:

1. **Users get a superior learning experience** with structured content, clear explanations, and professional presentation.

2. **Mathematical content is properly rendered** with correct notation, step-by-step solutions, and visual aids.

3. **Mobile users have full access** to content optimized for smaller screens, with touch-friendly interactions and responsive design.

4. **File conflicts are prevented** through proper file handling practices and atomic operations.

5. **Subject-specific best practices** ensure answers follow the conventions and expectations of each discipline.

The combination of semantic HTML structure, responsive CSS, and mobile-optimized JavaScript creates a platform that makes educational content more accessible, engaging, and effective for students preparing for KNEC examinations.
