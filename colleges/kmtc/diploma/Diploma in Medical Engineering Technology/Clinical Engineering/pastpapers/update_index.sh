#!/bin/bash

# Update Index Script
# Scans for HTML files in category folders and updates index.html to list them
# Usage: ./update_index.sh [path]
# Example: ./update_index.sh "KMTC/Clinical Engineering 1/FQE"

# Load configuration if available
if [ -f "structure_config.sh" ]; then
    source structure_config.sh
fi

# Function to get icon for category
get_category_icon() {
    local category="$1"
    case "$category" in
        "CATs") echo "fas fa-edit" ;;
        "FQE") echo "fas fa-graduation-cap" ;;
        "END_OF_SEMESTER") echo "fas fa-calendar-alt" ;;
        "END_OF_YEAR") echo "fas fa-trophy" ;;
        "SUPPLEMENTARY") echo "fas fa-redo" ;;
        "UPGRADING") echo "fas fa-level-up-alt" ;;
        "PRACTICAL") echo "fas fa-flask" ;;
        *) echo "fas fa-file-alt" ;;
    esac
}

# Function to get badge class for category
get_badge_class() {
    local category="$1"
    case "$category" in
        "CATs") echo "cat" ;;
        "FQE") echo "fqe" ;;
        "PRACTICAL") echo "practical" ;;
        *) echo "default" ;;
    esac
}

# Function to extract title from HTML file
get_html_title() {
    local file="$1"
    local title=$(grep -oP '(?<=<title>).*(?=</title>)' "$file" 2>/dev/null | head -1)
    if [ -z "$title" ]; then
        # Fallback to filename without extension
        title=$(basename "$file" .html)
    fi
    echo "$title"
}

# Function to extract year from filename (e.g., 2023j-fqe.html -> 2023)
get_year_from_filename() {
    local filename="$1"
    echo "$filename" | grep -oP '^\d{4}' || echo "Unknown"
}

