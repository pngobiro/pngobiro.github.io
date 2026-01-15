# Medical Education Content Organization & Conversion System
## Version 1.2 - Updated December 17, 2025

### Version 1.2 Changes:
- **Sidebar Navigation Layout**: All index pages (root, college, subject) now use consistent sidebar navigation layout
- **Enhanced UI Design**: Modern sidebar with quick access links, dark mode toggle, and mobile-responsive hamburger menu
- **Removed Utilities from Display**: UNPROCESSED and NOT_RELEVANT folders are still created but not displayed in the UI
- **Subject-Level Assets**: Each subject now has its own `css/`, `images/`, and `js/` folders
- **Improved JavaScript**: Added `sidebar-navigation.js` for mobile navigation, theme toggle, and smooth scrolling

### Version 1.1 Changes:
- **Updated Directory Structure**: Changed from Course -> College -> Category -> Papers to College -> Subject -> Category structure
- **Simplified Subject Organization**: Removed course level, now directly organizing by College (KMTC, MKU, MMU) -> Subject (Clinical Engineering 1, 2, 3) -> Category (CATs, FQE, etc.)
- **Enhanced Automation Scripts**: Updated create_structure.sh to support the new hierarchy
- **Improved Customization**: Added interactive configuration options and separate config file for easy customization
- **Generic Subject Names**: Changed from specific course names to generic "Clinical Engineering 1, 2, 3" that can be easily customized

## Overview
This system organizes medical/health education materials into structured subject folders, converts PDF documents to MMD (Markdown Math) format, and generates accessible HTML websites with proper navigation and styling.

## Configuration
Before using this system, set up the following environment variables:

```bash
# Set the path to your Mathpix OCR server
export MATHPIX_OCR_SERVER_PATH="/path/to/your/mathpix-ocr-server/build/index.js"

# Example paths (customize for your system):
# export MATHPIX_OCR_SERVER_PATH="$HOME/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
# export MATHPIX_OCR_SERVER_PATH="/usr/local/bin/mathpix-ocr-server/build/index.js"
# export MATHPIX_OCR_SERVER_PATH="./mathpix-ocr-server/build/index.js"
```

Add this to your shell configuration file (`.bashrc`, `.zshrc`, etc.) to make it permanent.

## 1. Directory Structure

### 1.1 College-Subject-Category Organization (Version 1.2)

```
[Base Directory]/
├── UNPROCESSED/                    # Hidden from UI, for processing workflow
│   └── [files-to-be-processed].pdf
├── NOT_RELEVANT/                   # Hidden from UI, for rejected files
│   └── [irrelevant-files].pdf
├── [College Name]/
│   ├── [Subject Name]/
│   │   ├── css/
│   │   │   └── styles.css          # Subject-specific CSS
│   │   ├── images/
│   │   │   └── README.md           # Image organization guide
│   │   ├── js/
│   │   │   └── sidebar-navigation.js
│   │   ├── CATs/
│   │   │   ├── [year]-[session].html
│   │   │   ├── [year]-[session]_ocr.mmd
│   │   │   └── index.html
│   │   ├── FQE/
│   │   ├── END_OF_SEMESTER/
│   │   ├── END_OF_YEAR/
│   │   ├── SUPPLEMENTARY/
│   │   ├── UPGRADING/
│   │   ├── PRACTICAL/
│   │   └── index.html              # Sidebar layout
│   └── index.html                  # Sidebar layout
├── [Another College]/
├── styles.css                      # Base styles
├── js/
│   └── sidebar-navigation.js       # Root-level JS
└── index.html                      # Root index with sidebar
```

**Example Structure:**
```
medical-education-pastpapers/
├── UNPROCESSED/                    # Not displayed in UI
├── NOT_RELEVANT/                   # Not displayed in UI
├── KMTC/
│   ├── Clinical Engineering 1/
│   │   ├── css/styles.css
│   │   ├── images/
│   │   ├── js/sidebar-navigation.js
│   │   ├── CATs/
│   │   ├── FQE/
│   │   ├── END_OF_SEMESTER/
│   │   └── index.html
│   ├── Clinical Engineering 2/
│   └── Clinical Engineering 3/
│   └── index.html                  # College index with sidebar
├── MKU/
├── MMU/
├── styles.css
├── js/sidebar-navigation.js
└── index.html                      # Root index with sidebar
```

### 1.2 Past Paper Type Classification

**Primary Categories:**
- **CATs** - Continuous Assessment Tests (mid-semester tests)
- **FQE** - Final Qualifying Examinations
- **SUPPLEMENTARY** - Supplementary/Retake examinations
- **END_OF_SEMESTER** - End of semester examinations
- **END_OF_YEAR** - End of year examinations
- **PRACTICAL** - Practical examinations with marking schemes
- **NOT_RELEVANT** - Papers not relevant to current curriculum or misplaced files

**Identification Patterns:**
- CAT: Contains "CAT", "C.A.T", "Continuous Assessment"
- FQE: Contains "FQE", "Final Qualifying"
- SUPPLEMENTARY: Contains "SUPP", "Supplementary", "Retake"
- END_OF_SEMESTER: Contains "End of Semester", "EOS", "Semester Exam"
- END_OF_YEAR: Contains "End of Year", "EOY", "Annual Exam"
- PRACTICAL: Contains "Practical", "Lab Exam", "Marking Key"
- NOT_RELEVANT: Different subject code, outdated curriculum, unclear content

### 1.3 File Naming Conventions

**Past Papers:**
- Format: `[year][session]-[type].html`
- Examples:
  - `2023j-cat1.html` (July 2023 CAT 1)
  - `2022n-end-semester.html` (November 2022 End of Semester)
  - `2024j-fqe.html` (July 2024 FQE)
  - `2023-supplementary.html` (2023 Supplementary)

**MMD Files:**
- Format: `[year][session]-[type]_ocr.mmd`
- Example: `2023j-cat1_ocr.mmd`

**Notes:**
- Use descriptive kebab-case names
- Example: `community-health-comprehensive-notes.html`

### 1.4 File Processing Tracking System

**UNPROCESSED Folder:**
- All new PDF files start in `pastpapers/UNPROCESSED/`
- Files remain here until fully processed (MMD → HTML with Q&A)
- After processing, move to appropriate category folder

**Processing Status Tracking:**

Use `processing-status.json` in each subject's category folder:

```json
{
  "subject": "[Subject Name]",
  "last_updated": "[ISO 8601 timestamp]",
  "files": [
    {
      "filename": "[original-filename].pdf",
      "original_location": "UNPROCESSED/",
      "current_location": "[Category]/",
      "status": "[current status]",
      "processing_steps": {
        "pdf_received": "[timestamp]",
        "mmd_generated": "[timestamp or 'pending']",
        "mmd_reviewed": "[timestamp or 'pending']",
        "html_generated": "[timestamp or 'pending']",
        "qa_added": "[timestamp or 'pending']",
        "verified": "[timestamp or 'pending']"
      },
      "paper_type": "[Determined from filename or MMD analysis]",
      "year": "[Extract from MMD content]",
      "session": "[Extract from MMD content - February/July/September/November/etc]",
      "html_filename": "[year][session-code]-[type].html",
      "mmd_filename": "[filename]_ocr.mmd",
      "questions_count": "[Count from MMD analysis]",
      "sections": [
        {"name": "[Section name from MMD]", "questions": "[count]", "marks": "[total]"}
      ],
      "notes": "[Any observations from MMD review]"
    }
  ],
  "statistics": {
    "total_files": 0,
    "unprocessed": 0,
    "mmd_generated": 0,
    "mmd_reviewed": 0,
    "html_generated": 0,
    "qa_added": 0,
    "verified": 0,
    "completed": 0
  },
  "next_steps": ["[List of pending tasks based on current status]"]
}
```

**Important Notes:**
- **Subject varies**: Each subject has its own `processing-status.json`
- **Paper structure from MMD**: Analyze MMD content to determine:
  - Exam date and session
  - Number of sections
  - Question types (MCQ, Short Answer, Essay, Practical, etc.)
  - Mark allocation per section
  - Total questions and marks
- **Flexible sections**: Different subjects may have different exam structures
- **MMD analysis required**: Always review MMD before filling in metadata

**Status Values:**
- `unprocessed` - PDF in UNPROCESSED folder, not yet converted
- `mmd_generated` - MMD file created from PDF
- `mmd_reviewed` - MMD file manually reviewed and corrected
- `html_generated` - HTML file created with questions
- `qa_added` - Comprehensive answers added to HTML
- `verified` - Content verified, navigation tested
- `completed` - Fully processed, moved to category folder

**Workflow Checklist per File:**

