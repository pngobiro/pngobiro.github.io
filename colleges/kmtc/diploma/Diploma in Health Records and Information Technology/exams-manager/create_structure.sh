#!/bin/bash

# Educational Content Organization Script
# Creates hierarchical structure: College -> Subject -> Category
# Version: 2.0 - Improved CSS management

# ============================================================================
# CONFIGURATION
# ============================================================================

# Function to load configuration from structure_config.sh
load_config() {
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
    if [ -f "structure_config.sh" ]; then
        echo "Loading configuration from structure_config.sh..."
        source structure_config.sh
        echo "Configuration loaded successfully!"
    elif [ -f "$SCRIPT_DIR/structure_config.sh" ]; then
        echo "Loading configuration from $SCRIPT_DIR/structure_config.sh..."
        source "$SCRIPT_DIR/structure_config.sh"
        echo "Configuration loaded successfully!"
    else
        echo "Error: structure_config.sh not found!"
        echo "Please create structure_config.sh with COLLEGES, CATEGORIES, SUBJECTS, and BASE_DIRS arrays."
        exit 1
    fi
}

# Load configuration first
load_config

# ============================================================================
# CSS MANAGEMENT - CENTRALIZED APPROACH
# ============================================================================

# CSS is stored in ONE location: /assets/css/styles.css
# All HTML files reference this single source using relative paths
# This eliminates redundancy and makes updates easier

ASSETS_DIR="assets"
CSS_DIR="$ASSETS_DIR/css"
JS_DIR="$ASSETS_DIR/js"
IMAGES_DIR="$ASSETS_DIR/images"

# Function to calculate relative path to assets from any directory
get_assets_path() {
    local current_depth="$1"  # Number of directories deep from root
    local path=""
    for ((i=0; i<current_depth; i++)); do
        path="../$path"
    done
    echo "${path}assets"
}

# Function to create centralized assets directory
create_assets_directory() {
    echo "Creating centralized assets directory..."
    
    mkdir -p "$CSS_DIR"
    mkdir -p "$JS_DIR"
    mkdir -p "$IMAGES_DIR"
    
    # Copy or create main styles.css
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
    
    if [ -f "$CSS_DIR/styles.css" ] && [ $(wc -c < "$CSS_DIR/styles.css") -gt 1000 ]; then
        echo "  Preserving existing premium styles.css in $CSS_DIR/"
    elif [ -f "styles.css" ]; then
        cp "styles.css" "$CSS_DIR/styles.css"
        echo "  Copied styles.css from root to $CSS_DIR/"
    elif [ -f "$SCRIPT_DIR/styles.css" ]; then
        cp "$SCRIPT_DIR/styles.css" "$CSS_DIR/styles.css"
        echo "  Copied styles.css from script dir to $CSS_DIR/"
    else
        echo "  Warning: styles.css not found, generating premium placeholder from embedded kit..."
        cat > "$CSS_DIR/styles.css" << 'CSS_EOF'
/* ============================================================================
   MEDICAL EDUCATION PAST PAPERS - PREMIUM DESIGN SYSTEM
   Version: 2.1
   Embedded Fallback in create_structure.sh
   ============================================================================ */

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --primary-dark: #5568d3;
    --primary-light: #8b9cf7;
    --secondary-color: #48bb78;
    --secondary-dark: #38a169;
    --secondary-light: #68d391;
    --accent-color: #ed8936;
    --accent-dark: #dd6b20;
    --accent-light: #f6ad55;
    --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
    --info-color: #3b82f6;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-tertiary: #718096;
    --text-muted: #a0aec0;
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-tertiary: #edf2f7;
    --bg-card: #ffffff;
    --bg-overlay: rgba(0, 0, 0, 0.5);
    --border-light: #e2e8f0;
    --border-medium: #cbd5e0;
    --border-dark: #a0aec0;
    --border-focus: #667eea;
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-glow: 0 0 20px rgba(102, 126, 234, 0.3);
    --shadow-glow-hover: 0 0 30px rgba(102, 126, 234, 0.4);
    --sidebar-width: 280px;
    --header-height: 64px;
    --radius-xs: 0.25rem;
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] {
    --primary-color: #8b9cf7;
    --text-primary: #f8fafc;
    --text-secondary: #e2e8f0;
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-card: #1e293b;
    --border-light: #334155;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body { font-family: 'Inter', sans-serif; line-height: 1.6; color: var(--text-primary); background: var(--bg-primary); }

.layout-container { display: flex; min-height: 100vh; }
.sidebar { width: var(--sidebar-width); background: var(--bg-card); border-right: 1px solid var(--border-light); position: fixed; height: 100vh; z-index: 40; box-shadow: var(--shadow-lg); }
.sidebar-header { padding: 1.5rem; background: var(--primary-gradient); color: white; }
.sidebar-nav { padding: 1rem; }
.nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; color: var(--text-primary); text-decoration: none; border-radius: var(--radius-md); transition: all var(--transition-fast); }
.nav-item:hover { background: var(--bg-tertiary); transform: translateX(4px); }
.nav-item.active { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); color: var(--primary-color); }

