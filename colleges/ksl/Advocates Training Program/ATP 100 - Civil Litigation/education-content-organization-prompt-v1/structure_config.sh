#!/bin/bash

# Configuration file for Educational Institution Archive System
# Edit these arrays and functions to customize your structure

# =============================================================================
# INSTITUTION CONFIGURATION
# =============================================================================

# Colleges/Institutions
COLLEGES=(
    "KSL"
)

# Exam Categories
CATEGORIES=(
    "Bar_Exams"
)

# Subjects (the actual subjects/courses being examined)
SUBJECTS=(
    "ATP 100 - Civil Litigation"
)

# Base directories (always created at root level, but hidden from UI)
BASE_DIRS=(
    "UNPROCESSED"
    "NOT_RELEVANT"
)

# =============================================================================
# SITE CONFIGURATION
# =============================================================================

SITE_TITLE="Educational Past Papers Archive"
SITE_DESCRIPTION="Comprehensive collection of past examination papers"
SITE_COPYRIGHT="© 2025 Educational Content Management System"

# Year range configuration
YEAR_START="2020"
YEAR_END="2025"

# Feature flags
ENABLE_DARK_MODE=true
ENABLE_SEARCH=false
ENABLE_ANALYTICS=false

# =============================================================================
# METADATA FUNCTIONS
# =============================================================================

# College metadata
get_college_full_name() {
    local college="$1"
    case "$college" in
        "KSL") echo "Kenya School of Law" ;;
        "KMTC") echo "Kenya Medical Training College" ;;
        "MKU") echo "Mount Kenya University" ;;
        "MMU") echo "Multimedia University" ;;
        "UON") echo "University of Nairobi" ;;
        "JKUAT") echo "Jomo Kenyatta University of Agriculture and Technology" ;;
        *) echo "$college" ;;
    esac
}

get_college_icon() {
    local college="$1"
    case "$college" in
        "KSL") echo "fas fa-balance-scale" ;;
        "KMTC") echo "fas fa-hospital" ;;
        "MKU") echo "fas fa-mountain" ;;
        "MMU") echo "fas fa-desktop" ;;
        "UON") echo "fas fa-university" ;;
        "JKUAT") echo "fas fa-seedling" ;;
        *) echo "fas fa-graduation-cap" ;;
    esac
}

get_college_description() {
    local college="$1"
    case "$college" in
        "KSL") echo "Professional legal education and bar examination papers" ;;
        "KMTC") echo "Medical and health sciences education programs" ;;
        "MKU") echo "Comprehensive university education across multiple disciplines" ;;
        "MMU") echo "Technology and multimedia education programs" ;;
        *) echo "Past examination papers and study materials" ;;
    esac
}

# Category metadata
get_category_icon() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "fas fa-gavel" ;;
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

get_category_display_name() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "Bar Examinations" ;;
        "CATs") echo "Continuous Assessment Tests" ;;
        "FQE") echo "Final Qualifying Exams" ;;
        "END_OF_SEMESTER") echo "End of Semester Exams" ;;
        "END_OF_YEAR") echo "End of Year Exams" ;;
        "SUPPLEMENTARY") echo "Supplementary Exams" ;;
        "UPGRADING") echo "Upgrading Exams" ;;
        "PRACTICAL") echo "Practical Exams" ;;
        *) echo "$category" ;;
    esac
}

get_category_description() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "Professional bar examination papers and assessments" ;;
        "CATs") echo "Continuous Assessment Tests and evaluations" ;;
        "FQE") echo "Final Qualifying Examinations" ;;
        "END_OF_SEMESTER") echo "End of semester examinations" ;;
        "END_OF_YEAR") echo "End of year examinations" ;;
        "SUPPLEMENTARY") echo "Supplementary and retake examinations" ;;
        "UPGRADING") echo "Upgrading examinations" ;;
        "PRACTICAL") echo "Practical examinations and lab assessments" ;;
        *) echo "Examination papers" ;;
    esac
}

get_badge_class() {
    local category="$1"
    case "$category" in
        "Bar_Exams") echo "fqe" ;;
        "CATs") echo "cat" ;;
        "FQE") echo "fqe" ;;
        "PRACTICAL") echo "practical" ;;
        "SUPPLEMENTARY") echo "cat" ;;
        "UPGRADING") echo "fqe" ;;
        "END_OF_SEMESTER") echo "fqe" ;;
        "END_OF_YEAR") echo "fqe" ;;
        *) echo "default" ;;
    esac
}

# Subject metadata
get_subject_icon() {
    local subject="$1"
    # Determine icon based on subject name patterns
    case "$subject" in
        *"Civil"*|*"Litigation"*) echo "fas fa-gavel" ;;
        *"Criminal"*) echo "fas fa-handcuffs" ;;
        *"Commercial"*) echo "fas fa-briefcase" ;;
        *"Constitutional"*) echo "fas fa-landmark" ;;
        *"Contract"*) echo "fas fa-file-contract" ;;
        *"Tort"*) echo "fas fa-balance-scale-right" ;;
        *"Engineering 1"*|*"100"*) echo "fas fa-cogs" ;;
        *"Engineering 2"*|*"200"*) echo "fas fa-microchip" ;;
        *"Engineering 3"*|*"300"*) echo "fas fa-stethoscope" ;;
        *) echo "fas fa-book" ;;
    esac
}

get_subject_description() {
    local subject="$1"
    local subject_num="${subject//[!0-9]/}"
    
    # Custom descriptions based on subject patterns
    if [[ "$subject" =~ "Civil Litigation" ]]; then
        echo "Civil procedure, pleadings, and litigation practice"
    elif [[ "$subject" =~ "Criminal" ]]; then
        echo "Criminal law, procedure, and litigation practice"
    elif [[ "$subject" =~ "Commercial" ]]; then
        echo "Commercial law and business practice"
    elif [[ "$subject_num" =~ ^1 ]] || [[ "$subject" =~ 100 ]]; then
        echo "Foundation concepts and practical applications"
    elif [[ "$subject_num" =~ ^2 ]] || [[ "$subject" =~ 200 ]]; then
        echo "Advanced topics and comprehensive analysis"
    elif [[ "$subject_num" =~ ^3 ]] || [[ "$subject" =~ 300 ]]; then
        echo "Specialized applications and professional practice"
    else
        echo "Comprehensive course materials and examination papers"
    fi
}

get_subject_level() {
    local subject="$1"
    local subject_num="${subject//[!0-9]/}"
    
    if [[ "$subject_num" =~ ^1 ]] || [[ "$subject" =~ 100 ]]; then
        echo "1"
    elif [[ "$subject_num" =~ ^2 ]] || [[ "$subject" =~ 200 ]]; then
        echo "2"
    elif [[ "$subject_num" =~ ^3 ]] || [[ "$subject" =~ 300 ]]; then
        echo "3"
    else
        echo "1"
    fi
}

# =============================================================================
# EXPORT FUNCTIONS
# =============================================================================

# Export all functions for use in other scripts
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