```markdown
## Processing Checklist: [filename]

### Stage 1: Initial Processing
- [ ] PDF placed in UNPROCESSED folder
- [ ] Entry created in processing-status.json with basic info
- [ ] Initial paper type guess from filename (verify in Stage 3)
- [ ] Target category folder identified

### Stage 2: MMD Conversion
- [ ] Run OCR: `node [ocr-server-path] "[pdf]" > "[name]_ocr.mmd"`
- [ ] MMD file created successfully
- [ ] Update status to 'mmd_generated'
- [ ] MMD file size verified (not empty)
- [ ] Save timestamp in processing_steps.mmd_generated

### Stage 3: MMD Review & Analysis
- [ ] Open MMD file for review
- [ ] **Extract exam metadata from MMD content:**
  - [ ] Exam date (determine year and session)
  - [ ] Subject name (verify matches folder)
  - [ ] Paper type (CAT/FQE/SUPPLEMENTARY/etc)
  - [ ] Duration and time
  - [ ] Total marks
- [ ] **Analyze exam structure from MMD:**
  - [ ] Count total sections
  - [ ] Identify section types (MCQ/Short Answer/Essay/Practical/etc)
  - [ ] Count questions per section
  - [ ] Note marks allocation per section
  - [ ] Determine total question count
- [ ] **Fix content issues:**
  - [ ] Fix OCR errors (misrecognized characters)
  - [ ] Remove spurious characters
  - [ ] Verify mathematical equations
  - [ ] Check image URLs from Mathpix
  - [ ] Identify list patterns for semantic HTML
  - [ ] Note any ambiguous content
- [ ] **Update processing-status.json with MMD findings:**
  - [ ] year, session, paper_type
  - [ ] questions_count
  - [ ] sections array with details
  - [ ] html_filename (based on year/session)
- [ ] Update status to 'mmd_reviewed'
- [ ] Save timestamp in processing_steps.mmd_reviewed

### Stage 4: HTML Generation
- [ ] Create HTML file using appropriate template
- [ ] Add header with exam details (from MMD analysis)
- [ ] Add instructions section (from MMD)
- [ ] Extract and structure all questions from MMD
- [ ] Assign proper question IDs (question-1, question-2, etc)
- [ ] Add navigation (previous/next/home)
- [ ] Include all sections identified in Stage 3
- [ ] Update status to 'html_generated'
- [ ] Save timestamp in processing_steps.html_generated

### Stage 5: Answer Creation
- [ ] For each question, create comprehensive answer
- [ ] Use subject-specific knowledge (medical/health/technical)
- [ ] Ensure answer IDs match question IDs
- [ ] Verify mark allocation is appropriate
- [ ] Include formulas, calculations, diagrams as needed
- [ ] All questions have complete answers
- [ ] Update status to 'qa_added'
- [ ] Save timestamp in processing_steps.qa_added

### Stage 6: Verification
- [ ] Open HTML in browser
- [ ] Test all navigation links
- [ ] Verify dark mode toggle
- [ ] Test mobile responsiveness
- [ ] Check print styles
- [ ] Verify MathJax/equation rendering
- [ ] Test back-to-top button
- [ ] Compare with original PDF (100% content preservation)
- [ ] Verify all sections from MMD analysis are present
- [ ] Update status to 'verified'
- [ ] Save timestamp in processing_steps.verified

### Stage 7: Finalization
- [ ] Move PDF from UNPROCESSED to category folder
- [ ] Move MMD to category folder
- [ ] Ensure HTML is in category folder
- [ ] Update category index.html (add new paper entry)
- [ ] Update main pastpapers index.html (update counts)
- [ ] Update processing-status.json:
  - [ ] current_location to category folder
  - [ ] status to 'completed'
  - [ ] Recalculate statistics
- [ ] Update last_updated timestamp
- [ ] Add to next_steps if follow-up needed
```

**Key Principle:** Always analyze MMD content to determine paper structure. Do not assume structure based on subject - verify from actual exam content.

## 2. Structure Generation & Customization (Version 1.1)

### 2.1 Automated Structure Creation

Use the provided `create_structure.sh` script to generate the complete directory structure:

**Default Configuration:**
- **Colleges**: KMTC, MKU, MMU (easily customizable)
- **Subjects**: Clinical Engineering 1, Clinical Engineering 2, Clinical Engineering 3 (generic, customizable)
- **Categories**: CATs, END_OF_SEMESTER, END_OF_YEAR, FQE, SUPPLEMENTARY, UPGRADING, PRACTICAL
- **Base Folders**: UNPROCESSED, NOT_RELEVANT

### 2.2 Customization Options

**Method 1: Interactive Configuration**
```bash
chmod +x create_structure.sh
./create_structure.sh
# Choose option 2 for customization
```

**Method 2: Edit Configuration File**
Edit `structure_config.sh` to customize:
```bash
# Colleges/Institutions
COLLEGES=(
    "KMTC"
    "MKU" 
    "MMU"
    "UON"     # Add more as needed
    "JKUAT"
)

# Subjects (customize for your program)
SUBJECTS=(
    "Clinical Engineering 1"
    "Clinical Engineering 2"
    "Clinical Engineering 3"
    "Medical Engineering"      # Add more subjects
    "Biomedical Engineering"
)
```

### 2.3 Subject Customization Examples

**For Different Programs:**
- **Nursing**: "Fundamentals of Nursing", "Medical-Surgical Nursing", "Pediatric Nursing"
- **Clinical Medicine**: "Internal Medicine", "Surgery", "Pediatrics", "Obstetrics"
- **Pharmacy**: "Pharmacology", "Pharmaceutical Chemistry", "Clinical Pharmacy"
- **Laboratory Technology**: "Clinical Chemistry", "Hematology", "Microbiology"

## 3. Index Page Designs (Version 1.2 - Sidebar Layout)

This section provides complete HTML templates for each level of the hierarchy. All templates now use a consistent sidebar navigation layout with:
- Mobile-responsive hamburger menu
- Dark mode toggle
- Quick access navigation links
- Smooth scrolling between sections

### 3.1 Root Index Template (Base Directory)

**File**: `index.html` (in base directory)
**Purpose**: Main landing page with sidebar navigation to all colleges

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Education Past Papers Archive</title>
    <meta name="description" content="Comprehensive collection of past examination papers for medical and health education programs">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>
    
    <div class="layout-container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Past Papers</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <a href="#overview" class="nav-item active">
                    <i class="fas fa-home"></i>
                    <span>Overview</span>
                </a>
                <a href="#colleges" class="nav-item">
                    <i class="fas fa-university"></i>
                    <span>Browse Colleges</span>
                </a>
                
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
                    <a href="KMTC/index.html" class="nav-item sub-item">
                        <i class="fas fa-hospital"></i>
                        <span>KMTC Papers</span>
                    </a>
                    <a href="MKU/index.html" class="nav-item sub-item">
                        <i class="fas fa-mountain"></i>
                        <span>MKU Papers</span>
                    </a>
                    <a href="MMU/index.html" class="nav-item sub-item">
                        <i class="fas fa-desktop"></i>
                        <span>MMU Papers</span>
                    </a>
                </div>
            </nav>
            
            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>
        
        <main class="main-content">
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge fqe">ARCHIVE</span>
                    <span class="date">
                        <i class="fas fa-graduation-cap"></i> Medical Education
                    </span>
                </div>
                <h1>Past Papers Archive</h1>
                <p class="subtitle">Comprehensive Collection for Medical & Health Education Programs</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> Welcome to the Archive</h2>
                <p>Access organized past examination papers from leading medical education institutions.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">3</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Colleges</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">9+</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Subjects</div>
                    </div>
                </div>
            </section>
            
            <section id="colleges" class="category-section">
                <h2><i class="fas fa-university"></i> Select Your College</h2>
                <div class="paper-grid">
                    <!-- College cards here - see create_structure.sh for dynamic generation -->
                </div>
            </section>
            
            <footer>
                <p><strong>Medical Education Past Papers Archive</strong></p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Medical Education Content Management System</p>
            </footer>
        </main>
    </div>
    
    <script src="js/sidebar-navigation.js"></script>
</body>
</html>
```

### 3.2 College Index Template (Sidebar Layout)

**File**: `[College]/index.html` (e.g., `KMTC/index.html`)
**Purpose**: Lists all subjects for a college with sidebar navigation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KMTC - Medical Education Papers</title>
    <meta name="description" content="Past examination papers for Kenya Medical Training College Clinical Engineering Program">
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>
    
    <div class="layout-container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-hospital"></i>
                    <span>KMTC</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#overview" class="nav-item active">
                    <i class="fas fa-info-circle"></i>
                    <span>Overview</span>
                </a>
                <a href="#subjects" class="nav-item">
                    <i class="fas fa-book"></i>
                    <span>Browse Subjects</span>
                </a>
                
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
                    <a href="Clinical Engineering 1/index.html" class="nav-item sub-item">
                        <i class="fas fa-cogs"></i>
                        <span>Clinical Engineering 1</span>
                    </a>
                    <a href="Clinical Engineering 2/index.html" class="nav-item sub-item">
                        <i class="fas fa-microchip"></i>
                        <span>Clinical Engineering 2</span>
                    </a>
                    <a href="Clinical Engineering 3/index.html" class="nav-item sub-item">
                        <i class="fas fa-stethoscope"></i>
                        <span>Clinical Engineering 3</span>
                    </a>
                </div>
            </nav>
            
            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>
        
        <main class="main-content">
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge fqe">KMTC</span>
                    <span class="date">
                        <i class="fas fa-university"></i> Kenya Medical Training College
                    </span>
                </div>
                <h1>Clinical Engineering Program</h1>
                <p class="subtitle">Past Papers Collection - Diploma in Medical Engineering</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> About This Collection</h2>
                <p>Access all Clinical Engineering past examination papers from Kenya Medical Training College.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">3</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Subjects</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">7</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Categories</div>
                    </div>
                </div>
            </section>
            
            <section id="subjects" class="category-section">
                <h2><i class="fas fa-book"></i> Select Your Subject</h2>
                <div class="paper-grid">
                    <!-- Subject cards dynamically generated - see create_structure.sh -->
                </div>
            </section>
            
            <footer>
                <p><strong>KMTC Clinical Engineering Past Papers</strong></p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Medical Education Content Management System</p>
            </footer>
        </main>
    </div>
    
    <script src="../js/sidebar-navigation.js"></script>
</body>
</html>
```

### 3.3 Subject Index Template (Sidebar Layout)

**File**: `[College]/[Subject]/index.html` (e.g., `KMTC/Clinical Engineering 1/index.html`)
**Purpose**: Lists all exam categories for a subject with sidebar navigation

Note: The subject index template follows the same sidebar pattern. See `create_structure.sh` for the complete implementation with dynamic category links in the sidebar.

### 3.4 Key Sidebar Layout Components

**Mobile Navigation Toggle:**
```html
<button class="mobile-nav-toggle" aria-label="Toggle Navigation">
    <i class="fas fa-bars"></i>
</button>
<div class="sidebar-backdrop"></div>
                        <div class="card-body">
                            <p>Files that don't belong to current curriculum</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Medical Education Archive</h4>
                    <p>Comprehensive collection of past examination papers for medical and health education programs.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="KMTC/index.html">KMTC Papers</a></li>
                        <li><a href="MKU/index.html">MKU Papers</a></li>
                        <li><a href="MMU/index.html">MMU Papers</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="UNPROCESSED/">Upload Papers</a></li>
                        <li><a href="#help">Help & Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Medical Education Content Management System</p>
            </div>
        </footer>
    </div>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
```

## 4. PDF to MMD Conversion Process

### 4.1 OCR Command

```bash
# Single file conversion
node $MATHPIX_OCR_SERVER_PATH "[full-path-to-pdf]" > "[output-name]_ocr.mmd"

# Example for past paper
node $MATHPIX_OCR_SERVER_PATH "/path/to/2023-july-cat1.pdf" > "2023j-cat1_ocr.mmd"

# Example for notes
node $MATHPIX_OCR_SERVER_PATH "/path/to/community-health-notes.pdf" > "community-health-notes_ocr.mmd"

# Set the OCR server path (customize for your system)
export MATHPIX_OCR_SERVER_PATH="/path/to/your/mathpix-ocr-server/build/index.js"
```

