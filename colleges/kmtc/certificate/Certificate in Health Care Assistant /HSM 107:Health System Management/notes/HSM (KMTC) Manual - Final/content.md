 Full Index.html Provided.

735,228 tokens
User
file thumbnail
Paste January 13, 2026 - 11:04PM
421,954 tokens

create full index.html for now , i will ask for the rest
Model
Thinking Thoughts

Examining the Core Input

I'm now zeroing in on the foundational aspects: the source text file, specifically content_cleaned.txt. My objective is to dissect its content and structure to gain a solid grasp for the next phases.

Mapping the Information

I've successfully mapped the core document's meta-data onto the HTML template's hero section. My current focus involves translating the table of contents into the grid of module cards within the topics section. I'm extracting module titles and numbers to populate the cards' content, considering the addition of descriptions and metadata, such as estimated time or sections, which need further analysis.

Determining Read Time Estimates

I'm now calculating estimated read times for each module, based on the content length within the source text. These are rough calculations, but helpful. For example, module 3 seems like a ~30 min read. I'm focusing on the first few modules now, aiming to apply this methodology consistently across the entire set.

Estimating Reading Durations

I've just finished estimating the reading times for modules 4 through 17. The initial rough estimates, based on the duration for delivery of the modules, needed adjustment. Now, I'm estimating read times from the text. I've corrected them to be closer to 10-20 minutes, depending on content density.

6. Building the Framework

I'm now starting on the HTML and setting up the head section. This will include the CSS. I'm building out the basic structure for the document now.

Constructing the Outline

I'm now generating topic cards, creating "Preliminaries" as Topic 00 and "Appendices" as Topic 18. I'm adding links to topics/topic-XX.html. I'm starting by refining the HTML and CSS, adding relevant icons to each module title. I'm checking paths and including the JavaScript for theme toggling. Next, I plan to build index.html and begin integrating the content into the topics. Specifically, I'm working to add the link to comprehensive-exam.html. Finally, I've outlined the detailed topic mapping: 00 has icon ℹ️, 01 has icon 🏥, 02 has icon 👔, and so on.

Mapping Module Details

I'm now mapping module numbers and their respective icons. This completes the topic mapping for icons. I'm focusing on consistency. This includes "Quality Assurance" to "Appendices", with corresponding icons: ✅, 💰, 🗣️, 📜, ⚖️, 💻, 📊, 🏛️, 🚀, 🚨, 📈, 📎, to topics 07 through 18, respectively. Now, I will generate the complete index.html code.

Collapse to hide model thoughts
chevron_right

Here is the complete index.html file, structured according to the v9.6 Rich UI System. It includes the Hero section, the complete list of 17 modules plus preliminaries and appendices, utilizing the modern card layout and dark mode support.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Systems Management - Kenya Trainers Manual</title>
    
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
                            <span>🏥</span>
                            <span>Health Leadership & Management</span>
                        </div>
                        <h1 class="hero-title">Health Systems Management</h1>
                        <p class="hero-subtitle">Trainers Manual on Health Systems Management in Kenya</p>
                        
                        <div class="hero-meta">
                            <div class="meta-item">
                                <span>📚</span>
                                <span>17 Modules</span>
                            </div>
                            <div class="meta-item">
                                <span>🎓</span>
                                <span>KMTC / UoN / Egerton</span>
                            </div>
                            <div class="meta-item">
                                <span>📅</span>
                                <span>Published: July 2014</span>
                            </div>
                        </div>

                        <!-- Quiz Hub Button -->
                        <div style="margin-top: var(--space-6);">
                            <a href="quiz-hub.html" class="nav-button nav-button--primary" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.4);">
                                <span class="nav-icon">📝</span>
                                <span class="nav-text">Visit Quiz Hub</span>
                            </a>
                        </div>
                    </div>
                </header>

                <!-- Topics Section -->
                <section class="topics-section" aria-labelledby="topics-heading">
                    <h2 id="topics-heading" class="section-heading">
                        <span class="heading-icon">📖</span>
                        <span>Course Content</span>
                    </h2>
                    
                    <div class="topics-grid">
                        
                        <!-- Preliminaries -->
                        <a href="topics/topic-00.html" class="topic-card">
                            <div class="card-number">00</div>
                            <div class="card-content">
                                <h3 class="card-title">Preliminaries</h3>
                                <p class="card-description">Foreword, Acknowledgements, and List of Abbreviations.</p>
                                <div class="card-meta">
                                    <span>⏱️ 5 min</span>
                                    <span>📄 Intro</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 1 -->
                        <a href="topics/topic-01.html" class="topic-card">
                            <div class="card-number">01</div>
                            <div class="card-content">
                                <h3 class="card-title">Organisation of the Health Care System</h3>
                                <p class="card-description">Functions of a health system and the structure of the Kenya National Health System.</p>
                                <div class="card-meta">
                                    <span>⏱️ 20 min</span>
                                    <span>📄 4 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Topic 2 -->
                        <a href="topics/topic-02.html" class="topic-card">
                            <div class="card-number">02</div>
                            <div class="card-content">
                                <h3 class="card-title">Leadership and Management</h3>
                                <p class="card-description">Leadership practices, team management, and conflict resolution in health settings.</p>
                                <div class="card-meta">
                                    <span>⏱️ 35 min</span>
                                    <span>📄 5 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Topic 3 -->
                        <a href="topics/topic-03.html" class="topic-card">
                            <div class="card-number">03</div>
                            <div class="card-content">
                                <h3 class="card-title">Managing Human Resource for Health</h3>
                                <p class="card-description">HR functions including planning, recruitment, performance management, and training.</p>
                                <div class="card-meta">
                                    <span>⏱️ 30 min</span>
                                    <span>📄 3 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 4 -->
                        <a href="topics/topic-04.html" class="topic-card">
                            <div class="card-number">04</div>
                            <div class="card-content">
                                <h3 class="card-title">Leading Organisational Change</h3>
                                <p class="card-description">Change models, the change process, and managing reactions to organizational change.</p>
                                <div class="card-meta">
                                    <span>⏱️ 25 min</span>
                                    <span>📄 4 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 5 -->
                        <a href="topics/topic-05.html" class="topic-card">
                            <div class="card-number">05</div>
                            <div class="card-content">
                                <h3 class="card-title">Commodity and Supplies Management</h3>
                                <p class="card-description">Supply chain management, procurement processes, essential medicines, and inventory cycles.</p>
                                <div class="card-meta">
                                    <span>⏱️ 30 min</span>
                                    <span>📄 7 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 6 -->
                        <a href="topics/topic-06.html" class="topic-card">
                            <div class="card-number">06</div>
                            <div class="card-content">
                                <h3 class="card-title">Infrastructure and Facilities Management</h3>
                                <p class="card-description">Physical facilities, IT roles, asset management, and planned preventive maintenance.</p>
                                <div class="card-meta">
                                    <span>⏱️ 20 min</span>
                                    <span>📄 4 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 7 -->
                        <a href="topics/topic-07.html" class="topic-card">
                            <div class="card-number">07</div>
                            <div class="card-content">
                                <h3 class="card-title">Quality Assurance in Service Delivery</h3>
                                <p class="card-description">TQM principles, risk management, measuring quality, standards, and client satisfaction.</p>
                                <div class="card-meta">
                                    <span>⏱️ 30 min</span>
                                    <span>📄 8 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 8 -->
                        <a href="topics/topic-08.html" class="topic-card">
                            <div class="card-number">08</div>
                            <div class="card-content">
                                <h3 class="card-title">Financial Management</h3>
                                <p class="card-description">Budgeting, accounting documents, expenditure, financial statements, and resource mobilisation.</p>
                                <div class="card-meta">
                                    <span>⏱️ 35 min</span>
                                    <span>📄 9 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 9 -->
                        <a href="topics/topic-09.html" class="topic-card">
                            <div class="card-number">09</div>
                            <div class="card-content">
                                <h3 class="card-title">Communication in Health Services</h3>
                                <p class="card-description">Nature of communication, barriers, alternative forms, and effective skills.</p>
                                <div class="card-meta">
                                    <span>⏱️ 20 min</span>
                                    <span>📄 4 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 10 -->
                        <a href="topics/topic-10.html" class="topic-card">
                            <div class="card-number">10</div>
                            <div class="card-content">
                                <h3 class="card-title">Health Sector Policy and Reform</h3>
                                <p class="card-description">Policy aims, health indicators, system structure, and the Kenya Health Policy Framework.</p>
                                <div class="card-meta">
                                    <span>⏱️ 25 min</span>
                                    <span>📄 6 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 11 -->
                        <a href="topics/topic-11.html" class="topic-card">
                            <div class="card-number">11</div>
                            <div class="card-content">
                                <h3 class="card-title">Law and Ethics in Health Care</h3>
                                <p class="card-description">Legal responsibilities, ethical issues and theories, and basic rules of medical ethics.</p>
                                <div class="card-meta">
                                    <span>⏱️ 30 min</span>
                                    <span>📄 3 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 12 -->
                        <a href="topics/topic-12.html" class="topic-card">
                            <div class="card-number">12</div>
                            <div class="card-content">
                                <h3 class="card-title">Health Information Systems</h3>
                                <p class="card-description">Objectives, components, structure, and sources of health information in Kenya.</p>
                                <div class="card-meta">
                                    <span>⏱️ 20 min</span>
                                    <span>📄 7 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 13 -->
                        <a href="topics/topic-13.html" class="topic-card">
                            <div class="card-number">13</div>
                            <div class="card-content">
                                <h3 class="card-title">Project Management</h3>
                                <p class="card-description">Principles, planning, design, project cycle management, and planning tools.</p>
                                <div class="card-meta">
                                    <span>⏱️ 25 min</span>
                                    <span>📄 5 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 14 -->
                        <a href="topics/topic-14.html" class="topic-card">
                            <div class="card-number">14</div>
                            <div class="card-content">
                                <h3 class="card-title">Governance in Health System</h3>
                                <p class="card-description">Health system definition, governance responsibilities, policy, and legal frameworks.</p>
                                <div class="card-meta">
                                    <span>⏱️ 30 min</span>
                                    <span>📄 5 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 15 -->
                        <a href="topics/topic-15.html" class="topic-card">
                            <div class="card-number">15</div>
                            <div class="card-content">
                                <h3 class="card-title">Entrepreneurship for Health Professionals</h3>
                                <p class="card-description">Ventures, business plans, financial management, principles, and raising capital.</p>
                                <div class="card-meta">
                                    <span>⏱️ 25 min</span>
                                    <span>📄 6 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 16 -->
                        <a href="topics/topic-16.html" class="topic-card">
                            <div class="card-number">16</div>
                            <div class="card-content">
                                <h3 class="card-title">Disaster Management</h3>
                                <p class="card-description">Types of disasters, policy frameworks, and handling emergencies at facility level.</p>
                                <div class="card-meta">
                                    <span>⏱️ 20 min</span>
                                    <span>📄 4 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 17 -->
                        <a href="topics/topic-17.html" class="topic-card">
                            <div class="card-number">17</div>
                            <div class="card-content">
                                <h3 class="card-title">Monitoring and Evaluation</h3>
                                <p class="card-description">M&E framework, indicators, evaluation types, processes, tools, and reporting.</p>
                                <div class="card-meta">
                                    <span>⏱️ 35 min</span>
                                    <span>📄 12 sections</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>

                        <!-- Topic 18: Appendices -->
                        <a href="topics/topic-18.html" class="topic-card">
                            <div class="card-number">18</div>
                            <div class="card-content">
                                <h3 class="card-title">Appendices</h3>
                                <p class="card-description">Standard forms, vouchers, payroll samples, and financial statement templates.</p>
                                <div class="card-meta">
                                    <span>⏱️ Reference</span>
                                    <span>📄 21 items</span>
                                </div>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                    </div>
                </section>

                <!-- Exam CTA -->
                <section style="margin-top: var(--space-8); padding-bottom: var(--space-8);">
                    <div class="exam-banner">
                        <div class="exam-banner-content">
                            <div class="exam-banner-icon">🎓</div>
                            <div class="exam-banner-text">
                                <h3>Comprehensive Final Exam</h3>
                                <p>Ready to test your knowledge across all 17 modules?</p>
                            </div>
                            <div class="exam-banner-meta">
                                <span>📚 All Topics</span>
                                <span>❓ Multiple Choice</span>
                            </div>
                        </div>
                        <a href="comprehensive-exam.html" class="exam-banner-btn">
                            Take Final Exam →
                        </a>
                    </div>
                </section>

            </main>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        // Simple Theme Toggle Implementation
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check for saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    </script>
</body>
</html>

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 00: Preliminaries, including the Foreword, Acknowledgements, and Lists of Abbreviations/Tables/Figures.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preliminaries | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

    <link rel="stylesheet" href="../styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

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
                        <a href="../index.html" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Index</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="topic-01.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 0%;"></div>
                        </div>
                        <span class="progress-text">Preliminaries</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📋</span>
                        <span>Preliminaries</span>
                    </div>
                    <h1 class="document-title">Foreword & Acknowledgements</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Front Matter</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>10 min read</span>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Title Page Info -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🏥</span>
                            <h2 class="card-title">HEALTH LEADERSHIP AND MANAGEMENT</h2>
                        </div>
                        <p class="text-center"><strong>TRAINERS MANUAL ON HEALTH SYSTEMS MANAGEMENT IN KENYA</strong></p>
                        <div class="text-center" style="margin-top: var(--space-4);">
                            <p>University of Nairobi</p>
                            <p>Egerton University</p>
                            <p>Kenya Medical Training College</p>
                            <p><strong>July 2014</strong></p>
                        </div>
                    </div>

                    <!-- FOREWORD -->
                    <section class="content-section" id="foreword">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">📝</span>
                                FOREWORD
                            </h2>
                        </div>
                        <div class="content-card">
                            <p>The Government of Kenya has identified leadership and management development as key to strengthening health systems and services in the country. Basic management and administrative systems are required to ensure that health services can consistently provide acceptable levels of quality.</p>
                            <p>Leadership and management (L&M) competencies are prerequisites for health professionals in the 21st century irrespective of their level of operation within the health system. L&M is recognised as the foundation stone for WHO’s six building blocks of the health system. However, in developing countries, these competencies have primarily been acquired through in-service courses taken over a period of one to 24 weeks.</p>
                            <p>Successful implementation of the National Health Sector Strategic Plan and other policies require a strong health system managed by competent health managers. Accordingly, health care professionals need not only be experts in their chosen clinical discipline but also competent professionals with leadership and management skills that would enable them to be more actively involved in the planning, delivery and transformation of health services.</p>
                            <p>The Leadership Management and Sustainability (LMS) project, funded by USAID/Kenya under Management Sciences for Health (MSH), has been working with the University of Nairobi, Egerton University, Kenya Medical Training College, the Medical Practitioners and Dentist Board, the Nursing Council of Kenya, Pharmacy and Poison’s Board, and the Laboratory Board among others to integrate leadership and management content into the preservice curricula for all cadres of health workers.</p>
                            <p>This trainer’s manual is a reference for lecturers delivering the leadership and management unit. It should be used together with other relevant leadership and management training materials.</p>
                            <p style="text-align: right; font-style: italic;">i</p>
                        </div>
                    </section>

                    <!-- ACKNOWLEDGEMENTS -->
                    <section class="content-section" id="acknowledgements">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">🙏</span>
                                ACKNOWLEDGEMENTS
                            </h2>
                        </div>
                        <div class="content-card">
                            <p>This Leadership and Management Trainers’ Manual was prepared by the Leadership Management and Sustainability (LMS) project funded by the United States Agency for International Development (USAID) under the Management Sciences for Health (MSH).</p>
                            <p>The main contributors of this publication were Patrick Gichira, MBA, Caroline Gathii, MBA, Salome Gitoho, MBA, and Josephine Mbiyu-Kinyua, MPH. Other contributors included Dr. Ndinda Kusu, MPH, MSc., Dr. Mabel Nangami Nyarango, PhD, Dr. John Wagai, MPH, Mary Cheruiyot, MBA, and Peter Kibunga, MSc. Ruth Omondi, MA, coordinated the editing of this publication.</p>
                            <p>LMS Kenya is grateful to the College of Health Sciences of the University of Nairobi,, Egerton University, and Kenya Medical Training College (KMTC) for their participation and input during the pre-testing of this manual.</p>
                            <p style="text-align: right; font-style: italic;">ii</p>
                        </div>
                    </section>

                    <!-- TABLE OF CONTENTS -->
                    <section class="content-section" id="table-of-contents">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">📑</span>
                                TABLE OF CONTENTS
                            </h2>
                        </div>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>FOREWORD ... i</li>
                                <li>ACKNOWLEDGEMENTS ... ii</li>
                                <li>TABLE OF CONTENTS ... iii</li>
                                <li>LIST OF ABBREVIATIONS AND ACRONYMS ... viii</li>
                                <li>LIST OF TABLES ... xiii</li>
                                <li>LIST OF FIGURES ... xv</li>
                                <li>MODULE 1: ORGANISATION OF THE HEALTH CARE SYSTEM IN KENYA ... 1</li>
                                <li>1.1 Health Systems ... 2</li>
                                <li>1.2 The Functions of a Health System ... 2</li>
                                <li>1.3 Health Systems Management ... 4</li>
                                <li>1.4 The Kenya National Health System ... 6</li>
                                <li>MODULE 2: LEADERSHIP AND MANAGEMENT OF HEALTH SYSTEMS ... 13</li>
                                <li>2.1 Leadership and Management in Health Management ... 14</li>
                                <li>2.2 Management and Leadership in the Health Care System ... 16</li>
                                <li>2.3 Management and Leadership Practices ... 17</li>
                                <li>2.4 Team Management in Health Care Settings ... 21</li>
                                <li>2.5 Managing Conflict within Health Teams ... 32</li>
                                <li>MODULE 3: MANAGING HUMAN RESOURCE FOR HEALTH ... 40</li>
                                <li>3.1 Human Resource Management ... 41</li>
                                <li>3.2 Human Resource Management Functions ... 43</li>
                                <li>MODULE 4: LEADING ORGANISATIONAL CHANGE ... 70</li>
                                <li>4.1 Organisational Change ... 71</li>
                                <li>4.2 Leading and Managing Change ... 73</li>
                                <li>4.3 Change Models ... 77</li>
                                <li>4.4 Managing Reactions to Change ... 83</li>
                                <li>MODULE 5: COMMODITY AND SUPPLIES MANAGEMENT ... 88</li>
                                <li>5.1 Supply Chain Management ... 89</li>
                                <li>5.2 Internal Organisation of Health Facilities in Supplies Management ... 90</li>
                                <li>5.3 Procurement Processes ... 92</li>
                                <li>5.4 Procurement Methods ... 94</li>
                                <li>5.5 Essential Medicines ... 96</li>
                                <li>5.6 Commodity Management Cycle ... 97</li>
                                <li>Source: Management Sciences for Health (1997) ... 100</li>
                                <li>5.7 The Inventory Management Cycle ... 100</li>
                                <li>MODULE 6: HOSPITAL INFRASTRUCTURE AND FACILITIES MANAGEMENT ... 104</li>
                                <li>6.1 Health System Physical Facilities, Infrastructure and Equipment ... 105</li>
                                <li>6.2 Role of Information Technology ... 106</li>
                                <li>6.3 Managing Health Facility Assets ... 107</li>
                                <li>6.4 Planned Preventive Maintenance (PPM) ... 111</li>
                                <li>MODULE 7: QUALITY ASSURANCE IN HEALTH SERVICES DELIVERY ... 114</li>
                                <li>7.1 Quality Management Principles and Concepts ... 115</li>
                                <li>7.2 Components of a Total Quality Management (TQM) System ... 118</li>
                                <li>7.3 Quality Assurance and Risk Management in the Health Care Setting ... 119</li>
                                <li>7.4 Risk Management in Health Care Settings ... 120</li>
                                <li>7.5 Methods and Tools of Measuring Quality ... 121</li>
                                <li>7.6 Standards in Quality Management ... 125</li>
                                <li>7.7 The Kenya Quality Model for Health ... 128</li>
                                <li>7.8 Measuring Client Satisfaction ... 130</li>
                                <li>MODULE 8: FINANCIAL MANAGEMENT AND RESOURCE MOBILISATION ... 134</li>
                                <li>8.1 Financial Management ... 135</li>
                                <li>8.2 The Government Accountant General and Treasury ... 138</li>
                                <li>8.3 The Budget Preparation Process ... 140</li>
                                <li>8.4 County Financial Management ... 142</li>
                                <li>8.5 Government Accounting Documents ... 143</li>
                                <li>8.6 Expenditure ... 144</li>
                                <li>8.7 Facility Improvement Fund (FIF) ... 148</li>
                                <li>8.8 Financial Statements ... 149</li>
                                <li>8.9 Resource Mobilisation ... 156</li>
                                <li>MODULE 9: COMMUNICATION IN HEALTH SERVICES DELIVERY 164</li>
                                <li>9.1 Nature of Communication 165</li>
                                <li>9.2 Communication Barriers 170</li>
                                <li>9.3 Alternative Forms of Communication 176</li>
                                <li>9.4 Skills for Effective Communication 178</li>
                                <li>MODULE 10: HEALTH SECTOR POLICY AND REFORM 182</li>
                                <li>10.1 Aim of Health Policy and Reforms 183</li>
                                <li>10.2 Health Indicators 183</li>
                                <li>10.3 Structure of the Health Care System 185</li>
                                <li>10.4 Health Policies and Objectives 185</li>
                                <li>10.5 Health Policy and the Constitution of Kenya 2010 187</li>
                                <li>10.6 Kenya Health Policy Framework 2012-2030 187</li>
                                <li>MODULE 11: LAW AND ETHICS IN HEALTH CARE 190</li>
                                <li>11.1 Health Professionals Legal Responsibilities 191</li>
                                <li>11.2 Ethical Issues and Theories in Modern Health Care 199</li>
                                <li>11.3 Basic rules of medical ethics 201</li>
                                <li>MODULE 12: HEALTH INFORMATION SYSTEMS 206</li>
                                <li>12.1 Health Information System 207</li>
                                <li>12.2 Objectives of HIS 208</li>
                                <li>12.3 The Need for Strong Health Information Systems 208</li>
                                <li>12.4 Health Sector Information Needs 209</li>
                                <li>12.5 Components of a Health Information System 209</li>
                                <li>12.6 Structure of the Health Information System in Kenya 212</li>
                                <li>12.7 Sources of Health Information 213</li>
                                <li>MODULE 13: PROJECT MANAGEMENT 216</li>
                                <li>13.1 Project Management 217</li>
                                <li>13.2 Principles and Concepts of Project Management 217</li>
                                <li>13.3 Project Planning and Design 219</li>
                                <li>13.4 Project Cycle Management 220</li>
                                <li>13.5 Planning Methods and Tools 223</li>
                                <li>MODULE 14: GOVERNANCE IN HEALTH SYSTEM 232</li>
                                <li>14.1 Definition of a Health System 233</li>
                                <li>14.2 Health System Governance 233</li>
                                <li>14.3 Policy Framework 234</li>
                                <li>14.4 The Legal Framework of the Health Sector 238</li>
                                <li>14.5 Governance Responsibilities in the Health System 242</li>
                                <li>MODULE 15: ENTREPRENEURSHIP FOR HEALTH PROFESSIONALS 255</li>
                                <li>15.1 Entrepreneurship 256</li>
                                <li>15.2 Types of Business Ventures 258</li>
                                <li>15.3 Business Plans 264</li>
                                <li>15.4 Managing Business Finances 265</li>
                                <li>15.5 Principles of Business Management 266</li>
                                <li>15.6 Raising Business Capital 268</li>
                                <li>MODULE 16: DISASTER MANAGEMENT 275</li>
                                <li>16.1 Concepts, Terminologies and Types of Disasters 276</li>
                                <li>16.2 Policy Framework in Disaster Management 288</li>
                                <li>16.3 National Policy for Disaster Management in Kenya 290</li>
                                <li>16.4 Handling Emergencies at the Health Facility Level 291</li>
                                <li>MODULE 17: HEALTH SERVICES MONITORING AND EVALUATION 293</li>
                                <li>17.1 Purpose of Monitoring and Evaluation (M&E) in a Health System 294</li>
                                <li>17.2 Goal and Objectives of the Kenyan National M&E System 295</li>
                                <li>17.3 Monitoring and Evaluation Framework 295</li>
                                <li>17.4 M&E Indicators 296</li>
                                <li>17.5 Types of Evaluation 298</li>
                                <li>17.6 Monitoring Process 299</li>
                                <li>17.7 Evaluation Process 299</li>
                                <li>17.8 M&E Conceptual Framework 300</li>
                                <li>17.9 Evaluation Terms of Reference (TOR) 300</li>
                                <li>17.10 Monitoring and Evaluation Tools 302</li>
                                <li>17.11 Work Plans 304</li>
                                <li>17.12 Evaluation Reports ... 307</li>
                                <li>APPENDICES ... 311</li>
                                <li>Appendix 1 – Form S11 – Counter Requisition and Issue Voucher ... 311</li>
                                <li>Appendix 2 – Form S12 – Issue and Receipt Voucher ... 312</li>
                                <li>Appendix 3 – S13 Form – Counter Receipt Book ... 313</li>
                                <li>Appendix 4 – S20 – Local Purchase Order ... 314</li>
                                <li>Appendix 5 – S21 - Local Service Order ... 315</li>
                                <li>Appendix 6 – The Vote Book ... 316</li>
                                <li>Appendix 7 – Imprest Request Form ... 317</li>
                                <li>Appendix 8 – Surrender of Imprest ... 318</li>
                                <li>Appendix 9 – Sample Payroll ... 319</li>
                                <li>Appendix 10 – Sample Payslip ... 320</li>
                                <li>Appendix 11 – Sample Muster Roll ... 321</li>
                                <li>Appendix 12 – Sample Cash and Bank Book ... 322</li>
                                <li>Appendix 13 – Summary Expenditure Report ... 323</li>
                                <li>Appendix 14 – Bank Reconciliation Statement ... 324</li>
                                <li>Appendix 15 – Sample Ledger ... 325</li>
                                <li>Appendix 16 – Sample Trial Balance ... 325</li>
                                <li>Appendix 17 – Appropriation Accounts ... 326</li>
                                <li>Appendix 18 – Sample Cash Flow Forecast ... 327</li>
                                <li>Appendix 19 – Sample Fund Account Statement ... 328</li>
                                <li>Appendix 20 – Sample Income and Expenditure Statement ... 329</li>
                                <li>Appendix 21 – Sample Balance Sheet ... 330</li>
                            </ul>
                            <p style="text-align: right; font-style: italic;">iv-vii</p>
                        </div>
                    </section>

                    <!-- LIST OF ABBREVIATIONS -->
                    <section class="content-section" id="abbreviations">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">🔡</span>
                                LIST OF ABBREVIATIONS AND ACRONYMS
                            </h2>
                        </div>
                        <div class="table-wrapper">
                            <table class="content-table content-table--compact">
                                <thead>
                                    <tr>
                                        <th>Abbreviation</th>
                                        <th>Definition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>AG</td><td>Accountant General</td></tr>
                                    <tr><td>AIA</td><td>Appropriation in Aid</td></tr>
                                    <tr><td>AIDS</td><td>Acquired Immunodeficiency Syndrome</td></tr>
                                    <tr><td>AIE</td><td>Authority to Incur Expenditure</td></tr>
                                    <tr><td>AMREF</td><td>African Medical and Research Foundation</td></tr>
                                    <tr><td>ANC</td><td>Ante Natal Clinic</td></tr>
                                    <tr><td>ARR</td><td>Accounting Rate of Return</td></tr>
                                    <tr><td>ARR</td><td>Accounting Rate of Return</td></tr>
                                    <tr><td>ARV</td><td>Antiretroviral Therapy</td></tr>
                                    <tr><td>BADEA</td><td>Arab Bank for Economic Development</td></tr>
                                    <tr><td>CBEF</td><td>County Budget and Economic Forum</td></tr>
                                    <tr><td>CBEF</td><td>County Budget and Economic Forum</td></tr>
                                    <tr><td>CDRR</td><td>Consumption Data Report and Request</td></tr>
                                    <tr><td>CEO</td><td>Chief Executive Officer</td></tr>
                                    <tr><td>CIDP</td><td>County Integrated Development Plans</td></tr>
                                    <tr><td>CPA</td><td>Critical Path Analysis</td></tr>
                                    <tr><td>CPM</td><td>Critical Path Method</td></tr>
                                    <tr><td>CSO</td><td>Civil Society Organisation</td></tr>
                                    <tr><td>CT Scan</td><td>Computed Tomography Scan</td></tr>
                                    <tr><td>CU</td><td>Community Unit</td></tr>
                                    <tr><td>DHIS</td><td>District Health Information System</td></tr>
                                    <tr><td>DMS</td><td>Director of Medical Services</td></tr>
                                    <tr><td>DPOA</td><td>Durable Power of Attorney</td></tr>
                                    <tr><td>EAD</td><td>Economic Affairs Department</td></tr>
                                    <tr><td>EBM</td><td>Evidence Based Medicine</td></tr>
                                    <tr><td>EFT</td><td>Electronic Transfer of Funds</td></tr>
                                    <tr><td>EML</td><td>Essential Medical List</td></tr>
                                    <tr><td>EML</td><td>Essential Medicines list</td></tr>
                                    <tr><td>EMU</td><td>Efficiency Monitoring Units</td></tr>
                                    <tr><td>EOI</td><td>Expressions of Interest</td></tr>
                                    <tr><td>ETF</td><td>Electronic Transfer of Funds</td></tr>
                                    <tr><td>FBO</td><td>Faith Based Organisations</td></tr>
                                    <tr><td>FIF</td><td>Facility Improvement Fund</td></tr>
                                    <tr><td>FIF</td><td>Facility Improvement Fund</td></tr>
                                    <tr><td>GRV</td><td>Goods Received Voucher</td></tr>
                                    <tr><td>HDU</td><td>High Dependency Unit</td></tr>
                                    <tr><td>HFC</td><td>Health Facility committee</td></tr>
                                    <tr><td>HIV</td><td>Human Immunodeficiency Virus</td></tr>
                                    <tr><td>HMC</td><td>Health Management Committee</td></tr>
                                    <tr><td>HMC</td><td>Hospital Management Committee</td></tr>
                                    <tr><td>HMIS</td><td>Health Management Information Systems</td></tr>
                                    <tr><td>HMT</td><td>Hospital Management Team</td></tr>
                                    <tr><td>HRD</td><td>Human Resource Development</td></tr>
                                    <tr><td>HRH</td><td>Human Resources for Health</td></tr>
                                    <tr><td>HRIS</td><td>Human Resources Information System</td></tr>
                                    <tr><td>HRM</td><td>Human Resource Management</td></tr>
                                    <tr><td>HRMIS</td><td>Human Resources Management Information System</td></tr>
                                    <tr><td>HSM</td><td>Health System Management</td></tr>
                                    <tr><td>HSSF</td><td>Health Services Support Fund</td></tr>
                                    <tr><td>ICU</td><td>Intensive Care Unit</td></tr>
                                    <tr><td>IFMIS</td><td>Integrated Financial Management Information System</td></tr>
                                    <tr><td>IMCI</td><td>Integrated Management of Childhood Illnesses</td></tr>
                                    <tr><td>IPPD</td><td>Integrated Personal Payroll Database</td></tr>
                                    <tr><td>IRR</td><td>Internal Rate of Return</td></tr>
                                    <tr><td>ISO</td><td>International Standardisation Organisation</td></tr>
                                    <tr><td>IT</td><td>Information Technology</td></tr>
                                    <tr><td>KEMRI</td><td>Kenya Medical Research Institute</td></tr>
                                    <tr><td>KEMSA</td><td>Kenya Medical Supplies Agency</td></tr>
                                    <tr><td>KFW</td><td>German Federal Government</td></tr>
                                    <tr><td>KHPF</td><td>Kenya Health Policy Framework</td></tr>
                                    <tr><td>KMTC</td><td>Kenya Medical Training College</td></tr>
                                    <tr><td>KNBS</td><td>Kenya National Bureau of Standards</td></tr>
                                    <tr><td>KQMH</td><td>Kenya Quality Model for Health</td></tr>
                                    <tr><td>LCD</td><td>Liquid Crystal Display</td></tr>
                                    <tr><td>LPO</td><td>Local Purchase Order</td></tr>
                                    <tr><td>LSO</td><td>Local Service Order</td></tr>
                                    <tr><td>M&E</td><td>Monitoring and Evaluation</td></tr>
                                    <tr><td>MDA</td><td>Ministries, Departments and Agencies</td></tr>
                                    <tr><td>MDG</td><td>Millennium Development Goal</td></tr>
                                    <tr><td>MEDS</td><td>Mission for Essential Drugs and Supplies</td></tr>
                                    <tr><td>MOH</td><td>Ministry of Health</td></tr>
                                    <tr><td>MOMS</td><td>Ministry of Medical Services</td></tr>
                                    <tr><td>MOPHS</td><td>Ministry of Public Health and Sanitation</td></tr>
                                    <tr><td>MSH</td><td>Management Sciences for Health</td></tr>
                                    <tr><td>MTEF</td><td>Medium Term Expenditure Framework</td></tr>
                                    <tr><td>MTEF</td><td>Medium Term Expenditure Framework</td></tr>
                                    <tr><td>MTP</td><td>Medium Term Plan</td></tr>
                                    <tr><td>MTP</td><td>Medium Term Plan</td></tr>
                                    <tr><td>NGO</td><td>Non-Governmental Organisations</td></tr>
                                    <tr><td>NHIF</td><td>National Hospital Insurance Fund</td></tr>
                                    <tr><td>NHIF</td><td>National Hospital Insurance Fund</td></tr>
                                    <tr><td>NHIS</td><td>National Hospital Information System</td></tr>
                                    <tr><td>NPV</td><td>Net Present Value</td></tr>
                                    <tr><td>NPV</td><td>Net Present Value</td></tr>
                                    <tr><td>NQCL</td><td>National Quality Control Laboratory</td></tr>
                                    <tr><td>NQCL</td><td>National Quality Control Laboratory</td></tr>
                                    <tr><td>NSSF</td><td>National Social Security Fund</td></tr>
                                    <tr><td>NSSF</td><td>National Social Security Fund</td></tr>
                                    <tr><td>OP</td><td>Operational Plan</td></tr>
                                    <tr><td>PAS</td><td>Patient Administrative Systems</td></tr>
                                    <tr><td>PAYE</td><td>Pay As You Earn</td></tr>
                                    <tr><td>PDCA</td><td>Plan-Do-Check-Act</td></tr>
                                    <tr><td>PERT</td><td>Project Evaluation Review and Technique</td></tr>
                                    <tr><td>PFM</td><td>Public Finance Management</td></tr>
                                    <tr><td>PMP</td><td>Performance Monitoring Plan</td></tr>
                                    <tr><td>POA</td><td>Power of Attorney</td></tr>
                                    <tr><td>PPB</td><td>Pharmacy and Poisons Board</td></tr>
                                    <tr><td>PPB</td><td>Pharmacy and Poisons Board</td></tr>
                                    <tr><td>PPB</td><td>Pharmacy and Poisons Board</td></tr>
                                    <tr><td>PPM</td><td>Planned Preventive Maintenance</td></tr>
                                    <tr><td>PPOA</td><td>Public Procurement Oversight Authority</td></tr>
                                    <tr><td>QA</td><td>Quality Assurance</td></tr>
                                    <tr><td>QI</td><td>Quality Improvement</td></tr>
                                    <tr><td>QIT</td><td>Quality Improvement Teams</td></tr>
                                    <tr><td>RBM</td><td>Results-Based Management</td></tr>
                                    <tr><td>RCA</td><td>Root Cause Analysis</td></tr>
                                    <tr><td>RTGS</td><td>Real Time Gross Transfer</td></tr>
                                    <tr><td>SAGA</td><td>Semi-Autonomous Government Agency</td></tr>
                                    <tr><td>SPA</td><td>Service Provision Assessment</td></tr>
                                    <tr><td>SWGs</td><td>Sector Working Groups</td></tr>
                                    <tr><td>SWOT</td><td>Strengths, Weaknesses, Opportunities, and Threats</td></tr>
                                    <tr><td>TOR</td><td>Terms of Reference</td></tr>
                                    <tr><td>TQM</td><td>Total Quality Management</td></tr>
                                    <tr><td>TQMS</td><td>Total Quality Management System</td></tr>
                                    <tr><td>US$</td><td>United States Dollar</td></tr>
                                    <tr><td>USAID</td><td>United States Agency for International Development</td></tr>
                                    <tr><td>VAT</td><td>Value Added Tax</td></tr>
                                    <tr><td>WBS</td><td>Work Breakdown Structure</td></tr>
                                    <tr><td>WEI</td><td>Work Environment Improvement</td></tr>
                                    <tr><td>WHO</td><td>World Health Organisation</td></tr>
                                    <tr><td>WIT</td><td>Work Improvement Team</td></tr>
                                </tbody>
                            </table>
                            <p style="text-align: right; font-style: italic;">viii-xii</p>
                        </div>
                    </section>

                    <!-- LIST OF TABLES -->
                    <section class="content-section" id="list-of-tables">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">📋</span>
                                LIST OF TABLES
                            </h2>
                        </div>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Table 1.1 Health Systems Management Objectives 6</li>
                                <li>Table 1.2 Public Sector Health Service Delivery System 10</li>
                                <li>Table 1.3 Services Provided in Various Levels of Health Facilities 14</li>
                                <li>Table 2.1 Leadership Competencies 26</li>
                                <li>Table 2.2 Comparison of Management and Leadership Competencies 26</li>
                                <li>Table 2.3 Characteristics of an Effective Team 33</li>
                                <li>Table 2.4 Leadership Activities at Different Group Formation Stages 40</li>
                                <li>Table 2.5 Causes of Conflict in Organizations 43</li>
                                <li>Table 3.1 Benefits of a Strong HRM System 56</li>
                                <li>Table 3.2 Different ways of Determining Staffing Requirements 58</li>
                                <li>Table 3.3 Five Steps in Developing a HRM Plan 59</li>
                                <li>Table 3.4 Strategic HRH Workshop Agenda 65</li>
                                <li>Table 3.5 Sample of a Summary List of HRH Programmes 67</li>
                                <li>Table 3.6 HRH Statistics 68</li>
                                <li>Table 3.7 Classification of Training Methods in Organisations 79</li>
                                <li>Table 3.8 Examples of employee Relationship Problems 86</li>
                                <li>Table 4.1 Balanced Score Card Dimensions 102</li>
                                <li>Table 4.2 Kotter's 8 steps for Organisational Change 103</li>
                                <li>Table 4.3 Bruce Tuckman's Four Stages of Team Development 104</li>
                                <li>Table 4.4 Common Phases in People's Reaction to Change. 111</li>
                                <li>Table 5.1 Public Procurement Act- Categories of Public Entities 115</li>
                                <li>Table 6.1: Categories of Equipment and Technologies 134</li>
                                <li>Table 6.2: Responsibility for Managing Health Facility Assets 139</li>
                                <li>Table 7.1 Examples of Risk Factors in a Hospital Set-up 152</li>
                                <li>Table 7.2 The Plan-Do-Check-Act (PDCA) Cycle 154</li>
                                <li>Table 7.3 Sample Check Sheet: Hospital Infections Occurrences Checklist 157</li>
                                <li>Table 8.1 Submission Dates for Statutory Deductions 187</li>
                                <li>Table 9.1 Barriers to Effective Communication 217</li>
                                <li>Table 10.1 Kenya Health Policy 2012-2030 Framework for Policy Directions 238</li>
                                <li>Table 11.1 Forms of Civil Wrongs in Health Service Provision 247</li>
                                <li>Table 12.1 Sources of Health Information 271</li>
                                <li>Table 13.1 Logical Framework Matrix Structure 284</li>
                                <li>Table 13.2 Activity Scheduling Using Critical Path Analysis 288</li>
                                <li>Table 14.1 Health Related Millennium Development Goals 297</li>
                                <li>Table 14.2 Vision 2030: Key Focus Areas in the Health Sector 299</li>
                                <li>Table 14.3 Kenya Health Policy Objectives and Activities 304</li>
                                <li>Table 14.4 Roles and Responsibilities in the State Department of Health 308</li>
                                <li>Table 14.5 Responsibilities and Key Policy Areas of Directorates in the State Department of Health 309</li>
                                <li>Table 14.6 SAGAs and their Key Mandates 310</li>
                                <li>Table 14.7 Structure for County Department Responsible for Health 311</li>
                                <li>Table 14.8 Other Structural Units at the County Level 313</li>
                                <li>Table 14.9 Stewardship Responsibilities at the Different Levels of the Health Sector 314</li>
                                <li>Table 14.10 Governance Responsibilities the Health Sector 315</li>
                                <li>Table 14.11 Health Sector Partnership, Governance, and Stewardship Processes 317</li>
                                <li>Table 17.1 Type and Sources of Information Required for Monitoring in the Health Sector 373</li>
                                <li>Table 17.2 Work Plan Template 382</li>
                            </ul>
                            <p style="text-align: right; font-style: italic;">xiii-xiv</p>
                        </div>
                    </section>

                    <!-- LIST OF FIGURES -->
                    <section class="content-section" id="list-of-figures">
                        <div class="section-header">
                            <h2 class="section-title">
                                <span class="title-icon">📊</span>
                                LIST OF FIGURES
                            </h2>
                        </div>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Figure 1.1 Health Systems Building Block Interactions...4</li>
                                <li>Figure 1.2 Structure of the Health Care System in Kenya...8</li>
                                <li>Figure 2.1 Leading and Managing for Results Model...18</li>
                                <li>Figure 2.2 Leading and Managing Framework...23</li>
                                <li>Figure 2.3 Integrated Leading and Managing Process...24</li>
                                <li>Figure 2.4 The Challenge Model...31</li>
                                <li>Figure 2.5 Team Development Process...39</li>
                                <li>Figure 3.1 Human Resources for Health Action Framework...58</li>
                                <li>Figure 3.2 Recruitment Processes...70</li>
                                <li>Figure 3.3 Performance Management’s Five Key Components...73</li>
                                <li>Figure 4.1 Force Field Analysis...97</li>
                                <li>Figure 5.1 Commodity Management Framework...125</li>
                                <li>Figure 5.2 Good Storage Practices...127</li>
                                <li>Figure 5.3 Inventory Management Cycle...128</li>
                                <li>Figure 6.1: The Healthcare Technology Management Cycle...142</li>
                                <li>Figure 7.1 Pareto Chart...157</li>
                                <li>Figure 7.2 Sample Control Chart...158</li>
                                <li>Figure 9.1 Communication Skills...212</li>
                                <li>Figure 9.2 The Main Elements Involved in Non-Verbal Communication...213</li>
                                <li>Figure 9.3 The Communication Cycle...215</li>
                                <li>Figure 9.4: Oral Communicating Skills...220</li>
                                <li>Figure 9.5: Some Examples of Kenya Sign Language...224</li>
                                <li>Figure 10.2 Kenya Health Policy 2012-2030 Framework...239</li>
                                <li>Figure 12.1: Components of a Health Information system...268</li>
                                <li>Figure 12.2: Structure and Responsibilities in the National Health Information System...269</li>
                                <li>Figure 13.1 The Project Cycle...379</li>
                                <li>Figure 13.2 Fishbone Diagram...287</li>
                                <li>Figure 13.3 Critical Path Analysis Flow Diagrams...288</li>
                                <li>Figure 14.1 Vision 2030 Goals and Strategies for Health Care...301</li>
                                <li>Figure 14.2 Structure of the State Department for Health...307</li>
                                <li>Figure 16.1 Disaster Management Cycle...357</li>
                                <li>Figure 17.1 The M&E Conceptual Framework...376</li>
                                <li>Figure 17.2 Sample Project Achievements Table...386</li>
                            </ul>
                            <p style="text-align: right; font-style: italic;">xv-xvi</p>
                        </div>
                    </section>

                </main>

                <!-- BOTTOM NAVIGATION -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="../index.html" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Index</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="topic-01.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                </nav>

            </article>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../js/theme.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/interactions.js"></script>
    <script src="../js/quiz.js"></script>
</body>

</html>

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 01: Organisation of the Health Care System in Kenya.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organisation of the Health Care System in Kenya | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-00.html" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Preliminaries</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="topic-02.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 5.8%;"></div>
                        </div>
                        <span class="progress-text">Topic 1 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>🏥</span>
                        <span>Module 1</span>
                    </div>
                    <h1 class="document-title">Organisation of the Health Care System in Kenya</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Health Systems & Functions</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>20 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Introduction / Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To enhance students knowledge and understanding of the health care system in Kenya</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Explain the concepts of health systems and health systems management;</li>
                                <li>Identify and discuss the structure, roles and responsibilities of the Kenya health system.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>1.1 Health systems</li>
                                    <li>1.2 Functions of a health system</li>
                                    <li>1.3 Health system management</li>
                                    <li>1.4 The Kenya national health system</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Laptop and LCD projector, Whiteboards</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 Hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Introduction to health systems management</td>
                                        <td>To introduce students to the concepts of health systems and health systems management</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Kenya national health system</td>
                                        <td>To identify and discuss the structure, roles and responsibilities of the Kenya health system</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 1.1 Health Systems -->
                    <section class="content-section" id="section-1-1">
                        <div class="section-header">
                            <div class="section-number">1.1</div>
                            <h2 class="section-title">Health Systems</h2>
                        </div>
                        <div class="content-card">
                            <p>A health system can be defined as structured and interrelated work of all agencies contributing to health within a country and “includes efforts to influence determinants of health as well as more direct health improving activities”. A health system is therefore more than the pyramid of publicly owned facilities that deliver personal health services. It includes, for example, a mother caring for a sick child at home; private providers; behaviour change programmes; vector-control campaigns; health insurance organisations; occupational health and safety legislation. It also includes inter-sectoral action by health staff, for example, encouraging the Ministry of Education to promote female education, a well known determinant of better health.</p>
                            <p>A health system consists of all organisations, people and actions whose primary intent is to promote, restore or maintain health. This definition includes the full range of stakeholders in a health sector, for example, private and not-for-profit service providers, health insurance organisations, public health legislation, community workers, health educators, researchers, patients, and consumers, as well as mothers caring for sick children (Health Systems 20/20).</p>
                        </div>
                    </section>

                    <!-- 1.2 The Functions of a Health System -->
                    <section class="content-section" id="section-1-2">
                        <div class="section-header">
                            <div class="section-number">1.2</div>
                            <h2 class="section-title">The Functions of a Health System</h2>
                        </div>
                        <div class="content-card">
                            <p>According to WHO (2007), a health system can be analysed in its totality by using different groups or blocks. These building blocks are:</p>
                            <ul class="enhanced-list">
                                <li>Leadership and governance</li>
                                <li>Health financing</li>
                                <li>Service delivery</li>
                                <li>Human resources for health (HRH)</li>
                                <li>Medical products, vaccines and technologies</li>
                                <li>Health information systems (HIS)</li>
                            </ul>
                            <p>The six building blocks contribute to the strengthening of a health system in different ways. A dynamic relationship exists between the various components in a health system. The multiple relationships and interactions among the blocks constitute a functioning health system. Each building block interacts with and influences the others, and is in turn affected by them. These relations and interactions cut across not only the health system building blocks but also the different sectors and stakeholders that constitute the system. Figure 1.1 below illustrates relationships among the building blocks.</p>
                            
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-55f99cf0.jpeg" alt="Health Systems Building Block Interactions" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 1.1 Health Systems Building Block Interactions</p>
                                <p class="figure-caption">Source: WHO (2007).</p>
                            </div>

                            <p>The six building blocks contribute to the strengthening of health systems in different ways. Some cross-cutting components such as leadership/governance and health information systems provide the basis for the overall policy and regulation of all the other health system blocks. Key input components to the health system include specifically financing and the health workforce. A third group, namely medical products and technologies and service delivery, reflects the immediate outputs of the health system, i.e. the availability and distribution of care.</p>
                            
                            <ul class="enhanced-list">
                                <li>Good health services are those which deliver effective, safe, quality personal and non-personal health interventions to those that need them, when and where needed, with minimum waste of resources.</li>
                                <li>A well-performing health workforce is one that works in ways that are responsive, fair and efficient to achieve the best health outcomes possible, given available resources and circumstances. This means there are sufficient staff, fairly distributed; they are competent, responsive and productive.</li>
                                <li>A well-functioning health information system is one that ensures the production, analysis, dissemination and use of reliable and timely information on health determinants, health system performance and health status</li>
                                <li>A well-functioning health system ensures equitable access to essential medical products, vaccines and technologies of assured quality, safety, efficacy and cost-effectiveness, and their scientifically sound and cost-effective use.</li>
                                <li>A good health financing system raises adequate funds for health, in ways that ensure people can use needed services, and are protected from financial catastrophe or impoverishment associated with having to pay for them. It provides incentives for providers and users to be efficient.</li>
                                <li>Leadership and governance involves ensuring strategic policy frameworks exist and are combined with effective oversight, coalition building, regulation, attention to system-design and accountability.</li>
                            </ul>
                            
                            <p>This unit of study is based on the above Health Systems Framework and relevant Kenya health service delivery frameworks as discussed in other units. Eleven sub-components have been created out of the six WHO components and presented as 17 units of study in order to highlight all areas of relevance in the Kenya context, meet curriculum requirements and to facilitate teaching.</p>
                        </div>
                    </section>

                    <!-- 1.3 Health Systems Management -->
                    <section class="content-section" id="section-1-3">
                        <div class="section-header">
                            <div class="section-number">1.3</div>
                            <h2 class="section-title">Health Systems Management</h2>
                        </div>
                        <div class="content-card">
                            <p>Health System Management (HSM) is the coordination of provision of preventive, curative, promotional or rehabilitative health care services through effective management of facilities, HRH, financial and other resources. The WHO defines a health services manager as someone who spends a substantial proportion of his/her time managing:</p>
                            <ul class="enhanced-list">
                                <li>The volume and coverage of services including planning, implementation and evaluation;</li>
                                <li>Resources such as staff, budgets, drugs, equipment, buildings and information;</li>
                                <li>External relations and partners, including service users.</li>
                            </ul>
                            <p>At the operational or service delivery level, health managers are responsible for converting health systems input and resources such as finance, staff, supplies, equipment, medicines and infrastructure, into effective services that produce health results. At the policy level, health managers provide strategic direction on policy matters; manage overall resource allocation and monitoring policy targets and outcomes (WHO).</p>
                            
                            <p>The primary objectives of an effective health system management are as outlined in Table 1.1:</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 1.1 Health Systems Management Objectives</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Objective</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>To ensure adequate numbers of managers</td>
                                            <td>
                                                <ul style="margin: 0; padding-left: 1rem;">
                                                    <li>By establishing appropriate numbers and calibre required at each level of the health system</li>
                                                    <li>By identifying the critical levels of HSM in the health system</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>To ensure managers have appropriate competences</td>
                                            <td>
                                                <ul style="margin: 0; padding-left: 1rem;">
                                                    <li>By identifying the knowledge, skills, attitudes and behaviour required at various managerial levels?</li>
                                                    <li>By identifying the necessary qualifications and experience at each level</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Managing critical support systems</td>
                                            <td>Critical support systems include strategic planning and budgeting; financial management; HRH management, infrastructure and logistics management; procurement and distribution of drugs and other commodities; information management and monitoring</td>
                                        </tr>
                                        <tr>
                                            <td>Creating an enabling working environment</td>
                                            <td>These include clear definition and communication of roles and responsibilities, financial and non-financial incentives, performance and accountability</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Necessary conditions -->
                        <div class="content-card content-card--alternate">
                            <h3 class="card-title">Necessary conditions for effective health systems management</h3>
                            <p>Effective management and leadership in health is a factor of various conditions (WHO, 2007). These include:</p>
                            <ul class="enhanced-list">
                                <li>Availability of an adequate number of managers at all levels of the health system; Health managers and other Human Resources for Health (HRH) members need to be selected on merit;</li>
                                <li>Managers have the appropriate competences – knowledge, skills and understanding of the role, tasks and purpose of the services they deliver;</li>
                                <li>Critical management support systems are functional – basic support systems function well – clear administrative rules and regulations; well planned and timely delivery of supplies, equipment and drugs; functioning infrastructure and health technology; transparent financial and procurement processes;</li>
                                <li>A working environment which enhances managers' performance;</li>
                                <li>Well planned and monitored activities.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- 1.4 The Kenya National Health System -->
                    <section class="content-section" id="section-1-4">
                        <div class="section-header">
                            <div class="section-number">1.4</div>
                            <h2 class="section-title">The Kenya National Health System</h2>
                        </div>
                        <div class="content-card">
                            <p>The health care system in Kenya include the National Government Health system and a County Government Health system, national and county government institutions engaged in health services delivery, research for health, health financing institution, health regulations, all health workers both in the public and private sectors, traditional, complementary and alternative health care providers, and all institutions and professional societies (like the Kenya Medical Association) who are involved in ensuring the promotion, prevention, control and treatment of illness, care and or rehabilitation of health.</p>
                            
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-6d99a2da.jpeg" alt="Structure of the Health Care System in Kenya" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 1.2 Structure of the Health Care System in Kenya</p>
                            </div>

                            <h3 style="margin-top: var(--space-6);">Public Sector Health Service Delivery</h3>
                            <p>The health sector comprises the public system, with major players including the MOH, MOMS and Parastatal organisations, and the private sector, which includes private for-profit, non-governmental organizations (NGOs) and faith-based organizations (FBO) facilities. Health services are provided through a network of health facilities countrywide, with the public sector system accounting for about 50 per cent of these facilities.</p>
                            <p>The public sector health service delivery is organised on a six level tier system as outlined below.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 1.2 Public Sector Health Service Delivery System</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Level</th>
                                            <th>Activities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Level 1: Community</strong></td>
                                            <td>This is the foundation of the health service delivery priorities. Through engagement with health workers, communities define their own priorities and thereby develop ownership and commitment to health services. Health behaviour change activities through public health information sharing and skills enhancement.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Level 2: Dispensary/clinic</strong></td>
                                            <td>Dispensaries and clinics primarily handle promotive and preventive care. They are the health system’s first line of contact with patients, but in some areas, health centres or even sub-county hospitals are effectively the first points of contact. They are staffed by enrolled nurses, public health technicians, and dressers (medical assistants).<br><br>Services- Curative, rehabilitative, preventive, and promotive services, health census of the population in catchment area, record-keeping and reporting activities, coordinating information flow from facilities in catchment area.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Level 3: Health centre, maternity home, nursing home</strong></td>
                                            <td>The network of health centres provides many of the ambulatory health services. They generally offer preventive and curative services, mostly adapted to local needs. Health centres are staffed with midwives, nurses, clinical officers, and occasionally by doctors. They provide a wider range of services, such as basic curative and preventive services for adults and children, as well as reproductive health services. They also provide minor surgical services such as incision and drainage. They augment their service coverage with outreach services, and refer severe and complicated conditions to the appropriate level, such as the County hospital.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Level 4: Primary hospital (Sub-county hospital)</strong></td>
                                            <td>Sub-County hospitals provide the first referral level. They form an integral part of the County health system. They provide:<br>• Curative and rehabilitative services<br>• Clinical supportive and supervision, health behaviour change, referral services, logistical support to lower facilities<br>• Co-ordination of collection and dissemination of health information flow</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Level 5: Secondary hospital (County referral hospital)</strong></td>
                                            <td>Level 5 facilities provide referral services at the county level. They:<br>• Provide specialised care, involving skills and competence not available at lower level hospitals<br>• Oversee the implementation of health policy at the county level, maintain quality standards, and coordinate and control all county health activities.<br>• Provide training services and internship for health workers, referral for curative and specialised care services, management and coordination support to lower level facilities.<br>Health professionals working at this level include medical professionals such as general surgeons, general medical physicians, paediatricians, general and specialised nurses, midwives, and public health staff.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Level 6: Tertiary hospital (National referral hospital)</strong></td>
                                            <td>National referral hospitals: There are two national referral hospitals in the country: Kenyatta National Hospital in Nairobi and Moi Referral and Teaching Hospital in Eldoret. The equivalent private referral hospitals are Nairobi Hospital and Aga Khan University Hospital.<br>Specialised hospitals (Psychiatric and Rehabilitation Hospitals): These facilities render specialist psychiatric and rehabilitation hospital services.<br>National referral hospitals are at the apex of the health care system. They provide sophisticated diagnostic, therapeutic, and rehabilitative services. They also offer training services of specialised health cadres, specialised care services, provision of internship, management and coordination support to the provinces and districts, partnership and linkages activities at MOH level.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Ministry of Health (2006).</p>
                            </div>

                            <p>The public health service is supplemented by privately owned and operated hospitals and clinics and faith-based organisation’s hospitals and clinics as well as their related community services.</p>
                        </div>

                        <!-- Linkages -->
                        <div class="content-card">
                            <h3 class="card-title">Linkages and responsibilities in the health care system</h3>
                            <p>The Constitution of Kenya (2010) assigns the larger portion of delivery of health services to Counties with the exception being the National Referral Services. Counties bear overall responsibilities for planning, financing, coordinating delivery and monitoring of health services toward the fulfilment of right to ‘the highest attainable standard of health’.</p>
                            <p>Responsibilities for health services are exercised at three levels:</p>
                            <ol class="enhanced-list">
                                <li>The Ministry of Health (National Directorates for Health).</li>
                                <li>County Health Management Teams (CHMT).</li>
                                <li>County Health Facility Management Teams.</li>
                            </ol>
                        </div>

                        <!-- Ministry of Health -->
                        <div class="content-card">
                            <h3 class="card-title">The Ministry of Health</h3>
                            <p>Under the devolved system of government, the National Government through the Ministry of Health is responsible for provision of overall direction through policy formulation, national strategic planning, priority setting, budgeting and resource mobilisation, regulating, setting standards, formulating guidelines, monitoring and evaluation, and provision of technical backup to the county level.</p>
                            <p>Key mandates of the MOH are:</p>
                            <ol class="enhanced-list">
                                <li>Development of national policy;</li>
                                <li>Provision of technical support at all levels;</li>
                                <li>Monitoring quality and standards in health services provision;</li>
                                <li>Provision of guidelines on tariffs for health services;</li>
                                <li>Conducting studies required for administrative or management purposes.</li>
                            </ol>
                            <p>The Chief Technical Officer of the Ministry of Health is the Director of Medical Services (DMS). The role of the MoH is to provide strategic direction through national health planning, development of service and quality standards, health financing, HRH planning, monitoring and evaluation. These national functions are distributed amongst six directorates namely:</p>
                            <ol class="enhanced-list">
                                <li>Administrative Services;</li>
                                <li>Health Standards, Quality Assurance and Regulations;</li>
                                <li>Curative and Rehabilitative Services;</li>
                                <li>Policy Planning and Health Care Financing;</li>
                                <li>Preventive and Promotive Services;</li>
                                <li>National Quality Control Laboratory.</li>
                            </ol>
                            <p>The role of the National Directorates for Health is to provide overall direction – policy formulation, national strategic planning, priority setting, budgeting and resource mobilisation, regulating, setting standards, formulating guidelines, monitoring and evaluation, and provision of technical backup to the county level.</p>
                        </div>

                        <!-- County Government -->
                        <div class="content-card">
                            <h3 class="card-title">County Government</h3>
                            <p>At county level, the Kenya Health Policy 2012-2030 proposes the formation of county health departments whose role will be to create and provide an enabling institutional and management structure responsible for “coordinating and managing the delivery of health care mandates and services at the county level”. In addition to the county health departments, the policy calls for the formation of county health management teams. These will provide “professional and technical management structures” in each county to coordinate the delivery of health services through health facilities available in each county.</p>
                            <p>The role of the county government is to provide strategic and operational leadership and stewardship for overall health management in the county, including provision of health services, resource mobilisation, creation of linkages with national level referral health services, monitoring and evaluation, coordination and collaboration with state and non-state stakeholders at the county level.</p>
                            <p>Within each county, the Health Facility Management Teams are charged with the responsibility of providing health services, developing and implementing facility health plans, coordinating and collaborating with stakeholders through County Health Stakeholder Forums, supervising, continuously monitoring and evaluating health service provision and implementing health policies.</p>
                        </div>

                        <!-- Services Provided (Table 1.3) -->
                        <div class="content-figure" data-lightbox="true">
                            <div class="figure-image-wrapper">
                                <img src="../assets/images/image-20260113-bfff8ead.jpeg" alt="Services Provided in Various Levels of Health Facilities" class="figure-image">
                                <div class="figure-overlay">
                                    <span class="overlay-icon">🔍</span>
                                    <span class="overlay-text">Click to zoom</span>
                                </div>
                            </div>
                            <p class="figure-caption">Table 1.3 Services Provided in Various Levels of Health Facilities</p>
                            <p class="figure-caption">Source: Kenya Health Policy 2012-2030.</p>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Health Systems 20/20 (2012) The Health System Assessment Approach: A How-To Manual. Version 2.0. Available at &lt;www.healthsystemassessment.org&gt; [Accessed 24 February 2014].</li>
                                <li>Management Sciences for Health (2005) Managers Who Lead. A handbook for improving Health services (3<sup>rd</sup> ed). Cambridge: MSH</li>
                                <li>Management Sciences for Health. Responsibility and Authority Mapping Process (RAMP) tool.</li>
                                <li>Ministry of Health (2006) Norms and Standards for Health Services Delivery [online]. Available at &lt;https: www.k4health.org&gt; [Accessed 24 February 2014].</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. Health Sector Strategic and Investment Plan (KHSSP). July 2013-June 2017.</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. Kenya Health Policy. 2012-1230</li>
                                <li>WHO (2007) ‘Everybody’s Business. Strengthening Health Systems to Improve Health Outcomes: WHO’s Framework For Action’ [online]. Available at &lt;http: www.who.int&gt; [Accessed 24 February 2014].</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of the Health Care System Organisation.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-01-quiz"
                         data-quiz-js="../quizzes/topic-01-quiz.js">
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
                        <a href="topic-00.html" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Preliminaries</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="topic-02.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 09: Communication in Health Services Delivery.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Communication in Health Services Delivery | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-08.html" class="nav-button nav-button--previous">
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

                        <a href="topic-10.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 52.9%;"></div>
                        </div>
                        <span class="progress-text">Topic 9 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>💬</span>
                        <span>Module 9</span>
                    </div>
                    <h1 class="document-title">Communication in Health Services Delivery</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Communication Skills</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>20 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To equip students with knowledge and understanding of the role of communication in health delivery and management</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Explain different forms of communication;</li>
                                <li>Identify the barriers to communication and how to overcome them;</li>
                                <li>Explain necessary skills for effective communication;</li>
                                <li>Identify alternative forms of communication.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>9.1 Nature of communication</li>
                                    <li>9.2 Communication barriers</li>
                                    <li>9.3 Alternative forms of communication</li>
                                    <li>9.4 Skills for effective Communication</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, Flip charts, Marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>Nature of communication</td>
                                        <td>To introduce students to the purpose and forms communication</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions.</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>1</td>
                                        <td>Communication Barriers</td>
                                        <td>To identify and discuss barriers to effective communication</td>
                                        <td>As above</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>Alternative forms of communication</td>
                                        <td>To identify and discuss alternative forms of communication</td>
                                        <td>As above</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>1</td>
                                        <td>Skills for effective communication</td>
                                        <td>To identify and discuss the necessary skills to effective communication</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 9.1 Nature of Communication -->
                    <section class="content-section" id="section-9-1">
                        <div class="section-header">
                            <div class="section-number">9.1</div>
                            <h2 class="section-title">Nature of Communication</h2>
                        </div>
                        <div class="content-card">
                            <p>Communication can be defined as the act of conveying thoughts or information. It can also be defined as the exchange of information between people. Being able to communicate well is essential to effective health services delivery. Good communication skills are vital for health professionals because they help them to:</p>
                            <ul class="enhanced-list">
                                <li>Develop positive relationships with people using health services and their families and friends, so they can understand and meet their needs;</li>
                                <li>Develop positive relationships with work colleagues and other professionals;</li>
                                <li>Share information with people using their services by providing and receiving information;</li>
                                <li>Report on the work they do.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Communication Context</h3>
                            <p>Context refers to the circumstances in which an event occurs, a setting.</p>

                            <h4 class="card-title">One-to-one communication</h4>
                            <p>One-to-one means one person communicating with another person with no other people joining in. It is important to create the right atmosphere by being friendly and showing interest in and respect for the other person. The conversation needs a start, e.g. ‘Good morning’, a middle, when you both discuss what you need to talk about, and an ending, e.g. ‘See you on your next appointment.’</p>

                            <h4 class="card-title">Group communication</h4>
                            <p>Group communication is difficult because it only works properly if everyone gets involved. In most groups, there are people who speak a lot and others who rarely speak, if at all, because they feel uncomfortable speaking in front of a group of people or they are just not interested. Groups work best if there is a team leader who encourages everyone to have a say in turn, rather than everyone trying to speak at once.</p>

                            <h4 class="card-title">Formal and informal communication</h4>
                            <p>Formal communication tends to start with a greeting such as ‘Good afternoon. How are you feeling today?’ It can be used to show respect for others. Formal conversation is often used when a professional person, such as a health worker, speaks to someone using a service. It is clear, correct and avoids misunderstanding. Communication with a supervisor is usually formal. A supervisor is usually more distant from those they manage so that if they need to, for example, issue a formal warning to someone, it is less awkward for both parties than if they are friends.</p>
                            <p>Informal communication is often used between people who know each other well, like friends and family is more likely to start with ‘Hi, how are you?’ and allows for more variety according to the area someone lives in or culture. For example, in some places, it is common for people to call other people ‘brother or sister’ even if they have only just met. People usually communicate more informally with friends, including those they work closely with on a day-to-day basis.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-ef01bc92.jpeg" alt="Communication Skills Needed by People Working in a Health Environment" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 9.1: Communication Skills Needed by People Working in a Health Environment</p>
                                <p class="figure-caption">Source: Pearson Education (2014).</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Forms of communication</h3>
                            <p>There are three main forms of communication namely: verbal, non-verbal and written. We can also use technology to communicate.</p>

                            <h4 class="card-title">Verbal communication</h4>
                            <p>Verbal communication uses words to present ideas, thoughts and feelings. Good verbal communication is the ability to both explain and present your ideas clearly through the spoken word and to listen carefully to other people. This involves using a variety of approaches and styles appropriate to the audience you are addressing.</p>

                            <h4 class="card-title">Non-verbal communication</h4>
                            <p>This refers to the messages we send out to express ideas and opinions without talking. This might be through the use of body language, facial expressions, gestures, tone of voice, touch or contact, signs, symbols, pictures, objects and other visual aids. It is very important to be able to recognise what a person's body language is saying, especially when, as a health worker, you are dealing with someone who is in pain, worried or upset. You must also be able to understand the messages you send with your own body when working with other people.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-f2c673f5.jpeg" alt="The Main Elements Involved in Non-Verbal Communication" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 9.2 The Main Elements Involved in Non-Verbal Communication</p>
                                <p class="figure-caption">Source: Pearson Education (2014).</p>
                            </div>

                            <p><strong>Body language</strong> – The way we sit or stand, which is called posture, can send messages. Slouching on a chair can show a lack of interest in what is going on. Folded arms can suggest that you are feeling negative or defensive about a person or situation. Even the way we move can give out messages. For example, shaking your head while someone else is talking might indicate that you disagree with them or waving your arms around can indicate you are excited.</p>
                            <p><strong>Facial expression</strong> – We can often tell what someone is feeling by looking at their eyes. Our eyes become wider when we are excited or happy, attracted to, or interested in someone. A smile shows we are happy and a frown shows we are annoyed.</p>
                            <p><strong>Touch or contact</strong> – Touching another person can send messages of care, affection, power or sexual interest. It is important to think about the setting you are in and what you are trying to convey before touching a person in a health environment. An arm around a child who is upset about something in hospital or a nursery can go a long way to making them feel better. On the other hand, however, a teenager might feel intimidated by such contact from an older person.</p>
                            <p><strong>Signs, symbols and pictures</strong> – There are certain common signs or gestures that most people automatically recognise. For example, a wave of the hand can mean hello or goodbye. Thumbs up can mean that all is well. Pictures of all forms and objects also communicate messages. An X-ray and a model of a knee joint can more easily communicate to someone needing a knee replacement exactly what is involved.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Written Communication</h3>
                            <p>This is central to the work of any person providing a service in a health environment. This is important for records and writing reports. Different types of communication need different styles of writing but all require literacy skills. A more formal style of writing is needed when recording information about a patient. It would be unacceptable to use text message abbreviations.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Technological Aids</h3>
                            <p>Technology is moving so quickly now that we have many electronic aids to help us communicate. For example, mobile phones can be used to make calls. We can also use them to send text messages and emails. We have computers on which we can record, store and communicate health information very quickly and efficiently over long distances. Through video link, a health professional can participate in, or guide an operation taking place in a different physical location.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Communication Cycle</h3>
                            <p>Communication is a process. In order to effectively communicate, the parties involved must go through a communication process.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-0090797a.jpeg" alt="The Communication Cycle" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 9.3 The Communication Cycle</p>
                                <p class="figure-caption">Source: Pearson Education (2014).</p>
                            </div>

                            <div class="table-wrapper">
                                <table class="content-table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Idea occurs</strong></td>
                                            <td>Communication starts with an idea. You think of something you want to communicate. Communication always has a purpose. It might be used to pass on information or an idea, persuade someone to do something or to entertain or inspire</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Message coded</strong></td>
                                            <td>You think about how you are going to say what you are thinking and decide in what form the communication will be. For example, spoken word or sign language, email, letter. You put it into this form in your head.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>The communication cycle happens very quickly and subconsciously because we think three times faster than we speak. In reality, the stages of the communication cycle do not happen in sequence. The communication process is repeated backwards and forwards as long as the conversation goes on. The sender of the message becomes the receiver of a message sent back, the receiver becomes the sender and so on. Each person continues the conversation because they have to check that they have understood what the other person meant. They do this by listening to what the person says and asking questions about it or putting it in their own words and repeating them back, so reflecting what has been said. A conversation can therefore also be called an interaction.</p>
                        </div>
                    </section>

                    <!-- 9.2 Communication Barriers -->
                    <section class="content-section" id="section-9-2">
                        <div class="section-header">
                            <div class="section-number">9.2</div>
                            <h2 class="section-title">Communication Barriers</h2>
                        </div>
                        <div class="content-card">
                            <p>Some things stop communication from being effective. People who work in a health environment need to understand the barriers so they can overcome them. It is very important to be able to communicate effectively in a health or social care setting. A service user will not be able to take part in a discussion about their care or planning their future if they do not understand what is being said. Equally, the person providing the service cannot help if they cannot find a way to understand what the service user is trying to ask for. There are many factors that affect communication as illustrated in the table below.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 9.1 Barriers to Effective Communication</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Barrier</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sensory deprivation</td>
                                            <td>This occurs when someone cannot receive or pass on information because they have impairment to one or more of their senses, most commonly a visual or a hearing disability.</td>
                                        </tr>
                                        <tr>
                                            <td>Language barrier</td>
                                            <td>When someone speaks a different language or uses sign language, they may not be able to make any sense of information they are being given by someone trying to help them if that person does not speak their language.</td>
                                        </tr>
                                        <tr>
                                            <td>Jargon</td>
                                            <td>When a service provider uses technical language, the service user may not understand. For example, the doctor may say that a patient needs bloods and an MRI scan. That can sound very frightening to someone who has been rushed to hospital. It is better if the doctor explains that they need to take some blood to do some simple tests and then explains what a MRI scan is. Understanding the facts can make something seem less scary.</td>
                                        </tr>
                                        <tr>
                                            <td>Slang</td>
                                            <td>When a service user uses language that not everyone uses, such as saying they have a problem with their waterworks. This can mean their plumbing system but also having a problem going to the toilet. It may be appropriate to use slang with peers. However, in normal working with colleagues or service users, you should avoid using any language that can be misunderstood or misinterpreted or that which might cause offence.</td>
                                        </tr>
                                        <tr>
                                            <td>Dialect or pronunciation</td>
                                            <td>When people use different words or pronunciation for everyday objects or feelings depending on the part of the country they come from. Some communities pronounce certain letters of the alphabet differently. It may cause confusion if someone did not listen keenly.</td>
                                        </tr>
                                        <tr>
                                            <td>Acronyms</td>
                                            <td>When words are shortened to initials. There are lots of acronyms in health and they can be very confusing. Sometimes people do not realise that not everyone knows what they mean and mistakes can be made or people can feel left out if they are not familiar with the terms. A health care professional might say, “you will need to take these tablets TDS” (which means three times a day). This also relates to jargon.</td>
                                        </tr>
                                        <tr>
                                            <td>Cultural differences</td>
                                            <td>When the same thing means different things in two cultures, communication can be difficult. For example, it is seen as polite and respectful to make eye contact when speaking to someone in some cultures but not in others where this may be taken as being rude and defiant. There are also cultural barriers based on age differences between a service seeker and service provide where an older person cannot expose their private parts for examination by a younger person.</td>
                                        </tr>
                                        <tr>
                                            <td>Distress</td>
                                            <td>When someone is distressed, they might find it difficult to communicate. They may not listen properly and so misinterpret or not understand what is being said. They might also be tearful or have difficulty speaking.</td>
                                        </tr>
                                        <tr>
                                            <td>Health issues</td>
                                            <td>When you are feeling ill, you may not be able to communicate as effectively as when you are well. This can affect your colleagues and service users. Similarly, people who are being cared for in hospital because of an illness may not communicate normally. Some long-term (chronic) illnesses such as Parkinson’s disease or Multiple sclerosis also affect an individual’s ability to communicate. You need to be aware of this if you are working with such people.</td>
                                        </tr>
                                        <tr>
                                            <td>Environmental problems</td>
                                            <td>When communication is affected by the environment that people find themselves in. For example, someone who does not see very well will struggle to read written information in a dimly lit room. A person who is in a wheelchair may find it impossible to communicate with the receptionist at the dentist’s if the desk is too high and above the wheelchair user’s head.</td>
                                        </tr>
                                        <tr>
                                            <td>Misinterpretation of message</td>
                                            <td>When someone reads a person’s body language wrongly. For example, someone with their arms folded and tapping their feet might be impatiently waiting for someone who is late. However, you might assume they are angry with you. This may stop you from asking for help.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity</h4>
                                </div>
                                <div class="callout-content">
                                    <p>Four other factors that affect communication are differing humour, sarcasm, inappropriate behaviour and aggression. Think of an example where each of these may lead to a breakdown in communication.</p>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">More barriers to communication and ways to overcome them</h3>
                            
                            <h4 class="card-title">Aggression</h4>
                            <p>Aggression is behaviour that is unpleasant, frightening or intimidating. It takes a variety of forms and can be physical, mental or verbal. It can cause physical pain or emotional harm to those it is directed at. It is caused by a range of factors such as substance abuse, mental health, a personality problem, fear or an attempt to dominate someone else. People who are aggressive towards other people are often bullies.</p>
                            <p>Aggression is a form of communication. It communicates a person’s state of mind, such as annoyance. It is also a barrier to communication. Aggression is often emotion that is out of control. It can be destructive. When someone shouts at someone else, the other person can be afraid and will either shout back or shut the aggressive person out.</p>
                            <p>If someone working in a health environment is annoyed, frustrated or irritated (breaths quickly, shouts, has a clenched jaw and/or rigid body language) the person they are attending to may feel dominated, threatened and unable to respond. This may lead to poorer service due to a breakdown in communication.</p>

                            <h4 class="card-title">Assertion</h4>
                            <p>Assertion is the skill of being calm and firm but not aggressive in the way you communicate with others. It helps you to communicate your needs, feelings and thoughts in a clear and confident way while taking into account the feelings of others and respecting their right to an opinion as well.</p>

                            <h4 class="card-title">How to be assertive</h4>
                            <ul class="enhanced-list">
                                <li>Plan what you are going to say. Be polite, state the nature of the problem, how it affects you, how you feel about it and what you want to happen. Make it clear that you see the other person's point of view and be prepared to compromise if it leads to what you want.</li>
                                <li>Control your emotions, such as anger or tearfulness and be calm and authoritative in your interactions with others. You need to be clear and prepared to defend your position and be able to say no. This will not cause offence if it is said firmly and calmly.</li>
                                <li>Use questions such as, 'How can we solve this problem?' Use the 'broken record' technique where you just keep repeating your statement softly, calmly and persistently. At the same time, use body language that shows you are relaxed, e.g. make firm, direct eye contact with relaxed facial features and use open hand gestures.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Using Verbal Skills to Overcome Barriers</h3>
                            <p>When you use your verbal skills effectively, you can help overcome barriers that may hinder communication. Some of the skills health service providers need when communicating verbally and assertively when need be, with service users are shown in the diagram below. They are useful tools in checking the understanding part of the communication cycle.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-3dacc90b.jpeg" alt="Oral Communication Skills" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 9.4: Oral Communication Skills</p>
                                <p class="figure-caption">Source: Pearson Education (2014).</p>
                            </div>

                            <p><strong>Paraphrasing</strong> means repeating something a person has said in a different way to make sure you have understood the message. For example, someone may say, 'I have been sick since Sunday' and you respond by saying, 'You have been feeling this way for 4 days now?'</p>
                            <p><strong>Closed questions</strong> are questions that can be answered with either a single word or short phrase. For example, 'Do you like cabbage?' could be answered, 'No' or, 'No, I can't stand them.' Closed questions give facts, are easy and quick to answer and keep control of the conversation. They are useful as an opening question, such as 'Are you feeling better today?"; for testing understanding, such as, 'So you want to go on the pill?'; and for bringing a conversation to an end, such as, 'So that's your final decision?'</p>
                            <p><strong>Open questions</strong> may require a longer answer. For example, 'Why don't you like cabbages?' might be answered by, 'I haven't liked the taste or smell of them since I was made to eat them all the time when I was a child...' Open questions give control of the conversation to the person you are speaking to. They ask the person to think and reflect, give opinions and feelings. They are useful as a follow-up to a closed question, to find out more, to help someone realise or face their problems and to show concern.</p>
                            <p><strong>Clarification</strong> means to make something clear and understandable.</p>
                            <p><strong>Summarising</strong> means to sum up what has been said in a short, clear way.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Overcoming Barriers to Communication</h3>
                            <p>Communication difficulties can isolate a person, making them feel cut off. So it is particularly important in a health environment to overcome these difficulties. Barriers to communication can be minimised in several ways.</p>

                            <h4 class="card-title">i. Adapting the environment</h4>
                            <p>This can be done in a number of ways, such as improving lighting for those with sight impairments and reducing background noise for those with hearing impairments. Lifts can be installed with a voice giving information such as when the doors are opening and closing and which floor the lift is on for those who cannot see. Ramps can be added, reception desks lowered and signs put lower down on walls so that people with physical disabilities can access the people and information they need.</p>

                            <h4 class="card-title">ii. Understanding language needs and preferences</h4>
                            <p>Service providers need to understand language needs and preferences of the people they are serving. They may have to re-word messages so that they are in short, clear sentences. They should avoid slang, jargon and dialect as much as possible. They should explain details to people who cannot see and encourage them to touch things such as their face.</p>
                            <p>They should not shout at those who cannot hear very well. They should use normal, clear speech and make sure their face is visible. They should employ a communicator or interpreter for spoken or signed language and show pictures or write messages, depending on what is best for the service user.</p>

                            <h4 class="card-title">iii. Using individual preferred language</h4>
                            <p>Most leaflets produced by public bodies such as the Ministry of Health are now written in the two official languages in Kenya –English and Kiswahili – so that people who do not speak one of the languages can still access the information. If there is a member of staff who speaks the preferred language of a service user they will help translate. However, it is always important to ask a service user what their preferred language is for written and verbal communication.</p>

                            <h4 class="card-title">iv. Timing</h4>
                            <p>It is important to pick the right time to communicate important information to a service user. E.g. If, a doctor has just told a patient that they have a life threatening illness the patient needs time to absorb the information. If the doctor tells them all about the treatment straight away, chances are the patient may not really hear much of what is said because they are in shock. It may be better to see the patient once they have processed the information and are receptive to hearing additional information.</p>

                            <h4 class="card-title">v. Electronic devices</h4>
                            <p>There are many electronic devices that help overcome barriers to communication. These include:</p>
                            <ul class="enhanced-list">
                                <li><strong>Mobile phones</strong>- These are generally affordable and available to the population at large, making them more accessible than computers. They have many uses in health care. For example, they enable emergency response teams to coordinate their efforts, allow a medical team to contact someone awaiting an operation, coordinate a support group, gather and send information etc.</li>
                                <li><strong>Telephone amplifiers</strong>- These are devices that amplify, or make louder, the ring tone of a phone so that people who are hard of hearing and those who use a hearing aid can hear the phone more clearly. They also amplify the volume of the person speaking on the other end by up to 100%.</li>
                                <li><strong>Other devices on telephones</strong> - include flashing lights for those who are hard of hearing to see that the phone is ringing.</li>
                                <li><strong>Hearing loops</strong>- A hearing loop system helps deaf people who use a hearing aid or loop listener hear sounds more clearly because it reduces or cuts out background noise. At home, for example, one can use a loop to listen to what is on television. You can also set up a loop with a microphone to help you hear conversations in noisy places like public transport vehicles. A hearing impaired student can wear a loop and the teacher a microphone to help the student listen to the teacher.</li>
                            </ul>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📚</span>
                                    <h4 class="callout-title">Case Study</h4>
                                </div>
                                <div class="callout-content">
                                    <p>Juma has not been in the city for long. He gets a job as a patient attendant in the county hospital but because his Kiswahili is not very good he does not always understand what the other staff or patients have asked him to do. This has caused one or two arguments and almost seen him sacked.</p>
                                    <ol class="enhanced-list">
                                        <li>Suggest what Juma's employer can do to resolve this so that Juma can remain a patient attendant.</li>
                                        <li>What can Juma do to help himself?</li>
                                        <li>How do you think i) the patients (ii) staff (iii) Juma feels when communication fails like this?</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>List three different ways of adapting the environment to help overcome barriers to communication.</li>
                                        <li>Why is timing important when giving someone information?</li>
                                        <li>Describe how an electronic device such as a mobile phone can help overcome barriers to communication.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 9.3 Alternative Forms of Communication -->
                    <section class="content-section" id="section-9-3">
                        <div class="section-header">
                            <div class="section-number">9.3</div>
                            <h2 class="section-title">Alternative Forms of Communication</h2>
                        </div>
                        <div class="content-card">
                            <p>Sometimes it is not possible to overcome a barrier to communication so an alternative form of communication must be found.</p>

                            <h3 class="card-title">Sign Language</h3>
                            <p>Sign language uses visual signs. These are made up of the shapes, positions and movement of the hands, arms or body and facial expressions to express a speaker's thoughts. Sign language is commonly used in communities which include the friends and families of deaf people as well as people who are deaf or hard of hearing themselves.</p>
                            <p>Kenyan Sign language (KSL) is a visual language comprising specific gestures (signs), handshapes and facial expressions. The signs follow grammatical rules. It is the official language of the Deaf community in Kenya.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-974a950f.jpeg" alt="Sign Language Examples 1" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                            </div>
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-c330b717.jpeg" alt="Sign Language Examples 2" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                            </div>
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-00b79985.jpeg" alt="Sign Language Examples 3" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 9.5: Some Examples of Kenya Sign Language</p>
                                <p class="figure-caption">Source: Pearson Education (2014).</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Lip Reading</h3>
                            <p>People with normal hearing subconsciously use information from the lips and face to help understand what is being said. Many people misunderstand deafness, thinking that if someone cannot hear very well, they are being rude or stupid. This can leave a deaf person feeling isolated, excluded from everyday activity and conversations, frustrated and lacking in confidence. Lip reading is a technique of interpreting the movements of a person's lips, face and tongue, along with information provided by any remaining hearing. It is used by someone who is deaf or hard of hearing. It is therefore important that you look directly at someone who is lip reading and stand in a well-lit area when speaking.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Makaton</h3>
                            <p>Makaton is a method of communication using signs and symbols and is often used as a communication process for those with learning difficulties. It was first developed in the UK in the 1970s. Unlike sign language, Makaton uses speech as well as actions and symbols. It uses picture cards and ties in facial expressions with the word to make the word easily recognisable by those with learning difficulties.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Braille</h3>
                            <p>The Braille system is a method widely used by blind people to read and write. Braille was devised in 1821 by Louis Braille, a Frenchman. Each Braille character is made up of six dot positions, arranged in a rectangle. A dot may be raised at any of the six positions to form sixty-four possible combinations and these raised dots are read by touch.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Technological aids</h3>
                            <p>These have already been mentioned earlier as a way of overcoming barriers to communication. They are also alternative forms of communication.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Human aids</h3>
                            <p>Human aids are people who help people communicate with each other. Examples are:</p>
                            <ul class="enhanced-list">
                                <li><strong>Interpreters</strong>- People who communicate a conversation whether it be spoken or signed, to someone in a different language they will understand. This is not easy because they not only have to interpret the words or signs but also have to find a way of expressing the meaning of the words clearly.</li>
                                <li><strong>Translators</strong>- People who change recorded information, such as the written word, into another language. Again, they have to convey the meaning as well as the words.</li>
                                <li><strong>Signers</strong>- People who can communicate using a sign language.</li>
                            </ul>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity: Signs and symbols</h4>
                                </div>
                                <div class="callout-content">
                                    <ul class="enhanced-list">
                                        <li>Do some research to find out the signs for (i) poison (ii) no entry (ii) no smoking (iv) fire exit (v) wet floor.</li>
                                        <li>Find at least five more common signs/symbols that most people will recognise which are used in a health environment of your choice.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 9.4 Skills for Effective Communication -->
                    <section class="content-section" id="section-9-4">
                        <div class="section-header">
                            <div class="section-number">9.4</div>
                            <h2 class="section-title">Skills for Effective Communication</h2>
                        </div>
                        <div class="content-card">
                            <p>This topic introduces students to more skills for effective communication. These include active listening, body language, facial expressions and eye contact. Some of these have already been covered at the beginning of this unit.</p>

                            <h3 class="card-title">Active Listening and Body Language</h3>
                            <p>Listening to people involves more than just hearing what they say. To listen well, you need to hear the words being spoken, thinking about what they mean and then thinking what to say back to the person. You can also show that you are listening and what you think about what is being said by your body language, facial expressions and eye contact. By yawning or looking at your notes when someone is talking, you give the impression of being bored by what is being said. By shaking your head and frowning, you are showing that you disagree with or approve of what they are saying.</p>
                            <p>The process of active listening involves:</p>
                            <ul class="enhanced-list">
                                <li>Allowing the person talking time to explain and not interrupting;</li>
                                <li>Giving encouragement by smiling, nodding and making encouraging remarks such as, 'that's interesting' and, 'really?';</li>
                                <li>Asking questions for clarification, such as, 'can you explain that again please?';</li>
                                <li>Showing empathy by making comments such as, 'that must be making life really hard for you';</li>
                                <li>Looking interested by maintaining eye contact and not looking at your watch;</li>
                                <li>Not being distracted by anything else, such as an interruption on your mobile – switch it off or say you will ring back;</li>
                                <li>Summarising to check that you have understood the other person. You can do this by saying, 'so what you mean is ...?';</li>
                                <li>Use of appropriate language.</li>
                            </ul>

                            <div class="callout callout--tip">
                                <div class="callout-header">
                                    <span class="callout-icon">❓</span>
                                    <h4 class="callout-title">Ask students</h4>
                                </div>
                                <div class="callout-content">
                                    <p>How would you feel if your supervisor suddenly started using swear words while they were addressing you? Why would you feel that way?</p>
                                </div>
                            </div>

                            <p>We adjust how we speak depending on who we are with and who is listening to us. Things that are said with a group of friends or at a family gathering might not be understood by others because we use different types of language in different situations. People, even unconsciously, change their tone or use of dialect depending on whom they are speaking to. A person's accent or dialect may become more pronounced when they are speaking to someone from their family or from the area they grew up in.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Tone of voice</h3>
                            <p>If you talk to someone in a loud voice with a fixed tone, the person you are speaking to will think you are angry with them. On the other hand, if you speak calmly and quietly with a varying tone, the other person will think you are being friendly and kind. So it is important to remember that it is not just what you say, but also the way you say it that matters.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Pace</h3>
                            <p>If you speak really quickly and excitedly, the person listening to you will not be able to hear everything you say. If you keep hesitating or saying 'um' or 'er' it makes it harder for people to concentrate on what you are saying. If you speak at a steady pace, however, you will be able to deliver your message more clearly and the other person will be able to hear every word you say.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Proximity</h3>
                            <p>The space around a person is called their personal space. In a formal situation, such as a doctor talking to a patient, the doctor does not sit close enough to the patient to invade their personal space. In an informal situation, people who are friends or intimate with each other will often sit closer to each other. People usually sit or stand so they are eye-to-eye if they are in a formal or aggressive situation. Sitting at an angle to each other creates a more relaxed, friendly and less formal feeling.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Written communication</h3>
                            <p>Health workers need to be able to communicate well with the written word. This could be by writing something themselves, such as a letter to refer a client to a different service, a record of a person's condition and treatment or a prescription. This means they need to be able to use different ways of presenting information, such as letters, memos, emails, reports or forms. They need to make their meaning absolutely clear and structure the information well and in an appropriate manner so that mistakes do not happen. It is also necessary to use grammar, spelling and punctuation correctly. Handwriting should also be legible so that the person the information is intended for can actually read it. It is also important that the language used is appropriate. Health professionals should not use a lot of technical words, acronyms or jargon if they are writing to someone who will not understand it. They should read information provided by other health workers thoroughly. They need to be able to identify the main points and be able to find other information from a wide variety of sources. They also need ICT skills to update records and access information.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Knowing the Barriers of Communication</h3>
                            <p>Effective communication, including active listening, can be hard work. People who work in health care environments tend to enjoy learning about other people and their lives. Things can go wrong, however, if:</p>
                            <ul class="enhanced-list">
                                <li>The context is wrong, e.g. the surroundings are unsuitable due to lack of privacy;</li>
                                <li>The service provider and service user are mismatched. Sometimes communication breaks down because of factors such as age, education level, gender and ethnic background;</li>
                                <li>A person withholds information because they fear being judged, example.g., because they have taken illegal drugs or procured an abortion;</li>
                                <li>A person fears that confidentiality will be broken even though this should never happen, e.g. about their sexual orientation;</li>
                                <li>The service user thinks that the advice given is too vague and has not asked for clarification;</li>
                                <li>The subject matter is embarrassing, such as talking about sex or intimate body parts;</li>
                                <li>A person fears they are going to hear bad news so avoids going to a service provider until it is too late to help.</li>
                            </ul>
                            <p>If health workers do not develop good communication skills, the effectiveness of their work will be affected and things can go wrong. This will not help service users feel good about themselves, leading to negative consequences. Remember, it is important to overcome problems such as those listed above, communicate effectively, including checking understanding, so that you get the best out of your interactions with colleagues and service users.</p>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended and Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Brown, B., Crawford, P. and Carter, R. (2006) Evidence Based Health Communication. New York: Open University.</li>
                                <li>Pearson Education (2014) 'Communication in Health and Social Care' [online]. Available at &lt;https: www.pearsonschoolsandfecolleges.co.uk&gt;. [Accessed 14 February 2014].</li>
                                <li>Beck, R., Daughtridge, R. and Sloane, P. (2002) ‘Provider-Patient Communication in the Primary Care Office: A Systematic Review’, <em>Journal of the American Board of Family Medicine</em>, January-February, 15(1).</li>
                                <li>U.S. Department of Health and Human Services (2010) ‘Healthy People 2010 Midcourse Review’ [online]. Available at &lt;http: default.htm. data midcourse www.healthypeople.gov&gt; [Accessed on 22 July 2013].</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Communication in Health Services.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-09-quiz"
                         data-quiz-js="../quizzes/topic-09-quiz.js">
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
                        <a href="topic-08.html" class="nav-button nav-button--previous">
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

                        <a href="topic-10.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 10: Health Sector Policy and Reform.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Sector Policy and Reform | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-09.html" class="nav-button nav-button--previous">
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

                        <a href="topic-11.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 58.8%;"></div>
                        </div>
                        <span class="progress-text">Topic 10 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📜</span>
                        <span>Module 10</span>
                    </div>
                    <h1 class="document-title">Health Sector Policy and Reform</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Policy & Strategy</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>25 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to the role of policies and reforms in health services delivery</p>
                    </div>

                    <!-- Objective -->
                    <section class="content-section">
                        <h2 class="section-title">Objective</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>To identify and describe the objectives of the current National Health Policy and ongoing reforms.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>10.1 Aim of Health Policy and Reforms</li>
                                    <li>10.2 Health indicators</li>
                                    <li>10.3 Structure of the health care system</li>
                                    <li>10.4 Health policies and objectives</li>
                                    <li>10.5 Health policy and the Constitution of Kenya</li>
                                    <li>10.6 Kenya Health Policy Framework 2012-2030</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, Flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Health policy and reforms</td>
                                        <td>To introduce students to the role of health policy and reforms in the health sector</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Health policy implementation</td>
                                        <td>To identify the various components of current health sector policy objectives</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 10.1 Aim of Health Policy and Reforms -->
                    <section class="content-section" id="section-10-1">
                        <div class="section-header">
                            <div class="section-number">10.1</div>
                            <h2 class="section-title">Aim of Health Policy and Reforms</h2>
                        </div>
                        <div class="content-card">
                            <p>Health policy refers to decisions, plans, and actions that are undertaken to achieve specific health care goals within a society. The purpose of a broad public health policy is to protect the health of populations. According to the World Health Organisation (1978), health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity. WHO has further proclaimed that “the health of all the people is fundamental to the attainment of peace and security and is dependent upon the fullest cooperation of individuals and states”, and that “the enjoyment of the highest attainable standards of health” is one of the fundamental rights of every human being.</p>
                            <p>On attaining independence, the government committed itself to providing free- health services as part of its development strategy to alleviate poverty and improve the welfare and productivity of the nation. The aim of the health sector policy and reforms is to develop and expand health services and facilities in terms of spatial coverage, training of personnel and tertiary health care delivery services.</p>
                        </div>
                    </section>

                    <!-- 10.2 Health Indicators -->
                    <section class="content-section" id="section-10-2">
                        <div class="section-header">
                            <div class="section-number">10.2</div>
                            <h2 class="section-title">Health Indicators</h2>
                        </div>
                        <div class="content-card">
                            <p>The health status of the population can be assessed by a number of indicators including infant, child and maternal mortality and morbidity rates, crude death rate, life expectancy at birth, and the number of medical staff and facilities available per unit of population. These are the basic indicators of a country's health, socio-economic situation and quality of life.</p>
                            
                            <h3 class="card-title" style="margin-top: var(--space-6);">Infant Mortality Rate</h3>
                            <p>Infant mortality rate is the probability of dying between birth and exactly one year of age, expressed per 1,000 live births. Under-five mortality rate is the probability of dying between birth and exactly five years of age, expressed per 1,000 live births.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Life Expectancy</h3>
                            <p>Life expectancy at birth is the number of years a new born infant would live if prevailing factors of mortality at the time of birth were to stay the same throughout the child's life.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Crude Birth and Death Rates</h3>
                            <p>Crude birth rate is the number of births per 1,000. Crude death rate is defined as the number of deaths per 1,000 and is calculated as follows:</p>
                            
                            <div class="equation">
                                $$ \text{Crude death rate} = \frac{\text{Number of deaths}}{\text{Estimated midyear population}} \times 1000 $$
                            </div>
                            
                            <p>Both crude birth and death rates are important determinants of population size. An increase in crude birth rate may lead to an increase in population size if the crude death rate remains constant.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Fertility Rates</h3>
                            <p>Total fertility rate is the number of children a woman would have by the end of her childbearing years if she were to pass through those years bearing children. Analysis of fertility rates plays an important role in determining population growth rate, which in turn helps in planning for social provisioning.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Nutritional Status</h3>
                            <p>The nutritional well-being of young children reflects household, community and national investments in family health and contributes in both direct and indirect ways to the country's development. The nutritional status of children is summarised using anthropometric indices (height and weight) which reflect past deprivation.</p>
                            <p>Malnutrition is a major source of ill health and premature death. Undernourished people are those whose food intake is insufficient to meet their minimum energy requirements. Stunting (insufficient height for age) is an indication of cumulative deficient growth linked to long-term deprivation of both food and non-food requirements. Wasting (insufficient weight for height) associated with short-term deprivations changes rapidly and is sensitive to acute food deprivation and morbidity. Low weight for age indicates chronic and acute under nutrition.</p>
                        </div>
                    </section>

                    <!-- 10.3 Structure of the Health Care System -->
                    <section class="content-section" id="section-10-3">
                        <div class="section-header">
                            <div class="section-number">10.3</div>
                            <h2 class="section-title">Structure of the Health Care System</h2>
                        </div>
                        <div class="content-card">
                            <p>The level of a nation’s development depends upon the economic and social conditions and the extent and quality of health services provided to the population. Therefore, the health care we have today is a result of policies made some years ago. The development of health care system in Kenya goes back to the pre-colonial era.</p>
                            <p>In 1901, a medical department was created as one of the civil departments of the central administration. This was the first step towards establishment of colonial medical organisations supported and controlled by the state. In 1903, medical administrators were requested, first, to preserve the health of the European Community, second, to keep the African and Asiatic labour force in good working condition and third, to prevent the spread of tropical diseases.</p>
                            <p>Medical education in Kenya started in 1967 when the University of East Africa established a faculty of medicine at University College, Nairobi, which in 1970 became the University of Nairobi. After independence, the government continued to expand health facilities in the country. At independence, Kenya inherited a three-tier health system in which the central government provided services at district, provincial and national levels; missionaries provided health services at sub-district levels; and local government provided services in urban areas. This system operated until 1970 when the government established a system of comprehensive rural health services in which health centres became the focal points for comprehensive provision of preventive, promotive and curative services.</p>
                            <p>Today, alongside government services, non-profit and FBOs organisations and NGOs provide health services at delivery points that range from dispensaries to hospitals. The government’s health care delivery system is pyramidal, with the national referral facilities at Kenyatta National Hospital (Nairobi) and Moi Teaching and Referral Hospital (Eldoret) forming the peak, followed by provincial, district and sub-district hospitals, with health centres and dispensaries forming the base.</p>
                        </div>
                    </section>

                    <!-- 10.4 Health Policies and Objectives -->
                    <section class="content-section" id="section-10-4">
                        <div class="section-header">
                            <div class="section-number">10.4</div>
                            <h2 class="section-title">Health Policies and Objectives</h2>
                        </div>
                        <div class="content-card">
                            <p>The main mandate of a health system is to ensure that people enjoy long lives that are relatively free from the burden of disease and ill health. Health policies and strategies are aimed at reducing incidence of disease and improving the health status of Kenyans. Health policy in Kenya revolves around two critical issues, namely: how to deliver a basic package of quality health services to a growing workforce and their dependants and how to finance and manage those services in a way that guarantees their availability, accessibility and affordability to those in most need. The overall goal of the government is to promote and improve the health status of all Kenyans by making all health services more effective, accessible and affordable.</p>
                            <p>In all its development and sectoral plans, the government’s main objectives for development of health services since independence have been:</p>
                            <ul class="enhanced-list">
                                <li>Strengthening and carrying out measures for eradication, prevention and control of disease. Such measures include protection of the environment against health hazards, vector disease control, immunisation against disease, early detection and treatment of diseases and health education;</li>
                                <li>Provision for adequate and effective diagnostic, therapeutic and rehabilitative services for the whole population at hospitals, health centres, dispensaries and mobile units;</li>
                                <li>Promotion and development of biomedical and health services’ research as a means of identifying improved and cost effective methods for the protection of the health of the people.</li>
                            </ul>
                            
                            <h3 class="card-title" style="margin-top: var(--space-6);">The main health policies in Kenya include:</h3>
                            <ul class="enhanced-list">
                                <li>Increasing coverage and accessibility of health services in rural areas;</li>
                                <li>Further consolidating urban and rural curative and preventive and promotive services;</li>
                                <li>Increasing emphasis on maternal and child health and family planning services in order to reduce morbidity, mortality and fertility;</li>
                                <li>Strengthening Ministry of Health management capacities with emphasis at the county level;</li>
                                <li>Increasing inter-ministerial coordination of health service delivery; and</li>
                                <li>Increasing alternative financing mechanisms.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">The Ministry of Health is the main provider of health services in the country. It has the following functions:</h3>
                            <ul class="enhanced-list">
                                <li>Formulation and implementation of a national health policy;</li>
                                <li>Preparation and implementation of national health development plans;</li>
                                <li>Organisation and administration of central health services;</li>
                                <li>Development of health acts and regulations;</li>
                                <li>Training of health and allied personnel;</li>
                                <li>Promotion of medical science and maintenance of medical and health standards;</li>
                                <li>Liaison and coordination with other government departments and NGO agencies; and</li>
                                <li>Internal health regulations.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- 10.5 Health Policy and the Constitution of Kenya 2010 -->
                    <section class="content-section" id="section-10-5">
                        <div class="section-header">
                            <div class="section-number">10.5</div>
                            <h2 class="section-title">Health Policy and the Constitution of Kenya 2010</h2>
                        </div>
                        <div class="content-card">
                            <p>The Constitution of Kenya 2010 provides an overarching conducive legal framework for ensuring a comprehensive and people-driven health services delivery. It provides for a rights-based approach to health whereby every person has the right to the highest attainable standard of health. It further indicates that a person shall not be denied emergency medical treatment and that the State shall provide appropriate social security to persons who are unable to support themselves and their dependants.</p>
                            <p>The Constitution singles out health care for specific groups such as children and persons living with disabilities. In addition, the underlying determinants of the right to health such as adequate housing, food, clean safe water, social security and education are also guaranteed in the Constitution. The current Health Policy therefore seeks to make the realisation of the right to health by all Kenyans a reality.</p>
                        </div>
                    </section>

                    <!-- 10.6 Kenya Health Policy Framework 2012-2030 -->
                    <section class="content-section" id="section-10-6">
                        <div class="section-header">
                            <div class="section-number">10.6</div>
                            <h2 class="section-title">Kenya Health Policy Framework 2012-2030</h2>
                        </div>
                        <div class="content-card">
                            <p>This Kenya Health Policy 2012-2030 represents the government's commitment towards improving the health of the people of Kenya by significantly reducing ill health. The Policy defines the health goal, objectives including strategies, guiding principles and orientations aimed at achieving the health agenda in Kenya.</p>
                            <p>The Kenya Health Policy 2012-2030 provides guidance to the health sector in terms of identifying and outlining the requisite activities in achieving the government's health goals. The policy is aligned to Kenya's Vision 2030 (Kenya's national development agenda), the Constitution of Kenya and global health commitments and uses a three-pronged framework (comprehensive, balanced and coherent) to define policy direction as shown in Figure 10.2.</p>
                            <p>The goal of Kenya Health Policy 2012-2030 is ‘attaining the highest possible standard of health in a manner responsive to the needs of the population’. The Policy focuses on six objectives, and seven orientations to attain the overall government's health goals. The implementation of the policy will be done through five-year medium-term strategic plans.</p>
                            
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-7cf16e03.jpeg" alt="Kenya Health Policy 2012-2030 Framework for Policy Directions" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Table 10.1 Kenya Health Policy 2012-2030 Framework for Policy Directions</p>
                                <p class="figure-caption">Source: Kenya Health Policy 2012-2030.</p>
                            </div>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-6892ef29.jpeg" alt="Health Policy Framework: 2012-2030" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 10.2 Health Policy Framework: 2012-2030</p>
                                <p class="figure-caption">Source: Kenya Health Policy, 2012.</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Policy Objectives</h3>
                            <ol class="enhanced-list">
                                <li>Eliminate communicable conditions</li>
                                <li>Halt and reverse the rising burden of non-communicable conditions</li>
                                <li>Reduce the burden of violence and injuries</li>
                                <li>Provide essential health care</li>
                                <li>Minimise exposure to health risk factors</li>
                                <li>Strengthen collaboration with other sectors that have an impact on health</li>
                            </ol>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Policy orientations</h3>
                            <p>Policy orientations define ‘how’ the health sector will organise itself to facilitate attainment of the health objectives. The orientations are organised around the following Health System Building Blocks:</p>
                            <ul class="enhanced-list">
                                <li><strong>i. Service delivery systems:</strong> How health service delivery will be organised;</li>
                                <li><strong>ii. Leadership and governance:</strong> How health service delivery will be managed;</li>
                                <li><strong>iii. Health workforce:</strong> The human resources required for the provision of health services;</li>
                                <li><strong>iv. Health financing:</strong> The systems needed to ensure adequate resources for service provision;</li>
                                <li><strong>v. Health products and technologies:</strong> The essential medicines, medical supplies, vaccines, health technologies and public health commodities required in provision of services;</li>
                                <li><strong>vi. Health information:</strong> Systems for generation, analysis, dissemination, and utilisation of health related information;</li>
                                <li><strong>vii. Health infrastructure:</strong> The physical infrastructure, equipment, transport, and information communication technology needed for delivery of health services.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Kenya Institute for Public Policy Research and Analysis (KIPPRA) Review of the Kenya Health Policy Framework 1994-2010. Nairobi: KIPPRA.</li>
                                <li>Ministry of Health Services and Ministry of Public Health and Sanitation. Kenya Health Policy 2012–2030.</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation (2010) Kenya Service Provision Assessment Survey. Nairobi: Government Printer.</li>
                                <li>Ministry of Medical Services Strategic Plan 2008-2012</li>
                                <li>Transparency International-Kenya (2011) The Kenya Health Sector Integrity Study Report. Nairobi: Transparency International-Kenya.</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Health Sector Policy and Reform.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-10-quiz"
                         data-quiz-js="../quizzes/topic-10-quiz.js">
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
                        <a href="topic-09.html" class="nav-button nav-button--previous">
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

                        <a href="topic-11.html" class="nav-button nav-button--next">
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
    <script>
        // Auto-render math equations
        document.addEventListener("DOMContentLoaded", function() {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false}
                ]
            });
        });
    </script>
</body>

</html>

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 11: Law and Ethics in Health Care.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Law and Ethics in Health Care | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-10.html" class="nav-button nav-button--previous">
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

                        <a href="topic-12.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 64.7%;"></div>
                        </div>
                        <span class="progress-text">Topic 11 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>⚖️</span>
                        <span>Module 11</span>
                    </div>
                    <h1 class="document-title">Law and Ethics in Health Care</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Legal & Ethical Frameworks</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>30 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to the role of law and ethics in health services delivery</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Explain health professionals legal responsibilities;</li>
                                <li>Explain ethical and legal issues impacting on health care delivery;</li>
                                <li>Identify conduct with negative legal and ethical consequences.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>11.1 Health professionals’ legal responsibilities</li>
                                    <li>11.2 Ethical issues and theories in modern health care</li>
                                    <li>11.3 Basic rules of medical ethics</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector)</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Health professionals legal responsibilities</td>
                                        <td>To introduce students to health professionals legal obligations and responsibilities</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Ethical issues and theories in modern Health care</td>
                                        <td>To introduce students to ethics in health service delivery</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 11.1 Health Professionals Legal Responsibilities -->
                    <section class="content-section" id="section-11-1">
                        <div class="section-header">
                            <div class="section-number">11.1</div>
                            <h2 class="section-title">Health Professionals Legal Responsibilities</h2>
                        </div>
                        <div class="content-card">
                            <p>Patients have the right to receive considerate and respectful health care. It is the health care provider’s legal and ethical responsibility to know and respect the patient’s rights. Professionally health care workers have specific legal responsibilities that regulate their particular profession. Adhering to legal regulations is vital for the health care worker’s own protection, the protection of their employer and more importantly, the safety and well-being of the patient. Failure to observe legal and ethical obligations leads to negligence or malpractice.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Medical Negligence</h3>
                            <p>Medical negligence, according to Mosby’s Medical Dictionary (8th edition), can be defined as the commission of an act that a prudent person would not have done or the omission of a duty that a prudent person would have fulfilled, resulting in injury or harm to a patient.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Medical Malpractice</h3>
                            <p>Medical malpractice means bad, wrong or injudicious treatment of a patient professionally which results in injury, unnecessary suffering or death. Malpractice and negligence may occur through omission of a necessary act as well as commission of an unwise or negligent act. This may be in the form of misdiagnosis, wrong decisions and treatment, prescription errors and medical or surgical complications, all of which may result in suffering, permanent injury or death.</p>
                        </div>

                        <!-- Regulation -->
                        <div class="content-card">
                            <h3 class="card-title">Regulation</h3>
                            <p>In Kenya, medical, nursing and midwifery practices are regulated by statutory authorities, including the Medical Practitioners and Dentists Board, the Nursing Council of Kenya, the Clinical Officers Council and the Pharmacy and Poisons Board. These bodies are obliged to protect members of the public by ensuring that medical practitioners including dentists, nurses and midwives, clinical officers and pharmacists are properly qualified, that they perform their services to patients with skill and diligence and observe at all times high moral and ethical standards. Health care professionals are expected to know and follow the laws regulating their profession, license or registration.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Applicable laws</h3>
                            <p>Legal responsibilities in the health sector are interpreted through civil or criminal law. Civil law deals with legal relationships between people and protection of a person's rights. Criminal law deals with wrongs against a person, property or society, practising without the required licence, theft and murder among others. Many of the wrong doings in health care are civil wrongs. However, they can lead to legal action.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Compliance</h3>
                            <p>The following are basic guidelines on how to comply with appropriate laws and procedures:</p>
                            <ul class="enhanced-list">
                                <li>Protect the patient from exposure (heat or cold);</li>
                                <li>Knock and pause before entering a room;</li>
                                <li>Draw curtains or close door when providing care;</li>
                                <li>Leave while visitors are with the patient;</li>
                                <li>Do not listen when patients make phone calls;</li>
                                <li>Abide by the rules of confidentiality;</li>
                                <li>Do not discuss the patient's condition with anyone outside of work;</li>
                                <li>Be aware of your surroundings and do not discuss a patient within areas others could overhear (lifts, cafeteria, corridors, parking lot, etc).</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Privileged Communication</h3>
                            <p>All information given to health personnel by a patient is considered privileged communication, and by law must be kept confidential. However, certain information is exempt by law and must be reported. This includes:</p>
                            <ul class="enhanced-list">
                                <li>Births and deaths;</li>
                                <li>Injuries caused by violence requiring police intervention (assault and battery, abuse, stabbings);</li>
                                <li>Drug abuse;</li>
                                <li>Chronic diseases.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Health Care Records</h3>
                            <ul class="enhanced-list">
                                <li>Belongs to the health care provider;</li>
                                <li>Patient has right to obtain copy of any information in record;</li>
                                <li>Can be a legal record in court of law;</li>
                                <li>Must be properly maintained, kept confidential and maintained for amount of time required by state;</li>
                                <li>When destroyed after time permits, must be burned or shredded to maintain confidentiality.</li>
                            </ul>
                        </div>

                        <!-- Patient Instructions -->
                        <div class="content-card">
                            <h3 class="card-title">Patient Instructions</h3>
                            
                            <h4 class="card-title">Advance directives</h4>
                            <p>These are a patient’s instructions, usually relating to end-of-life issues regarding what measures should or should not be used to prolong life if their condition is terminal e.g. CPR, ventilator, feeding tube, etc. Advance directives frequently results in a “do not resuscitate” (DNR) order. Advance directives are legally binding documents. They must be signed when the individual is competent and witnessed by two adults who will not benefit from the death. There are two main types of advance directives:</p>
                            
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">i. Durable Power of Attorney (POA) for health care</h4>
                                        <p class="definition-text">This is a document permitting an individual (principal) to appoint another person (agent) to make any decisions regarding health care if the principal is unable to make those decisions. Usually POAs are given to spouses or adult children or another adult. The POA must be signed by the principal, agent, and two adult witnesses.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">ii. Living will</h4>
                                        <p class="definition-text">This is a document allowing individuals to state what measures should or should not be used to prolong life if their condition is terminal e.g. CPR, ventilator, feeding tube, etc. This frequently results in a “do not resuscitate” (DNR) order.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Professional Standards -->
                        <div class="content-card">
                            <h3 class="card-title">Professional Standards and Code of Conduct</h3>
                            <p>Professional standards help meet legal responsibilities, ethics and patients' rights. By following certain standards at all times, the health care worker can protect themselves, their employer and the patient. Some of the basic standards are:</p>
                            <ul class="enhanced-list">
                                <li>iii. Perform only those procedures for which you have been trained and are legally permitted to do (scope of practice);</li>
                                <li>iv. If asked to perform procedure for which you are not qualified, decline;</li>
                                <li>v. Use approved, correct methods while performing any procedure</li>
                                <li>vi. Follow procedure manual</li>
                                <li>vii. Obtain correct authorisation before performing any procedure;</li>
                                <li>viii. Identify patient and obtain consent before performing any procedure;</li>
                                <li>ix. Check wrist band if available: State patient’s name clearly and repeat if necessary, ask patient their name and birth date;</li>
                                <li>x. If patient refuses, do not perform procedure;</li>
                                <li>xi. Obtain written consent where needed;</li>
                                <li>xii. Observe all safety precautions;</li>
                                <li>xiii. Keep all information confidential;</li>
                                <li>xiv. Think before you speak and watch everything you say;</li>
                                <li>xv. Treat all patients equally;</li>
                                <li>xvi. Accept no tips or bribes for care;</li>
                                <li>xvii. If error occurs or you make a mistake, report it immediately to your supervisor;</li>
                                <li>xviii. Behave professionally in dress, language, manners and actions.</li>
                            </ul>
                        </div>

                        <!-- Forms of Civil Wrongs -->
                        <div class="content-card">
                            <h3 class="card-title">Table 11.1 Forms of Civil Wrongs in Health Service Provision</h3>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Negligence</td>
                                            <td>• Ordering side rails left down and patient falls from bed<br>• Using or not reporting defective equipment that injures patient<br>• Patient develops infection from poor sterile<br>• Patient burned from bath water that was too hot</td>
                                        </tr>
                                        <tr>
                                            <td>Assault and battery</td>
                                            <td>• Assault – threatening to injure<br>• Battery – unlawful touch of another without their consent</td>
                                        </tr>
                                        <tr>
                                            <td>Failure to obtain informed consent</td>
                                            <td>Undertaking procedures without obtaining written or verbal consent – giving an injection, taking a blood pressure, drawing blood for a lab test, starting an IV, performing physical exam; surgery, invasive diagnostic tests, treatment of minors</td>
                                        </tr>
                                        <tr>
                                            <td>Invasion of privacy</td>
                                            <td>Unnecessary exposure of an individual or revealing personal information about an individual without consent<br>Examples: Exposing a patient while transporting them to x-ray; sending information to a medical insurance company without patient’s permission; informing third parties of patient’s condition without permission</td>
                                        </tr>
                                        <tr>
                                            <td>False imprisonment</td>
                                            <td>Restraining a patient or restricting their freedom<br>Examples: Applying side rails without a doctor’s order and a patient’s permission; placing patient in restraints without order or permission; keeping a patient hospitalised against their will</td>
                                        </tr>
                                        <tr>
                                            <td>Abuse</td>
                                            <td>Any care that results in physical harm, pain or mental anguish. Types:<br>• Physical – hitting, forcing persons against their will, restraining movements, depriving food or water<br>• Verbal – speaking harshly, swearing or shouting, writing threats or abusive statements<br>• Psychological – threatening harm, denying rights, belittling, intimidating<br>• Sexual – any unwanted sexual touching or act, sexual gestures or suggested sexual behaviour</td>
                                        </tr>
                                        <tr>
                                            <td>Defamation</td>
                                            <td>False statements which may damage a person’s reputation. Two types:<br>• Slander – information is spoken. Example: Stating a person has a drug problem when another medical problem exists<br>• Libel – information is written Example: Sending inaccurate lab results to a commission of inquiry</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Student Activity -->
                        <div class="content-card content-card--alternate">
                            <h3 class="card-title">Student Activity</h3>
                            <p>Identify the type of civil wrong committed under each of the following fictitious scenarios: Denial of information, action without consent, malpractice, medical negligence</p>
                            
                            <h4 style="margin-top: var(--space-4); margin-bottom: var(--space-2);">Table 11.2 Civil Wrongs</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Denial of information</td>
                                            <td>Failure to explain the nature of illness or injury and the modality of treatment and its consequences. In particular, there was inadequate information given to the patients before and after surgery.</td>
                                        </tr>
                                        <tr>
                                            <td>Sterilisation without consent</td>
                                            <td>A mother of three was admitted with abruptio placenta at a Mission Hospital where she was later taken to theatre for Caesarean Section (CS) and, unknown to her, bilateral tubal ligation was carried out. She had not consented and was not informed of the latter.</td>
                                        </tr>
                                        <tr>
                                            <td>Doctor attended to patient while drunk</td>
                                            <td>A woman was admitted at a public District Hospital in early labour. She had previously delivered by CS and so was asked to sign consent for repeat CS which she did. However, a doctor who was drunk saw her in the Labour Ward and asked her to begin pushing the baby, without any success. He then tried unsuccessfully to apply forceps. By the time she eventually was taken to the operating theatre her uterus had already ruptured, the baby had died, and she subsequently developed difficulty in controlling urine (Vesico Vaginal Fistula). She has not conceived since then and she could as well have had a hysterectomy done.</td>
                                        </tr>
                                        <tr>
                                            <td>Forgotten foreign bodies after surgery</td>
                                            <td>A relative told of the case of a woman who had a CS performed by a doctor during which an abdominal pack was (accidentally) forgotten in the abdomen. When she returned two weeks later complaining of abdominal pain and swelling she was told she needed another operation to remove a foreign body which required further payment. This could not be done because she did not have any more money. The patient died of complications most probably associated with the foreign body.</td>
                                        </tr>
                                        <tr>
                                            <td>Failure to apply standard procedures</td>
                                            <td>Another case was that of a single mother of two who delivered normally at a health centre (level 3). An episiotomy had been performed and a swab left in the vagina which should have been removed after a few hours. However, the patient was not informed about it and the swab was left in for two weeks. By that time infection had set in and she had also developed faecal incontinence (RVF). She is now ashamed of her condition and has not mentioned it to anyone except her mother. It is possible that she suffered rectal injury when the episiotomy incision was made.</td>
                                        </tr>
                                        <tr>
                                            <td>Doctor refused to come to the hospital when summoned</td>
                                            <td>A mother of three was admitted to a public district hospital in labour where she remained for 48 hours without delivery mainly because the only doctor who could do a CS refused to come. When eventually the doctor came she was taken to theatre, delivered of a very depressed child who breathed after prolonged resuscitation, but the mother died on the table. The child is now intellectually handicapped.</td>
                                        </tr>
                                        <tr>
                                            <td>Failure to provide prescribed medical care</td>
                                            <td>An HIV+ woman was admitted at a public district hospital with ruptured membranes. Her husband, also HIV positive, told the staff that they had been advised by another doctor that the delivery should be by CS, but this was declined. Besides, she was not given ARV therapy as instructed in the PMTCT guidelines. Instead, she was allowed to have a prolonged labour, delivering a fresh stillborn child.</td>
                                        </tr>
                                        <tr>
                                            <td>Failure to give an essential prophylaxis</td>
                                            <td>A primigravida at term was admitted in a private hospital where she had made several antenatal visits. Her labour was uneventful, delivering a healthy male child. However, although she had been informed at the same hospital that she was Rhesus Negative she was not offered a standard vaccine, anti-D gamma globulin to protect against Rhesus iso-immunisation. In addition, she was not advised what to do in case of a subsequent pregnancy.</td>
                                        </tr>
                                        <tr>
                                            <td>Hysterectomy performed without consent on a disabled person</td>
                                            <td>A woman with dwarfism (possibly achondroplasia) was diagnosed with uterine fibroids at a provincial hospital and advised she needed an operation to remove the fibroids. She was taken to theatre but afterwards was not told what had been done. When three weeks later she realised that a hysterectomy had been performed she sought explanation from the doctor. She was taken aback when the doctor wondered aloud if in her condition she really expected to get a baby!</td>
                                        </tr>
                                        <tr>
                                            <td>Hysterectomy performed in a woman diagnosed with an ovarian cyst</td>
                                            <td>A married woman, a mother of four girls had hope that a boy would come someday. She was seen at a provincial hospital complaining of abdominal pain, where an ovarian cyst was diagnosed and confirmed by an ultrasound scan. She was advised to undergo an operation in order to remove the cyst; at no time was possibility of a hysterectomy mentioned. She discovered this on her own when she read the discharge summary which stated that the uterus had a fibroid and a hysterectomy was performed.</td>
                                        </tr>
                                        <tr>
                                            <td>Hysterectomy performed possibly because of intractable post-partum haemorrhage</td>
                                            <td>A woman in her first pregnancy was under care of a private obstetrician who saw her several times during pregnancy. When she went two weeks past the due date, he admitted her at a private hospital for induction of labour, but for three days labour did not set in. However, when labour started on the fourth day her doctor was nowhere to be found; it was not until the next day that he appeared in the middle of the night and attempted to deliver her by vacuum extraction, but this was abandoned because there was a lot of bleeding. She was then taken to theatre and a CS was performed. She gave birth to a baby boy weighing 4kg. When she was returned to the ward, the bleeding continued and had to be returned to theatre again, but was not told what was done there. Details of operations done on her were only made known to her husband when he went to clear the bills. And then it was not until three months later that her husband actually informed her of the loss of her uterus. After some years, her husband left her for another woman to have more children.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Policies and Procedures -->
                        <div class="content-card">
                            <h3 class="card-title">Policies and Procedures</h3>
                            <p>Health care workers must be familiar with their employer's policies and procedures. Policies and procedures are the guidelines that provide information about employment terms, work place procedures, quality control etc. Technical procedures tell you how to complete tasks the way your employer wants them done. There may be procedures for the following:</p>
                            <ul class="enhanced-list">
                                <li>How to take a temperature;</li>
                                <li>How to give an enema;</li>
                                <li>How to fill out forms;</li>
                                <li>How to package and wrap trays;</li>
                                <li>Standard operating procedures;</li>
                                <li>Treatment protocols.</li>
                            </ul>
                            <p>These guidelines assure that the health care worker performs their jobs correctly. It is important to always follow a health facility's policies and procedures. Doing this will protect your patients, co-workers, employer and yourself.</p>
                        </div>
                    </section>

                    <!-- 11.2 Ethical Issues and Theories in Modern Health Care -->
                    <section class="content-section" id="section-11-2">
                        <div class="section-header">
                            <div class="section-number">11.2</div>
                            <h2 class="section-title">Ethical Issues and Theories in Modern Health Care</h2>
                        </div>
                        <div class="content-card">
                            <p>Ethics is a set of moral principles and a code for behaviour governing an individual’s actions with other individuals and within society. Ethics is a critical reflection about morality – what is believed to be right and good. Medicine and technology are rapidly changing and offering choices to health professionals. Although challenging and even exciting, the choices can be difficult. For example, should medications known to be effective be withheld from a patient because it is thought they are incompetent or do not have the means to store or manage the medication properly?</p>
                            <p>In modern health care and research, value conflicts arise where there often appears to be no clear consensus as to the “right thing to do”. These conflicts present problems requiring moral decisions that necessitate a choice between two or more alternatives.</p>
                            <p>Examples:</p>
                            <ul class="enhanced-list">
                                <li>Should a parent have a right to refuse immunisations for his or her child?</li>
                                <li>Does public safety supersede an individual’s right?</li>
                                <li>Should children with serious birth defects be kept alive?</li>
                                <li>Should a woman be allowed an abortion for any reason?</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Ethical dilemmas and theories</h3>
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Ethical dilemma</h4>
                                        <p class="definition-text">This is a value conflict with no clear consensus as to the “right” thing to do. It is conflict between moral obligations that are difficult to reconcile and require moral reasoning. Situations necessitating a choice between two equal (usually undesirable) alternatives. Modern health care technology has created many ethical dilemmas. For example:<br>• Assisted suicide – is it justified in certain patients?<br>• Stem cell research – should aborted foetuses be used?<br>• Should a patient be permitted to smoke marijuana if it eases pain or effects of chemotherapy?</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Deontology / Non-consequentialism Theory</h4>
                                        <p class="definition-text">This is derived from the Greek word “Deon”, meaning duty. Under this theory, some acts are right or wrong independent of their consequences. The theory is based on the concept of duty. It is premised on one’s obligation and on that basis seeks to determine what is ethical by answering the question: What should I do and why should I do it?</p>
                                        <p class="definition-text"><strong>Illustration:</strong> Anita, a practitioner, believes she has a duty to give cardiac clients detailed information on the pathology involved in their condition even though the client has indicated that they are not ready or may be terrified to hear the information causing the client distress.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Consequentialism Theory</h4>
                                        <p class="definition-text">Also called Teleological theory. Actions are determined and justified by the consequence of the act. Consequentialists consider all the consequences of what they are about to do prior to deciding a right action. This also answers the question: What should I do and why should I do it?</p>
                                        <p class="definition-text"><strong>Illustration:</strong> Had Anita respected the wishes of her clients, she would have given them only the information which would have been a benefit to them and not caused them undue stress. She would have been motivated by her desire to do good (beneficence), rather than her sense of duty. This would amount to deontological betrayal.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Utilitarian Theory</h4>
                                        <p class="definition-text">Considers the greatest good for the largest number of people. Also answers the question: What should I do and why should I do it? The problem with employing Utilitarian theory is determining who decides the definition of "greatest" and "good".</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Intuitionism Theory</h4>
                                        <p class="definition-text">Resolves ethical dilemmas by appealing to one's intuition, a moral faculty of a person which directly knows what is right or wrong. A gut feeling of knowing what is right. The difficulty with intuitionism is in deciding whose moral position is more valid.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Rights Based Theory</h4>
                                        <p class="definition-text">This theory resolves ethical dilemmas by first determining what rights or moral claims are involved and take precedence. Consider the abortion debate, personal – mom vs. foetus/child, societal- women's choice vs. potential life of the unborn).</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Virtue Ethics Theory</h4>
                                        <p class="definition-text">Contrary to other ethical theories, virtue ethics tells us what kind of person one ought to be, rather than what they do. The focus is on the character (goodness) of the person.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 11.3 Basic Rules of Medical Ethics -->
                    <section class="content-section" id="section-11-3">
                        <div class="section-header">
                            <div class="section-number">11.3</div>
                            <h2 class="section-title">Basic Rules of Medical Ethics</h2>
                        </div>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Put saving of life and promotion of health above all else;</li>
                                <li>Make every effort to keep patient as comfortable as possible and to preserve life when possible;</li>
                                <li>Respect patient’s choice to die peacefully and with dignity (advanced directive);</li>
                                <li>Treat all patients equally, avoid bias, prejudice and discrimination;</li>
                                <li>Provide care for all persons to the best of your ability;</li>
                                <li>Maintain competent level of skill consistent with occupation;</li>
                                <li>Maintain confidentiality;</li>
                                <li>Gossiping about patients is ethically wrong;</li>
                                <li>Avoid immoral, unethical or illegal practice;</li>
                                <li>Show loyalty to patients, co-workers and employer;</li>
                                <li>Be sincere, honest and caring.</li>
                            </ul>
                        </div>

                        <!-- Suggested Student Activities -->
                        <div class="collapsible-section">
                            <details>
                                <summary class="collapsible-trigger">
                                    <span class="trigger-icon">📝</span>
                                    <span>Suggested Student Activities: Legal Responsibilities</span>
                                </summary>
                                <div class="collapsible-content">
                                    <ol class="enhanced-list">
                                        <li>As a future health care professional, how can you avoid a lawsuit?</li>
                                        <li>Can you restrain a person against his or her will if it is for his or her own good?</li>
                                        <li>Can you be sued if you unintentionally leave a patient’s record open and a visitor sees that the patient has a sexually transmitted disease?</li>
                                        <li>What should you do if you see another health care worker make a serious error?</li>
                                        <li>What is meant by the statement: ‘It is easier to prevent negligence than it is to defend it’?</li>
                                        <li>Why is malpractice also called ‘professional negligence’? Who can and cannot be guilty of malpractice?</li>
                                        <li>Could a dental assistant ever be guilty of negligence? Give an example.</li>
                                        <li>What is the difference between assault and battery?</li>
                                        <li>In your own words, describe invasion of privacy.</li>
                                        <li>What type of abuse do you think is the most difficult to prove in court? Why?</li>
                                        <li>A teacher who was hospitalised sues a student nurse for defamation. What do you think might have happened?</li>
                                    </ol>
                                </div>
                            </details>
                        </div>

                        <!-- Medical Legal Puzzle -->
                        <div class="content-card">
                            <h3 class="card-title">Medical Legal Puzzle</h3>
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-63885159.jpeg" alt="Medical Legal Puzzle Grid" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <h4 class="feature-title">Across</h4>
                                    <ol class="enhanced-list" start="2">
                                        <li>When false statements damage a person's reputation.</li>
                                        <li>For example, a physical therapist treats a child without parental consent.</li>
                                        <li>For example, when a dentist writes a letter to a newspaper editor claiming that a patient is a big baby and never pays his bills.</li>
                                        <li>False _____ can be charged if a patient is restrained without proper authorisation.</li>
                                        <li>A wrongful act that does not involve a contract.</li>
                                        <li>Informed _______ is permission granted voluntarily by a person who is of sound mind.</li>
                                        <li>Malpractice is often described as bad _____ or professional negligence.</li>
                                        <li>An example of abuse when a health care worker swears and shouts at a patient.</li>
                                        <li>For example, when a nurse tells the press something about a celebrity patient that is insulting and untrue.</li>
                                    </ol>
                                </div>
                                <div class="feature-card">
                                    <h4 class="feature-title">Down</h4>
                                    <ol class="enhanced-list">
                                        <li>Any care resulting in physical harm, pain, or mental anguish.</li>
                                        <li>Unnecessarily exposing an individual.</li>
                                        <li>For example, a doctor cuts into the bladder when removing the uterus.</li>
                                        <li>A threat or attempt to injure.</li>
                                        <li>For example, nursing assistant used hot bath water and burned patient.</li>
                                        <li>Invasion of privacy can be caused by revealing ______ information about a patient.</li>
                                        <li>Type of informed consent required for major surgery.</li>
                                        <li>Negligence occurs when care that is ______ expected is not given.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <!-- Legal and Ethical Questions -->
                        <div class="content-card">
                            <h3 class="card-title">Legal and Ethical Questions</h3>
                            <div class="collapsible-section">
                                <details>
                                    <summary class="collapsible-trigger">
                                        <span class="trigger-icon">❓</span>
                                        <span>Click to reveal questions and answers</span>
                                    </summary>
                                    <div class="collapsible-content">
                                        <ol class="enhanced-list">
                                            <li>What is a threat or attempt to injure? <strong>Assault</strong></li>
                                            <li>If a nurse assistant forgets to raise the side rails on the bed and the patient falls out of bed, the nurse assistant might be guilty of: <strong>Negligence</strong>.</li>
                                            <li>If a physician fails to use the degree of skill and learning commonly expected in that individual’s profession, the physician could be guilty of: <strong>Malpractice</strong>.</li>
                                            <li>A person who is under the influence of drugs does not have the legal capacity to form a contract because he/she has a: <strong>Legal disability</strong>.</li>
                                            <li>If a laboratory technician sends e-mails to co-workers saying that a particular physician is careless and killed a patient, the lab tech might be guilty of: <strong>Libel</strong>.</li>
                                            <li>What term describes the fact that information about a patient must remain private? <strong>Confidentiality</strong></li>
                                            <li>Before you perform any procedure on a patient, you must have proper: <strong>Authorisation</strong>.</li>
                                            <li>What should you do as a health care worker do if you make a mistake? <strong>Report it immediately to your supervisor</strong>.</li>
                                            <li>When can a health care worker accept a tip or bribe? <strong>Never</strong></li>
                                            <li>What term describes a standard code of conduct for health professionals? <strong>Ethics or Code of Ethics</strong></li>
                                            <li>A nurse is helping a patient walk and jerks the patient by the arm, causing a bruise. The nurse may be guilty of: <strong>Battery</strong>.</li>
                                            <li>What is permission granted voluntarily by a person who is of sound mind after the procedure has been explained in terms the person can understand? <strong>Informed consent</strong>.</li>
                                            <li>If a health care worker makes false statements about a patient that cause the patient to be damaged or ridiculed, the health care worker may be guilty of: <strong>Defamation (or slander)</strong>.</li>
                                            <li>Speaking harshly, swearing or shouting, and using inappropriate words to describe a person’s tribe or nationality are all examples of what kind of abuse? <strong>Verbal</strong>.</li>
                                            <li>What kind of contract exists when a nurse is holding a thermometer and says “put this under your tongue” and the patient puts the thermometer under his or her tongue? <strong>Implied contract</strong>.</li>
                                            <li>If I have the legal capacity to sign a consent form, I must be: <strong>18-years-old and mentally competent</strong>. (Free of legal disability).</li>
                                            <li>What patient’s rights document applies to persons in long-term care facilities? <strong>Resident’s Bill of Rights</strong>.</li>
                                            <li>A document that a person signs to indicate he/she does not want to be resuscitated when he/she stops breathing is a: <strong>Living will</strong>.</li>
                                            <li>Health care records are examples of: <strong>Privileged communications</strong></li>
                                            <li>What is an example of physical abuse? <strong>Hitting, forcing people against their will, etc.</strong></li>
                                            <li>Keeping someone in the hospital against their will could be an example of: <strong>Forced imprisonment</strong>.</li>
                                            <li>Jane’s father signs a document saying that Jane will make decisions for him once he is unable to make decisions. The document is a: <strong>Durable Power of Attorney</strong>.</li>
                                            <li>According to professional standards, before a health care worker performs any procedure on a patient, the health care worker should: <strong>Identify the patient and/or obtain the patient’s consent</strong>.</li>
                                        </ol>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <!-- Patients' Rights and Duties -->
                        <div class="content-card">
                            <h3 class="card-title">Patients’ Rights and Duties</h3>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Statement</th>
                                            <th>True</th>
                                            <th>False</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>Patients have the right to know whether medical treatment is experimental.</td><td>True</td><td>False</td></tr>
                                        <tr><td>2</td><td>Patients have the right to smoke in the hospital</td><td>True</td><td>False</td></tr>
                                        <tr><td>3</td><td>Patient duties imply that they should give a physician all information that may be pertinent to their case, even if this information is strictly personal</td><td>True</td><td>False</td></tr>
                                        <tr><td>4</td><td>Patients are entitled to receive explanations for medical treatment in order to give informed consent</td><td>True</td><td>False</td></tr>
                                        <tr><td>5</td><td>Patients have the right to ignore? Or have the duty to follow physician orders</td><td>True</td><td>False</td></tr>
                                        <tr><td>6</td><td>All patients have the right to confidentiality</td><td>True</td><td>False</td></tr>
                                        <tr><td>7</td><td>Patients may examine their bills, but cannot expect to have them explained due to the many extraneous charges that are accrued</td><td>True</td><td>False</td></tr>
                                        <tr><td>8</td><td>Patients have a duty to be considerate and respectful to health providers?</td><td>True</td><td>False</td></tr>
                                        <tr><td>9</td><td>Patients who are hospitalized cannot expect consideration of privacy due to the intimate nature of many exams and procedures</td><td>True</td><td>False</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="callout callout--success" style="margin-top: var(--space-4);">
                                <div class="callout-header">
                                    <span class="callout-icon">✅</span>
                                    <h4 class="callout-title">Answers</h4>
                                </div>
                                <div class="callout-content">
                                    <p>1. True, 2. False, 3. True, 4. False, 5. False, 6. True, 7. False, 8. False, 9. False</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Constitution of Kenya 2010.</li>
                                <li>Kenya Medical Practitioners and Dentists Board Code of Professional Conduct and Discipline.</li>
                                <li>Kenya Medical Practitioners and Dentists Board Guidelines for Medical and Dental Interns.</li>
                                <li>Kenya National Patients' Right Charter, 2012.</li>
                                <li>Miller-Keane Encyclopedia and Dictionary of Medicine, Nursing, and Allied Health, Seventh edition.</li>
                                <li>National Nurses Association of Kenya (2009) Code of Conduct and Ethics. Nairobi: National Nurses Association of Kenya.</li>
                                <li>The Clinical Officers (Training, Registration and Licensing) (Practicing) Regulations, 2009.</li>
                                <li>Transparency International-Kenya (2011) Kenya Health Sector Integrity Study Report. Nairobi: Transparency International-Kenya.</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Law and Ethics in Health Care.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-11-quiz"
                         data-quiz-js="../quizzes/topic-11-quiz.js">
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
                        <a href="topic-10.html" class="nav-button nav-button--previous">
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

                        <a href="topic-12.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 12: Health Information Systems.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Information Systems | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-11.html" class="nav-button nav-button--previous">
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

                        <a href="topic-13.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 70.5%;"></div>
                        </div>
                        <span class="progress-text">Topic 12 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📊</span>
                        <span>Module 12</span>
                    </div>
                    <h1 class="document-title">Health Information Systems</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Data & Information</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>20 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To enable students to understand the processes and management of health information systems</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Define health information systems and identify key components;</li>
                                <li>Explain the structure of the health information system in Kenya;</li>
                                <li>Identify the sources of health information.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>12.1 Health information system</li>
                                    <li>12.2 Components of an effective health information system</li>
                                    <li>12.3 Structure of the health information system in Kenya</li>
                                    <li>12.4 Sources of health information</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture Notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Definition of HIS and identification of components of the Kenya health information system</td>
                                        <td>To define health information systems and identify key components</td>
                                        <td>Comments regarding time adequacy and stand students’ understanding and perceptions.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Structure of the Kenya health information system and sources of health information</td>
                                        <td>To explain the structure of the health information system in Kenya<br>Identify the sources of health information</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 12.1 Health Information System (HIS) -->
                    <section class="content-section" id="section-12-1">
                        <div class="section-header">
                            <div class="section-number">12.1</div>
                            <h2 class="section-title">Health Information System (HIS)</h2>
                        </div>
                        <div class="content-card">
                            <p>Health information systems refers to any system that captures, stores, manages or transmits information related to the health of individuals or the activities of organisations that work within the health sector. This definition incorporates national, county, sub-county and health facility level routine information systems, disease surveillance systems and also includes laboratory information systems, hospital patient administration systems (PAS) and human resource management information systems (HRMIS).</p>
                            <p>Sound and reliable information is the foundation of decision-making across all health system building blocks. It is essential for health system policy development and implementation, governance and regulation, health research, human resources development, health education and training, service delivery and financing. The health information system provides the underpinnings for decision-making and has four key functions:</p>
                            <ul class="enhanced-list">
                                <li>Data generation;</li>
                                <li>Compilation;</li>
                                <li>Analysis and synthesis; and</li>
                                <li>Communication and use.</li>
                            </ul>
                            <p>The health information system collects data from health and other relevant sectors, analyses the data and ensures their overall quality, relevance and timeliness and converts the data into information for health-related decision-making.</p>
                        </div>
                    </section>

                    <!-- 12.2 Objectives of HIS -->
                    <section class="content-section" id="section-12-2">
                        <div class="section-header">
                            <div class="section-number">12.2</div>
                            <h2 class="section-title">Objectives of HIS</h2>
                        </div>
                        <div class="content-card">
                            <p>An efficient health information system seeks to ensure that users of health information have access to reliable, authoritative, usable, understandable and comparative data. The key users of health information policy-makers, planners, managers, health-care providers, communities and individuals.</p>
                            <p>The broad objectives of HIS are to:</p>
                            <ul class="enhanced-list">
                                <li>Provide data for monitoring and evaluation;</li>
                                <li>Provide an alert and early warning capability;</li>
                                <li>Support patient and health facility management;</li>
                                <li>Enable planning;</li>
                                <li>Provide a basis for research;</li>
                                <li>Facilitate health situation and trends analyses;</li>
                                <li>Facilitate reporting, and reinforce communication of health challenges to diverse users.</li>
                            </ul>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Identify the various types of health information.</li>
                                        <li>What are the correct sources the information you have identified in (1) above?</li>
                                        <li>How can the information be collected and by who?</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 12.3 The Need for Strong Health Information Systems -->
                    <section class="content-section" id="section-12-3">
                        <div class="section-header">
                            <div class="section-number">12.3</div>
                            <h2 class="section-title">The Need for Strong Health Information Systems</h2>
                        </div>
                        <div class="content-card">
                            <p>Sound and reliable health information:</p>
                            <ul class="enhanced-list">
                                <li>Is essential for health system policy development and implementation, governance and regulation, health research, human resources development, health education and training, service delivery and financing.</li>
                                <li>Gives a clear picture of health and sickness at all level of society – individual, household, community, county, country, regional and global.</li>
                                <li>Helps prevent the spread of disease and improve the health of individuals.</li>
                                <li>Leads to better decisions and better spending.</li>
                                <li>Makes it easier to track and confront threats to health at all levels.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- 12.4 Health Sector Information Needs -->
                    <section class="content-section" id="section-12-4">
                        <div class="section-header">
                            <div class="section-number">12.4</div>
                            <h2 class="section-title">Health Sector Information Needs</h2>
                        </div>
                        <div class="content-card">
                            <p>Health professionals and health workers that deal with health issues everyday need to have essential information that can be used for day-to-day management or long-term planning.</p>
                            <p>The different kinds of information needed include:</p>
                            <ol class="enhanced-list">
                                <li><strong>Health determinants</strong> - socioeconomic, environmental, behavioural and genetic factors) and the contextual environments within which the health system operates;</li>
                                <li><strong>Inputs to the health system and related processes</strong> - policy and organisation, health infrastructure, facilities and equipment, costs, human and financial resources and health information systems;</li>
                                <li><strong>The performance or outputs of the health system</strong> - availability, accessibility, quality and use of health information and services, responsiveness of the system to user needs, and financial risk protection;</li>
                                <li><strong>Health outcomes</strong> - mortality, morbidity, disease outbreaks, health status, disability and wellbeing; and</li>
                                <li><strong>Health inequities</strong> - determinants, coverage of use of services, and health outcomes, and including key stratifiers such as sex, socioeconomic status, ethnic group and geographical location.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 12.5 Components of a Health Information System -->
                    <section class="content-section" id="section-12-5">
                        <div class="section-header">
                            <div class="section-number">12.5</div>
                            <h2 class="section-title">Components of a Health Information System</h2>
                        </div>
                        <div class="content-card">
                            <p>A country’s HIS is made up of all the data and records about the population’s health. The sources of data include civil and vital registration (recording births, deaths and causes of death), censuses and surveys, individual medical records, service records and financial and resource tracking information.</p>
                            <p>A health system comprises of three components: inputs, processes and outputs.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Inputs</h3>
                            <p>Inputs or resources are the physical and structural prerequisites of an effective HIS. They include the ability of those responsible to lead and co-ordinate the process; the existence of necessary laws and policies; financial resources and people with the necessary skills to do the work and the infrastructure – everything from office space and desks to filing systems and computer networks.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Processes</h3>
                            <p>The processes used by an HIS include:</p>
                            <ul class="enhanced-list">
                                <li>Indicators – a set of measures that show changes in health profile;</li>
                                <li>Data sources – an integrated HIS brings together data from a variety of sources;</li>
                                <li>Data management needs enable easy access to relevant information for those who need it, while protecting the privacy of individual patients;</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Outputs</h3>
                            <p>The information produced – the HIS outputs – should be relevant, accessible, and useful evidence for decision making.</p>
                            <ul class="enhanced-list">
                                <li>Information products are collated from a range of sources, and synthesised into usable statistics that can be analysed and compared;</li>
                                <li>Dissemination and use. Through widespread dissemination and use of information products, the HIS provides direct benefit to all those who participate in it, providing an ongoing incentive for users to continue to strengthen the system.</li>
                            </ul>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-2ab3f8aa.jpeg" alt="Components of a Health Information System" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 12.1: Components of a Health Information System</p>
                                <p class="figure-caption">Source: Health Metrics Network (2008).</p>
                            </div>
                        </div>
                    </section>

                    <!-- 12.6 Structure of the Health Information System in Kenya -->
                    <section class="content-section" id="section-12-6">
                        <div class="section-header">
                            <div class="section-number">12.6</div>
                            <h2 class="section-title">Structure of the Health Information System in Kenya</h2>
                        </div>
                        <div class="content-card">
                            <p>The Kenya National Health Information system (NHIS) is a comprehensive and integrated structure that collects, collates, analyses, evaluates, stores, disseminates health and health-related data and information for use by all. The NHIS seeks to address such issues as partnership in data collection and information sharing, guidelines on data processing and data warehousing as well as instituting standardised mandatory reporting by all care providers (public and private) and quality in data management in the health sector.</p>
                            <p>The NHIS is composed of producers of health statistics including Ministry of Health, Kenya National Bureau of Statistics (KNBS), vital registration, private health institutions, research institutions and FBOs amongst others.</p>
                            
                            <h3 class="card-title" style="margin-top: var(--space-6);">Figure 12.2: Structure and Responsibilities in the National Health Information System</h3>
                            
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">NHIS Coordinating Committee (NHISCC)</h4>
                                        <p class="definition-text">The NHISCC is made up of representatives from senior level officers in the Ministry of Health, statistical constituencies and development partners. The role of the NHISCC is to provide technical advisory role for health and social welfare data management in close collaboration with other strategic partners including KNBS and Vital Registration. The committee ensures unified and timely data collection, collation, processing and dissemination.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">General public</h4>
                                        <p class="definition-text">The public should ensure that any vital events or other significant health occurrences in the community are reported to the responsible authorities. On the other hand the public is entitled to information on the Ministry's performance through relevant publications or on specific special requests.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Private sector</h4>
                                        <p class="definition-text">All health service providers in the private sector have a mandatory responsibility to submit their health data regularly including data on all diseases under surveillance.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Non-governmental organisations</h4>
                                        <p class="definition-text">Non-governmental organisations are responsible for ensuring that all health facilities under their respective umbrellas adhere to the NHIS. In collaboration with the Ministry of Health and other partners, NGOs are expected to mobilise resources for NHIS and ensure efficient data and information management in all its satellite facilities.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4 class="card-title" style="margin-top: var(--space-6);">Ministry of Health - Roles by level</h4>
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Community level</h4>
                                        <p class="definition-text">Every Community Unit (CU) should maintain and update its CHIS that shall be shared regularly with household members in a forum as stated in the health sector community strategy. The community health workers maintain registers recording daily activities and reporting regularly to supervising health facility.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Health facility level</h4>
                                        <p class="definition-text">Health facilities maintain and update HIS data which include records, filing system(s) and registry for primary data collection tools such as registers, cards, file folders, summary forms such as reporting forms, CDs, electronic backups safeguarded from any risks e.g. fire, floods, access by unauthorised person, etc.<br>Every health facility summarise health and health related data from the community and health facility, analyse, disseminate and use the information for decision-making, provide feedback then transmit summaries to the next level.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Sub-county level</h4>
                                        <p class="definition-text">Sub-county has an oversight responsibility to manage all health and health related data from all service providers within their area of jurisdiction.<br>• It provides technical, material and financial support to all service providers in HIS.<br>• Creates and maintains a data repository.<br>• Collaborates and work in partnership with other statistical constituencies at the sub-county level to build one HIS.<br>• It should collate, analyse, disseminate, use health and health related data from all health facilities/providers and give feedback to all health care providers.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">County government</h4>
                                        <p class="definition-text">The county government has oversight responsibility to manage all health and health related data from all service providers within their area of jurisdiction.<br>• Provides technical, material and financial support to all sub-county government and service providers in HIS.<br>• Maintains a data repository for the county.<br>• Collaborates and works in partnership with other statistical constituencies at the provincial level to build one HIS.<br>• Collates, analyses, disseminates and makes use health and health related data from all sub-counties and gives feedback to all health care providers in addition to submitting the same to MoH.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">MoH</h4>
                                        <p class="definition-text">The MoH have oversight responsibility to manage all health and health related data from all service providers.<br>• Provides technical, material and financial support to all counties and service providers in HIS.<br>• Develops guidelines and formulates policies.<br>• Coordinates development of minimum data sets and data requirements of the health sector.<br>• Collate, analyse, disseminate and use health and health related data from all counties and service providers and provide feedback to all.<br>• Creates and maintains a national data repository.<br>• Collaborates and works in partnership with other statistical constituencies at the national to build one HIS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 12.7 Sources of Health Information -->
                    <section class="content-section" id="section-12-7">
                        <div class="section-header">
                            <div class="section-number">12.7</div>
                            <h2 class="section-title">Sources of Health Information</h2>
                        </div>
                        <div class="content-card">
                            <p>A reliable country/county health information system provides the best source of relevant, timely and credible health information.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 12.1 Sources of Health Information</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Type of Information</th>
                                            <th>Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Population based information</td>
                                            <td>Census, household surveys, specials studies, civil/vital registration systems</td>
                                        </tr>
                                        <tr>
                                            <td>Health service information</td>
                                            <td>Outline service statistics, national health accounts, electronic medical records service</td>
                                        </tr>
                                        <tr>
                                            <td>Health management information</td>
                                            <td>Financial information system, human resource information system, logistics and supplies information system, service statistics system, electronic medical records system, pharmaceutical procurement</td>
                                        </tr>
                                        <tr>
                                            <td>Special health information</td>
                                            <td>Academic, research institutions and international organisations for research and survey findings</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Health Metrics Network (2008) Components of a Health Information System. Geneva: WHO.</li>
                                <li>Health Metrics Network (2008) Framework and Standards for Country Health Information Systems. 2<sup>nd</sup> ed. Geneva: WHO.</li>
                                <li>Management Sciences for Health (2010). Health Systems in Action: An eHandbook for Leaders and Managers. Arlington, VA: Management Sciences for Health. Available at &lt;http: www.msh.org&gt;. [Accessed 5 May 2014].</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. Health Sector Strategic Plan For Health Information System 2009-2014.</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. Health Sector Information System Policy 2010- 2030.</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. National E-Health Strategy 2011-2017</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation (2010) Standards and Guidelines for Electronic Medical Records Systems in Kenya</li>
                                <li>Republic of Kenya (2008) Health Sector Indicator and Standard Operating Procedures Manual for Health Workers. Nairobi: Government Printer.</li>
                                <li>Republic of Kenya. Report for the Assessment of the Health Information System of Kenya</li>
                                <li>USAID (2009) ‘Measuring the Impact of Health Systems Strengthening. A Review of the Literature’ [online]. Available a &lt;https: www.k4health.org&gt; [Accessed 2 June 2014].</li>
                                <li>WHO (2010) Monitoring The Building Blocks of Health Systems: A Handbook of Indicators and their Measurement Strategies. Geneva: WHO.</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Health Information Systems.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-12-quiz"
                         data-quiz-js="../quizzes/topic-12-quiz.js">
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
                        <a href="topic-11.html" class="nav-button nav-button--previous">
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

                        <a href="topic-13.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 13: Project Management.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Management | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-12.html" class="nav-button nav-button--previous">
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

                        <a href="topic-14.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 76.4%;"></div>
                        </div>
                        <span class="progress-text">Topic 13 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📋</span>
                        <span>Module 13</span>
                    </div>
                    <h1 class="document-title">Project Management</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Planning & Management</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>25 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To equip the student with knowledge and skills to enable them understand and manage projects</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Describe the concepts and principles of project management;</li>
                                <li>Discuss the importance of project planning and types of plans;</li>
                                <li>Define project cycle management and outline the various cycles;</li>
                                <li>Describe county planning;</li>
                                <li>Outline the various planning models.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>13.1 Project Management</li>
                                    <li>13.2 Principles and concepts of project management</li>
                                    <li>13.3 Project planning and design</li>
                                    <li>13.4 Project cycle management</li>
                                    <li>13.5 Planning Methods and tools</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, Power Point (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Project management<br>Principles and concepts of</td>
                                        <td>To define and describe the various components project management</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Project cycle management and project planning methods and tools</td>
                                        <td>To identify and describe the various components of project cycle management and project planning methods and tools</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 13.1 Project Management -->
                    <section class="content-section" id="section-13-1">
                        <div class="section-header">
                            <div class="section-number">13.1</div>
                            <h2 class="section-title">Project Management</h2>
                        </div>
                        <div class="content-card">
                            <p>Project management is a methodical approach to achieving agreed upon results within a specified timeframe with available resources. It involves applying knowledge, skills, tools and techniques to a wide range of activities in order to meet the requirements of a project. The focus of project management is to meet the expectations of a project in order to fulfil the needs that have been identified by the people. Project management is accomplished through managerial processes of planning, organising, controlling, leading and motivating human resource to identify resource requirements, establishing clear and achievable objectives, balancing the competing demands for quality, scope, time and cope and adapting the specifications, plans, and approach to the different concerns and expectations of the various stakeholders to generate outputs (deliverables). Project management is often an important role for health managers/supervisors. The concepts, methods and tools described in this module are an important part of a supervisor's repertoire.</p>
                        </div>
                    </section>

                    <!-- 13.2 Principles and Concepts -->
                    <section class="content-section" id="section-13-2">
                        <div class="section-header">
                            <div class="section-number">13.2</div>
                            <h2 class="section-title">Principles and Concepts of Project Management</h2>
                        </div>
                        <div class="content-card">
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">🎯</div>
                                    <h4 class="feature-title">Clearly Defined Goals</h4>
                                    <p class="feature-text">A goal is an end point to be achieved by carrying out a project. Every project should have a clear end point expressed in writing as part of the contents of project documents. The project goal is defined during the project design stage.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🔄</div>
                                    <h4 class="feature-title">Consistency</h4>
                                    <p class="feature-text">For any project to succeed, one should keep focused to an end goal. It is important to use various tools to ensure success of the project. This includes schedules, task lists and budgets to keep the project on track. This ensures adherence to the phases of the project cycle (13.4). This principle stipulates adherence to the phases of project cycle and a well-informed decision-making process.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">👥</div>
                                    <h4 class="feature-title">Effective Stakeholder Management</h4>
                                    <p class="feature-text">Stakeholder involvement in project management involves the use of participatory planning workshops at key phases of the project cycle and the formulation of the project purpose in terms of sustainable benefits to be delivered to beneficiaries. Stakeholders can contribute their expert knowledge; offer their political endorsement which is essential to the success of the project, provide access (to power, influential people and or resources).</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">📅</div>
                                    <h4 class="feature-title">Effective Planning, Design and Control</h4>
                                    <p class="feature-text">Projects are delivered under constraints of time, cost, scope and quality of uncertain environment. Therefore, projects must be designed with the end (or goal) in mind and involving stakeholders so that control is possible. This will ensure sustainable benefits.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">⚡</div>
                                    <h4 class="feature-title">Effective Change Management</h4>
                                    <p class="feature-text">In a project, set-up change is unavoidable. A flexible approach needs to be maintained to absorb any changes that may arise but also not divert completely from the initial plan and intended project objectives. Change management is an approach to shifting or transitioning individuals, teams and organisations from a current state to a desired future state. It is an organisational process aimed at helping stakeholders to accept and embrace changes in their environment. In some project management contexts, change management refers to a process wherein changes to a project are formally introduced and approved. Change management uses basic structures and tools to control any organisational change effort. The goal is to maximise benefits and minimise the change impacts on workers and avoid distractions.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🌱</div>
                                    <h4 class="feature-title">Sustainability</h4>
                                    <p class="feature-text">There should be aspects incorporated for sustainability of the project within the plan at the project design stage. Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. In other words, it ensures that today's growth does not jeopardise the growth possibilities of future generations.</p>
                                </div>
                            </div>

                            <p style="margin-top: var(--space-4);">The lecturer should ask the students some of the questions that one should ask in the design phase to ensure that the project is sustainable.</p>
                        </div>
                    </section>

                    <!-- 13.3 Project Planning and Design -->
                    <section class="content-section" id="section-13-3">
                        <div class="section-header">
                            <div class="section-number">13.3</div>
                            <h2 class="section-title">Project Planning and Design</h2>
                        </div>
                        <div class="content-card">
                            <p>Project planning is the process of developing and maintaining or adapting a project plan that provides supporting details to the project definition in terms of resources, time, cost, scope and quality plan and schedules. It is about constructing a statement that indicates why, what, who, when, where, how much, what standards and so what. The major inputs to project planning process are the scope statement, environmental factor analysis, which include political, economic, technical, social cultural and technological factors and a good understanding of the resource requirements for the proposed activities. The main output for project planning is the project management plan. The planning phase involves scheduling of time, costing and budgeting and risk management. This is a very critical stage of any project.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Importance of project planning and design</h3>
                            
                            <h4 class="card-title">Cost-effectiveness</h4>
                            <p>Project management provides a roadmap for the journey of success. It is the greatest resource that allows the manager to understand available resources and their use. Thus, with a plan in hand, it is easy to utilise the resources in the best possible way. Project planning, prior to launching a project, identifies irrelevant costs, reduces wastage of resources and thus ensures cost-effectiveness in the longer run.</p>

                            <h4 class="card-title">Better Productivity</h4>
                            <p>Project management keeps the quality of products and services in constant check thus ensuring better productivity in terms of quality and quantity. This not only helps the organisation in earning goodwill for a lifetime but also promises customer satisfaction. Trustworthy quality of products and services is intended to retain existing clientele and attracting new ones.</p>

                            <h4 class="card-title">Minimisation of Risks</h4>
                            <p>Every organisation faces risks of loss for various reasons. However, identifying risks and solutions is easier with a strategy. This maintains stability in the work. By planning and analysing, a project manager can mitigate risks and be a part of fair competition. Project management helps in identification of loopholes and potential threats. Once these are singled out, the management can then take decisions to change strategies to minimise risks that can negatively affect productivity.</p>
                            <p>An organisation can prepare a risk management plan detailing how to deal with the various risks that they may encounter during project implementation. For example, during the implementation of the project, one of the common risks is that there may be lack of technical capacity of implementing organisations to manage project resources efficiently and effectively. Therefore, during the planning phase, standards and regulations should be formulated. These standards and regulations should focus on capacities of the organisations, the requirements and actions necessary where such requirements and capacities are not met.</p>

                            <h4 class="card-title">Accomplishing Predetermined Goals</h4>
                            <p>Every viable organisation has goals and objectives which allow the organisation or institution to fulfil its mission. Project management is the key tool for achieving predetermined targets in a structured way. It decides the strategies that will be used to reach the goal quickly. It is a structured way of getting to your objectives.</p>
                        </div>
                    </section>

                    <!-- 13.4 Project Cycle Management -->
                    <section class="content-section" id="section-13-4">
                        <div class="section-header">
                            <div class="section-number">13.4</div>
                            <h2 class="section-title">Project Cycle Management</h2>
                        </div>
                        <div class="content-card">
                            <p>The project cycle is a way of viewing the main elements that projects have in common and how they relate to each other in sequence. The precise formulation of the cycle and its phases varies from organisation to organisation. There is no standard cycle, although the basic components are discussed below.</p>
                            <p>Project cycle management is the systematic process of programming, project identification, project appraisal, financing, implementing, monitoring and evaluation. It is used to guide management activities and decision making procedures during the life-cycle of a project from start to end. It involves regulating and supervising various activities undertaken at each phase of the project cycle.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-7ae1bcac.jpeg" alt="The Project Cycle" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 13.1 The Project Cycle</p>
                                <p class="figure-caption">Source: Gitonga (2010).</p>
                            </div>

                            <div class="process-steps">
                                <div class="process-step">
                                    <div class="step-number">01</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Programmimg/Project Concept</h5>
                                        <p class="step-text">This is the establishment of the general intervention strategy. This is the stage where the idea regarding the required intervention in a specific area is identified i.e. the problem to be addressed is identified. The idea may be identified through several interactions including focus group discussions, brainstorming and problem inventory analysis, amongst others.<br><br>In the public sector in Kenya, during this phase, the situation at national and sectoral level is analysed to identify aspirations, constraints and opportunities which development cooperation could address. This involves a review of socio-economic indicators, and national challenges. The purpose is to identify and agree on the purpose and objectives that should respond ultimately to development priorities and thus to provide a relevant and feasible programming framework within which projects can be identified and prepared. For each of these priorities, the project design teams will formulate strategies that take account of the lessons of past experience as well as opportunities andor emerging needs.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">02</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Project Identification and Formulation</h5>
                                        <p class="step-text">During the identification phase, ideas for projects and other development actions are identified and screened for further study. This involves consultation with the intended beneficiaries of each action, an analysis of the problems they face (given the aspirations) and the identification of options to address these problems. A decision should be made on the relevance of each project idea both to the intended beneficiaries and to the programming framework and which ideas should be further studied during the formulation phase.<br><br>At the formulation stage, the relevant project ideas are developed into operational project plans. Beneficiaries and other stakeholders participate in the detailed specification of the project idea that is then assessed for its feasibility (whether it is likely to succeed) and sustainability (whether it is likely to generate long-term benefits for the beneficiaries). On the basis of this assessment, a decision is made on whether to draw up a formal project proposal and seek funding for the project. A monitoring plan should be prepared during this phase to ensure that the project is implemented against proposed resources and timelines.<br><br>At this phase, baseline data is collected and the needs assessment carried out. The idea is expressed in a proposal. This process includes documentation, validating, ranking and approving various projects by the project staff or professional consultants.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">03</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Project Appraisal</h5>
                                        <p class="step-text">This is the analysis of a proposed operation to determine its merit and acceptability in accordance with established criteria in the Request for Proposals (RFP). This is the final step before an operation is agreed for financing. It checks that the operation is feasible against the situation on the ground that the objectives set remain appropriate and that costs are reasonable. The proposal is appraised based on the submitted documents-operation proposal and funding request describing the context, the needs and problem analysis, the expected results and impact as well as implementation and resource schedules. During this phase, negotiations are carried out and a final proposal submitted for financing. The negotiations are carried out with funding organisations who could be the Government of Kenya and/or development partners.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">04</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Financing</h5>
                                        <p class="step-text">During the financing phase, project proposals are examined by the government or funding agencies and a decision taken on whether or not to fund the project. The government, and/or development partners agree on the modalities of implementation and formalise these in a legal document which sets out the arrangements by which the project will be funded and implemented. The document could be in form of the following documents: budget sector plans for Government of Kenya funded activities and or financing agreements from partner countries. These are signed between two countries. Further information is in Module 8: Financial Management and Resource Mobilization. The award is made during this phase and relevant contractual documentations signed between the organisation and the funding agency.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">05</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Implementation</h5>
                                        <p class="step-text">During the implementation phase, the project is mobilised and executed. This may require the tendering and award of contracts for technical assistance or works and supplies. During implementation and in consultation with beneficiaries and stakeholders, project management assesses actual progress against planned progress to determine whether the project is on track towards achieving its objectives. If necessary, the project is re-oriented to bring it back on track, or to modify some of its objectives in the light of any significant changes that may have occurred since its formulation.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">06</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Monitoring</h5>
                                        <p class="step-text">Monitoring is a continuous assessment of implementation in relation to agreed schedules and use of inputs based on planned expectations. This phase takes place during the implementation. A monitoring plan is used to monitor project implementation. It ensures that input deliveries, work schedules, targeted outputs and other required actions are proceeding according to plan. Monitoring provides the manager and other key stakeholders with continuous feedback on implementation i.e. identifying actual or potential successes and problems as early as possible to facilitate timely interventions or adjustment to the operations.<br><br>Monitoring is a management activity that allows a continuous adaptation of the intervention if problems arise or if changes in the context have an influence on the performance of the operation. During the monitoring, operation managers compare at different moments the actual implementation with what was planned. If activities cannot be implemented as foreseen for some reason, a reflection has to lead to an adaptation of that activity so that the success of the operation remains guaranteed.<br><br>Continuous communication with different stakeholders is important. Through periodic reports usually stipulated in the deliverables, they keep the contracting agency whether government or development partner, informed about the progress, results, challenges, lessons learnt and planned activities for the next period. The internal monitoring reports, made by project staff, complete the monitoring procedures. The activity and resource schedules form the basis for a monitoring system.</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">07</div>
                                    <div class="step-content">
                                        <h5 class="step-title">Evaluation</h5>
                                        <p class="step-text">Evaluation is a process of determining the relevance, efficiency, effectiveness and impact of activities in light of their objectives. It assists decision makers by providing information about any needed adjustments of objectives, policies, implementation strategies and other project elements. It examines whether the assumptions made during project formulation or appraisal stage are still valid or if changes are required to ensure overall project objectives are achieved. Refer to Module 17 for more detailed information on this area.<br><br>There are several ways of categorising project evaluations where: the summative evaluation is also known as end term evaluation and formative evaluations also known as midterm evaluation. Summative evaluations are carried out when the project is over and the aim is to assess its effectiveness and impact. Formative evaluations are usually undertaken early to gain understanding of what is being achieved in order to introduce improvements.<br><br>Summative evaluations judge merit and the work; the extent to which the desired goals have been attained; whether measured outcomes can be attributed to observed interventions and the conditions under which goals were attained. Formative evaluations help programmes get ready for summative evaluation by improving programme processes and providing feedback about strengths and weaknesses that appear to affect goal attainment.<br><br>• Quantitative and qualitative evaluations- Quantitative evaluations focus on measurable inputs provided and changes that result from the direct implementation of project activities. Qualitative evaluations are more process oriented and focus on assessment of changes of hard-to-measure factors such as attitudes, behaviour, skills and level of knowledge.<br>• Self-evaluation-This is an evaluation conducted by people directly involved in the implementation of the project.<br>• Internal evaluation- An evaluation conducted by people who form part of the staff of the organisation that provided the funding.<br>• External evaluation- An evaluation conducted by those who are external to funding organisations and project.<br><br>During the phase, the government and or development partner assess the project's accomplishments and identify lessons that have been learned. The final evaluation findings are used to improve the design of future projects or programmes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 13.5 Planning Methods and Tools -->
                    <section class="content-section" id="section-13-5">
                        <div class="section-header">
                            <div class="section-number">13.5</div>
                            <h2 class="section-title">Planning Methods and Tools</h2>
                        </div>
                        <div class="content-card">
                            <p>Planning methods and tools are linear and logical. Others may be more intuitive and creative hence creating a mental picture.</p>

                            <h3 class="card-title">Types of tools</h3>
                            
                            <h4 class="card-title">i. The Logical Framework Matrix</h4>
                            <p>The logical frame sets out the intervention logic of the project i.e. if activities are undertaken, results will be achieved and thus project purpose. It describes the important assumptions and risks that underlie this logic. This provides the basis for checking the feasibility of the project. It defines the tasks to be undertaken, the resources required and the management responsibilities. It provides a framework against which progress will be monitored and evaluated.</p>

                            <h4 style="margin-bottom: var(--space-4);">Table 13.1 Logical Framework Matrix Structure</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Project description</th>
                                            <th>Performance indicators</th>
                                            <th>Means of verification</th>
                                            <th>Assumptions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Goal: The broader development impact to which the project contributes to at a national or sectoral level.</td>
                                            <td>Measures of the extent to which a sustainable contribution to the goal has been made. Used during evaluation.</td>
                                            <td>Sources of information and methods used to collect and report it.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Purpose: The development outcome expected at the end of the project. All components will contribute to this.</td>
                                            <td>Conditions at the end of the project indicating that the purpose has been achieved and benefits are sustainable. Used for project completion and evaluation.</td>
                                            <td>Sources of information and methods used to collect and report it.</td>
                                            <td>Assumptions concerning the purpose/ goal linkage.</td>
                                        </tr>
                                        <tr>
                                            <td>Component objectives: The expected outcome of each component.</td>
                                            <td>Measures of the extent to which components and objectives have been achieved and lead to sustainable benefits. Used during review and evaluation.</td>
                                            <td>Sources of information and methods used to collect and report it.</td>
                                            <td>Assumptions concerning the component, objective/ purpose linkage</td>
                                        </tr>
                                        <tr>
                                            <td>Outputs: The direct measurable results (goods or services) of the project which are largely under project management's control.</td>
                                            <td>Measures of the quantity and quality of outputs and the timing of their delivery. Used during monitoring and review.</td>
                                            <td>Sources of information and methods used to collect and report it.</td>
                                            <td>Assumptions concerning the output/ component, objective/ purpose linkage</td>
                                        </tr>
                                        <tr>
                                            <td>Activities: The tasks carried out to implement the project and deliver the identified outputs.</td>
                                            <td>Implementation/ work programme targets. Used during monitoring.</td>
                                            <td>Sources of information and methods used to collect and report it.</td>
                                            <td>Assumptions concerning the activity/output linkage.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Gitonga (2010).</p>
                            </div>

                            <p>The logical framework is used in the design, monitoring and evaluation of projects. It is used during the entire project implementation cycle. It ensures that the fundamental questions are asked and weaknesses analysed in order to provide decision makers with better and more relevant information. The tool guides systematic and logical analysis of the inter-related key elements; improves planning by highlighting linkages between project elements and external factors; provides a better basis for systematic monitoring and analysis of the effects of projects; facilitates common understanding and better communication between decision makers, managers and other parties involved in the project and ensures systematic monitoring of the project.</p>
                            <p>The logical framework is considered rigid as the objectives and external factors specific at the onset are over emphasised. The tool is a fairly complex, to obtain full benefits, the implementers should have a thorough understanding of the same.</p>

                            <h4 class="card-title">ii. Gantt Charts</h4>
                            <p>A Gantt chart is an important project management tool. It is used to keep track of progress for each activity. A Gantt chart breaks the work down into smaller steps, indicates dependencies and defines milestones. It assigns human resources to work on tasks. They are excellent models for scheduling, budgeting, reporting, presenting and communicating project plans and progress easily and quickly. A Gantt chart can be constructed using MS Excel or a similar spreadsheet.</p>

                            <h4 style="margin-bottom: var(--space-4);">Figure 13.2 Gantt Chart</h4>
                            <div class="table-wrapper">
                                <table class="content-table content-table--compact">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Project Name____Kick Polio Out of Kenya____</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th colspan="2">Project Description____Polio Immunisation Campaign____</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th colspan="2">Project Length_10 Days____</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th colspan="2">Start Date____01/07/13____</th>
                                            <th colspan="2">End Date____17/07/13</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th colspan="6"></th>
                                            <th colspan="4">Week 1</th>
                                            <th colspan="4">Week 2</th>
                                        </tr>
                                        <tr>
                                            <th>Leve</th>
                                            <th>Task</th>
                                            <th>Respn</th>
                                            <th>Start Date</th>
                                            <th>Finish Date</th>
                                            <th>WD</th>
                                            <th>Mon</th>
                                            <th>Tues</th>
                                            <th>Wedn</th>
                                            <th>Thur</th>
                                            <th>Fri</th>
                                            <th>Mon</th>
                                            <th>Tues</th>
                                            <th>Wedn</th>
                                            <th>Thur</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Product Design</td>
                                            <td></td>
                                            <td>01-07-13</td>
                                            <td>08-07-13</td>
                                            <td>7</td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>1.1</td>
                                            <td>Define Name</td>
                                            <td>JB</td>
                                            <td>01-07-13</td>
                                            <td>02-07-13</td>
                                            <td>2</td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>1.2</td>
                                            <td>Box cover design</td>
                                            <td>CG</td>
                                            <td>03-07-13</td>
                                            <td>08-07-13</td>
                                            <td>5</td>
                                            <td></td>
                                            <td></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>1.3</td>
                                            <td>User guide</td>
                                            <td>CG</td>
                                            <td>03-07-13</td>
                                            <td>08-07-13</td>
                                            <td>5</td>
                                            <td></td>
                                            <td></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Marketing kit</td>
                                            <td></td>
                                            <td>09-07-13</td>
                                            <td>17-07-13</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                        </tr>
                                        <tr>
                                            <td>2.1</td>
                                            <td>Brochures</td>
                                            <td>JB</td>
                                            <td>09-07-13</td>
                                            <td>17-07-13</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                        </tr>
                                        <tr>
                                            <td>2.2</td>
                                            <td>Banners</td>
                                            <td>CG</td>
                                            <td>09-07-13</td>
                                            <td>17-07-13</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="table-cell--highlight"></td>
                                            <td class="table-cell--highlight"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>The Gantt charts create a picture of complexity of the project and assist to set realistic timeframes. Gantts charts can, however, become extraordinarily complex. The length of the bar does not indicate the amount of work input at every stage. The Gantt chart requires constant updating to provide adequate information to the management.</p>

                            <h4 class="card-title">iii. Brainstorming</h4>
                            <p>Brainstorming is usually the first crucial creative stage of the project management and project planning process. The brainstorming process is ideally a free-thinking and random technique. Consequently, this stage of the project planning process can benefit from being facilitated by a team member able to manage such a session, specifically to help organise people to think randomly and creatively. The advantages of using brainstorming are that new ideas are generated and problems are better defined. It also helps reduce conflict. However, the brainstorming sessions can generate unworkable ideas.</p>

                            <h4 class="card-title">iv. Fishbone Diagrams</h4>
                            <p>The fishbone diagram identifies possible causes for an effect or problem. Fishbone diagrams are good at identifying hidden factors which can be significant in enabling larger activities, resources areas or parts of a process. Fishbone diagrams are not good for scheduling or showing interdependent time-critical factors. Fishbone diagrams are also called 'cause and effect diagrams' and Ishikawa diagrams, after Kaoru Ishikawa (1915-89), a Japanese professor specialising in industrial quality management and engineering who devised the technique in the 1960s.</p>
                            <p>A fishbone diagram has a central spine running left to right, around which is built a map of factors which contribute to the final result (or problem). For each project, the main categories of factors are identified and shown as the main 'bones' leading to the spine. Ishikawa's diagram became known as a fishbone diagram, obviously, because it looks like a fishbone:</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-9f054164.jpeg" alt="Fishbone Diagram" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 13.3 Fishbone Diagram</p>
                            </div>

                            <h4 class="card-title">v. Project critical path analysis (CPA)</h4>
                            <p>A critical path analysis is normally shown as a flow diagram, whose format is linear (organised in a line), and specifically a time-line. CPA is also called Critical Path Method (CPM). A commonly used tool within CPA is PERT (Programme/Project Evaluation and Review Technique) which is a specialised method for identifying related and interdependent activities and events, especially where a big project may contain hundreds or thousands of connected elements. PERT is not normally relevant in simple projects, but any project of considerable size and complexity, particularly when timings and interdependency issues are crucial, can benefit from the detailed analysis enabled by PERT methods.</p>
                            <p>CPA flow diagrams are very good for showing interdependent factors whose timings overlap or coincide. They also enable a plan to be scheduled according to a timescale. Critical Path Analysis flow diagrams also enable costing and budgeting, and help planners to identify causal elements.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-44c6fcd4.jpeg" alt="Critical Path Analysis flow diagrams" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 13.4 Critical Path Analysis flow diagrams</p>
                                <p class="figure-caption">Source: Gitonga (2010).</p>
                            </div>

                            <p>The project above takes 126 minutes to complete. It has a total of eight stages from start to end. It moves from one stage to another as follows:</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 13.2 Activity Scheduling Using Critical Path Analysis</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Stage</th>
                                            <th>Activity</th>
                                            <th>No of minutes</th>
                                            <th>Cumulative</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1.</td><td>A- Registration of patient</td><td>1</td><td>1</td></tr>
                                        <tr><td>2.</td><td>B- Patient pays</td><td>3</td><td>4</td></tr>
                                        <tr><td>3.</td><td>C-Patients sees a doctor</td><td>60</td><td>64</td></tr>
                                        <tr><td>4.</td><td>D-Patient gets laboratory tests</td><td>1</td><td>65</td></tr>
                                        <tr><td>5.</td><td>E-Patients gets an X-Rays</td><td>10</td><td>75</td></tr>
                                        <tr><td>6.</td><td>F-Patients goes back to the doctor</td><td>2</td><td>77</td></tr>
                                        <tr><td>7.</td><td>G-Patient pays for the drugs</td><td>15</td><td>92</td></tr>
                                        <tr><td>8.</td><td>H-Patient collects drugs</td><td>45</td><td>45</td></tr>
                                        <tr><td><strong>Total</strong></td><td></td><td></td><td><strong>137</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>The total cumulative time is 137 minutes. However, from the diagram the time taken is 126 minutes since laboratory and x-rays tests are done concurrently. Often, the patient does one as he is waiting for the results of the other procedure thereby saving on the time. This method therefore helps identify such activities and schedule to minimise the time of the project hence saving on project resources.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Types of plans</h3>
                            <p>There are several types of plans in organisations. These plans relate to one another. The diagram below shows how each plan informs others. These plans are discussed in the sections that follow.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-4e45489c.jpeg" alt="Relationship between types of plans" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Source: Gitonga (2010).</p>
                            </div>

                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">i. Strategic Plans</h4>
                                        <p class="definition-text">Strategic planning is part of an organisation's activities. It is used to set priorities, focus energy and resources, strengthen operations, ensure that employees and stakeholders are working towards common goals, establish agreement around intended outcomes/results and assess and adjust the organisation's direction in response to a changing environment. This is done through establishing priorities, making of strategic choices, pulling the entire organisation together and providing an outline on the application of resources. The strategic plan focuses on the following:</p>
                                        <ul class="enhanced-list">
                                            <li><strong>Where we are now?</strong> This is based on a comprehensive assessment of the internal and external environment.</li>
                                            <li><strong>Where do we want to be?</strong> This is a picture (real or mental) of the desired future x number of years from now. What keeps us or might keep us from moving to where we want to be (obstacles)?</li>
                                            <li><strong>How can we address these obstacles or hindering forces?</strong> This is the thrust of the strategic plan.</li>
                                            <li><strong>How do we monitor our progress?</strong> This set parameters on how to measure gains to be made.</li>
                                        </ul>
                                        <p class="definition-text">Strategic plans can span anywhere from 3 to 25 years, depending on the level of the aspiration. It is more than a visionary document, broad enough to convey the desired future state, flexible to allow and accommodate changes over time.</p>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">ii. Annual Operational Plans</h4>
                                        <p class="definition-text">An operational planning is a sub-set of strategic work planning. It describes short-term ways of achieving milestones and explains how, or what portion of a strategic plan will be put into operation during a given operational period in the case of commercial application, a fiscal year or another given budgetary term. An annual operational plan is the basis for, and justification of an annual operating budget request. Therefore, a five-year strategic plan would need five operational plans funded by five operating budgets.</p>
                                        <p class="definition-text">Annual operational plans describe the activities and required budgets for each part of the organisation for the next 1-3 years. They link the strategic plan with the activities the organisation will deliver and the resources required to deliver them. Annual plans can be tweaked and should especially as circumstances change, compile to the strategic plan.</p>
                                        <p class="definition-text">Annual operational plans draw directly from the strategic plans, programme missions and goals, objectives and activities. The annual operational plan is both the first and last step in preparing an operating budget request. As the first step, the annual operational plan provides a plan for resource allocation. As the last step, the annual operational plan may be modified to reflect policy decisions or financial changes made during the budget development process.</p>
                                        <p class="definition-text">Annual operational plans should be prepared by the people who will be involved in project implementation. There is often a need for significant cross-departmental dialogue as plans created by one part of the organisation inevitably have implications for other parts. Annual operational plans have the following sections:</p>
                                        <ul class="enhanced-list">
                                            <li>Objectives - sometimes divided among key organisational strategies;</li>
                                            <li>Activities to be implemented;</li>
                                            <li>Quality standards;</li>
                                            <li>Desired outcomes, measurable indicators, deliverables;</li>
                                            <li>Staffing and resource requirements;</li>
                                            <li>Implementation timetables;</li>
                                            <li>A process for monitoring progress (or a monitoring and evaluation plan).</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">iii. Departmental Plans</h4>
                                        <p class="definition-text">A department plan defines the goals and activities a department will undertake for a specified time period and may be included as a section in the organisation’s overall plan. The department plan is linked to the operation plan. It shows clear deliverables and output for the department. Because different departments have different responsibilities, the particular data needed for and useful in department business plans varies widely. The departmental plan may have the following sections:</p>
                                        <ul class="enhanced-list">
                                            <li>Mission and vision of the department;</li>
                                            <li>The results of a situational analysis that is relevant to the mission of the department;</li>
                                            <li>The goals of the department that derive from the mission, vision and analysis.</li>
                                            <li>Overall strategies, sometimes called strategic thrusts or directions;</li>
                                            <li>Objectives for each strategic direction;</li>
                                            <li>Key performance indicators for the department;</li>
                                            <li>The budget to support the plan;</li>
                                            <li>The long term outlook.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">iv. Individual plans</h4>
                                        <p class="definition-text">The individual plan has two component parts: the performance plan and a (professional) development plan. The individual plan, sometimes called a performance agreement, results from periodic conversations between the supervisor and employee for a particular performance management cycle. Once agreed, it is signed off by the functional head (or supervisor) to ensure that resource implications are taken into account (and provided). The individual plan link back to the departmental plan, and ultimately the organisation’s or agency’s strategic plan, with all plans adding up to create progress towards the vision within the confines of the mission. The individual development plan includes the following:</p>
                                        <ul class="enhanced-list">
                                            <li>Key result areas;</li>
                                            <li>Key performance indications and targets;</li>
                                            <li>Individual action plans;</li>
                                            <li>Professional development (continuing education) plans.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Akpan, E. and Carter, R. (2007) Strategic Alignment: The Business Imperative for Leading Organisations. Mustang, OK: Tate Publishing.</li>
                                <li>Bryson, J. M. (2011) Strategic Planning for Public and Nonprofit Organization. 4th ed. San Francisco: Jossey-Bass.</li>
                                <li>County Act, 2012.</li>
                                <li>Gitonga, B. A (2010) Project Management Simplified: Community Development Approach. Nairobi: Project Support Information Consultant.</li>
                                <li>Government of Kenya (2001) Programme Based Budgeting Manual. Nairobi: Government Printer.</li>
                                <li>Government of Kenya, Medium Term Expenditure Framework (MTEF) Manual.</li>
                                <li>Government of Kenya, MTEF Manual, 2011, Kenya Budget Process.</li>
                                <li>Hill, C. W. L., and Jones, G. R. (2004) Strategic management: An integrated approach. Boston: Houghton Mifflin</li>
                                <li>Thompson, J and Martin F. (2010) Strategic Management: Awareness &amp; Change. 6th ed. South Western: Cengage Learning.</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Project Management.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-13-quiz"
                         data-quiz-js="../quizzes/topic-13-quiz.js">
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
                        <a href="topic-12.html" class="nav-button nav-button--previous">
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

                        <a href="topic-14.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 14: Governance in Health System.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Governance in Health System | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-13.html" class="nav-button nav-button--previous">
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

                        <a href="topic-15.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 82.3%;"></div>
                        </div>
                        <span class="progress-text">Topic 14 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>🏛️</span>
                        <span>Module 14</span>
                    </div>
                    <h1 class="document-title">Governance in Health System</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Governance & Policy</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>30 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to governance and its application in the health care system</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Define and describe health systems governance;</li>
                                <li>Describe elements of effective health systems governance;</li>
                                <li>Describe the various levels of responsibilities of governance in a health system.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>14.1 Definition of a health system</li>
                                    <li>14.2 Health system governance</li>
                                    <li>14.3 Policy framework</li>
                                    <li>14.4 The legal framework of the health sector</li>
                                    <li>14.5 Governance responsibilities in the health system</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Health systems governance and policy framework</td>
                                        <td>To define and describe health system and health systems governance</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Legal framework and governance responsibilities in the health sector</td>
                                        <td>To identify the legal framework and governance responsibilities in the health sector</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 14.1 Definition of a Health System -->
                    <section class="content-section" id="section-14-1">
                        <div class="section-header">
                            <div class="section-number">14.1</div>
                            <h2 class="section-title">Definition of a Health System</h2>
                        </div>
                        <div class="content-card">
                            <p>A “system” is an arrangement of parts which are connected together for a purpose. A health system is concerned with people’s health. A health system has many parts that include patients, families and communities, Ministry of Health, health providers, health services organisations, pharmaceutical companies, professional societies and health financing bodies, and other organisations. The interconnections of the health system can be viewed as the functions and roles played by these parts.</p>
                            <p>The World Health Organisation (WHO) defines health systems as all organisations, institutions, and resources that are devoted to producing health actions. This definition includes the full range of players engaged in the provision and financing of health services including the public, private sector, NGO, FBO as well as international and bilateral donors, foundations, and voluntary organisations involved in funding or implementing health activities.</p>
                        </div>
                    </section>

                    <!-- 14.2 Health System Governance -->
                    <section class="content-section" id="section-14-2">
                        <div class="section-header">
                            <div class="section-number">14.2</div>
                            <h2 class="section-title">Health System Governance</h2>
                        </div>
                        <div class="content-card">
                            <p>Governance in health refers the actions and means adopted by a country to organise, promote and protect the health of its population. The governance framework and its functioning can be formal e.g. Public Health Act, International Health Regulations or informal e.g. Hippocratic Oath to prescribe and proscribe behaviour. The health governance framework in Kenya is a devolved system. Good governance is also closely linked with effective leadership and efficient management which are covered in Module One.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Objective</h3>
                            <p>The objective of health governance is to promote and protect the health of a population at the individual, community, county and national level. An effective health governance system is therefore one which competently directs health system resources, performance, and stakeholder participation toward the goal of reducing illness, saving lives and doing so in ways that are open, transparent, accountable, equitable, and responsive to the needs of the people.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Characteristics of an Effective Health System</h3>
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">📋</div>
                                    <h4 class="feature-title">Defined Roles</h4>
                                    <p class="feature-text">i. Well defined rules, roles and responsibilities of each of the actors in the health system and the relationships, structures, and procedures that connect them;</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">⚖️</div>
                                    <h4 class="feature-title">Accountability</h4>
                                    <p class="feature-text">ii. Accountable to citizens, health service users, stakeholders and the wider community within which health care providers work, take decisions and lead their people to achieve their objectives;</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">✅</div>
                                    <h4 class="feature-title">Enabling Environment</h4>
                                    <p class="feature-text">iii. An enabling environment through which policy makers, county health management teams and hospital management teams and other sectors and actors are able to direct, monitor and supervise the conduct and operation of the health system and its management in a manner that ensures appropriate levels of authority, accountability, stewardship, leadership, direction and control;</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">👔</div>
                                    <h4 class="feature-title">Responsible Leadership</h4>
                                    <p class="feature-text">iv. A responsible leadership which portrays, efficiency, probity, transparency and accountability.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 14.3 Policy Framework -->
                    <section class="content-section" id="section-14-3">
                        <div class="section-header">
                            <div class="section-number">14.3</div>
                            <h2 class="section-title">Policy Framework</h2>
                        </div>
                        <div class="content-card">
                            <p>The Kenya health sector operates in the context of a number of policy frameworks and within a policy environment that is subject to both internal and external influences. The MDGs, and other global initiatives, and Vision 2030 Sector Plan for Health comprise the major external influences on the Kenyan health sector system. The health sector strategic plan and the community health strategy are some of the factors within the institutional and organisational context which shape the internal environment.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Health in the Millennium Development Goals</h3>
                            <p>The MDGs provide a common set of priorities for addressing poverty. Health is represented in three of the eight goals as shown on Table 14.1</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 14.1 Health Related Millennium Development Goals</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Goal</th>
                                            <th>Health Indicator</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Goal 4: Reduce child mortality</strong><br>Target: Reduce by two-thirds, between 1990 and 2015, the under-five mortality rate</td>
                                            <td>• Under-five mortality rate<br>• Infant mortality rate<br>• Proportion of one-year-old children immunised against measles</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Goal 5: Improve maternal health</strong><br>Target: Reduce by three-quarters, between 1990 and 2015, the maternal mortality ratio</td>
                                            <td>• Maternal mortality ratio<br>• Proportion of births attended by skilled health personnel experience at each level</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Goal 6: Combat HIV/AIDS, malaria and other diseases</strong><br>Target: Have halted by 2015 and begun to reverse the spread of HIV/AIDS<br><br>Have halted by 2015 and begun to reverse the incidence of malaria and other major diseases</td>
                                            <td>• HIV prevalence among pregnant women aged 15-24 years<br>• Condom use rate of the contraceptive prevalence rate<br>• Ratio of school attendance of orphans to school attendance of non-orphans aged 10-14 years<br>• Prevalence and death rates associated with malaria<br>• Proportion of population in malaria-risk areas using effective malaria prevention and treatment measures<br>• Prevalence and death rates associated with tuberculosis<br>• Proportion of tuberculosis cases detected and cured under DOTS (Directly Observed Treatment Short-course)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 class="card-title" style="margin-top: var(--space-6);">Implications of MDGs on health systems governance</h4>
                            <p>From a health perspective, the MDGs are important because:</p>
                            <ol class="enhanced-list">
                                <li>They provide a common set of priorities for addressing poverty;</li>
                                <li>Health is at the heart of the MDGs. This recognition signifies that health is central to the global agenda of reducing poverty as well as an important measure of human well-being;</li>
                                <li>They set quantifiable and ambitious targets against which to measure progress. These provide an indication of whether efforts are on track, and a means of holding decision-makers to account;</li>
                                <li>It is possible to calculate what it would cost to achieve the MDGs. This draws attention to the funding gap between available and needed resources, thus providing support to health sector calls for increased funding;</li>
                                <li>MDGs have helped to crystallise the challenges in health. If a country looks seriously at what it would take to achieve the health MDGs, the bottlenecks to progress become clearer.</li>
                            </ol>
                            <p>The challenges to health brought out in the MDGs are the need to strengthen health systems, ensure that health is prioritised within overall development and economic policies develop health strategies that respond to the diverse and evolving needs of the population, mobilise more resources for health at the national and county level, and improve the quality of health data.</p>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student activity</h4>
                                </div>
                                <div class="callout-content">
                                    <p>MDGs provide an overarching framework for development efforts, and benchmarks against which to judge success.</p>
                                    <ol class="enhanced-list">
                                        <li>Identify and discuss the health elements in MDGs 1,2,3,7 and 8</li>
                                    </ol>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Health sector and the Vision 2030</h3>
                            <p>The aim of the Kenya Vision 2030 is to create “a globally competitive and prosperous country with a high quality of life by 2030” through transforming the country from a third world country into an industrialised, middle income country. To improve the overall livelihoods of Kenyans, Vision 2030 provides aspirations and direction on the provision of efficient, integrated and high quality affordable health care. The health sector reform strategy lays particular emphasis on: geographical and financial access to health care services; regional and gender disparities; efficiency; financing; health care policy; and public private partnerships.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 14.2 Vision 2030: Key Focus Areas in the Health Sector</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Area of Focus</th>
                                            <th>Issues</th>
                                            <th>Indicators</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Access</td>
                                            <td>Geographical access<br>Financial access<br>Socio-cultural barriers</td>
                                            <td>Affordability<br>Availability<br>Accessibility-distance to facility</td>
                                        </tr>
                                        <tr>
                                            <td>Equity</td>
                                            <td>Regional disparities<br>Socio-economic factors<br>Gender and vulnerable groups<br>Physically challenged</td>
                                            <td>Access by gender<br>Access indicators across regions<br>Specific information on the vulnerable and physically challenged</td>
                                        </tr>
                                        <tr>
                                            <td>Quality</td>
                                            <td>Service delivery<br>Research<br>Efficiency</td>
                                            <td>Appropriateness<br>Level of delivery<br>Service range<br>Quality and quantity of Human Resource<br>Continuity<br>Effectiveness<br>Efficiency</td>
                                        </tr>
                                        <tr>
                                            <td>Capacity</td>
                                            <td>Service delivery systems<br>Health care inputs<br>Partnerships<br>Health care financing<br>Research</td>
                                            <td>Procedure -safety<br>Capacity development -health care personnel<br>Resources<br>Health system -curative vs. preventive<br>Utilisation of health care systems<br>Equitable allocation of resources</td>
                                        </tr>
                                        <tr>
                                            <td>Institutional framework</td>
                                            <td>Health care policy<br>Level and type of autonomy/integration<br>Incentive structure<br>Stakeholder involvement/collaboration</td>
                                            <td>Level and type of integration<br>Stakeholder involvement in policy formulation</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Kenya Vision 2030.</p>
                            </div>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-7c9db3f6.jpeg" alt="Vision 2030 Goals and Strategies for Health Care" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 14.1 Vision 2030 Goals and Strategies for Health Care</p>
                                <p class="figure-caption">Source: Kenya Vision 2030</p>
                            </div>
                        </div>
                    </section>

                    <!-- 14.4 The Legal Framework of the Health Sector -->
                    <section class="content-section" id="section-14-4">
                        <div class="section-header">
                            <div class="section-number">14.4</div>
                            <h2 class="section-title">The Legal Framework of the Health Sector</h2>
                        </div>
                        <div class="content-card">
                            <p>The legal framework of the health sector in Kenya is governed primarily by Kenya's Health Policy Framework (KHPF) of 1994. The document in its agenda for reform, identified the strengthening of the central public policy role of the Ministry of Health in all matters pertaining to health as a key priority. In terms of regulation and enforcement, the government has over the years asserted its commitment to continue regulating the health sector by enforcing the following Acts of Parliament pertaining to the health sector:</p>
                            
                            <div class="collapsible-section">
                                <details>
                                    <summary class="collapsible-trigger">
                                        <span class="trigger-icon">📜</span>
                                        <span>Acts of Parliament Pertaining to Health (Click to Expand)</span>
                                    </summary>
                                    <div class="collapsible-content">
                                        <ol class="enhanced-list">
                                            <li>Public Health Act cap 242.</li>
                                            <li>Radiation Protection Act cap 243.</li>
                                            <li>Pharmacy and Poisons Act cap 244.</li>
                                            <li>Dangerous Drugs Act cap 245.</li>
                                            <li>Malaria Prevention Act cap 246.</li>
                                            <li>Mental Health Act cap 248.</li>
                                            <li>Medical Practitioners and Dentist Act cap 253.</li>
                                            <li>Nurses Act cap 257.</li>
                                            <li>Clinical Officers (Training, Registration and Licensing) Act cap 260.</li>
                                            <li>National Hospital Insurance Fund Act cap 255.</li>
                                            <li>Food, Drugs and Chemical Substances Act cap 254.</li>
                                            <li>Animal Diseases Act cap 364.</li>
                                        </ol>
                                        <h4 class="card-title">Other statutes that impact on the health sector:</h4>
                                        <ol class="enhanced-list">
                                            <li>The Medical Laboratory Technicians and Technologist Act (1999).</li>
                                            <li>The Science and Technology Act cap 250.</li>
                                            <li>The Local Government Act cap 265.</li>
                                            <li>HIV and AIDS Prevention and Control Act, Act no 14 of 2006.</li>
                                            <li>The Anatomy Act cap 249.</li>
                                            <li>The Public Procurement and Disposal Act 2005 Act no 3 of 2005 and the Regulations made therein.</li>
                                            <li>The Finance Act (enacted every financial year).</li>
                                            <li>Education Act cap 211.</li>
                                            <li>Kenya Medical Training College Act cap 261.</li>
                                            <li>Various public universities’ acts.</li>
                                            <li>The Constitution of Kenya 2010 (especially Chapters creating the Public Service Commission and the County Public Service Commission.</li>
                                            <li>The Penal Code (1960).</li>
                                            <li>The Sexual Offences Act 2006.</li>
                                        </ol>
                                    </div>
                                </details>
                            </div>

                            <p>All these statutes have an impact on the health sector. For instance, the Finance Act directly affects the budgetary allocation to the Ministry of Health. The Public Procurement and Disposal Act affects the manner in which the Ministry of Health acquires its supplies. The Education Act and various legislation governing public universities affect the quality of training given to health workers in those institutions. The Public Service Commission Act affects the Ministry of Health’s organisational structure, appointments, promotions and staff discipline. The Penal Code provides for criminal liability for health workers who facilitate abortions. The National Commission on Gender and Development is mandated to promote gender equity in health. The Public Health Act, section 3(1) establishes a Central Board of Health whose function is to advise the minister on all matters affecting public health. The Constitution of Kenya 2010 provides for equality and freedom from discrimination (Art 27) and the right to health and reproductive health (Art 43).</p>
                            <p>In the current legal framework, there are over twenty statutes dealing with the health sector in the country. The legal framework of the health sector is not under a single institution but spread within a number of ministries and departments of the government. Within the Ministry of Health, there are divisions, departments and specialised agencies responsible for different aspects of health regulations. In the devolved system of governance, this scenario is replicated at the county level.</p>
                            <p>The health sector policy focus is guided by Vision 2030. The strategic focus is well defined and elaborated in the Kenya Health Policy with clear goals on the long-term policy directions the country intends to achieve in pursuit of the imperatives of the Vision 2030, and the 2010 Constitution.</p>
                            <p>Governance of the health sector is anchored on current key policy, legal and legislative frameworks. The Kenya Health policy 2012-2030, Health Act 2012 and Kenya Health Sector Strategic and Investment Plan 2012-2017 are the key instruments which align the sector with the Constitution of Kenya 2010 and the social pillar of Vision 2030. These and other policy documents guide the two levels of Governments (National and County) and the health sector as a whole.</p>
                            
                            <div class="content-card content-card--alternate">
                                <p><strong>Vision:</strong> A healthy and globally competitive nation</p>
                                <p><strong>Mission:</strong> To deliberately build progressive, responsive and sustainable technologically-driven, evidence-based and client-centred health system for accelerated attainment of highest standard of health to all Kenyans</p>
                                <p><strong>Goal:</strong> Better health in a responsive manner</p>
                            </div>

                            <p>To fulfil the vision and mission of the health Sector, those with management and leadership responsibilities are expected to formulate health policies and strategic direction, set standards and ensure provision of health services through public facilities and regulation of all actors/services.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Health Policy Objectives</h3>
                            <p>The following six policy objectives provide guidance towards the realisation of the health sector vision and goal.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 14.3 Kenya Health Policy Objectives and Activities</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Objective</th>
                                            <th>Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Eliminate communicable conditions</td>
                                            <td>Reduction of the burden of communicable diseases, till they are not of major public health concern.</td>
                                        </tr>
                                        <tr>
                                            <td>Halt and reverse the rising burden of non-communicable conditions</td>
                                            <td>Ensuring clear strategies for implementation to address all the identified non communicable conditions in the country.</td>
                                        </tr>
                                        <tr>
                                            <td>Reduce the burden of violence and injuries</td>
                                            <td>Collaboration with stakeholders in other sectors that address each of the causes of injuries and violence at the time.</td>
                                        </tr>
                                        <tr>
                                            <td>Provide essential health care</td>
                                            <td>Provision of medical services that are affordable, equitable, accessible and responsive to client needs.</td>
                                        </tr>
                                        <tr>
                                            <td>Minimise exposure to health risk factors</td>
                                            <td>Strengthening health promoting interventions, which address risk factors to health, plus facilitating use of products and services that lead to healthy behaviour in the population.</td>
                                        </tr>
                                        <tr>
                                            <td>Strengthen collaboration with other sectors</td>
                                            <td>Building partnerships and other integrative approaches which ensures the health sector interacts with and influences design implementation and monitoring processes in all health related sector actions.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">International Commitments and Obligations</h3>
                            <p>The country has ratified many global commitments meant to support the health sector implement the various global commitments it has entered signed. These include:</p>
                            <ol class="enhanced-list">
                                <li>Implementation of the International Health Regulations – to guide the country on key actions needed to assure adherence to international health regulations;</li>
                                <li>Implementation of the Global Framework Convention for Tobacco Control – to guide the country on tobacco control activities;</li>
                                <li>Ouagadougou declaration on Primary Health Care and Health Systems – to guide the overall strategic focus for the health sector;</li>
                                <li>Millennium Development Declaration (MDGs) – to guide the country in developing national targets towards international development initiatives;</li>
                                <li>International Health Partnerships (IHP+) on Aid Effectiveness;</li>
                                <li>UN Secretary Generals’ Global Strategy ‘Every woman, every child’;</li>
                                <li>Abuja Declaration – to support the improvements of health systems in the country by domesticating the provisions through national legislation, the country committed in the Abuja Declaration to allocate 15% of government expenditure budget to health;</li>
                                <li>International Human Right agreements including International Declaration for Human Rights, Convention on the Elimination of All Forms of Discrimination against Women (CEDAW), Child Rights Convention (CRC), the International Conference on Population and Development programme of action (ICPD), and the Beijing Declaration and Platform of Action (BPFA).</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 14.5 Governance Responsibilities in the Health System -->
                    <section class="content-section" id="section-14-5">
                        <div class="section-header">
                            <div class="section-number">14.5</div>
                            <h2 class="section-title">Governance Responsibilities in the Health System</h2>
                        </div>
                        <div class="content-card">
                            <p>Various forms of governance functions and responsibilities exist at each level of the health system structures discussed in Module 1.</p>

                            <h3 class="card-title">Objectives of Governance/Management Structure</h3>
                            <ul class="enhanced-list">
                                <li>Delivery of efficient, cost effective and equitable health services</li>
                                <li>Devolution of health service delivery, administration and management to community level</li>
                                <li>Stakeholder participation and accountability in health service delivery, administration and management</li>
                                <li>Operational autonomy</li>
                                <li>Efficient and cost-effective monitoring, evaluation, reviewing and reporting system</li>
                                <li>Smooth transition from current to proposed devolved arrangement</li>
                                <li>Complementarity of efforts and interventions</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">The Role of the State Department Responsible for Health</h3>
                            <p>The primary role of the National Department of Health is to support counties in delivering health care services as well as to help to lead, shape and support the national health care system. The KHSSP 2013-2017 outlines the mandate, structure, roles and responsibilities of the state department responsible for health as discussed below.</p>
                            <p>The principal mandate of the National State Department as stipulated in the Constitution of Kenya 2010 and National Health Policy 2012-2030 is:</p>
                            <ol class="enhanced-list">
                                <li>Establishing a national health policy and legislation, standard setting, national reporting;</li>
                                <li>Sector coordination and resource mobilisation;</li>
                                <li>Offering technical support with emphasis on planning, development and monitoring of Health services and delivery standards throughout the country;</li>
                                <li>Monitoring quality and standards of performance of the county governments in the provision of health services;</li>
                                <li>Providing national health referral services;</li>
                                <li>Conducting studies required for administrative or management purposes.</li>
                            </ol>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-5b22b2b4.jpeg" alt="Structure of the State Department for Health" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 14.2 Structure of the State Department for Health</p>
                            </div>

                            <h4 style="margin-bottom: var(--space-4);">Table 14.4 Roles and responsibilities in the State Department of Health</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Office</th>
                                            <th>Role</th>
                                            <th>Responsibilities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cabinet Secretary for Health</td>
                                            <td>Overall responsibility for addressing the health agenda in the Country</td>
                                            <td>• Guide the organs of the state on the strategic direction of addressing the Health agenda in the Country<br>• Act as a liaison between the National Government and the County Executive Committee on health matters<br>• Coordinate mobilization of resources for implementing the Health Policy agenda by National and County Governments<br>• Chair the Joint Inter Agency Coordinating Committee, bringing together heads of all signatories of the Sector Code of Conduct<br>• Represents the health sector internationally at the highest level</td>
                                        </tr>
                                        <tr>
                                            <td>Principal Secretary for Health</td>
                                            <td>Principal Accounting officer for the Department of Health both Public and non-public resources</td>
                                            <td>• Coordinating actions of SAGAs in the Health Sector<br>• Carry out regular expenditure reviews on use of Government, and external resources, including efficiency and value reviews<br>• Coordination of financial management systems at the national level, and between National and County Governments<br>• Carry out regular value-for-money audits, sector-wide efficiency assessments and regular updating of costing data of funds supporting health activities in the sector<br>• Guide the Cabinet Secretary on technical issues in Health, for communication within Government, parliament, and other state organs and internationally</td>
                                        </tr>
                                        <tr>
                                            <td>Director General for Health</td>
                                            <td>Technical officer for the Department for both Public and Non Public</td>
                                            <td>• Guide the Principal Secretary on technical issues in Health, for communication within Government, parliament, and other state organs and internationally<br>• Provide the sector with technical direction in all matters relating to the strategic direction of the Health Sector<br>• Act as a liaison between the National Government and County Directors of Health, to coordinate attainment of Health goals</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style="margin-top: var(--space-6); margin-bottom: var(--space-4);">Table 14.5 Responsibilities and Key Policy Areas of Directorates in the State Department of Health</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Directorate</th>
                                            <th>Responsibility</th>
                                            <th>Key policy areas (1)</th>
                                            <th>Key policy areas (2)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Curative & Rehabilitative Services</td>
                                            <td>Oversee policy formulation and implementation review in curative and rehabilitative services</td>
                                            <td>Blood transfusion & tissue transplantation<br>Rehabilitation<br>Surgical services<br>Clinical services<br>Pharmacy<br>Child and Adolescent Health **<br>Dental services<br>Emergency Medical Services</td>
                                            <td>Referral services<br>Complementary and traditional medicine<br>Radiological<br>Medical engineering<br>Diagnostic and Forensic<br>Mental health<br>Reproductive health</td>
                                        </tr>
                                        <tr>
                                            <td>Preventive and Promotives services</td>
                                            <td>Oversee the preventive and promotive strategic issues including policy formulation</td>
                                            <td>Mental health and substance abuse<br>Non-Communicable disease<br>Reproductive Health<br>Child and Adolescent Health**<br>Community Health<br>Vaccines and immunization<br>Nutrition and dietetics<br>National health programmes<br>Disease surveillance<br>Infection prevention and control<br>Oral health<br>Ophthalmic health</td>
                                            <td>Pollution control<br>Water safety<br>Sanitation<br>Occupational Health and Safety<br>Disaster and risk reduction<br>Port Health<br>Refuse (Waste) Management<br>Food Safety<br>Health Promotion<br>International health regulation<br>International health</td>
                                        </tr>
                                        <tr>
                                            <td>Standards and Quality Assurance</td>
                                            <td>Oversee the formulation and implementation of standards and norms & quality in the health sector</td>
                                            <td>Health service delivery<br>Healthcare Infrastructure<br>Clinical Guidelines<br>Medical products, devices and technology<br>Health workforce<br>Regulatory services</td>
                                            <td>Health Research & Development<br>Quality Assurance and Management<br>Health Inspection<br>Continuous Professional Development (CPD)</td>
                                        </tr>
                                        <tr>
                                            <td>Policy, Planning and International Health Relations</td>
                                            <td>Coordinate policy and strategic development for the Ministry of Health</td>
                                            <td>Policy and Strategic planning<br>Health financing<br>Annual Operation Plans<br>Medium Term Expenditure Framework, including budgeting<br>Monitoring and Evaluation<br>Performance Contracting/MMU</td>
                                            <td>Operational and other Health Research and development<br>E-Health<br>Health Information System<br>Partnership coordination<br>Health reform<br>Intergovernmental Relations<br>International Health Regulations and Relations</td>
                                        </tr>
                                        <tr>
                                            <td>Administration & Support Services</td>
                                            <td>Oversee the support services to complement the health technical activities</td>
                                            <td>Human Resource Management<br>Human Resource Development<br>Health infrastructure, equipment including ICT maintenance<br>Gender mainstreaming<br>Disability mainstreaming<br>Logistics management</td>
                                            <td>Finance and accounts<br>Procurement<br>Internal audit<br>Legal Unit<br>Public relations</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Semi-Autonomous Government Agencies (SAGAs)</h3>
                            <p>There are six SAGAs under the state department responsible for health. SAGAs are governed by a board of management (BoM) comprising 8-15 senior officer members representing the public sector (state department responsible for health and other ministries), and private sector and other stakeholders. A chief executive officer (CEO) is responsible for the daily management and implementation of the institutions' strategic plans which are guided by the sector strategic plan. Each SAGA operates under a performance contract signed with the Principal Secretary in the state department responsible for health. They are partly financed through GOK (state department of finance).</p>

                            <h4 style="margin-bottom: var(--space-4);">Table 14.6 SAGAs and their Key Mandates</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>SAGA</th>
                                            <th>Founded</th>
                                            <th>Corporation status date</th>
                                            <th>Key Mandate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kenyatta national Hospital (KNH)</td>
                                            <td>1901</td>
                                            <td>Legal notice no.109 (April 1987)</td>
                                            <td>Provide specialized care, training and research</td>
                                        </tr>
                                        <tr>
                                            <td>Moi Teaching and Referral Hospital (MTRH)</td>
                                            <td>1917</td>
                                            <td>Legal notice no.78 (June 1998)</td>
                                            <td>Provide specialized care, training and research</td>
                                        </tr>
                                        <tr>
                                            <td>Kenya Medical Training College (KMTC)</td>
                                            <td>1927<br>1990</td>
                                            <td>Legal notice no.14 (1994)<br>KMTC Act cap 61</td>
                                            <td>Train middle level health professionals</td>
                                        </tr>
                                        <tr>
                                            <td>Kenya Medical Research Institute (KEMRI)</td>
                                            <td>1979</td>
                                            <td>Science and technology act no.79 (April 1979)</td>
                                            <td>Conduct multi-sector health research</td>
                                        </tr>
                                        <tr>
                                            <td>Kenya Medical Supplies Agency (KEMSA)</td>
                                            <td>2001</td>
                                            <td>Act of Parliament cap 446 (2000), Legal notice no.17</td>
                                            <td>Procure, warehouse and distribute health commodities in Kenya</td>
                                        </tr>
                                        <tr>
                                            <td>National Hospital Insurance fund (NHIF)</td>
                                            <td>1966</td>
                                            <td>Act 9 (1998)</td>
                                            <td>Provide quality social health insurance</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">The Role and Structure of the County Department for Health</h3>
                            <h4 class="card-title">County Health Management Structure</h4>
                            <p>According to the Constitution of Kenya 2010, county governments are responsible for:</p>
                            <ol class="enhanced-list">
                                <li>County health facilities and pharmacies;</li>
                                <li>Ambulance services;</li>
                                <li>Promotion of primary health care;</li>
                                <li>Licensing and control of undertakings that sell food to the public;</li>
                                <li>Veterinary services excluding regulation of the profession;</li>
                                <li>Cemeteries, funeral parlours and crematoria; and</li>
                                <li>Refuse removal, refuse dumps and solid waste disposal.</li>
                            </ol>

                            <h4 class="card-title">Structure of County Department Responsible for Health</h4>
                            <p>County health services are managed by a Chief Officer for Health who reports to the County Executive Committee (CEC) member responsible for health.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-9daa41c9.jpeg" alt="Structure for County Department Responsible for Health" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Table 14.5 Structure for County Department Responsible for Health</p>
                                <p class="figure-caption">Source: Adapted from Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012-June 2017.</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Governance Responsibilities at the County Level</h3>
                            
                            <h4 class="card-title">Chief Officer for Health</h4>
                            <p>The Chief Officer for Health is responsible for technical coordination and management of County Health Services, focusing on:</p>
                            <ol class="enhanced-list">
                                <li>Overall management and oversight of public health facilities in the county;</li>
                                <li>Guiding implementation of health related issues from the county executive committee;</li>
                                <li>Interpreting, and integrating national government health policy;</li>
                                <li>Coordinating development and implementation of county health strategies and priorities;</li>
                                <li>Coordinating disaster preparedness and response in the county;</li>
                                <li>Management of referral health services, in county, across counties, and with the national government;</li>
                                <li>Act as the accounting officer of the department responsible for health.</li>
                            </ol>

                            <h4 class="card-title">County Director of Health</h4>
                            <p>The County Director of health is the technical advisor for all health matters in the county. Their role shall be:</p>
                            <ol class="enhanced-list">
                                <li>The technical advisor to the County Executive Commissioner and the Governor;</li>
                                <li>To supervise all health services within the County;</li>
                                <li>To promote the public health and the prevention, limitation or suppression of infectious, communicable or preventable diseases within the County;</li>
                                <li>To prepare and publish reports and statistical or other information relative to the public health within the County;</li>
                                <li>To report periodically to the Chief Officer for health on all public health occurrences including disease outbreaks, disasters and any other health matters;</li>
                                <li>To perform any other duties as may be assigned by the appointing authority and any other written law.</li>
                            </ol>
                            <p>The County Director of health is the technical advisor for all health matters in the county. Their role shall be:</p>
                            <ol class="enhanced-list">
                                <li>The technical advisor to the County Executive Commissioner and the Governor;</li>
                                <li>To supervise all health services within the County;</li>
                                <li>To promote the public health and the prevention, limitation or suppression of infectious, communicable or preventable diseases within the County;</li>
                                <li>To prepare and publish reports and statistical or other information relative to the public health within the County;</li>
                                <li>To report periodically to the Director-General for health on all public health occurrences including disease outbreaks, disasters and any other health matters;</li>
                                <li>To perform any other duties as may be assigned by the appointing authority and any other written law.</li>
                            </ol>

                            <h4 style="margin-top: var(--space-6); margin-bottom: var(--space-4);">Table 14.8 Other Structural Units at the County Level</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Units</th>
                                            <th>Policy implementation responsibilities</th>
                                            <th>Constitutional functions</th>
                                            <th>Constituent Sub-units</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Preventive and Promotive Services</td>
                                            <td>- Eliminate Communicable Conditions<br>- Minimize exposure to health risk factors</td>
                                            <td>- Promotion of primary health care<br>- License & control undertakings that sell food to the public<br>- Refuse removal; refuse dumps and solid waste disposal</td>
                                            <td>- Child Health<br>- HIV, TB and Malaria<br>- Health Promotion<br>- Neglected Disease management<br>- Hygiene control<br>- Community services</td>
                                        </tr>
                                        <tr>
                                            <td>Clinical Services</td>
                                            <td>- Halt and reverse the rising burden of Non Communicable Conditions<br>- Provision of essential health services<br>- Reducing the burden of violence and injuries</td>
                                            <td>- Ambulance services<br>- Management of health facilities and pharmacies<br>- Cemeteries; funeral parlors and crematoria</td>
                                            <td>- Maternal Health<br>- Blood Safety<br>- Laboratory services<br>- Pharmaceutical services<br>- Nursing services</td>
                                        </tr>
                                        <tr>
                                            <td>Planning and Monitoring</td>
                                            <td>- Organization & management of health service delivery<br>Strengthening collaboration with health related sectors</td>
                                            <td></td>
                                            <td>- Health Planning<br>- Sector Coordination<br>- Health Information</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Adapted from Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012-June 2017.</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Stewardship Responsibilities at the Different Levels of the Health Sector</h3>
                            <p>The Constitution reserves the responsibility for health policy to the national government. The state department of health is responsible for shaping policy direction for health in the country, and for facilitating the implementation of a sector-wide approach. The principal mandate of the state department of health is as stipulated in the Constitution and the Health Policy and is further detailed in the table below.</p>
                            
                            <h4 style="margin-bottom: var(--space-4);">Table 14.9 Stewardship Responsibilities at the Different Levels of the Health Sector</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>National Government Policy Role</th>
                                            <th>Corresponding County Government Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1)</td>
                                            <td>Establishing a National Health Policy and Legislation, health regulation and standard setting, national reporting, sector coordination & resource mobilization</td>
                                            <td>County level prioritization of health investments, setting and reporting on relevant targets; and coordination of actors in the county health system</td>
                                        </tr>
                                        <tr>
                                            <td>2)</td>
                                            <td>Offering technical support with emphasis on planning, development and monitoring of Health services and delivery standards throughout the country</td>
                                            <td>Planning, development and monitoring of County Health Services; and facilitating compliance with national health standards</td>
                                        </tr>
                                        <tr>
                                            <td>3)</td>
                                            <td>Monitor quality and standards of performance of the County Governments and community organizations in the provision of Health services</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4)</td>
                                            <td>Provide guidelines on tariffs chargeable for the provisions of Health services; and the distribution of health benefits through various financing mechanisms</td>
                                            <td>Provide guidance to health facilities within the county in implementing health service tariffs and benefits</td>
                                        </tr>
                                        <tr>
                                            <td>5)</td>
                                            <td>Provide National health referral services</td>
                                            <td>Development and management of referral services within the county health system</td>
                                        </tr>
                                        <tr>
                                            <td>6)</td>
                                            <td>Conduct national studies required for administrative or management purposes</td>
                                            <td>Conduct county studies required for administrative or management purposes</td>
                                        </tr>
                                        <tr>
                                            <td>7)</td>
                                            <td>Develop national guidelines on the role of non-state actors in health; and regulate their services</td>
                                            <td>Facilitate the role of non-state actors in the county health system; and ensure their compliance with national policy and regulatory requirements</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Adapted from Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012-June 2017.</p>
                            </div>

                            <h4 style="margin-top: var(--space-6); margin-bottom: var(--space-4);">Table 14.10 Governance Responsibilities in the Health Sector</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Levels</th>
                                            <th>Responsibilities/functions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Senior management at National level (Directorates)</td>
                                            <td>• Formulating policy, developing strategic plans, setting priorities<br>• Budgeting, allocating resources<br>• Regulating, setting standards, formulating guidelines<br>• Monitoring performance and adherence to the planning cycle<br>• Mobilizing resources<br>• Coordinating with all (internal and external) partners<br>• Provision of Technical support to the county level<br>• Capacity building of county level<br>• National health referrals services<br>• Training health staff (both pre and in service), ensuring curricula and training institutions are in place</td>
                                        </tr>
                                        <tr>
                                            <td>County health management teams(CHMT)</td>
                                            <td>• Provide leadership and stewardship for overall health management in the County,<br>• Provide Strategic and operational planning, Monitoring and Evaluation of health service delivery in the county.<br>• Provide a linkage with the national State Department responsible for health.<br>• Collaborate with State and Non state Stakeholders at the County and between counties in health services<br>• Mobilize resources for County health services<br>• Establish Mechanisms for the referral function within and between the counties, and between the different levels of the health system in line with the sector referral strategy<br>• Coordinating and collaborating through County Health Stakeholder Forums (CHMB, FBOs, NGOs, CSOs, development partners)<br>• Supervise county health services</td>
                                        </tr>
                                        <tr>
                                            <td>County Health facility management teams(CFMT)</td>
                                            <td>• Delivering services in all health facilities (levels 1–3)<br>• Developing and implementing facility health plans (FHPs)<br>• Supervising and controlling the implementation of FHP (M&E)<br>• Coordinating and collaborating through County Health Stakeholder Forums (FBOs, NGOs, CSOs, development partners)<br>• Training and developing capacity (in-service)<br>• Maintaining quality control and adherence to guidelines</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="figure-caption">Source: Adapted from Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012-June 2017.</p>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Stakeholder Involvement</h3>
                            <p>The right to health cannot be achieved without the active involvement of other stakeholders. Health sector stakeholders include:</p>
                            <p><strong>Clients</strong>- The individuals, households, and communities whose health is the focus of this strategic plan;</p>
                            <p><strong>State actors</strong>- The public sector (MoH – National and County, SAGAs, other ministries and the state department responsible for devolution), constitutional Commissions, regulatory bodies (boards and councils) and professional bodies/associations whose mandate is drawn from that of the state, and have an effect on health;</p>
                            <p><strong>Non-state actors</strong>- The Private sector NGOs, Civil Society Organizations (CSOs), FBOs, traditional practitioners, media, and all other persons whose actions have an impact on health, but do not draw their mandate from the state;</p>
                            <p><strong>External actors</strong>- The bilateral, multilateral, or philanthropic actors that draw their mandate from out of Kenya, but support national programmes.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Health Sector Intergovernmental Relations and Coordination Framework</h3>
                            <p>Effective governance is achieved through active engagement, consultation, cooperation and mutual accountability between the national department responsible for health and the county departments of health, as well engagement among the county departments of health. The Intergovernmental Relations Act 2012, Kenya Health Policy (2012-2030) and KHSSP 2013-2017 provide for a sound basis for intergovernmental relations framework in health.</p>
                            <p>The figure below presents an illustration of how the health sector partnership, governance, and stewardship processes work together to provide overall leadership in addressing the health agenda in the country.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-e0274734.jpeg" alt="Health Sector Partnership, Governance, and Stewardship Processes" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Table 14.9 Health Sector Partnership, Governance, and Stewardship Processes</p>
                                <p class="figure-caption">Source: Adapted from Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012-June 2017.</p>
                            </div>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity: Suggestion Group/Class Discussions</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Identify and discuss the role played by the various actors in the health system.</li>
                                        <li>What ethical principles should guide governance practices in the health sector?</li>
                                        <li>In preparation for your practicum, prepare a checklist of indicators of good governance that could guide you in assessing governance at a health facility level, county government and national government levels.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>African Medical and Research Foundation (AMREF) (2012) Training Manual in Governance Leadership & Management for Health Systems Strengthening in Africa. Nairobi: AMREF.</li>
                                <li>Constitution of Kenya 2010.</li>
                                <li>County Governments Act, 2012</li>
                                <li>Health Systems 20/20 (2012) ‘The Health System Assessment Approach: A How-To Manual. Version 2.0’ [online]. Available at &lt;www.healthsystemassessment.org&gt; [Accessed 24 February 2014].</li>
                                <li>Management Sciences for Health (2013) How to Govern the Health Sector and its Institutions Effectively. The eManager, No. 1. Arlington, VA. Management Sciences for Health. Also available online at &lt;http: www.lmgforhealth.org&gt; [Accessed 24 February 2014].</li>
                                <li>Management Sciences for Health (2010) Health Systems in Action: An e-Handbook for Leaders and Managers. Cambridge, MA: Management Sciences for Health. Also available online at &lt;http: www.msh.org&gt; [Accessed 24 February 2014] and as a CD-ROM.</li>
                                <li>Ministry of Medical Services and Ministry of Public Health and Sanitation. Accelerating attainment of Health Goals: The Kenya Health Sector Strategic and Investment Plan – KHSSP July 2012 – June 2017.</li>
                                <li>Republic of Kenya (2012) Kenya Health Sector Strategic Plan (2012-2017). Nairobi: Government Printer.</li>
                                <li>Republic of Kenya (2013) Health Sector Strategic and Investment Plan (KHSSP) July 2013-June 2017. Nairobi: Government Printer.</li>
                                <li>Republic of Kenya (2013) Training Manual for Sensitizing Public Servants. Nairobi: Government Printer.</li>
                                <li>The Anti-Corruption and Economic Crimes Act 2003.</li>
                                <li>The Public Officer Ethics Act, 2003.</li>
                                <li>World Health Organisation (2009) Good Governance in Medicines: A Framework for Good Governance in the Pharmaceutical Sector: GGM Model Framework. Geneva: WHO.</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Governance in Health System.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-14-quiz"
                         data-quiz-js="../quizzes/topic-14-quiz.js">
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
                        <a href="topic-13.html" class="nav-button nav-button--previous">
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

                        <a href="topic-15.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 15: Entrepreneurship for Health Professionals.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entrepreneurship for Health Professionals | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-14.html" class="nav-button nav-button--previous">
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

                        <a href="topic-16.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 88.2%;"></div>
                        </div>
                        <span class="progress-text">Topic 15 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>💼</span>
                        <span>Module 15</span>
                    </div>
                    <h1 class="document-title">Entrepreneurship for Health Professionals</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Business & Management</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>25 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to entrepreneurship in health services delivery</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Explain the basics of business management;</li>
                                <li>Develop a business.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>15.1 Entrepreneurship</li>
                                    <li>15.2 Types of business ventures</li>
                                    <li>15.3 Business plan</li>
                                    <li>15.4 Managing business finances</li>
                                    <li>15.5 Principles of business management</li>
                                    <li>15.6 Raising business capital</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Introduction to entrepreneurship<br>Types of business ventures<br>Business plans</td>
                                        <td>To introduce students to entrepreneurship<br>To describe and discuss the various types of business ventures and business planning</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Financing a business venture<br>Managing business finances</td>
                                        <td>To identify and discuss the various business financing<br>To introduce students to Business and Financial Management</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 15.1 Entrepreneurship -->
                    <section class="content-section" id="section-15-1">
                        <div class="section-header">
                            <div class="section-number">15.1</div>
                            <h2 class="section-title">Entrepreneurship</h2>
                        </div>
                        <div class="content-card">
                            <h3 class="card-title">Definitions and Characteristics</h3>
                            <p>The word Entrepreneur is derived from the French word ‘entreprendre’ which means to ‘undertake’. The Merriam-Webster dictionary defines an entrepreneur as one who organises, manages and assumes the risks of a business enterprise.</p>
                            
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Entrepreneur</h4>
                                        <p class="definition-text">A person who recognises opportunities where others don't or where others see chaos or confusion, and undertakes to organize, manage and assume the risks in a resulting business enterprise.<br><br>An entrepreneur is an innovator who recognizes and seizes opportunities, converts those opportunities into workable /marketable ideas, adds value to them through time, effort, money or skills and assumes the risks of the competitive marketplace to implement these ideas.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Entrepreneurship Involves</h3>
                            <ul class="enhanced-list">
                                <li><strong>Initiative taking</strong> – the creation process, creating something new of value;</li>
                                <li>The <strong>organising and reorganising</strong> of social economic mechanisms to turn resources and situations to business opportunities. This requires devotion of the necessary time and effort;</li>
                                <li>The <strong>acceptance of risk or failure</strong> – entrepreneurs are widely accepted as risk takers, and the risks they take could be in various forms, depending on the field of effort of the entrepreneur;</li>
                                <li><strong>Reward seeking</strong> – entrepreneurs seek for rewards which are in the form of independence, personal satisfaction, and monetary reward/profit.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Traits of Successful Entrepreneurs</h3>
                            <p>The personality traits of successful entrepreneurs have been analysed by many experts. But as many of them are quick to point out, the problem with any formula for success as an entrepreneur is that success relies on a unique ability to see ‘new’ patterns. So, you should be careful about evaluating the entrepreneurial ability based on general established patterns.</p>
                            <p>The traits that are most often thought to be common in successful entrepreneurs are:</p>
                            
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">🧠</div>
                                    <h4 class="feature-title">Tough-mindedness</h4>
                                    <p class="feature-text">A degree of tough-mindedness- This enables entrepreneurs to make and stick by decisions that are based on a combination of intuition and logic. Tough-minded entrepreneurs are not frightened by the unknown. They lead the way for the rest to follow.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">💪</div>
                                    <h4 class="feature-title">Hard Work</h4>
                                    <p class="feature-text">A willingness to work a little harder and a little longer- Successful entrepreneurs work not only for rewards, but also for the pleasure of creating the enterprise.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🦁</div>
                                    <h4 class="feature-title">Self-confidence</h4>
                                    <p class="feature-text">A degree of self-confidence- This lets entrepreneurs make firm decisions and keeps them from worrying afterwards. Self-confident entrepreneurs feel that the decision is probably right—but if not, adjustments can make it work.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🎲</div>
                                    <h4 class="feature-title">Risk Taking</h4>
                                    <p class="feature-text">A willingness to take ‘reasonable’ risks- Entrepreneurs feel that results are controllable, not strictly up to chance.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🤸</div>
                                    <h4 class="feature-title">Flexibility</h4>
                                    <p class="feature-text">A high degree of flexibility- This enables entrepreneurs to meet changing goals, pressures, technologies, and competition. Entrepreneurs feel that their own flexibility will allow a chance to change things if decisions turn out badly.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🛒</div>
                                    <h4 class="feature-title">Market Sense</h4>
                                    <p class="feature-text">A finely tuned sense of the needs of the marketplace, along with a curious mind- Successful entrepreneurs are quick to spot market needs and to supply products to meet those needs in new and profitable ways.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🔭</div>
                                    <h4 class="feature-title">Vision</h4>
                                    <p class="feature-text">A sense of long-term goals- Entrepreneurs see needs, possibilities and solutions where others see only problems.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🧩</div>
                                    <h4 class="feature-title">Problem Solving</h4>
                                    <p class="feature-text">Good problem-solving ability- This ability uses problems as a roadmap. Each problem solved helps entrepreneurs chart a course for future success.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">💰</div>
                                    <h4 class="feature-title">Profit Motive</h4>
                                    <p class="feature-text">A desire for profit- Entrepreneurs use profit to measure their successes. Because of the profit motive, entrepreneurs will tend to find an efficient use of resources.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🔥</div>
                                    <h4 class="feature-title">Enthusiasm</h4>
                                    <p class="feature-text">An underlying enthusiasm- Enthusiasm keeps up entrepreneurs' spirits. Enthusiasm helps successful entrepreneurs maintain the level of creative thinking and focused activity necessary to carry out the successful venture.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 15.2 Types of Business Ventures -->
                    <section class="content-section" id="section-15-2">
                        <div class="section-header">
                            <div class="section-number">15.2</div>
                            <h2 class="section-title">Types of Business Ventures</h2>
                        </div>
                        <div class="content-card">
                            <p>There are three types of business ventures, mainly classified according to their constitution and the formation process:</p>
                            <ol class="enhanced-list">
                                <li>Sole proprietorships;</li>
                                <li>Partnerships;</li>
                                <li>Corporate ventures.</li>
                            </ol>
                        </div>

                        <!-- Sole Proprietorships -->
                        <div class="content-card">
                            <h3 class="card-title">Sole proprietorships</h3>
                            <p>Sole proprietorships are by far the most common business form. The businesses are owned by one person and there is no legal distinction between the owner and the business. They are easy to create, operate and terminate since few formalities are involved. Most sole proprietorships are ready for business as soon as they set up operations.</p>
                            <p>The businesses are usually small in size and require minimal capital to start and operate. Their sponsors are essentially individuals who go into business for themselves. It is the only form where the sponsor is truly independent and is his own boss.</p>
                            
                            <div class="callout callout--success">
                                <div class="callout-header">
                                    <span class="callout-icon">✅</span>
                                    <h4 class="callout-title">Advantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>The proprietor of a sole proprietorship is independent and is his or her own boss. There can be no arguments about policy and decisions. More and more women are becoming entrepreneurs;</li>
                                        <li>Sole proprietorships require relatively low start-up and working capital;</li>
                                        <li>There are minimal legal formalities and requirements to start and operate. They are easy to establish and dissolve. Once the owner obtains the start-up funds and necessary licenses and permits, he or she, can start the business. Termination is equally easy;</li>
                                        <li>There is limited government regulation in Kenya. Although all businesses are subject to some government controls, sole proprietorships have more freedom than other forms of business;</li>
                                        <li>There is greater self-interest and satisfaction due to the sense of ownership associated with this form of business;</li>
                                        <li>Decision-making and implementation are fast since the owner is not required to consult others in doing so;</li>
                                        <li>Sole proprietorships can respond quickly to changes in the external business environment conditions since the proprietor has direct and total control of decision the making process;</li>
                                        <li>The proprietor is in close contact with all stakeholders including employees, customers, suppliers and distributors. The proprietor can easily get essential feedback and address individual needs;</li>
                                        <li>The proprietor gets all the after tax profits of the business which serves as an incentive to work hard and be efficient. The harder and more efficient one is, the higher the profits;</li>
                                        <li>Sole proprietorships that start out small-scale are an ideal way of testing one’s business idea. Failure does not result in heavy losses as would be the case with large businesses.</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="callout callout--warning">
                                <div class="callout-header">
                                    <span class="callout-icon">⚠️</span>
                                    <h4 class="callout-title">Disadvantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>In sole proprietorships, the sponsor has unlimited liability hence they bear all the risks, liabilities and obligations of the business. In law, the proprietor and the business are identical. The owner is therefore personally responsible for all the debts, and other obligations of the business, even when they are more than the business is worth. The owner may have to sell personal property such as cars, houses, or furniture to satisfy claims against the business.</li>
                                        <li>Sole proprietorships may not afford to employ experts or professionals. These businesses also have difficulties finding and keeping good employees since professionals prefer employment in businesses where liabilities are limited. Furthermore, small businesses often cannot offer employees the same fringe benefits and opportunities for advancement as large companies;</li>
                                        <li>They have difficulties in raising additional capital since their sources of financial resources are more limited. Business lenders view the owner’s unlimited liability as a high risk since business assets are not protected from claims of personal creditors. Owners must use personal funds to finance the business;</li>
                                        <li>The inability of sole proprietorships to raise additional funds may curtail the business expansion plans;</li>
                                        <li>They may not take advantage of offers and discounts that may arise due to inability to buy in bulk;</li>
                                        <li>Sole proprietorships often have limited managerial expertise. Their success depends entirely on the owner's skills and talents. The owner is fully responsible for all business decisions, and must be a jack-of-all-trades. Not all owners are equally skilled in all areas. An investor who creates a new product may not be a good marketer, production manager, human resource manager, or accountant. Such an investor would have limited range of ideas required for decision-making;</li>
                                        <li>Decisions can be hasty due to lack of moderating voices;</li>
                                        <li>Running a sole proprietorship requires a huge time commitment and often dominates the owner's life. The owner must be willing to make sacrifices, often working 18 or more hours a day, six or seven days a week, with little time for leisure;</li>
                                        <li>There is no one to fill in when the proprietor is absent due to illness, family or social functions and holidays;</li>
                                        <li>Sole proprietorships lack continuity of existence; these businesses have uncertain life. If the owner loses interest, retires, dies, is disabled or becomes a lunatic, the business will cease to exist unless the owner finds a buyer. Sale of the business may result in loss of goodwill.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <!-- Partnerships -->
                        <div class="content-card">
                            <h3 class="card-title">Partnerships</h3>
                            <p>A partnership is owned by between 2 and 20 people or 50 in the case of professional partnership. There is no legal separation between ordinary partners. Some partners may have limited liability if it is a limited partnership. Ordinary partnerships are like sole proprietorships, easy to create, operate and terminate since few formalities are involved. Most of them are ready for business as soon as they set up operations. If one partner makes a business mistake without the knowledge or consent of others, all the other partners too must shoulder the consequences. Personal assets could be taken to pay the creditors even though the mistake was no fault of these other partners.</p>
                            <p>If your partner goes bankrupt in his or her personal capacity, for whatever reason, his or her creditors can seize his or her shares in the partnership. Even death may not release a partner from partnership obligations and in some circumstances the partner's estate can remain liable. However, limited partners would lose their right to manage the business. Moreover, at least one of the partners must remain an ordinary partner with unlimited liability.</p>
                            <p>Partnerships are prone to disputes and disagreements hence it would be well advised to negotiate a written partnership agreement or deed that states the terms and conditions for their partnership. Such written contract can avoid confusion disputes, and litigation later. The deed would normally specify issues such as arrangements between the partners, such as their financial contributions, management, how profits and losses will be shared, method of taking into business future additional partners and issues of dissolution.</p>
                            <p>The partners' contribution to the firm may come in various forms: services, skills, property or cash. And since partners are co-owners, the law presumes that they would share profits and losses equally, unless they specify in the deed otherwise.</p>

                            <div class="callout callout--success">
                                <div class="callout-header">
                                    <span class="callout-icon">✅</span>
                                    <h4 class="callout-title">Advantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Partnerships are easy to form. Like sole proprietorships, partnerships can be established quickly and cheaply, and with few legal formalities. The partners agree to do business together, and develop a partnership agreement;</li>
                                        <li>Most partnerships require relatively low start-up capital. Like sole proprietorships, they are relatively inexpensive to form. Once the owner obtains the start-up funds and necessary licenses and permits, he or she can start the business;</li>
                                        <li>They provide additional sources of investment capital. Because two or more people contribute financial resources, partnerships can raise funds more easily for starting, operating and business expansion. The partners' combined financial strength also increases the firm's ability to raise funds from outside sources;</li>
                                        <li>Synergy. Partners can share the responsibility for managing, and operating the business. The costs of running the business is cheaper for individual partners due to the pooling of resources;</li>
                                        <li>There can be diversity of skills and expertise. Ideal partnerships bring together people with complementary backgrounds, rather than those with similar experiences. Combining partner skills to set goals and objectives, manage the overall direction of firm, and solve problems, increases the likelihood of the partnership's success. Finding the right partners entails looking at your own strengths and weaknesses, and examining what you are looking for in a partner;</li>
                                        <li>Discussions are possible whereby new and more ideas may develop as a result;</li>
                                        <li>Personal contact with customers, employees, suppliers and other people associated with the business is still possible as in sole proprietorships;</li>
                                        <li>There is flexibility since some partners can have limited liability;</li>
                                        <li>General partners take active role in managing their firms/ventures, and can respond relatively quickly to changes in the external business environment;</li>
                                        <li>Business continuity. Absence due to illness, family and social functions, and holidays can be covered for by other partners;</li>
                                        <li>Business losses, liabilities and other obligations are shared by the partners and are not shouldered by one individual;</li>
                                        <li>There is limited government regulation. Except for local by-laws, rules for licensing, and permits, the government has little control over partnership activities.</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="callout callout--warning">
                                <div class="callout-header">
                                    <span class="callout-icon">⚠️</span>
                                    <h4 class="callout-title">Disadvantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Some partners have unlimited liability. In fact, any one partner can be held personally liable for all partnership debts and legal judgments, like malpractice, regardless of who caused them. As in sole proprietorships, business failure can lead to loss of the general partners’ personal assets. To overcome this disadvantage, there is provision for the formation of limited partnerships which allows some partners to have limited liability;</li>
                                        <li>There are relatively limited sources of capital for expansion hence difficulty in raising large amounts of additional capital;</li>
                                        <li>It is hard to find suitable partners;</li>
                                        <li>There is potential for conflict between partners. Partners may have different ideas, both business and personal, about such matters as how and when to expand the business, which employees to hire or fire, and how to allocate responsibilities. Such differences of opinion may lead to disharmony and possible business disruption;</li>
                                        <li>There can be delays in decision-making due to the need for consensus, or further consultations;</li>
                                        <li>Decisions of one partner are binding to all other partners, unless otherwise stated in the partnership deed;</li>
                                        <li>Death, retirement, disability or lunacy of one partner may lead to the dissolution of the business;</li>
                                        <li>There may be problems getting a buyer who is acceptable to all partners;</li>
                                        <li>There is usually little or no reward for partners who work harder than others;</li>
                                        <li>Partners have to share profits. Dividing profits is relatively easy if all partners contribute about the same amount of time, expertise, and capital. However, if one partner provides more money, and the others put more time, it is more difficult to arrive at a fair profit-sharing formula.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <!-- Limited Companies -->
                        <div class="content-card">
                            <h3 class="card-title">Limited companies (corporate ventures)</h3>
                            <p>A limited company is owned by between 2 and 50 people. The business has a legal identity of its own separate from the people who own it. It can own assets, sue and be sued. Creditors and other claims are restricted to the assets of the business hence a shareholder’s liability is limited to the amount you have contributed by way of share capital. The business has perpetual life. There is a legal requirement that a chartered or certified accountant audit the business accounts.</p>
                            
                            <div class="callout callout--success">
                                <div class="callout-header">
                                    <span class="callout-icon">✅</span>
                                    <h4 class="callout-title">Advantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>All shareholders have limited liability. A stockholder’s liability for debts of the firm is limited to the amount of shares owned. This means that, if the corporation goes bankrupt, creditors can look only to the assets of the corporation for payment;</li>
                                        <li>The corporation is a legal entity separate from its owners. It can own property, dispose of the property, be sued and sue;</li>
                                        <li>It has unlimited or perpetual life. Changes in directors and shareholders do not affect the life of the business. Death, bankruptcy, disability and lunacy would not lead to dissolution;</li>
                                        <li>They can employ specialists or professionals to manage the business;</li>
                                        <li>Corporations have greater ability to attract financing. They can raise money by selling new shares of stock. They can also raise funds through corporate bonds and debentures. The larger size and stability of corporations further helps them get bank loans. These financial resources allow the corporations to invest in facilities and human resources and grow much larger than sole proprietorships and partnerships;</li>
                                        <li>Shareholders of limited companies can transfer their shares in accordance with their articles of association;</li>
                                        <li>The business can expand and obtain economies of scale due to stronger capital base;</li>
                                        <li>Money raised from issue of shares remains permanently in the business. Shareholders can only transfer their shares.</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="callout callout--warning">
                                <div class="callout-header">
                                    <span class="callout-icon">⚠️</span>
                                    <h4 class="callout-title">Disadvantages</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>They require high costs and are complex to form. Forming a corporation takes several steps, each of which requires some expenditure;</li>
                                        <li>They involve greater legal formalities in their creation and dissolution;</li>
                                        <li>They are subject to greater government regulation and reporting requirements. Before selling stock, corporations must register with the Capital Markets Authority. The firm must prepare financial reports on a regular basis and file returns with the Kenya Revenue Authority;</li>
                                        <li>There are reduced self-interest and satisfaction since managers are usually not the shareholders but professional employees. Shareholders lose direct right to manage the business and are usually involved only during annual general meetings;</li>
                                        <li>Profits are shared between the shareholders with each getting only a small portion of the earnings for the period;</li>
                                        <li>There are usually delays in decision-making and implementation due to increased bureaucracy in the management. This makes them be less innovative;</li>
                                        <li>There is lack of personal contact with stakeholders. Stakeholders may not even know who the shareholders are;</li>
                                        <li>There can be possible developments of conflicts between shareholders and executives. Those in management may fail to appreciate the interests of shareholders.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 15.3 Business Plans -->
                    <section class="content-section" id="section-15-3">
                        <div class="section-header">
                            <div class="section-number">15.3</div>
                            <h2 class="section-title">Business Plans</h2>
                        </div>
                        <div class="content-card">
                            <p>A business plan is a management tool used by well-run companies of all sizes and at all stages of growth to set down business objectives and goals and the details as to how these can be achieved.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">The 4M's of a Business Plan</h3>
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">👔</div>
                                    <h4 class="feature-title">Management</h4>
                                    <p class="feature-text">who is going to do it?</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">📢</div>
                                    <h4 class="feature-title">Marketing</h4>
                                    <p class="feature-text">what is the opportunity and how will it be seized?</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">💰</div>
                                    <h4 class="feature-title">Money</h4>
                                    <p class="feature-text">how much money will it take, and who will finance it?</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">⚙️</div>
                                    <h4 class="feature-title">Money machine</h4>
                                    <p class="feature-text">how will the business operate as a ‘money machine’?</p>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">The Business Plan Content</h3>
                            <ol class="enhanced-list">
                                <li><strong>Executive Summary</strong> - The executive summary is the first part of the business plan to be read by potential lenders and investors. This section describes the business, and its strategic direction, describes the company's market and marketing plan, briefly discusses the background of management, and states the company's revenue and profit expectations.</li>
                                <li><strong>Description of proposed business</strong> - This section of the business plan provides very detailed explanations about the proposed business. The goods or services that the entrepreneur intends to produce or provide to the market. This section provides details of the goods and services. It defines the business goals that the entrepreneur foresees.</li>
                                <li><strong>Industry analysis</strong> - This provides an analysis of the industry that the entrepreneur is venturing into. It defines the customers that are there in the industry, the competitors, and the pricing strategy that the entrepreneur intends to utilise to become successful in their trade.</li>
                                <li><strong>Mission, vision and core values</strong> - This provides the mission statement of the business; the vision where the business is projected to be in the future; and the core values that the entrepreneur and/or the partnership/limited company stands for.</li>
                                <li><strong>Management plan</strong> - This indicates the organisation structure and the management team. The management team is composed of the senior team members, their roles and responsibilities in the business.</li>
                                <li><strong>Products and services and the process of business</strong> - This indicates how the products and or services will flow from production to the market. It shows the stages involved in the process and the resources the entrepreneur will use in the entire chain of the business. It provides clarity to the entrepreneur and any funders interested in investing in the business.</li>
                                <li><strong>Operations</strong> - This indicates how the operations of the business shall be performed. The organisation of the daily activities and tasks are also detailed here.</li>
                                <li><strong>Marketing</strong> - This indicates the overall industry or market, the competition, and the sales forecasts amongst others.</li>
                                <li><strong>Global issues</strong> - This presents global details of the issues and trends of the specific industry.</li>
                                <li><strong>Risk factors and mitigating factors</strong> - This indicates the risks foreseen by the business and the strategies to mitigate those risks.</li>
                                <li><strong>Financial plan</strong> - This shows the operational cost estimates, indicative income statement, indicative balance sheet, projected cash flow statement and the break-even analysis.</li>
                                <li><strong>Appendices</strong> – These include promotional items like fliers and posters, photographs of product or service, product flow charts, financial information like the projected cash flows, and the indicative balance sheet amongst others.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 15.4 Managing Business Finances -->
                    <section class="content-section" id="section-15-4">
                        <div class="section-header">
                            <div class="section-number">15.4</div>
                            <h2 class="section-title">Managing Business Finances</h2>
                        </div>
                        <div class="content-card">
                            <p>Every business deals with money to pay for expenses, buy equipment and stock, receipts from sales and so on. These transactions are either in cash or credit (promise to pay or be paid later). Financial management would therefore involve recording of business activities that are of a financial nature (bookkeeping), organising and summarising this data and presenting it in reports for use by stakeholders. The first and most important user of this information is the owner of the business.</p>
                            
                            <h3 class="card-title">The Importance of Financial Management</h3>
                            <p>The purpose of financial management is to help in decision making on matters of profitability, investment, cash management, pricing and other aspects of business performance. The cost of making wrong decisions is high and in many cases leads to business failure. Financial management helps reduce mistakes in decision-making and enhances management effectiveness (making the right decision).</p>
                        </div>
                    </section>

                    <!-- 15.5 Principles of Business Management -->
                    <section class="content-section" id="section-15-5">
                        <div class="section-header">
                            <div class="section-number">15.5</div>
                            <h2 class="section-title">Principles of Business Management</h2>
                        </div>
                        <div class="content-card">
                            <p>Principles of business management consist of mobilising resources and combining and coordinating them effectively to help meet the goals of the business. To be able to do this, the manager performs the functions of planning, organising, leading, staffing and controlling.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Planning Activities</h3>
                            <p>Planning is a process of preparing a plan of action to achieve a set target for business activities. This may involve forecasting events, scheduling and re-scheduling of activities and tasks that affect the attainment of a target or goal. Planning is thinking ahead of time. Planning affects all the activities that the business undertakes. The entrepreneur and his or her team should plan for everything in the business including and not limited to finance, marketing, buying of stock and even the people he/she employs in the business.</p>
                            <p>Planning for the business involves the following:</p>
                            <p>i. Setting goals, objectives and targets. This involves:</p>
                            <ul class="enhanced-list">
                                <li>Making a decision on what target to achieve after a certain period of time;</li>
                                <li>Developing long term and short term plans for the business.</li>
                            </ul>
                            <p>ii. Deciding on the activities that will be undertaken to help achieve the goals, objectives and targets.</p>
                            <p>iii. Developing ways of finding out whether the business is achieving its desired targets.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Organisation</h3>
                            <p>This is the process of identifying activities and tasks which will be carried out in the business and deciding the order in which the activities will be implemented and the people responsible for the activities. There are many activities that could be involved in a particular business such as purchasing of medical equipment or laboratory materials and banking. The complexity and intensity of these activities will depend on the size of the enterprise.</p>
                            <p>The entrepreneur needs to employ workers to help in carrying out some routine activities. They should identify the tasks and allocate duties and responsibilities to others.</p>
                            <p>The following are the main functions in organising:</p>
                            <p>i. Listing down all the activities that must be carried out in the business such as accounting, record keeping and purchasing;</p>
                            <p>ii. Grouping all the activities that are related together. For example for accounting include record keeping, banking and planning finances (budgeting).</p>
                            <p>iii. Deciding which activities must be done by the business owner and those by others thus allowing the business owner to focus on the core business activity of patient treatment or product development etc. depending on the nature of the business. Delegating i.e. allocating duties and responsibility to others. When delegating, the entrepreneur should make sure that others know their full responsibilities.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Leadership</h3>
                            <p>This is the function of providing strategic direction in the business. In a business there may be people working for or assisting the owner in one way or another. But it is the owner who knows the direction he/she wants to take the business. The business vision may be written or not. To have a successful business, the owner must be prepared to be a leader. Module two in this series covers Leadership and Management in more detail.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Resource Mobilisation</h3>
                            <p>Resource mobilisation involves looking for required resources to implement the activities identified in the business plan. These resources could be people, money, raw materials, equipment, and so on. It is the responsibility of the business owner to look for these resources. Further details on resource mobilisation can be obtained from the Module on Financial Management and Resource Mobilisation.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Controlling</h3>
                            <p>Controlling is one of the most important roles for any entrepreneur. Control involves knowing whether what has been planned or invested in the business is going according to plan and schedule. The business owner should take pro-active measures to prevent damages to the business. The following are some of the main control activities:</p>
                            <p>i. Controlling the budget involves ensuring that spending does not exceed what was budgeted;</p>
                            <p>ii. Controlling cash movement and the way it is spent (used) involves making sure that there is enough cash to meet daily business activities;</p>
                            <p>iii. Controlling credit sales involves reducing the number of debtors;</p>
                            <p>iv. Controlling stock held so that the business does not have too much or too little;</p>
                            <p>v. Controlling performance of workers so that they are able to meet the targets and that they stick to the work that has been planned.</p>
                        </div>
                    </section>

                    <!-- 15.6 Raising Business Capital -->
                    <section class="content-section" id="section-15-6">
                        <div class="section-header">
                            <div class="section-number">15.6</div>
                            <h2 class="section-title">Raising Business Capital</h2>
                        </div>
                        <div class="content-card">
                            <p>One the most difficult things when starting a business is raising the start-up funds or capital. The entrepreneur might have a great and clear idea of how to run a successful business. However, if sufficient finance cannot be raised, it is unlikely that the business will get off the ground. Raising finance for start-up requires careful planning. The entrepreneur needs to decide:</p>
                            <ul class="enhanced-list">
                                <li>How much finance is required?</li>
                                <li>When and how long the finance is needed for?</li>
                                <li>What security (if any) can be provided?</li>
                                <li>Whether the entrepreneur is prepared to give up some control (ownership) of the start-up in return for investment?</li>
                            </ul>
                            <p>The finance needs of a start-up should take account of these key areas:</p>
                            <p>i. Set-up costs- the costs that are incurred before the business starts to trade;<br>
                            ii. Starting investment in capacity- the fixed assets that the business needs before it can begin to trade;<br>
                            iii. Working capital- the stocks needed by the business, e.g. raw materials and allowance for amounts that will be owed by customers once sales begin;<br>
                            iv. Growth and development- e.g. extra investment in capacity.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Debt Financing (Borrowing)</h3>
                            <p>This is a financing method which involves an interest bearing loan being advanced to the business. The loan repayment is usually scheduled to be funded directly from the sales and profits of the venture. The financing may be short-term or long-term borrowing. Regular (monthly) interest payments are required to repay the loan and these could be difficult to service in case of poor performance of the business. Interest costs can escalate if loan interest rates are revised upwards by the lender.</p>
                            <p>The following are some common sources of debt financing:</p>
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">i. Loans from commercial banks</h4>
                                        <p class="definition-text">Although some banks will make unsecured short-term loans, most bank loans are secured by receivables, inventories or other assets. The banks require collateral for them to issue a loan and the collateral value will depend on the amount of loan that an entrepreneur is applying for. The loan is payable at an interest that is set by the bank issuing the loan.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">ii. Bank overdraft</h4>
                                        <p class="definition-text">This is a more short-term kind of finance which is also widely used by start-ups and small businesses. An overdraft is really a loan facility; the bank lets the business ‘owe it money’ when the bank balance goes below zero, in return for charging a high rate of interest. As a result, an overdraft is a flexible source of finance in the sense that it is only used when needed. Bank overdrafts are excellent for helping a business handle seasonal fluctuations in cash flow or when the business runs into short-term cash flow problems (e.g. a major customer fails to pay on time).</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">iii. Trade credit</h4>
                                        <p class="definition-text">This is credit given by suppliers who sell goods on account. This credit is reflected on the entrepreneur’s balance sheet as accounts payable, and in most cases must be paid in 30 to 90 days.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">iv. Accounts receivable factoring</h4>
                                        <p class="definition-text">This is short term financing that involves either the pledge of receivables as collateral for a loan or a future sale where a customer’s order can be produced as proof of the intended sale.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">v. Finance companies</h4>
                                        <p class="definition-text">These are asset based lenders that lend money against assets such as receivables, inventory and equipment.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">vi. Leasing companies</h4>
                                        <p class="definition-text">There are companies that can lease out office space or equipment usually for regular rental payments over a specified period of time.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">vii. Loan associations</h4>
                                        <p class="definition-text">Like cooperative societies, member clubs, self-help groups, and investment clubs among others.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Equity Financing</h3>
                            <p>This is where a venture reaches out to equity partners for financing in the venture with no legal obligation for entrepreneurs’ to repay the principal amount or pay interest on it. However, it requires sharing ownership and profits with the equity partners. This profit is mostly in form of dividend normally paid after tax. It can be raised through two major sources: public stock offerings and private placements.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Public Stock Offerings</h3>
                            <p>Going public is a term used to refer to a business raising capital through the sale of securities to the public through the capital markets. In Kenya, initial public offerings, and rights issues are some of the common practices of companies going public or seeking to grow their capital base. The company invites the public or existing shareholders to buy shares and invest in its future. Selling securities is one of the fastest ways to raise large sums of capital in short periods of time. The public market provides liquidity for owners since they can readily sell their shares. Despite the positives that arise, there are expenses involved in going public like accounting and legal fees among others. Detailed disclosures of the company’s affairs must be made public. There are also numerous requirements imposed by the regulating bodies such as Capital Markets Authority and the Kenya Revenue Authority.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Private Equity</h3>
                            <p>This is another method of raising capital that small ventures often use. The entrepreneur would approach or be approached by potential partners who provide the required financing for specific growth or business needs. Private equity is easier to raise. However, business owners sometimes have to give up controlling interest of their businesses in order to benefit from private equity.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Internal Sources</h3>
                            <p>The main internal sources of finance for a start-up include:</p>
                            <p>i. <strong>Personal savings</strong> - These are the most important sources of finance for a start-up business. Most start-ups make use of the personal financial arrangements of the founder. This can be personal savings or other cash balances that have been accumulated. It can be personal debt facilities which are made available to the business. Investing personal savings maximises the control the entrepreneur keeps over the business. It is also a strong signal of commitment to outside investors or providers of finance.</p>
                            <p>ii. <strong>Retained profits</strong> - This is another important source of finance for any business, large or small. This is the cash that is generated by the business when it trades profitably. Retained profits can generate cash the moment trading has begun if the entrepreneur is willing to plough back the profits of early transactions into the business to finance other transactions.</p>
                            <p>iii. <strong>Borrowing from friends and family</strong> - This is also a common way of raising financing where friends and family who are supportive of the business idea provide money either directly to the entrepreneur or to the business. This can be quicker and cheaper to arrange compared with a standard bank loan and the interest and repayment terms may be more flexible than a bank loan. However, borrowing in this way can add to the stress faced by an entrepreneur, particularly if the business gets into difficulties.</p>
                            <p>iv. <strong>Credit cards</strong> - This is a surprisingly popular way of financing a small start-up. Many entrepreneurs who have access to credit card facilities use this as a means of financing small business opportunities/contracts and regular expenses. The entrepreneur pays for various business-related expenses on a credit card and receives a statement from the credit card company 15 days later. The business then pays the statement balance within the credit-free period. The effect is that the business gets access to a free credit period of around 30-45 days.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Leasing</h3>
                            <p>Many businesses today are being faced with the challenge of financing their fixed assets either through outright purchase or leasing of the asset. Current trends, mainly driven by cash flow pressure in the short term, are opting for flexible payments for the use of an asset as opposed to outright purchase which will make them set aside cash upfront for purchase of the asset.</p>

                            <h4 class="card-title">Leasing Verses Buying</h4>
                            <p>As opposed to an outright purchase, a leasing arrangement offers the opportunity to only pay a portion of the asset every month. - he portion which you 'use up' during the time you are using the asset. This arrangement is made to provide for return of the asset to the owner at the end of the lease period.</p>
                            <p>Some lease arrangements also prefer to monitor the use of the asset to minimise misuse and ensure that maintenance is carried out as required. Essentially, they are the true owners of the asset and it is in their interest to keep track of the asset's use. In the case of vehicles, some cap the number of kilometres that the vehicle should travel per month. They also keep track of the asset to ensure that the lessee is not misusing the asset. At the end of the lease, you may return the asset or purchase it for its depreciated resale value.</p>
                        </div>

                        <!-- Handout 1 -->
                        <div class="collapsible-section">
                            <details>
                                <summary class="collapsible-trigger">
                                    <span class="trigger-icon">📄</span>
                                    <span>Handout # 1: Advantages and Disadvantages of Using Leasing for Financing Business Assets</span>
                                </summary>
                                <div class="collapsible-content">
                                    <div class="callout callout--success">
                                        <h4 class="callout-title">Advantages</h4>
                                        <ul class="enhanced-list">
                                            <li>Reduced initial cash outlay- You do not need all the cash up front, you just need the first month's instalment for a start.</li>
                                            <li>Easier credit terms- It is easier to get someone to lease you an asset than sell to you on credit. Furthermore, you may negotiate a longer period for use of the asset. The owner has the title to the asset and therefore his risk is reduced.</li>
                                            <li>Avoidance of financial restrictions- Leasing frees your balance sheet to be able to borrow for other purposes.</li>
                                            <li>Flexibility in addressing obsolescence- Leasing is flexible enough to enable you keep pace with technology; you do not tie yourself to obsolete technology. You simply let go of the asset and take a fresh lease on the new one.</li>
                                            <li>Flexibility in addressing need and suitability- If you are not sure of the suitability of the asset, you can use the lease period to make the assessment without being bound by owning the asset upfront.</li>
                                            <li>Maintenance support- Under some leases, the lesser may agree to be responsible for maintaining and repairing the leased equipment at their cost.</li>
                                            <li>Current deductibility of rent- Your lease or rental payments are fully deductible for tax purposes if you use the leased asset in your business.</li>
                                            <li>Balance sheet appearance- Leasing improves certain financial indicators, such as your debt-to-equity and gives you a positive financial outlook.</li>
                                        </ul>
                                    </div>
                                    <div class="callout callout--warning">
                                        <h4 class="callout-title">Disadvantages</h4>
                                        <ul class="enhanced-list">
                                            <li>Overall cost- Your costs over the life of the asset are generally going to be higher than if you purchased the asset. This is because your rental payments must compensate the lesser not only for acquisition and financing costs, but also for the risk of not being in possession of his asset.</li>
                                            <li>No ownership interest- Your lease payments do not establish any ownership in your leased equipment. At the end of the lease, you will not have a tangible asset to show for your payments.</li>
                                            <li>Lost tax benefits- You lose the tax benefits of depreciation deductions that come with ownership.</li>
                                            <li>Commitment to property- Once you sign a lease agreement, you are generally committed to making payments for the entire lease period even if you stop using the property.</li>
                                        </ul>
                                    </div>
                                    <div class="callout callout--success">
                                        <h4 class="callout-title">Advantages of buying/upfront purchase of business assets</h4>
                                        <ul class="enhanced-list">
                                            <li>You retain control- There are restrictions that come with a leased asset that deny you the freedom to make decisions without referring to the lesser.</li>
                                            <li>You can consider the long-term cost- There are benefits of purchase that accrue in the long run, especially if the equipment can continue being productive for many years.</li>
                                            <li>You want to stay at the same location- In case of business premises, you stand to benefit from strategic locations if you buy upfront since leasing can cause you to lose premises when you are not ready.</li>
                                            <li>A purchase may bring you tax savings- There are tax savings that accrue especially with depreciation allowance on assets that you get to enjoy if you own the assets. The savings can be significant if the value of the asset is significant.</li>
                                        </ul>
                                    </div>
                                    <div class="callout callout--warning">
                                        <h4 class="callout-title">Disadvantages of buying/upfront purchase of business assets</h4>
                                        <ul class="enhanced-list">
                                            <li>Heavy initial outlay- This could be a challenge especially in hard economic times. Most businesses especially small ones may find it hard to afford the initial outlay required.</li>
                                            <li>Associated costs- For a business that may not afford initial cash upfront, loan financing may be another option of purchasing upfront. This raises the related costs of interest and the risk that interest can be adjusted upwards without notice in hard economic times.</li>
                                            <li>The owner bears the risk- Any risks such as damage, obsolescence, depreciation or breakdown are solely borne by the owner.</li>
                                            <li>Inflexible disposal- It may proof difficult to economically dispose the asset especially if it is used for a while. Some business owners end up getting stuck with old equipment that litters the factories because they cannot identify a possible buyer.</li>
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <!-- Handout 2 -->
                        <div class="collapsible-section">
                            <details>
                                <summary class="collapsible-trigger">
                                    <span class="trigger-icon">⚠️</span>
                                    <span>Handout # 2: Major Pitfalls of Entrepreneurship</span>
                                </summary>
                                <div class="collapsible-content">
                                    <div class="callout callout--danger">
                                        <p>There are many pitfalls that face an entrepreneur during start-up and during the course of running an entrepreneurial venture. These increase risk levels and exposure to the entrepreneur. There are some of the factors entrepreneurs need to be aware of beforehand. Below are some of them.</p>
                                        <ul class="enhanced-list">
                                            <li>Lack of enough cash for start-up and operations;</li>
                                            <li>Failing to collect debt on time;</li>
                                            <li>Lacking a clear elaborate business plan;</li>
                                            <li>Impatience – shortcuts to success or quitting too soon;</li>
                                            <li>Failure to formalise transactions with contracts;</li>
                                            <li>Failure to implement systems and keep proper records;</li>
                                            <li>Taking on a wrong partner;</li>
                                            <li>Hiring cheap incompetent employees;</li>
                                            <li>Thinking the business idea will make the company - failure to value employees;</li>
                                            <li>Competing on price and price alone;</li>
                                            <li>Thinking too small;</li>
                                            <li>Focusing on only one area of the business and ignoring the rest – finance/marketing/operations;</li>
                                            <li>Trying to cut cost your way to success;</li>
                                            <li>Failure to define banking boundaries – mixing personal cash with business cash;</li>
                                            <li>Failure to comply with tax laws.</li>
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Drucker, P. (1993) <em>Innovation and Entrepreneurship</em>. New York: Harper Collins.</li>
                                <li>Stutely, R. (2001) <em>The Definitive Business Plan</em>. 5th ed. Harlow: Pearson.</li>
                                <li>USAID Business Growth Initiative Project (2011) ‘The Entrepreneurship Toolkit: Successful Approaches to Fostering Entrepreneurship’ [online]. Available at &lt;www.gbsnonline.org 0c22350b-578a... collection resource toolkit.pdf&gt; [Accessed 15 May 2014].</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Entrepreneurship for Health Professionals.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-15-quiz"
                         data-quiz-js="../quizzes/topic-15-quiz.js">
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
                        <a href="topic-14.html" class="nav-button nav-button--previous">
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

                        <a href="topic-16.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 16: Disaster Management.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disaster Management | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-15.html" class="nav-button nav-button--previous">
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

                        <a href="topic-17.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 94.1%;"></div>
                        </div>
                        <span class="progress-text">Topic 16 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>🚨</span>
                        <span>Module 16</span>
                    </div>
                    <h1 class="document-title">Disaster Management</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Crisis & Emergency Response</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>20 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to the role of the health sector in addressing disasters</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Discuss the various types and classification of disaster and emergency incidents;</li>
                                <li>Describe the impact of disasters on health services delivery;</li>
                                <li>Outline various forms of disaster management;</li>
                                <li>Describe key policies and coordination frameworks for disaster risk reduction in Kenya.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>16.1 Concepts, terminologies and types of disasters</li>
                                    <li>16.2 Policy framework in disaster management</li>
                                    <li>16.3 National policy for disaster management in Kenya</li>
                                    <li>16.4 Handling emergencies at the health facility level</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussion, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, Power Point (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">4 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Concepts, terminologies and types of disasters</td>
                                        <td>To identify the various forms of disasters, key concepts and terms used concepts used in; to introduce key approaches to disaster management</td>
                                        <td>Comments regarding time adequacy and students’ understanding and perceptions</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Policy framework in disaster Management<br><br>Handling emergencies at the Health facility level</td>
                                        <td>To identify current policy frameworks in disaster management at the public and facility level<br><br>To identify ways of handling emergencies at the Health facility level</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 16.1 Concepts, Terminologies and Types of Disasters -->
                    <section class="content-section" id="section-16-1">
                        <div class="section-header">
                            <div class="section-number">16.1</div>
                            <h2 class="section-title">Concepts, Terminologies and Types of Disasters</h2>
                        </div>
                        <div class="content-card">
                            <p>There is no country that is immune from disasters or hazards, though vulnerability varies. Disasters cannot be predicted. When they happen, they create an emergency situation and impact on the health care system through increased demand for essential services, such as the provision of health care or destruction.</p>
                            <p>For this purpose, health care professionals should understand, be prepared for, and participate in preparing for, responding to, and recovering from the impacts of disasters.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Definitions and concepts of disaster management</h3>
                            
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Crisis</h4>
                                        <p class="definition-text">An event or series of events representing a critical threat to the health, safety, security or wellbeing of a community, usually over a wide area. Armed conflicts, epidemics, famine, natural disasters, environmental emergencies and other major harmful events may involve or lead to a humanitarian crisis.</p>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Emergency</h4>
                                        <p class="definition-text">This is a situation generated by the real or imminent occurrence of an event that requires immediate attention. Paying immediate attention to an event or situation is important as the event/situation can generate negative consequences and escalate into an emergency. The purpose of emergency planning is to minimise those consequences.</p>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Emergency preparedness</h4>
                                        <p class="definition-text">A programme of long-term activities whose goals are to strengthen the overall capacity and capability of a country or a community to manage efficiently all types of emergencies and bring about an orderly transition from relief through recovery and back to normalcy. It requires that emergency plans be in place, personnel at all levels and in all sectors be trained, and communities at risk be educated, and that these measures be monitored and evaluated regularly.</p>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Hazard</h4>
                                        <p class="definition-text">This is the potential for a natural or human-caused event to occur with negative consequences. A hazard can become an emergency, when the emergency moves beyond the control of the population, it becomes a disaster.</p>
                                        <ul class="enhanced-list">
                                            <li><strong>i. Natural hazard</strong> - Natural processes or phenomenon that may cause loss of life, injury or other health impacts, property damage, loss of livelihoods and services, social and economic disruption, or environmental damage.</li>
                                            <li><strong>ii. Geological hazard</strong> - Geological process or phenomenon that may cause loss of life, injury or other health impacts, property damage, loss of livelihoods and services, social and economic disruption, or environmental damage.</li>
                                            <li><strong>iii. Technological hazard</strong> - A hazard originating from technological or industrial conditions, including accidents, dangerous procedures, infrastructure failures or specific human activities, that may cause loss of life, injury, illness or other health impacts, property damage, loss of livelihoods and services, social and economic disruption, or environmental damage.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Disaster</h4>
                                        <p class="definition-text">This ss a natural or human-caused event which causes intensive negative impacts on people, goods, services and/or the environment, exceeding the affected community’s capability to respond.</p>
                                        <ul class="enhanced-list">
                                            <li><strong>i. Disaster risk</strong> - The potential disaster losses, in lives, health status, livelihoods, assets and services, which could occur to a particular community or a society over some specified future time period.</li>
                                            <li><strong>ii. Disaster risk management</strong> - The systematic process of using administrative directives, organisations, and operational skills and capacities to implement strategies, policies and improved coping capacities in order to lessen the adverse impacts of hazards and the possibility of disaster.</li>
                                            <li><strong>iii. Disaster risk reduction</strong> - The concept and practice of reducing disaster risks through systematic efforts to analyse and manage the causal factors of disasters, including through reduced exposure to hazards, lessened vulnerability of people and property, wise management of land and the environment, and improved preparedness for adverse events.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Risk</h4>
                                        <p class="definition-text">This is the probability that loss will occur as the result of an adverse event, given the hazard and the vulnerability. Risk (R) can be determined as a product of hazard (H) and vulnerability (V). i.e. R = H x V.</p>
                                        <p class="definition-text">The probability of harmful consequences or expected losses such as deaths, injuries, property, disrupted livelihood and economic activity, or environment damaged resulting from interactions between natural or human-induced hazards and vulnerabilities.</p>
                                        <ul class="enhanced-list">
                                            <li><strong>i. Risk assessment</strong> - A methodology to determine the nature and extent of risk by analysing potential hazards and evaluating existing conditions of vulnerability that together could potentially harm exposed people, property, services, livelihoods and the environment on which they depend.</li>
                                            <li><strong>ii. Risk management</strong> - Consists of identifying threats (hazards likely to occur), determining their probability of occurrence, estimating what the impact of the threat might be to the communities at risk, determining measures that can reduce the risk, and taking action to reduce the threat.</li>
                                            <li><strong>iii. Risk reduction</strong> - Taking measures to either prevent hazards from creating risks or to lessen the distribution, intensity or severity of hazards. These measures include awareness raising and improving public health security.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Vulnerability</h4>
                                        <p class="definition-text">The degree to which a population or an individual is unable to anticipate, cope with, resist and recover from the impact of a disaster.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="callout callout--warning">
                                <div class="callout-header">
                                    <span class="callout-icon">⚠️</span>
                                    <h4 class="callout-title">Distinguishing Between an Emergency and a Disaster Situation</h4>
                                </div>
                                <div class="callout-content">
                                    <p>An emergency and a disaster are two different situations:</p>
                                    <ul class="enhanced-list">
                                        <li>An emergency is a situation in which the community is capable of coping. It is a situation generated by the real or imminent occurrence of an event that requires immediate attention of emergency resources;</li>
                                        <li>A disaster is a situation in which the community is incapable of coping. It is a natural or human-caused event which causes intense negative impacts on people, goods, services and/or the environment, exceeding the affected community's capability to respond. Therefore the community seeks the assistance of government and international agencies.</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Types of Disasters and Hazards</h3>
                            <p>There are four main types of disasters:</p>
                            <ol class="enhanced-list">
                                <li><strong>Natural disasters</strong>- These include drought, floods, hurricanes, earthquakes and volcano eruptions that can have immediate impacts on human health as well as secondary impacts causing further death and suffering from floods causing landslides, earthquakes resulting in fires, tsunamis causing widespread flooding and typhoons sinking ferries.</li>
                                <li><strong>Environmental emergencies</strong>- These include technological or industrial accidents usually involving hazardous material and occur where these materials are produced, used or transported. Forest fires are generally included in this definition because they tend to be caused by humans.</li>
                                <li><strong>Complex emergencies</strong>- These emergencies involve a break-down of authority, looting and attacks on strategic installations. Complex emergencies include conflict situations and war.</li>
                                <li><strong>Epidemics and pandemic</strong>- These emergencies involve a sudden onset of a disease that raises well beyond the expected numbers that the health system can handle. An epidemic is specific to one city, region or country while a pandemic covers a much wider geographical area and goes much further than national borders often worldwide. A pandemic also infects many more people than an epidemic. These affect and disrupt health services and businesses leading to economic and social costs.</li>
                            </ol>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Human Induced Disasters</h3>
                            <p>Some disasters are caused by human factors these include:</p>

                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">🚗</div>
                                    <h4 class="feature-title">Transport related accidents</h4>
                                    <p class="feature-text">The increasing numbers of accidents that take place during road, air and water, and railway transportation are occasionally fatal and hazardous. Currently, road accidents are more frequent because road transportation is used more often than air, railway and water transport. In addition, motorcycle (boda-boda) accidents have become notoriously rampart and fatal. Occasionally, there are reported incidents of boats that capsize. On some occasions, crocodiles attack people who use small canoes.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🔥</div>
                                    <h4 class="feature-title">Fires</h4>
                                    <p class="feature-text">Fire hazards include the unplanned and massive burning which may cause destruction of equipment, settlements, property and life. Among the many factors that cause fire hazards are poor electric wiring, power outage, poor construction standards, accidents, arson and uncontrolled burning of bush or waste materials. Fires are most common in industries and congested human settlements. Road transportation of oil, gas and petroleum resources which are highly inflammable increase the risk of fires in the event of road accidents followed by people trying to illegally siphon the products.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">💣</div>
                                    <h4 class="feature-title">Terrorism</h4>
                                    <p class="feature-text">Terrorism is coordinated crime and brutal aggression against government and civilian establishments. The first major terrorist attack occurred in 1998 targeting the American Embassy. Since then, the country has been under a constant threat of terrorism.</p>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Impact of Disasters on the Health System</h3>
                            <p>All forms of disasters and hazards affect human life. They impact on, and can at times compromise public health infrastructure and systems. What may first result in direct injuries and death may rapidly change to excess indirect illness and subsequent death as essential public health resources are destroyed, deteriorate, or are systematically denied to vulnerable populations.</p>
                            <p>The public health consequences include:</p>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <tbody>
                                        <tr><td>Death</td><td>Loss of clean water</td></tr>
                                        <tr><td>Injuries</td><td>Loss of shelter</td></tr>
                                        <tr><td>Public concern for safety</td><td>Loss of sanitation</td></tr>
                                        <tr><td>Panic</td><td>Loss of routine hygiene</td></tr>
                                        <tr><td>Increased pests vectors</td><td>Damage to health care system</td></tr>
                                        <tr><td>Worsening of chronic illnesses</td><td>Toxic/ hazardous exposure</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Define the following:
                                            <ol class="enhanced-list" style="list-style-type: lower-alpha;">
                                                <li>Disaster management</li>
                                                <li>Hazard</li>
                                                <li>Emergency</li>
                                                <li>Disaster</li>
                                                <li>Vulnerability</li>
                                                <li>Risk</li>
                                            </ol>
                                        </li>
                                        <li>What is the difference between an emergency and a disaster situation?</li>
                                        <li>Identify and describe three natural disasters which you are familiar with.</li>
                                        <li>Identify and describe three man-made disasters you have learnt about.</li>
                                    </ol>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Disaster Management Cycle</h3>
                            <p>Disaster management is a cyclical process. The end of one phase is the beginning of another, although one phase of the cycle does not necessarily have to be completed in order for the next to take place. Often, several phases take place concurrently. Timely decision making during each phase results in greater preparedness, better warnings, reduced vulnerability and or the prevention of future disasters.</p>
                            <p>A complete disaster management cycle includes the shaping of public policies and plans that either addresses the causes of disasters or mitigates their effects on people, property, and infrastructure.</p>

                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-aaab5b4f.jpeg" alt="Disaster Management Cycle" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 16.1 Disaster Management Cycle</p>
                                <p class="figure-caption">Source; National Policy for Disaster Management in Kenya</p>
                            </div>

                            <p><strong>Mitigation</strong>- Measures put in place to minimise the results from a disaster e.g. building codes and zoning, vulnerability analyses and public education.</p>
                            <p><strong>Preparedness</strong>- Planning how to respond e.g. preparedness plans, emergency exercises/training and early warning systems.</p>
                            <p><strong>Response</strong>- Initial actions taken as the event takes place. It involves efforts to minimise the hazards created by a disaster e.g. evacuation, search and rescue, and emergency relief.</p>
                            <p><strong>Recovery</strong>- Returning the community to normal. Ideally, the affected area should be put in a condition equal to or better than it was before the disaster took place e.g. temporary housing, financial support and medical care.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Disaster Risk Management</h3>
                            <p>Disaster management is an enormous task that is not confined to any particular location. Neither do they disappear as quickly as they appear. Therefore, it is imperative that there is proper management to optimise efficiency of planning and response. Due to limited resources, collaborative efforts at the governmental, private and community levels are necessary. This level of collaboration requires a coordinated and organised multi-sectoral effort to mitigate against, prepare for, respond to, and recover from emergencies and their effects in the shortest time possible. The health system has a responsibility to protect the health of affected persons or communities in the event of a disaster or hazard. This function is fulfilled through effective disaster risk management.</p>
                            <p>Disaster risk management is a proactive and systematic process based on the key management principles of planning, organising, leading, coordinating and controlling. Its aim is to reduce the negative impact or consequences of adverse events. Disasters cannot always be prevented, but the adverse effects can be minimised. As a system, disaster risk management has many components.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Objectives of Disaster Management</h3>
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">🛡️</div>
                                    <h4 class="feature-title">i. Reduce damages and deaths</h4>
                                    <p class="feature-text">Effective disaster management reduces or avoids morbidity, mortality, and economic and physical damages from a hazard. The methods used to achieve this include hazard and vulnerability analysis, preparedness, mitigation and prevention measures, and the use of predictive and warning systems.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">😌</div>
                                    <h4 class="feature-title">ii. Reduce personal suffering</h4>
                                    <p class="feature-text">Disaster management reduces personal suffering such as morbidity and emotional stress following a hazard. The methods used to prevent suffering include hazard and vulnerability analysis, preparedness, and mitigation and prevention measures. Examples of efforts to reduce personal suffering include providing safe food supplies and potable drinking water when water supplies become contaminated.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">⏩</div>
                                    <h4 class="feature-title">iii. Speed recovery</h4>
                                    <p class="feature-text">The methods to accomplish this objective include effective response mechanisms and the institution of recovery programmes and assistance. Examples of efforts to speed recovery include providing paperwork assistance for insurance claims, and grant or loan applications.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">👥</div>
                                    <h4 class="feature-title">iv. Protect victims</h4>
                                    <p class="feature-text">Disaster management provides protection to victims and or displaced persons. Facilities utilise preparedness, response mechanisms, recovery programmes and assistance to address shelter needs and provide protective services.</p>
                                </div>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Disaster Risk Management Plan</h3>
                            <p>An effective disaster risk management plan includes:</p>
                            
                            <h4 class="card-title">i. Prevention</h4>
                            <p>Prevention includes activities designed to provide permanent protection from disaster. Disaster prevention plans are designed to provide permanent protection from disasters. Not all disasters, particularly natural disasters can be prevented, but the risk of loss of life and injury can be mitigated with good evacuation plans, environmental planning and design standards.</p>

                            <h4 class="card-title">ii. Preparedness</h4>
                            <p>These are activities designed to minimise loss of life and damage e.g. by removing people and property from a threatened location and by facilitating timely and effective rescue, relief and rehabilitation. Preparedness is the main way of reducing the impact of disasters. Community-based preparedness and management should be a high priority in health systems management. Appropriate preparedness results in persons knowing what to do and how to respond after disaster has occurred.</p>

                            <h4 class="card-title">iii. Mitigation</h4>
                            <p>This is a coordinated multi-sectoral response to reduce the impact of a disaster and its long-term results. Relief activities include rescue, relocation, providing food and water, preventing disease and disability, repairing vital services such as telecommunications and transport, providing temporary shelter and emergency health care.</p>

                            <h4 class="card-title">iv. Recovery</h4>
                            <p>Once emergency needs have been met and the initial crisis is over, the people affected and the communities that support them are still vulnerable. Recovery activities include rebuilding infrastructure, health care and rehabilitation. These should blend with development activities, such as building human resources for health and developing policies and practices to avoid similar situations in future.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Disaster Associated Health Issues</h3>
                            <p>When a disaster occurs, the general population expects the government and other agencies to rapidly mobilise the needed services with urgency. Preservation of life and health are of paramount importance to casualties. Immediately a disaster occurs, medical professionals, first aid and emergency medicine should be made available. As a consequence of disasters, it is also important to identify risk factors for communicable diseases and determine ways of minimising these risks.</p>

                            <h4 class="card-title">Emergency Health Services in Disasters</h4>
                            <p>During the first few hours/days following a disaster, the priority is usually to treat casualties and the sick or injured. Disasters like earthquakes, and collapsed buildings often involve the management of mass casualties which normally requires the following activities: Search, rescue and first aid; transport of health facilities and treatment; triage; tagging; and redistribution of patients between hospitals when necessary.</p>
                            <p>The demand for curative care is highest during the acute emergency stage, when the affected population is most vulnerable in their new environment and before basic public health measures e.g., water, sanitation and shelter have been provided. Thereafter, the priority should shift toward preventive measures. Any prolonged interruption in routine immunisations and other disease-control measures may result in serious outbreaks of diseases like measles, cholera etc.</p>
                            <p>Disasters call for a coordinated response between curative and preventive health services, including food supply, water and sanitation, etc. In order to minimise mortality and morbidity it is also necessary to organise the relief response according to three levels of preventive health measures, namely primary, secondary and tertiary prevention.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Infrastructure and Procedures in Accessing Emergency Situations</h3>
                            
                            <h4 class="card-title">Managing a Mass Casualty Incident (MCI)</h4>
                            <p>A MCI is any event producing a large number of victims such that the normal capacity of local health services is disrupted. Common causes of an MCI include road accidents, floods, fires, explosions, industrial accidents, or conflict situations.</p>
                            <p>The response may be delayed after a MCI due to poor communication. Inadequate transportation may decrease the survival of victims in critical condition. Normally, the following groups of patients reach the health facility first:</p>
                            <ul class="enhanced-list">
                                <li>Those nearest to the arriving ambulances;</li>
                                <li>Those who are first to be rescued; and</li>
                                <li>Those who are the most gravely injured.</li>
                            </ul>
                            <p>If there is only one first referral health facility, it may quickly become overwhelmed. Limited resources are used to care for victims arriving first, even though most of them may have minor injuries. As a result, they tie up the personnel, examining rooms, supplies, etc. increasing the risk of death for the critically ill victims whose survival depends on receiving prompt medical attention.</p>

                            <h4 class="card-title">Triaging</h4>
                            <p>Triage is defined simply as sorting and prioritising patients for medical attention according to the degree of injury or illness and expectations for survival. Triage is carried out to reduce the burden on health facilities and is normally done by the most experienced health worker assisted by competent staff on the triage team.</p>
                            <p>Triage is a continuous process that begins when patients arrive at the medical post and continues as their condition evolves until they are evacuated to hospital. By providing care to victims with minor or localised injuries, health facilities are freed to attend to more critical tasks. Triage is necessary where health facilities cannot meet the needs of all victims immediately, particularly following an MCI.</p>
                            <p>The goal of managing a MCI is to minimise the loss of life or disability of disaster victims by first meeting the needs of those most likely to benefit from services. This goal can be achieved by setting the following priorities for triage:</p>
                            <ul class="enhanced-list">
                                <li>Priority for transportation to the hospital is based upon referrals of priority needs of patients.</li>
                                <li>Priorities for care in the field are often identified by visible colour-coded tags that categorise patient needs.</li>
                            </ul>
                            <p>However it is important to note that different jurisdictions use varying systems and the use of colour-coded tags may cause some confusion (Nocera and Garner, 1999).</p>
                            <p>Management of MCI begins with being prepared to mobilise resources and follow standard procedures in the field and at the hospital. Hospitals with a limited number of emergency workers may find it difficult to hold regular training sessions on MCI management. Health facilities with limited resources should focus on the following:</p>
                            <ul class="enhanced-list">
                                <li>Improving routine emergency services for sudden-impact, small-scale incidents e.g., car accidents or accidents in the home. To avoid confusion, the same procedures that are necessary to save lives during an MCI should be performed as routine emergency services;</li>
                                <li>Coordinating activities that involve more than an emergency medical unit e.g. police, fire fighters, ambulances, hospitals etc and ensuring a quick transition from routine emergency services to mass casualty management establishing standard procedures for managing all incidents (small or large scale) such as search and rescue, first aid, triage, transfer to hospital and hospital care.</li>
                            </ul>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Transportation of Casualties</h3>
                            <p>Evacuations of casualties may be organised when they are gathered at a first aid post, a dispensary or any facility of the casualty-care chain, in which case they would have already been triaged and a priority category for evacuation has been assigned to each.</p>
                            <ol class="enhanced-list">
                                <li>Evacuation is contemplated when means are available and reliable, routes and timeframes are known and security has been ensured. Prior to the moving of casualties, it is imperative that personnel at destinations have been informed and are ready to receive the casualty or casualties.</li>
                                <li>Evacuation vehicles assigned for medical purposes must be used exclusively for the latter. Their availability and hygiene should be respected. Other vehicles should preferably be used to transport the dead bodies if at all possible. In all cases, priority should be given to the living casualties.</li>
                                <li>Proper lifting techniques are used to ensure comfort of the casualty and personnel responsible for lifting should be in good physical condition.</li>
                                <li>All departures of evacuation vehicles should be reported to supervisors in charge of managing evacuations providing the following information: departure time, number and condition of casualties, destination, estimated travel time and route, and number of first aiders aboard.</li>
                                <li>The means of transport should ideally be such that emergency and stabilisation measures can continue and should be as safe as possible as it is important that the trip is not traumatic for the casualties.</li>
                                <li>It should also be such that casualty can be accommodated in different lying or sitting positions depending on their condition. Furthermore, it should be able to accommodate for a provider of care or a first-aider to accompany the casualty.</li>
                                <li>The means of transport should provide adequate protection against the elements e.g. extreme temperatures, sun, rain, wind, etc..</li>
                                <li>Driving needs to be smooth and safe. Once a casualty has been stabilised it is unnecessary to drive at high speed and risk a road traffic accident. Extra care should be taken especially if the roads are bumpy or have potholes as hitting into them causes more pain to the casualty, may increase bleeding and displace traumatised limbs hence causing more complications.</li>
                                <li>Casualties found on the roadside should be taken on board only if there is adequate space and no other alternative.</li>
                                <li>On arrival at the hospital, every injured person should be reassessed, stabilised, and given definitive care. The colour-coded tags are strictly for field triage and field use. They should not be used for documenting health care in the hospital.</li>
                                <li>Hospitals should also regularly advise the incident commander about their health care capability and capacity so that the transfer of MCI victims is well organised. If the hospital's capacity or capability is low, patients and victims may have to wait a long time for treatment in surgical or intensive care units.</li>
                            </ol>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Communicable diseases common in disaster situations</h3>
                            <p>The main communicable diseases are:</p>
                            <ol class="enhanced-list">
                                <li><strong>Diseases transmitted by contact</strong> – Acute respiratory infections (ARI) which are common among people after a disaster especially among the children. These are spread through personal contact or being around people who are infected already. These include the common cold, influenza, bronchitis, diphtheria and pneumonia.</li>
                                <li><strong>Vector transmitted diseases</strong>- These include malaria, yellow fever, dengue and leptospirosis. These infections become prominent when the balance of nature is disturbed as is the case in a disaster.</li>
                                <li>Disease can also be transmitted through faecal matter ingested orally as a result of drinking contaminated water or eating food and fruits that are contaminated. These diseases include cholera, typhoid fever, diarrhoea diseases, and leptospirosis. They can also be transmitted through poor personal hygiene or from a contaminated environment.</li>
                                <li>Diseases transmitted through breathing contaminated air or from germs that are airborne can be problematic after a disaster. These diseases include tuberculosis, measles, meningococcal meningitis and whooping cough.</li>
                                <li>Sexually transmitted diseases are on the rise in peaceful times let alone being in disaster mode. These diseases are transmitted through sexual contact with infected people such as HIV and AIDS, gonorrhoea, syphilis, Chlamydia and trichomonas among others.</li>
                            </ol>

                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">📝</span>
                                    <h4 class="callout-title">Student Activity</h4>
                                </div>
                                <div class="callout-content">
                                    <p>Describe all components involved in emergency medicine and write small notes on each giving examples where possible.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 16.2 Policy Framework in Disaster Management -->
                    <section class="content-section" id="section-16-2">
                        <div class="section-header">
                            <div class="section-number">16.2</div>
                            <h2 class="section-title">Policy Framework in Disaster Management</h2>
                        </div>
                        <div class="content-card">
                            <p>Disaster preparedness is an ongoing multi-sectoral activity. It requires coordination and organisation by different departments of the government to facilitate assessment of a country's disaster risk, adoption of standards and regulations, and action to ensure that resources can be mobilised rapidly in disaster situations.</p>
                            <p>The health objectives of disaster preparedness are to:</p>
                            <ol class="enhanced-list">
                                <li>Prevent morbidity and mortality;</li>
                                <li>Provide care for casualties;</li>
                                <li>Manage adverse climatic and environmental conditions;</li>
                                <li>Ensure restoration of normal health;</li>
                                <li>Re-establish health services;</li>
                                <li>Protect staff; and</li>
                                <li>Protect public health and medical assets.</li>
                            </ol>
                            <p>The preparedness process includes policy development, vulnerability assessments, disaster planning, training and education, and monitoring and evaluation.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Policy development</h3>
                            <p>National governments must designate a branch of the ministry or organisation with the responsibility to develop, organise and manage an emergency preparedness programme for the country. This group must work with central government, county, provincial and community organisations and NGOs whether local or international to develop a set of policies agreed upon by all. This process is vital for a well-coordinated response and a sustainable policy. The policies' endpoint must allow quick decision making, ensure the actions are legal and free from liability and ensure that appropriate pre-defined actions are taken during a state of emergency.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Disaster Preparedness Process</h3>
                            
                            <h4 class="card-title">i. Vulnerability assessment</h4>
                            <p>Potential hazards at all levels of society are identified and prioritised in a vulnerability assessment. The community's capacity can be determined by the availability of resources of the community and how the community is able to utilise these resources.</p>

                            <h4 class="card-title">ii. Disaster planning</h4>
                            <p>Planning is only one component of preparedness. A disaster's outputs plan should provide:</p>
                            <ul class="enhanced-list">
                                <li>Provide an understanding of organisational responsibilities in response and recovery;</li>
                                <li>Provide stronger emergency management networks;</li>
                                <li>Improve society awareness and participation;</li>
                                <li>Effective response and recovery strategies; and</li>
                                <li>Be documented.</li>
                            </ul>

                            <h4 class="card-title">iii. Training and education</h4>
                            <p>An important component of preparedness is to train and educate public health officials and other stakeholders (responders) about the disaster plan. Training at all levels should ensure adequate distribution of important skills and knowledge needed for an effective disaster response.</p>
                            
                            <div class="callout callout--note">
                                <div class="callout-header">
                                    <span class="callout-icon">ℹ️</span>
                                    <h4 class="callout-title">Note</h4>
                                </div>
                                <div class="callout-content">
                                    <p>The County Director of health is the technical advisor for all health matters in the county. Their role shall be:</p>
                                    <ol class="enhanced-list">
                                        <li>The technical advisor to the County Executive Commissioner and themGovernor;</li>
                                        <li>To supervise all health services within the County;</li>
                                        <li>To promote the public health and the prevention, limitation or suppression of infectious, communicable or preventable diseases within the County;</li>
                                        <li>To prepare and publish reports and statistical or other information relative to the public health within the County;</li>
                                        <li>To report periodically to the Director-General for health on all public health occurrences including disease outbreaks, disasters and any other health matters;</li>
                                        <li>To perform any other duties as may be assigned by the appointing authority and any other written law.</li>
                                    </ol>
                                </div>
                            </div>

                            <p>The objective in monitoring and evaluation is to measure how well the disaster preparedness plan and programme is being implemented and if it achieving its health objectives as discussed.</p>
                            <p>WHO recommends that an effective risk reduction and emergency preparedness strategy be based on an ‘All-hazard/Whole-health’ concept:</p>
                            <ul class="enhanced-list">
                                <li><strong>All-hazard</strong> entails developing and implementing emergency management strategies for the full range of likely risks and emergencies- natural, biological, technological and societal. Different hazards and emergencies can cause similar problems in a community and such measures as planning, early warning, intersectoral and intrasectoral coordination, evacuation, health services and community recovery should be implemented along the same model regardless of cause.</li>
                                <li><strong>A whole-health approach</strong> should be in place in a country. There should not be parallel planning and coordination systems for each category of health risks. While technical leadership may vary, emergency planning processes, overall coordination procedures, surge and operational platforms should be unified under one emergency preparedness and response unit. Plans of the health sector can then be effectively coordinated with other sectors as well as with the designated national multi-sectoral emergency management agency.</li>
                            </ul>
                            <p>In addition to disaster preparedness, plans must should include common coordination, information tools and support services such as environmental health (water, sanitation and hygiene); management of chronic diseases (e.g. mental health); maternal, newborn and child health; communicable diseases control; nutrition; pharmaceuticals and biological and health care delivery services (e.g. health infrastructure). Other specialised services may be included for preparedness and management of specific risks.</p>
                        </div>
                    </section>

                    <!-- 16.3 National Policy for Disaster Management in Kenya -->
                    <section class="content-section" id="section-16-3">
                        <div class="section-header">
                            <div class="section-number">16.3</div>
                            <h2 class="section-title">National Policy for Disaster Management in Kenya</h2>
                        </div>
                        <div class="content-card">
                            <p>Under Policy Objectives 4 and 5, the Kenya Health Policy commits to provide and ensure free access to trauma care, critical care, emergency care and disaster care services and an adequate response to health effects of disasters and emergencies and including putting in place appropriate financing mechanisms for emergency health services. Risk reduction and emergency preparedness are the responsibility of all sectors and stakeholders at all levels of society (country, county, community). At the national level, the Ministry of Health is the lead agency of the health sector.</p>
                            <p>The National Policy For Disaster Management in Kenya (2010) has four key objectives:</p>
                            <ol class="enhanced-list">
                                <li>To establish a policy/legal and institutional framework for management of disasters, including promotion of a culture of disaster awareness and for building the capacity for disaster risk reduction, at all levels;</li>
                                <li>To ensure that institutions and activities for disaster risk management are coordinated, focused to foster participatory partnerships between the government and other stakeholders, at all levels, including international, regional, sub-regional, national and sub-national bodies;</li>
                                <li>To promote linkages between disaster risk management and sustainable development for reduction of vulnerability to hazards and disasters.</li>
                                <li>To mobilise resources, including establishment of specific funds for disaster risk reduction strategies and programmes.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 16.4 Handling Emergencies at the Health Facility Level -->
                    <section class="content-section" id="section-16-4">
                        <div class="section-header">
                            <div class="section-number">16.4</div>
                            <h2 class="section-title">Handling Emergencies at the Health Facility Level</h2>
                        </div>
                        <div class="content-card">
                            <p>An emergency occurs when a health facility does not have enough resources to cope with an abrupt demand for services. In such situations, normal procedures should be abandoned and resources increased to expand capacity. When a hospital receives an overwhelming number of emergency cases, it must plan a simplified treatment system to immediately address prevention of loss of life, complications, deformities, infection and delayed treatment.</p>
                            <p>All health facilities within the structure of national health system should have an emergency action plan that take into consideration the rank of the hospital within the system based on its size, location and disaster vulnerability.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Handling Disaster Occurring Inside the Facility</h3>
                            <p>Disasters may occur rendering the facility non-functional. Prior planning is therefore required to ensure the continuity of service during such occurrences. All facilities should have internal disaster plan for fire and other common disasters within the areas should be developed with input from the fire department.</p>
                            <p>The plan should cover such operational matters as:</p>
                            <ul class="enhanced-list">
                                <li>Allocations duties and responsibilities;</li>
                                <li>Instruction on the use of alarm and other security systems;</li>
                                <li>Instruction on fire fighting methods;</li>
                                <li>Location of fire fighting equipment;</li>
                                <li>System for notifying trained personnel;</li>
                                <li>Specification of evacuation procedures.</li>
                            </ul>
                            <p>All staff should be acquainted with the plan. Fire drills and internal emergency exercises should be carried out at least once a year to ensure staff is trained to carry out assigned duties and assess the efficacy of the plan.</p>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Bayntun, C. A (2012) ‘Health System Approach to All-hazards Disaster Management: A Systematic Review’, <em>PLOS Currents Disasters</em>, 2012 Aug 22. doi: 10.1371/50081cad5861d [online]. Available at &lt;http: everybodys_business.pdf healthsystems strategy www.who.int&gt; [Accessed 21 May 2014].</li>
                                <li>Kenya National Health Policy 2012-2030.</li>
                                <li>Ministry of State for Special Programmes (2010) <em>National Policy for Disaster Management in Kenya</em>. Nairobi: Ministry of State for Special Programmes.</li>
                                <li>The Johns Hopkins and the International Federation of Red Cross and Red Crescent Societies (2007) <em>Public Health Guide for Emergencies</em>. Geneva: International Federation of Red Cross and Red Crescent Societies.</li>
                                <li>WHO (2002) <em>Environmental Health in Emergencies and Disasters: A Practical Guide</em>. Geneva: WHO.</li>
                                <li>WHO (2007) <em>Everybody's Business</em>. Strengthening Health Systems to Improve Health Outcomes: WHO’s Framework for Action. Geneva: WHO. Also online at &lt;http: everybodys_business.pdf healthsystems strategy www.who.int&gt; [Accessed February 2014].</li>
                                <li>WHO (2007) <em>Six Year Strategy for the Health Sector and Community Capacity Development</em>. Geneva: WHO. Also online at &lt;http: emergency_preparedness_eng.pdf hac techguidance preparedness www.who.int&gt; [Accessed February 2014].</li>
                                <li>WHO Regional Office for Europe (2012) ‘Strengthening Health-system Emergency Preparedness: Toolkit for Assessing Health System Capacity for Crisis Management’ [online]. Available at &lt;www.euro.who.int 0008 157886 assets file pdf pdf_96187.pdf&gt; [Accessed February 2014].</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Disaster Management.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-16-quiz"
                         data-quiz-js="../quizzes/topic-16-quiz.js">
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
                        <a href="topic-15.html" class="nav-button nav-button--previous">
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

                        <a href="topic-17.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 17: Monitoring and Evaluation.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitoring and Evaluation | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-16.html" class="nav-button nav-button--previous">
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

                        <a href="topic-18.html" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                        <span class="progress-text">Topic 17 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📈</span>
                        <span>Module 17</span>
                    </div>
                    <h1 class="document-title">Health Services Monitoring and Evaluation</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>M&E Systems</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>35 min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Purpose -->
                    <div class="content-card content-card--accent">
                        <div class="card-header-with-icon">
                            <span class="card-icon">🎯</span>
                            <h2 class="card-title">Purpose</h2>
                        </div>
                        <p class="card-intro">To introduce students to monitoring and evaluation in health services delivery</p>
                    </div>

                    <!-- Objectives -->
                    <section class="content-section">
                        <h2 class="section-title">Objectives</h2>
                        <div class="content-card">
                            <p>By the end of this module, the student should be able to:</p>
                            <ol class="enhanced-list">
                                <li>Describe the purposes, processes, and components of project monitoring;</li>
                                <li>Describe the purposes, processes and components of project evaluation.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- Module Overview -->
                    <section class="content-section">
                        <h2 class="section-title">Module Overview</h2>
                        
                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📑</div>
                                <h4 class="feature-title">Content</h4>
                                <ul class="feature-text" style="list-style: none; padding: 0; margin: 0;">
                                    <li>17.1 Purpose of monitoring and evaluation (M&E) in a health system</li>
                                    <li>17.2 Goal and objectives of the Kenyan National M&E system</li>
                                    <li>17.3 Monitoring and evaluation framework</li>
                                    <li>17.4 M&E indicators</li>
                                    <li>17.5 Types of evaluation</li>
                                    <li>17.6 Monitoring process</li>
                                    <li>17.7 Evaluation process</li>
                                    <li>17.8 M&E conceptual framework</li>
                                    <li>17.9 Evaluation terms of reference (TOR)</li>
                                    <li>17.10 Monitoring and evaluation tools</li>
                                    <li>17.11 Work plans</li>
                                    <li>17.12 Evaluation reports</li>
                                </ul>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🧠</div>
                                <h4 class="feature-title">Methodology</h4>
                                <p class="feature-text">Lectures, discussions, case studies</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🛠️</div>
                                <h4 class="feature-title">Training Materials</h4>
                                <p class="feature-text">Lecture notes, Handouts, PowerPoint (Laptop and LCD projector), Whiteboards, flip charts, marker pens</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">⏱️</div>
                                <h4 class="feature-title">Duration</h4>
                                <p class="feature-text">6 hours</p>
                            </div>
                        </div>
                    </section>

                    <!-- Lesson Plan Guide -->
                    <section class="content-section">
                        <h2 class="section-title">Lesson Plan Guide</h2>
                        <div class="table-wrapper">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                        <th>Time (Hours)</th>
                                        <th>Content/Topic</th>
                                        <th>Lesson Objectives</th>
                                        <th>Lecturer Evaluation/Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>
                                            Monitoring and Evaluation; concepts, types, processes.<br>
                                            Monitoring and evaluation tools: terms of reference, monitoring tools, evaluation tools.
                                        </td>
                                        <td>
                                            To define monitoring and evaluation<br>
                                            To describe concepts, types and processes<br>
                                            To outline monitoring and evaluation tools, terms of reference, monitoring and evaluation tools
                                        </td>
                                        <td>Comments regarding time adequacy and student understanding and perceptions</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Health services performance Indicators and targets; concepts, definitions, performance standards, work breakdown schedules (WBS), work plans,</td>
                                        <td>
                                            To define and describe health services performance indicators, targets and concepts<br>
                                            To describe performance standards, work breakdown schedules(WBS) and work plans
                                        </td>
                                        <td>As above</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>Health reports; types, formats, characteristics of a good report</td>
                                        <td>To identify health systems reports prepared at various levels</td>
                                        <td>As above</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 17.1 Purpose of M&E -->
                    <section class="content-section" id="section-17-1">
                        <div class="section-header">
                            <div class="section-number">17.1</div>
                            <h2 class="section-title">Purpose of Monitoring and Evaluation (M&E) in a Health System</h2>
                        </div>
                        <div class="content-card">
                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Monitoring</h4>
                                        <p class="definition-text">Monitoring is a systematic process covering routine collection, analysis, and use of information about how well a project or programme is performing. It involves continuous review of the performance of all the components in the project to ensure that input deliveries, work schedules, targeted outputs, and other required actions are proceeding as per the work plans (MOMS & MPHS, 2011).</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Evaluation</h4>
                                        <p class="definition-text">Evaluation is the periodic assessment of a project or programme to determine the achievements against clearly set performance targets. The purpose of conducting an evaluation is to assess whether the project is making progress toward achieving its overall goals and objectives, and providing opportunities for mid-course corrections to project implementation, if necessary (MOMS & MPHS, 2011).</p>
                                    </div>
                                </div>
                            </div>
                            <p>Monitoring and evaluation (M&E) are fundamental components of any programme that aims at continuously improving and providing better health outputs and outcomes. Although there are differences between monitoring and evaluation, the two processes work together and lead to the same end result, which is to produce information that can be used to continuously improve the performance of a given facility, department or programme and learn about what is working and what is not working.</p>
                        </div>
                    </section>

                    <!-- 17.2 Goal and Objectives -->
                    <section class="content-section" id="section-17-2">
                        <div class="section-header">
                            <div class="section-number">17.2</div>
                            <h2 class="section-title">Goal and Objectives of the Kenyan National M&E System</h2>
                        </div>
                        <div class="content-card">
                            <p>The goal of the National M&E is to provide timely and reliable information that will enable tracking of progress and to enhance informed decision-making at all levels in the implementation of interventions under the health sector mandate in the country. The specific objectives are to:</p>
                            <ol class="enhanced-list">
                                <li>Establish a reliable M&E system at National and County level;</li>
                                <li>Strengthen the M&E capacity of MoHS and Health facilities to collect, analyse and use data for decision making and health system improvement;</li>
                                <li>Promote importance of M&E, the need for systematic data collection and use of results and lessons learned in the further planning of health interventions by the government and its partners;</li>
                                <li>Increase understanding of trends and explaining the changes in disease incidences or prevalence overtime as well as morbidity and mortality rates and ratios;</li>
                                <li>To ensure accountability, transparency and the quality of information to achieve the desired results.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 17.3 M&E Framework -->
                    <section class="content-section" id="section-17-3">
                        <div class="section-header">
                            <div class="section-number">17.3</div>
                            <h2 class="section-title">Monitoring and Evaluation Framework</h2>
                        </div>
                        <div class="content-card">
                            <p>Effective M&E is based on a clear logical pathway of results in which results at one level are expected to lead to results at the next level, leading to the achievement of the overall goal. Consequently, if there are gaps in the logic, the pathway will not lead to the required results.</p>
                            <p>Major levels for M&E framework are: Inputs, process, outputs, outcomes and impacts.</p>
                            
                            <div class="feature-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">📥</div>
                                    <h4 class="feature-title">Inputs</h4>
                                    <p class="feature-text">The pPeople equipment, materials and resources that are put into a project in order to implement the project.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">⚙️</div>
                                    <h4 class="feature-title">Processes</h4>
                                    <p class="feature-text">The activities performed/involved in delivering the project such as training, meetings, treatment and distribution among others. Processes associated with service delivery are very important and involve quality, unit costs, access and coverage.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">📤</div>
                                    <h4 class="feature-title">Outputs</h4>
                                    <p class="feature-text">The first level of results associated with the project e.g. the number of people trained or services delivered in order to achieve outcomes. These are short-term results.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">📈</div>
                                    <h4 class="feature-title">Outcomes</h4>
                                    <p class="feature-text">The second level results associated with the project-mid-term results e.g. the changes in health status, behaviour or skills. These must be related to the project goals.</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">🌍</div>
                                    <h4 class="feature-title">Impacts</h4>
                                    <p class="feature-text">The third level results with long-term consequences of a project e.g. decreased mortality and morbidity changes overtime, and usually long-term.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 17.4 M&E Indicators -->
                    <section class="content-section" id="section-17-4">
                        <div class="section-header">
                            <div class="section-number">17.4</div>
                            <h2 class="section-title">M&E Indicators</h2>
                        </div>
                        <div class="content-card">
                            <p>An indicator is defined as a set of values used to measure against; it is like a sign post that is used to measure against. Valid and measurable indicators are very crucial in an M&E system. Each of the M&E levels – inputs, outputs, outcomes, impacts – has an indicator to verify whether the desired objectives or activities are implemented, achieved or not.</p>
                            <p>A minimal set of indicators is advisable in any M&amp;E system. The following three golden rules of M&amp;E provide a good basis:</p>
                            
                            <div class="callout callout--tip">
                                <div class="callout-header">
                                    <span class="callout-icon">🌟</span>
                                    <h4 class="callout-title">Golden Rules of M&amp;E</h4>
                                </div>
                                <div class="callout-content">
                                    <ol class="enhanced-list">
                                        <li>Define indicators that can be measured;</li>
                                        <li>Collect data that is useful for decision-making or from which lessons can be learned, and;</li>
                                        <li>It is better to approximate an answer for a few important questions than to have an exact answer for many unimportant questions.</li>
                                    </ol>
                                </div>
                            </div>

                            <h4 style="margin-top: var(--space-6); margin-bottom: var(--space-4);">Table 17.1 Type and Sources of Information Required for Monitoring in the Health Sector</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Category of information</th>
                                            <th>What to Monitor & Evaluate</th>
                                            <th>What records to keep</th>
                                            <th>Who collects data</th>
                                            <th>Who uses data</th>
                                            <th>How to use information</th>
                                            <th>What decisions can be made</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Work plan activities</td>
                                            <td>Timing of activities<br>Availability of personnel, resources</td>
                                            <td>Monthly/ quarterly/ annual work plans<br>Work schedules</td>
                                            <td>Health facility<br>HOD</td>
                                            <td>Project implementation team<br>HMT, HOD</td>
                                            <td>Ensure staff and other resources are available</td>
                                            <td>Reschedule activities and deployment of resources as needed</td>
                                        </tr>
                                        <tr>
                                            <td>Costs and expenditures</td>
                                            <td>Utilisation of resources<br>Resources mobilised<br>Expenditure</td>
                                            <td>■ Project budget<br>■ Accounting records<br>■ Receipts<br>■ Cash and bank transactions<br>■ Reports MOH/ donor</td>
                                            <td>Accountant</td>
                                            <td>■ HMT<br>■ HMC<br>■ Auditor<br>■ MoH Headquarters<br>■ Donor partners</td>
                                            <td>■ Ensure funds are available to implement activities<br>■ Ensure compliance with GoK and funding regulations</td>
                                            <td>■ Authorise expenditures<br>■ Make budget and project revisions<br>■ Determine need for other funding sources</td>
                                        </tr>
                                        <tr>
                                            <td>Staff supervision</td>
                                            <td>Knowledge, attitudes and skills of and staff<br>Experience/commitment/education of and staff<br>Salaries and benefits or other forms of compensation<br>Job performance</td>
                                            <td>■ Performance reviews<br>■ Job descriptions</td>
                                            <td>■ HoD<br>■ HRM<br>■ Quality Teams</td>
                                            <td>■ HMC<br>■ HRM</td>
                                            <td>■ Staff motivation staff<br>■ staff development<br>■ Resolve work place problems</td>
                                            <td>■ Task allocation<br>■ Training needs<br>■ Recruitment<br>■ Disciplinary action<br>■ Promotion</td>
                                        </tr>
                                        <tr>
                                            <td>Management of facility assets and other physical materials</td>
                                            <td>Equipment e.g. computer, motor vehicle, stock<br>Supplies & Logistics<br>Maintenance<br>Procurement regulations</td>
                                            <td>• Assets and stock registers<br>• Assets and stock movement logs/registers<br>• Invoices<br>• Inspection/service/aud it reports</td>
                                            <td>HoD</td>
                                            <td>• HoD</td>
                                            <td>• Ensure availability of required physical resources<br>• Ensure good condition of physical resources<br>• Authorization for utilisation<br>• Minimum quantity to be kept<br>• When to order<br>• Amount to keep in reserve for emergency</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Performance results</td>
                                            <td>Outputs, outcomes, impact</td>
                                            <td>• Minutes of project review meetings<br>• Minutes of Departmental meetings<br>• Attendance registers</td>
                                            <td>• HMC<br>• Project implementation team<br>• HOD</td>
                                            <td>• HMC<br>• Project implementation team<br>• Donor agency</td>
                                            <td>• Ensure objectives are realistic<br>• Assess quality of services provided<br>• Assess appropriateness of intervention s</td>
                                            <td>• Revise objectives<br>• Retrain staff<br>• Revise project strategy and approach</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- 17.5 Types of Evaluation -->
                    <section class="content-section" id="section-17-5">
                        <div class="section-header">
                            <div class="section-number">17.5</div>
                            <h2 class="section-title">Types of Evaluation</h2>
                        </div>
                        <div class="content-card">
                            <div class="definitions-grid">
                                <div class="definition-card definition-card--first">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Baseline/formative</h4>
                                        <p class="definition-text">The evaluation is conducted before implementation of the plan to assess needs and potentials. It can also determine feasibility of the plan.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Midterm Evaluation</h4>
                                        <p class="definition-text">Conducted during the implementation period to identify areas that require change or modifications and in the process detect deficiencies and ensure immediate redesign of intervention strategies to forestall failed implementation.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Summative/End of Project Evaluation</h4>
                                        <p class="definition-text">This is conducted at the end of the project to assess outcomes achieved as an effect of project activity implementation</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Post Project Evaluation</h4>
                                        <p class="definition-text">Evaluation conducted to measure programme sustainability after its successful implementation and closure.</p>
                                    </div>
                                </div>
                                <div class="definition-card definition-card--grand">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Impact Evaluation</h4>
                                        <p class="definition-text">Evaluation to assess long term effects associated with a successful project implementation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 17.6 Monitoring Process -->
                    <section class="content-section" id="section-17-6">
                        <div class="section-header">
                            <div class="section-number">17.6</div>
                            <h2 class="section-title">Monitoring Process</h2>
                        </div>
                        <div class="content-card">
                            <p>The monitoring process will take the logical steps below depending on whether one is looking at the process from accountability perspective, manager perspective or evaluator's perspective. This involves:</p>
                            <div class="process-steps">
                                <div class="process-step">
                                    <div class="step-number">01</div>
                                    <div class="step-content">
                                        <p class="step-text">Recording data on key indicators as a result of activities carried out;</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">02</div>
                                    <div class="step-content">
                                        <p class="step-text">Analysing and processing data for consumption;</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">03</div>
                                    <div class="step-content">
                                        <p class="step-text">Storing and retrieving information for use by different stakeholders;</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">04</div>
                                    <div class="step-content">
                                        <p class="step-text">Reporting activity results based on activity timeframe;</p>
                                    </div>
                                </div>
                                <div class="process-step">
                                    <div class="step-number">05</div>
                                    <div class="step-content">
                                        <p class="step-text">Providing feedback to appropriate managers and stakeholders internally and externally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 17.7 Evaluation Process -->
                    <section class="content-section" id="section-17-7">
                        <div class="section-header">
                            <div class="section-number">17.7</div>
                            <h2 class="section-title">Evaluation Process</h2>
                        </div>
                        <div class="content-card">
                            <p>The evaluation process will entail:</p>
                            <ol class="enhanced-list">
                                <li>Designing evaluation strategy;</li>
                                <li>Participatory planning meeting;</li>
                                <li>Developing evaluation plan;</li>
                                <li>Implement evaluation plan;</li>
                                <li>Analyse evaluation results;</li>
                                <li>Participatory reflection on results;</li>
                                <li>Implementation of improvements.</li>
                            </ol>
                        </div>
                    </section>

                    <!-- 17.8 M&E Conceptual Framework -->
                    <section class="content-section" id="section-17-8">
                        <div class="section-header">
                            <div class="section-number">17.8</div>
                            <h2 class="section-title">M&E Conceptual Framework</h2>
                        </div>
                        <div class="content-card">
                            <p>The M&E conceptual framework demonstrates the theory of the sequence of cause and effect that ultimately lead to a particular ultimate result. In the health sector, the ultimate result is positive health impact on clients in any of the health areas.</p>
                            
                            <div class="content-figure" data-lightbox="true">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20260113-d697b7d1.jpeg" alt="The M&E Conceptual Framework" class="figure-image">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to zoom</span>
                                    </div>
                                </div>
                                <p class="figure-caption">Figure 17.1 The M&E Conceptual Framework</p>
                                <p class="figure-caption">Source: MSH (2013).</p>
                            </div>

                            <p>The conceptual framework demonstrates the process of monitoring and evaluation.</p>
                            <p>What you need to do at each level:</p>
                            <ul class="enhanced-list">
                                <li><strong>Input level:</strong> Monitor whether resources, staff, supplies etc. are being provided.</li>
                                <li><strong>Process level:</strong> Monitor whether activities are happening.</li>
                                <li><strong>Output level:</strong> Monitor whether required outputs are generated by activities carried out according to planned schedule.</li>
                                <li><strong>Outcome level:</strong> Evaluate whether there is gain in the expected areas.</li>
                                <li><strong>Impact level:</strong> Evaluate or conduct demographic health survey to show impact.</li>
                            </ul>
                            <p>The results at every level are used as feedback to influence the preceding level and gaining lessons learned thereby improving health provision and outcomes as well as effectiveness and efficiency.</p>
                        </div>
                    </section>

                    <!-- 17.9 Evaluation Terms of Reference (TOR) -->
                    <section class="content-section" id="section-17-9">
                        <div class="section-header">
                            <div class="section-number">17.9</div>
                            <h2 class="section-title">Evaluation Terms of Reference (TOR)</h2>
                        </div>
                        <div class="content-card">
                            <h3 class="card-title">What is TOR?</h3>
                            <p>TOR refers to the definition and structured description of the scope of work and the schedule that must be carried out by the person, company or evaluation team undertaking an evaluation.</p>

                            <h3 class="card-title">Characteristics of TORs</h3>
                            <p>The terms of reference recalls the background and specifies the scope of the evaluation, process, products, technical aspects, and states the main motives for an evaluation and the questions asked. It sums up available knowledge and outlines an evaluation methodology describing the distribution of work, schedule and the responsibilities among the people participating in an evaluation process. It also specifies the qualifications required from candidate teams or individuals as well as the criteria to be used to select an evaluation team.</p>
                            <p>TOR serves as a ‘contract’ between project/institution and evaluators, outlining key elements and should reflect strategic choices on what to focus on. The optimal type of TOR is one that satisfies the interests of all stakeholders concerned. This is not always possible. However, given the range of motivations for undertaking an evaluation, it requires the TOR to retain enough flexibility for the evaluation team to determine the best approach for collecting and analysing data.</p>

                            <h3 class="card-title">Components of TOR</h3>
                            <p>At a minimum, it is expected that ToRs for all evaluations will address the following sections.</p>
                            
                            <div class="collapsible-section">
                                <details>
                                    <summary class="collapsible-trigger">
                                        <span class="trigger-icon">📑</span>
                                        <span>Click to view Detailed Components A-L</span>
                                    </summary>
                                    <div class="collapsible-content">
                                        <h4 class="card-title">A. Title</h4>
                                        <h4 class="card-title">B. Background and context</h4>
                                        <p>Overview and historical context of project under evaluation, project justification and implementation experiences/challenges, project documents and revisions thereof, project objectives and expected outcomes.</p>
                                        
                                        <h4 class="card-title">C. Purpose of the evaluation (objectives)</h4>
                                        <p>Who commissioned the evaluation? Why at this point? What is it expected to accomplish? What decisions might evaluation guide in? Who will use the evaluation results and how do you involve them?</p>
                                        
                                        <h4 class="card-title">D. Scope of work for the evaluation</h4>
                                        <p>There is need to determine the unit of analysis to be covered -project, cluster of projects, programme, a process within a project, time period, geographical coverage.</p>
                                        
                                        <h4 class="card-title">E. Evaluation criteria and key evaluation questions</h4>
                                        <p>Identify the key evaluation questions to be answered by the evaluate on along with their related evaluation criteria-project relevance, efficiency, effectiveness, impact, and sustainability.</p>
                                        
                                        <h4 class="card-title">F. Evaluation methodology</h4>
                                        <p>The methods used to collect and analyse data on which the quality of the evaluation is dependent on i.e. desk reviews, questionnaires, surveys, structured interviews, discussions, workshops, field visits, observations, retrospective baseline construction etc., data sources, and possible references to an evaluation.</p>
                                        
                                        <h4 class="card-title">G. Expected deliverables/outputs</h4>
                                        <p>Planned field missions and expected deliverables and respective timeframes including:</p>
                                        <ul class="enhanced-list">
                                            <li>Inception report -containing a refined work plan, methodology and evaluation tools.</li>
                                            <li>Draft evaluation report in line with institution evaluation policy and guidelines.</li>
                                            <li>Final evaluation report, including annex with management response.</li>
                                            <li>Presentation of evaluation findings, lessons and recommendations to project and stakeholders.</li>
                                        </ul>
                                        
                                        <h4 class="card-title">H. Timeframe</h4>
                                        <p>Evaluation inception to presentation of results.</p>
                                        
                                        <h4 class="card-title">I. Evaluation team composition</h4>
                                        <p>Qualified independent and impartial evaluators not involved in project design or implementation, gender balanced, balance geographical representation.</p>
                                        
                                        <h4 class="card-title">J. Management of evaluation process</h4>
                                        <p>Roles and responsibilities matrix of all the evaluation stakeholders -evaluators, managers, technical unit, field staff, implementers.</p>
                                        
                                        <h4 class="card-title">K. Budget</h4>
                                        
                                        <h4 class="card-title">L. Annexes:</h4>
                                        <ul class="enhanced-list">
                                            <li>Job descriptions of evaluators.</li>
                                            <li>List of background documents for the desk review.</li>
                                            <li>List of stakeholders.</li>
                                            <li>Project/institution standard format and guidelines for evaluation reports.</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>

                    <!-- 17.10 Monitoring and Evaluation Tools -->
                    <section class="content-section" id="section-17-10">
                        <div class="section-header">
                            <div class="section-number">17.10</div>
                            <h2 class="section-title">Monitoring and Evaluation Tools</h2>
                        </div>
                        <div class="content-card">
                            <p>Basic monitoring tools are used to collect input, process and output indicators. The tools and formats should focus on results and progress towards outcomes. These include:</p>

                            <div class="definitions-grid">
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Work Plan</h4>
                                        <p class="definition-text">The work plan is a planning tool that serves as a guide for implementation of action steps (activities) to achieve the stated overall goal and particularly specific objectives of a project. It provides the framework for evaluating progress toward objectives and is the primary document used to monitor on-going progress, to adjust activities as needed and to evaluate outcomes. The work plan is a ‘living’ document and, as such, it may change over the duration of implementation to reflect a more realistic implementation process.</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Monitoring Plan</h4>
                                        <p class="definition-text">A monitoring plan is a set of requirements for monitoring and verification of objectives achieved by a project during implementation. These may be:<br>• Monthly service statistics summary registers;<br>• Financial reports;<br>• Monthly/quarterly institutional reports;<br>• Checklists;<br>• Questionnaires;<br>• Interview guides;<br>• Focus group discussion guides;<br>• Observation guides;<br>• Internet (secondary data).</p>
                                    </div>
                                </div>
                                <div class="definition-card">
                                    <div class="definition-content">
                                        <h4 class="definition-term">Evaluation tools</h4>
                                        <p class="definition-text">Evaluation tools are used for assessing effective indicators (outcome and impact indicators). They focus on assessing program outcomes and impact. These include:</p>
                                        <p class="definition-text"><strong>i. Performance monitoring plan</strong><br>A performance monitoring plan (PMP) serves as a roadmap for monitoring and evaluating programme performance throughout its lifespan. It is a detailed plan for managing indicators in order to monitor project performance, outcomes and impact. The PMP contain the performance indicators and their definition, data source, method of data collection or calculation, when data is collected, responsibility, why the data is important, who will use the data and for what purpose.</p>
                                        <p class="definition-text"><strong>ii. Evaluation plan</strong><br>An evaluation plan is a written document that states the objectives of the evaluation, questions, information to be collected and timeframe of the evaluation. The plan should constitute sections describing the key questions to be addressed related to areas of expected learning from the evaluation as a part of the evaluation framework, programme implementation objectives, outcome objectives and performance measures and procedures for managing and monitoring the evaluation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 17.11 Work Plans -->
                    <section class="content-section" id="section-17-11">
                        <div class="section-header">
                            <div class="section-number">17.11</div>
                            <h2 class="section-title">Work Plans</h2>
                        </div>
                        <div class="content-card">
                            <h3 class="card-title">Definition</h3>
                            <p>A work plan is an annual or multi-year summary of tasks, timeframes and responsibilities that is used to support the implementation and evaluation of programme implementation. It is a valuable tool with a detailed account of how employees propose to accomplish their goals during project implementation—what actions need to happen, who will do them, when they will be completed and what resources will be required. A work plan is also used as a monitoring tool to ensure that production of outputs and progress towards outcomes and impact is timely and reflects project goals.</p>
                            
                            <h3 class="card-title">Key elements of a work plan</h3>
                            <p>i. Clearly defined goals, outputs and outcomes;<br>
                            ii. Activities – tasks to achieve outputs, outcomes;<br>
                            iii. Costs (budget) – indication of the activity’s cost;<br>
                            iv. Monitoring and evaluation – ensures that measures to monitor and assess the effectiveness of an activity are included such as recording achievements, collecting data, and assessments.</p>
                            
                            <h3 class="card-title">Developing a work plan</h3>
                            <p>The overall process of work planning is a comprehensive tool that helps programme staff to translate project/programme goals into operational terms on an annual basis. Monitoring and evaluation are integral parts of a work plan and will provide a basis for tracking achievements and revising strategies on how to best achieve project goals.</p>
                            <p>Work plans set out how a project will achieve its clearly defined goals by converting project goals into smaller, manageable outcomes and tasks that will ensure that the skills, experience and resources available are used efficiently and sustainably. A work plan will also help a supervisor know what projects and activities supervisees will be working on over the next several months,</p>
                            <p>A work plan generally includes a brief introduction or overview of a project and a breakdown of how individual project-related tasks will be accomplished through activities. The detailed breakdown is usually tabulated with columns capturing specific activity descriptions, outputs/outcomes, a timeline for completion, cost projections for implementation and staff responsible (Table 17.2). It is mandatory to include monitoring and evaluation activities in the work plan.</p>

                            <h4 style="margin-bottom: var(--space-4); margin-top: var(--space-6);">Table 17.2 Work Plan Template</h4>
                            <div class="table-wrapper">
                                <table class="content-table content-table--responsive">
                                    <thead>
                                        <tr>
                                            <th>Objective</th>
                                            <th>Activity Description</th>
                                            <th>Output/ Outcomes/ Deliverables</th>
                                            <th>Responsibility</th>
                                            <th>Budget Assumptions</th>
                                            <th>Budget (Ksh)</th>
                                            <th>Progress Remarks</th>
                                            <th>Jun</th><th>Jul</th><th>Aug</th><th>Sept</th><th>Oct</th><th>Nov</th><th>Dec</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="2">1.1 Provide essential drugs for adults and elderly with common health conditions to increase their survival rate by 10%</td>
                                            <td>a) Conduct HIV/AIDS testing for adults and elderly facility clients</td>
                                            <td>10 clients receiving ART every month</td>
                                            <td>Jones Salama</td>
                                            <td>1000 units testing kits</td>
                                            <td>200,000</td>
                                            <td></td>
                                            <td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td>
                                        </tr>
                                        <tr>
                                            <td>b) Conduct outreaches quarterly</td>
                                            <td>1 outreach every quarter</td>
                                            <td>Cyril Mwema</td>
                                            <td>Transport, Tent hire, brochures</td>
                                            <td>450,000</td>
                                            <td></td>
                                            <td>x</td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Implementing Work Plans</h3>
                            <p>Implementation is the process of taking a work plan and its concepts and putting it into action. The work plan will serve as a guide for what needs to be accomplished, by whom, and in what specific timeframe. However, surprises do come up and changes in the work plan may be necessary. It is critically important that staffs involved in work plan implementation are made aware of such changes and how the changes may affect their role in the implementation process.</p>
                            <p>Throughout the implementation process, data related to the measures identified should be collected. These data will be important in the monitoring and evaluation process to determine whether or not the programme had the intended outcome.</p>

                            <h3 class="card-title" style="margin-top: var(--space-6);">Monitoring and Evaluating Work Plans</h3>
                            <p>Monitoring the work plan will be done by assessing whether activities were implemented as initially planned. This is usually done through monthly/quarterly activity implementation reviews. Enhanced process evaluation will entail an examination of whether activities are being carried out correctly, on time and within budget. Results of the evaluation should be used to enhance or review implementation.</p>
                        </div>
                    </section>

                    <!-- 17.12 Evaluation Reports -->
                    <section class="content-section" id="section-17-12">
                        <div class="section-header">
                            <div class="section-number">17.12</div>
                            <h2 class="section-title">Evaluation Reports</h2>
                        </div>
                        <div class="content-card">
                            <p>According to the Business Dictionary, a report is a document containing information organised in a narrative, graphic, or tabular form, prepared on ad hoc, periodic, recurring, regular, or on as required basis.</p>
                            <p>In programme management, a report is:</p>
                            <p>i. A compilation of descriptive information;<br>
                            ii. A communication tool to present M&E results by presenting raw data and information as knowledge;<br>
                            iii. An opportunity for project implementers to inform themselves and others (stakeholders, partners, donors, etc.) on the progress, problems, difficulties encountered, successes and lessons learned during implementation of programs and activities.</p>
                            <p>Reports may refer to specific periods, events, occurrences, or subjects, and may be communicated or presented in oral or written form. Some questions to answer before writing a report are:</p>
                            <ul class="enhanced-list">
                                <li>Have you considered the needs/characteristics of the readers? i.e. Executive, technical team, staff, donor, general public).</li>
                                <li>If it is a public health report, does it make health care performance information clear, meaningful, and usable by consumers?</li>
                            </ul>

                            <h3 class="card-title">Why report?</h3>
                            <ul class="enhanced-list">
                                <li>Reporting enables the assessment of progress and achievements and helps focus audiences on the results of activities, enabling the improvement of subsequent work plans.</li>
                                <li>Reporting helps form the basis for decision-making and learning at the programme level.</li>
                                <li>Reporting communicates how effectively and efficiently a programme is meeting its objectives.</li>
                            </ul>

                            <h3 class="card-title">Elements of a good report</h3>
                            <ul class="enhanced-list">
                                <li>Self-explanatory statement of facts relating to a specific subject(s).</li>
                                <li>Systematic and logical presentations of relevant ascertained facts, figures, conclusions and recommendations.</li>
                                <li>Time bound for timely decision making.</li>
                                <li>Concise and objective.</li>
                                <li>Appropriate grammar, language and tone for the consumers (avoid technical jargon).</li>
                                <li>Complete and compact document.</li>
                            </ul>

                            <h3 class="card-title">Monitoring and evaluation reports</h3>
                            <h4 class="card-title">Types of reports</h4>
                            <ul class="enhanced-list">
                                <li>Progress report - usually quarterly, semi-annual or annual.</li>
                                <li>Evaluation report - mid-term, end-term evaluation.</li>
                                <li>End of project report.</li>
                            </ul>

                            <h4 class="card-title">Guidelines for writing M&E reports</h4>
                            <ul class="enhanced-list">
                                <li>Provide a 1 page brief summary (executive summary) and ensure it accurately captures the content and recommendations in the report.</li>
                                <li>Be as concise as possible given the information that needs to be conveyed.</li>
                                <li>Focus on relevant results being achieved compared with the expected results as defined in the log frame/performance monitoring plan and check that the expected results are realistic.</li>
                                <li>Specify actions to overcome problems and accelerate performance where necessary. (The basis of this narrative is what you had planned and how you are responding. For example, why something that was planned did not take place and what you plan to do about it).</li>
                                <li>If findings are included in the report, make sure they are objectively verifiable.</li>
                                <li>Be clear on your audience (directors, government, donor, technical persons, staff) and ensure that the information is meaningful and useful to the intended reader.</li>
                                <li>Ensure timely submission of progress reports</li>
                                <li>Be consistent in your use of terminology, definitions and define any technical terms or acronyms.</li>
                                <li>Present data with the help of figures, summary tables, maps, photographs, and graphs.</li>
                                <li>Include references for sources and authorities (if any) and a table of contents.</li>
                            </ul>

                            <h3 class="card-title">Progress report format</h3>
                            
                            <h4 class="card-title">Cover page</h4>
                            <ul class="enhanced-list">
                                <li>Name of institution;</li>
                                <li>Reporting period;</li>
                                <li>Name of person responsible for reporting/contact person;</li>
                                <li>Table of contents;</li>
                                <li>Acronyms;</li>
                                <li>Executive summary;</li>
                                <li>This section should have one introductory paragraph and major highlights of findings and key lessons learned (1 to 2 pages);</li>
                                <li>Report body.</li>
                            </ul>
                            <p>This section should consist of a table of the hierarchical objectives with a short paragraph describing significant outcome results, why your targets were met/not met and what steps to take, lessons learned (if any) and highlights of activities for the next period. Tables, maps, photographs, and graphs may be used where appropriate to enhance clarity and results interpretation.</p>
                            
                            <h4 style="margin-bottom: var(--space-4); margin-top: var(--space-6);">Figure 17.2 Sample Project Achievements Table</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Objective</th>
                                            <th>Output / Outcome /Deliverable</th>
                                            <th>Planned</th>
                                            <th>Achieved</th>
                                            <th>Remarks on achievement</th>
                                            <th>Next period activities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p><strong>Indicator achievement (include when these are achieved)</strong></p>
                            <ul class="enhanced-list">
                                <li>Achievements on outcome indicators;</li>
                                <li>Achievements on milestones;</li>
                                <li>Achievements on impact indicators.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- References -->
                    <section class="content-section">
                        <h2 class="section-title">References and Recommended Further Reading</h2>
                        <div class="content-card">
                            <ul class="enhanced-list">
                                <li>Gitonga, B. A. (2010) Project Management Simplified: A Community Development Approach. Nairobi: Project Support Consultants.</li>
                                <li>Management Sciences for Health (2013) Using Evaluation as a Management Tool. The Family Planning Manager e-handbook. Cambridge, MA: Management Sciences for Health.</li>
                                <li>Ministry of Medical Services, and Ministry of Public Health and Sanitation (2012) Health Systems Management – A Training Course for Health Managers. Nairobi: Government Printers.</li>
                                <li>Ministry of Medical Services, and Ministry of Public Health and Sanitation (2011) National Monitoring and Evaluation (M&E) Guidelines and Standard Operating Procedures. Nairobi: Government Printers</li>
                            </ul>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension of Monitoring and Evaluation.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-17-quiz"
                         data-quiz-js="../quizzes/topic-17-quiz.js">
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
                        <a href="topic-16.html" class="nav-button nav-button--previous">
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

                        <a href="topic-18.html" class="nav-button nav-button--next">
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the verbatim conversion for Topic 18: Appendices.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appendices | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
                        <a href="topic-17.html" class="nav-button nav-button--previous">
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

                        <a href="../index.html" class="nav-button nav-button--next">
                            <span class="nav-text">Index</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                        <span class="progress-text">Topic 18 of 17</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>📂</span>
                        <span>Module 18</span>
                    </div>
                    <h1 class="document-title">Appendices</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>Reference Forms & Tables</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>Reference</span>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Appendix 1 -->
                    <section class="content-section" id="appendix-1">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 1 – Form S11 – Counter Requisition and Issue Voucher</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="7">COUNTER REQUISITION AND ISSUE VOUCHER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="7">Ministry _______________ Dept/Branch _______________ Unit _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">To (issue point) _______________ Please issue the items listed below (point of use) _______________</td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>Code No.</td>
                                            <td>Item description</td>
                                            <td>Unit of issue</td>
                                            <td>Quantity Required</td>
                                            <td>Quantity Issued</td>
                                            <td>Value</td>
                                            <td>Remaining</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Account No. _______________</td>
                                            <td colspan="3">Date _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Requisitioning Officer _______________ Designation _______________ Signature _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Issued by _______________ Signature _______________ Date _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Received by _______________ Designation _______________ Signature _______________</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 2 -->
                    <section class="content-section" id="appendix-2">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 2 – Form S12 – Issue and Receipt Voucher</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table content-table--compact">
                                    <thead>
                                        <tr>
                                            <th colspan="14">ISSUE AND RECEIPT VOUCHER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ministry</td><td></td><td></td><td>Issue Approved by</td><td></td><td></td><td>Min/Dept</td><td></td><td></td><td></td><td>Indent approved by</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Issuing unit</td><td></td><td></td><td>Date</td><td></td><td></td><td>Indenting unit</td><td></td><td></td><td></td><td>Date</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Address</td><td></td><td></td><td>Stores packed by</td><td></td><td></td><td>Address</td><td></td><td></td><td></td><td>Address</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Issuing officer</td><td></td><td></td><td>Mode of dispatch</td><td></td><td></td><td>Receiving Officer</td><td></td><td></td><td></td><td>Receipt recorded by</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Designation and stamp</td><td></td><td></td><td></td><td></td><td></td><td>Designation & Stamp</td><td></td><td></td><td></td><td>Charged to</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Merchant</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Vote/Head</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>Address</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>S/Head/Item No</td><td></td><td></td><td></td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>a) Item</td><td>b) Cat. No</td><td>c) Location</td><td>d) Description of stores</td><td>e) Unit</td><td>f) Qty rqd/ordered</td><td>h) Qty issued/rcd</td><td>i) Qty to follow</td><td>j) Rate (Kshs)</td><td>(Cents)</td><td>k) Total value</td><td>l) Stock balance</td><td>m) Ledger folio no</td><td>Remarks</td>
                                        </tr>
                                        <!-- Rows 1-10 -->
                                        <tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>9</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>10</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr>
                                            <td colspan="14">Certified that the above items have been received/recorded on ledger/inventory</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Signature of the issuing officer and date</td>
                                            <td colspan="7">Signature of the receiving officer and date</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 3 -->
                    <section class="content-section" id="appendix-3">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 3 – S13 Form – Counter Receipt Book</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="7">COUNTER RECEIPT BOOK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="7">Ministry/Dept/Branch</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Received the items listed below from (source)</td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>Code</td>
                                            <td>Item description</td>
                                            <td>Unit</td>
                                            <td>Quantity</td>
                                            <td>Value</td>
                                            <td>Remarks</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Order No_________Invoice No_________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Issuing Officer_________Signature_________Designation</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">Certified that the quantities received have been taken on charge.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 4 -->
                    <section class="content-section" id="appendix-4">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 4 – S20 – Local Purchase Order</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="10" style="text-align: center;">LOCAL PURCHASE ORDER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="10" style="text-align: center; font-weight: bold; color: var(--color-danger);">Suppliers are warned that this order is INVALID unless available funds is confirmed herebelow by the Accountant</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">To</td>
                                            <td colspan="7">Quotation Reference No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td colspan="7">Contract Ref No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td colspan="7">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td colspan="7">Requisition No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td colspan="7">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="10">Please deliver the goods listed here below to (full address)</td>
                                        </tr>
                                        <tr>
                                            <td colspan="10">On terms and conditions stated at the back of the order, on or before and send the invoices immediately to Department/Ministry<br>P.O.Box</td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>Item No</td>
                                            <td colspan="3">Description of goods</td>
                                            <td>Quantity</td>
                                            <td colspan="2">Unit Cost (Shs / Cts)</td>
                                            <td colspan="2">Total Cost (Shs / Cts)</td>
                                            <td></td>
                                        </tr>
                                        <!-- Blank rows for items -->
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="3"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 5 -->
                    <section class="content-section" id="appendix-5">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 5 – S21 - Local Service Order</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="8" style="text-align: center;">LOCAL SERVICE ORDER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="8" style="text-align: center; font-weight: bold; color: var(--color-danger);">Supplier are warned that this order is INVALID unless available funds is confirmed here below by the Accountant</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">To</td>
                                            <td colspan="6">Tender/Quotation Ref No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="6">Contract Reference No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="6">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="6">Requisition No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="6">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="8">on terms and conditions stated on the back of this order, on or before and send invoices immediately to Department/Ministry P.O.Box</td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>Item No</td>
                                            <td colspan="5">Description of Service</td>
                                            <td colspan="2">Cost (shs / cts)</td>
                                        </tr>
                                        <!-- Blank rows -->
                                        <tr><td></td><td colspan="5"></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="5"></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="5"></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="5"></td><td></td><td></td></tr>
                                        <tr><td></td><td colspan="5"></td><td></td><td></td></tr>
                                        <tr>
                                            <td colspan="6" style="text-align: right; font-weight: bold;">Total Shs</td>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Signature Vote</td>
                                            <td colspan="4">Head</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Designation</td>
                                            <td colspan="4">Sub-Head</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Station</td>
                                            <td colspan="4">Account No</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Date</td>
                                            <td colspan="4"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="8">I confirm that funds are available and that commitment has been noted on the vote book.</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Signature Accountant</td>
                                            <td colspan="4">Supplier</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Date</td>
                                            <td colspan="4">I acknowledge receipt of this order</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4"></td>
                                            <td colspan="4">Date</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 6 -->
                    <section class="content-section" id="appendix-6">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 6 – The Vote Book</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="4">Appropriation Account for the year ended 31 December 2011</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="4">Vote R/D - Ministry/Department XYZ</td>
                                        </tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold;">
                                            <td>Sub-Vote X</td>
                                            <td>Approved Estimate</td>
                                            <td>Actual Expenditure</td>
                                            <td>Variations</td>
                                        </tr>
                                        <tr>
                                            <td>000- Personal Emoluments</td>
                                            <td>360,000.00</td>
                                            <td>352,000.00</td>
                                            <td>8,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>040 - Gratuity and pension payments</td>
                                            <td>200,000.00</td>
                                            <td>185,000.00</td>
                                            <td>15,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>110- Travel and accommodation expenses</td>
                                            <td>50,000.00</td>
                                            <td>48,000.00</td>
                                            <td>2,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>121 - Telephone expenses</td>
                                            <td>60,000.00</td>
                                            <td>62,000.00</td>
                                            <td>(2,000.00)</td>
                                        </tr>
                                        <tr>
                                            <td>180 - Hiring, Rent and rates</td>
                                            <td>45,000.00</td>
                                            <td>46,000.00</td>
                                            <td>(1,000.00)</td>
                                        </tr>
                                        <tr>
                                            <td>191 - Training Expenses</td>
                                            <td>10,000.00</td>
                                            <td>10,000.00</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>200- Replacement of Motor Vehicle</td>
                                            <td>6,000.00</td>
                                            <td>6,500.00</td>
                                            <td>(500.00)</td>
                                        </tr>
                                        <tr>
                                            <td>250 - Grants in Aid</td>
                                            <td>50,000.00</td>
                                            <td>52,000.00</td>
                                            <td>(2,000.00)</td>
                                        </tr>
                                        <tr style="font-weight: bold;">
                                            <td>Gross Expenditure</td>
                                            <td>781,000.00</td>
                                            <td>761,500.00</td>
                                            <td>19,500.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 7 -->
                    <section class="content-section" id="appendix-7">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 7 – Imprest Request Form</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="4" style="text-align: center;">Imprest request form</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PF No</td>
                                            <td></td>
                                            <td>Date</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td></td>
                                            <td>Designation JG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Department</td>
                                            <td></td>
                                            <td>Room Extn</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">I, the above mentioned wish to apply for an imprest of Kshs _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">in words, Kenya shillings _____________________________________________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">for the following purpose(s) ___________________________________________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">I note that the imprest is not a loan and must be surrendered within 48 hours after the expiry of the journey or intended purpose, failure to which disciplinary measures should be taken against me as per Government Financial Regulations and Procedures.</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">I undertake to surrender the imprest in full on or before _______________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">I understand that I will be liable to the penalties as per the Government Regulations and Procedures if I will not have surrendered the imprest as stated in full as stated above.</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Applicants signature</td>
                                            <td colspan="2"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">PS/Head of Department</td>
                                            <td colspan="2">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">CFO</td>
                                            <td colspan="2">Date</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Imprest Status</td>
                                            <td colspan="2"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">PAC process/do not process</td>
                                            <td colspan="2"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 8 -->
                    <section class="content-section" id="appendix-8">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 8 – Surrender of Imprest</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="4" style="text-align: center;">Surrender of imprest</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PF No</td>
                                            <td></td>
                                            <td>Date</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Name Designation JG</td>
                                            <td colspan="3"></td>
                                        </tr>
                                        <tr>
                                            <td>Department Room Extn</td>
                                            <td colspan="3"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">I, the above mentioned wish to surrender the imprest of kshs _______________ In words ______________________________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">That was issued to me for the following purpose(s) ______________________________</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">Attached herewith please find attached the copy of the work ticket, air or bus ticket, copy of the passport, clearance letter and a copy of the imprest application letter</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Applicants signature</td>
                                            <td colspan="2"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 9 -->
                    <section class="content-section" id="appendix-9">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 9 – Sample Payroll</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">XYZ Company Limited - Payroll for the month of December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table content-table--compact">
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>GROSS PAY</th>
                                            <th>ALLOWANCES</th>
                                            <th>TOTAL GROSS PAY</th>
                                            <th>PAYE</th>
                                            <th>NSSF</th>
                                            <th>NHIF</th>
                                            <th>PENSION</th>
                                            <th>SACCO</th>
                                            <th>INSURANCE</th>
                                            <th>Total DEDUCTIONS</th>
                                            <th>NET PAY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Employee 1</td>
                                            <td>150,000.00</td>
                                            <td>20,000.00</td>
                                            <td>170,000.00</td>
                                            <td>38,339.00</td>
                                            <td>200.00</td>
                                            <td>320.00</td>
                                            <td>4,000.00</td>
                                            <td>3,000.00</td>
                                            <td>2,000.00</td>
                                            <td>47,859.00</td>
                                            <td>122,141.00</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 2</td>
                                            <td>100,000.00</td>
                                            <td>15,000.00</td>
                                            <td>115,000.00</td>
                                            <td>25,935.21</td>
                                            <td>200.00</td>
                                            <td>320.00</td>
                                            <td>3,500.00</td>
                                            <td>2,000.00</td>
                                            <td>2,000.00</td>
                                            <td>33,955.21</td>
                                            <td>81,044.79</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 3</td>
                                            <td>70,000.00</td>
                                            <td>10,000.00</td>
                                            <td>80,000.00</td>
                                            <td>18,041.88</td>
                                            <td>200.00</td>
                                            <td>320.00</td>
                                            <td>3,000.00</td>
                                            <td>1,000.00</td>
                                            <td>2,000.00</td>
                                            <td>24,561.88</td>
                                            <td>55,438.12</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 4</td>
                                            <td>50,000.00</td>
                                            <td>7,500.00</td>
                                            <td>57,500.00</td>
                                            <td>12,967.60</td>
                                            <td>200.00</td>
                                            <td>320.00</td>
                                            <td>2,500.00</td>
                                            <td>500.00</td>
                                            <td>1,000.00</td>
                                            <td>17,487.60</td>
                                            <td>40,012.40</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 5</td>
                                            <td>30,000.00</td>
                                            <td>5,000.00</td>
                                            <td>35,000.00</td>
                                            <td>7,893.32</td>
                                            <td>200.00</td>
                                            <td>320.00</td>
                                            <td>2,000.00</td>
                                            <td>500.00</td>
                                            <td>1,000.00</td>
                                            <td>11,913.32</td>
                                            <td>23,086.68</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 6</td>
                                            <td>13,000.00</td>
                                            <td>4,500.00</td>
                                            <td>17,500.00</td>
                                            <td>3,946.66</td>
                                            <td>200.00</td>
                                            <td>280.00</td>
                                            <td>1,500.00</td>
                                            <td>500.00</td>
                                            <td>1,000.00</td>
                                            <td>7,426.66</td>
                                            <td>10,073.34</td>
                                        </tr>
                                        <tr>
                                            <td>Employee 7</td>
                                            <td>7,000.00</td>
                                            <td>1,500.00</td>
                                            <td>8,500.00</td>
                                            <td>-</td>
                                            <td>200.00</td>
                                            <td>160.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>1,860.00</td>
                                            <td>6,640.00</td>
                                        </tr>
                                        <tr style="font-weight: bold;">
                                            <td></td>
                                            <td>420,000.00</td>
                                            <td>63,500.00</td>
                                            <td>483,500.00</td>
                                            <td>107,123.68</td>
                                            <td>1,400.00</td>
                                            <td>2,040.00</td>
                                            <td>17,000.00</td>
                                            <td>8,000.00</td>
                                            <td>9,500.00</td>
                                            <td>145,063.68</td>
                                            <td>338,436.32</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 10 -->
                    <section class="content-section" id="appendix-10">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 10 – Sample Payslip</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <tbody>
                                        <tr><td>Name: Employee 1</td><td></td><td></td></tr>
                                        <tr><td>Title: Medical Officer</td><td></td><td></td></tr>
                                        <tr><td><strong>Gross pay</strong></td><td></td><td></td></tr>
                                        <tr><td>Basic Pay</td><td></td><td>30,000.00</td></tr>
                                        <tr><td>Allowances</td><td></td><td>5,000.00</td></tr>
                                        <tr><td><strong>Total Gross pay</strong></td><td></td><td><strong>35,000.00</strong></td></tr>
                                        <tr><td colspan="3">&nbsp;</td></tr>
                                        <tr><td><strong>Chargeable Pay</strong></td><td></td><td></td></tr>
                                        <tr><td>Less: Pension-NSSF</td><td></td><td>200.00</td></tr>
                                        <tr><td>Less: insurance relief</td><td></td><td>150.00</td></tr>
                                        <tr><td><strong>Chargeable Pay</strong></td><td></td><td><strong>34,850.00</strong></td></tr>
                                        <tr><td colspan="3">&nbsp;</td></tr>
                                        <tr><td><strong>TAX TABLES APPLICATION:</strong></td><td></td><td></td></tr>
                                        <tr><td>Ranges</td><td>Rate</td><td></td></tr>
                                        <tr><td>1 - 10164</td><td>10%</td><td>1,016.40</td></tr>
                                        <tr><td>10165 - 19740</td><td>15%</td><td>1,436.40</td></tr>
                                        <tr><td>19741 - 29316</td><td>20%</td><td>1,915.20</td></tr>
                                        <tr><td>29317 - 34,850</td><td>25%</td><td>1,383.25</td></tr>
                                        <tr><td><strong>Gross P.A.Y.E.</strong></td><td>→</td><td><strong>5,751.00</strong></td></tr>
                                        <tr><td>(-) Personal Relief</td><td>→</td><td>(1,162.00)</td></tr>
                                        <tr><td></td><td><strong>Net Tax Payable</strong></td><td><strong>4,589.00</strong></td></tr>
                                        <tr><td colspan="3">&nbsp;</td></tr>
                                        <tr><td><strong>DEDUCTIONS</strong></td><td></td><td></td></tr>
                                        <tr><td>PAYE</td><td></td><td>4,589.00</td></tr>
                                        <tr><td>NSSF</td><td></td><td>200.00</td></tr>
                                        <tr><td>NHIF</td><td></td><td>320.00</td></tr>
                                        <tr><td>Sacco deductions</td><td></td><td>500.00</td></tr>
                                        <tr><td>Insurance</td><td></td><td>500.00</td></tr>
                                        <tr><td>Pension contribution</td><td></td><td>500.00</td></tr>
                                        <tr><td><strong>TOTAL DEDUCTIONS</strong></td><td></td><td><strong>6,609.00</strong></td></tr>
                                        <tr style="background-color: var(--color-bg-tertiary); font-weight: bold; font-size: 1.1em;"><td>NET PAY</td><td></td><td>28,391.00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 11 -->
                    <section class="content-section" id="appendix-11">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 11 – Sample Muster Roll</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">XYZ Company Limited - Muster roll for the month of December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>WAGE</th>
                                            <th>PAYE</th>
                                            <th>NSSF</th>
                                            <th>NHIF</th>
                                            <th>Total DEDUCTIONS</th>
                                            <th>NET WAGE</th>
                                            <th>SIGNATURE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Casual worker 1</td><td>15,000.00</td><td>550.00</td><td>200.00</td><td>320.00</td><td>1,070.00</td><td>13,930.00</td><td></td></tr>
                                        <tr><td>Casual worker 2</td><td>10,000.00</td><td>-</td><td>200.00</td><td>220.00</td><td>420.00</td><td>9,580.00</td><td></td></tr>
                                        <tr><td>Casual worker 3</td><td>8,000.00</td><td>-</td><td>200.00</td><td>180.00</td><td>380.00</td><td>7,620.00</td><td></td></tr>
                                        <tr><td>Casual worker 4</td><td>7,000.00</td><td>-</td><td>200.00</td><td>160.00</td><td>360.00</td><td>6,640.00</td><td></td></tr>
                                        <tr><td>Casual worker 5</td><td>5,000.00</td><td>-</td><td>200.00</td><td>120.00</td><td>320.00</td><td>4,680.00</td><td></td></tr>
                                        <tr><td>Casual worker 6</td><td>4,000.00</td><td>-</td><td>200.00</td><td>100.00</td><td>300.00</td><td>3,700.00</td><td></td></tr>
                                        <tr style="font-weight: bold;"><td>Total</td><td>49,000.00</td><td>550.00</td><td>1,200.00</td><td>1,100.00</td><td>2,850.00</td><td>46,150.00</td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 12 -->
                    <section class="content-section" id="appendix-12">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 12 – Sample Cash and Bank Book</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table content-table--compact">
                                    <thead>
                                        <tr>
                                            <th colspan="7">Sample Cash and Bank book - Period Ended 31 December 2011</th>
                                            <th colspan="5">Programme Costs</th>
                                            <th colspan="4">Operational Costs</th>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <th>Payee</th>
                                            <th>Description</th>
                                            <th>Payment Voucher Number</th>
                                            <th>Cheque Number</th>
                                            <th>Total Receipts</th>
                                            <th>Total Payments</th>
                                            <th>Budget Line 1</th>
                                            <th>Budget Line 2</th>
                                            <th>Budget Line 3</th>
                                            <th>Budget Line 4</th>
                                            <th>Budget Line 5</th>
                                            <th>Personnel Costs</th>
                                            <th>Admin Costs</th>
                                            <th>Petty Cash</th>
                                            <th>Imprest</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td></td><td></td><td>Opening Balance</td><td></td><td></td><td>-</td><td>-</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <!-- Placeholder rows -->
                                        <tr><td></td><td></td><td></td><td></td><td></td><td>-</td><td>-</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td></td><td></td><td></td><td></td><td>-</td><td>-</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 13 -->
                    <section class="content-section" id="appendix-13">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 13 – Summary Expenditure Report</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">Sample summary Expenditure report as at 31 December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Expenditure</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Salaries</td><td>500,000.00</td></tr>
                                        <tr><td>Administrative costs</td><td>200,000.00</td></tr>
                                        <tr><td>Programme costs</td><td>700,000.00</td></tr>
                                        <tr><td>Monitoring and Evaluation</td><td>150,000.00</td></tr>
                                        <tr><td>Audit</td><td>100,000.00</td></tr>
                                        <tr style="font-weight: bold;"><td>Total</td><td>1,650,000.00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 14 -->
                    <section class="content-section" id="appendix-14">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 14 – Bank Reconciliation Statement</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="3">Sample Bank Reconciliation - Period ended 31 December 2011</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Name of Account</td><td>Bank Account No</td><td></td></tr>
                                        <tr><td></td><td>Date</td><td></td></tr>
                                        <tr><td></td><td></td><td>Kshs</td></tr>
                                        <tr><td><strong>Balance as Per Bank Statement</strong></td><td></td><td></td></tr>
                                        <tr><td>Add:</td><td></td><td></td></tr>
                                        <tr><td>Deposits made but not shown on statement</td><td></td><td></td></tr>
                                        <tr><td><strong>Total</strong></td><td></td><td></td></tr>
                                        <tr><td>Less:</td><td></td><td></td></tr>
                                        <tr><td>Outstanding cheques</td><td></td><td></td></tr>
                                        <tr><td><strong>Balance as Per Cash Book</strong></td><td></td><td></td></tr>
                                        <tr><td>Add:</td><td></td><td></td></tr>
                                        <tr><td>Deposits made but not shown in cash book</td><td></td><td></td></tr>
                                        <tr><td><strong>Total</strong></td><td></td><td></td></tr>
                                        <tr><td>Less:</td><td></td><td></td></tr>
                                        <tr><td>Bank Charges</td><td></td><td></td></tr>
                                        <tr><td><strong>Adjusted Cash Book Balance</strong></td><td></td><td></td></tr>
                                        <tr><td colspan="3">&nbsp;</td></tr>
                                        <tr><td></td><td>Signature</td><td>Date</td></tr>
                                        <tr><td>Prepared By:</td><td>Accounts Clerk</td><td></td></tr>
                                        <tr><td>Reviewed By:</td><td>Accountant</td><td></td></tr>
                                        <tr><td>Approved By:</td><td>Director</td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 15 -->
                    <section class="content-section" id="appendix-15">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 15 – Sample Ledger</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">XYZ Company Limited - Sample Ledger Statement</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Payee</th>
                                            <th>Category</th>
                                            <th>Billed Date</th>
                                            <th>Due Date</th>
                                            <th>Paid Date</th>
                                            <th>Amount Paid</th>
                                            <th>Posted Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Dial a Cab</td><td>Travel</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Uchumi Supermarket</td><td>Utilities</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Safari Park Hotel</td><td>Workshop</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Dawa Pharmaceuticals</td><td>Medical equipment</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Uchumi Supermarket</td><td>Stationery</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Univeristy of Nairobi</td><td>Staff training</td><td></td><td></td><td></td><td></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 16 -->
                    <section class="content-section" id="appendix-16">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 16 – Sample Trial Balance</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">Detailes of Expenditure from the Trial Balance as at 31 December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Details</th>
                                            <th>Estimates</th>
                                            <th>Actual</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>000</td><td>Personal Emoluments</td><td>360,000.00</td><td>350,000.00</td></tr>
                                        <tr><td>040</td><td>Graftivity and personal contributions</td><td>20,000.00</td><td>18,000.00</td></tr>
                                        <tr><td>050</td><td>Other Personal Allowances</td><td>88,000.00</td><td>81,000.00</td></tr>
                                        <tr><td>140</td><td>Telephone expenses</td><td>14,000.00</td><td>10,000.00</td></tr>
                                        <tr><td>180</td><td>Hiring rent and rates</td><td>38,000.00</td><td>32,000.00</td></tr>
                                        <tr><td>191</td><td>Training expenses</td><td>17,000.00</td><td>16,000.00</td></tr>
                                        <tr><td>300</td><td>Grants in Aid</td><td>3,000.00</td><td>2,500.00</td></tr>
                                        <tr style="font-weight: bold;"><td></td><td>Gross Expenditure</td><td>540,000.00</td><td>509,500.00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 17 -->
                    <section class="content-section" id="appendix-17">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 17 – Appropriation Accounts</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="4" style="text-align: center;">Revenue return - Appropriation In Aid (AIA)</th>
                                        </tr>
                                        <tr>
                                            <th>Account No</th>
                                            <th>Details</th>
                                            <th>Cumulative Total (KSH)</th>
                                            <th>Collection this month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- Blank rows -->
                                        <tr><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td></td><td></td><td></td></tr>
                                        <tr><td></td><td></td><td></td><td></td></tr>
                                        <tr>
                                            <td colspan="4">
                                                Copy to: ________________________<br><br>
                                                Signature: ________________________ (District Accountant)<br><br>
                                                Date: ________________________
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 18 -->
                    <section class="content-section" id="appendix-18">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 18 – Sample Cash Flow Forecast</h2>
                        </div>
                        <div class="content-card">
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Sample Cash Flow Statement - For the period ended 31 December 2011</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>Cash Flow from Project Activities</strong></td><td><strong>Kshs</strong></td></tr>
                                        <tr><td>Net surplus/deficit</td><td></td></tr>
                                        <tr><td>Adjustments for: Depreciation</td><td></td></tr>
                                        <tr><td>Net cash flow before working capital changes</td><td></td></tr>
                                        <tr><td>Increase in trade and other receivable</td><td></td></tr>
                                        <tr><td>Decrease in trade payables</td><td></td></tr>
                                        <tr><td>Cash generated from operations</td><td></td></tr>
                                        <tr><td>Interest paid</td><td></td></tr>
                                        <tr><td><strong>Net cash from project activities</strong></td><td></td></tr>
                                        <tr><td><strong>Cash Flow from Investing activities</strong></td><td></td></tr>
                                        <tr><td>Purchase of property plant and equipment</td><td></td></tr>
                                        <tr><td>Proceeds from sale of equipment</td><td></td></tr>
                                        <tr><td><strong>Net cash flow from investing activities</strong></td><td></td></tr>
                                        <tr><td><strong>Cash flow from financing activities</strong></td><td></td></tr>
                                        <tr><td>cash received from donors not used for projects</td><td></td></tr>
                                        <tr><td><strong>Net cash flow from financing activities</strong></td><td></td></tr>
                                        <tr><td>Net increase in cash and cash equivalents</td><td></td></tr>
                                        <tr><td>Cash and cash equivalents, beginning of the period</td><td></td></tr>
                                        <tr><td>Cash and cash equivalents, end of the period</td><td></td></tr>
                                        <tr><td><strong>Net cash and cash equivalents</strong></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 19 -->
                    <section class="content-section" id="appendix-19">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 19 – Sample Fund Account Statement</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">Sample Fund Accountability Statement - Period Ended 31 December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Budget (A)</th>
                                            <th>Actual Previous Period (B)</th>
                                            <th>Actual This Period (C)</th>
                                            <th>Actual Cumulative (D=B+C)</th>
                                            <th>Budget Balance (E=A-D)</th>
                                            <th>Budget Spent (F=D/A %)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>Income</strong></td><td>Shs</td><td>Shs</td><td>Shs</td><td>Shs</td><td>Shs</td><td></td></tr>
                                        <tr><td>Grants</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Interest</td><td>-</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Total Income</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Expenditure</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Programme</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Sub-total</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Operating costs</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Personnel Costs</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Sub-total</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Administrative Costs</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Administrative</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Sub-total</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Sub-total</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Total Expenditure</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Surplus/(Deficit)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Balance Brought Forward</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Balance Carried Forward</strong></td><td>-</td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Represented By</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Petty Cash</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Cash In Bank</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td>Imprest</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Total</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr>
                                            <td colspan="7">
                                                Prepared By: ________________________ (Accounts Clerk) Date: _________<br>
                                                Reviewed By: ________________________ (Accountant)<br>
                                                Approved By: ________________________ (Director)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 20 -->
                    <section class="content-section" id="appendix-20">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 20 – Sample Income and Expenditure Statement</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">Sample Income and Expenditure Statement As at xxxx</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Details</th>
                                            <th>Current Period (KShs)</th>
                                            <th>Previous Periods (KShs)</th>
                                            <th>Cumulative Balance (KShs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>Income</strong></td><td></td><td></td><td></td></tr>
                                        <tr><td>DANIDA</td><td></td><td></td><td></td></tr>
                                        <tr><td>USAID</td><td></td><td>-</td><td>-</td></tr>
                                        <tr><td>CIDA</td><td></td><td></td><td></td></tr>
                                        <tr><td>Sub-Total</td><td>-</td><td>-</td><td>-</td></tr>
                                        <tr><td>Bank Interest</td><td></td><td></td><td>-</td></tr>
                                        <tr><td><strong>Total Income</strong></td><td>-</td><td>-</td><td>-</td></tr>
                                        <tr><td><strong>Expenditure</strong></td><td></td><td></td><td></td></tr>
                                        <tr><td>Administration costs</td><td></td><td></td><td>-</td></tr>
                                        <tr><td>Materials Development</td><td></td><td></td><td></td></tr>
                                        <tr><td>Workshop costs</td><td></td><td></td><td></td></tr>
                                        <tr><td>Monitoring, Evaluation & Audit</td><td></td><td></td><td>-</td></tr>
                                        <tr><td><strong>Total Expenditure</strong></td><td>-</td><td>-</td><td>-</td></tr>
                                        <tr><td><strong>Surplus/(Deficit)</strong></td><td>-</td><td>-</td><td>-</td></tr>
                                        <tr>
                                            <td colspan="4">
                                                Prepared By: ________________________<br>
                                                Reviewed By: ________________________<br>
                                                Approved By: ________________________
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Appendix 21 -->
                    <section class="content-section" id="appendix-21">
                        <div class="section-header">
                            <h2 class="section-title">Appendix 21 – Sample Balance Sheet</h2>
                        </div>
                        <div class="content-card">
                            <h4 style="margin-bottom: var(--space-4);">XYZ Limited - Sample Balance Sheet As at 31 December 2011</h4>
                            <div class="table-wrapper">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Prior Financial Years (Kshs)</th>
                                            <th>Current Year (Kshs)</th>
                                            <th>Total (Kshs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>ASSETS</strong></td><td></td><td></td><td></td></tr>
                                        <tr><td>Non current assets</td><td></td><td></td><td></td></tr>
                                        <tr><td>Exchequer Account</td><td></td><td></td><td></td></tr>
                                        <tr><td>Advance Accounts</td><td></td><td></td><td></td></tr>
                                        <tr><td>Suspense Accounts</td><td></td><td></td><td></td></tr>
                                        <tr><td>Imprests</td><td></td><td></td><td></td></tr>
                                        <tr><td>Special Fund Investments</td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>TOTAL</strong></td><td>-</td><td></td><td></td></tr>
                                        <tr><td><strong>Liabilities</strong></td><td></td><td></td><td></td></tr>
                                        <tr><td>General Account Vote</td><td></td><td></td><td></td></tr>
                                        <tr><td>Excess AIA</td><td></td><td></td><td></td></tr>
                                        <tr><td>Special Funds</td><td></td><td></td><td></td></tr>
                                        <tr><td>Development revenue</td><td></td><td></td><td></td></tr>
                                        <tr><td>Recurrent revenue</td><td></td><td></td><td></td></tr>
                                        <tr><td><strong>Total</strong></td><td>-</td><td></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                </main>

                <!-- QUIZ SECTION (Placeholder) -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Review the appendices and check your understanding of financial documents.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-id="topic-18-quiz"
                         data-quiz-js="../quizzes/topic-18-quiz.js">
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
                        <a href="topic-17.html" class="nav-button nav-button--previous">
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

                        <a href="../index.html" class="nav-button nav-button--next">
                            <span class="nav-text">Index</span>
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the Quiz Hub page (quiz-hub.html). This central dashboard lists all 18 quizzes (one for each module plus appendices) and the comprehensive exam, integrating with the JavaScript logic to track progress and scores.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Hub - Health Systems Management</title>
    
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
                    <p class="quiz-hub-subtitle">Track your progress and test your knowledge across all health systems management modules.</p>
                    
                    <!-- Overall Progress Summary -->
                    <div class="quiz-hub-stats" id="quiz-stats">
                        <div class="stat-item">
                            <span class="stat-value" id="total-quizzes">18</span>
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
                                <p>Ready to test your knowledge across the entire course? This exam covers key concepts from all 17 modules.</p>
                            </div>
                            <div class="exam-banner-meta">
                                <span>📚 All Topics</span>
                                <span>❓ 50 Questions</span>
                                <span>⏱️ 60 Minutes</span>
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
                        
                        <!-- Quiz 1 -->
                        <div class="quiz-card" data-difficulty="beginner" data-quiz-id="topic-01-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🏥</span>
                                <span class="quiz-card-topic">Module 1</span>
                            </div>
                            <h3 class="quiz-card-title">Health System Organisation</h3>
                            <p class="quiz-card-description">Test your knowledge on the structure and functions of the Kenya health system.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-beginner">Beginner</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 0%;"></div>
                                </div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-01.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-01.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 2 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-02-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">👔</span>
                                <span class="quiz-card-topic">Module 2</span>
                            </div>
                            <h3 class="quiz-card-title">Leadership & Management</h3>
                            <p class="quiz-card-description">Assess your understanding of leadership practices, team dynamics, and conflict resolution.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-02.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-02.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 3 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-03-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">👥</span>
                                <span class="quiz-card-topic">Module 3</span>
                            </div>
                            <h3 class="quiz-card-title">Human Resource Management</h3>
                            <p class="quiz-card-description">Questions on recruitment, performance management, and HR planning.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-03.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-03.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 4 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-04-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🔄</span>
                                <span class="quiz-card-topic">Module 4</span>
                            </div>
                            <h3 class="quiz-card-title">Organisational Change</h3>
                            <p class="quiz-card-description">Test your grasp of change theories (Kotter, Lewin) and managing resistance.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-04.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-04.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 5 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-05-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📦</span>
                                <span class="quiz-card-topic">Module 5</span>
                            </div>
                            <h3 class="quiz-card-title">Commodity & Supplies</h3>
                            <p class="quiz-card-description">Evaluate knowledge on procurement cycles, storage, and supply chain logistics.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-05.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-05.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 6 -->
                        <div class="quiz-card" data-difficulty="beginner" data-quiz-id="topic-06-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🏗️</span>
                                <span class="quiz-card-topic">Module 6</span>
                            </div>
                            <h3 class="quiz-card-title">Infrastructure & Facilities</h3>
                            <p class="quiz-card-description">Questions on asset management, maintenance, and health technology.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-beginner">Beginner</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-06.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-06.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 7 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-07-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🛡️</span>
                                <span class="quiz-card-topic">Module 7</span>
                            </div>
                            <h3 class="quiz-card-title">Quality Assurance</h3>
                            <p class="quiz-card-description">Test understanding of TQM, PDCA cycles, and quality standards (ISO/KQMH).</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-07.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-07.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 8 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-08-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">💰</span>
                                <span class="quiz-card-topic">Module 8</span>
                            </div>
                            <h3 class="quiz-card-title">Financial Management</h3>
                            <p class="quiz-card-description">Assess knowledge of budgeting, accounting forms, and resource mobilization.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-08.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-08.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 9 -->
                        <div class="quiz-card" data-difficulty="beginner" data-quiz-id="topic-09-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">💬</span>
                                <span class="quiz-card-topic">Module 9</span>
                            </div>
                            <h3 class="quiz-card-title">Communication</h3>
                            <p class="quiz-card-description">Questions on communication barriers, skills, and effective patient interaction.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-beginner">Beginner</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-09.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-09.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 10 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-10-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📜</span>
                                <span class="quiz-card-topic">Module 10</span>
                            </div>
                            <h3 class="quiz-card-title">Policy and Reform</h3>
                            <p class="quiz-card-description">Test knowledge of Kenya Health Policy Framework, Vision 2030, and MDGs.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-10.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-10.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 11 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-11-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">⚖️</span>
                                <span class="quiz-card-topic">Module 11</span>
                            </div>
                            <h3 class="quiz-card-title">Law and Ethics</h3>
                            <p class="quiz-card-description">Evaluate understanding of medical negligence, consent, and ethical principles.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-11.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-11.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 12 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-12-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📊</span>
                                <span class="quiz-card-topic">Module 12</span>
                            </div>
                            <h3 class="quiz-card-title">Health Information Systems</h3>
                            <p class="quiz-card-description">Questions on HIS components, data sources, and the Kenyan NHIS structure.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-12.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-12.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 13 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-13-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📋</span>
                                <span class="quiz-card-topic">Module 13</span>
                            </div>
                            <h3 class="quiz-card-title">Project Management</h3>
                            <p class="quiz-card-description">Test knowledge of the project cycle, logframes, and planning tools.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-13.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-13.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 14 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-14-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🏛️</span>
                                <span class="quiz-card-topic">Module 14</span>
                            </div>
                            <h3 class="quiz-card-title">Governance in Health</h3>
                            <p class="quiz-card-description">Assess understanding of stewardship, devolution, and governance roles.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-14.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-14.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 15 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-15-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">💼</span>
                                <span class="quiz-card-topic">Module 15</span>
                            </div>
                            <h3 class="quiz-card-title">Entrepreneurship</h3>
                            <p class="quiz-card-description">Questions on business ventures, planning, and financing for health professionals.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-15.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-15.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 16 -->
                        <div class="quiz-card" data-difficulty="intermediate" data-quiz-id="topic-16-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">🚨</span>
                                <span class="quiz-card-topic">Module 16</span>
                            </div>
                            <h3 class="quiz-card-title">Disaster Management</h3>
                            <p class="quiz-card-description">Evaluate knowledge on disaster cycles, triage, and emergency response.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-intermediate">Intermediate</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-16.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-16.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 17 -->
                        <div class="quiz-card" data-difficulty="advanced" data-quiz-id="topic-17-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📈</span>
                                <span class="quiz-card-topic">Module 17</span>
                            </div>
                            <h3 class="quiz-card-title">Monitoring & Evaluation</h3>
                            <p class="quiz-card-description">Test understanding of M&E frameworks, indicators, and evaluation types.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-advanced">Advanced</span>
                                <span class="quiz-meta-item">📝 10 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-17.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-17.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                        <!-- Quiz 18 (Appendices) -->
                        <div class="quiz-card" data-difficulty="beginner" data-quiz-id="topic-18-quiz">
                            <div class="quiz-card-header">
                                <span class="quiz-card-icon">📂</span>
                                <span class="quiz-card-topic">Appendices</span>
                            </div>
                            <h3 class="quiz-card-title">Financial Forms</h3>
                            <p class="quiz-card-description">Review knowledge of standard accounting forms and documents.</p>
                            <div class="quiz-card-meta">
                                <span class="difficulty-badge difficulty-beginner">Beginner</span>
                                <span class="quiz-meta-item">📝 5 questions</span>
                            </div>
                            <div class="quiz-card-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%;"></div></div>
                                <span class="progress-label">Not started</span>
                            </div>
                            <div class="quiz-card-actions">
                                <a href="topics/topic-18.html#topic-quiz" class="quiz-card-btn quiz-card-btn--primary">Start Quiz</a>
                                <a href="topics/topic-18.html" class="quiz-card-btn quiz-card-btn--secondary">Review Topic</a>
                            </div>
                        </div>

                    </div>
                </main>

            </article>
        </div>
    </div>

    <script src="js/theme.js"></script>
    <script src="js/quiz-hub.js"></script>
</body>
</html>

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the Comprehensive Exam page (comprehensive-exam.html). This page serves as the final assessment interface, designed to load the cumulative exam data and display topic-based performance breakdowns upon completion.
code Html

<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprehensive Final Exam | Health Systems Management</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        rel="stylesheet">

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
                        <span>Final Examination</span>
                    </div>
                    <h1 class="document-title">Health Systems Management Comprehensive Exam</h1>
                    <p class="exam-subtitle">Test your knowledge across all 17 modules of the course</p>

                    <!-- Exam Info Cards -->
                    <div class="exam-info-cards">
                        <div class="exam-info-card">
                            <span class="info-icon">📚</span>
                            <span class="info-value">17 Modules</span>
                            <span class="info-label">Covered</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">❓</span>
                            <span class="info-value">50 Questions</span>
                            <span class="info-label">Total</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">⏱️</span>
                            <span class="info-value">60 Minutes</span>
                            <span class="info-label">Time Limit</span>
                        </div>
                        <div class="exam-info-card">
                            <span class="info-icon">🎯</span>
                            <span class="info-value">70%</span>
                            <span class="info-label">To Pass</span>
                        </div>
                    </div>

                    <!-- Topics Covered List -->
                    <div class="exam-topics-covered">
                        <h3>Modules Covered:</h3>
                        <div class="topics-list">
                            <span class="topic-tag">1. Health Systems Org</span>
                            <span class="topic-tag">2. Leadership & Mgmt</span>
                            <span class="topic-tag">3. HR Management</span>
                            <span class="topic-tag">4. Org Change</span>
                            <span class="topic-tag">5. Commodity Mgmt</span>
                            <span class="topic-tag">6. Infrastructure</span>
                            <span class="topic-tag">7. Quality Assurance</span>
                            <span class="topic-tag">8. Financial Mgmt</span>
                            <span class="topic-tag">9. Communication</span>
                            <span class="topic-tag">10. Policy & Reform</span>
                            <span class="topic-tag">11. Law & Ethics</span>
                            <span class="topic-tag">12. Health Info Systems</span>
                            <span class="topic-tag">13. Project Mgmt</span>
                            <span class="topic-tag">14. Governance</span>
                            <span class="topic-tag">15. Entrepreneurship</span>
                            <span class="topic-tag">16. Disaster Mgmt</span>
                            <span class="topic-tag">17. Monitoring & Evaluation</span>
                        </div>
                    </div>
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">

                    <!-- Exam Instructions -->
                    <div class="exam-instructions callout callout--warning">
                        <div class="callout-header">
                            <span class="callout-icon">⚠️</span>
                            <h4 class="callout-title">Exam Instructions</h4>
                        </div>
                        <div class="callout-content">
                            <ul>
                                <li>This exam covers material from <strong>all course topics</strong>.</li>
                                <li>You have <strong>60 minutes</strong> to complete the exam.</li>
                                <li>A score of <strong>70% or higher</strong> is required to pass.</li>
                                <li>Questions are randomized each time you take the exam.</li>
                                <li>Results will show a breakdown of your performance by topic to help you identify areas for review.</li>
                                <li><strong>Note:</strong> Once you start, the timer cannot be paused.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Exam Quiz Section -->
                    <section class="quiz-section exam-section" id="exam-quiz">
                        <div class="quiz-container" 
                             data-quiz-id="comprehensive-exam"
                             data-quiz-js="quizzes/comprehensive-exam.js">

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
                            <span class="nav-icon">📊</span>
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

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here is the quizzes/comprehensive-exam.js file. This file contains 50 questions covering all 17 modules of the course, structured to provide a comprehensive assessment of Health Systems Management.
code JavaScript

registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Health Systems Management Comprehensive Exam",
        "description": "A final assessment covering all 17 modules of the Health Systems Management course, testing knowledge in leadership, policy, finance, quality assurance, and operations.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", "topic-05", 
            "topic-06", "topic-07", "topic-08", "topic-09", "topic-10", 
            "topic-11", "topic-12", "topic-13", "topic-14", "topic-15", 
            "topic-16", "topic-17"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-14T10:00:00Z",
        "tags": ["final", "comprehensive", "certification"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 3600
    },
    "questions": [
        // MODULE 1: Organisation of Health System
        {
            "id": "comp-q01",
            "topicId": "topic-01",
            "topicName": "Health Systems Org",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the WHO's six building blocks of a health system?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Service Delivery", "isCorrect": false },
                { "id": "b", "text": "Health Workforce", "isCorrect": false },
                { "id": "c", "text": "Disaster Management", "isCorrect": true },
                { "id": "d", "text": "Health Financing", "isCorrect": false }
            ],
            "explanation": "The six building blocks are: Leadership/Governance, Financing, Service Delivery, Health Workforce, Medical Products/Technologies, and Health Information Systems."
        },
        {
            "id": "comp-q02",
            "topicId": "topic-01",
            "topicName": "Health Systems Org",
            "type": "matching",
            "question": "Match the Health Facility Level with its correct classification in the Kenya Public Sector:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Level 1", "right": "Community" },
                { "id": "p2", "left": "Level 2", "right": "Dispensary/Clinic" },
                { "id": "p3", "left": "Level 4", "right": "Primary Hospital (Sub-county)" },
                { "id": "p4", "left": "Level 6", "right": "Tertiary Hospital (National Referral)" }
            ]
        },

        // MODULE 2: Leadership & Management
        {
            "id": "comp-q03",
            "topicId": "topic-02",
            "topicName": "Leadership & Mgmt",
            "type": "multiple-choice",
            "question": "In the context of the Leading and Managing Framework, which activity is associated with 'Leading' rather than 'Managing'?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Planning and budgeting", "isCorrect": false },
                { "id": "b", "text": "Aligning and mobilizing", "isCorrect": true },
                { "id": "c", "text": "Organizing and staffing", "isCorrect": false },
                { "id": "d", "text": "Controlling and problem solving", "isCorrect": false }
            ],
            "explanation": "Leading focuses on scanning, focusing, aligning/mobilizing, and inspiring. Managing focuses on planning, organizing, implementing, and monitoring."
        },
        {
            "id": "comp-q04",
            "topicId": "topic-02",
            "topicName": "Leadership & Mgmt",
            "type": "ordering",
            "question": "Arrange Bruce Tuckman's stages of team development in the correct chronological order:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Forming", "correctPosition": 1 },
                { "id": "i2", "text": "Storming", "correctPosition": 2 },
                { "id": "i3", "text": "Norming", "correctPosition": 3 },
                { "id": "i4", "text": "Performing", "correctPosition": 4 },
                { "id": "i5", "text": "Adjourning", "correctPosition": 5 }
            ]
        },

        // MODULE 3: HRH
        {
            "id": "comp-q05",
            "topicId": "topic-03",
            "topicName": "HR Management",
            "type": "fill-blank",
            "question": "A __b1__ is a statement of the personal attributes (knowledge, skills, aptitudes) required for successful performance in a job.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["person specification", "job specification"], "caseSensitive": false }
            ],
            "explanation": "A Job Description details what the job involves, while a Person/Job Specification details the attributes required of the person doing the job."
        },
        {
            "id": "comp-q06",
            "topicId": "topic-03",
            "topicName": "HR Management",
            "type": "multiple-select",
            "question": "Which of the following are components of a Performance Management System? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Planning work and setting expectations", "isCorrect": true },
                { "id": "b", "text": "Continually monitoring performance", "isCorrect": true },
                { "id": "c", "text": "Punishing all mistakes immediately", "isCorrect": false },
                { "id": "d", "text": "Developing employee capacity", "isCorrect": true }
            ],
            "explanation": "Performance management involves planning, monitoring, developing, rating, and rewarding. It is not primarily about punishment."
        },

        // MODULE 4: Organisational Change
        {
            "id": "comp-q07",
            "topicId": "topic-04",
            "topicName": "Org Change",
            "type": "multiple-choice",
            "question": "According to Kurt Lewin's Force-Field Analysis, change occurs when:",
            "points": 2,
            "options": [
                { "id": "a", "text": "The organization runs out of money", "isCorrect": false },
                { "id": "b", "text": "Driving forces become more powerful than restraining forces", "isCorrect": true },
                { "id": "c", "text": "Restraining forces overwhelm driving forces", "isCorrect": false },
                { "id": "d", "text": "Equilibrium is maintained", "isCorrect": false }
            ],
            "explanation": "Lewin viewed the status quo as an equilibrium between driving and restraining forces. Change happens when driving forces increase or restraining forces decrease."
        },
        {
            "id": "comp-q08",
            "topicId": "topic-04",
            "topicName": "Org Change",
            "type": "true-false",
            "question": "In William Bridges' transition model, the 'Neutral Zone' is a time of confusion but also potential creativity.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The Neutral Zone is the in-between state where the old is gone but the new isn't fully operational. It is chaotic but allows for innovation."
        },

        // MODULE 5: Commodity Management
        {
            "id": "comp-q09",
            "topicId": "topic-05",
            "topicName": "Commodity Mgmt",
            "type": "ordering",
            "question": "Order the four stages of the Commodity Management Cycle:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Selection", "correctPosition": 1 },
                { "id": "i2", "text": "Procurement", "correctPosition": 2 },
                { "id": "i3", "text": "Distribution", "correctPosition": 3 },
                { "id": "i4", "text": "Use", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-q10",
            "topicId": "topic-05",
            "topicName": "Commodity Mgmt",
            "type": "multiple-choice",
            "question": "Which procurement method is the default method that allows maximum competition?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Restricted Tendering", "isCorrect": false },
                { "id": "b", "text": "Direct Procurement", "isCorrect": false },
                { "id": "c", "text": "Open Tender", "isCorrect": true },
                { "id": "d", "text": "Request for Quotations", "isCorrect": false }
            ],
            "explanation": "The Open Tender method allows all eligible bidders to participate without discrimination."
        },

        // MODULE 6: Infrastructure
        {
            "id": "comp-q11",
            "topicId": "topic-06",
            "topicName": "Infrastructure",
            "type": "fill-blank",
            "question": "__b1__ is any variety of scheduled maintenance carried out to ensure an item of equipment is operating correctly and to avoid unscheduled breakdown.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["ppm", "planned preventive maintenance", "preventive maintenance"], "caseSensitive": false }
            ],
            "explanation": "PPM (Planned Preventive Maintenance) is crucial for extending equipment life and ensuring safety."
        },
        {
            "id": "comp-q12",
            "topicId": "topic-06",
            "topicName": "Infrastructure",
            "type": "multiple-choice",
            "question": "Who is primarily responsible for the daily routine maintenance and simple repairs of equipment in a facility?",
            "points": 2,
            "options": [
                { "id": "a", "text": "External contractors", "isCorrect": false },
                { "id": "b", "text": "In-house maintenance teams / Users", "isCorrect": true },
                { "id": "c", "text": "The Ministry of Health headquarters", "isCorrect": false },
                { "id": "d", "text": "The manufacturer", "isCorrect": false }
            ],
            "explanation": "In-house staff and users handle routine care; complex repairs are often contracted out."
        },

        // MODULE 7: Quality Assurance
        {
            "id": "comp-q13",
            "topicId": "topic-07",
            "topicName": "Quality Assurance",
            "type": "multiple-choice",
            "question": "What does the 'PDCA' cycle stand for in quality improvement?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Plan, Direct, Control, Act", "isCorrect": false },
                { "id": "b", "text": "Prepare, Do, Check, Archive", "isCorrect": false },
                { "id": "c", "text": "Plan, Do, Check, Act", "isCorrect": true },
                { "id": "d", "text": "Process, Design, Control, Assess", "isCorrect": false }
            ],
            "explanation": "PDCA stands for Plan, Do, Check, Act (also known as the Deming Cycle)."
        },
        {
            "id": "comp-q14",
            "topicId": "topic-07",
            "topicName": "Quality Assurance",
            "type": "matching",
            "question": "Match the Quality Principle to its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Customer Focus", "right": "Linking objectives to patient needs" },
                { "id": "p2", "left": "Process Approach", "right": "Managing activities as inputs turning into outputs" },
                { "id": "p3", "left": "Continuous Improvement", "right": "Sustained ongoing effort to improve over time" },
                { "id": "p4", "left": "Informed Decision Making", "right": "Basing decisions on analysis of data" }
            ]
        },

        // MODULE 8: Financial Management
        {
            "id": "comp-q15",
            "topicId": "topic-08",
            "topicName": "Financial Mgmt",
            "type": "multiple-choice",
            "question": "Which document is a contract raised when procuring GOODS?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Local Service Order (LSO)", "isCorrect": false },
                { "id": "b", "text": "Imprest Warrant", "isCorrect": false },
                { "id": "c", "text": "Local Purchase Order (LPO)", "isCorrect": true },
                { "id": "d", "text": "Authority to Incur Expenditure (AIE)", "isCorrect": false }
            ],
            "explanation": "An LPO (Local Purchase Order) is for goods; an LSO (Local Service Order) is for services."
        },
        {
            "id": "comp-q16",
            "topicId": "topic-08",
            "topicName": "Financial Mgmt",
            "type": "true-false",
            "question": "Government imprest must be surrendered within 48 hours after the completion of the task.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Financial regulations require imprest surrender within 48 hours of return/task completion."
        },
        {
            "id": "comp-q17",
            "topicId": "topic-08",
            "topicName": "Financial Mgmt",
            "type": "fill-blank",
            "question": "__b1__ expenditure refers to provisions made for the creation of new assets, such as construction of buildings.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["development"], "caseSensitive": false }
            ],
            "explanation": "Expenditure is divided into Recurrent (ongoing/operational) and Development (new assets/capital)."
        },

        // MODULE 9: Communication
        {
            "id": "comp-q18",
            "topicId": "topic-09",
            "topicName": "Communication",
            "type": "multiple-select",
            "question": "Which of the following are examples of Non-Verbal Communication? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Tone of voice", "isCorrect": true },
                { "id": "b", "text": "Body posture", "isCorrect": true },
                { "id": "c", "text": "Written reports", "isCorrect": false },
                { "id": "d", "text": "Facial expressions", "isCorrect": true }
            ],
            "explanation": "Non-verbal communication includes body language, tone, gestures, and expressions, but not written words."
        },
        {
            "id": "comp-q19",
            "topicId": "topic-09",
            "topicName": "Communication",
            "type": "multiple-choice",
            "question": "What is 'Paraphrasing' in the context of active listening?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Repeating exactly what the person said", "isCorrect": false },
                { "id": "b", "text": "Repeating what was said in different words to check understanding", "isCorrect": true },
                { "id": "c", "text": "Asking a closed question", "isCorrect": false },
                { "id": "d", "text": "Changing the subject to a new topic", "isCorrect": false }
            ],
            "explanation": "Paraphrasing confirms understanding by restating the message in your own words."
        },

        // MODULE 10: Policy & Reform
        {
            "id": "comp-q20",
            "topicId": "topic-10",
            "topicName": "Policy & Reform",
            "type": "multiple-choice",
            "question": "The Kenya Vision 2030 aims to transform Kenya into a:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Middle-income country providing high quality life", "isCorrect": true },
                { "id": "b", "text": "Fully agrarian society", "isCorrect": false },
                { "id": "c", "text": "Donor-dependent economy", "isCorrect": false },
                { "id": "d", "text": "High-income industrial superpower", "isCorrect": false }
            ],
            "explanation": "Vision 2030 aims to create a globally competitive and prosperous nation with a high quality of life (Middle Income status)."
        },
        {
            "id": "comp-q21",
            "topicId": "topic-10",
            "topicName": "Policy & Reform",
            "type": "matching",
            "question": "Match the MDG Goal number to its health focus (based on the manual's context):",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Goal 4", "right": "Reduce Child Mortality" },
                { "id": "p2", "left": "Goal 5", "right": "Improve Maternal Health" },
                { "id": "p3", "left": "Goal 6", "right": "Combat HIV/AIDS, Malaria, etc." }
            ]
        },

        // MODULE 11: Law & Ethics
        {
            "id": "comp-q22",
            "topicId": "topic-11",
            "topicName": "Law & Ethics",
            "type": "multiple-choice",
            "question": "Performing a procedure on a patient without obtaining their consent can legally be classified as:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Libel", "isCorrect": false },
                { "id": "b", "text": "Battery", "isCorrect": true },
                { "id": "c", "text": "Slander", "isCorrect": false },
                { "id": "d", "text": "Defamation", "isCorrect": false }
            ],
            "explanation": "Battery is the unlawful touching of another person without their consent. Assault is the threat to do so."
        },
        {
            "id": "comp-q23",
            "topicId": "topic-11",
            "topicName": "Law & Ethics",
            "type": "fill-blank",
            "question": "__b1__ is the commission of an act that a prudent person would not have done, or omission of a duty, resulting in harm.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["negligence", "medical negligence"], "caseSensitive": false }
            ],
            "explanation": "Negligence involves failing to act as a reasonably prudent person would in similar circumstances."
        },

        // MODULE 12: HIS
        {
            "id": "comp-q24",
            "topicId": "topic-12",
            "topicName": "Health Info Systems",
            "type": "multiple-select",
            "question": "Which of the following are core functions of a Health Information System? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Data generation", "isCorrect": true },
                { "id": "b", "text": "Analysis and synthesis", "isCorrect": true },
                { "id": "c", "text": "Communication and use", "isCorrect": true },
                { "id": "d", "text": "Patient treatment", "isCorrect": false }
            ],
            "explanation": "HIS functions are data generation, compilation, analysis/synthesis, and communication/use. Patient treatment is a clinical function."
        },

        // MODULE 13: Project Management
        {
            "id": "comp-q25",
            "topicId": "topic-13",
            "topicName": "Project Mgmt",
            "type": "ordering",
            "question": "Order the phases of the Project Cycle:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Programming/Project Concept", "correctPosition": 1 },
                { "id": "i2", "text": "Identification and Formulation", "correctPosition": 2 },
                { "id": "i3", "text": "Appraisal", "correctPosition": 3 },
                { "id": "i4", "text": "Financing", "correctPosition": 4 },
                { "id": "i5", "text": "Implementation", "correctPosition": 5 },
                { "id": "i6", "text": "Evaluation", "correctPosition": 6 }
            ]
        },
        {
            "id": "comp-q26",
            "topicId": "topic-13",
            "topicName": "Project Mgmt",
            "type": "multiple-choice",
            "question": "Which planning tool sets out the intervention logic (Goal, Purpose, Outputs, Activities) and assumptions?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Gantt Chart", "isCorrect": false },
                { "id": "b", "text": "Logical Framework (Logframe)", "isCorrect": true },
                { "id": "c", "text": "Fishbone Diagram", "isCorrect": false },
                { "id": "d", "text": "PERT Chart", "isCorrect": false }
            ],
            "explanation": "The Logframe Matrix details the project structure, indicators, means of verification, and assumptions."
        },

        // MODULE 14: Governance
        {
            "id": "comp-q27",
            "topicId": "topic-14",
            "topicName": "Governance",
            "type": "multiple-choice",
            "question": "Under the devolved system in Kenya, who is responsible for National Health Policy and Standards?",
            "points": 2,
            "options": [
                { "id": "a", "text": "The County Government", "isCorrect": false },
                { "id": "b", "text": "The National Government (Ministry of Health)", "isCorrect": true },
                { "id": "c", "text": "NGOs", "isCorrect": false },
                { "id": "d", "text": "The Private Sector", "isCorrect": false }
            ],
            "explanation": "The National Government is responsible for policy, regulation, and standards, while Counties are responsible for service delivery."
        },
        {
            "id": "comp-q28",
            "topicId": "topic-14",
            "topicName": "Governance",
            "type": "matching",
            "question": "Match the actor to their category:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Ministry of Health", "right": "State Actor" },
                { "id": "p2", "left": "FBOs / NGOs", "right": "Non-State Actor" },
                { "id": "p3", "left": "Bilateral Donors", "right": "External Actor" }
            ]
        },

        // MODULE 15: Entrepreneurship
        {
            "id": "comp-q29",
            "topicId": "topic-15",
            "topicName": "Entrepreneurship",
            "type": "multiple-choice",
            "question": "Which business form has unlimited liability where the owner is personally responsible for all debts?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Limited Company", "isCorrect": false },
                { "id": "b", "text": "Sole Proprietorship", "isCorrect": true },
                { "id": "c", "text": "Corporation", "isCorrect": false },
                { "id": "d", "text": "Cooperative", "isCorrect": false }
            ],
            "explanation": "In a sole proprietorship, there is no legal distinction between the owner and the business, leading to unlimited liability."
        },
        {
            "id": "comp-q30",
            "topicId": "topic-15",
            "topicName": "Entrepreneurship",
            "type": "multiple-select",
            "question": "Which of the following are the '4 Ms' of a Business Plan?",
            "points": 3,
            "options": [
                { "id": "a", "text": "Management", "isCorrect": true },
                { "id": "b", "text": "Marketing", "isCorrect": true },
                { "id": "c", "text": "Money", "isCorrect": true },
                { "id": "d", "text": "Manufacturing", "isCorrect": false },
                { "id": "e", "text": "Money Machine", "isCorrect": true }
            ],
            "explanation": "The 4 Ms are: Management, Marketing, Money, and Money Machine (operations)."
        },

        // MODULE 16: Disaster Management
        {
            "id": "comp-q31",
            "topicId": "topic-16",
            "topicName": "Disaster Mgmt",
            "type": "fill-blank",
            "question": "Risk (R) is determined as the product of Hazard (H) and __b1__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["vulnerability", "v"], "caseSensitive": false }
            ],
            "explanation": "Risk = Hazard × Vulnerability (R = H × V)."
        },
        {
            "id": "comp-q32",
            "topicId": "topic-16",
            "topicName": "Disaster Mgmt",
            "type": "multiple-choice",
            "question": "Sorting and prioritizing patients for medical attention during a mass casualty incident is called:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Evacuation", "isCorrect": false },
                { "id": "b", "text": "Triage", "isCorrect": true },
                { "id": "c", "text": "Mitigation", "isCorrect": false },
                { "id": "d", "text": "Recovery", "isCorrect": false }
            ],
            "explanation": "Triage involves categorizing patients (often using color codes) based on the severity of their injuries to prioritize treatment."
        },

        // MODULE 17: Monitoring & Evaluation
        {
            "id": "comp-q33",
            "topicId": "topic-17",
            "topicName": "M&E",
            "type": "matching",
            "question": "Match the M&E Framework level to its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Input", "right": "Resources put into the project" },
                { "id": "p2", "left": "Output", "right": "Immediate results (e.g., people trained)" },
                { "id": "p3", "left": "Outcome", "right": "Mid-term results (e.g., change in behavior)" },
                { "id": "p4", "left": "Impact", "right": "Long-term consequences (e.g., decreased mortality)" }
            ]
        },
        {
            "id": "comp-q34",
            "topicId": "topic-17",
            "topicName": "M&E",
            "type": "multiple-choice",
            "question": "Which type of evaluation is conducted at the end of a project to assess effectiveness?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Formative Evaluation", "isCorrect": false },
                { "id": "b", "text": "Baseline Evaluation", "isCorrect": false },
                { "id": "c", "text": "Summative Evaluation", "isCorrect": true },
                { "id": "d", "text": "Mid-term Evaluation", "isCorrect": false }
            ],
            "explanation": "Summative evaluations happen at the end to judge merit and worth. Formative evaluations happen during the project to improve it."
        },

        // GENERAL / MIXED
        {
            "id": "comp-q35",
            "topicId": "topic-02",
            "topicName": "Leadership & Mgmt",
            "type": "true-false",
            "question": "In conflict management, 'Withdrawing' creates a Lose-Lose situation.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Withdrawing avoids the conflict, meaning neither party's concerns are addressed."
        },
        {
            "id": "comp-q36",
            "topicId": "topic-05",
            "topicName": "Commodity Mgmt",
            "type": "multiple-choice",
            "question": "Which committee is responsible for disposing of unserviceable or obsolete stores?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Tender Committee", "isCorrect": false },
                { "id": "b", "text": "Evaluation Committee", "isCorrect": false },
                { "id": "c", "text": "Inspection Committee", "isCorrect": false },
                { "id": "d", "text": "Disposal Committee", "isCorrect": true }
            ],
            "explanation": "The Disposal Committee is specifically tasked with handling obsolete, unserviceable, or surplus stores."
        },
        {
            "id": "comp-q37",
            "topicId": "topic-06",
            "topicName": "Infrastructure",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a benefit of Planned Preventive Maintenance (PPM)?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Increases equipment lifespan", "isCorrect": false },
                { "id": "b", "text": "Reduces unscheduled downtime", "isCorrect": false },
                { "id": "c", "text": "Eliminates the need for all repairs", "isCorrect": true },
                { "id": "d", "text": "Ensures safety for patients and staff", "isCorrect": false }
            ],
            "explanation": "PPM reduces but cannot completely eliminate the need for all repairs, as wear and tear or accidents can still occur."
        },
        {
            "id": "comp-q38",
            "topicId": "topic-09",
            "topicName": "Communication",
            "type": "multiple-choice",
            "question": "Using technical terms that a patient does not understand is an example of which communication barrier?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Jargon", "isCorrect": true },
                { "id": "b", "text": "Slang", "isCorrect": false },
                { "id": "c", "text": "Dialect", "isCorrect": false },
                { "id": "d", "text": "Emotional distress", "isCorrect": false }
            ],
            "explanation": "Jargon refers to technical language used by professionals that may not be understood by laypeople."
        },
        {
            "id": "comp-q39",
            "topicId": "topic-11",
            "topicName": "Law & Ethics",
            "type": "matching",
            "question": "Match the Ethical Theory to its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Deontology", "right": "Based on duty/obligation" },
                { "id": "p2", "left": "Consequentialism", "right": "Based on outcomes/consequences" },
                { "id": "p3", "left": "Utilitarianism", "right": "Greatest good for greatest number" },
                { "id": "p4", "left": "Virtue Ethics", "right": "Focus on character of the person" }
            ]
        },
        {
            "id": "comp-q40",
            "topicId": "topic-15",
            "topicName": "Entrepreneurship",
            "type": "multiple-choice",
            "question": "What is 'Equity Financing'?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Borrowing money that must be repaid with interest", "isCorrect": false },
                { "id": "b", "text": "Selling a portion of ownership in the business", "isCorrect": true },
                { "id": "c", "text": "Using a credit card", "isCorrect": false },
                { "id": "d", "text": "Getting a bank overdraft", "isCorrect": false }
            ],
            "explanation": "Equity financing involves raising capital by selling shares (ownership) in the business, rather than borrowing (debt)."
        },
        {
            "id": "comp-q41",
            "topicId": "topic-04",
            "topicName": "Org Change",
            "type": "multiple-choice",
            "question": "In Kotter's 8 Steps, what is usually the first step?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Create a vision", "isCorrect": false },
                { "id": "b", "text": "Generate short-term wins", "isCorrect": false },
                { "id": "c", "text": "Create a sense of urgency", "isCorrect": true },
                { "id": "d", "text": "Form a coalition", "isCorrect": false }
            ],
            "explanation": "Creating a sense of urgency is the first step to combat inertia and get people ready for change."
        },
        {
            "id": "comp-q42",
            "topicId": "topic-13",
            "topicName": "Project Mgmt",
            "type": "true-false",
            "question": "A Gantt chart is a tool primarily used for financial auditing.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "A Gantt chart is a project management tool used for scheduling tasks and tracking progress over time."
        },
        {
            "id": "comp-q43",
            "topicId": "topic-08",
            "topicName": "Financial Mgmt",
            "type": "multiple-choice",
            "question": "The three-year rolling budget framework used by the government is known as:",
            "points": 2,
            "options": [
                { "id": "a", "text": "LPO", "isCorrect": false },
                { "id": "b", "text": "MTEF (Medium Term Expenditure Framework)", "isCorrect": true },
                { "id": "c", "text": "AIA", "isCorrect": false },
                { "id": "d", "text": "IFMIS", "isCorrect": false }
            ],
            "explanation": "MTEF provides a framework for planning and managing public resources over a 3-year horizon."
        },
        {
            "id": "comp-q44",
            "topicId": "topic-01",
            "topicName": "Health Systems Org",
            "type": "multiple-choice",
            "question": "Which entity manages the referral health services at the National level?",
            "points": 2,
            "options": [
                { "id": "a", "text": "County Government", "isCorrect": false },
                { "id": "b", "text": "National Government (Ministry of Health)", "isCorrect": true },
                { "id": "c", "text": "Faith Based Organizations", "isCorrect": false },
                { "id": "d", "text": "Private Sector", "isCorrect": false }
            ],
            "explanation": "The National Government is responsible for national referral hospitals (Level 6)."
        },
        {
            "id": "comp-q45",
            "topicId": "topic-10",
            "topicName": "Policy & Reform",
            "type": "multiple-choice",
            "question": "Which of the following is an objective of the Kenya Health Policy 2012-2030?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Eliminate communicable conditions", "isCorrect": true },
                { "id": "b", "text": "Privatize all hospitals", "isCorrect": false },
                { "id": "c", "text": "Stop all donor funding", "isCorrect": false },
                { "id": "d", "text": "Reduce health workforce", "isCorrect": false }
            ],
            "explanation": "One of the six objectives is to eliminate communicable conditions."
        },
        {
            "id": "comp-q46",
            "topicId": "topic-14",
            "topicName": "Governance",
            "type": "fill-blank",
            "question": "The __b1__ Government is responsible for ambulance services and promotion of primary health care according to the Constitution.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["county"], "caseSensitive": false }
            ],
            "explanation": "The Constitution of 2010 devolved these functions to the County Governments."
        },
        {
            "id": "comp-q47",
            "topicId": "topic-16",
            "topicName": "Disaster Mgmt",
            "type": "multiple-choice",
            "question": "Mitigation in disaster management refers to:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Responding immediately after the event", "isCorrect": false },
                { "id": "b", "text": "Measures to reduce the impact/risk before a disaster occurs", "isCorrect": true },
                { "id": "c", "text": "Rebuilding after the disaster", "isCorrect": false },
                { "id": "d", "text": "Triaging patients", "isCorrect": false }
            ],
            "explanation": "Mitigation involves long-term measures (like building codes) to minimize the effects of a disaster."
        },
        {
            "id": "comp-q48",
            "topicId": "topic-12",
            "topicName": "Health Info Systems",
            "type": "true-false",
            "question": "A census is considered a source of population-based health information.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "A census provides critical demographic data that forms the denominator for many health indicators."
        },
        {
            "id": "comp-q49",
            "topicId": "topic-07",
            "topicName": "Quality Assurance",
            "type": "multiple-choice",
            "question": "Which dimension of quality relates to minimizing the risk of injury or infection to patients?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Efficiency", "isCorrect": false },
                { "id": "b", "text": "Safety", "isCorrect": true },
                { "id": "c", "text": "Access", "isCorrect": false },
                { "id": "d", "text": "Amenities", "isCorrect": false }
            ],
            "explanation": "Safety is the dimension concerned with avoiding harm to patients."
        },
        {
            "id": "comp-q50",
            "topicId": "topic-03",
            "topicName": "HR Management",
            "type": "multiple-choice",
            "question": "Which of the following describes the 'probation period'?",
            "points": 2,
            "options": [
                { "id": "a", "text": "The period before retirement", "isCorrect": false },
                { "id": "b", "text": "A trial period at the start of employment to assess skills", "isCorrect": true },
                { "id": "c", "text": "A disciplinary suspension", "isCorrect": false },
                { "id": "d", "text": "Paid leave for study", "isCorrect": false }
            ],
            "explanation": "Probation is the initial period of employment used to assess suitability for the role."
        }
    ]
});

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right

Here are the JavaScript quiz files for all 18 topics (Topic 01 through Topic 18).

These files use the JSONP loading method defined in the system prompt (registerQuiz) to ensure they work both on a web server and when opening HTML files directly (file://), avoiding CORS errors.
1. Topic 01 Quiz: Health System Organisation

File: quizzes/topic-01-quiz.js
code JavaScript

registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Health System Organisation Quiz",
        "description": "Assess your understanding of the WHO building blocks and the Kenya Health System structure.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the WHO Six Building Blocks of a health system?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Service Delivery", "isCorrect": false },
                { "id": "b", "text": "Health Workforce", "isCorrect": false },
                { "id": "c", "text": "Disaster Management", "isCorrect": true },
                { "id": "d", "text": "Health Financing", "isCorrect": false }
            ],
            "explanation": "The six blocks are: Service Delivery, Health Workforce, Information, Medical Products/Technologies, Financing, and Leadership/Governance."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the facility level to its description in the Kenya public sector:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Level 1", "right": "Community" },
                { "id": "p2", "left": "Level 4", "right": "Primary Hospital (Sub-county)" },
                { "id": "p3", "left": "Level 5", "right": "Secondary Hospital (County Referral)" },
                { "id": "p4", "left": "Level 6", "right": "Tertiary Hospital (National Referral)" }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Dispensaries and clinics (Level 2) primarily handle curative surgery and specialized care.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Level 2 facilities primarily handle promotive and preventive care and basic curative services. Surgery is typically handled at Level 4 and above."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The __b1__ is the Chief Technical Officer of the Ministry of Health.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["director of medical services", "dms"], "caseSensitive": false }
            ],
            "explanation": "The Director of Medical Services (DMS) serves as the Chief Technical Officer."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are functions of a Level 5 (County Referral) Hospital? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Provide specialised care", "isCorrect": true },
                { "id": "b", "text": "Oversee implementation of health policy at the county level", "isCorrect": true },
                { "id": "c", "text": "Provide internship for health workers", "isCorrect": true },
                { "id": "d", "text": "Formulate National Health Policy", "isCorrect": false }
            ],
            "explanation": "National Policy formulation is a function of the National Government (Ministry of Health), not the County Hospital."
        }
    ]
});

2. Topic 02 Quiz: Leadership & Management

File: quizzes/topic-02-quiz.js
code JavaScript

registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Leadership & Management Quiz",
        "description": "Test your knowledge on leadership frameworks, team dynamics, and conflict resolution.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the practice to whether it is 'Leading' or 'Managing':",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Scanning", "right": "Leading" },
                { "id": "p2", "left": "Planning", "right": "Managing" },
                { "id": "p3", "left": "Inspiring", "right": "Leading" },
                { "id": "p4", "left": "Organizing", "right": "Managing" }
            ]
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the stages of Bruce Tuckman's Team Development model:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Forming", "correctPosition": 1 },
                { "id": "i2", "text": "Storming", "correctPosition": 2 },
                { "id": "i3", "text": "Norming", "correctPosition": 3 },
                { "id": "i4", "text": "Performing", "correctPosition": 4 },
                { "id": "i5", "text": "Adjourning", "correctPosition": 5 }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which conflict management technique creates a 'Lose-Lose' situation by postponing or sidestepping the issue?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Forcing", "isCorrect": false },
                { "id": "b", "text": "Collaborating", "isCorrect": false },
                { "id": "c", "text": "Withdrawing (Avoiding)", "isCorrect": true },
                { "id": "d", "text": "Smoothing", "isCorrect": false }
            ],
            "explanation": "Withdrawing/Avoiding ignores the conflict, meaning neither party's concerns are addressed (Lose-Lose)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The __b1__ Model is a tool that helps teams move from a shared vision to action by diagnosing the current situation.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["challenge"], "caseSensitive": false }
            ],
            "explanation": "The Challenge Model offers a systematic approach for working together to identify and face one challenge at a time."
        }
    ]
});

3. Topic 03 Quiz: Human Resource Management

File: quizzes/topic-03-quiz.js
code JavaScript

registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "HR Management Quiz",
        "description": "Assess your knowledge of HR functions, planning, and employment laws.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the difference between a Job Description and a Person Specification?",
            "points": 10,
            "options": [
                { "id": "a", "text": "They are the same document", "isCorrect": false },
                { "id": "b", "text": "Job Description details tasks; Person Specification details required attributes", "isCorrect": true },
                { "id": "c", "text": "Person Specification details tasks; Job Description details attributes", "isCorrect": false },
                { "id": "d", "text": "Job Description is for the employer; Person Specification is for the employee", "isCorrect": false }
            ],
            "explanation": "A Job Description lists duties and responsibilities. A Person Specification lists the skills, knowledge, and aptitudes required."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "A female employee is entitled to __b1__ months of maternity leave with full pay.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["3", "three"], "caseSensitive": false }
            ],
            "explanation": "According to the Employment Act 2012, female employees are entitled to 3 months maternity leave."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are key components of Performance Management? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Planning work/setting expectations", "isCorrect": true },
                { "id": "b", "text": "Monitoring performance", "isCorrect": true },
                { "id": "c", "text": "Developing capacity", "isCorrect": true },
                { "id": "d", "text": "Rating performance", "isCorrect": true }
            ],
            "explanation": "Performance management is a cycle that includes planning, monitoring, developing, rating, and rewarding."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Adult learning theory (Andragogy) suggests that adults need to know WHY they are learning something before they learn it.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Malcolm Knowles' theory states that adults are self-directed and need to understand the relevance/reason for learning."
        }
    ]
});

4. Topic 04 Quiz: Leading Organisational Change

File: quizzes/topic-04-quiz.js
code JavaScript

registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Change Management Quiz",
        "description": "Test understanding of change theories, transition models, and managing resistance.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "In Kurt Lewin's Force-Field Analysis, change occurs when:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Management issues a memo", "isCorrect": false },
                { "id": "b", "text": "Driving forces exceed restraining forces", "isCorrect": true },
                { "id": "c", "text": "Restraining forces exceed driving forces", "isCorrect": false },
                { "id": "d", "text": "Forces are in equilibrium", "isCorrect": false }
            ],
            "explanation": "Lewin viewed the status quo as an equilibrium. Change happens when driving forces increase or restraining forces decrease."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the first 4 steps of Kotter's 8-Step Change Model:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Create Urgency", "correctPosition": 1 },
                { "id": "i2", "text": "Form a Guiding Coalition", "correctPosition": 2 },
                { "id": "i3", "text": "Develop Vision and Strategy", "correctPosition": 3 },
                { "id": "i4", "text": "Communicate the Vision", "correctPosition": 4 }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "According to William Bridges, __b1__ is the psychological process people go through to come to terms with a new situation, whereas 'change' is situational.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["transition"], "caseSensitive": false }
            ],
            "explanation": "Change is external (situational), while Transition is the internal psychological process."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the 'Power Tools' described by Kanter for implementing change?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Information", "isCorrect": false },
                { "id": "b", "text": "Resources", "isCorrect": false },
                { "id": "c", "text": "Coercion", "isCorrect": true },
                { "id": "d", "text": "Support", "isCorrect": false }
            ],
            "explanation": "Kanter's power tools are Information, Resources, and Support."
        }
    ]
});

5. Topic 05 Quiz: Commodity & Supplies Management

File: quizzes/topic-05-quiz.js
code JavaScript

registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Commodity Management Quiz",
        "description": "Assess knowledge of procurement methods, committees, and the supply chain cycle.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which procurement method is considered the default method that allows maximum competition?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Restricted Tendering", "isCorrect": false },
                { "id": "b", "text": "Direct Procurement", "isCorrect": false },
                { "id": "c", "text": "Open Tender", "isCorrect": true },
                { "id": "d", "text": "Request for Quotations", "isCorrect": false }
            ],
            "explanation": "Open Tender allows all eligible bidders to participate, ensuring maximum competition and transparency."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the committee to its function:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Tender Committee", "right": "Approves selection and awards contracts" },
                { "id": "p2", "left": "Evaluation Committee", "right": "Carries out technical/financial analysis" },
                { "id": "p3", "left": "Inspection Committee", "right": "Ensures goods meet specifications upon receipt" },
                { "id": "p4", "left": "Disposal Committee", "right": "Handles obsolete/unserviceable stores" }
            ]
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the stages of the Commodity Management Cycle:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Selection", "correctPosition": 1 },
                { "id": "i2", "text": "Procurement", "correctPosition": 2 },
                { "id": "i3", "text": "Distribution", "correctPosition": 3 },
                { "id": "i4", "text": "Use", "correctPosition": 4 }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Direct Procurement is encouraged because it offers the best value for money.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Direct procurement is NOT encouraged as it offers no competition. It is reserved for urgent needs or when there is only one supplier."
        }
    ]
});

6. Topic 06 Quiz: Infrastructure & Facilities

File: quizzes/topic-06-quiz.js
code JavaScript

registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Infrastructure Management Quiz",
        "description": "Test understanding of asset management, PPM, and equipment lifecycles.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "__b1__ is a scheduled service carried out to ensure an item of equipment is operating correctly and to avoid unscheduled breakdown.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["ppm", "planned preventive maintenance", "preventive maintenance"], "caseSensitive": false }
            ],
            "explanation": "Planned Preventive Maintenance (PPM) extends equipment life and reduces emergency repairs."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are benefits of effective asset management? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Equipment is properly utilized and safeguarded", "isCorrect": true },
                { "id": "b", "text": "Health facilities can deliver full service", "isCorrect": true },
                { "id": "c", "text": "Reduced running costs", "isCorrect": true },
                { "id": "d", "text": "Elimination of all equipment failures", "isCorrect": false }
            ],
            "explanation": "Asset management reduces failures but cannot eliminate them entirely (due to accidents or wear)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Who is responsible for the daily care, cleaning, and correct operation of medical equipment?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The external contractor", "isCorrect": false },
                { "id": "b", "text": "The equipment user", "isCorrect": true },
                { "id": "c", "text": "The Medical Superintendent", "isCorrect": false },
                { "id": "d", "text": "The procurement officer", "isCorrect": false }
            ],
            "explanation": "Equipment users form the first level of service and greatly affect the life of equipment."
        }
    ]
});

7. Topic 07 Quiz: Quality Assurance

File: quizzes/topic-07-quiz.js
code JavaScript

registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Quality Assurance Quiz",
        "description": "Assess knowledge of quality principles, PDCA cycle, and KQMH.",
        "topicId": "topic-07",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the steps of the PDCA cycle:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Plan", "correctPosition": 1 },
                { "id": "i2", "text": "Do", "correctPosition": 2 },
                { "id": "i3", "text": "Check", "correctPosition": 3 },
                { "id": "i4", "text": "Act", "correctPosition": 4 }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which quality dimension refers to minimising the risks of injury, infection, or harmful side effects?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Technical Competence", "isCorrect": false },
                { "id": "b", "text": "Safety", "isCorrect": true },
                { "id": "c", "text": "Effectiveness", "isCorrect": false },
                { "id": "d", "text": "Efficiency", "isCorrect": false }
            ],
            "explanation": "Safety focuses on avoiding harm to patients or staff."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the Quality Tool to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Fishbone Diagram", "right": "Identifies cause and effect" },
                { "id": "p2", "left": "Pareto Chart", "right": "Highlights the 'vital few' contributors" },
                { "id": "p3", "left": "Control Chart", "right": "Monitors process variation over time" },
                { "id": "p4", "left": "Check Sheet", "right": "Structured form for data collection" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "The '5S' approach in Work Environment Improvement (WEI) includes all EXCEPT:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sorting", "isCorrect": false },
                { "id": "b", "text": "Shining", "isCorrect": false },
                { "id": "c", "text": "Standardising", "isCorrect": false },
                { "id": "d", "text": "Spending", "isCorrect": true }
            ],
            "explanation": "The 5S are: Sorting, Setting (Set in order), Shining, Standardising, and Sustaining."
        }
    ]
});

8. Topic 08 Quiz: Financial Management

File: quizzes/topic-08-quiz.js
code JavaScript

registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Financial Management Quiz",
        "description": "Test understanding of public finance, documents, and budgeting processes.",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which document is used to contract a supplier for GOODS?",
            "points": 10,
            "options": [
                { "id": "a", "text": "LSO (Local Service Order)", "isCorrect": false },
                { "id": "b", "text": "LPO (Local Purchase Order)", "isCorrect": true },
                { "id": "c", "text": "Payment Voucher", "isCorrect": false },
                { "id": "d", "text": "Imprest Warrant", "isCorrect": false }
            ],
            "explanation": "LPO is for goods; LSO is for services."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "__b1__ expenditure refers to provisions made for the creation of new assets (e.g., building roads).",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["development"], "caseSensitive": false }
            ],
            "explanation": "Government expenditure is divided into Recurrent (ongoing) and Development (new assets)."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the term to its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Vote Book", "right": "Record of financial transactions/budget lines" },
                { "id": "p2", "left": "Imprest", "right": "Cash advance/float for duties" },
                { "id": "p3", "left": "AIE", "right": "Authority to Incur Expenditure" },
                { "id": "p4", "left": "MTEF", "right": "Three-year rolling budget framework" }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "An imprest must be surrendered within 48 hours after the task is completed.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Financial regulations stipulate surrender within 48 hours to ensure accountability."
        }
    ]
});

9. Topic 09 Quiz: Communication

File: quizzes/topic-09-quiz.js
code JavaScript

registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Communication Skills Quiz",
        "description": "Evaluate understanding of communication barriers, non-verbal cues, and active listening.",
        "topicId": "topic-09",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are examples of Non-Verbal Communication? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Body Language", "isCorrect": true },
                { "id": "b", "text": "Tone of voice", "isCorrect": true },
                { "id": "c", "text": "Written reports", "isCorrect": false },
                { "id": "d", "text": "Facial expressions", "isCorrect": true }
            ],
            "explanation": "Non-verbal includes how something is said (tone) and physical cues, but not the words themselves."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Using technical terms that a patient does not understand is an example of which barrier?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Slang", "isCorrect": false },
                { "id": "b", "text": "Jargon", "isCorrect": true },
                { "id": "c", "text": "Dialect", "isCorrect": false },
                { "id": "d", "text": "Physical barrier", "isCorrect": false }
            ],
            "explanation": "Jargon refers to technical language used by professionals that excludes others."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Paraphrasing involves repeating exactly what the person said, word for word.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Paraphrasing means putting what was said into your own words to check understanding."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ is the skill of being calm and firm, communicating needs clearly without being aggressive.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["assertion", "assertiveness"], "caseSensitive": false }
            ],
            "explanation": "Assertion is the middle ground between aggression and submission."
        }
    ]
});

10. Topic 10 Quiz: Policy & Reform

File: quizzes/topic-10-quiz.js
code JavaScript

registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Health Policy Quiz",
        "description": "Test knowledge of Kenya Vision 2030, MDGs, and health policy frameworks.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary aim of Kenya Vision 2030?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To reduce the health budget", "isCorrect": false },
                { "id": "b", "text": "To create a globally competitive and prosperous nation", "isCorrect": true },
                { "id": "c", "text": "To privatize all health services", "isCorrect": false },
                { "id": "d", "text": "To eliminate all communicable diseases by 2015", "isCorrect": false }
            ],
            "explanation": "Vision 2030 aims to transform Kenya into a middle-income country providing a high quality of life."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the MDG (Millennium Development Goal) to its health focus:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Goal 4", "right": "Reduce Child Mortality" },
                { "id": "p2", "left": "Goal 5", "right": "Improve Maternal Health" },
                { "id": "p3", "left": "Goal 6", "right": "Combat HIV/AIDS, Malaria, etc." }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __b1__ Mortality Rate is the probability of dying between birth and exactly one year of age.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["infant"], "caseSensitive": false }
            ],
            "explanation": "Infant mortality measures deaths in the first year; Under-five measures deaths in the first 5 years."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are objectives of the Kenya Health Policy 2012-2030? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Eliminate communicable conditions", "isCorrect": true },
                { "id": "b", "text": "Halt and reverse non-communicable conditions", "isCorrect": true },
                { "id": "c", "text": "Provide essential health care", "isCorrect": true },
                { "id": "d", "text": "Focus solely on urban hospitals", "isCorrect": false }
            ],
            "explanation": "The policy focuses on eliminating communicable diseases, halting non-communicable ones, and providing essential care equitably."
        }
    ]
});

11. Topic 11 Quiz: Law & Ethics

File: quizzes/topic-11-quiz.js
code JavaScript

registerQuiz("topic-11-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Law & Ethics Quiz",
        "description": "Assess understanding of legal liabilities, ethical theories, and patient rights.",
        "topicId": "topic-11",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the legal term to its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Negligence", "right": "Omission of duty a prudent person would fulfill" },
                { "id": "p2", "left": "Malpractice", "right": "Professional negligence / bad practice" },
                { "id": "p3", "left": "Battery", "right": "Unlawful touching without consent" },
                { "id": "p4", "left": "Libel", "right": "Written defamation" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which ethical theory determines the right action based on 'duty' rather than consequences?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Utilitarianism", "isCorrect": false },
                { "id": "b", "text": "Deontology", "isCorrect": true },
                { "id": "c", "text": "Consequentialism", "isCorrect": false },
                { "id": "d", "text": "Intuitionism", "isCorrect": false }
            ],
            "explanation": "Deontology (from Greek 'deon') focuses on moral duties and rules."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A document permitting an individual to appoint another person to make health care decisions if they become unable to do so is called a __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["durable power of attorney", "power of attorney"], "caseSensitive": false }
            ],
            "explanation": "A Durable Power of Attorney for healthcare designates an agent to act on the patient's behalf."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Information about a patient is considered 'Privileged Communication' and must be kept confidential with NO exceptions.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "While generally confidential, exceptions exist for reporting births, deaths, violent injuries, and certain communicable diseases."
        }
    ]
});

12. Topic 12 Quiz: Health Information Systems

File: quizzes/topic-12-quiz.js
code JavaScript

registerQuiz("topic-12-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-12-quiz",
    "metadata": {
        "title": "HIS Quiz",
        "description": "Test knowledge of HIS components, data sources, and the Kenyan system.",
        "topicId": "topic-12",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are the four key functions of a Health Information System? (Select 4)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Data generation", "isCorrect": true },
                { "id": "b", "text": "Compilation", "isCorrect": true },
                { "id": "c", "text": "Patient treatment", "isCorrect": false },
                { "id": "d", "text": "Analysis and synthesis", "isCorrect": true },
                { "id": "e", "text": "Communication and use", "isCorrect": true }
            ],
            "explanation": "The core functions are Generation, Compilation, Analysis, and Use."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the information type to its source:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Population based info", "right": "Census / Civil Registration" },
                { "id": "p2", "left": "Health service info", "right": "Service statistics / Medical records" },
                { "id": "p3", "left": "Special health info", "right": "Research / International organisations" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which body coordinates the National Health Information System in Kenya?",
            "points": 10,
            "options": [
                { "id": "a", "text": "KEMSA", "isCorrect": false },
                { "id": "b", "text": "NHIS Coordinating Committee (NHISCC)", "isCorrect": true },
                { "id": "c", "text": "National Hospital Insurance Fund", "isCorrect": false },
                { "id": "d", "text": "Kenya Red Cross", "isCorrect": false }
            ],
            "explanation": "The NHISCC provides technical advisory roles for health data management."
        }
    ]
});

13. Topic 13 Quiz: Project Management

File: quizzes/topic-13-quiz.js
code JavaScript

registerQuiz("topic-13-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-13-quiz",
    "metadata": {
        "title": "Project Management Quiz",
        "description": "Assess understanding of the project cycle, logical frameworks, and planning tools.",
        "topicId": "topic-13",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the phases of the Project Cycle:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Programming/Concept", "correctPosition": 1 },
                { "id": "i2", "text": "Identification/Formulation", "correctPosition": 2 },
                { "id": "i3", "text": "Appraisal", "correctPosition": 3 },
                { "id": "i4", "text": "Financing", "correctPosition": 4 },
                { "id": "i5", "text": "Implementation", "correctPosition": 5 },
                { "id": "i6", "text": "Evaluation", "correctPosition": 6 }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which tool sets out the intervention logic (Goal, Purpose, Outputs, Activities) and assumptions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Gantt Chart", "isCorrect": false },
                { "id": "b", "text": "Logical Framework (Logframe)", "isCorrect": true },
                { "id": "c", "text": "Fishbone Diagram", "isCorrect": false },
                { "id": "d", "text": "Flow Chart", "isCorrect": false }
            ],
            "explanation": "The Logframe Matrix is the standard tool for designing the logic of a project."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A __b1__ chart is a bar chart that illustrates a project schedule, showing task dependencies and timelines.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["gantt"], "caseSensitive": false }
            ],
            "explanation": "Gantt charts are used for scheduling tasks over time."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Summative evaluation is conducted during the project implementation to allow for corrections.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Formative evaluation happens during the project. Summative evaluation happens at the END."
        }
    ]
});

14. Topic 14 Quiz: Governance

File: quizzes/topic-14-quiz.js
code JavaScript

registerQuiz("topic-14-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-14-quiz",
    "metadata": {
        "title": "Health Governance Quiz",
        "description": "Test knowledge of stewardship, devolution, and the roles of National vs County governments.",
        "topicId": "topic-14",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the responsibility to the level of government:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "National Government", "right": "Health Policy and Standards" },
                { "id": "p2", "left": "County Government", "right": "Ambulance Services" },
                { "id": "p3", "left": "National Government", "right": "National Referral Hospitals" },
                { "id": "p4", "left": "County Government", "right": "County Health Facilities" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Who is the accounting officer for the County Department of Health?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Governor", "isCorrect": false },
                { "id": "b", "text": "The Chief Officer for Health", "isCorrect": true },
                { "id": "c", "text": "The County Director of Health", "isCorrect": false },
                { "id": "d", "text": "The Hospital Superintendent", "isCorrect": false }
            ],
            "explanation": "The Chief Officer is the authorized accounting officer; the Director is the technical advisor."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are classified as Semi-Autonomous Government Agencies (SAGAs) in health? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "KEMSA", "isCorrect": true },
                { "id": "b", "text": "NHIF", "isCorrect": true },
                { "id": "c", "text": "KEMRI", "isCorrect": true },
                { "id": "d", "text": "AMREF", "isCorrect": false }
            ],
            "explanation": "AMREF is an NGO. KEMSA, NHIF, and KEMRI are government SAGAs."
        }
    ]
});

15. Topic 15 Quiz: Entrepreneurship

File: quizzes/topic-15-quiz.js
code JavaScript

registerQuiz("topic-15-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-15-quiz",
    "metadata": {
        "title": "Entrepreneurship Quiz",
        "description": "Assess understanding of business forms, planning, and financing.",
        "topicId": "topic-15",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which business form has 'unlimited liability', meaning the owner is personally responsible for all debts?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Limited Company", "isCorrect": false },
                { "id": "b", "text": "Sole Proprietorship", "isCorrect": true },
                { "id": "c", "text": "Corporation", "isCorrect": false },
                { "id": "d", "text": "Cooperative", "isCorrect": false }
            ],
            "explanation": "In a sole proprietorship, there is no legal distinction between the owner and the business."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the '4 Ms' of a Business Plan:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Management", "isCorrect": true },
                { "id": "b", "text": "Marketing", "isCorrect": true },
                { "id": "c", "text": "Money", "isCorrect": true },
                { "id": "d", "text": "Money Machine", "isCorrect": true },
                { "id": "e", "text": "Manufacturing", "isCorrect": false }
            ],
            "explanation": "The 4 Ms are Management, Marketing, Money, and Money Machine (operations)."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "__b1__ financing involves selling a portion of ownership in the business to raise capital.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["equity"], "caseSensitive": false }
            ],
            "explanation": "Equity financing trades ownership (shares) for capital, unlike debt financing which is borrowing."
        }
    ]
});

16. Topic 16 Quiz: Disaster Management

File: quizzes/topic-16-quiz.js
code JavaScript

registerQuiz("topic-16-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-16-quiz",
    "metadata": {
        "title": "Disaster Management Quiz",
        "description": "Test knowledge of disaster cycles, triage, and risk reduction.",
        "topicId": "topic-16",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "Risk is calculated as the product of Hazard and __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["vulnerability", "v"], "caseSensitive": false }
            ],
            "explanation": "Risk = Hazard x Vulnerability."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Disaster Management Phase to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Mitigation", "right": "Measures to reduce impact before event" },
                { "id": "p2", "left": "Preparedness", "right": "Planning how to respond" },
                { "id": "p3", "left": "Response", "right": "Immediate actions during event" },
                { "id": "p4", "left": "Recovery", "right": "Returning community to normal" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the process of sorting patients based on severity of injury to prioritize treatment?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Evacuation", "isCorrect": false },
                { "id": "b", "text": "Triage", "isCorrect": true },
                { "id": "c", "text": "Assessment", "isCorrect": false },
                { "id": "d", "text": "Surveillance", "isCorrect": false }
            ],
            "explanation": "Triage allows medical teams to treat those who need it most urgently when resources are limited."
        }
    ]
});

17. Topic 17 Quiz: Monitoring & Evaluation

File: quizzes/topic-17-quiz.js
code JavaScript

registerQuiz("topic-17-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-17-quiz",
    "metadata": {
        "title": "M&E Quiz",
        "description": "Assess understanding of the M&E framework, indicators, and types of evaluation.",
        "topicId": "topic-17",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the levels of the M&E Framework (Logic Model):",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Inputs", "correctPosition": 1 },
                { "id": "i2", "text": "Processes", "correctPosition": 2 },
                { "id": "i3", "text": "Outputs", "correctPosition": 3 },
                { "id": "i4", "text": "Outcomes", "correctPosition": 4 },
                { "id": "i5", "text": "Impacts", "correctPosition": 5 }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which type of evaluation is conducted at the END of a project to judge its merit and worth?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Formative Evaluation", "isCorrect": false },
                { "id": "b", "text": "Summative Evaluation", "isCorrect": true },
                { "id": "c", "text": "Mid-term Review", "isCorrect": false },
                { "id": "d", "text": "Baseline Survey", "isCorrect": false }
            ],
            "explanation": "Summative evaluation looks at the final results. Formative evaluation happens during the project to improve it."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the indicator level to the example:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Output", "right": "Number of staff trained" },
                { "id": "p2", "left": "Outcome", "right": "Change in health behavior" },
                { "id": "p3", "left": "Impact", "right": "Reduction in mortality rate" }
            ]
        }
    ]
});

18. Topic 18 Quiz: Appendices (Financial Forms)

File: quizzes/topic-18-quiz.js
code JavaScript

registerQuiz("topic-18-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-18-quiz",
    "metadata": {
        "title": "Financial Forms Quiz",
        "description": "Test your knowledge of standard government financial forms.",
        "topicId": "topic-18",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-14T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which form is the 'Counter Requisition and Issue Voucher'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "S11", "isCorrect": true },
                { "id": "b", "text": "S12", "isCorrect": false },
                { "id": "c", "text": "S13", "isCorrect": false },
                { "id": "d", "text": "S20", "isCorrect": false }
            ],
            "explanation": "Form S11 is the standard requisition voucher."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which form is the 'Local Purchase Order' (LPO)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "S11", "isCorrect": false },
                { "id": "b", "text": "S20", "isCorrect": true },
                { "id": "c", "text": "S21", "isCorrect": false },
                { "id": "d", "text": "F01", "isCorrect": false }
            ],
            "explanation": "S20 is the LPO used for procuring goods."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which form is the 'Local Service Order' (LSO)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "S20", "isCorrect": false },
                { "id": "b", "text": "S21", "isCorrect": true },
                { "id": "c", "text": "S11", "isCorrect": false },
                { "id": "d", "text": "S13", "isCorrect": false }
            ],
            "explanation": "S21 is the LSO used for procuring services."
        }
    ]
});

Model
Thinking Thoughts

Expand to view model thoughts
chevron_right
info Google AI models may make mistakes, so double-check outputs.
Use Arrow Up and Arrow Down to select a turn, Enter to jump to it, and Escape to return to the chat.
google Grounding with Google Search
Response ready.
