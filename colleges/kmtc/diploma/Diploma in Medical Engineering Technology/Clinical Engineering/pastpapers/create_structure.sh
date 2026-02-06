#!/bin/bash

# Medical Education Content Organization Script
# Creates hierarchical structure: College -> Subject -> Category

# Function to load configuration from structure_config.sh
load_config() {
    if [ -f "structure_config.sh" ]; then
        echo "Loading configuration from structure_config.sh..."
        source structure_config.sh
        echo "Configuration loaded successfully!"
    else
        echo "Error: structure_config.sh not found!"
        echo "Please create structure_config.sh with COLLEGES, CATEGORIES, SUBJECTS, and BASE_DIRS arrays."
        exit 1
    fi
}

# Function to customize configuration
customize_config() {
    echo "=== CUSTOMIZATION OPTIONS ==="
    echo "1. Use configuration from structure_config.sh"
    echo "2. Customize interactively (will override config file)"
    read -p "Choose option (1 or 2): " choice
    
    if [ "$choice" = "2" ]; then
        echo ""
        echo "Enter colleges (comma-separated, or press Enter for current):"
        echo "Current: ${COLLEGES[*]}"
        read -p "Colleges: " custom_colleges
        if [ ! -z "$custom_colleges" ]; then
            IFS=',' read -ra COLLEGES <<< "$custom_colleges"
            for i in "${!COLLEGES[@]}"; do
                COLLEGES[i]=$(echo "${COLLEGES[i]}" | xargs)
            done
        fi
        
        echo ""
        echo "Enter categories (comma-separated, or press Enter for current):"
        echo "Current: ${CATEGORIES[*]}"
        read -p "Categories: " custom_categories
        if [ ! -z "$custom_categories" ]; then
            IFS=',' read -ra CATEGORIES <<< "$custom_categories"
            for i in "${!CATEGORIES[@]}"; do
                CATEGORIES[i]=$(echo "${CATEGORIES[i]}" | xargs)
            done
        fi
        
        echo ""
        echo "Enter subjects (comma-separated, or press Enter for current):"
        echo "Current: ${SUBJECTS[*]}"
        read -p "Subjects: " custom_subjects
        if [ ! -z "$custom_subjects" ]; then
            IFS=',' read -ra SUBJECTS <<< "$custom_subjects"
            for i in "${!SUBJECTS[@]}"; do
                SUBJECTS[i]=$(echo "${SUBJECTS[i]}" | xargs)
            done
        fi
    fi
}

# Load configuration first
load_config

