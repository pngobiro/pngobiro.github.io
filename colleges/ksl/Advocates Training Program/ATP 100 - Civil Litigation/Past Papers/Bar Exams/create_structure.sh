#!/bin/bash

# Educational Content Organization Script - Enhanced Version
# Creates hierarchical structure: College -> Subject -> Category

# Load dependencies
load_dependencies() {
    if [ -f "structure_config.sh" ]; then
        echo "Loading configuration..."
        source structure_config.sh
        echo "Configuration loaded!"
    else
        echo "Error: structure_config.sh not found!"
        exit 1
    fi
    
    if [ -f "helper_functions.sh" ]; then
        source helper_functions.sh
    fi
}

load_dependencies

# Interactive customization
customize_config() {
    echo "=== CUSTOMIZATION OPTIONS ==="
    echo "1. Use configuration from structure_config.sh"
    echo "2. Customize interactively (override config)"
    read -p "Choose option (1 or 2): " choice
    
    if [ "$choice" = "2" ]; then
        read -p "Colleges (comma-separated, current: ${COLLEGES[*]}): " custom
        [ ! -z "$custom" ] && IFS=',' read -ra COLLEGES <<< "$custom"
        
        read -p "Categories (comma-separated, current: ${CATEGORIES[*]}): " custom
        [ ! -z "$custom" ] && IFS=',' read -ra CATEGORIES <<< "$custom"
        
        read -p "Subjects (comma-separated, current: ${SUBJECTS[*]}): " custom
        [ ! -z "$custom" ] && IFS=',' read -ra SUBJECTS <<< "$custom"
        
        echo "Configuration updated!"
    fi
}

# Create subject CSS
create_subject_css() {
    cat > "$1/styles.css" << 'EOF'
@import url("../../styles.css");
:root {
    --subject-primary: #667eea;
    --subject-secondary: #764ba2;
}
.subject-header {
    background: linear-gradient(135deg, var(--subject-primary), var(--subject-secondary));
    color: white;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}
@media (max-width: 768px) {
    .subject-header { padding: 1rem; }
}
EOF
    log_message "INFO" "Created CSS: $1/styles.css"
}

