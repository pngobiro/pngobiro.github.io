
#!/bin/bash

# =================================================================
# NCK 2024 PAST PAPERS - AUTOMATED SETUP SCRIPT
# =================================================================

echo "🚀 Starting NCK 2024 Project Setup..."

# 1. CREATE CONFIGURATION FILE
# -----------------------------------------------------------------
echo "📝 Generating structure configuration..."
cat > structure_config.sh << 'EOF'
#!/bin/bash
COLLEGES=("NCK")
SUBJECTS=(
    "Anatomy_and_Physiology"
    "Medical_Surgical_Nursing"
    "Pharmacology"
    "Theatre_Nursing"
    "Professionalism_and_Fundamentals"
    "Specialized_Nursing_Procedures"
    "Dermatology"
    "ENT_Ear_Nose_Throat"
    "Ophthalmology"
    "Dental_and_Alimentary"
    "First_Aid_and_Emergency"
    "Reproductive_Health"
    "Immunology"
    "Respiratory_Nursing"
    "Hematology"
    "Neurology"
    "Psychology_and_Communication"
    "Endocrine_Nursing"
    "Cardiovascular_Nursing"
    "Palliative_Care"
    "Critical_Care_ICU"
    "Orthopedics"
    "Renal_and_Urology"
    "Tropical_Medicine"
    "Midwifery_and_Obstetrics"
)
CATEGORIES=("LICENSURE_EXAMS")
BASE_DIRS=("UNPROCESSED" "NOT_RELEVANT" "assets")