.main-content { flex: 1; margin-left: var(--sidebar-width); min-height: 100vh; background: var(--bg-secondary); padding: 2rem; }
.paper-header { background: var(--bg-card); padding: 2rem; margin-bottom: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-sm); }
.paper-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
.paper-card { background: var(--bg-card); border-radius: var(--radius-xl); padding: 1.5rem; box-shadow: var(--shadow-md); border: 1px solid var(--border-light); transition: all var(--transition-base); display: flex; flex-direction: column; }
.paper-card:hover { box-shadow: var(--shadow-xl); transform: translateY(-4px); border-color: var(--primary-color); }
.badge { display: inline-flex; padding: 0.375rem 0.875rem; font-size: 0.75rem; font-weight: 700; border-radius: 9999px; background: var(--primary-gradient); color: white; margin-bottom: 1rem; }
.btn { display: inline-block; padding: 0.75rem 1.5rem; background: var(--primary-gradient); color: white; text-decoration: none; border-radius: var(--radius-md); font-weight: 600; text-align: center; transition: all var(--transition-base); }
.btn:hover { box-shadow: var(--shadow-glow); transform: translateY(-2px); }

@media (max-width: 1024px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.active { transform: translateX(0); }
    .main-content { margin-left: 0; }
}
CSS_EOF
    fi
    
    # Create sidebar navigation JS
    create_sidebar_navigation_js "$JS_DIR"
    
    # Create images README
    cat > "$IMAGES_DIR/README.md" << 'EOF'
# Global Images Directory

This directory contains shared images and media files used across the site.

## Organization
- `icons/` - UI icons and small graphics
- `logos/` - Institution logos and branding
- `common/` - Shared images used in multiple places

## Usage
Reference images using relative paths from your HTML file:
```html
<img src="../assets/images/logo.png" alt="Logo">
```
EOF
    
    echo "  Assets directory created at: $ASSETS_DIR/"
}

# ============================================================================
# JAVASCRIPT FUNCTIONS
# ============================================================================

create_sidebar_navigation_js() {
    local js_path="$1"
    
    cat > "$js_path/sidebar-navigation.js" << 'EOF'
// Sidebar Navigation JavaScript for Educational Content Archive

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (mobileToggle && sidebar && backdrop) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            
            const icon = this.querySelector('i');
            icon.className = sidebar.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
        
        backdrop.addEventListener('click', function() {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            mobileToggle.querySelector('i').className = 'fas fa-bars';
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
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
        if (!themeToggle) return;
        
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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
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
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
                backdrop.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            if (mobileToggle) mobileToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
});

// Paper count animation
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

document.querySelectorAll('[id$="-count"]').forEach(el => observer.observe(el));
EOF
    
    echo "  Created: $js_path/sidebar-navigation.js"
}

# ============================================================================
# HTML GENERATION FUNCTIONS
# ============================================================================

# Generate HTML head section with proper asset paths
generate_html_head() {
    local title="$1"
    local description="$2"
    local assets_path="$3"  # Relative path to assets folder
    
    cat << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title</title>
    <meta name="description" content="$description">
    <!-- Centralized CSS - Single source of truth -->
    <link rel="stylesheet" href="${assets_path}/css/styles.css">
    <!-- External fonts and icons -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
EOF
}

# Generate common page elements
generate_mobile_nav() {
    cat << 'EOF'
    <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-backdrop"></div>
EOF
}

generate_theme_toggle() {
    cat << 'EOF'
            <div class="sidebar-footer">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
EOF
}

