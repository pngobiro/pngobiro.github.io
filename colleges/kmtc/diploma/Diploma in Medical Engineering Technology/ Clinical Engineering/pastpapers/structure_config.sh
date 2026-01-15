#!/bin/bash

# Configuration file for Medical Education Content Structure
# Edit these arrays to customize your structure

# Colleges/Institutions
COLLEGES=(
    "KMTC"
    "MKU"
    "MMU"
)

# Exam Categories
CATEGORIES=(
    "CATs"
    "END_OF_SEMESTER"
    "END_OF_YEAR"
    "FQE"
    "SUPPLEMENTARY"
    "UPGRADING"
    "PRACTICAL"
)

# Subjects (the actual subjects/courses being examined)
SUBJECTS=(
    "Clinical Engineering 1"
    "Clinical Engineering 2"
    "Clinical Engineering 3"
)

# Base directories (always created at root level)
BASE_DIRS=(
    "UNPROCESSED"
    "NOT_RELEVANT"
)

# Example customization:
# To add more colleges:
# COLLEGES=(
#     "KMTC"
#     "MKU"
#     "MMU"
#     "UON"
#     "JKUAT"
# )

# To add more subjects:
# SUBJEC=(
#     "Paper1"
#     "Paper2"
#     "Paper3"
# )