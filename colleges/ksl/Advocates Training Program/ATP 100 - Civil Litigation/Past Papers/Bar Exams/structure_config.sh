!/bin/bash

# Configuration file for KSL ATP 100 Archive
# Tailored for Council of Legal Education / Kenya School of Law content

# =============================================================================
# INSTITUTION CONFIGURATION
# =============================================================================

# Colleges/Institutions
COLLEGES=(
    "KSL"
)

# Exam Categories
# Based on the content, these are Professional Bar Examinations
CATEGORIES=(
    "Bar_Exams"
)

# Subjects
# Extracted from the exam papers (ATP 100)
SUBJECTS=(
    "ATP 100 - Civil Litigation"
)

# Base directories (infrastructure)
BASE_DIRS=(
    "UNPROCESSED"
    "NOT_RELEVANT"
)

# =============================================================================
# SITE CONFIGURATION
# =============================================================================

SITE_TITLE="Kenya School of Law Past Papers"
SITE_DESCRIPTION="Archive of Council of Legal Education Examination Papers"
SITE_COPYRIGHT="© 2025 Legal Education Archive"

# Year range based on the PDF content (2008 - 2024)
YEAR_START="2008"
YEAR_END="2024"

# Feature flags
ENABLE_DARK_MODE=true
ENABLE_SEARCH=true
ENABLE_ANALYTICS=false

# =============================================================================
# METADATA FUNCTIONS
# =============================================================================

# College metadata
get_college_full_name() {
    local college="$1"
    case "$college" in
        "KSL") echo "Kenya School of Law / Council of Legal Education" ;;
        *) echo "$college" ;;
    esac
}

get_college_icon() {
    local college="$1"
    case "$college" in
        "KSL") echo "fas fa-balance-scale" ;; # Icon for Law
        *) echo "fas fa-university" ;;
    esac
}

get_college_description() {
    local college="$1"
    case "$college" in
        "KSL") echo "Examination for Admission to the Roll of Advocates (Bar Exams)" ;;
        *) echo "Educational Institution" ;;
    esac
}

# Category metadata
get_category_icon() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "fas fa-gavel" ;;
        *) echo "fas fa-file-alt" ;;
    esac
}

get_category_display_name() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "Bar Examinations" ;;
        *) echo "${category//_/ }" ;;
    esac
}

get_category_description() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "Professional examinations for admission to the Roll of Advocates" ;;
        *) echo "Examination papers" ;;
    esac
}

get_badge_class() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "fqe" ;; # Styles as a Final Qualifying Exam
        *) echo "default" ;;
    esac
}

# Subject metadata
get_subject_icon() {
    local subject="$1"
    case "$subject" in
        *"Civil Litigation"*) echo "fas fa-briefcase" ;;
        *) echo "fas fa-book" ;;
    esac
}

get_subject_description() {
    local subject="$1"
    case "$subject" in
        *"Civil Litigation"*) echo "ATP 100: Civil Procedure Rules, Pleadings, and Litigation Practice" ;;
        *) echo "Course materials" ;;
    esac
}

get_subject_level() {
    # ATP is Post-Graduate / Professional level
    echo "Professional"
}

# =============================================================================
# EXPORT FUNCTIONS
# =============================================================================

export -f get_college_full_name
export -f get_college_icon
export -f get_college_description
export -f get_category_icon
export -f get_category_display_name
export -f get_category_description
export -f get_badge_class
export -f get_subject_icon
export -f get_subject_description
export -f get_subject_level