#!/bin/bash

# Educational Content Index Updater
# Scan directories and update index.html files
# This script is configurable - edit the variables below for your specific setup

# =================================================================
# CONFIGURATION - EDIT THESE FOR YOUR SETUP
# =================================================================

# Default values - can be overridden by command line arguments
DEFAULT_COLLEGE="KMTC"
DEFAULT_SUBJECT="General Paper"

# You can also source from structure_config.sh if it exists
if [ -f "structure_config.sh" ]; then
    source structure_config.sh
    # Use first college and subject from config if available
    if [ ${#COLLEGES[@]} -gt 0 ]; then
        DEFAULT_COLLEGE="${COLLEGES[0]}"
    fi
    if [ ${#SUBJECTS[@]} -gt 0 ]; then
        DEFAULT_SUBJECT="${SUBJECTS[0]}"
    fi
fi

# Set working values (can be overridden by command line)
COLLEGE="${1:-$DEFAULT_COLLEGE}"
SUBJECT="${2:-$DEFAULT_SUBJECT}"
BASE_DIR="$COLLEGE/$SUBJECT"

# Categories - use from config if available, otherwise use defaults
if [ ${#CATEGORIES[@]} -eq 0 ]; then
    CATEGORIES=(
        "FINAL_EXAMS"
        "MIDTERM_EXAMS"
        "QUIZZES"
        "ASSIGNMENTS"
        "PRACTICAL_EXAMS"
        "SUPPLEMENTARY"
    )
fi

# =================================================================
# FUNCTIONS
# =================================================================

# Show usage information
show_usage() {
    echo "Educational Content Index Updater"
    echo "Usage: $0 [COLLEGE] [SUBJECT]"
    echo ""
    echo "Examples:"
    echo "  $0                           # Use defaults from config"
    echo "  $0 KMTC                      # Update KMTC with default subject"
    echo "  $0 KMTC \"General Paper\"      # Update specific college and subject"
    echo "  $0 MKU \"Mathematics\"         # Update different institution"
    echo ""
    echo "Configuration:"
    echo "  - Edit structure_config.sh to set default colleges, subjects, and categories"
    echo "  - Or modify the DEFAULT_* variables in this script"
    echo ""
    if [ -f "structure_config.sh" ]; then
        echo "Current config (from structure_config.sh):"
        echo "  Colleges: ${COLLEGES[*]}"
        echo "  Subjects: ${SUBJECTS[*]}"
        echo "  Categories: ${CATEGORIES[*]}"
    else
        echo "No structure_config.sh found - using built-in defaults"
    fi
}

# Check if help requested
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_usage
    exit 0
fi

# Function to generate category index
generate_category_index() {
    local dir_path="$1"
    local category_name=$(basename "$dir_path")
    local assets_path="../../../assets"
    
    echo "Generating index for $dir_path..."
    
    # Start HTML
    cat > "$dir_path/index.html" << HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$SUBJECT - $category_name Papers | $COLLEGE</title>
    <link rel="stylesheet" href="$assets_path/css/styles.css">
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
                    <span>$SUBJECT</span>
                </div>
            </div>

            <nav class="sidebar-nav">
                <a href="../../../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="../../index.html" class="nav-item">
                    <i class="fas fa-university"></i>
                    <span>$COLLEGE</span>
                </a>
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-book"></i>
                    <span>$SUBJECT</span>
                </a>
                <div class="nav-group">
                    <div class="nav-group-title">Exam Types</div>
HTML

    # Add Sidebar links only for populated categories
    for cat in "${CATEGORIES[@]}"; do
        local cat_dir="../$cat"
        # Check if category has HTML files (excluding index.html)
        if [ -d "$dir_path/../$cat" ] && [ -n "$(find "$dir_path/../$cat" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
            local active_class=""
            if [ "$cat" == "$category_name" ]; then
                active_class="active"
            fi
            cat >> "$dir_path/index.html" << LINK
                    <a href="../$cat/index.html" class="nav-item $active_class">
                        <i class="fas fa-folder"></i>
                        <span>$cat Papers</span>
                    </a>
LINK
        fi
    done

    cat >> "$dir_path/index.html" << HTML
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
                    <span class="badge fqe">$category_name</span>
                    <span class="date"><i class="fas fa-university"></i> $COLLEGE</span>
                </div>
                <h1>$category_name Exams</h1>
                <p class="subtitle">$SUBJECT Past Examinations</p>
            </header>

            <section class="category-section">
                <div class="paper-grid">
HTML

    # Find all HTML files, sort by name (which effectively sorts by year)
    # Exclude index.html itself
    find "$dir_path" -maxdepth 1 -name "*.html" ! -name "index.html" | sort -r | while read file; do
        filename=$(basename "$file")
        name="${filename%.html}"
        
        # Parse filename for display
        # Expected format: YYYYs-type.html (e.g., 2024j-fqe.html)
        year=$(echo "$name" | grep -oE '^[0-9]{4}')
        session_code=$(echo "$name" | grep -oE '^[0-9]{4}[a-z]' | sed 's/[0-9]//g')
        
        if [ -z "$year" ]; then
            year="Unknown Year"
        fi
        
        # Map session codes to readable names
        session="Session"
        case "$session_code" in
            "j") session="July/June" ;;
            "m") session="March/May" ;;
            "n") session="November" ;;
            "s") session="September" ;;
            "a") session="April/August" ;;
            "f") session="February" ;;
            "d") session="December" ;;
            *) 
                if [ -n "$session_code" ]; then
                    session="Session $session_code"
                else
                    session="Unknown Session"
                fi
                ;;
        esac
        
        cat >> "$dir_path/index.html" << ITEM
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">$year $session</h3>
                            <span class="badge fqe">$category_name</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-file-alt"></i> $SUBJECT</p>
                            <p><i class="fas fa-calendar-alt"></i> $year</p>
                            <p><i class="fas fa-check-circle" style="color: var(--success-color);"></i> <strong>Answers Included</strong></p>
                        </div>
                        <div class="actions">
                            <a href="$filename" class="btn">
                                <i class="fas fa-eye"></i> View Paper & Answers
                            </a>
                        </div>
                    </div>
