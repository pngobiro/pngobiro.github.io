
#!/bin/bash

# =================================================================
# EDUCATIONAL CONTENT ORGANIZATION SYSTEM - CONFIGURATION (v1.3)
# =================================================================

# 1. COLLEGES / INSTITUTIONS
# -----------------------------------------------------------------
COLLEGES=(
    "NCK"
)

# 2. SUBJECTS / COURSES
# -----------------------------------------------------------------
# Simplified from 26 topics into the 4 Major Nursing Disciplines.
# You can split the questions into these broad folders.
SUBJECTS=(
    "1. Basic Nursing Sciences"           # Includes: Anatomy, Physiology, Pharmacology, Immunology
    "2. Nursing Fundamentals"             # Includes: Professionalism, Ethics, First Aid, Communication
    "3. Medical Surgical Nursing"         # Includes: All body systems (Resp, Cardio, Neuro, Ortho, ENT, Eye, etc.)
    "4. Midwifery and Reproductive Health" # Includes: Obstetrics, Gynae, Postpartum, Newborn
)

# 3. EXAM CATEGORIES
# -----------------------------------------------------------------
CATEGORIES=(
    "Licensure_Paper_1"  # General Nursing
    "Licensure_Paper_2"  # Midwifery
    "Licensure_Paper_3"  # Community Health
    "Block_Exams"        # Internal college tests
)

# 4. BASE DIRECTORIES
# -----------------------------------------------------------------
BASE_DIRS=(
    "UNPROCESSED"
    "NOT_RELEVANT"
    "assets"
)

# =================================================================
# END CONFIGURATION
# =================================================================
```