# Function to create CSS file at subject level
create_subject_css() {
    local css_path="$1/styles.css"
    
    cat > "$css_path" << 'EOF'
/* Subject-level CSS - Medical Education Content Management */
/* This CSS file is specific to this subject and can be customized */

/* Import base styles - adjust path as needed */
@import url("../../styles.css");

/* Subject-specific overrides and additions */
:root {
    --subject-primary: #667eea;
    --subject-secondary: #764ba2;
    --subject-accent: #48bb78;
}

/* Custom styling for this subject */
.subject-header {
    background: linear-gradient(135deg, var(--subject-primary) 0%, var(--subject-secondary) 100%);
    color: white;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.category-card {
    border-left: 4px solid var(--subject-primary);
    transition: all 0.3s ease;
}

.category-card:hover {
    border-left-color: var(--subject-accent);
    transform: translateX(4px);
}

/* Subject-specific file type icons */
.file-type-pdf::before {
    content: "📄";
    margin-right: 0.5rem;
}

.file-type-doc::before {
    content: "📝";
    margin-right: 0.5rem;
}

.file-type-image::before {
    content: "🖼️";
    margin-right: 0.5rem;
}

/* Responsive adjustments for this subject */
@media (max-width: 768px) {
    .subject-header {
        padding: 1rem;
    }
}
EOF
    
    echo "Created CSS file: $css_path"
}

# Function to create images directory at subject level
create_subject_images() {
    local images_path="$1/images"
    
    # Create simple images directory
    mkdir -p "$images_path"
    
    # Create a README file for the images directory
    cat > "$images_path/README.md" << EOF
# Images Directory for $(basename "$1")

This directory contains all images and media files for this subject.

## File Naming Convention:
- Use descriptive names: \`clinical-equipment-diagram.jpg\`
- Include date if relevant: \`2024-lab-setup.png\`
- Use consistent format: \`topic-description-type.extension\`

## Supported Formats:
- **Images**: .jpg, .png, .gif, .svg
- **Documents**: .pdf (for image-heavy documents)
- **Vector**: .svg (preferred for diagrams)

## Usage in HTML:
\`\`\`html
<img src="images/clinical-equipment.jpg" alt="Clinical Equipment" class="subject-image">
\`\`\`

## Organization Tips:
- Keep filenames descriptive and consistent
- Use lowercase with hyphens for spaces
- Group related images with common prefixes
- Example: \`equipment-monitor.jpg\`, \`equipment-ventilator.jpg\`
EOF
    
    # Create a simple placeholder file
    echo "# Images for $(basename "$1")" > "$images_path/.gitkeep"
    
    echo "Created images directory: $images_path"
}

# Function to create sidebar navigation JavaScript
create_sidebar_navigation_js() {
    local js_path="$1"
    
    cat > "$js_path/sidebar-navigation.js" << 'EOF'
// Sidebar Navigation JavaScript for Medical Education Archive

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (mobileToggle && sidebar && backdrop) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            
            // Update toggle icon
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close sidebar when clicking backdrop
        backdrop.addEventListener('click', function() {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            mobileToggle.querySelector('i').className = 'fas fa-bars';
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeToggle(savedTheme);
        }
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggle(newTheme);
        });
    }
    
    function updateThemeToggle(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav item
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Highlight current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initialize active nav
    updateActiveNav();
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                backdrop.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            mobileToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
});

// Paper count animation (if elements exist)
function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Initialize count animations when elements are visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const count = parseInt(element.textContent) || 0;
            if (count > 0) {
                animateCount(element, count);
                observer.unobserve(element);
            }
        }
    });
});

// Observe all count elements
document.querySelectorAll('[id$="-count"]').forEach(el => {
    observer.observe(el);
});
EOF
    
    echo "Created JavaScript file: $js_path/sidebar-navigation.js"
}

# Function to create enhanced index.html for directories
create_index_html() {
    local dir_path="$1"
    local title="$2"
    local parent_path="$3"
    
    # Simple fallback for utility directories
    cat > "$dir_path/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header class="simple-header">
            <nav class="breadcrumb">
                $(if [ "$parent_path" != "" ]; then echo "<a href=\"$parent_path\" class=\"breadcrumb-link\"><i class=\"fas fa-arrow-left\"></i> Back</a>"; fi)
            </nav>
            <h1><i class="fas fa-folder"></i> $title</h1>
        </header>
        
        <main>
            <div class="content-grid">
EOF

    # Add subdirectory links
    for item in "$dir_path"/*; do
        if [ -d "$item" ] && [ "$(basename "$item")" != "." ] && [ "$(basename "$item")" != ".." ]; then
            local item_name=$(basename "$item")
            echo "                <div class=\"card utility-card\">" >> "$dir_path/index.html"
            echo "                    <div class=\"card-header\">" >> "$dir_path/index.html"
            echo "                        <i class=\"fas fa-folder-open\"></i>" >> "$dir_path/index.html"
            echo "                        <h3><a href=\"$item_name/index.html\">$item_name</a></h3>" >> "$dir_path/index.html"
            echo "                    </div>" >> "$dir_path/index.html"
            echo "                    <div class=\"card-body\">" >> "$dir_path/index.html"
            echo "                        <p>Browse $item_name content</p>" >> "$dir_path/index.html"
            echo "                    </div>" >> "$dir_path/index.html"
            echo "                </div>" >> "$dir_path/index.html"
        fi
    done

    cat >> "$dir_path/index.html" << EOF
            </div>
        </main>
        
        <footer class="page-footer">
            <p>&copy; 2025 Medical Education Content Management System</p>
        </footer>
    </div>
</body>
</html>
EOF
}

# Function to create category index (placeholder - will be updated by update_index.sh)
create_paper_index() {
    local dir_path="$1"
    local title="$2"
    local category_name=$(basename "$dir_path")
    local subject_name=$(basename "$(dirname "$dir_path")")
    local college_name=$(basename "$(dirname "$(dirname "$dir_path")")")
    
    cat > "$dir_path/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$category_name - $subject_name | $college_name</title>
    <link rel="stylesheet" href="../../css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .coming-soon {
            text-align: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
            border-radius: 1rem;
            margin: 2rem 0;
        }
        .coming-soon-icon {
            font-size: 4rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
        }
        .coming-soon h2 {
            font-size: 1.75rem;
            color: var(--text-primary);
            margin-bottom: 0.75rem;
        }
        .coming-soon p {
            color: var(--text-secondary);
            max-width: 400px;
            margin: 0 auto 1.5rem;
            line-height: 1.6;
        }
        .breadcrumb-nav {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 0;
            font-size: 0.875rem;
            color: var(--text-secondary);
            flex-wrap: wrap;
        }
        .breadcrumb-nav a {
            color: var(--primary-color);
            text-decoration: none;
        }
        .breadcrumb-nav a:hover {
            text-decoration: underline;
        }
        .page-header {
            margin-bottom: 2rem;
        }
        .page-header h1 {
            font-size: 2rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }
        .page-header .subtitle {
            color: var(--text-secondary);
        }
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
            .coming-soon {
                padding: 2.5rem 1.5rem;
                margin: 1rem 0;
            }
            .coming-soon-icon {
                font-size: 3rem;
            }
            .coming-soon h2 {
                font-size: 1.5rem;
            }
            .coming-soon p {
                font-size: 0.9375rem;
            }
            .breadcrumb-nav {
                font-size: 0.8125rem;
            }
            .page-header h1 {
                font-size: 1.5rem;
            }
        }
        @media (max-width: 480px) {
            .coming-soon {
                padding: 2rem 1rem;
            }
            .coming-soon-icon {
                font-size: 2.5rem;
            }
            .coming-soon h2 {
                font-size: 1.25rem;
            }
            .page-header h1 {
                font-size: 1.25rem;
            }
            .breadcrumb-nav {
                font-size: 0.75rem;
                gap: 0.25rem;
            }
        }
    </style>
</head>
<body>
    <div class="container" style="max-width: 800px; margin: 0 auto; padding: clamp(1rem, 4vw, 2rem);">
        <nav class="breadcrumb-nav">
            <a href="../../../index.html"><i class="fas fa-home"></i> Home</a>
            <span>/</span>
            <a href="../../index.html">$college_name</a>
            <span>/</span>
            <a href="../index.html">$subject_name</a>
            <span>/</span>
            <span>$category_name</span>
        </nav>
        
        <header class="page-header">
            <h1><i class="fas fa-folder-open" style="margin-right: 0.5rem; color: var(--primary-color);"></i> $category_name</h1>
            <p class="subtitle">$subject_name • $college_name</p>
        </header>
        
        <main>
            <div class="coming-soon">
                <div class="coming-soon-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h2>Papers Coming Soon</h2>
                <p>We're working on adding past papers to this category. Check back soon for updates!</p>
                <a href="../index.html" class="btn" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 500;">
                    <i class="fas fa-arrow-left"></i> Back to $subject_name
                </a>
            </div>
        </main>
        
        <footer style="text-align: center; padding: 2rem 0; color: var(--text-tertiary); font-size: 0.875rem;">
            <p>© 2025 Medical Education Content Management System</p>
        </footer>
    </div>
</body>
</html>
EOF
}

# Function to create root index.html with enhanced design
create_root_index() {
    cat > "index.html" << 'EOF'
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
EOF

    # Add college links to sidebar
    for college in "${COLLEGES[@]}"; do
        local college_icon="fas fa-hospital"
        case "$college" in
            "KMTC") college_icon="fas fa-hospital" ;;
            "MKU") college_icon="fas fa-mountain" ;;
            "MMU") college_icon="fas fa-desktop" ;;
        esac
        
        cat >> "index.html" << EOF
                    <a href="$college/index.html" class="nav-item sub-item">
                        <i class="$college_icon"></i>
                        <span>$college Papers</span>
                    </a>
EOF
    done

    cat >> "index.html" << 'EOF'
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
                <p>Access organized past examination papers from leading medical education institutions. Browse by college to find papers for your specific program and subjects.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">3</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Colleges</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">9+</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Subjects</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color);">7</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Categories</div>
                    </div>
                </div>
            </section>
            
            <section id="colleges" class="category-section">
                <h2><i class="fas fa-university"></i> Select Your College</h2>
                <div class="paper-grid">
EOF

    # Add college cards dynamically
    for college in "${COLLEGES[@]}"; do
        local college_icon="fas fa-hospital"
        local college_full_name="$college"
        
        # Set specific icons and names for known colleges
        case "$college" in
            "KMTC") 
                college_icon="fas fa-hospital"
                college_full_name="Kenya Medical Training College"
                ;;
            "MKU") 
                college_icon="fas fa-mountain"
                college_full_name="Mount Kenya University"
                ;;
            "MMU") 
                college_icon="fas fa-desktop"
                college_full_name="Multimedia University"
                ;;
        esac
        
        cat >> "index.html" << EOF
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;"><i class="$college_icon" style="margin-right: 0.5rem;"></i> $college_full_name</h3>
                            <span class="badge fqe">$college</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-book"></i> ${#SUBJECTS[@]} Subjects Available</p>
                            <p><i class="fas fa-file-alt"></i> Multiple Past Papers</p>
                            <p><i class="fas fa-calendar-alt"></i> Years: 2020 - 2025</p>
                        </div>
                        <div class="actions">
                            <a href="$college/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse $college Papers
                            </a>
                        </div>
                    </div>
EOF
    done

    cat >> "index.html" << 'EOF'
                </div>
            </section>
            
            <footer>
                <p><strong>Medical Education Past Papers Archive</strong></p>
                <p>Comprehensive Collection for Medical & Health Education Programs</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Medical Education Content Management System</p>
            </footer>
        </main>
    </div>
    
    <script src="js/sidebar-navigation.js"></script>
</body>
</html>
EOF

}

# Function to create college index.html with sidebar layout
create_college_index() {
    local college="$1"
    local college_full_name="$college"
    local college_icon="fas fa-hospital"
    
    # Set specific names and icons for known colleges
    case "$college" in
        "KMTC") 
            college_full_name="Kenya Medical Training College"
            college_icon="fas fa-hospital"
            ;;
        "MKU") 
            college_full_name="Mount Kenya University"
            college_icon="fas fa-mountain"
            ;;
        "MMU") 
            college_full_name="Multimedia University"
            college_icon="fas fa-desktop"
            ;;
    esac
    
    cat > "$college/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$college - Medical Education Papers</title>
    <meta name="description" content="Past examination papers for $college_full_name">
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
                    <i class="$college_icon"></i>
                    <span>$college</span>
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
EOF

    # Add subject links to sidebar
    for subject in "${SUBJECTS[@]}"; do
        local subject_icon="fas fa-cogs"
        case "$subject" in
            *"1"*) subject_icon="fas fa-cogs" ;;
            *"2"*) subject_icon="fas fa-microchip" ;;
            *"3"*) subject_icon="fas fa-stethoscope" ;;
        esac
        
        cat >> "$college/index.html" << EOF
                    <a href="$subject/index.html" class="nav-item sub-item">
                        <i class="$subject_icon"></i>
                        <span>$subject</span>
                    </a>
EOF
    done

    cat >> "$college/index.html" << EOF
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
                    <span class="badge fqe">$college</span>
                    <span class="date">
                        <i class="fas fa-university"></i> $college_full_name
                    </span>
                </div>
                <h1>Past Papers Collection</h1>
                <p class="subtitle">${#SUBJECTS[@]} Subjects Available</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> About This Collection</h2>
                <p>Access all Clinical Engineering past examination papers from $college_full_name. Browse by subject to find papers for your specific course level.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">${#SUBJECTS[@]}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Subjects</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">${#CATEGORIES[@]}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Categories</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color);">2020-2025</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Year Range</div>
                    </div>
                </div>
            </section>
            
            <section id="subjects" class="category-section">
                <h2><i class="fas fa-book"></i> Select Your Subject</h2>
                <div class="paper-grid">
EOF

    # Add subject cards dynamically
    local subject_count=1
    for subject in "${SUBJECTS[@]}"; do
        local subject_icon="fas fa-cogs"
        local subject_description="Foundation concepts and practical applications"
        local badge_style="fqe"
        
        # Set specific icons and descriptions based on subject level
        case "$subject_count" in
            1) 
                subject_icon="fas fa-cogs"
                subject_description="Foundation concepts in clinical engineering, medical device basics, and safety protocols."
                badge_style="cat"
                ;;
            2) 
                subject_icon="fas fa-microchip"
                subject_description="Advanced clinical engineering topics, equipment maintenance, and troubleshooting."
                badge_style="fqe"
                ;;
            3) 
                subject_icon="fas fa-stethoscope"
                subject_description="Specialized clinical engineering applications, project management, and quality assurance."
                badge_style="practical"
                ;;
        esac
        
        cat >> "$college/index.html" << EOF
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;"><i class="$subject_icon" style="margin-right: 0.5rem;"></i> $subject</h3>
                            <span class="badge $badge_style">Level $subject_count</span>
                        </div>
                        <div class="meta">
                            <p><i class="fas fa-book-open"></i> $subject_description</p>
                            <p><strong><i class="fas fa-folder-open"></i> Categories: ${#CATEGORIES[@]}</strong></p>
                            <p><i class="fas fa-file-alt"></i> Multiple Past Papers Available</p>
                        </div>
                        <div class="actions">
                            <a href="$subject/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse $subject
                            </a>
                        </div>
                    </div>
EOF
        ((subject_count++))
    done

    cat >> "$college/index.html" << EOF
                </div>
            </section>
            
            <footer>
                <p><strong>$college Clinical Engineering Past Papers</strong></p>
                <p>$college_full_name - Diploma in Medical Engineering</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Medical Education Content Management System</p>
            </footer>
        </main>
    </div>
    
    <script src="../js/sidebar-navigation.js"></script>
</body>
</html>
EOF
}

# Function to create subject index.html with sidebar layout
create_subject_index() {
    local college="$1"
    local subject="$2"
    local college_full_name="$college"
    local subject_icon="fas fa-cogs"
    
    # Set college full names
    case "$college" in
        "KMTC") college_full_name="Kenya Medical Training College" ;;
        "MKU") college_full_name="Mount Kenya University" ;;
        "MMU") college_full_name="Multimedia University" ;;
    esac
    
    # Set subject icon based on subject name
    case "$subject" in
        *"1"*) subject_icon="fas fa-cogs" ;;
        *"2"*) subject_icon="fas fa-microchip" ;;
        *"3"*) subject_icon="fas fa-stethoscope" ;;
    esac
    
    cat > "$college/$subject/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$subject - Past Papers Archive | $college</title>
    <meta name="description" content="Comprehensive collection of $subject past examination papers for students at $college_full_name">
    <link rel="stylesheet" href="css/styles.css">
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
                    <i class="$subject_icon"></i>
                    <span>$subject</span>
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
                
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
EOF

    # Add quick access links for each category
    for category in "${CATEGORIES[@]}"; do
        local category_icon="fas fa-file-alt"
        local category_display="$category"
        
        case "$category" in
            "CATs") 
                category_icon="fas fa-edit"
                category_display="CAT Papers"
                ;;
            "FQE") 
                category_icon="fas fa-graduation-cap"
                category_display="FQE Papers"
                ;;
            "PRACTICAL") 
                category_icon="fas fa-tools"
                category_display="Practical"
                ;;
            "END_OF_SEMESTER") 
                category_icon="fas fa-calendar-alt"
                category_display="End of Semester"
                ;;
            "END_OF_YEAR") 
                category_icon="fas fa-trophy"
                category_display="End of Year"
                ;;
            "SUPPLEMENTARY") 
                category_icon="fas fa-redo"
                category_display="Supplementary"
                ;;
            "UPGRADING") 
                category_icon="fas fa-level-up-alt"
                category_display="Upgrading"
                ;;
        esac
        
        cat >> "$college/$subject/index.html" << EOF
                    <a href="$category/index.html" class="nav-item sub-item">
                        <i class="$category_icon"></i>
                        <span>$category_display</span>
                    </a>
EOF
    done

    cat >> "$college/$subject/index.html" << EOF
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
                    <span class="badge fqe">$college</span>
                    <span class="date">
                        <i class="fas fa-university"></i> $college_full_name
                    </span>
                </div>
                <h1>$subject</h1>
                <p class="subtitle">Past Papers Collection | $college_full_name</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> Comprehensive Archive</h2>
                <p>Access all $subject past examination papers organized by type. Study with comprehensive questions and detailed solutions.</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-color);">${#CATEGORIES[@]}+</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Categories</div>
                    </div>
                    <div style="flex: 1; min-width: 200px; padding: 1rem; background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 0.75rem; border: 1px solid var(--border-light);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary-color);">2020-2025</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Year Range</div>
                    </div>
                </div>
            </section>
            
            <section id="categories" class="category-section">
                <h2><i class="fas fa-folder-open"></i> Browse by Exam Type</h2>
                <div class="paper-grid">
EOF

    # Add category cards
    for category in "${CATEGORIES[@]}"; do
        local category_icon="fas fa-file-alt"
        local category_description="Examination papers"
        local category_badge_class="fqe"
        local category_display="$category"
        
        case "$category" in
            "CATs")
                category_icon="fas fa-edit"
                category_description="Continuous Assessment Tests and evaluations"
                category_badge_class="cat"
                category_display="Continuous Assessment Tests"
                ;;
            "FQE")
                category_icon="fas fa-graduation-cap"
                category_description="Final Qualifying Examinations"
                category_badge_class="fqe"
                category_display="Final Qualifying Exams"
                ;;
            "PRACTICAL")
                category_icon="fas fa-tools"
                category_description="Practical examinations and lab assessments"
                category_badge_class="cat"
                category_display="Practical Exams"
                ;;
            "END_OF_SEMESTER")
                category_icon="fas fa-calendar-alt"
                category_description="End of semester examinations"
                category_badge_class="fqe"
                category_display="End of Semester Exams"
                ;;
            "END_OF_YEAR")
                category_icon="fas fa-trophy"
                category_description="End of year examinations"
                category_badge_class="fqe"
                category_display="End of Year Exams"
                ;;
            "SUPPLEMENTARY")
                category_icon="fas fa-redo"
                category_description="Supplementary and retake examinations"
                category_badge_class="cat"
                category_display="Supplementary Exams"
                ;;
            "UPGRADING")
                category_icon="fas fa-level-up-alt"
                category_description="Upgrading examinations"
                category_badge_class="fqe"
                category_display="Upgrading Exams"
                ;;
        esac
        
        cat >> "$college/$subject/index.html" << EOF
                    <div class="paper-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">$category_display</h3>
                            <span class="badge $category_badge_class">$category</span>
                        </div>
                        <div class="meta">
                            <p><i class="$category_icon"></i> $category_description</p>
                            <p><strong><i class="fas fa-file-alt"></i> Available Papers: <span id="${category,,}-count">0</span></strong></p>
                            <p><i class="fas fa-calendar-alt"></i> Years: 2020 - 2025</p>
                        </div>
                        <div class="actions">
                            <a href="$category/index.html" class="btn">
                                <i class="fas fa-arrow-right"></i> Browse $category Papers
                            </a>
                        </div>
                    </div>
EOF
    done

    cat >> "$college/$subject/index.html" << EOF
                </div>
            </section>
            
            <footer>
                <p><strong>$subject Past Papers Collection</strong></p>
                <p>$college_full_name</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 KNEC/$college</p>
            </footer>
        </main>
    </div>
    
    <script src="../../js/sidebar-navigation.js"></script>
    
    <script>
        // Dynamic paper count loading
        document.addEventListener('DOMContentLoaded', function() {
            const counts = {};
EOF

    # Add count IDs for each category
    for category in "${CATEGORIES[@]}"; do
        echo "            counts['${category,,}-count'] = 0;" >> "$college/$subject/index.html"
    done

    cat >> "$college/$subject/index.html" << 'EOF'
            
            Object.keys(counts).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = counts[id];
                }
            });
        });
    </script>
</body>
</html>
EOF
}

echo "=== MEDICAL EDUCATION CONTENT STRUCTURE GENERATOR ==="
echo ""

# Allow customization
customize_config

echo ""
echo "Creating medical education content structure..."
echo "Colleges: ${COLLEGES[*]}"
echo "Categories: ${CATEGORIES[*]}"
echo "Subjects: ${SUBJECTS[*]}"
echo ""

# Create base directories
for base_dir in "${BASE_DIRS[@]}"; do
    mkdir -p "$base_dir"
    echo "Created base directory: $base_dir"
done

# Create main structure
for college in "${COLLEGES[@]}"; do
    echo "Creating college: $college"
    
    for subject in "${SUBJECTS[@]}"; do
        echo "  Creating subject: $subject"
        
        # Create subject directory
        subject_path="$college/$subject"
        mkdir -p "$subject_path"
        
        # Create category subdirectories
        for category in "${CATEGORIES[@]}"; do
            category_path="$subject_path/$category"
            mkdir -p "$category_path"
            create_paper_index "$category_path" "$college - $subject - $category"
            echo "    Created category: $category"
        done
        
        # Create CSS folder and copy styles.css for this subject
        css_folder="$subject_path/css"
        mkdir -p "$css_folder"
        if [ -f "styles.css" ]; then
            cp "styles.css" "$css_folder/styles.css"
            echo "    Created CSS folder and copied styles.css"
        else
            echo "    Warning: styles.css not found in current directory"
        fi
        
        # Create images directory structure at subject level
        create_subject_images "$subject_path"
        
        # Create JavaScript folder and copy navigation script
        js_folder="$subject_path/js"
        mkdir -p "$js_folder"
        create_sidebar_navigation_js "$js_folder"
        
        # Create subject index with enhanced design
        create_subject_index "$college" "$subject"
    done
    
    # Create college index with enhanced design
    create_college_index "$college"
done

# Create root index with enhanced design
create_root_index

# Create global JavaScript folder
mkdir -p "js"
create_sidebar_navigation_js "js"

echo "Structure created successfully!"
echo ""
echo "Directory structure:"
echo "├── UNPROCESSED/"
echo "├── NOT_RELEVANT/"
for college in "${COLLEGES[@]}"; do
    echo "├── $college/"
    for subject in "${SUBJECTS[@]}"; do
        echo "│   ├── $subject/"
        for category in "${CATEGORIES[@]}"; do
            echo "│   │   ├── $category/"
            echo "│   │   │   └── index.html"
        done
        echo "│   │   └── index.html"
    done
    echo "│   └── index.html"
done
echo "└── index.html"