#!/bin/bash

# Shared Helper Functions for Archive System
# Source this file in both create_structure.sh and update_index.sh

# HTML Template Generation Functions

# Generate common HTML head section
generate_html_head() {
    local title="$1"
    local description="$2"
    local css_path="$3"
    
    cat << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title</title>
    <meta name="description" content="$description">
    <link rel="stylesheet" href="$css_path">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
EOF
}

# Generate sidebar navigation
generate_sidebar() {
    local icon="$1"
    local title="$2"
    shift 2
    local nav_items=("$@")
    
    cat << EOF
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>
    
    <div class="layout-container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="$icon"></i>
                    <span>$title</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
EOF
}

# Generate sidebar footer with theme toggle
generate_sidebar_footer() {
    cat << 'EOF'
            </nav>
            
            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </aside>
EOF
}

# Generate page footer
generate_footer() {
    local title="$1"
    local subtitle="$2"
    
    cat << EOF
            <footer>
                <p><strong>$title</strong></p>
                <p>$subtitle</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">$SITE_COPYRIGHT</p>
            </footer>
        </main>
    </div>
EOF
}

# Generate statistics cards
generate_stats_cards() {
    local stat1_value="$1"
    local stat1_label="$2"
    local stat2_value="$3"
    local stat2_label="$4"
    local stat3_value="$5"
    local stat3_label="$6"
    
    cat << EOF
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">$stat1_value</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">$stat1_label</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">$stat2_value</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">$stat2_label</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color);">$stat3_value</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">$stat3_label</div>
                    </div>
                </div>
EOF
}

# Generate paper card
generate_paper_card() {
    local icon="$1"
    local title="$2"
    local badge_class="$3"
    local badge_text="$4"
    local meta_lines="$5"
    local button_link="$6"
    local button_text="$7"
    
    cat << EOF
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;"><i class="$icon" style="margin-right: 0.5rem;"></i> $title</h3>
                            <span class="badge $badge_class">$badge_text</span>
                        </div>
                        <div class="meta">
$meta_lines
                        </div>
                        <div class="actions">
                            <a href="$button_link" class="btn">
                                <i class="fas fa-arrow-right"></i> $button_text
                            </a>
                        </div>
                    </div>
EOF
}

# Generate empty state message
generate_empty_state() {
    local message="$1"
    local submessage="$2"
    
    cat << EOF
                <div class="empty-state">
                    <i class="fas fa-inbox" style="font-size: 3rem; color: var(--text-tertiary); margin-bottom: 1rem;"></i>
                    <p>$message</p>
                    <p style="font-size: 0.875rem; color: var(--text-tertiary);">$submessage</p>
                </div>
EOF
}

# Generate breadcrumb navigation
generate_breadcrumb() {
    local items=("$@")
    local breadcrumb_html=""
    local is_first=true
    
    for item in "${items[@]}"; do
        if [ "$is_first" = true ]; then
            breadcrumb_html+="$item"
            is_first=false
        else
            breadcrumb_html+=" <span>/</span> $item"
        fi
    done
    
    cat << EOF
        <nav class="breadcrumb-nav" style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem 0; font-size: 0.875rem; color: var(--text-secondary); flex-wrap: wrap;">
            $breadcrumb_html
        </nav>
EOF
}

# Generate section header
generate_section_header() {
    local icon="$1"
    local title="$2"
    local count="$3"
    
    if [ -n "$count" ]; then
        echo "                <h2><i class=\"$icon\"></i> $title ($count)</h2>"
    else
        echo "                <h2><i class=\"$icon\"></i> $title</h2>"
    fi
}

# Generate page header
generate_page_header() {
    local badge_class="$1"
    local badge_text="$2"
    local meta_text="$3"
    local title="$4"
    local subtitle="$5"
    
    cat << EOF
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge $badge_class">$badge_text</span>
                    <span class="date">
                        <i class="fas fa-university"></i> $meta_text
                    </span>
                </div>
                <h1>$title</h1>
                <p class="subtitle">$subtitle</p>
            </header>
EOF
}

# Generate script tags
generate_scripts() {
    local js_path="$1"
    local additional_scripts="$2"
    
    cat << EOF
    
    <script src="$js_path"></script>
EOF
    
    if [ -n "$additional_scripts" ]; then
        echo "$additional_scripts"
    fi
    
    echo "</body>"
    echo "</html>"
}

# Utility function to count files in directory
count_files() {
    local dir="$1"
    local pattern="$2"
    find "$dir" -maxdepth 1 -name "$pattern" -type f 2>/dev/null | wc -l
}

# Utility function to get relative path
get_relative_path() {
    local from="$1"
    local to="$2"
    python3 -c "import os.path; print(os.path.relpath('$to', '$from'))" 2>/dev/null || echo "$to"
}

# Validate configuration
validate_config() {
    if [ ${#COLLEGES[@]} -eq 0 ]; then
        echo "Error: No colleges defined in configuration"
        return 1
    fi
    
    if [ ${#SUBJECTS[@]} -eq 0 ]; then
        echo "Error: No subjects defined in configuration"
        return 1
    fi
    
    if [ ${#CATEGORIES[@]} -eq 0 ]; then
        echo "Error: No categories defined in configuration"
        return 1
    fi
    
    return 0
}

# Create directory if it doesn't exist
ensure_directory() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
    fi
}

# Log message with timestamp
log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message"
}

# Check if file exists and is not empty
file_exists_and_not_empty() {
    local file="$1"
    [ -f "$file" ] && [ -s "$file" ]
}

# Format file size for display
format_file_size() {
    local size=$1
    if [ $size -lt 1024 ]; then
        echo "${size}B"
    elif [ $size -lt 1048576 ]; then
        echo "$((size / 1024))KB"
    else
        echo "$((size / 1048576))MB"
    fi
}

# Get file modification date
get_file_mod_date() {
    local file="$1"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f "%Sm" -t "%Y-%m-%d" "$file" 2>/dev/null
    else
        stat -c "%y" "$file" 2>/dev/null | cut -d' ' -f1
    fi
}

# Sanitize filename for web
sanitize_filename() {
    local filename="$1"
    # Remove special characters, replace spaces with hyphens
    echo "$filename" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9._-]/-/g' | sed 's/--*/-/g'
}

# Generate unique ID
generate_id() {
    local prefix="$1"
    echo "${prefix}_$(date +%s)_$$"
}

# Export all functions for use in other scripts
export -f generate_html_head
export -f generate_sidebar
export -f generate_sidebar_footer
export -f generate_footer
export -f generate_stats_cards
export -f generate_paper_card
export -f generate_empty_state
export -f generate_breadcrumb
export -f generate_section_header
export -f generate_page_header
export -f generate_scripts
export -f count_files
export -f get_relative_path
export -f validate_config
export -f ensure_directory
export -f log_message
export -f file_exists_and_not_empty
export -f format_file_size
export -f get_file_mod_date
export -f sanitize_filename
export -f generate_id