generate_footer() {
    local title="$1"
    local subtitle="$2"
    
    cat << EOF
            <footer>
                <p><strong>$title</strong></p>
                <p>$subtitle</p>
                <p style="font-size: 0.875rem; color: var(--text-tertiary);">© 2025 Educational Content Management System</p>
            </footer>
EOF
}

generate_script_tag() {
    local assets_path="$1"
    echo "    <script src=\"${assets_path}/js/sidebar-navigation.js\"></script>"
}

# ============================================================================
# INDEX PAGE GENERATORS
# ============================================================================

create_root_index() {
    local assets_path="assets"
    
    cat > "index.html" << EOF
$(generate_html_head "Educational Content Past Papers Archive" "Comprehensive collection of past examination papers for educational institutions" "$assets_path")
<body>
$(generate_mobile_nav)
    
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
            
EOF
    generate_theme_toggle >> "index.html"
    
    cat >> "index.html" << 'EOF'
        </aside>
        
        <main class="main-content">
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge fqe">ARCHIVE</span>
                    <span class="date">
                        <i class="fas fa-graduation-cap"></i> Educational Content
                    </span>
                </div>
                <h1>Past Papers Archive</h1>
                <p class="subtitle">Comprehensive Collection for Medical & Health Education Programs</p>
            </header>
            
            <section id="overview" class="intro">
                <h2><i class="fas fa-info-circle"></i> Welcome to the Archive</h2>
                <p>Access organized past examination papers from educational institutions. Browse by institution to find papers for your specific program and subjects.</p>
                
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

    for college in "${COLLEGES[@]}"; do
        local college_icon="fas fa-hospital"
        local college_full_name="$college"
        
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
            
EOF
    generate_footer "Educational Content Past Papers Archive" "Comprehensive Collection for Educational Institutions" >> "index.html"
    
    cat >> "index.html" << EOF
        </main>
    </div>
    
$(generate_script_tag "$assets_path")
</body>
</html>
EOF
    echo "Created: index.html"
}


# Create college index.html
create_college_index() {
    local college="$1"
    local assets_path="../assets"  # Depth: 1 (college/)
    local college_full_name="$college"
    local college_icon="fas fa-hospital"
    
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
$(generate_html_head "$college - Educational Content Papers" "Past examination papers for $college_full_name" "$assets_path")
<body>
$(generate_mobile_nav)
    
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

    for subject in "${SUBJECTS[@]}"; do
        local subject_icon="fas fa-cogs"
        case "$subject" in
            *"1"*) subject_icon="fas fa-cogs" ;;
            *"2"*) subject_icon="fas fa-microchip" ;;
            *"3"*) subject_icon="fas fa-stethoscope" ;;
        esac
        
        # URL encode the subject name for the href
        local subject_encoded=$(echo "$subject" | sed 's/ /%20/g')
        
        cat >> "$college/index.html" << EOF
                    <a href="$subject_encoded/index.html" class="nav-item sub-item">
                        <i class="$subject_icon"></i>
                        <span>$subject</span>
                    </a>
EOF
    done

    cat >> "$college/index.html" << EOF
                </div>
            </nav>
            
$(generate_theme_toggle)
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

    local subject_count=1
    for subject in "${SUBJECTS[@]}"; do
        local subject_icon="fas fa-cogs"
        local subject_description="Foundation concepts and practical applications"
        local badge_style="fqe"
        local subject_encoded=$(echo "$subject" | sed 's/ /%20/g')
        
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
                            <a href="$subject_encoded/index.html" class="btn">
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
            
$(generate_footer "$college Clinical Engineering Past Papers" "$college_full_name - Diploma in Medical Engineering")
        </main>
    </div>
    
$(generate_script_tag "$assets_path")
</body>
</html>
EOF
    echo "Created: $college/index.html"
}

# Create subject index.html
create_subject_index() {
    local college="$1"
    local subject="$2"
    local assets_path="../../assets"  # Depth: 2 (college/subject/)
    local college_full_name="$college"
    local subject_icon="fas fa-cogs"
    
    case "$college" in
        "KMTC") college_full_name="Kenya Medical Training College" ;;
        "MKU") college_full_name="Mount Kenya University" ;;
        "MMU") college_full_name="Multimedia University" ;;
    esac
    
    case "$subject" in
        *"1"*) subject_icon="fas fa-cogs" ;;
        *"2"*) subject_icon="fas fa-microchip" ;;
        *"3"*) subject_icon="fas fa-stethoscope" ;;
    esac
    
    cat > "$college/$subject/index.html" << EOF