ITEM
    done

    # Close HTML
    cat >> "$dir_path/index.html" << HTML
                </div>
            </section>

            <footer>
                <p>© 2026 Educational Content Management System</p>
            </footer>
        </main>
    </div>

    <script src="$assets_path/js/sidebar-navigation.js"></script>
</body>
</html>
HTML
}

# Update Subject Index (The main entry point for the subject)
generate_subject_index() {
    local assets_path="../../assets"
    
    echo "Generating subject index for $BASE_DIR..."
    
    cat > "$BASE_DIR/index.html" << HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$SUBJECT | $COLLEGE Past Papers</title>
    <link rel="stylesheet" href="$assets_path/css/styles.css">
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
                    <span>$SUBJECT</span>
                </div>
            </div>

            <nav class="sidebar-nav">
                <a href="../../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-university"></i>
                    <span>$COLLEGE</span>
                </a>
                <a href="#" class="nav-item active">
                    <i class="fas fa-book"></i>
                    <span>$SUBJECT</span>
                </a>
                <div class="nav-group">
                    <div class="nav-group-title">Exam Types</div>
HTML

    # Loop categories to create sidebar
    for cat in "${CATEGORIES[@]}"; do
        if [ -d "$BASE_DIR/$cat" ] && [ -n "$(find "$BASE_DIR/$cat" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
            cat >> "$BASE_DIR/index.html" << LINK
                    <a href="$cat/index.html" class="nav-item">
                        <i class="fas fa-folder"></i>
                        <span>$cat Papers</span>
                    </a>
LINK
        fi
    done

    cat >> "$BASE_DIR/index.html" << HTML
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
                    <span class="badge fqe">$COLLEGE</span>
                </div>
                <h1>$SUBJECT</h1>
                <p class="subtitle">Select an exam category to browse past papers</p>
            </header>

            <section class="category-section">
                <h2>Available Categories</h2>
                <div class="paper-grid">
HTML

    # Loop categories to create cards
    for cat in "${CATEGORIES[@]}"; do
        if [ -d "$BASE_DIR/$cat" ] && [ -n "$(find "$BASE_DIR/$cat" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
            # Count papers
            count=$(find "$BASE_DIR/$cat" -maxdepth 1 -name "*.html" ! -name "index.html" | wc -l)
            
            cat >> "$BASE_DIR/index.html" << CARD
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">$cat</h3>
                            <span class="badge fqe">$count Papers</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-folder-open"></i> Browse collection</p>
                        </div>
                        <div class="actions">
                            <a href="$cat/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Open Category
                            </a>
                        </div>
                    </div>
CARD
        fi
    done

    cat >> "$BASE_DIR/index.html" << HTML
                </div>
            </section>
            <footer>
                <p>© 2026 Educational Content Management System</p>
            </footer>
        </main>
    </div>
    <script src="$assets_path/js/sidebar-navigation.js"></script>
</body>
</html>
HTML
}

# Main Execution
echo "=== Educational Content Index Updater ==="
echo "College: $COLLEGE"
echo "Subject: $SUBJECT"
echo "Base Directory: $BASE_DIR"
echo "Categories: ${CATEGORIES[*]}"
echo ""

# Validate that base directory exists
if [ ! -d "$BASE_DIR" ]; then
    echo "Error: Directory '$BASE_DIR' does not exist!"
    echo "Please check your college and subject names."
    echo ""
    show_usage
    exit 1
fi

echo "Updating indexes..."

# 1. Update each category index
for cat in "${CATEGORIES[@]}"; do
    if [ -d "$BASE_DIR/$cat" ]; then
        # Check if empty
        if [ -n "$(find "$BASE_DIR/$cat" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
            generate_category_index "$BASE_DIR/$cat"
        else
            echo "Skipping empty category: $cat"
            # Optionally remove empty index.html if it exists to avoid confusion
            rm -f "$BASE_DIR/$cat/index.html"
        fi
    fi
done

# 2. Update Subject Index
generate_subject_index

echo ""
echo "=== Update Complete ==="
echo "Updated indexes for:"
echo "  College: $COLLEGE"
echo "  Subject: $SUBJECT"

# Count total papers processed
total_papers=0
for cat in "${CATEGORIES[@]}"; do
    if [ -d "$BASE_DIR/$cat" ]; then
        count=$(find "$BASE_DIR/$cat" -maxdepth 1 -name "*.html" ! -name "index.html" 2>/dev/null | wc -l)
        if [ $count -gt 0 ]; then
            echo "  $cat: $count papers"
            total_papers=$((total_papers + count))
        fi
    fi
done

echo "  Total: $total_papers papers"
echo ""
echo "All indexes updated successfully."