# Create images directory
create_subject_images() {
    ensure_directory "$1/images"
    cat > "$1/images/README.md" << EOF
# Images Directory for $(basename "$1")

## File Naming Convention:
- Use descriptive names: \`diagram-name.jpg\`
- Include date if relevant: \`2024-image.png\`

## Supported Formats:
- Images: .jpg, .png, .gif, .svg
- Documents: .pdf
- Vector: .svg (preferred)
EOF
    echo "# Images" > "$1/images/.gitkeep"
    log_message "INFO" "Created images: $1/images"
}

# Create JavaScript
create_sidebar_js() {
    cat > "$1/sidebar-navigation.js" << 'EOF'
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (toggle && sidebar && backdrop) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            toggle.querySelector('i').className = sidebar.classList.contains('active') ? 
                'fas fa-times' : 'fas fa-bars';
        });
        
        backdrop.addEventListener('click', () => {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        });
    }
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const saved = localStorage.getItem('theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
            updateTheme(saved);
        }
        
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateTheme(newTheme);
        });
    }
    
    function updateTheme(theme) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        text.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
});
EOF
    log_message "INFO" "Created JS: $1/sidebar-navigation.js"
}

# Create placeholder category index
create_category_placeholder() {
    local path="$1"
    local category=$(basename "$path")
    local subject=$(basename "$(dirname "$path")")
    local college=$(basename "$(dirname "$(dirname "$path")")")
    
    local cat_display=$(get_category_display_name "$category")
    local college_full=$(get_college_full_name "$college")
    
    {
        generate_html_head "$cat_display - $subject | $college" \
                          "$cat_display for $subject at $college_full" \
                          "../../css/styles.css"
        
        cat << EOF
<body>
    <div class="container" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
EOF
        
        generate_breadcrumb \
            "<a href=\"../../../index.html\"><i class=\"fas fa-home\"></i> Home</a>" \
            "<a href=\"../../index.html\">$college</a>" \
            "<a href=\"../index.html\">$subject</a>" \
            "<span>$cat_display</span>"
        
        cat << EOF
        <header style="margin-bottom: 2rem;">
            <h1><i class="fas fa-folder-open"></i> $cat_display</h1>
            <p>$subject • $college_full</p>
        </header>
        <main style="text-align: center; padding: 3rem 1rem;">
            <i class="fas fa-clock" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem;"></i>
            <h2>Papers Coming Soon</h2>
            <p>We're adding papers to this category. Check back soon!</p>
            <a href="../index.html" class="btn" style="margin-top: 1rem;">
                <i class="fas fa-arrow-left"></i> Back to $subject
            </a>
        </main>
        <footer style="text-align: center; padding: 2rem; color: #999;">
            <p>$SITE_COPYRIGHT</p>
        </footer>
    </div>
</body>
</html>
EOF
    } > "$path/index.html"
}

# Create college index pages (using helper functions)
create_college_index() {
    local college="$1"
    local college_full=$(get_college_full_name "$college")
    local college_icon=$(get_college_icon "$college")
    
    {
        generate_html_head "$college - Past Papers" \
                          "Past papers for $college_full" \
                          "../styles.css"
        
        echo "<body>"
        generate_sidebar "$college_icon" "$college"
        
        cat << EOF
                <a href="../index.html" class="nav-item"><i class="fas fa-home"></i><span>Home</span></a>
                <a href="#overview" class="nav-item active"><i class="fas fa-info-circle"></i><span>Overview</span></a>
                <a href="#subjects" class="nav-item"><i class="fas fa-book"></i><span>Subjects</span></a>
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
EOF
        
        for subject in "${SUBJECTS[@]}"; do
            local icon=$(get_subject_icon "$subject")
            echo "                    <a href=\"$subject/index.html\" class=\"nav-item sub-item\"><i class=\"$icon\"></i><span>$subject</span></a>"
        done
        
        generate_sidebar_footer
        
        echo "        <main class=\"main-content\">"
        generate_page_header "fqe" "$college" "$college_full" "Past Papers Collection" "${#SUBJECTS[@]} Subjects Available"
        
        cat << EOF
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> About This Collection</h2>
                <p>Access all past examination papers from $college_full. Browse by subject to find papers for your course.</p>
EOF
        
        generate_stats_cards "${#SUBJECTS[@]}" "Subjects" \
                            "${#CATEGORIES[@]}" "Categories" \
                            "$YEAR_START-$YEAR_END" "Year Range"
        
        echo "            </section>"
        echo "            <section id=\"subjects\" class=\"category-section\">"
        generate_section_header "fas fa-book" "Select Your Subject"
        echo "                <div class=\"paper-grid\">"
        
        local idx=0
        for subject in "${SUBJECTS[@]}"; do
            local icon=$(get_subject_icon "$subject")
            local desc=$(get_subject_description "$subject")
            local badge_class="fqe"
            ((idx % 3 == 0)) && badge_class="cat"
            ((idx % 3 == 2)) && badge_class="practical"
            
            local meta="<p><i class=\"fas fa-book-open\"></i> $desc</p>
                            <p><i class=\"fas fa-folder-open\"></i> Categories: ${#CATEGORIES[@]}</p>
                            <p><i class=\"fas fa-file-alt\"></i> Multiple Past Papers</p>"
            
            generate_paper_card "$icon" "$subject" "$badge_class" "Level $((idx + 1))" \
                               "$meta" "$subject/index.html" "Browse $subject"
            ((idx++))
        done
        
        echo "                </div>"
        echo "            </section>"
        
        generate_footer "$college Past Papers" "$college_full"
        generate_scripts "../js/sidebar-navigation.js"
        
    } > "$college/index.html"
    
    log_message "INFO" "Created college index: $college/index.html"
}

# Create subject index (simplified with helpers)
create_subject_index() {
    local college="$1"
    local subject="$2"
    local college_full=$(get_college_full_name "$college")
    local subject_icon=$(get_subject_icon "$subject")
    
    {
        generate_html_head "$subject - Past Papers | $college" \
                          "$subject past papers for $college_full" \
                          "css/styles.css"
        
        echo "<body>"
        generate_sidebar "$subject_icon" "$subject"
        
        cat << EOF
                <a href="#overview" class="nav-item active"><i class="fas fa-home"></i><span>Overview</span></a>
                <a href="#categories" class="nav-item"><i class="fas fa-folder-open"></i><span>Browse</span></a>
                <div class="nav-group">
                    <div class="nav-group-title">Categories</div>
EOF
        
        for category in "${CATEGORIES[@]}"; do
            local icon=$(get_category_icon "$category")
            local display=$(get_category_display_name "$category")
            echo "                    <a href=\"$category/index.html\" class=\"nav-item sub-item\"><i class=\"$icon\"></i><span>$display</span></a>"
        done
        
        generate_sidebar_footer
        
        echo "        <main class=\"main-content\">"
        generate_page_header "fqe" "$college" "$college_full" "$subject" "Past Papers Collection"
        
        echo "            <section id=\"overview\" class=\"intro\">"
        echo "                <h2><i class=\"fas fa-info-circle\"></i> Comprehensive Archive</h2>"
        echo "                <p>Access all $subject past papers organized by type.</p>"
        
        generate_stats_cards "${#CATEGORIES[@]}+" "Categories" \
                            "$YEAR_START-$YEAR_END" "Year Range" \
                            "Multiple" "Papers"
        
        echo "            </section>"
        echo "            <section id=\"categories\" class=\"category-section\">"
        generate_section_header "fas fa-folder-open" "Browse by Exam Type"
        echo "                <div class=\"paper-grid\">"
        
        for category in "${CATEGORIES[@]}"; do
            local icon=$(get_category_icon "$category")
            local display=$(get_category_display_name "$category")
            local desc=$(get_category_description "$category")
            local badge=$(get_badge_class "$category")
            
            local meta="<p><i class=\"$icon\"></i> $desc</p>
                            <p><i class=\"fas fa-file-alt\"></i> Available Papers: <span id=\"${category,,}-count\">0</span></p>
                            <p><i class=\"fas fa-calendar-alt\"></i> Years: $YEAR_START - $YEAR_END</p>"
            
            generate_paper_card "$icon" "$display" "$badge" "$category" \
                               "$meta" "$category/index.html" "Browse $category Papers"
        done
        
        echo "                </div>"
        echo "            </section>"
        
        generate_footer "$subject Past Papers" "$college_full"
        generate_scripts "../../js/sidebar-navigation.js"
        
    } > "$college/$subject/index.html"
    
    log_message "INFO" "Created subject index: $college/$subject/index.html"
}

# Main structure creation
create_structure() {
    echo "=== CREATING CONTENT STRUCTURE ==="
    
    validate_config || exit 1
    
    # Create base directories
    for dir in "${BASE_DIRS[@]}"; do
        ensure_directory "$dir"
        log_message "INFO" "Created base: $dir"
    done
    
    # Create college/subject/category structure
    for college in "${COLLEGES[@]}"; do
        log_message "INFO" "Creating college: $college"
        
        for subject in "${SUBJECTS[@]}"; do
            local subject_path="$college/$subject"
            ensure_directory "$subject_path"
            
            # Create categories
            for category in "${CATEGORIES[@]}"; do
                ensure_directory "$subject_path/$category"
                create_category_placeholder "$subject_path/$category"
            done
            
            # Create subject resources
            ensure_directory "$subject_path/css"
            [ -f "styles.css" ] && cp "styles.css" "$subject_path/css/"
            create_subject_css "$subject_path"
            create_subject_images "$subject_path"
            ensure_directory "$subject_path/js"
            create_sidebar_js "$subject_path/js"
            
            create_subject_index "$college" "$subject"
        done
        
        create_college_index "$college"
    done
    
    # Create global JS
    ensure_directory "js"
    create_sidebar_js "js"
    
    log_message "SUCCESS" "Structure created successfully!"
}

# Main execution
main() {
    customize_config
    echo ""
    echo "Configuration:"
    echo "  Colleges: ${COLLEGES[*]}"
    echo "  Subjects: ${SUBJECTS[*]}"
    echo "  Categories: ${CATEGORIES[*]}"
    echo ""
    
    create_structure
    
    echo ""
    echo "=== COMPLETE ==="
    echo "Run './update_index.sh' to populate category indexes"
}

main
