#!/usr/bin/env python3
import os
import sys
import json
import shutil
import argparse
import subprocess
import re
import zipfile
from pathlib import Path
from datetime import datetime
from collections import defaultdict

__version__ = "1.0.0"

# ANSI colors for better CLI output
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

class ExamManager:
    def __init__(self, root_dir):
        self.root_dir = Path(root_dir).resolve()
        self.subjects = []
        self.modules = self.load_modules()
        # Path to Mathpix OCR server
        self.mathpix_path = "/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"

    def log(self, message, color=Colors.ENDC):
        print(f"{color}{message}{Colors.ENDC}")

    def load_modules(self):
        """Loads subject names from modules.txt for validation."""
        modules_file = self.root_dir / "modules.txt"
        modules = set()
        if modules_file.exists():
            with open(modules_file, 'r') as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith('Year'):
                        continue
                    # Match subject names (usually lines like "    CODE: Subject Name", "    Subject Name")
                    match = re.search(r':\s*(.+)$', line)
                    if match:
                        name = match.group(1).strip()
                    else:
                        name = line.strip()
                    
                    # Clean the name for validation (e.g. remove " I", " II", etc.)
                    base_name = re.sub(r'\s+(I|II|III|IV|V|VI|VII|VIII|IX|X)$', '', name, flags=re.IGNORECASE)
                    modules.add(base_name)
        return modules

    def scan_for_subjects(self):
        """Finds all top-level subject folders."""
        self.subjects = []
        for item in self.root_dir.iterdir():
            if item.is_dir() and not item.name.startswith('.') and item.name not in ['assets', 'exams-manager', 'KMTC', 'DHRIT Diploma in Health Records & Information Technology Curriculum', 'quizzes', 'starter_kit_temp']:
                # It's a subject folder if it contains 'exams' or 'notes' or it's a module
                if (item / 'exams').exists() or (item / 'notes').exists() or item.name in self.modules:
                    self.subjects.append(item)
        self.subjects.sort()
        return self.subjects

    def get_status(self, subject_path, college):
        """Reads the status JSON for a given subject and college."""
        status_file = subject_path / "exams" / college / "processing-status.json"
        if status_file.exists():
            try:
                with open(status_file, 'r') as f:
                    return json.load(f)
            except json.JSONDecodeError:
                return None
        return None

    def save_status(self, subject_path, data, college="KMTC"):
        """Saves the status JSON and updates statistics."""
        status_file = subject_path / "exams" / college / "processing-status.json"
        status_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Update statistics
        stats = defaultdict(int)
        stats["total_files"] = len(data.get("files", []))
        for f in data.get("files", []):
            status = f.get("status", "unknown")
            stats[status] += 1
        data["statistics"] = dict(stats)
        data["last_updated"] = datetime.now().isoformat()
        
        with open(status_file, 'w') as f:
            json.dump(data, f, indent=2)

    def create_dashboard(self):
        """Generates a high-level report of all subjects across all colleges."""
        self.scan_for_subjects()
        
        print(f"\n{Colors.HEADER}{Colors.BOLD}EXAM MANAGER UNIFIED DASHBOARD{Colors.ENDC}")
        print(f"Root: {self.root_dir}")
        print("-" * 115)
        print(f"{'Subject':<45} | {'College':<8} | {'Total':<5} | {'Unproc.':<8} | {'MMD':<5} | {'HTML':<5} | {'Last Update'}")
        print("-" * 115)

        total_files_global = 0
        total_unprocessed_global = 0
        found_subject_names = set()

        for subject in self.subjects:
            name = subject.name
            base_name = re.sub(r'\s+(I|II|III|IV|V|VI|VII|VIII|IX|X)$', '', name, flags=re.IGNORECASE).lower()
            found_subject_names.add(base_name)
            
            exams_root = subject / "exams"
            colleges = []
            if exams_root.exists():
                colleges = [item.name for item in exams_root.iterdir() if item.is_dir() and item.name != "assets"]
            
            if not colleges:
                print(f"{name:<45} | {'-':<8} | {'-':<5} | {'-':<8} | {'-':<5} | {'-':<5} | No Exam Root")
                continue

            first = True
            for college in sorted(colleges):
                status = self.get_status(subject, college)
                subject_display = name if first else ""
                
                if status:
                    stats = status.get('statistics', {})
                    total = stats.get('total_files', 0)
                    unproc = stats.get('unprocessed', 0)
                    mmd = stats.get('mmd_generated', 0)
                    html = stats.get('html_generated', 0)
                    last_update = status.get('last_updated', 'N/A')[:10]
                    
                    total_files_global += total
                    total_unprocessed_global += unproc
                    
                    unproc_str = f"{Colors.WARNING}{unproc}{Colors.ENDC}" if unproc > 0 else str(unproc)
                    
                    print(f"{subject_display:<45} | {college:<8} | {total:<5} | {unproc_str:<17} | {mmd:<5} | {html:<5} | {last_update}")
                else:
                    print(f"{subject_display:<45} | {college:<8} | {Colors.FAIL}No Status File{Colors.ENDC}")
                first = False

        clean_modules = {re.sub(r'\s+(I|II|III|IV|V|VI|VII|VIII|IX|X)$', '', m, flags=re.IGNORECASE).lower() for m in self.modules}
        missing = clean_modules - found_subject_names
        
        if missing:
            print("-" * 115)
            print(f"{Colors.WARNING}POTENTIALLY MISSING SUBJECT FOLDERS (from modules.txt):{Colors.ENDC}")
            for m_key in sorted(missing):
                orig = next((orig_m for orig_m in self.modules if re.sub(r'\s+(I|II|III|IV|V|VI|VII|VIII|IX|X)$', '', orig_m, flags=re.IGNORECASE).lower() == m_key), m_key)
                print(f" - {orig}")

        print("-" * 115)
        print(f"{Colors.BOLD}GLOBAL TOTALS:{Colors.ENDC} {len(self.subjects)} Subjects | {total_files_global} Files | {total_unprocessed_global} Unprocessed")
        print("-" * 115)

    def install_assets(self):
        """Regenerates the premium CSS and JS files in the assets directory."""
        self.log("Installing/Restoring premium assets...", Colors.BLUE)
        
        # CSS CONTENT
        css_content = """/* ============================================================================
   MEDICAL EDUCATION PAST PAPERS - PREMIUM DESIGN SYSTEM
   Version: 2.1
   Last Updated: 2026-01-20
   Enhanced with modern CSS features, improved accessibility, and performance
   ============================================================================ */

/* --- CSS Variables & Theming --- */
:root {
    /* Primary Brand Colors */
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
    
    /* Success/Warning/Error Colors */
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
    --info-color: #3b82f6;
    
    /* Neutral Colors */
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-tertiary: #718096;
    --text-muted: #a0aec0;
    
    /* Background Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-tertiary: #edf2f7;
    --bg-card: #ffffff;
    --bg-overlay: rgba(0, 0, 0, 0.5);
    
    /* Border Colors */
    --border-light: #e2e8f0;
    --border-medium: #cbd5e0;
    --border-dark: #a0aec0;
    --border-focus: #667eea;
    
    /* Shadow System - Enhanced */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-glow: 0 0 20px rgba(102, 126, 234, 0.3);
    --shadow-glow-hover: 0 0 30px rgba(102, 126, 234, 0.4);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    
    /* Layout */
    --sidebar-width: 280px;
    --sidebar-width-collapsed: 60px;
    --header-height: 64px;
    --container-max-width: 1200px;
    
    /* Border Radius */
    --radius-xs: 0.25rem;
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Spacing Scale */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    
    /* Typography Scale */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    
    /* Transitions - Enhanced */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Z-Index Scale */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;
}

/* Dark Mode Theme - Enhanced */
[data-theme="dark"] {
    --primary-color: #8b9cf7;
    --primary-dark: #7c3aed;
    --primary-light: #a5b4fc;
    --secondary-color: #34d399;
    --secondary-dark: #10b981;
    --secondary-light: #6ee7b7;
    --accent-color: #fbbf24;
    --accent-dark: #f59e0b;
    --accent-light: #fcd34d;
    
    --success-color: #34d399;
    --warning-color: #fbbf24;
    --error-color: #f87171;
    --info-color: #60a5fa;
    
    --text-primary: #f8fafc;
    --text-secondary: #e2e8f0;
    --text-tertiary: #cbd5e0;
    --text-muted: #94a3b8;
    
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-card: #1e293b;
    --bg-overlay: rgba(0, 0, 0, 0.8);
    
    --border-light: #334155;
    --border-medium: #475569;
    --border-dark: #64748b;
    --border-focus: #8b9cf7;
    
    --shadow-glow: 0 0 20px rgba(139, 156, 247, 0.4);
    --shadow-glow-hover: 0 0 30px rgba(139, 156, 247, 0.5);
}

/* --- Reset & Base Styles --- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* --- Layout Container --- */
.layout-container {
    display: flex;
    min-height: 100vh;
}

/* --- Sidebar Styles --- */
.sidebar {
    width: var(--sidebar-width);
    background: var(--bg-card);
    border-right: 1px solid var(--border-light);
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 40;
    box-shadow: var(--shadow-lg);
    transition: transform var(--transition-base);
}

.sidebar-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-light);
    background: var(--primary-gradient);
}

.sidebar-header .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
}

.sidebar-header .logo i {
    font-size: 1.5rem;
}

.sidebar-nav {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    font-weight: 500;
    position: relative;
}

.nav-item i {
    width: 1.25rem;
    text-align: center;
    color: var(--text-secondary);
    transition: color var(--transition-fast);
}

.nav-item:hover {
    background: var(--bg-tertiary);
    transform: translateX(4px);
}

.nav-item.active {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    color: var(--primary-color);
    box-shadow: var(--shadow-sm);
}

.nav-item.active i {
    color: var(--primary-color);
}

.nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 70%;
    background: var(--primary-gradient);
    border-radius: 0 4px 4px 0;
}

.nav-group {
    margin-top: 1.5rem;
}

.nav-group-title {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-tertiary);
}

.nav-item.sub-item {
    font-size: 0.875rem;
    padding-left: 2.5rem;
}

.sidebar-footer {
    padding: 1rem;
    border-top: 1px solid var(--border-light);
}

.theme-toggle {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: var(--bg-tertiary);
    border: none;
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.theme-toggle:hover {
    background: var(--primary-color);
    color: white;
    box-shadow: var(--shadow-md);
}

/* --- Main Content Area --- */
.main-content {
    flex: 1;
    margin-left: var(--sidebar-width);
    min-height: 100vh;
    background: var(--bg-secondary);
}

/* --- Paper Header --- */
.paper-header {
    background: var(--bg-card);
    padding: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-light);
    box-shadow: var(--shadow-sm);
}

.paper-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.badge {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.875rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    border-radius: 9999px;
    background: var(--primary-gradient);
    color: white;
    box-shadow: var(--shadow-sm);
}

.badge.fqe {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.badge.cat {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.paper-meta .date,
.paper-meta .time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.875rem;
}

.paper-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.paper-header .subtitle {
    color: var(--text-secondary);
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
}

.paper-instructions {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-light);
}

.paper-instructions h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-size: 1.125rem;
    margin-bottom: 1rem;
}

.paper-instructions ul {
    margin-left: 1.5rem;
    color: var(--text-secondary);
}

.paper-instructions li {
    margin-bottom: 0.5rem;
}

/* --- Exam Sections --- */
.exam-section {
    padding: 2rem;
    margin-bottom: 2rem;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--border-light);
}

.section-header h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-primary);
}

.section-header .marks {
    padding: 0.5rem 1rem;
    background: var(--accent-gradient);
    color: white;
    border-radius: var(--radius-lg);
    font-weight: 700;
    box-shadow: var(--shadow-md);
}

/* --- Question Cards --- */
.question-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.question-card {
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-light);
    transition: all var(--transition-base);
}

.question-card:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-2px);
}

.question-header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.q-number {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-gradient);
    color: white;
    font-weight: 700;
    border-radius: 50%;
    box-shadow: var(--shadow-glow);
}

.q-text {
    flex: 1;
    color: var(--text-primary);
    font-size: 1.0625rem;
    line-height: 1.7;
    font-weight: 500;
}

/* --- MCQ Options Grid --- */
.options-grid {
    display: grid;
    gap: 0.75rem;
    margin: 1rem 0;
}

.option {
    padding: 1rem;
    background: var(--bg-tertiary);
    border-radius: var(--radius-md);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all var(--transition-fast);
    color: var(--text-primary);
}

.option:hover {
    border-color: var(--primary-color);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
    transform: translateX(4px);
}

/* --- Answer Box with Details/Summary --- */
.answer-box {
    margin-top: 1.5rem;
}

.answer-box details {
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 2px solid var(--border-light);
    background: var(--bg-secondary);
    transition: all var(--transition-base);
}

.answer-box details[open] {
    border-color: var(--secondary-color);
    box-shadow: var(--shadow-lg);
}

.answer-box summary {
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
    color: var(--secondary-color);
    font-weight: 700;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all var(--transition-fast);
    user-select: none;
}

.answer-box summary::-webkit-details-marker {
    display: none;
}

.answer-box summary::after {
    content: '\f078';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    transition: transform var(--transition-base);
}

.answer-box details[open] summary {
    background: linear-gradient(135deg, rgba(72, 187, 120, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%);
}

.answer-box details[open] summary::after {
    transform: rotate(180deg);
}

.answer-box summary:hover {
    background: var(--secondary-color);
    color: white;
}

.answer-content {
    padding: 1.5rem;
    background: var(--bg-card);
    animation: slideDown var(--transition-base);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.answer-content p {
    margin-bottom: 1rem;
    color: var(--text-primary);
    line-height: 1.7;
}

.answer-content strong {
    color: var(--primary-color);
    font-weight: 700;
}

.answer-content ul,
.answer-content ol {
    margin: 1rem 0 1rem 1.5rem;
    color: var(--text-secondary);
}

.answer-content li {
    margin-bottom: 0.5rem;
    line-height: 1.7;
}

/* --- Tables --- */
.table-container {
    overflow-x: auto;
    margin: 1.5rem 0;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

table {
    width: 100%;
    border-collapse: collapse;
    background: var(--bg-card);
}

thead {
    background: var(--primary-gradient);
    color: white;
}

th {
    padding: 1rem;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
}

td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-light);
    color: var(--text-primary);
}

tbody tr:hover {
    background: var(--bg-tertiary);
}

tbody tr:last-child td {
    border-bottom: none;
}

/* --- Images --- */
.question-image {
    margin: 1.5rem 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.question-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* --- Info Box --- */
.info-box {
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(246, 173, 85, 0.1) 100%);
    border-left: 4px solid var(--accent-color);
    border-radius: var(--radius-md);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin: 1.5rem 0;
}

.info-box i {
    color: var(--accent-color);
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
}

.info-box p {
    color: var(--text-secondary);
    margin: 0;
}

/* --- Mobile Navigation Toggle --- */
.mobile-nav-toggle {
    display: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 50;
    width: 3rem;
    height: 3rem;
    background: var(--primary-gradient);
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    transition: all var(--transition-base);
}

.mobile-nav-toggle:hover {
    box-shadow: var(--shadow-xl);
    transform: scale(1.05);
}

.sidebar-backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 35;
    transition: opacity var(--transition-base);
}

.sidebar-backdrop.active {
    display: block;
}

/* --- Responsive Design --- */
@media (max-width: 1024px) {
    .sidebar {
        transform: translateX(-100%);
    }
    
    .sidebar.active {
        transform: translateX(0);
    }
    
    .main-content {
        margin-left: 0;
    }
    
    .mobile-nav-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .paper-header {
        padding: 1.5rem 1rem;
    }
    
    .paper-header h1 {
        font-size: 1.875rem;
    }
    
    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .exam-section {
        padding: 1rem;
    }
    
    .question-card {
        padding: 1rem;
    }
    
    .q-number {
        width: 2rem;
        height: 2rem;
        font-size: 0.875rem;
    }
}

/* --- Print Styles --- */
@media print {
    .sidebar,
    .mobile-nav-toggle,
    .sidebar-backdrop,
    .theme-toggle,
    .nav-group {
        display: none !important;
    }
    
    .main-content {
        margin-left: 0;
    }
    
    .question-card {
        page-break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ccc;
    }
    
    .answer-box details {
        border: none;
    }
    
    .answer-box summary {
        display: none;
    }
    
    .answer-content {
        display: block !important;
        padding: 0;
    }
}

/* --- Index Page Specific Styles --- */
.category-section {
    padding: 2rem;
}

.paper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.paper-card {
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-light);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
}

.paper-card:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
    border-color: var(--primary-color);
}

.paper-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.paper-card .meta {
    flex: 1;
    margin-bottom: 1rem;
    color: var(--text-secondary);
}

.paper-card .meta p {
    margin-bottom: 0.5rem;
}

.paper-card .actions {
    margin-top: auto;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--primary-gradient);
    color: white;
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    text-align: center;
    transition: all var(--transition-base);
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-sm);
}

.btn:hover {
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
}

.btn-disabled {
    background: var(--bg-tertiary);
    color: var(--text-tertiary);
    cursor: not-allowed;
    pointer-events: none;
}

.intro {
    padding: 2rem;
    background: var(--bg-card);
    margin-bottom: 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
}

.intro h2 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.intro p {
    color: var(--text-secondary);
    line-height: 1.7;
}

.topic-list {
    background: var(--bg-tertiary);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
}

.topic-list h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.topic-list ul {
    margin-left: 1.5rem;
    color: var(--text-secondary);
}

.topic-list li {
    margin-bottom: 0.5rem;
}

/* --- Footer --- */
footer {
    background: var(--bg-card);
    border-top: 1px solid var(--border-light);
    padding: 2rem;
    text-align: center;
    color: var(--text-secondary);
}

footer p {
    margin-bottom: 0.5rem;
}


/* ============================================================================
   ENHANCED MOBILE RESPONSIVENESS
   ============================================================================ */

/* --- Modern CSS Enhancements --- */

/* Container Query Support */
@container (min-width: 768px) {
    .paper-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@container (min-width: 1024px) {
    .paper-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Focus Management & Accessibility */
*:focus {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: var(--radius-md);
    z-index: var(--z-tooltip);
    transition: top var(--transition-fast);
}

.skip-link:focus {
    top: 6px;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
    :root {
        --border-light: #000000;
        --border-medium: #000000;
        --text-secondary: #000000;
    }
    
    [data-theme="dark"] {
        --border-light: #ffffff;
        --border-medium: #ffffff;
        --text-secondary: #ffffff;
    }
}

/* Loading States */
.loading {
    position: relative;
    overflow: hidden;
}

.loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    animation: loading 1.5s infinite;
}

[data-theme="dark"] .loading::after {
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
}

@keyframes loading {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Enhanced Button States */
.btn {
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
    );
    transition: left var(--transition-base);
}

.btn:hover::before {
    left: 100%;
}

/* Improved Card Hover Effects */
.paper-card {
    position: relative;
    overflow: hidden;
}

.paper-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: -1;
}

.paper-card:hover::before {
    opacity: 0.05;
}

/* Enhanced Question Cards */
.question-card {
    position: relative;
    overflow: hidden;
    border-left: 4px solid transparent;
    transition: all var(--transition-base);
}

.question-card:hover {
    border-left-color: var(--primary-color);
    background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.02) 0%,
        rgba(118, 75, 162, 0.02) 100%
    );
}

/* Improved Answer Box Animation */
.answer-box details[open] .answer-content {
    animation: expandAnswer var(--transition-base) ease-out;
}

@keyframes expandAnswer {
    from {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
    }
    to {
        opacity: 1;
        transform: translateY(0);
        max-height: 1000px;
    }
}

/* Enhanced Sidebar */
.sidebar {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.nav-item {
    position: relative;
}

.nav-item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--primary-gradient);
    transition: width var(--transition-base);
}

.nav-item:hover::after,
.nav-item.active::after {
    width: 100%;
}

/* Scroll Indicators */
.scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--primary-gradient);
    z-index: var(--z-fixed);
    transition: width var(--transition-fast);
}

/* Enhanced Mobile Navigation */
@media (max-width: 1024px) {
    .mobile-nav-toggle {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: rgba(102, 126, 234, 0.9);
    }
    
    .sidebar-backdrop {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }
}

/* Print Optimizations */
@media print {
    .sidebar,
    .mobile-nav-toggle,
    .sidebar-backdrop,
    .theme-toggle,
    .nav-group,
    .scroll-indicator {
        display: none !important;
    }
    
    .main-content {
        margin-left: 0;
        max-width: none;
    }
    
    .question-card,
    .paper-card {
        page-break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ccc;
        margin-bottom: 1rem;
    }
    
    .answer-box details {
        border: none;
    }
    
    .answer-box summary {
        display: none;
    }
    
    .answer-content {
        display: block !important;
        padding: 0;
    }
    
    /* Ensure all content is visible in print */
    * {
        color: #000 !important;
        background: transparent !important;
    }
}

/* Performance Optimizations */
.paper-card,
.question-card,
.nav-item {
    will-change: transform;
}

.paper-card:not(:hover),
.question-card:not(:hover),
.nav-item:not(:hover) {
    will-change: auto;
}

/* Content Security */
img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

/* Enhanced Typography */
.text-gradient {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Utility Classes */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
}

/* Enhanced Error States */
.error-state {
    padding: var(--space-xl);
    text-align: center;
    color: var(--error-color);
    background: linear-gradient(
        135deg,
        rgba(239, 68, 68, 0.1) 0%,
        rgba(239, 68, 68, 0.05) 100%
    );
    border-radius: var(--radius-lg);
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.success-state {
    padding: var(--space-xl);
    text-align: center;
    color: var(--success-color);
    background: linear-gradient(
        135deg,
        rgba(16, 185, 129, 0.1) 0%,
        rgba(16, 185, 129, 0.05) 100%
    );
    border-radius: var(--radius-lg);
    border: 1px solid rgba(16, 185, 129, 0.2);
}

/* --- Mobile-First Improvements --- */
@media (max-width: 768px) {
    /* Paper Grid - Single column on mobile */
    .paper-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    /* Paper Cards - Compact on mobile */
    .paper-card {
        padding: 1.25rem;
    }
    
    .paper-card h3 {
        font-size: 1.125rem;
    }
    
    /* Category Section */
    .category-section {
        padding: 1rem;
    }
    
    .category-section h2 {
        font-size: 1.5rem;
    }
    
    /* Intro Section */
    .intro {
        padding: 1.25rem;
        margin-bottom: 1rem;
    }
    
    .intro h2 {
        font-size: 1.5rem;
    }
    
    /* Stats boxes - Stack on mobile */
    .paper-header .paper-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    /* Footer */
    footer {
        padding: 1.5rem 1rem;
    }
    
    /* Buttons - Full width on mobile */
    .btn {
        width: 100%;
        padding: 1rem;
    }
    
    .paper-card .actions {
        margin-top: 1rem;
    }
    
    /* Badge adjustments */
    .badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.625rem;
    }
}

@media (max-width: 480px) {
    /* Extra small screens */
    html {
        font-size: 14px;
    }
    
    .paper-header h1 {
        font-size: 1.5rem;
    }
    
    .paper-header .subtitle {
        font-size: 1rem;
    }
    
    .paper-card {
        padding: 1rem;
    }
    
    .paper-card h3 {
        font-size: 1rem;
    }
    
    .paper-card .meta {
        font-size: 0.875rem;
    }
    
    /* Question cards */
    .question-header {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .q-number {
        width: 2rem;
        height: 2rem;
        font-size: 0.75rem;
    }
    
    .q-text {
        font-size: 1rem;
    }
    
    /* Options */
    .option {
        padding: 0.75rem;
        font-size: 0.875rem;
    }
    
    /* Answer box */
    .answer-box summary {
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
    }
    
    .answer-content {
        padding: 1rem;
    }
}

/* --- Coming Soon Page Mobile Styles --- */
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
        flex-wrap: wrap;
        font-size: 0.8125rem;
    }
    
    .page-header h1 {
        font-size: 1.5rem;
    }
}

/* --- Container Mobile Adjustments --- */
@media (max-width: 768px) {
    .container {
        padding: 1rem !important;
    }
}

/* --- Sidebar Mobile Improvements --- */
@media (max-width: 1024px) {
    .sidebar {
        width: 85%;
        max-width: 320px;
    }
    
    .sidebar-header {
        padding: 1.25rem;
    }
    
    .sidebar-header .logo {
        font-size: 1.125rem;
    }
    
    .nav-item {
        padding: 0.875rem 1rem;
    }
    
    .nav-item.sub-item {
        padding-left: 2rem;
        font-size: 0.8125rem;
    }
}

/* --- Touch-Friendly Improvements --- */
@media (hover: none) and (pointer: coarse) {
    /* Larger touch targets */
    .nav-item {
        padding: 1rem;
        min-height: 48px;
    }
    
    .btn {
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .option {
        min-height: 48px;
    }
    
    .theme-toggle {
        min-height: 48px;
    }
    
    .mobile-nav-toggle {
        width: 3.5rem;
        height: 3.5rem;
    }
    
    /* Remove hover effects on touch devices */
    .paper-card:hover,
    .question-card:hover,
    .nav-item:hover,
    .option:hover {
        transform: none;
    }
}

/* --- Landscape Mobile --- */
@media (max-width: 896px) and (orientation: landscape) {
    .paper-header {
        padding: 1rem;
    }
    
    .paper-header h1 {
        font-size: 1.75rem;
    }
    
    .coming-soon {
        padding: 2rem 1.5rem;
    }
}

/* --- Safe Area Insets (for notched phones) --- */
@supports (padding: max(0px)) {
    .sidebar {
        padding-left: max(1rem, env(safe-area-inset-left));
    }
    
    .main-content {
        padding-right: max(0px, env(safe-area-inset-right));
    }
    
    .mobile-nav-toggle {
        right: max(1rem, env(safe-area-inset-right));
    }
    
    footer {
        padding-bottom: max(2rem, env(safe-area-inset-bottom));
    }
}

/* --- Empty State Mobile --- */
@media (max-width: 768px) {
    .empty-state {
        padding: 2rem 1rem;
    }
    
    .empty-state i {
        font-size: 2.5rem !important;
    }
    
    .empty-state p {
        font-size: 0.9375rem;
    }
}

/* --- Stats Cards Mobile --- */
@media (max-width: 640px) {
    [style*="display: flex"][style*="gap: 1rem"] {
        flex-direction: column !important;
    }
    
    [style*="min-width: 200px"] {
        min-width: 100% !important;
    }
}

.badge.practical {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    color: #1a472a;
}

.badge.supplementary {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
    color: #5d2b2b;
}

.badge.end-of-semester {
    background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}

.badge.end-of-year {
    background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    color: #5d3a1a;
}

.badge.upgrading {
    background: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
    color: #3b4218;
}

.badge.final-qualifying-exam {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.badge.cats {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.badge.processed {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    color: #1e3c72;
}

/* College Badges */
.badge.kmtc {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Purple/Blue */
    color: white;
}

.badge.mku {
    background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%); /* Cyan/Blue */
    color: white;
}

.badge.ku {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); /* Green */
    color: white;
}

.badge.uon {
    background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); /* Red/Orange */
    color: white;
}
"""
        # JS CONTENT
        js_content = """// Sidebar Navigation JavaScript for Educational Content Archive

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
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
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
    const navItems = document.querySelectorAll('.nav-item[href^=\"#\"]');
    
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

document.querySelectorAll('[id$=\"-count\"]').forEach(el => observer.observe(el));
"""
        
        css_dir = self.root_dir / "assets" / "css"
        js_dir = self.root_dir / "assets" / "js"
        
        css_dir.mkdir(parents=True, exist_ok=True)
        js_dir.mkdir(parents=True, exist_ok=True)
        
        (css_dir / "styles.css").write_text(css_content)
        (js_dir / "sidebar-navigation.js").write_text(js_content)
        self.log("Assets restored successfully.", Colors.GREEN)

    def fix_styling(self):
        """Full repair of styling: reinstalls assets and fixes all HTML paths."""
        self.install_assets()
        self.fix_paths()
        self.generate_html_index(force=True)
        self.log("STYLING REPAIRED: Assets reinstalled, paths corrected, indices refreshed.", Colors.HEADER)

    # --- Integrated Tool Logic ---

    def extract_papers(self, mmd_file, college="KMTC"):
        """Splits a merged MMD file into individual papers. Ported from extract_general_papers.py"""
        mmd_path = Path(mmd_file)
        if not mmd_path.exists():
            self.log(f"Error: {mmd_path} not found", Colors.FAIL)
            return

        text = mmd_path.read_text()
        papers = re.split(r'KENYA MEDICAL TRAINING COLLEGE', text)
        extracted_count = 0

        month_map = {
            'jan': 'j', 'feb': 'f', 'mar': 'm', 'apr': 'a', 'may': 'm', 'jun': 'j',
            'jul': 'j', 'aug': 'a', 'sep': 's', 'oct': 'o', 'nov': 'n', 'dec': 'd'
        }

        for p in papers:
            if not p.strip(): continue
            full_p = "KENYA MEDICAL TRAINING COLLEGE" + p
            
            # Simple metadata extraction
            date_match = re.search(r'DATE:\s*(\d+)(?:st|nd|rd|th)?\s+([A-Z,a-z]+),?\s+(\d{4})', full_p)
            subject_match = re.search(r'PAPER:\s*(.+)$', full_p, re.MULTILINE | re.IGNORECASE)
            
            if date_match and subject_match:
                month = date_match.group(2).lower()[:3]
                year = date_match.group(3)
                session = month_map.get(month, 'x')
                subject_name = subject_match.group(1).strip()
                
                # Base filename
                filename = f"{year}{session}-fqe_ocr.mmd"
                
                # Target dir based on subject matching
                target_subject = self.root_dir / subject_name
                if not target_subject.exists():
                    # Fallback to general paper if subject folder missing
                    target_subject = self.root_dir / "General Paper"
                
                target_dir = target_subject / "exams" / college / "FQE"
                target_dir.mkdir(parents=True, exist_ok=True)
                
                # Handle duplicates
                final_path = target_dir / filename
                counter = 1
                while final_path.exists():
                    final_path = target_dir / f"{year}{session}-fqe-{counter}_ocr.mmd"
                    counter += 1
                
                final_path.write_text(full_p.strip())
                self.log(f"  Extracted: {final_path.relative_to(self.root_dir)}", Colors.GREEN)
                extracted_count += 1

        self.log(f"Total papers extracted: {extracted_count}")

    def init_structure(self, college="KMTC"):
        """Initializes the course folder structure based on modules.txt. Ported from create_structure.sh"""
        self.log(f"Initializing structure for {college}...", Colors.HEADER)
        categories = ["CATs", "FQE", "SUPPLEMENTARY", "END_OF_SEMESTER", "END_OF_YEAR", "PRACTICAL", "UNPROCESSED"]
        
        for subject_name in self.modules:
            subject_dir = self.root_dir / subject_name
            exams_dir = subject_dir / "exams" / college
            notes_dir = subject_dir / "notes"
            books_dir = subject_dir / "books"
            
            # Create directories
            for d in [exams_dir, notes_dir, books_dir]:
                d.mkdir(parents=True, exist_ok=True)
            
            # Create category folders
            for cat in categories:
                (exams_dir / cat).mkdir(parents=True, exist_ok=True)
            
            # Create dummy processing-status.json if missing
            status_file = exams_dir / "processing-status.json"
            if not status_file.exists():
                self.save_status(subject_dir, {"subject": subject_name, "files": []}, college)
                
            self.log(f"  Ensured: {subject_name}", Colors.BLUE)
        
        self.log("Structure initialization complete.", Colors.GREEN)
        self.fix_styling()

    def analyze_pdf(self, pdf_path, interval=5):
        """Samples PDF pages to help identify sections. Ported from analyze_pdf.py"""
        pdf_path = Path(pdf_path)
        if not pdf_path.exists():
            self.log(f"Error: {pdf_path} not found", Colors.FAIL)
            return

        self.log(f"Analyzing: {pdf_path}", Colors.HEADER)
        try:
            import PyPDF2
            with open(pdf_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                total_pages = len(reader.pages)
                
                print("-" * 80)
                print(f"{'Page':<6} | {'Content Preview'}")
                print("-" * 80)
                
                for i in range(1, total_pages + 1, interval):
                    # Use pdftotext for preview if possible
                    try:
                        result = subprocess.run(
                            ['pdftotext', '-f', str(i), '-l', str(i), str(pdf_path), '-'],
                            capture_output=True, text=True, check=True
                        )
                        text = result.stdout.strip()[:100].replace('\n', ' ')
                        print(f"{i:<6} | {text}")
                    except:
                        print(f"{i:<6} | [Could not extract text]")
                print("-" * 80)
        except Exception as e:
            self.log(f"Error: {e}", Colors.FAIL)

    def fix_paths(self):
        """Corrects relative asset paths in HTML files. Ported from fix_content_paths.py"""
        self.log("Fixing HTML asset paths...", Colors.BLUE)
        self.scan_for_subjects()
        
        for subject in self.subjects:
            exams_dir = subject / "exams"
            if not exams_dir.exists():
                continue
                
            for html_file in exams_dir.rglob("*.html"):
                if html_file.name == "index.html":
                    continue
                
                self.log(f"  Processing: {html_file.relative_to(self.root_dir)}")
                content = html_file.read_text(encoding='utf-8')
                original = content
                
                # Calculate relative path to assets
                depth = len(html_file.relative_to(self.root_dir).parts) - 1
                prefix = "../" * depth
                css_path = f"{prefix}assets/css/styles.css"
                js_path = f"{prefix}assets/js/sidebar-navigation.js"
                
                # Simple replacements
                content = re.sub(r'href="[^"]*styles\.css"', f'href="{css_path}"', content)
                content = re.sub(r'src="[^"]*sidebar-navigation\.js"', f'src="{js_path}"', content)
                
                if content != original:
                    html_file.write_text(content, encoding='utf-8')
                    self.log(f"    FIXED: {html_file.name}", Colors.GREEN)

    def create_starter_kit(self, output_filename="course_starter_kit.zip"):
        """Creates a zip file for starting a new course project. Ported from create_course_pack.py"""
        self.log(f"Creating starter kit: {output_filename}", Colors.HEADER)
        temp_dir = self.root_dir / "starter_kit_temp"
        if temp_dir.exists():
            shutil.rmtree(temp_dir)
        temp_dir.mkdir()

        try:
            # Collect tools
            tools_dir = temp_dir / "tools"
            tools_dir.mkdir()
            shutil.copy2(__file__, tools_dir / "exam_manager.py")
            
            # Collect assets
            assets_dir = temp_dir / "assets"
            assets_dir.mkdir()
            if (self.root_dir / "assets").exists():
                shutil.copytree(self.root_dir / "assets", assets_dir, dirs_exist_ok=True)
            
            # Create Instructions
            with open(temp_dir / "README.md", "w") as f:
                f.write("# Course Starter Kit\n\nUnified tool for managing educational content.\n\nRun `./tools/exam_manager.py dashboard` to start.")
            
            # Zip it
            shutil.make_archive(output_filename.replace(".zip", ""), 'zip', temp_dir)
            self.log(f"Success! Created {output_filename}", Colors.GREEN)
        finally:
            if temp_dir.exists():
                shutil.rmtree(temp_dir)

    def download_images(self, mmd_file, output_dir):
        """Extracts and downloads images from MMD. Ported from download_images.sh"""
        mmd_file = Path(mmd_file)
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
        
        if not mmd_file.exists():
            self.log(f"Error: {mmd_file} not found", Colors.FAIL)
            return

        self.log(f"Downloading images from {mmd_file}...", Colors.BLUE)
        content = mmd_file.read_text()
        urls = re.findall(r'https://cdn\.mathpix\.com/cropped/[^)]+', content)
        
        self.log(f"Found {len(urls)} images.")
        
        for i, url in enumerate(urls):
            # Clean URL
            url = url.split('}')[0].split(']')[0].strip()
            ext = url.split('.')[-1].split('?')[0]
            filename = f"image_{i+1:03d}.{ext}"
            target = output_dir / filename
            
            if target.exists():
                continue
                
            self.log(f"  ({i+1}/{len(urls)}) Downloading {filename}...")
            try:
                subprocess.run(['curl', '-f', '-s', '-L', '-o', str(target), url], check=True)
            except Exception as e:
                self.log(f"    Failed: {e}", Colors.FAIL)

    def generate_html_head(self, title, assets_path):
        return f"""<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>{title}</title>
    <link rel='stylesheet' href='{assets_path}/css/styles.css'>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'>
</head>
"""

    def generate_category_html(self, subject_name, college, category, force=False):
        """Generates an index.html for a specific category list."""
        subject_path = self.root_dir / subject_name
        cat_dir = subject_path / "exams" / college / category
        index_file = cat_dir / "index.html"
        
        if index_file.exists() and not force:
            return

        assets_path = "../../../../assets"
        
        files = []
        for ext in ["*.pdf", "*.html"]:
            files.extend([f for n in cat_dir.glob(ext) if (f := n).name != "index.html"])
        files.sort(key=lambda x: x.name, reverse=True)

        html = [
            self.generate_html_head(f"{category} - {subject_name} | {college}", assets_path),
            "<body>",
            "    <button class='mobile-nav-toggle' aria-label='Toggle Navigation'><i class='fas fa-bars'></i></button>",
            "    <div class='sidebar-backdrop'></div>",
            "    <div class='layout-container'>",
            "        <aside class='sidebar'>",
            f"            <div class='sidebar-header'><div class='logo'><i class='fas fa-file-medical'></i> <span>{category}</span></div></div>",
            "            <nav class='sidebar-nav'>",
            "                <a href='../../../../index.html' class='nav-item'><i class='fas fa-home'></i> <span>Home</span></a>",
            f"                <a href='../index.html' class='nav-item'><i class='fas fa-arrow-left'></i> <span>{subject_name}</span></a>",
            "                <a href='#papers' class='nav-item active'><i class='fas fa-file-alt'></i> <span>Papers Archive</span></a>",
            "            </nav>",
            "            <div class='sidebar-footer'><button class='theme-toggle'><i class='fas fa-moon'></i> <span>Dark Mode</span></button></div>",
            "        </aside>",
            "        <main class='main-content'>",
            "            <header class='paper-header'>",
            "                <div class='paper-meta'>",
            f"                    <span class='badge fqe'>{college}</span>",
            f"                    <span class='date'><i class='fas fa-folder-open'></i> {category}</span>",
            "                </div>",
            f"                <h1>{category} Exams</h1>",
            f"                <p class='subtitle'>{subject_name} Collection</p>",
            "            </header>",
            "            <div class='container'>",
            "                <div class='paper-instructions' style='margin-bottom: 2rem;'>",
            f"                    <h3><i class='fas fa-info-circle'></i> {category} Archive</h3>",
            f"                    <p>Access and study {subject_name} past papers for the {category} category. All papers are optimized for digital reading and printing.</p>",
            "                </div>",
            "                <section id='papers' class='category-section' style='padding:0;'>",
            "                    <div class='paper-grid' style='justify-content: center;'>"
        ]

        if not files:
            html.append("<p style='padding:3rem; text-align:center; color:var(--text-tertiary); background:var(--bg-card); border-radius:var(--radius-lg);'>No papers available in this collection yet.</p>")
        
        for f in files:
            icon = "fa-file-pdf" if f.suffix == ".pdf" else "fa-file-code"
            html.append(f"""
                    <div class='paper-card'>
                        <h3>{f.stem}</h3>
                        <div class='meta'>
                            <p><i class='far {icon}'></i> {f.suffix[1:].upper()} Format</p>
                        </div>
                        <div class='actions'>
                            <a href='{f.name}' class='btn'><i class='fas fa-eye'></i> View Paper</a>
                        </div>
                    </div>
            """)

        html.extend(["</div></section></div>", f"<footer><p><strong>{category} - {subject_name}</strong></p><p>{college} Past Papers Archive</p></footer>", "</main></div>", f"<script src='{assets_path}/js/sidebar-navigation.js'></script>", "</body></html>"])
        (cat_dir / "index.html").write_text("\n".join(html))
        self.log(f"  Generated Category Index: {subject_name}/{category}", Colors.GREEN)

    def generate_subject_html(self, subject_name, college, force=False):
        """Generates an index.html for a subject's exams in a college."""
        subject_path = self.root_dir / subject_name
        exams_dir = subject_path / "exams" / college
        index_file = exams_dir / "index.html"
        
        if index_file.exists() and not force:
            # Still trigger child generation checking
            pass
        else:
            assets_path = "../../../assets"
            
            categories = [item.name for item in exams_dir.iterdir() if item.is_dir() and item.name not in ["UNPROCESSED", "NOT_RELEVANT", "js", "images"]]
            categories.sort()

            html = [
                self.generate_html_head(f"{subject_name} Exams | {college}", assets_path),
                "<body>",
                "    <button class='mobile-nav-toggle' aria-label='Toggle Navigation'><i class='fas fa-bars'></i></button>",
                "    <div class='sidebar-backdrop'></div>",
                "    <div class='layout-container'>",
                "        <aside class='sidebar'>",
                f"            <div class='sidebar-header'><div class='logo'><i class='fas fa-book-medical'></i> <span>{subject_name}</span></div></div>",
                "            <nav class='sidebar-nav'>",
                "                <a href='../../../index.html' class='nav-item'><i class='fas fa-home'></i> <span>Home</span></a>",
                "                <a href='#categories' class='nav-item active'><i class='fas fa-folder-open'></i> <span>Browse Types</span></a>",
                "            </nav>",
                "            <div class='sidebar-footer'><button class='theme-toggle'><i class='fas fa-moon'></i> <span>Dark Mode</span></button></div>",
                "        </aside>",
                "        <main class='main-content'>",
                "            <header class='paper-header'>",
                "                <div class='paper-meta'>",
                f"                    <span class='badge fqe'>{college}</span>",
                f"                    <span class='date'><i class='fas fa-graduation-cap'></i> {subject_name} Archive</span>",
                "                </div>",
                f"                <h1>{subject_name}</h1>",
                f"                <p class='subtitle'>Past Papers Collection | {college}</p>",
                "            </header>",
                "            <div class='container'>",
                "                <div class='paper-instructions' style='margin-bottom: 2rem;'>",
                "                    <h3><i class='fas fa-info-circle'></i> Subject Overview</h3>",
                f"                    <p>Select an examination category below to browse and access resources for {subject_name}.</p>",
                "                </div>",
                "                <section id='categories' class='category-section' style='padding:0;'>",
                "                    <div class='paper-grid' style='justify-content: center;'>"
            ]

            for cat in categories:
                # Count files
                # Count files
                cat_path = exams_dir / cat
                # Only count non-index HTML files (ignore PDFs)
                count = len([f for f in cat_path.glob("*.html") if f.name != "index.html"])
                
                if count == 0:
                    continue

                badge_class = cat.lower().replace("_", "-").replace(" ", "-")
                
                html.append(f"""
                    <div class='paper-card'>
                        <div style='display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;'>
                            <h3 style='margin: 0;'>{cat}</h3>
                            <span class='badge {badge_class}'>{cat}</span>
                        </div>
                        <div class='meta'>
                            <p><i class='fas fa-file-alt'></i> {count} Available Papers</p>
                        </div>
                        <div class='actions'>
                            <a href='{cat}/index.html' class='btn'><i class='fas fa-arrow-right'></i> Open Category</a>
                        </div>
                    </div>
                """)
                
            html.extend(["</div></section></div>", f"<footer><p><strong>{subject_name} Collection</strong></p><p>{college} Past Papers</p></footer>", "</main></div>", f"<script src='{assets_path}/js/sidebar-navigation.js'></script>", "</body></html>"])
            index_file.write_text("\n".join(html))
            self.log(f" Generated Subject Index: {subject_name}", Colors.GREEN)

        # Always check children
        for cat in [item.name for item in exams_dir.iterdir() if item.is_dir() and item.name not in ["UNPROCESSED", "NOT_RELEVANT", "js", "images"]]:
            self.generate_category_html(subject_name, college, cat, force=force)

    def generate_html_index(self, force=False):
        """Generates unified root index and all sub-indices."""
        self.scan_for_subjects()
        self.log("Generating boilerplate web navigation...", Colors.HEADER)
        
        main_index = self.root_dir / "index.html"
        assets_path = "assets"
        
        if main_index.exists() and not force:
            self.log("  Root index already exists. Skipping root generation.", Colors.BLUE)
        else:
            html_content = [
                self.generate_html_head("Educational Content Archive | DHRIT", assets_path),
                "<body>",
                "    <button class='mobile-nav-toggle' aria-label='Toggle Navigation'><i class='fas fa-bars'></i></button>",
                "    <div class='sidebar-backdrop'></div>",
                "    <div class='layout-container'>",
                "        <aside class='sidebar'>",
                "            <div class='sidebar-header'><div class='logo'><i class='fas fa-graduation-cap'></i> <span>DHRIT</span></div></div>",
                "            <nav class='sidebar-nav'>",
                "                <a href='index.html' class='nav-item active'><i class='fas fa-home'></i> <span>Home</span></a>",
                "                <a href='#overview' class='nav-item'><i class='fas fa-info-circle'></i> <span>Overview</span></a>",
                "                <a href='#subjects' class='nav-item'><i class='fas fa-book'></i> <span>Browse Subjects</span></a>",
                "            </nav>",
                "            <div class='sidebar-footer'><button class='theme-toggle'><i class='fas fa-moon'></i> <span>Dark Mode</span></button></div>",
                "        </aside>",
                "        <main class='main-content'>",
                "            <header class='paper-header'>",
                "                <div class='paper-meta'>",
                "                    <span class='badge fqe'>DHRIT</span>",
                f"                    <span class='date'><i class='far fa-calendar-alt'></i> Updated: {datetime.now().strftime('%Y-%m-%d')}</span>",
                "                </div>",
                "                <h1>Past Papers Archive</h1>",
                "                <p class='subtitle'>Diploma in Health Records and Information Technology Resources</p>",
                "            </header>",
                "            <div class='container'>",
                "                <div class='paper-instructions' style='margin-bottom: 2rem;'>",
                "                    <h3><i class='fas fa-info-circle'></i> Digital Repository</h3>",
                "                    <p>Welcome to the medical examination resource center. Browse subjects below to access qualifying papers from various colleges.</p>",
                "                </div>",
                "                <section id='subjects' class='category-section' style='padding:0;'>",
                "                    <div class='paper-grid' style='justify-content: center;'>"
            ]

            for subject in self.subjects:
                name = subject.name
                exams_root = subject / "exams"
                
                if not exams_root.exists():
                    continue
                    
                # Check if subject has any content (Only HTML files, no PDFs)
                content_count = len([f for f in exams_root.rglob("*.html") if f.name != "index.html"])
                if content_count == 0:
                    continue

                colleges = sorted([item.name for item in exams_root.iterdir() if item.is_dir() and item.name != "assets"])
                
                html_content.append("<div class='paper-card'>")
                html_content.append(f"<h3>{name}</h3>")
                
                if colleges:
                    html_content.append("<div class='meta' style='display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;'>")
                    for college in colleges:
                        link = f"{name}/exams/{college}/index.html"
                        clazz = college.lower().replace(" ", "-")
                        html_content.append(f"<a href='{link}' class='badge {clazz}' style='font-size:0.75rem; padding:0.25rem 0.6rem; border-radius: var(--radius-sm); color: white; text-decoration: none;'><i class='fas fa-university'></i> {college}</a>")
                    html_content.append("</div>")
                else:
                    html_content.append("<p style='color: var(--text-muted); font-size:0.875rem;'>Repository Under Setup</p>")
                
                html_content.append("</div>")

            html_content.extend(["</div></section></div>", "<footer><p><strong>Educational Content Archive</strong></p><p>DHRIT Professional Education Management</p></footer>", "</main></div>", f"<script src='{assets_path}/js/sidebar-navigation.js'></script>", "</body></html>"])
            main_index.write_text("\n".join(html_content))
            self.log(" Generated Root Index", Colors.GREEN)

        # Recurse into subjects for their indices
        for subject in self.subjects:
            name = subject.name
            exams_root = subject / "exams"
            if exams_root.exists():
                colleges = [item.name for item in exams_root.iterdir() if item.is_dir() and item.name != "assets"]
                for college in colleges:
                    self.generate_subject_html(name, college, force=force)

        self.log("BOILERPLATE GENERATION PROCESS COMPLETE", Colors.HEADER)

    # --- CLI Main Logic ---

    def scan_new_files(self, subject_name=None, college="KMTC"):
        self.scan_for_subjects()
        targets = self.subjects
        if subject_name:
            targets = [s for s in self.subjects if s.name == subject_name]

        for subject in targets:
            unprocessed_dir = subject / "exams" / college / "UNPROCESSED"
            if not unprocessed_dir.exists():
                continue

            status_data = self.get_status(subject, college) or {
                "subject": subject.name,
                "files": [],
                "statistics": {}
            }

            pdfs = list(unprocessed_dir.glob("*.pdf"))
            added_count = 0
            for pdf in pdfs:
                if not any(f['filename'] == pdf.name for f in status_data['files']):
                    status_data['files'].append({
                        "filename": pdf.name, "status": "unprocessed",
                        "discovered": datetime.now().isoformat()
                    })
                    added_count += 1
            if added_count > 0:
                self.log(f"[{subject.name}] Found {added_count} files in {college}.", Colors.GREEN)
                self.save_status(subject, status_data, college)

    def process_files(self, subject_name=None, college="KMTC"):
        self.scan_for_subjects()
        targets = self.subjects
        if subject_name:
            targets = [s for s in self.subjects if s.name == subject_name]

        for subject in targets:
            status_data = self.get_status(subject, college)
            if not status_data: continue
            unprocessed_dir = subject / "exams" / college / "UNPROCESSED"
            updated = False
            for file_entry in status_data['files']:
                if file_entry.get('status') == 'unprocessed':
                    pdf_path = unprocessed_dir / file_entry['filename']
                    mmd_filename = f"{pdf_path.stem}_ocr.mmd"
                    mmd_path = unprocessed_dir / mmd_filename
                    self.log(f"[{subject.name}] OCR: {file_entry['filename']}...")
                    try:
                        subprocess.run(["node", self.mathpix_path, str(pdf_path)], stdout=open(mmd_path, "w"), check=True)
                        file_entry.update({"status": "mmd_generated", "mmd_filename": mmd_filename, "processed_at": datetime.now().isoformat()})
                        updated = True
                    except Exception as e: self.log(f"Error: {e}", Colors.FAIL)
            if updated: self.save_status(subject, status_data, college)

def main():
    parser = argparse.ArgumentParser(description="Exam Manager AI Agent")
    parser.add_argument('action', choices=['dashboard', 'scan', 'process', 'list', 'split', 'analyze', 'fix-paths', 'pack', 'download-images', 'index', 'extract', 'init-structure', 'fix-styling'], help='Action to perform')
    parser.add_argument('--subject', help='Specific subject')
    parser.add_argument('--college', default='KMTC', help='College (default: KMTC)')
    parser.add_argument('--file', help='File path')
    parser.add_argument('--out', help='Output path')
    parser.add_argument('--pages', help='Page ranges')
    parser.add_argument('--force', action='store_true', help='Force overwrite existing index files')
    
    args = parser.parse_args()
    manager = ExamManager(os.getcwd())
    
    if args.action == 'dashboard': manager.create_dashboard()
    elif args.action == 'scan': manager.scan_new_files(args.subject, args.college); manager.create_dashboard()
    elif args.action == 'process': manager.process_files(args.subject, args.college); manager.create_dashboard()
    elif args.action == 'list':
        for s in manager.scan_for_subjects(): print(s.name)
    elif args.action == 'analyze': manager.analyze_pdf(args.file)
    elif args.action == 'fix-paths': manager.fix_paths()
    elif args.action == 'pack': manager.create_starter_kit(args.out or "course_starter_kit.zip")
    elif args.action == 'index': manager.generate_html_index(force=args.force)
    elif args.action == 'extract': manager.extract_papers(args.file, args.college)
    elif args.action == 'init-structure': manager.init_structure(args.college)
    elif args.action == 'fix-styling': manager.fix_styling()

if __name__ == "__main__":
    main()
