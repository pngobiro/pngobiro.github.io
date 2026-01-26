# Configuration for Educational Content
# This file is sourced by create_structure.sh and update_index.sh

# Colleges/Institutions
COLLEGES=(
    "KMTC"
)

# Categories (Types of Papers)
CATEGORIES=(
    "CATs"
    "FQE"
    "PRACTICAL"
    "END_OF_SEMESTER"
    "END_OF_YEAR"
    "SUPPLEMENTARY"
    "UPGRADING"
)

# Subjects (This list might be long, so maybe we dynamically generate it or just list the main ones)
# Ideally, update_index.sh should be smart enough to just scan directories, but the current script relies on this list for create_structure.sh
SUBJECTS=(
    "Computer Application in Health Care"
    "Health Data Classification"
    "Health Information System"
    "Health Records Management"
    "Human Pathology"
    "Medical Demography"
    "Medical Terminology"
    "Mental Health"
    "Monitoring and Evaluation"
    "Epidemiology"
)

# Base Directories (where to start creating structure if not root)
BASE_DIRS=(
    "."
)