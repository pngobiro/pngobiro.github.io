# HTML Templates Collection (v10.0)

**Companion to:** PDF to HTML Conversion Prompt v10.0  
**Last Updated:** February 4, 2026  
**Purpose:** Complete HTML templates for all page types in the learning management system

---

## 📑 Table of Contents

1. [Topic Page Template](#topic-page-template)
2. [Index/Landing Page Template](#index-landing-page-template)
3. [Quiz Hub Template](#quiz-hub-template)
4. [Standard Exam Template](#standard-exam-template)
5. [Comprehensive Exam Template](#comprehensive-exam-template)
6. [Template Usage Guidelines](#template-usage-guidelines)

---

## 1. Topic Page Template

**File naming:** `topic-[NN]-[descriptor].html`  
**Location:** `topics/` directory  
**Purpose:** Individual lesson/topic content pages with integrated quiz

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[TOPIC TITLE] - Study Guide</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">

    <!-- KaTeX for Math (include if topic has equations) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="../styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <!-- Floating Quiz Button -->
    <a href="#topic-quiz" class="floating-quiz-btn" aria-label="Jump to quiz">
        <span class="quiz-btn-icon">📝</span>
        <span class="quiz-btn-text">Take Quiz</span>
    </a>

    <!-- Reading Progress -->
    <div class="reading-progress-container">
        <div class="reading-progress-bar" id="reading-progress"></div>
    </div>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">

                <!-- TOP NAVIGATION -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
                        </div>
                        <span class="progress-text">Topic [CURRENT] of [TOTAL]</span>
                    </div>
                </nav>

                <!-- HEADER -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>[TOPIC ICON]</span>
                        <span>Topic [NUMBER]</span>
                    </div>
                    <h1 class="document-title">[TOPIC TITLE]</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>[TOPIC DESCRIPTION]</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>[ESTIMATED READ TIME] min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- MAIN CONTENT -->
                <main id="main-content" class="content-wrapper">

                    <!-- CONTENT SECTIONS GO HERE -->
                    <section class="content-section" id="section-1">
                        <div class="section-header">
                            <div class="section-number">01</div>
                            <h2 class="section-title">
                                <span class="title-icon">[ICON]</span>
                                [SECTION TITLE]
                            </h2>
                        </div>
                        <div class="content-card">
                            <!-- Section content here -->
                            <p>[Content paragraphs, lists, callouts, tables, images, etc.]</p>
                        </div>
                    </section>

                    <!-- Add more sections as needed -->

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">
                            Complete this quiz to assess your comprehension of [TOPIC TITLE].
                        </p>
                    </div>

                    <!-- Quiz Container - Uses JSONP for file:// compatibility -->
                    <!-- 
                        ⚠️ PATH RESOLUTION WARNING:
                        Image paths in quiz JS file MUST be relative to THIS HTML file.
                        Since this file is in "topics/", use: "../assets/images/image.jpg"
                    -->
                    <div class="quiz-container" 
                         data-quiz-id="[topic-id]-quiz"
                         data-quiz-js="../quizzes/[topic-id]-quiz.js">

                        <div class="quiz-loading">
                            <div class="quiz-spinner"></div>
                            <p>Loading quiz...</p>
                        </div>

                        <div class="quiz-content" hidden></div>
                        <div class="quiz-results" hidden></div>
                    </div>
                </section>

                <!-- BOTTOM NAVIGATION -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                </nav>

            </article>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox-modal" hidden aria-hidden="true" role="dialog">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../js/theme.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/interactions.js"></script>
    <script src="../js/quiz.js"></script>
</body>

</html>
```

---

## 2. Index/Landing Page Template

**File naming:** `index.html`  
**Location:** Root directory  
**Purpose:** Main landing page with course overview and topic navigation

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[COURSE NAME] - Study Guide</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <div class="container">
            <main id="main-content" class="index-main">
                
                <!-- Hero Section -->
                <header class="index-hero">
                    <div class="hero-content">
                        <div class="hero-badge">
                            <span>[ICON]</span>
                            <span>[CATEGORY/SUBJECT]</span>
                        </div>
                        <h1 class="hero-title">[COURSE NAME]</h1>
                        <p class="hero-subtitle">[COURSE DESCRIPTION OR TAGLINE]</p>
                        <div class="hero-meta">
                            <div class="meta-item">
                                <span>📚</span>
                                <span>[TOTAL] Topics</span>
                            </div>
                            <div class="meta-item">
                                <span>⏱️</span>
                                <span>[ESTIMATED TIME] total</span>
                            </div>
                            <div class="meta-item">
                                <span>📅</span>
                                <span>Last updated: [DATE]</span>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- Quick Access Section (Optional) -->
                <section class="quick-access" aria-labelledby="quick-access-heading">
                    <h2 id="quick-access-heading" class="section-heading visually-hidden">Quick Access</h2>
                    <div class="quick-access-grid">
                        <a href="quiz-hub.html" class="quick-access-card">
                            <span class="quick-access-icon">📝</span>
                            <h3>Quiz Hub</h3>
                            <p>Test your knowledge</p>
                        </a>
                        <a href="comprehensive-exam.html" class="quick-access-card">
                            <span class="quick-access-icon">🎓</span>
                            <h3>Final Exam</h3>
                            <p>Comprehensive assessment</p>
                        </a>
                    </div>
                </section>

                <!-- Topics Section -->
                <section class="topics-section" aria-labelledby="topics-heading">
                    <h2 id="topics-heading" class="section-heading">
                        <span class="heading-icon">📖</span>
                        <span>Course Topics</span>
                    </h2>
                    
                    <div class="topics-grid">
                        
                        <!-- Topic Card Template - Repeat for each topic -->
                        <a href="topics/topic-01.html" class="topic-card">
                            <div class="card-number">01</div>
                            <div class="card-content">
                                <h3 class="card-title">[TOPIC 1 TITLE]</h3>
                                <p class="card-description">[Brief description of topic content and learning outcomes]</p>
                                <div class="card-meta">
                                    <span>⏱️ [X] min</span>
                                    <span>📄 [X] sections</span>
                                    <span>📝 Quiz</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Topic Card 2 -->
                        <a href="topics/topic-02.html" class="topic-card">
                            <div class="card-number">02</div>
                            <div class="card-content">
                                <h3 class="card-title">[TOPIC 2 TITLE]</h3>
                                <p class="card-description">[Brief description of topic content and learning outcomes]</p>
                                <div class="card-meta">
                                    <span>⏱️ [X] min</span>
                                    <span>📄 [X] sections</span>
                                    <span>📝 Quiz</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Topic Card 3 -->
                        <a href="topics/topic-03.html" class="topic-card">
                            <div class="card-number">03</div>
                            <div class="card-content">
                                <h3 class="card-title">[TOPIC 3 TITLE]</h3>
                                <p class="card-description">[Brief description of topic content and learning outcomes]</p>
                                <div class="card-meta">
                                    <span>⏱️ [X] min</span>
                                    <span>📄 [X] sections</span>
                                    <span>📝 Quiz</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Add more topic cards as needed -->
                        
                    </div>
                </section>

            </main>
        </div>
    </div>

    <script src="js/theme.js"></script>
</body>

</html>
```

**Customization Notes:**
- Replace `[COURSE NAME]` with actual course title
- Replace `[CATEGORY/SUBJECT]` with subject area (e.g., "Biology", "Computer Science")
- Update `[TOTAL]` with number of topics
- Update `[ESTIMATED TIME]` with total course duration
- Add one topic card per course topic
- Optionally remove Quick Access section if not needed

---

## 3. Quiz Hub Template

**File naming:** `quiz-hub.html`  
**Location:** Root directory  
**Purpose:** Central directory for all quizzes with filtering and progress tracking

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Hub - [COURSE NAME]</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">
                
                <!-- Navigation -->
                <nav class="document-nav" role="navigation">
                    <div class="nav-links">
                        <a href="index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>
                    </div>
                </nav>

                <!-- Header -->
                <header class="document-header quiz-hub-header">
                    <div class="header-badge">
                        <span>📝</span>
                        <span>Quiz Center</span>
                    </div>
                    <h1 class="document-title">Quiz Hub</h1>
                    <p class="quiz-hub-subtitle">Test your knowledge across all topics</p>
                    
                    <!-- Overall Progress Summary -->
                    <div class="quiz-hub-stats" id="quiz-stats">
                        <div class="stat-item">
                            <span class="stat-value" id="total-quizzes">0</span>
                            <span class="stat-label">Total Quizzes</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value" id="completed-quizzes">0</span>
                            <span class="stat-label">Completed</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value" id="average-score">--%</span>
                            <span class="stat-label">Average Score</span>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">
                    
                    <!-- Comprehensive Exam Banner -->
                    <div class="exam-banner">
                        <div class="exam-banner-content">
                            <div class="exam-banner-icon">🎓</div>
                            <div class="exam-banner-text">
                                <h3>Comprehensive Final Exam</h3>
                                <p>Test your knowledge across all course topics</p>
                            </div>
                            <div class="exam-banner-meta">
                                <span>📚 All Topics</span>
                                <span>❓ [X] Questions</span>
                                <span>⏱️ [X] Minutes</span>
                            </div>
                        </div>
                        <a href="comprehensive-exam.html" class="exam-banner-btn">
                            Take Final Exam →
                        </a>
                    </div>
                    
                    <!-- Filter/Sort Options -->
                    <div class="quiz-hub-controls">
                        <div class="filter-group">
                            <label for="difficulty-filter">Difficulty:</label>
                            <select id="difficulty-filter" class="quiz-filter">
                                <option value="all">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="status-filter">Status:</label>
                            <select id="status-filter" class="quiz-filter">
                                <option value="all">All</option>
                                <option value="not-started">Not Started</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    <!-- Quiz Cards Grid -->
                    <div class="quiz-hub-grid" id="quiz-grid">
                        
                        <!-- Quiz Card Template - Not Started -->
                        <div class="quiz-card" data-difficulty="beginner" data-status="not-started">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">[ICON]</span>
                                <span class="quiz-card-topic">Topic 1</span>
                            </div>
                            <h3 class="quiz-card-title">[Quiz Title]</h3>
                            <p class="quiz-card-description">[Brief description of quiz content and what it covers]</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-beginner">Beginner</span>
                                <span class="quiz-meta-item">📝 [X] questions</span>
                                <span class="quiz-meta-item">⏱️ ~[X] min</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 0%;"></div>
                                </div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-01.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">
                                    Start Quiz
                                </a>
                                <a href="topics/topic-01.html" class="quiz-card-btn quiz-card-btn--secondary">
                                    Review Topic
                                </a>
                            </div>
                        </div>

                        <!-- Quiz Card - Completed Example -->
                        <div class="quiz-card quiz-card--completed" data-difficulty="intermediate" data-status="completed">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">[ICON]</span>
                                <span class="quiz-card-topic">Topic 2</span>
                                <span class="quiz-card-badge">✓ Completed</span>
                            </div>
                            <h3 class="quiz-card-title">[Quiz Title]</h3>
                            <p class="quiz-card-description">[Brief description of quiz content]</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 [X] questions</span>
                                <span class="quiz-meta-item">⏱️ ~[X] min</span>
                            </div>
                            <div class="quiz-card-score">
                                <span class="score-value">85%</span>
                                <span class="score-label">Best Score</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-02.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">
                                    Retake Quiz
                                </a>
                                <a href="topics/topic-02.html" class="quiz-card-btn quiz-card-btn--secondary">
                                    Review Topic
                                </a>
                            </div>
                        </div>

                        <!-- Add more quiz cards as needed -->
                        
                    </div>
                </main>

            </article>
        </div>
    </div>

    <script src="js/theme.js"></script>
    <script src="js/quiz-hub.js"></script>
</body>

</html>
```

**Customization Notes:**
- Update exam banner with actual question count and time limit
- Create one quiz card per topic quiz
- Set appropriate difficulty levels
- Update quiz-card links to match your file structure
- The `quiz-hub.js` script handles filtering and stats calculation

---

## 4. Standard Exam Template

**File naming:** `[exam-name].html` (e.g., `midterm-exam.html`)  
**Location:** Root directory  
**Purpose:** Module or mid-term exams covering specific topics

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[EXAM TITLE] - [COURSE NAME]</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">

                <!-- Navigation -->
                <nav class="document-nav" role="navigation">
                    <div class="nav-links">
                        <a href="index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>
                        <a href="quiz-hub.html" class="nav-button">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>
                    </div>
                </nav>

                <!-- Exam Header -->
                <header class="document-header exam-header">
                    <div class="header-badge exam-badge">
                        <span>🎓</span>
                        <span>[EXAM TYPE]</span>
                    </div>
                    <h1 class="document-title">[EXAM TITLE]</h1>
                    <p class="exam-subtitle">[Exam description or purpose]</p>

                    <!-- Exam Info Cards -->
                    <div class="exam-info-cards">
                        <div class="exam-info-card">
                            <span class="info-icon">📚</span>
                            <span class="info-value">[X] Topics</span>
                            <span class="info-label">Covered</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">❓</span>
                            <span class="info-value">[X] Questions</span>
                            <span class="info-label">Total</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">⏱️</span>
                            <span class="info-value">[X] Minutes</span>
                            <span class="info-label">Time Limit</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">🎯</span>
                            <span class="info-value">[X]%</span>
                            <span class="info-label">To Pass</span>
                        </div>
                    </div>

                    <!-- Topics Covered List -->
                    <div class="exam-topics-covered">
                        <h3>Topics Covered:</h3>
                        <div class="topics-list">
                            <span class="topic-tag">Topic 1: [Name]</span>
                            <span class="topic-tag">Topic 2: [Name]</span>
                            <span class="topic-tag">Topic 3: [Name]</span>
                            <!-- Add more as needed -->
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Exam Instructions -->
                    <div class="callout callout--warning">
                        <div class="callout-header">
                            <span class="callout-icon">⚠️</span>
                            <h4 class="callout-title">Exam Instructions</h4>
                        </div>
                        <div class="callout-content">
                            <ul>
                                <li>This exam covers material from <strong>[list topics]</strong></li>
                                <li>You have <strong>[X] minutes</strong> to complete the exam</li>
                                <li>A score of <strong>[X]% or higher</strong> is required to pass</li>
                                <li>Questions are shuffled - your exam may differ from others</li>
                                <li>Review your answers before submitting</li>
                                <li>You may take this exam multiple times</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Exam Quiz Section -->
                    <section class="quiz-section exam-section" id="exam-quiz">
                        <!-- 
                            ⚠️ PATH RESOLUTION WARNING:
                            Image paths in quiz JS file MUST be relative to THIS HTML file.
                            Since this file is in ROOT, use: "assets/images/image.jpg"
                        -->
                        <div class="quiz-container" 
                             data-quiz-id="[exam-id]"
                             data-quiz-js="quizzes/[exam-id].js">

                            <div class="quiz-loading">
                                <div class="quiz-spinner"></div>
                                <p>Loading exam...</p>
                            </div>

                            <div class="quiz-content" hidden></div>
                            <div class="quiz-results" hidden></div>
                        </div>
                    </section>

                </main>

                <!-- Bottom Navigation -->
                <nav class="document-nav" role="navigation">
                    <div class="nav-links">
                        <a href="index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Back to Home</span>
                        </a>
                        <a href="quiz-hub.html" class="nav-button">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">Quiz Hub</span>
                        </a>
                    </div>
                </nav>

            </article>
        </div>
    </div>

    <!-- Scripts -->
    <script src="js/theme.js"></script>
    <script src="js/quiz.js"></script>
</body>

</html>
```

**Customization Notes:**
- Replace `[EXAM TITLE]` with specific exam name
- Update `[EXAM TYPE]` (e.g., "Midterm Exam", "Module 1 Exam")
- Fill in actual statistics in info cards
- List all covered topics in the topics-covered section
- Update instruction list as needed
- Link to appropriate quiz JS file

---

## 5. Comprehensive Exam Template

**File naming:** `comprehensive-exam.html`  
**Location:** Root directory  
**Purpose:** Final comprehensive exam covering all course topics with premium styling

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[EXAM TITLE] - [COURSE NAME]</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="styles/main.css">

    <style>
        /* Comprehensive Exam Specific Styles */
        .exam-body { 
            background-color: var(--color-bg-secondary); 
        }

        .exam-hero {
            background: var(--gradient-primary);
            color: white;
            padding: var(--space-12) var(--space-6) var(--space-16);
            text-align: center;
            position: relative;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
            margin-bottom: -4rem;
        }

        .exam-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(circle at 20% 150%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% -50%, rgba(255,255,255,0.15) 0%, transparent 50%);
            z-index: 0;
        }

        .exam-hero-content { 
            position: relative; 
            z-index: 1; 
            max-width: 800px; 
            margin: 0 auto; 
        }

        .exam-badge-lg {
            display: inline-flex;
            align-items: center;
            gap: var(--space-2);
            padding: var(--space-2) var(--space-4);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            border-radius: var(--radius-full);
            border: 1px solid rgba(255, 255, 255, 0.3);
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: var(--space-6);
        }

        .exam-title-lg {
            font-family: var(--font-family-sans);
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: var(--space-4);
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .exam-subtitle-lg { 
            font-size: 1.25rem; 
            opacity: 0.9; 
            font-weight: 400; 
        }

        .exam-dashboard {
            max-width: 1000px;
            margin: 0 auto var(--space-12);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: var(--space-6);
            padding: 0 var(--space-6);
            position: relative;
            z-index: 2;
        }

        .dashboard-card {
            background: var(--color-surface);
            padding: var(--space-6);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
            text-align: center;
            border: 1px solid var(--color-border);
            transition: transform 0.3s ease;
        }

        .dashboard-card:hover {
            transform: translateY(-4px);
        }

        .dash-icon {
            width: 48px;
            height: 48px;
            background: var(--color-bg-tertiary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin: 0 auto var(--space-3);
            color: var(--color-primary);
        }

        .dash-value {
            display: block;
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-text-primary);
            line-height: 1;
            margin-bottom: var(--space-1);
        }

        .dash-label {
            font-size: 0.875rem;
            color: var(--color-text-tertiary);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .syllabus-section { 
            max-width: 900px; 
            margin: 0 auto var(--space-12); 
            padding: 0 var(--space-6); 
        }

        .section-label {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 0.875rem;
            font-weight: 700;
            color: var(--color-text-tertiary);
            margin-bottom: var(--space-6);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-4);
        }
        
        .section-label::before, 
        .section-label::after { 
            content: ''; 
            height: 1px; 
            width: 40px; 
            background: var(--color-border); 
        }

        .topics-grid-visual { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
            gap: var(--space-4); 
        }

        .topic-pill {
            display: flex;
            align-items: center;
            gap: var(--space-3);
            background: var(--color-surface);
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-border);
            font-weight: 500;
            color: var(--color-text-secondary);
            transition: all 0.2s ease;
        }

        .topic-pill:hover {
            border-color: var(--color-primary);
            transform: translateX(4px);
        }

        .topic-pill-icon {
            width: 32px;
            height: 32px;
            background: var(--color-bg-tertiary);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
        }

        .exam-arena { 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 0 var(--space-6) var(--space-12); 
        }

        .instructions-card {
            background: #fffbeb;
            border: 1px solid #fcd34d;
            border-radius: var(--radius-xl);
            padding: var(--space-6);
            margin-bottom: var(--space-8);
        }
        
        [data-theme="dark"] .instructions-card {
            background: rgba(245, 158, 11, 0.1);
            border-color: rgba(245, 158, 11, 0.3);
        }

        .instructions-title {
            display: flex;
            align-items: center;
            gap: var(--space-2);
            font-weight: 700;
            color: #92400e;
            margin-bottom: var(--space-4);
        }
        
        [data-theme="dark"] .instructions-title { 
            color: #fbbf24; 
        }

        .instruction-steps { 
            list-style: none; 
            padding: 0; 
            display: grid; 
            gap: var(--space-3); 
        }

        .instruction-step { 
            display: flex; 
            gap: var(--space-3); 
            align-items: flex-start; 
            font-size: 0.95rem; 
            color: var(--color-text-secondary); 
        }

        .step-marker {
            min-width: 24px;
            height: 24px;
            background: rgba(245, 158, 11, 0.2);
            color: #d97706;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 700;
            margin-top: 2px;
        }

        .quiz-section {
            box-shadow: var(--shadow-2xl);
            border: 1px solid var(--color-border-focus);
            position: relative;
            overflow: hidden;
        }
        
        .quiz-section::before {
            content: '';
            position: absolute;
            top: 0; 
            left: 0; 
            right: 0; 
            height: 6px;
            background: var(--gradient-primary);
        }

        @media (max-width: 768px) {
            .exam-title-lg { font-size: 2rem; }
            .exam-dashboard { grid-template-columns: repeat(2, 1fr); }
            .topics-grid-visual { grid-template-columns: 1fr; }
        }
    </style>
</head>

<body class="exam-body">
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <div style="width: 100%;">
            
            <!-- Hero Section -->
            <header class="exam-hero">
                <div class="exam-hero-content">
                    <div class="exam-badge-lg">
                        <span>🎓</span>
                        <span>Final Assessment</span>
                    </div>
                    <h1 class="exam-title-lg">[EXAM TITLE]</h1>
                    <p class="exam-subtitle-lg">[COURSE NAME]</p>
                </div>
            </header>

            <!-- Dashboard Cards -->
            <section class="exam-dashboard">
                <div class="dashboard-card">
                    <div class="dash-icon">📚</div>
                    <span class="dash-value">[X]</span>
                    <span class="dash-label">Topics Covered</span>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">❓</div>
                    <span class="dash-value">[X]</span>
                    <span class="dash-label">Questions</span>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">⏱️</div>
                    <span class="dash-value">[X]</span>
                    <span class="dash-label">Minutes</span>
                </div>
                <div class="dashboard-card">
                    <div class="dash-icon">🎯</div>
                    <span class="dash-value">[X]%</span>
                    <span class="dash-label">Pass Mark</span>
                </div>
            </section>

            <main id="main-content" class="exam-arena">

                <!-- Syllabus Section -->
                <div class="syllabus-section">
                    <div class="section-label">Assessment Syllabus</div>
                    <div class="topics-grid-visual">
                        <!-- Repeat this pill for each topic -->
                        <div class="topic-pill">
                            <span class="topic-pill-icon">[ICON]</span>
                            <span>[TOPIC NAME]</span>
                        </div>
                        <!-- Add more topic pills as needed -->
                    </div>
                </div>

                <!-- Instructions -->
                <div class="instructions-card">
                    <div class="instructions-title">
                        <span>⚠️</span> Important Instructions
                    </div>
                    <ul class="instruction-steps">
                        <li class="instruction-step">
                            <span class="step-marker">1</span>
                            <span>This comprehensive exam covers ALL course topics</span>
                        </li>
                        <li class="instruction-step">
                            <span class="step-marker">2</span>
                            <span>You have <strong>[X] minutes</strong> to complete all questions</span>
                        </li>
                        <li class="instruction-step">
                            <span class="step-marker">3</span>
                            <span>A minimum score of <strong>[X]%</strong> is required to pass</span>
                        </li>
                        <li class="instruction-step">
                            <span class="step-marker">4</span>
                            <span>Questions are randomly shuffled for each attempt</span>
                        </li>
                        <li class="instruction-step">
                            <span class="step-marker">5</span>
                            <span>Review all answers before submitting - you cannot change them after</span>
                        </li>
                        <li class="instruction-step">
                            <span class="step-marker">6</span>
                            <span>You may retake this exam to improve your score</span>
                        </li>
                    </ul>
                </div>

                <!-- Exam Quiz Section -->
                <section class="quiz-section" id="exam-quiz">
                    <!-- 
                        ⚠️ PATH RESOLUTION WARNING:
                        Since this file is in ROOT, use: "assets/images/image.jpg"
                    -->
                    <div class="quiz-container" 
                         data-quiz-id="comprehensive-exam"
                         data-quiz-js="quizzes/comprehensive-exam.js">

                        <div class="quiz-loading">
                            <div class="quiz-spinner"></div>
                            <p>Initializing exam environment...</p>
                        </div>

                        <div class="quiz-content" hidden></div>
                        <div class="quiz-results" hidden></div>
                    </div>
                </section>

                <!-- Navigation -->
                <nav style="margin-top: var(--space-8); display: flex; justify-content: center; gap: var(--space-4);">
                    <a href="quiz-hub.html" class="nav-button nav-button--secondary">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Back to Quiz Hub</span>
                    </a>
                    <a href="index.html" class="nav-button nav-button--secondary">
                        <span class="nav-icon">🏠</span>
                        <span class="nav-text">Home</span>
                    </a>
                </nav>

            </main>
        </div>
    </div>

    <script src="js/theme.js"></script>
    <script src="js/quiz.js"></script>
</body>

</html>
```

**Customization Notes:**
- Update all `[X]` placeholders with actual values
- Add topic pills for all covered topics
- Customize instructions as needed
- The inline CSS provides the premium styling
- Ensure quiz JS file path is correct

---

## 6. Template Usage Guidelines

### When to Use Each Template

| Template | Purpose | When to Use |
|----------|---------|-------------|
| **Topic Page** | Individual lesson content | For each separate topic/chapter in the course |
| **Index/Landing** | Course homepage | Once per course as the main entry point |
| **Quiz Hub** | Quiz directory | Once per course to centralize all quizzes |
| **Standard Exam** | Module/section exam | For midterms or module assessments |
| **Comprehensive Exam** | Final assessment | For end-of-course comprehensive testing |

### Customization Checklist

Before using any template:

**All Templates:**
- [ ] Replace all `[PLACEHOLDER]` text with actual content
- [ ] Update file paths in navigation links
- [ ] Verify CSS and JS file paths are correct
- [ ] Test theme toggle functionality
- [ ] Check responsive design on mobile

**Topic Pages:**
- [ ] Add all content sections from source
- [ ] Link to correct previous/next topics
- [ ] Update progress percentage
- [ ] Link to appropriate quiz JS file
- [ ] Verify image paths use `../assets/images/`

**Index Page:**
- [ ] Create topic cards for all topics
- [ ] Update total counts and estimates
- [ ] Optionally add/remove quick access section
- [ ] Verify all topic links are correct

**Quiz Hub:**
- [ ] Create quiz cards for each topic quiz
- [ ] Set appropriate difficulty levels
- [ ] Update exam banner information
- [ ] Ensure quiz-hub.js is included

**Exam Templates:**
- [ ] List all covered topics
- [ ] Update statistics accurately
- [ ] Customize instructions
- [ ] Link to correct exam quiz JS file
- [ ] For comprehensive exam: add all topic pills

### File Organization

Recommended structure:
```
project-root/
├── index.html                    (use Index template)
├── quiz-hub.html                 (use Quiz Hub template)
├── comprehensive-exam.html       (use Comprehensive Exam template)
├── [optional-exams].html         (use Standard Exam template)
├── styles/
│   └── main.css
├── js/
│   ├── theme.js
│   ├── navigation.js
│   ├── interactions.js
│   ├── quiz.js
│   └── quiz-hub.js
├── quizzes/
│   ├── topic-[id]-quiz.js
│   └── comprehensive-exam.js
├── assets/
│   └── images/
└── topics/
    └── topic-[NN]-[name].html    (use Topic Page template)
```

### Path Reference Guide

**For files in `topics/` directory:**
- CSS: `../styles/main.css`
- JS: `../js/[filename].js`
- Images: `../assets/images/[filename]`
- Quiz data: `../quizzes/[quiz-id].js`
- Navigation: `../index.html`, `../quiz-hub.html`

**For files in root directory:**
- CSS: `styles/main.css`
- JS: `js/[filename].js`
- Images: `assets/images/[filename]`
- Quiz data: `quizzes/[quiz-id].js`
- Navigation: `index.html`, `quiz-hub.html`

---

## End of Templates Collection

These templates work in conjunction with the **PDF to HTML Conversion Prompt v10.0** and the existing **main.css** stylesheet to create a complete, cohesive learning management system.