### 4.2 Handling Mixed MMD Files (Multiple Papers/Categories in One PDF)

**CRITICAL: Always Read and Analyze MMD Content First**

A single PDF/MMD may contain:
- **Multiple years** (2020, 2021, 2022 papers)
- **Multiple categories** (CATs, FQE, quizzes, practice questions)
- **Mixed types** (CAT 1 from 2020, FQE from 2021, CAT 2 from 2022)

**DO NOT assume** - Always analyze the actual MMD content to understand what's inside.

**Analysis Workflow:**

**Step 1: Read the MMD File**
```bash
# Open and read the entire MMD
less filename.mmd
# or
cat filename.mmd | more
```

**Step 2: Identify All Papers/Sections**

Search for identifying markers:
```bash
# Find exam headers
grep -n "FINAL QUALIFYING\|CAT\|CONTINUOUS ASSESSMENT\|QUIZ\|PRACTICE" filename.mmd

# Find dates
grep -n "DATE:" filename.mmd
```

**Step 3: Determine Category for Each Paper**

Look for keywords in MMD content:
- **FQE**: "FINAL QUALIFYING EXAMINATION"
- **CATs**: "CAT", "C.A.T", "CONTINUOUS ASSESSMENT TEST"
- **Quizzes**: "QUIZ", "QUIZZES", "PRACTICE QUESTIONS"
- **End of Semester**: "END OF SEMESTER", "SEMESTER EXAM"
- **Supplementary**: "SUPPLEMENTARY", "RETAKE", "SUPP"

**Step 4: Extract Metadata for Each Paper**

For each identified paper, note:
- **Category** (FQE/CAT/Quiz/etc.)
- **Year** (from DATE field)
- **Session** (February/July/September/November)
- **Line numbers** (start and end)
- **Question structure** (MCQ count, short answer count, etc.)

**Example Analysis:**

```
MMD File: medical-demo-mixed.mmd (1640 lines)

Analysis Results:
1. Lines 1-312: 
   - Type: FQE
   - Date: February 12, 2020
   - Filename: 2020j-fqe_ocr.mmd
   - Category folder: FQE/

2. Lines 313-570:
   - Type: FQE  
   - Date: February 16, 2022
   - Filename: 2022j-fqe_ocr.mmd
   - Category folder: FQE/

3. Lines 571-880:
   - Type: FQE
   - Date: September 29, 2021
   - Filename: 2021s-fqe_ocr.mmd
   - Category folder: FQE/

4. Lines 881-1130:
   - Type: CAT 1
   - Date: March 2023
   - Filename: 2023-cat1_ocr.mmd
   - Category folder: CATs/

5. Lines 1131-1400:
   - Type: Quiz/Practice
   - Date: Unknown
   - Filename: practice-questions_ocr.mmd
   - Category folder: NOT_RELEVANT/ or CATs/
```

**Step 5: Split Based on Analysis**

```bash
# Split into separate files based on category AND year
sed -n '1,312p' mixed.mmd > FQE/2020j-fqe_ocr.mmd
sed -n '313,570p' mixed.mmd > FQE/2022j-fqe_ocr.mmd
sed -n '571,880p' mixed.mmd > FQE/2021s-fqe_ocr.mmd
sed -n '881,1130p' mixed.mmd > CATs/2023-cat1_ocr.mmd
sed -n '1131,1400p' mixed.mmd > NOT_RELEVANT/practice-questions_ocr.mmd
```

**Step 6: Update processing-status.json**

For better tracking, promote split files to top-level entries in the `files` array and mark the original file as "split".

```json
{
  "files": [
    {
      "filename": "medical-demo-mixed.pdf",
      "status": "split",
      "notes": "Contains 5 different papers - split into separate MMD files. See individual entries below.",
      "split_files": [
        "2020j-fqe_ocr.mmd",
        "2022j-fqe_ocr.mmd",
        "2021s-fqe_ocr.mmd",
        "2023-cat1_ocr.mmd",
        "practice-questions_ocr.mmd"
      ]
    },
    {
      "filename": "2020j-fqe_ocr.mmd",
      "original_location": "FQE/medical-demo-mixed.mmd",
      "status": "html_generated",
      "paper_type": "FQE",
      "year": "2020",
      "session": "February",
      "html_filename": "2020j-fqe.html",
      "notes": "Generated from split MMD"
    },
    {
      "filename": "2022j-fqe_ocr.mmd",
      "original_location": "FQE/medical-demo-mixed.mmd",
      "status": "mmd_reviewed",
      "paper_type": "FQE",
      "year": "2022",
      "session": "February",
      "notes": "Generated from split MMD"
    }
    // Add entries for other split files...
  ]
}
```
      "session": "unknown"
    },
    {
      "mmd": "practice-questions_ocr.mmd",
      "category": "NOT_RELEVANT",
      "year": "unknown",
      "session": "unknown"
    }
  ]
}
```

**Handling Papers from Other Courses:**

If you find a paper belonging to a **different course** (e.g., a Nursing paper inside a Health Records PDF):

1. **Identify**: Note the course name (e.g., "Diploma in Nursing") and subject.
2. **Split**: Extract it to a separate MMD file.
3. **Move**: Place it in the `NOT_RELEVANT` folder.
4. **Name Descriptively**: Use the format `[Course]-[Subject]-[Year]-[Type].mmd`.
   - Example: `Nursing-Pharmacology-2021-FQE.mmd`
5. **Note**: Update `processing-status.json` with a note so it can be moved to the correct course folder later.

**Key Principles:**

1. **Read First, Organize Later** - Never assume content based on filename
2. **Analyze Category** - Determine FQE/CAT/Quiz/etc. from actual content
3. **Extract Dates** - Get year and session from MMD content, not filename
4. **Split by Category** - Place split files in correct category folders
5. **Document Everything** - Update processing-status.json with findings

**Common Patterns to Look For:**

- **Multiple FQEs from different years** → Split to FQE folder
- **CATs mixed with FQE** → Split to respective folders
- **Practice questions/quizzes** → Determine if CATs or NOT_RELEVANT
- **Papers from other courses** → Split to NOT_RELEVANT with descriptive name
- **Revision materials** → Usually NOT_RELEVANT
- **Marking schemes** → PRACTICAL folder

### 3.3 Batch Processing Script

```bash
#!/bin/bash
# batch_convert_to_mmd.sh

OCR_SERVER="${MATHPIX_OCR_SERVER_PATH:-/path/to/your/mathpix-ocr-server/build/index.js}"
INPUT_DIR="$1"
OUTPUT_DIR="$2"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Process all PDFs
find "$INPUT_DIR" -name "*.pdf" -type f | while read pdf_file; do
    filename=$(basename "$pdf_file" .pdf)
    output_file="$OUTPUT_DIR/${filename}_ocr.mmd"
    
    echo "Processing: $pdf_file"
    node "$OCR_SERVER" "$pdf_file" > "$output_file"
    echo "Created: $output_file"
done

echo "Batch conversion complete!"
```

### 3.3 Post-OCR Manual Review

**Required corrections:**
1. Fix OCR errors (misrecognized characters)
2. Remove spurious characters
3. Verify mathematical equations
4. Check image URLs from Mathpix
5. Identify list patterns for semantic HTML conversion
6. Note any ambiguous content for clarification

## 4. HTML File Organization

### 4.1 Organizing HTML Files by Exam Type

After generating HTML files from MMD, organize them into their respective exam type folders:

**File Placement:**
```
pastpapers/
├── CATs/
│   ├── 2023j-cat1.html
│   ├── 2023j-cat2.html
│   ├── 2022n-cat1.html
│   └── index.html
├── FQE/
│   ├── 2023j-fqe.html
│   ├── 2022n-fqe.html
│   ├── 2021s-fqe.html
│   └── index.html
├── SUPPLEMENTARY/
│   ├── 2023-supplementary.html
│   └── index.html
├── END_OF_SEMESTER/
│   └── index.html
├── END_OF_YEAR/
│   └── index.html
├── PRACTICAL/
│   └── index.html
├── index.html (main index pointing to all exam types)
├── styles.css
└── js/
    └── sidebar-navigation.js
```

**Index File Hierarchy:**

1. **Main Index** (`pastpapers/index.html`) - Points to all exam type indexes
2. **Exam Type Index** (`pastpapers/FQE/index.html`) - Lists all FQE papers
3. **Individual Paper** (`pastpapers/FQE/2023j-fqe.html`) - Actual exam with Q&A

### 4.2 Main Past Papers Index Structure

The main `pastpapers/index.html` should:
- Display category cards for each exam type
- Show count of papers in each category
- Link to category-specific index pages
- Provide search/filter functionality

**Navigation Flow:**
```
Main Index (pastpapers/index.html)
    ↓
Category Index (pastpapers/FQE/index.html)
    ↓
Individual Paper (pastpapers/FQE/2023j-fqe.html)
```

## 5. Past Paper HTML Conversion

### 4.1 Base HTML Template for Past Papers

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SUBJECT] - [TYPE] [MONTH] [YEAR] | KNEC Past Papers</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
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
    <!-- Mobile Navigation Toggle -->
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>

    <div class="layout-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-graduation-cap"></i>
                    <span>[SUBJECT]</span>
                </div>
            </div>

            <nav class="sidebar-nav">
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
                <a href="index.html" class="nav-item active">
                    <i class="fas fa-file-alt"></i>
                    <span>[TYPE] Papers</span>
                </a>
                <div class="nav-group">
                    <div class="nav-group-title">Sections</div>
                    <a href="#section-1" class="nav-item sub-item">
                        <i class="fas fa-list-ol"></i>
                        <span>Section 1: MCQs</span>
                    </a>
                    <a href="#section-2" class="nav-item sub-item">
                        <i class="fas fa-pen"></i>
                        <span>Section 2: Short Answer</span>
                    </a>
                    <a href="#section-3" class="nav-item sub-item">
                        <i class="fas fa-align-left"></i>
                        <span>Section 3: Long Answer</span>
                    </a>
                </div>
            </nav>

            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge fqe">[TYPE]</span>
                    <span class="date"><i class="far fa-calendar"></i> [DATE]</span>
                    <span class="time"><i class="far fa-clock"></i> [DURATION]</span>
                </div>
                <h1>[SUBJECT]</h1>
                <p class="subtitle">[TYPE] - [DIPLOMA/COURSE NAME]</p>

                <div class="paper-instructions">
                    <h3><i class="fas fa-info-circle"></i> Instructions</h3>
                    <ul>
                        <!-- Extract from MMD -->
                    </ul>
                </div>
            </header>

            <!-- Questions will go here -->
        </main>
    </div>

    <script src="../js/sidebar-navigation.js"></script>
</body>
</html>
```