$(generate_html_head "$subject - Past Papers Archive | $college" "Comprehensive collection of $subject past examination papers for students at $college_full_name" "$assets_path")
<body>
$(generate_mobile_nav)
    
    <div class="layout-container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="$subject_icon"></i>
                    <span>$subject</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <a href="../../index.html" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="../index.html" class="nav-item">
                    <i class="fas fa-university"></i>
                    <span>$college</span>
                </a>
                <a href="#overview" class="nav-item active">
                    <i class="fas fa-info-circle"></i>
                    <span>Overview</span>
                </a>
                <a href="#categories" class="nav-item">
                    <i class="fas fa-folder-open"></i>
                    <span>Browse by Type</span>
                </a>
                
                <div class="nav-group">
                    <div class="nav-group-title">Quick Access</div>
EOF

    for category in "${CATEGORIES[@]}"; do
        local category_path="$college/$subject/$category"
        # Only show if content exists
        if [ -d "$category_path" ] && [ -n "$(find "$category_path" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
            local category_icon="fas fa-file-alt"
            local category_display="$category"
            
            case "$category" in
                "CATs") category_icon="fas fa-edit"; category_display="CAT Papers" ;;
                "FQE") category_icon="fas fa-graduation-cap"; category_display="FQE Papers" ;;
                "PRACTICAL") category_icon="fas fa-tools"; category_display="Practical" ;;
                "END_OF_SEMESTER") category_icon="fas fa-calendar-alt"; category_display="End of Semester" ;;
                "END_OF_YEAR") category_icon="fas fa-trophy"; category_display="End of Year" ;;
                "SUPPLEMENTARY") category_icon="fas fa-redo"; category_display="Supplementary" ;;
                "UPGRADING") category_icon="fas fa-level-up-alt"; category_display="Upgrading" ;;
            esac
            
            cat >> "$college/$subject/index.html" << EOF
                        <a href="$category/index.html" class="nav-item sub-item">
                            <i class="$category_icon"></i>
                            <span>$category_display</span>
                        </a>
EOF
        fi
    done

    cat >> "$college/$subject/index.html" << EOF
                </div>
            </nav>
            
$(generate_theme_toggle)
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

    for category in "${CATEGORIES[@]}"; do
        local category_path="$college/$subject/$category"
        # Only show if content exists
        if [ -d "$category_path" ] && [ -n "$(find "$category_path" -maxdepth 1 -name "*.html" ! -name "index.html" -print -quit)" ]; then
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
            
            # Count actual papers
            local paper_count=$(find "$category_path" -maxdepth 1 -name "*.html" ! -name "index.html" | wc -l)

            cat >> "$college/$subject/index.html" << EOF
                        <div class="paper-card">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                <h3 style="margin: 0;">$category_display</h3>
                                <span class="badge $category_badge_class">$category</span>
                            </div>
                            <div class="meta">
                                <p><i class="$category_icon"></i> $category_description</p>
                                <p><strong><i class="fas fa-file-alt"></i> Available Papers: <span id="${category,,}-count">$paper_count</span></strong></p>
                                <p><i class="fas fa-calendar-alt"></i> Years: 2020 - 2025</p>
                            </div>
                            <div class="actions">
                                <a href="$category/index.html" class="btn">
                                    <i class="fas fa-arrow-right"></i> Browse $category Papers
                                </a>
                            </div>
                        </div>
EOF
        fi
    done

    cat >> "$college/$subject/index.html" << EOF
                </div>
            </section>
            
$(generate_footer "$subject Past Papers Collection" "$college_full_name")
        </main>
    </div>
    
$(generate_script_tag "$assets_path")
</body>
</html>
EOF
    echo "Created: $college/$subject/index.html"
}


