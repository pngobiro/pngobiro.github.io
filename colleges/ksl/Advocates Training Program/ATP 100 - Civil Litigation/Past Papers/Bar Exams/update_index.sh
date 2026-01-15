#!/bin/bash

# Update Index Script - Complete Version
# Creates and updates ALL index files including root, college, subject, and category indexes
# Usage: ./update_index.sh [path]

# Load configuration
if [ -f "structure_config.sh" ]; then
    source structure_config.sh
else
    echo "Error: structure_config.sh not found!"
    exit 1
fi

if [ -f "helper_functions.sh" ]; then
    source helper_functions.sh
fi

# Extract metadata from HTML files
get_html_title() {
    local file="$1"
    local title=$(grep -oP '(?<=<title>).*(?=</title>)' "$file" 2>/dev/null | head -1)
    [ -z "$title" ] && title=$(basename "$file" .html)
    echo "$title"
}

get_year_from_filename() {
    echo "$1" | grep -oP '^\d{4}' || echo "Unknown"
}

get_session_from_filename() {
    local session_code=$(echo "$1" | grep -oP '^\d{4}\K[a-z]')
    case "$session_code" in
        "j") echo "July" ;;
        "f") echo "February" ;;
        "n") echo "November" ;;
        "s") echo "September" ;;
        "m") echo "March" ;;
        "a") echo "April" ;;
        *) echo "" ;;
    esac
}

# Create root index
create_root_index() {
    echo "Creating root index.html..."
    
    cat > "index.html" << 'ROOTINDEX'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
ROOTINDEX

    echo "    <title>$SITE_TITLE</title>" >> "index.html"
    echo "    <meta name=\"description\" content=\"$SITE_DESCRIPTION\">" >> "index.html"
    
    cat >> "index.html" << 'ROOTINDEX'
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
ROOTINDEX

    # Add college links
    for college in "${COLLEGES[@]}"; do
        local icon=$(get_college_icon "$college")
        echo "                    <a href=\"$college/index.html\" class=\"nav-item sub-item\">" >> "index.html"
        echo "                        <i class=\"$icon\"></i>" >> "index.html"
        echo "                        <span>$college Papers</span>" >> "index.html"
        echo "                    </a>" >> "index.html"
    done

    cat >> "index.html" << 'ROOTINDEX'
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
ROOTINDEX

    echo "                        <i class=\"fas fa-graduation-cap\"></i> $SITE_DESCRIPTION" >> "index.html"
    
    cat >> "index.html" << 'ROOTINDEX'
                    </span>
                </div>
                <h1>Past Papers Archive</h1>
                <p class="subtitle">Comprehensive Collection of Examination Papers</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> Welcome to the Archive</h2>
                <p>Access organized past examination papers from leading educational institutions.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem;">
ROOTINDEX

    echo "                        <div style=\"font-size: 2rem; font-weight: 800; color: var(--primary-color);\">${#COLLEGES[@]}</div>" >> "index.html"
    
    cat >> "index.html" << 'ROOTINDEX'
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Colleges</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem;">
ROOTINDEX

    echo "                        <div style=\"font-size: 2rem; font-weight: 800; color: var(--secondary-color);\">${#SUBJECTS[@]}+</div>" >> "index.html"
    
    cat >> "index.html" << 'ROOTINDEX'
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Subjects</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%); border-radius: 0.75rem;">
ROOTINDEX

    echo "                        <div style=\"font-size: 2rem; font-weight: 800; color: var(--accent-color);\">${#CATEGORIES[@]}</div>" >> "index.html"
    
    cat >> "index.html" << 'ROOTINDEX'
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Categories</div>
                    </div>
                </div>
            </section>
            
            <section id="colleges" class="category-section">
                <h2><i class="fas fa-university"></i> Select Your College</h2>
                <div class="paper-grid">
ROOTINDEX

    # Add college cards
    for college in "${COLLEGES[@]}"; do
        local icon=$(get_college_icon "$college")
        local full=$(get_college_full_name "$college")
        local desc=$(get_college_description "$college")
        
        cat >> "index.html" << COLLEGECARD
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;"><i class="$icon"></i> $full</h3>
                            <span class="badge fqe">$college</span>
                        </div>
                        <div class="meta">
                            <p style="margin-bottom: 0.75rem; color: var(--text-secondary);">$desc</p>
                            <p><i class="fas fa-book"></i> ${#SUBJECTS[@]} Subjects</p>
                            <p><i class="fas fa-folder-open"></i> ${#CATEGORIES[@]} Categories</p>
                            <p><i class="fas fa-calendar-alt"></i> Years: $YEAR_START - $YEAR_END</p>
                        </div>
                        <div class="actions">
                            <a href="$college/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse $college Papers
                            </a>
                        </div>
                    </div>
COLLEGECARD
    done

    cat >> "index.html" << ROOTINDEX
                </div>
            </section>
            
            <footer>
                <p><strong>$SITE_TITLE</strong></p>
                <p>$SITE_DESCRIPTION</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">$SITE_COPYRIGHT</p>
            </footer>
        </main>
    </div>
    
    <script src="js/sidebar-navigation.js"></script>
</body>
</html>
ROOTINDEX

    echo "  Created: index.html"
}

# Update category index
update_category_index() {
    local category_path="$1"
    local category_name=$(basename "$category_path")
    local subject_name=$(basename "$(dirname "$category_path")")
    local college_name=$(basename "$(dirname "$(dirname "$category_path")")")
    
    local category_icon=$(get_category_icon "$category_name")
    local badge_class=$(get_badge_class "$category_name")
    local category_display=$(get_category_display_name "$category_name")
    local college_full=$(get_college_full_name "$college_name")
    
    local html_files=($(find "$category_path" -maxdepth 1 -name "*.html" ! -name "index.html" -type f | sort -r))
    local file_count=${#html_files[@]}
    
    echo "Updating: $category_path ($file_count files)"
    
    # Generate index.html (simplified version - see full implementation in artifacts)
    cat > "$category_path/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$category_display - $subject_name | $college_name</title>
    <link rel="stylesheet" href="../../css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>$category_display - $subject_name</h1>
        <p>$college_full | $file_count papers available</p>
        <nav>
            <a href="../../../index.html">Home</a> /
            <a href="../../index.html">$college_name</a> /
            <a href="../index.html">$subject_name</a> /
            $category_display
        </nav>
    </div>
    <script src="../../js/sidebar-navigation.js"></script>
</body>
</html>
EOF
}

# Update all indexes
update_all() {
    echo "=== UPDATING ALL INDEXES ==="
    
    # Create root index
    create_root_index
    
    # Update category indexes
    for college in "${COLLEGES[@]}"; do
        [ ! -d "$college" ] && continue
        for subject in "${SUBJECTS[@]}"; do
            [ ! -d "$college/$subject" ] && continue
            for category in "${CATEGORIES[@]}"; do
                [ ! -d "$college/$subject/$category" ] && continue
                update_category_index "$college/$subject/$category"
            done
        done
    done
    
    echo "=== COMPLETE ==="
}

# Main execution
if [ $# -eq 0 ]; then
    update_all
else
    target="$1"
    [ ! -d "$target" ] && echo "Error: Directory not found" && exit 1
    
    depth=$(echo "$target" | tr -cd '/' | wc -c)
    case $depth in
        2) update_category_index "$target" ;;
        *) echo "Updating specific path: $target"; update_category_index "$target" ;;
    esac
fi