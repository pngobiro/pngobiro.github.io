#!/bin/bash

# =================================================================
# EDUCATIONAL CONTENT ORGANIZATION SYSTEM - CONFIGURATION (v1.3)
# =================================================================

# 1. COLLEGES / INSTITUTIONS
# -----------------------------------------------------------------
# Add the names of the institutions you are archiving papers for.
# These will be the top-level directories.
COLLEGES=(
    "NCK"
)

# 2. SUBJECTS / COURSES
# -----------------------------------------------------------------
# Add the specific subjects or paper names found in your documents.
# Based on your PDF, we have identified these specific papers.
SUBJECTS=(
    "PAPER ONE"
    "PAPER TWO"
     "PAPER THREE"
     "PAPER FOUR"
)

# 3. EXAM CATEGORIES
# -----------------------------------------------------------------
# These create the sub-folders for each subject to organize by exam type.
CATEGORIES=(
    "LICENSURE"          # NCK Council Exams
)

# 4. BASE DIRECTORIES
# -----------------------------------------------------------------
# System directories for workflow management. Do not change these
# unless you have modified the processing scripts.
BASE_DIRS=(
    "UNPROCESSED"        # Drop new files here
    "NOT_RELEVANT"       # Move non-exam files here
    "assets"             # Centralized CSS/JS/Images location
)

# =================================================================
# END CONFIGURATION
# =================================================================
