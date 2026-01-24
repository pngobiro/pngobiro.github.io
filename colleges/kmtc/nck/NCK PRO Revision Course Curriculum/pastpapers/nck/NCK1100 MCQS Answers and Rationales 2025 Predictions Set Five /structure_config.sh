#!/bin/bash

# =================================================================
# EDUCATIONAL CONTENT ORGANIZATION SYSTEM - CONFIGURATION (v1.3)
# =================================================================

# 1. COLLEGES / INSTITUTIONS
# -----------------------------------------------------------------
# Based on the header "NCK, KRCHN" (Nursing Council of Kenya)
COLLEGES=(
    "NCK"
)

# 2. SUBJECTS / COURSES
# -----------------------------------------------------------------
# The PDF covers Paper 2 which includes these specific disciplines.
# We will organize them as subjects or keep them under "KRCHN_Paper_2"
# depending on preference. Here they are listed as subjects for granular access.
SUBJECTS=(
    "Community_Health"
    "Communicable_Diseases"
    "Community_Strategy_PHC"
    "Environmental_Health"
    "Community_Diagnosis"
    "Special_Needs"
    "Health_Promotion"
    "Gender_Health"
    "Immunization_KEPI"
    "Epidemiology"
    "Family_Planning"
    "Nutrition"
    "HIV_AIDS"
    "Research"
    "Psychiatry_Nursing"
    "Paediatric_Nursing"
    "Communication_Counseling"
    "Psychology"
    "Sociology"
    "ETAT_IMCI"
    "Health_System_Management"
    "Teaching_Methodology"
)

# 3. EXAM CATEGORIES
# -----------------------------------------------------------------
# Based on the header "2025, Predictions, set five"
CATEGORIES=(
    "PREDICTIONS"
    "REVISION_SETS"
    "MOCK_EXAMS"
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