# Create category index (placeholder - will be updated by update_index.sh)
create_category_index() {
    local dir_path="$1"
    local assets_path="../../../assets"  # Depth: 3 (college/subject/category/)
    local category_name=$(basename "$dir_path")
    local subject_name=$(basename "$(dirname "$dir_path")")
    local college_name=$(basename "$(dirname "$(dirname "$dir_path")")")
    
    local category_icon=$(get_category_icon "$category_name")
    
    cat > "$dir_path/index.html" << EOF
$(generate_html_head "$category_name - $subject_name | $college_name" "$category_name past papers for $subject_name at $college_name" "$assets_path")
<body>
$(generate_mobile_nav)
    
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
                    <span>Papers</span>
                </a>
            </nav>
            
$(generate_theme_toggle)
        </aside>
        
        <main class="main-content">
            <header class="paper-header">
                <div class="paper-meta">
                    <span class="badge fqe">$category_name</span>
                    <span class="date">
                        <i class="fas fa-university"></i> $college_name
                    </span>
                </div>
                <h1>$category_name Papers</h1>
                <p class="subtitle">$subject_name - Past Examination Papers</p>
            </header>
            
            <section id="papers" class="category-section">
                <div class="coming-soon" style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%); border-radius: 1rem; margin: 2rem 0;">
                    <div style="font-size: 4rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1.5rem;">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-bottom: 0.75rem;">Papers Coming Soon</h2>
                    <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto 1.5rem; line-height: 1.6;">We're working on adding past papers to this category. Check back soon for updates!</p>
                    <a href="../index.html" class="btn" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-arrow-left"></i> Back to $subject_name
                    </a>
                </div>
            </section>
            
$(generate_footer "$category_name - $subject_name" "$college_name Past Papers Archive")
        </main>
    </div>
    
$(generate_script_tag "$assets_path")
</body>
</html>
EOF
    echo "Created: $dir_path/index.html"
}

# Helper function for category icons
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

# ============================================================================
# MAIN EXECUTION
# ============================================================================

echo "=== EDUCATIONAL CONTENT STRUCTURE GENERATOR ==="
echo "=== Version 2.0 - Centralized CSS Management ==="
echo ""



echo ""
echo "Creating educational content structure..."
echo "Colleges: ${COLLEGES[*]}"
echo "Categories: ${CATEGORIES[*]}"
echo "Subjects: ${SUBJECTS[*]}"
echo ""

# Create centralized assets directory FIRST
create_assets_directory

# Create base directories
for base_dir in "${BASE_DIRS[@]}"; do
    mkdir -p "$base_dir"
    echo "Created base directory: $base_dir"
done

# Create main structure
for college in "${COLLEGES[@]}"; do
    echo ""
    echo "Creating college: $college"
    mkdir -p "$college"
    
    for subject in "${SUBJECTS[@]}"; do
        echo "  Creating subject: $subject"
        
        # Create subject directory
        subject_path="$college/$subject"
        mkdir -p "$subject_path"
        
        # Create category subdirectories
        for category in "${CATEGORIES[@]}"; do
            category_path="$subject_path/$category"
            mkdir -p "$category_path"
            create_category_index "$category_path"
            echo "    Created category: $category"
        done
        
        # Create subject index
        create_subject_index "$college" "$subject"
    done
    
    # Create college index
    create_college_index "$college"
done

# Create root index
create_root_index

echo ""
echo "=== STRUCTURE CREATED SUCCESSFULLY ==="
echo ""
echo "CSS MANAGEMENT:"
echo "  - All CSS is stored in: assets/css/styles.css"
echo "  - All JS is stored in: assets/js/sidebar-navigation.js"
echo "  - HTML files reference assets using relative paths"
echo "  - To update styles, edit only: assets/css/styles.css"
echo ""
echo "Directory structure:"
echo "├── assets/"
echo "│   ├── css/"
echo "│   │   └── styles.css (SINGLE SOURCE OF TRUTH)"
echo "│   ├── js/"
echo "│   │   └── sidebar-navigation.js"
echo "│   └── images/"
echo "├── UNPROCESSED/"
echo "├── NOT_RELEVANT/"
for college in "${COLLEGES[@]}"; do
    echo "├── $college/"
    for subject in "${SUBJECTS[@]}"; do
        echo "│   ├── $subject/"
        for category in "${CATEGORIES[@]}"; do
            echo "│   │   ├── $category/"
        done
    done
done
echo "└── index.html"
echo ""
echo "To update all category indexes after adding papers, run:"
echo "  ./update_index.sh"