### 4.2 Question Structure (Simultaneous Q&A Creation)

> [!IMPORTANT]
> **COMPLETE QUESTION INCLUSION REQUIRED**
> - Every single question from the MMD file MUST be included in the HTML
> - Never use notes like "Questions 6-40 omitted for brevity"
> - Each question MUST have a comprehensive, detailed answer
> - No placeholders, no "to be added later" notes
> - This is a complete, production-ready document

**CRITICAL: Always create questions AND answers together in a single pass.**

**Section Structure:**
```html
<section id="section-1" class="exam-section">
    <div class="section-header">
        <h2>Section 1: Multiple Choice Questions</h2>
        <span class="marks">40 Marks</span>
    </div>

    <div class="question-list">
        <!-- Questions go here -->
    </div>
</section>
```

**For Multiple Choice Questions:**
```html
<div class="question-card">
    <div class="question-header">
        <span class="q-number">1.</span>
        <div class="q-text">Natural increase in human population refers to:</div>
    </div>
    <div class="options-grid">
        <div class="option">a) The sum of the number of births and number of deaths</div>
        <div class="option">b) The difference between the number of births and the number of deaths</div>
        <div class="option">c) The difference between population size at given time A and time B</div>
        <div class="option">d) The number of children born naturally without planning</div>
    </div>
    <div class="answer-box">
        <details>
            <summary>Show Answer</summary>
            <div class="answer-content">
                <p><strong>Correct Answer:</strong> b) The difference between the number of births and the number of deaths</p>
                <p>Natural increase refers to the difference between births and deaths in a population, excluding migration. It is calculated as: Natural Increase = Births - Deaths</p>
            </div>
        </details>
    </div>
</div>
```

**For Short Answer Questions:**
```html
<div class="question-card">
    <div class="question-header">
        <span class="q-number">1.</span>
        <div class="q-text">List the factors that cause population growth (5 marks)</div>
    </div>
    <div class="answer-box">
        <details>
            <summary>Show Answer</summary>
            <div class="answer-content">
                <p><strong>Answer:</strong></p>
                <p>Factors that cause population growth include:</p>
                <ol>
                    <li><strong>High Birth Rate:</strong> When births exceed deaths, population increases.</li>
                    <li><strong>Improved Healthcare:</strong> Better medical facilities reduce mortality rates.</li>
                    <li><strong>Immigration:</strong> People moving into an area increase population size.</li>
                    <li><strong>Increased Lifespan:</strong> Better living conditions lead to longer lives.</li>
                    <li><strong>Cultural Factors:</strong> Societies that value large families tend to have higher birth rates.</li>
                </ol>
            </div>
        </details>
    </div>
</div>
```

**For Questions with Images:**
```html
<div class="question-card">
    <div class="question-header">
        <span class="q-number">3.</span>
        <div class="q-text">The chart below shows the time reference for mortality in childhood and infancy. Indicate the names given to the periods shown. (5 marks)</div>
    </div>
    <div class="question-image">
        <img src="images/2020j-fqe-fig1.jpg" alt="Mortality time reference chart">
    </div>
    <div class="answer-box">
        <details>
            <summary>Show Answer</summary>
            <div class="answer-content">
                <p><strong>Answer:</strong></p>
                <ol>
                    <li><strong>Perinatal Mortality:</strong> 28 weeks gestation to 7 days after birth</li>
                    <li><strong>Neonatal Mortality:</strong> Birth to 28 days</li>
                    <li><strong>Post-neonatal Mortality:</strong> 28 days to 1 year</li>
                    <li><strong>Infant Mortality:</strong> Birth to 1 year</li>
                    <li><strong>Child Mortality:</strong> 1 year to 5 years</li>
                    <li><strong>Under-5 Mortality:</strong> Birth to 5 years</li>
                </ol>
            </div>
        </details>
    </div>
</div>
```

**For Questions with Tables:**
```html
<div class="question-card">
    <div class="question-header">
        <span class="q-number">1.</span>
        <div class="q-text">
            <p>The following data of a given country 'X' shows the age distribution. Use the data to answer the questions below.</p>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Age group</th>
                            <th>Male</th>
                            <th>Female</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0-4</td>
                            <td>1,550,000</td>
                            <td>1,575,000</td>
                        </tr>
                        <!-- Additional rows -->
                    </tbody>
                </table>
            </div>
            <p>a) Present the population of country X in a population pyramid using percentages.</p>
            <p>b) Calculate the age dependency ratio.</p>
            <p>c) Calculate sex ratio of the population.</p>
        </div>
    </div>
    <div class="answer-box">
        <details>
            <summary>Show Answer</summary>
            <div class="answer-content">
                <p><strong>Answer:</strong></p>
                <p><strong>b) Age Dependency Ratio:</strong></p>
                <p>Formula: $\frac{\text{Population } < 15 + \text{Population } > 64}{\text{Population } 15-64} \times 100$</p>
                <!-- Full calculation steps -->
            </div>
        </details>
    </div>
</div>
```

### 4.3 Answer Creation Guidelines

> [!WARNING]
> **NO OMISSIONS ALLOWED**
> - Create a comprehensive answer for EVERY question
> - Do not skip questions "for brevity"
> - Do not use placeholder answers like "Answer here" or "TBD"
> - Each answer must be complete, accurate, and educational

**For each question, immediately create comprehensive answers using:**

1. **Medical/Health Knowledge Base**
   - Apply domain expertise to provide accurate answers
   - Use standard medical terminology
   - Reference clinical guidelines where applicable

2. **Answer Structure Elements**
   - `<p class="answer-intro">` - Context/introduction
   - `<p><strong>(a)</strong>` - Part-by-part answers
   - `<ul>` or `<ol>` - Lists for multiple points
   - `<p class="key-point">` - Important notes or assumptions
   - `<figure class="answer-figure">` - Diagrams (ASCII art)
   - `<p class="answer-conclusion">` - Summary

3. **Handling Ambiguity**
   - If OCR data is unclear, make reasonable assumptions
   - Document assumptions using `.key-point` class
   - Base answers on standard medical/health principles

4. **Verification Checklist**
   - ✓ Answer addresses all question parts
   - ✓ Mark allocation is appropriate
   - ✓ Medical accuracy verified
   - ✓ IDs match (question-X, answer-X)
   - ✓ No placeholder text remains
   - ✓ ALL questions from MMD are answered
1.  **Medical/Health Knowledge Base**
    -   Apply domain expertise to provide accurate answers
    -   Use standard medical terminology
    -   Reference clinical guidelines where applicable

2.  **Answer Structure Elements**
    -   `<p class="answer-intro">` - Context/introduction
    -   `<p><strong>(a)</strong>` - Part-by-part answers
    -   `<ul>` or `<ol>` - Lists for multiple points
    -   `<p class="key-point">` - Important notes or assumptions
    -   `<figure class="answer-figure">` - Diagrams (ASCII art)
    -   `<p class="answer-conclusion">` - Summary

3.  **Handling Ambiguity**
    -   If OCR data is unclear, make reasonable assumptions
    -   Document assumptions using `.key-point` class
    -   Base answers on standard medical/health principles

4.  **Verification Checklist**
    -   ✓ Answer addresses all question parts
    -   ✓ Mark allocation is appropriate
    -   ✓ Medical accuracy verified
    -   ✓ IDs match (question-X, answer-X)
    -   ✓ No placeholder text remains

### 5.4 Image Handling

If the MMD file contains images (e.g., charts, diagrams, anatomy figures):

1.  **Use the Automation Script**:
    -   Use the provided `download_images.sh` script (see Section 9.3).
    -   Run: `bash download_images.sh` (ensure you configure the script or pass arguments if modified).
    -   This will automatically download all images found in the MMD to an `assets/images` or specified folder.

2.  **Verify Images**:
    -   Check the output directory.
    -   Ensure images are named sequentially (e.g., `[ID]g-[PageNum]-[SeqNum].jpg`).

3.  **Embed in HTML**:
    -   Use standard `<img>` tag.
    -   Path: `images/filename.jpg` (move images to your HTML's image folder if different).
    -   Add descriptive `alt` text.

```html
<div class="question-image">
    <img src="images/2020-feb-fqe-fig1.jpg" alt="Population Pyramid for Country X">
</div>
```

## 6. Past Papers Index Generation

### 6.1 Category Index Template (e.g., FQE/index.html)

Each past paper category needs a dedicated `index.html` that lists all papers in that category:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SUBJECT] - [CATEGORY] Past Papers | [INSTITUTION]</title>
    <meta name="description" content="[CATEGORY] past papers for [SUBJECT] - [PROGRAM]">
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Mobile Navigation Toggle -->
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>

    <div class="layout-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-graduation-cap"></i>
                    <span>[SUBJECT]</span>
                </div>
            </div>

            <nav class="sidebar-nav">
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>All Papers</span>
                </a>
                <a href="index.html" class="nav-item active">
                    <i class="fas fa-file-alt"></i>
                    <span>[CATEGORY] Papers</span>
                </a>
                <div class="nav-group">
                    <div class="nav-group-title">Available Years</div>
                    <!-- Add year links dynamically -->
                    <a href="#year-2024" class="nav-item sub-item">
                        <i class="far fa-calendar"></i>
                        <span>2024</span>
                    </a>
                </div>
            </nav>

            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Header -->
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge [badge-class]">[CATEGORY]</span>
                    <span class="date"><i class="fas fa-graduation-cap"></i> [Category Description]</span>
                </div>
                <h1>[SUBJECT] [CATEGORY] Papers</h1>
                <p class="subtitle">[Full category description]</p>

                <div class="paper-instructions">
                    <h3><i class="fas fa-info-circle"></i> About [CATEGORY] Papers</h3>
                    <ul>
                        <li>[Information about this exam type]</li>
                        <li>[Paper structure]</li>
                        <li>[Duration and marks]</li>
                    </ul>
                </div>
            </header>

            <!-- Papers by Year -->
            <section id="year-2024" class="exam-section">
                <div class="section-header">
                    <h2><i class="far fa-calendar-alt"></i> 2024 Examinations</h2>
                    <span class="marks">[N] Papers</span>
                </div>

                <div class="question-list">
                    <div class="question-card">
                        <div class="question-header">
                            <span class="q-number"><i class="fas fa-file-alt"></i></span>
                            <div class="q-text">
                                <h3 style="margin: 0 0 0.5rem 0;">[Month] 2024 [CATEGORY]</h3>
                                <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.875rem; color: var(--text-secondary);">
                                    <span><i class="far fa-calendar"></i> [Date]</span>
                                    <span><i class="far fa-clock"></i> [Duration]</span>
                                    <span><i class="fas fa-award"></i> [Total Marks]</span>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 1rem 0;">
                            <p><strong>Paper Structure:</strong></p>
                            <div class="options-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
                                <div class="option" style="cursor: default;">
                                    <i class="fas fa-list-ol"></i> [N] MCQs ([N] marks)
                                </div>
                                <div class="option" style="cursor: default;">
                                    <i class="fas fa-pen"></i> [N] Short Answer ([N] marks)
                                </div>
                                <div class="option" style="cursor: default;">
                                    <i class="fas fa-align-left"></i> [N] Long Answer ([N] marks)
                                </div>
                            </div>
                        </div>
                        <div class="actions">
                            <a href="[year][session]-[type].html" class="btn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                <i class="fas fa-eye"></i> View Paper & Answers
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer style="background: var(--bg-card); border-top: 1px solid var(--border-light); padding: 2rem; text-align: center; color: var(--text-secondary); margin-top: 3rem; border-radius: var(--radius-xl);">
                <p style="margin-bottom: 0.5rem;"><strong>[SUBJECT] [CATEGORY] Papers</strong></p>
                <p style="margin-bottom: 0.5rem;">[PROGRAM] | [INSTITUTION]</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© [YEAR] [EXAMINATION BODY]</p>
            </footer>
        </main>
    </div>

    <script src="../js/sidebar-navigation.js"></script>