# Function to extract session from filename (e.g., 2023j-fqe.html -> July)
get_session_from_filename() {
    local filename="$1"
    local session_code=$(echo "$filename" | grep -oP '^\d{4}\K[a-z]' || echo "")
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

# Function to update category index
update_category_index() {
    local category_path="$1"
    local category_name=$(basename "$category_path")
    local subject_name=$(basename "$(dirname "$category_path")")
    local college_name=$(basename "$(dirname "$(dirname "$category_path")")")
    
    # Find all HTML files except index.html
    local html_files=($(find "$category_path" -maxdepth 1 -name "*.html" ! -name "index.html" -type f | sort -r))
    local file_count=${#html_files[@]}
    
    local category_icon=$(get_category_icon "$category_name")
    local badge_class=$(get_badge_class "$category_name")
    
    echo "Updating index for: $category_path ($file_count files found)"
    
    # Generate the index.html
    cat > "$category_path/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$category_name - $subject_name | $college_name</title>
    <meta name="description" content="$category_name past papers for $subject_name at $college_name">
    <link rel="stylesheet" href="../../css/styles.css">
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
                    <i class="$category_icon"></i>
                    <span>$category_name</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <a href="../../../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="../../index.html" class="nav-item">
                    <i class="fas fa-university"></i>
                    <span>$college_name</span>
                </a>
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-book"></i>
                    <span>$subject_name</span>
                </a>
                <a href="#papers" class="nav-item active">
                    <i class="fas fa-file-alt"></i>
                    <span>Papers ($file_count)</span>
                </a>
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
                    <span class="badge $badge_class">$category_name</span>
                    <span class="date">
                        <i class="fas fa-university"></i> $college_name
                    </span>
                </div>
                <h1>$category_name Papers</h1>
                <p class="subtitle">$subject_name - Past Examination Papers</p>
            </header>
            
            <section id="papers" class="category-section">
                <h2><i class="fas fa-file-alt"></i> Available Papers ($file_count)</h2>
EOF

    if [ $file_count -eq 0 ]; then
        cat >> "$category_path/index.html" << EOF
                <div class="empty-state">
                    <i class="fas fa-inbox" style="font-size: 3rem; color: var(--text-tertiary); margin-bottom: 1rem;"></i>
                    <p>No papers available yet in this category.</p>
                    <p style="font-size: 0.875rem; color: var(--text-tertiary);">Papers will appear here once they are processed and added.</p>
                </div>
EOF
    else
        cat >> "$category_path/index.html" << EOF
                <div class="paper-grid">
EOF
        # Add each HTML file as a card
        for html_file in "${html_files[@]}"; do
            local filename=$(basename "$html_file")
            local title=$(get_html_title "$html_file")
            local year=$(get_year_from_filename "$filename")
            local session=$(get_session_from_filename "$filename")
            local display_date="$year"
            [ -n "$session" ] && display_date="$session $year"
            
            cat >> "$category_path/index.html" << EOF
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;"><i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i> $title</h3>
                            <span class="badge $badge_class">$category_name</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-calendar-alt"></i> $display_date</p>
                            <p><i class="fas fa-book"></i> $subject_name</p>
                            <p><i class="fas fa-university"></i> $college_name</p>
                        </div>
                        <div class="actions">
                            <a href="$filename" class="btn">
                                <i class="fas fa-eye"></i> View Paper
                            </a>
                        </div>
                    </div>
EOF
        done
        
        cat >> "$category_path/index.html" << EOF
                </div>
EOF
    fi

    # Close the HTML
    cat >> "$category_path/index.html" << EOF
            </section>
            
            <footer>
                <p><strong>$category_name - $subject_name</strong></p>
                <p>$college_name Past Papers Archive</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Medical Education Content Management System</p>
            </footer>
        </main>
    </div>
    
    <script src="../../js/sidebar-navigation.js"></script>
</body>
</html>
EOF

    echo "  Updated: $category_path/index.html"
}

# Function to update all category indexes in a subject
update_subject_categories() {
    local subject_path="$1"
    
    echo "Scanning subject: $subject_path"
    
    # Find all category directories
    for category_dir in "$subject_path"/*/; do
        if [ -d "$category_dir" ]; then
            local dir_name=$(basename "$category_dir")
            # Skip css, images, js folders
            if [[ "$dir_name" != "css" && "$dir_name" != "images" && "$dir_name" != "js" ]]; then
                update_category_index "${category_dir%/}"
            fi
        fi
    done
}

# Function to update all indexes in a college
update_college_indexes() {
    local college_path="$1"
    
    echo "Scanning college: $college_path"
    
    # Find all subject directories
    for subject_dir in "$college_path"/*/; do
        if [ -d "$subject_dir" ]; then
            update_subject_categories "${subject_dir%/}"
        fi
    done
}

# Function to update all indexes in the entire structure
update_all_indexes() {
    echo "=== UPDATING ALL CATEGORY INDEXES ==="
    
    # Get colleges from config or use defaults
    local colleges=("${COLLEGES[@]:-KMTC MKU MMU}")
    
    for college in "${colleges[@]}"; do
        if [ -d "$college" ]; then
            update_college_indexes "$college"
        fi
    done
    
    echo ""
    echo "=== UPDATE COMPLETE ==="
}

# Main script logic
if [ $# -eq 0 ]; then
    # No arguments - update all indexes
    update_all_indexes
else
    target_path="$1"
    
    if [ ! -d "$target_path" ]; then
        echo "Error: Directory not found: $target_path"
        exit 1
    fi
    
    # Determine what level we're at based on path depth
    depth=$(echo "$target_path" | tr -cd '/' | wc -c)
    
    case $depth in
        0)
            # College level (e.g., "KMTC")
            update_college_indexes "$target_path"
            ;;
        1)
            # Subject level (e.g., "KMTC/Clinical Engineering 1")
            update_subject_categories "$target_path"
            ;;
        2)
            # Category level (e.g., "KMTC/Clinical Engineering 1/FQE")
            update_category_index "$target_path"
            ;;
        *)
            echo "Error: Invalid path depth. Use college, subject, or category path."
            exit 1
            ;;
    esac
fi

echo ""
echo "Done!"
