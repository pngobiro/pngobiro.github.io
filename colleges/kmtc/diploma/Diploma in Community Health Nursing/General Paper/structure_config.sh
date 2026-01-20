#!/bin/bash

# ================================================================= 
# EDUCATIONAL CONTENT ORGANIZATION SYSTEM - CONFIGURATION
# Version 1.3 (Centralized Assets Support)
# =================================================================

# 1. INSTITUTIONS / ORGANIZATIONS
# Based on the document headers
COLLEGES=(
    "KMTC"
)

# 2. SUBJECTS / COURSES / PAPERS
# Restricted to General Paper as requested
SUBJECTS=(
    "General_Paper"
)

# 3. EXAM CATEGORIES / TYPES
# Restricted to Final Qualifying Examinations
CATEGORIES=(
    "FQE"
)

# 4. BASE DIRECTORIES
# System directories - DO NOT CHANGE for v1.3 compliance
BASE_DIRS=(
    "UNPROCESSED"           # Drop your PDF screenshots here
    "NOT_RELEVANT"          # Move non-exam files here
    "assets"                # Centralized CSS/JS/Images
)