</body>
</html>
```

### 6.2 Main Past Papers Index (pastpapers/index.html)

The main landing page that provides overview and navigation to all exam categories:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SUBJECT] - Past Papers Archive | [INSTITUTION]</title>
    <meta name="description" content="Comprehensive collection of [SUBJECT] past examination papers for [PROGRAM] students at [INSTITUTION]">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Mobile Navigation Toggle -->
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>

    <div class="layout-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-graduation-cap"></i>
                    <span>[SUBJECT]</span>
                </div>
            </div>

            <nav class="sidebar-nav">
                <a href="#overview" class="nav-item active">
                    <i class="fas fa-home"></i>
                    <span>Overview</span>
                </a>
                <a href="#categories" class="nav-item">
                    <i class="fas fa-folder-open"></i>
                    <span>Browse by Type</span>
                </a>
                <a href="#recent" class="nav-item">
                    <i class="fas fa-clock"></i>
                    <span>Recent Papers</span>
                </a>
                <a href="#topics" class="nav-item">
                    <i class="fas fa-book"></i>
                    <span>Topics Covered</span>
                </a>
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
                    <a href="FQE/index.html" class="nav-item sub-item">
                        <i class="fas fa-file-alt"></i>
                        <span>FQE Papers</span>
                    </a>
                    <a href="CATs/index.html" class="nav-item sub-item">
                        <i class="fas fa-edit"></i>
                        <span>CAT Papers</span>
                    </a>
                </div>
            </nav>

            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Hero Header -->
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge [badge-class]">[INSTITUTION-ABBREVIATION]</span>
                    <span class="date"><i class="fas fa-university"></i> [INSTITUTION FULL NAME]</span>
                </div>
                <h1>[SUBJECT]</h1>
                <p class="subtitle">Past Papers Collection - [PROGRAM]</p>
            </header>

            <!-- Overview Section with Statistics -->
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> Comprehensive Past Papers Archive</h2>
                <p>Access all [SUBJECT] past examination papers organized by type. Study the key concepts through comprehensive questions and detailed answers.</p>
                
                <!-- Statistics Cards -->
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">[N]+</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Available Papers</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">[N]+</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Practice Questions</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color);">[N]</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Years Covered</div>
                    </div>
                </div>
            </section>

            <!-- Browse by Category -->
            <section id="categories" class="category-section">
                <h2><i class="fas fa-folder-open"></i> Browse by Exam Type</h2>
                <div class="paper-grid">
                    <!-- Category Cards -->
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">[CATEGORY 1 FULL NAME]</h3>
                            <span class="badge [badge-class]">[CATEGORY 1]</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-graduation-cap"></i> [Category 1 description]</p>
                            <p><strong><i class="fas fa-file-alt"></i> Available Papers: [N]</strong></p>
                            <p><i class="fas fa-calendar-alt"></i> Years: [Year Range]</p>
                            <p><i class="fas fa-award"></i> [Additional info]</p>
                        </div>
                        <div class="actions">
                            <a href="[CATEGORY1]/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse [CATEGORY 1] Papers
                            </a>
                        </div>
                    </div>

                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">[CATEGORY 2 FULL NAME]</h3>
                            <span class="badge [badge-class]">[CATEGORY 2]</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-edit"></i> [Category 2 description]</p>
                            <p><strong><i class="fas fa-file-alt"></i> Available Papers: [N]</strong></p>
                            <p><i class="fas fa-calendar-alt"></i> [Status or Year Range]</p>
                        </div>
                        <div class="actions">
                            <a href="[CATEGORY2]/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse [CATEGORY 2] Papers
                            </a>
                        </div>
                    </div>

                    <!-- Add more category cards as needed -->
                </div>
            </section>

            <!-- Recent Papers -->
            <section id="recent" class="category-section">
                <h2><i class="fas fa-clock"></i> Recent Papers</h2>
                <div class="paper-grid">
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">[Month Year] [TYPE]</h3>
                            <span class="badge [badge-class]">[TYPE]</span>
                        </div>
                        <div class="meta">
                            <p><i class="far fa-calendar"></i> [Full Date]</p>
                            <p><i class="far fa-clock"></i> Duration: [X] hours</p>
                            <p><i class="fas fa-award"></i> Total: [N] marks</p>
                            <p><i class="fas fa-list-ol"></i> [N] Questions</p>
                        </div>
                        <div class="actions">
                            <a href="[category]/[filename].html" class="btn">
                                <i class="fas fa-eye"></i> View Paper
                            </a>
                        </div>
                    </div>
                    <!-- Repeat for recent papers -->
                </div>
            </section>

            <!-- Topics Covered -->
            <section id="topics" class="intro">
                <h2><i class="fas fa-book"></i> Topics Covered in [SUBJECT]</h2>
                <div class="paper-grid">
                    <div class="topic-list">
                        <h3><i class="fas fa-[icon]"></i> [Topic Category 1]</h3>
                        <ul>
                            <li>[Topic 1]</li>
                            <li>[Topic 2]</li>
                            <li>[Topic 3]</li>
                        </ul>
                    </div>

                    <div class="topic-list">
                        <h3><i class="fas fa-[icon]"></i> [Topic Category 2]</h3>
                        <ul>
                            <li>[Topic 1]</li>
                            <li>[Topic 2]</li>
                            <li>[Topic 3]</li>
                        </ul>
                    </div>

                    <div class="topic-list">
                        <h3><i class="fas fa-[icon]"></i> [Topic Category 3]</h3>
                        <ul>
                            <li>[Topic 1]</li>
                            <li>[Topic 2]</li>
                            <li>[Topic 3]</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer style="background: var(--bg-card); border-top: 1px solid var(--border-light); padding: 2rem; text-align: center; color: var(--text-secondary); margin-top: 3rem; border-radius: var(--radius-xl);">
                <p style="margin-bottom: 0.5rem;"><strong>[SUBJECT] Past Papers Collection</strong></p>
                <p style="margin-bottom: 0.5rem;">[PROGRAM] | [INSTITUTION]</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© [YEAR] [EXAMINATION BODY]</p>
            </footer>
        </main>
    </div>

    <script src="js/sidebar-navigation.js"></script>
</body>
</html>
```

### 6.3 Badge Class Reference

Use the following CSS classes for the `<span class="badge [badge-class]">` elements:

**Pre-defined Badge Classes:**
- `fqe` - Purple gradient (Final Qualifying Examinations)
- `cat` - Pink-red gradient (Continuous Assessment Tests)

**Example Usage:**
```html
<span class="badge fqe">FQE</span>
<span class="badge cat">CAT</span>
```

**Custom Badge Styling:**
If you need additional badge types, add them to your `styles.css`:

```css
.badge.supp {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.badge.mid {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Placeholder Values Reference:**

When creating new pages, replace these placeholders:

| Placeholder | Example Value | Description |
|-------------|---------------|-------------|
| `[SUBJECT]` | Medical Demography | The subject/course name |
| `[PROGRAM]` | Diploma in Health Records & Information Technology | Full program name |
| `[INSTITUTION]` | KMTC | Institution abbreviation |
| `[INSTITUTION FULL NAME]` | Kenya Medical Training College | Full institution name |
| `[EXAMINATION BODY]` | KNEC | Kenya National Examinations Council |
| `[YEAR]` | 2025 | Current year |
| `[CATEGORY]` | FQE, CAT, SUPP | Exam category abbreviation |
| `[CATEGORY FULL NAME]` | Final Qualifying Examinations | Full category name |
| `[badge-class]` | fqe, cat, supp | CSS class for badge styling |
| `[N]` | 6, 200, etc. | Numeric values (paper count, questions, etc.) |

## 7. Notes HTML Conversion

### 6.1 Notes Structure

Notes follow the existing PDF-to-HTML conversion workflow with these additions:

**Directory per topic set:**
```
notes/
├── community-health-comprehensive/
│   ├── index.html
│   ├── topics/
│   │   ├── unit-1-introduction.html
│   │   ├── unit-2-health-promotion.html
│   │   └── ...
│   ├── assets/images/
│   ├── styles/main.css
│   └── js/navigation.js
└── epidemiology-lecture-notes/
    └── ...
```

### 6.2 Notes Index Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Topic Name] - [Subject]</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <header>
        <div class="header-content">
            <h1>[Topic Name]</h1>
            <p class="subtitle">[Subject] - [Module Code]</p>
        </div>
    </header>

    <nav class="main-nav">
        <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#topics">Topics</a></li>
            <li><a href="../pastpapers/index.html">Past Papers</a></li>
        </ul>
    </nav>

    <main class="container">
        <section id="overview">
            <h2>Overview</h2>
            <p>[Brief description of the notes]</p>
        </section>

        <section id="topics">
            <h2>Topics</h2>
            <div class="topic-grid">
                <div class="topic-card">
                    <h3>Unit 1: [Title]</h3>
                    <p>[Brief description]</p>
                    <a href="topics/unit-1-[name].html" class="btn">Read More</a>
                </div>
                <!-- Repeat for other units -->
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 [Subject] Study Materials</p>
    </footer>
</body>
</html>
```

## 7. Complete CSS Stylesheet (styles.css)

**Location:** `pastpapers/styles.css`

**Copy this complete file to every subject's pastpapers folder:**

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

.sidebar-nav ul {
    list-style: none;
    padding: 0;
}

.sidebar-nav li {
    margin-bottom: 0.5rem;
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

.question-content p {
    margin-bottom: 10px;
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
    list-style: disc;
}

.answer-detail ol {
    list-style: decimal;
}

.answer-detail li {
    margin-bottom: 5px;
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
    list-style: disc;
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
.dark-mode .question {
    background-color: #1a1a1a;
}

.dark-mode .paper-intro,
.dark-mode .answer-section {
    background-color: #1e1e1e;
}

.dark-mode .sidebar-nav a:hover {
    background-color: rgba(46, 204, 113, 0.1);
}

/* Dark Mode Toggle */
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

/* Category Cards for Past Papers Index */
.category-section {
    margin: 3rem 0;
}

.category-section .paper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.category-section .paper-card {
    background: white;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.category-section .paper-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border-color: var(--primary-color);
}

/* Responsive Styles */
@media (max-width: 992px) {
    .main-content {
        flex-direction: column;
    }

    .sidebar {
        flex: 0 0 100%;
        margin-bottom: 20px;
        position: static;
        height: auto;
        overflow-y: visible;
    }

    main {
        max-width: 100%;
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
}

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
        position: fixed;
        top: 0;
        left: -280px;
        height: 100vh;
        width: 250px;
        z-index: 999;
        transition: left 0.3s ease;
        overflow-y: auto;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
    }

    .sidebar.active {
        left: 0;
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

    .question h3 {
        font-size: 1.1rem;
        padding: 8px 12px;
    }

    .paper-navigation .btn {
        padding: 6px 12px;
        font-size: 0.9rem;
    }

    .answer-section {
        padding: 15px;
    }

    .answer-detail {
        font-size: 0.9rem;
    }

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
        cursor: pointer;
    }
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

/* Indentation for nested question parts */
.indented-1 {
    margin-left: 20px;
}

.indented-2 {
    margin-left: 40px;
}

/* Print Styles */
@media print {
    .sidebar,
    .paper-navigation,
    .dark-mode-container,
    #back-to-top,
    .mobile-nav-toggle,
    .sidebar-backdrop {
        display: none !important;
    }

    main {
        flex: 1;
        width: 100%;
        max-width: 100%;
        box-shadow: none;
        padding: 0;
    }

    .container {
        padding: 0;
    }

    .question {
        page-break-inside: avoid;
        border: 1px solid #ccc;
        margin-bottom: 1rem;
        padding: 1rem;
        box-shadow: none;
    }

    .question h3 {
        background-color: #eee !important;
        color: #000 !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }

    .answer-section {
        background-color: #f9f9f9 !important;
        border: 1px solid #ccc;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }
}
```

## 8. Complete JavaScript File (js/sidebar-navigation.js)

**Location:** `pastpapers/js/sidebar-navigation.js`

**Copy this complete file to every subject's pastpapers/js folder:**

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
            if (currentPage === window.location.pathname.split('/').pop()) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });

                    targetElement.classList.add('highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight');
                    }, 2000);
                }
            }
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Dark mode functionality
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleSidebar = document.getElementById('dark-mode-toggle-sidebar');
    const htmlElement = document.documentElement;

    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedDarkMode) {
        htmlElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
        if (darkModeToggleSidebar) {
            darkModeToggleSidebar.checked = true;
        }
    } else {
        htmlElement.classList.remove('dark-mode');
    }

    const handleToggleChange = (isDarkMode, sourceToggle) => {
        if (isDarkMode) {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        if (darkModeToggle && darkModeToggle !== sourceToggle) {
            darkModeToggle.checked = isDarkMode;
        }
        if (darkModeToggleSidebar && darkModeToggleSidebar !== sourceToggle) {
            darkModeToggleSidebar.checked = isDarkMode;
        }
    };

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

document.addEventListener('DOMContentLoaded', setupDarkMode);

// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebarBackdrop = document.querySelector('.sidebar-backdrop');
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        if (!mobileNavToggle) {
            mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            document.body.appendChild(mobileNavToggle);
        }

        if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
        }

        mobileNavToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            sidebarBackdrop.classList.toggle('active');

            const isExpanded = sidebar.classList.contains('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
            mobileNavToggle.innerHTML = isExpanded ? '✕' : '☰';
        });

        sidebarBackdrop.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            mobileNavToggle.innerHTML = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });

        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.getComputedStyle(mobileNavToggle).display !== 'none') {
                    sidebar.classList.remove('active');
                    sidebarBackdrop.classList.remove('active');
                    mobileNavToggle.innerHTML = '☰';
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        window.addEventListener('resize', function() {
            const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';

            if (!isMobileView) {
                sidebar.classList.remove('active');
                sidebarBackdrop.classList.remove('active');
                mobileNavToggle.style.display = 'none';
                sidebarBackdrop.style.display = 'none';
                sidebar.style.position = 'sticky';
                sidebar.style.left = 'auto';
            } else {
                mobileNavToggle.style.display = 'block';
                sidebar.style.position = 'fixed';
            }
        });

        const isMobileView = window.getComputedStyle(mobileNavToggle).display !== 'none';
        if (isMobileView) {
            mobileNavToggle.style.display = 'block';
            sidebar.style.position = 'fixed';
            sidebar.style.left = '-280px';
            sidebarBackdrop.style.display = 'none';
        } else {
            mobileNavToggle.style.display = 'none';
            sidebarBackdrop.style.display = 'none';
            sidebar.style.position = 'sticky';
            sidebar.style.left = 'auto';
        }
    }
});
```

## 9. Automation Scripts

### 9.1 Subject Processing Script (process_subject.py)

**Location:** `process_subject.py` (in root directory)

This script automates the processing of files in the `UNPROCESSED` folder for any subject.

```python
#!/usr/bin/env python3
import os
import sys
import json
import shutil
import subprocess
from datetime import datetime
from pathlib import Path

# Configuration
MATHPIX_SERVER_PATH = os.getenv("MATHPIX_OCR_SERVER_PATH", "/path/to/your/mathpix-ocr-server/build/index.js")

def get_timestamp():
    return datetime.now().astimezone().isoformat()

def load_status(status_file):
    if status_file.exists():
        with open(status_file, 'r') as f:
            return json.load(f)
    return {
        "subject": "Unknown",
        "last_updated": get_timestamp(),
        "files": [],
        "statistics": {
            "total_files": 0,
            "unprocessed": 0,
            "mmd_generated": 0,
            "mmd_reviewed": 0,
            "html_generated": 0,
            "qa_added": 0,
            "verified": 0,
            "completed": 0
        },
        "next_steps": []
    }

def save_status(status_file, data):
    data["last_updated"] = get_timestamp()
    
    # Update statistics
    stats = {k: 0 for k in data["statistics"]}
    stats["total_files"] = len(data["files"])
    
    for file_entry in data["files"]:
        status = file_entry.get("status", "unprocessed")
        if status in stats:
            stats[status] += 1
            
    data["statistics"] = stats
    
    with open(status_file, 'w') as f:
        json.dump(data, f, indent=2)

def process_directory(subject_path, subfolder):
    target_dir = subject_path / subfolder
    unprocessed_dir = target_dir / "UNPROCESSED"
    status_file = target_dir / "processing-status.json"
    
    if not unprocessed_dir.exists():
        print(f"Skipping {subfolder}: UNPROCESSED folder not found")
        return

    print(f"\nProcessing {subfolder} in {subject_path.name}...")
    
    # Load or create status file
    status_data = load_status(status_file)
    if status_data["subject"] == "Unknown":
        status_data["subject"] = subject_path.name
    
    # Find PDF files
    pdf_files = list(unprocessed_dir.glob("*.pdf"))
    
    if not pdf_files:
        print("No PDF files found in UNPROCESSED")
        return

    for pdf_file in pdf_files:
# ... (rest of script)
```

**Usage:**

1.  **Make executable**: `chmod +x process_subject.py`
2.  **Run for a subject**:
    ```bash
    ./process_subject.py "Year 1/Medical Demography"
    ```
3.  **What it does**:
    - Scans `pastpapers/UNPROCESSED` and `notes/UNPROCESSED`.
    - Detects new PDF files.
    - Converts them to MMD using Mathpix.
    - Updates `processing-status.json` automatically.
    - Skips files that are already processed.

### 9.2 Subject Organization Script
        print(f"Found: {pdf_file.name}")
        
        # Check if already tracked
        existing_entry = next((f for f in status_data["files"] if f["filename"] == pdf_file.name), None)
        
        if not existing_entry:
            # Add new entry
            new_entry = {
                "filename": pdf_file.name,
                "original_location": "UNPROCESSED/",
                "current_location": "UNPROCESSED/",
                "status": "unprocessed",
                "processing_steps": {
                    "pdf_received": get_timestamp(),
                    "mmd_generated": "pending",
                    "mmd_reviewed": "pending",
                    "html_generated": "pending",
                    "qa_added": "pending",
                    "verified": "pending"
                },
                "paper_type": "unknown",
                "year": "unknown",
                "session": "unknown",
                "html_filename": "pending",
                "mmd_filename": "pending",
                "questions_count": "unknown",
                "sections": [],
                "notes": "Auto-detected by process_subject.py"
            }
            status_data["files"].append(new_entry)
            existing_entry = new_entry
            print("  -> Added to tracking system")

        # Convert to MMD if needed
        if existing_entry["status"] == "unprocessed":
            mmd_filename = f"{pdf_file.stem}_ocr.mmd"
            mmd_path = unprocessed_dir / mmd_filename
            
            print(f"  -> Converting to MMD...")
            try:
                # Run Mathpix OCR
                cmd = ["node", MATHPIX_SERVER_PATH, str(pdf_file)]
                with open(mmd_path, "w") as outfile:
                    subprocess.run(cmd, stdout=outfile, check=True)
                
                # Update status
                existing_entry["status"] = "mmd_generated"
                existing_entry["processing_steps"]["mmd_generated"] = get_timestamp()
                existing_entry["mmd_filename"] = mmd_filename
                print("  -> MMD conversion successful")
                
            except subprocess.CalledProcessError as e:
                print(f"  -> Error converting to MMD: {e}")
            except Exception as e:
                print(f"  -> Unexpected error: {e}")
        
        else:
            print(f"  -> Already processed (Status: {existing_entry['status']})")

    # Save updates
    save_status(status_file, status_data)
    print(f"Updated status file: {status_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python process_subject.py <subject_directory>")
        sys.exit(1)
        
    subject_dir = Path(sys.argv[1])
    
    if not subject_dir.exists():
        print(f"Error: Directory {subject_dir} not found")
        sys.exit(1)
        
    # Process pastpapers
    process_directory(subject_dir, "pastpapers")
    
    # Process notes (optional, if structure exists)
    process_directory(subject_dir, "notes")
```

### 9.2 Subject Organization Script

```python
#!/usr/bin/env python3
# organize_subjects.py

import os
import shutil
import json
from pathlib import Path

# ============================================================================
# SUBJECT MAPPINGS - CUSTOMIZE FOR EACH COURSE/PROGRAM
# ============================================================================
# The mappings below are specific to "Diploma in Health Records & Information Technology"
# 
# FOR OTHER COURSES, CREATE DIFFERENT MAPPINGS based on that course's curriculum:
# - Diploma in Nursing: Include subjects like Fundamentals of Nursing, Medical-Surgical Nursing, etc.
# - Diploma in Clinical Medicine: Include subjects like Clinical Medicine, Surgery, Pediatrics, etc.
# - Diploma in Pharmacy: Include subjects like Pharmacology, Pharmaceutical Chemistry, etc.
# - Certificate in Community Health: Include relevant community health subjects
# 
# To customize: Replace the dictionary below with subjects from your course's curriculum
# ============================================================================

SUBJECT_MAPPINGS = {
    "Community Health": ["Community Health", "Public Health"],
    "Epidemiology": ["Epidemiology", "Disease Surveillance"],
    "Health Statistics": ["Health Statistics", "Vital Statistics", "Biostatistics"],
    "Medical Demography": ["Medical Demography", "Demography", "Population Studies"],
    "Health Records Management": ["Health Records", "Medical Records", "Records Management"],
    "Health Data Classification": ["Health Data", "Data Classification", "ICD", "Coding"],
    "Health Information Systems": ["Health Information", "HIS", "Information Systems"],
    "Computer Applications in Health Care": ["Computer Applications", "Health IT", "Medical Informatics"],
    "Human Anatomy and Physiology": ["Anatomy", "Physiology", "Human Anatomy"],
    "Human Pathology": ["Pathology", "Medical Pathology"],
    "Medical Terminology": ["Medical Terminology", "Medical Language"],
    "First Aid": ["First Aid", "Emergency Response"],
    "HIV/AIDS & STIs": ["HIV", "AIDS", "STI", "STD"],
    "Mental Health": ["Mental Health", "Psychiatry", "Psychology"],
    "Research Methods": ["Research", "Research Methods", "Research Methodology"],
    "Monitoring and Evaluation": ["M&E", "Monitoring", "Evaluation"],
    "Health Systems Management": ["Health Systems", "Health Management"],
    "Human Resource Management": ["HRM", "Human Resources"],
}

PASTPAPER_TYPES = {
    "CATs": ["CAT", "C.A.T", "Continuous Assessment"],
    "FQE": ["FQE", "Final Qualifying"],
    "SUPPLEMENTARY": ["SUPP", "Supplementary", "Retake"],
    "END_OF_SEMESTER": ["End of Semester", "EOS", "Semester Exam"],
    "END_OF_YEAR": ["End of Year", "EOY", "Annual Exam"],
    "PRACTICAL": ["Practical", "Lab Exam", "Marking Key"],
}

def identify_subject(filename, content_hint=""):
    """Identify subject from filename or content"""
    filename_lower = filename.lower()
    
    for subject, keywords in SUBJECT_MAPPINGS.items():
        for keyword in keywords:
            if keyword.lower() in filename_lower:
                return subject
    
    return "Uncategorized"

def identify_pastpaper_type(filename):
    """Identify past paper type"""
    filename_upper = filename.upper()
    
    for paper_type, keywords in PASTPAPER_TYPES.items():
        for keyword in keywords:
            if keyword.upper() in filename_upper:
                return paper_type
    
    return "NOT_RELEVANT"

def organize_directory(base_path):
    """Organize files into subject structure"""
    base_path = Path(base_path)
    
    # Scan all files
    for item in base_path.rglob("*"):
        if item.is_file() and item.suffix.lower() == ".pdf":
            subject = identify_subject(item.name)
            
            # Determine if it's a past paper or notes
            paper_type = identify_pastpaper_type(item.name)
            
            if paper_type != "NOT_RELEVANT":
                # It's a past paper
                dest_dir = base_path / subject / "pastpapers" / paper_type
            else:
                # It's notes or other material
                dest_dir = base_path / subject / "notes"
            
            # Create destination directory
            dest_dir.mkdir(parents=True, exist_ok=True)
            
            # Move file
            dest_file = dest_dir / item.name
            if not dest_file.exists():
                shutil.copy2(item, dest_file)
                print(f"Copied: {item} -> {dest_file}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        organize_directory(sys.argv[1])
    else:
        print("Usage: python organize_subjects.py <directory>")
```

### 9.3 Image Download Script (download_images.sh)

**Location:** `download_images.sh` (in root directory)

This script extracts image URLs from an MMD file and downloads them with sequential naming.

```bash
#!/bin/bash

# =============================================================================
# Image Download Script for MMD Files
# =============================================================================
# This script extracts image URLs from MMD files and downloads them with 
# sequential naming convention: [ID]g-[PageNum]-[SeqNum].ext
# 
# Usage: 
# bash download_images.sh [mmd_file] [output_dir] [project_root]
# bash download_images.sh content.mmd assets/images .
# bash download_images.sh my_paper.mmd images .
# =============================================================================

# --- Configuration ---
MMD_FILE="${1:-content.mmd}" # Input MMD file name (can be passed as argument)
OUTPUT_DIR="${2:-assets/images}" # Output directory for images (can be passed as argument)
PROJECT_ROOT="${3:-.}" # Project root relative to script location (can be passed as argument)

# --- Color codes for better output ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# --- Function to print colored output ---
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_progress() {
    echo -e "${BLUE}[PROGRESS]${NC} $1"
}

# --- Check if MMD file exists ---
if [ ! -f "$MMD_FILE" ]; then
    print_error "MMD file '$MMD_FILE' not found!"
    exit 1
fi

# --- Ensure Output Directory Exists ---
mkdir -p "$OUTPUT_DIR"
if [ ! -d "$OUTPUT_DIR" ]; then
    print_error "Could not create output directory '$OUTPUT_DIR'."
    exit 1
fi

print_status "Starting image download process..."
print_status "Input MMD: $MMD_FILE"
print_status "Output Directory: $OUTPUT_DIR"

# --- Count total URLs for progress tracking ---
TOTAL_URLS=$(grep -c 'https://cdn\.mathpix\.com/cropped/' "$MMD_FILE")
print_status "Found $TOTAL_URLS image URLs to process"

# --- Initialize counters ---
SUCCESS_COUNT=0
ERROR_COUNT=0
CURRENT_COUNT=0

# --- Extract URLs and Generate Curl Commands ---
# Use grep to find all Mathpix image URLs
# Use awk to process each URL, generate the correct filename, and execute curl
grep -oP 'https://cdn\.mathpix\.com/cropped/[^)]+' "$MMD_FILE" | \
awk -v output_dir="$OUTPUT_DIR" -v total_urls="$TOTAL_URLS" '
BEGIN {
    # Define associative array to keep track of sequence numbers for each base image
    FS="/" # Use / as field separator for URL parsing
    OFS="-" # Use - as output field separator for filename parts
    current_count = 0;
    success_count = 0;
    error_count = 0;
}
{
    current_count++;
    full_url = $0; # Store the full URL
    
    # Clean up the URL by removing trailing braces, brackets, or other problematic characters
    gsub(/[}\]]+$/, "", full_url);
    gsub(/[[:space:]]+$/, "", full_url); # Remove trailing whitespace
    
    # Extract the filename part (e.g., 2025_08_29_b97cd1d1768641963375g-031.jpg?...)
    split(full_url, url_parts, "/");
    filename_with_query = url_parts[length(url_parts)];
    
    # Remove query string part (anything after ?)
    split(filename_with_query, filename_parts, "?");
    base_filename = filename_parts[1];
    
    # Extract the file extension (e.g., jpg, png)
    split(base_filename, ext_parts, ".");
    extension = ext_parts[length(ext_parts)];
    
    # Extract the core part used for sequencing (e.g., 2025_08_29_b97cd1d1768641963375g-031)
    # This assumes format [ID]g-[PageNum]
    id_page = substr(base_filename, 1, length(base_filename) - length(extension) - 1);
    
    # Increment the count for this specific base image ID and PageNum
    count[id_page]++;
    seq_num = count[id_page];
    
    # Construct the final output filename according to the convention
    # [ID]g-[PageNum]-[SeqNum].ext
    output_filename = id_page OFS seq_num "." extension;
    output_path = output_dir "/" output_filename;
    
    # Print progress message
    printf "\033[0;34m[PROGRESS]\033[0m (%d/%d) Downloading: %s (Seq %d) -> %s\n", current_count, total_urls, id_page, seq_num, output_filename;
    
    # Check if file already exists
    if (system("test -f \"" output_path "\"") == 0) {
        printf "\033[1;33m[WARNING]\033[0m File already exists, skipping: %s\n", output_filename;
        next;
    }
    
    # Execute curl command and capture return code
    curl_cmd = sprintf("curl -f -sS -L --connect-timeout 30 --max-time 120 -o \"%s\" \"%s\"", output_path, full_url);
    return_code = system(curl_cmd);
    
    if (return_code == 0) {
        # Verify the file was actually created and has content
        if (system("test -s \"" output_path "\"") == 0) {
            printf "\033[0;32m[SUCCESS]\033[0m Downloaded: %s\n", output_filename;
            success_count++;
        } else {
            printf "\033[0;31m[ERROR]\033[0m Downloaded file is empty: %s\n", output_filename;
            system("rm -f \"" output_path "\""); # Remove empty file
            error_count++;
        }
    } else {
        printf "\033[0;31m[ERROR]\033[0m Failed to download: %s (curl exit code: %d)\n", output_filename, return_code;
        printf "\033[0;31m[ERROR]\033[0m URL was: %s\n", full_url;
        error_count++;
    }
    
    # Small delay to be respectful to the server
    system("sleep 0.1");
}
END {
    printf "\n\033[0;32m[INFO]\033[0m Download process completed!\n";
    printf "\033[0;32m[INFO]\033[0m Processed: %d URLs\n", current_count;
    printf "\033[0;32m[INFO]\033[0m Successful: %d\n", success_count;
    if (error_count > 0) {
        printf "\033[0;31m[INFO]\033[0m Failed: %d\n", error_count;
    }
    printf "\033[0;32m[INFO]\033[0m Check the '"'"'%s'"'"' directory for downloaded images.\n", output_dir;
}'

# --- Final status report ---
echo ""
print_status "Image download process finished."
print_status "Please check the '$OUTPUT_DIR' directory."

# --- Optional: List downloaded files ---
if [ "$(ls -A "$OUTPUT_DIR" 2>/dev/null)" ]; then
    echo ""
    print_status "Downloaded files:"
    ls -la "$OUTPUT_DIR" | grep "^-" | wc -l | xargs printf "Total files: %s\n"
    echo ""
    print_status "Sample of downloaded files:"
    ls "$OUTPUT_DIR" | head -10
    if [ $(ls "$OUTPUT_DIR" | wc -l) -gt 10 ]; then
        echo "... and $(($(ls "$OUTPUT_DIR" | wc -l) - 10)) more files"
    fi
else
    print_warning "No files were downloaded to '$OUTPUT_DIR'"
fi

echo ""
print_status "Script execution completed."
exit 0
```

```python
#!/usr/bin/env python3
# generate_indexes.py

import os
from pathlib import Path
from datetime import datetime

def generate_pastpaper_category_index(category_dir, subject_name):
    """Generate index.html for a past paper category"""
    category_name = category_dir.name
    papers = sorted([f for f in category_dir.glob("*.html") if f.name != "index.html"])
    
    # Group by year
    papers_by_year = {}
    for paper in papers:
        # Extract year from filename (e.g., 2023j-cat1.html)
        year = paper.stem[:4]
        if year.isdigit():
            papers_by_year.setdefault(year, []).append(paper)
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{subject_name} - {category_name} Past Papers</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>{subject_name}</h1>
            <h2>{category_name} Past Papers</h2>
        </div>
    </header>

    <div class="container main-content">
        <main>
            <section class="intro">
                <h2>{category_name} Examinations</h2>
                <p>Collection of {category_name} past papers for {subject_name}.</p>
            </section>
"""
    
    # Add papers by year
    for year in sorted(papers_by_year.keys(), reverse=True):
        html += f"""
            <section class="year-section">
                <h2>{year}</h2>
                <div class="paper-grid">
"""
        for paper in papers_by_year[year]:
            paper_name = paper.stem.replace("-", " ").title()
            html += f"""
                    <div class="paper-card">
                        <h3>{paper_name}</h3>
                        <div class="actions">
                            <a href="{paper.name}" class="btn">View Online</a>
                        </div>
                    </div>
"""
        html += """
                </div>
            </section>
"""
    
    html += """
        </main>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 """ + subject_name + """ Past Papers | KNEC</p>
        </div>
    </footer>
</body>
</html>
"""
    
    index_file = category_dir / "index.html"
    index_file.write_text(html)
    print(f"Generated: {index_file}")

def generate_main_pastpaper_index(pastpaper_dir, subject_name):
    """Generate main index.html for all past papers"""
    categories = [d for d in pastpaper_dir.iterdir() if d.is_dir()]
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{subject_name} - All Past Papers</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>{subject_name}</h1>
            <h2>Past Papers Collection</h2>
        </div>
    </header>

    <div class="container main-content">
        <main>
            <section class="intro">
                <h2>Comprehensive Past Papers Archive</h2>
                <p>Access all past examination papers organized by type.</p>
            </section>

            <section class="category-section">
                <h2>Browse by Category</h2>
                <div class="paper-grid">
"""
    
    for category in sorted(categories):
        if category.name == "NOT_RELEVANT":
            continue
        
        paper_count = len(list(category.glob("*.html"))) - 1  # Exclude index.html
        
        html += f"""
                    <div class="paper-card">
                        <h3>{category.name.replace("_", " ")}</h3>
                        <div class="meta">
                            <p>Papers: {paper_count}</p>
                        </div>
                        <div class="actions">
                            <a href="{category.name}/index.html" class="btn">Browse {category.name}</a>
                        </div>
                    </div>
"""
    
    html += """
                </div>
            </section>
        </main>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 """ + subject_name + """ Past Papers | KNEC</p>
        </div>
    </footer>
</body>
</html>
"""
    
    index_file = pastpaper_dir / "index.html"
    index_file.write_text(html)
    print(f"Generated: {index_file}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 2:
        pastpaper_dir = Path(sys.argv[1])
        subject_name = sys.argv[2]
        
        # Generate category indexes
        for category_dir in pastpaper_dir.iterdir():
            if category_dir.is_dir() and category_dir.name != "js":
                generate_pastpaper_category_index(category_dir, subject_name)
        
        # Generate main index
        generate_main_pastpaper_index(pastpaper_dir, subject_name)
    else:
        print("Usage: python generate_indexes.py <pastpaper_dir> <subject_name>")
```

## 9. Complete Workflow

### 9.1 Initial Organization

```bash
# 1. Organize files into subject structure
python organize_subjects.py "/path/to/Year 1"

# 2. Review and manually adjust any misclassified files
```

### 9.2 Convert PDFs to MMD

```bash
# 3. Batch convert past papers to MMD
for subject_dir in Year\ 1/*/pastpapers; do
    for category_dir in "$subject_dir"/*/; do
        find "$category_dir" -name "*.pdf" -type f | while read pdf; do
            output="${pdf%.pdf}_ocr.mmd"
            node "$OCR_SERVER" "$pdf" > "$output"
            echo "Converted: $pdf -> $output"
        done
    done
done

# 4. Convert notes to MMD
for subject_dir in Year\ 1/*/notes; do
    find "$subject_dir" -name "*.pdf" -type f | while read pdf; do
        output="${pdf%.pdf}_ocr.mmd"
        node "$OCR_SERVER" "$pdf" > "$output"
        echo "Converted: $pdf -> $output"
    done
done
```

### 9.3 Manual Review

```bash
# 5. Manually review and correct each MMD file
# - Fix OCR errors
# - Remove spurious characters
# - Verify equations and images
# - Note list patterns for semantic conversion
```

### 9.4 Generate HTML

```bash
# 6. For each MMD file, generate HTML following templates
# - Past papers: Use past paper template with Q&A structure
# - Notes: Use notes template with topic chunking

# 7. Generate all index files
python generate_indexes.py "Year 1/Community Health/pastpapers" "Community Health"
```

### 9.5 Copy Shared Assets

```bash
# 8. Copy CSS and JS to each pastpapers directory
cp styles.css "Year 1/Community Health/pastpapers/"
cp -r js "Year 1/Community Health/pastpapers/"
```

### 9.6 Verification

```bash
# 9. Verify all HTML files
# - Check navigation links
# - Verify all questions have answers
# - Test dark mode toggle
# - Test mobile responsiveness
# - Validate HTML structure
```

## 10. Key Principles

### 10.1 Content Integrity
- **100% verbatim content** from source documents
- **INCLUDE ALL QUESTIONS AND SECTIONS** from the original paper. Do not omit any questions for brevity.
- No summarization or paraphrasing
- Preserve all technical terms and medical terminology

### 10.2 Simultaneous Q&A Creation
- **Never** create questions without answers
- Process one question completely before moving to next
- Use medical knowledge to provide accurate answers
- Document any assumptions made

### 10.3 Structural Consistency
- Follow exact HTML templates
- No unnecessary div nesting
- Use semantic HTML elements
- Apply consistent styling classes

### 10.4 Accessibility
- Proper heading hierarchy
- Descriptive alt text for images
- ARIA labels where appropriate
- Mobile-responsive design
- Dark mode support

### 10.5 Future-Proofing
- Modular structure allows easy updates
- New papers can be added to existing categories
- Index files can be regenerated automatically
- CSS/JS updates propagate to all pages

## 11. Quality Checklist

Before considering any conversion complete:

- [ ] All PDFs converted to MMD
- [ ] All MMD files manually reviewed and corrected
- [ ] All past papers classified into correct categories
- [ ] All questions have complete answers
- [ ] All HTML validates (no broken tags)
- [ ] All navigation links work correctly
- [ ] All images display properly
- [ ] Dark mode toggle works
- [ ] Mobile view is functional
- [ ] Print styles work correctly
- [ ] All index files generated
- [ ] Content matches source 100%
- [ ] Medical terminology is accurate
- [ ] Math equations render correctly (MathJax)

---

**Version:** 2.0  
**Last Updated:** 2025-11-25  
**Purpose:** Comprehensive medical education content organization and HTML conversion system

### 3.5 Additional CSS Classes for Index Pages

Add these CSS classes to your `styles.css` file to support the index page designs:

```css
/* Index Page Specific Styles */

/* Root Index Styles */
.main-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 15px;
    margin-bottom: 3rem;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.header-icon {
    font-size: 3rem;
    opacity: 0.9;
}

.stats-section {
    display: flex;
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

/* College Card Styles */
.college-card {
    border-left: 4px solid var(--primary-color);
    transition: all 0.3s ease;
}

.college-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.college-icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.college-name {
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.college-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--text-tertiary);
}

/* Subject Card Styles */
.subject-card {
    border-top: 4px solid var(--primary-color);
    transition: all 0.3s ease;
}

.subject-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.subject-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.subject-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.category-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.tag {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.tag-cat { background: rgba(255, 107, 107, 0.1); color: #ff6b6b; }
.tag-fqe { background: rgba(102, 126, 234, 0.1); color: #667eea; }
.tag-practical { background: rgba(72, 187, 120, 0.1); color: #48bb78; }
.tag-more { background: rgba(160, 174, 192, 0.1); color: #a0aec0; }

/* Category Card Styles */
.categories-grid {
    display