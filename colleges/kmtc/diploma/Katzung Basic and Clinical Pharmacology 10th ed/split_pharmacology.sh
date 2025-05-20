#!/bin/bash

# Exit on error
set -e

# Function to check if file exists and is not empty
check_file() {
    local file=$1
    local section=$2
    if [[ ! -f "$file" ]]; then
        echo "Error: Failed to create $section"
        exit 1
    fi
    if [[ ! -s "$file" ]]; then
        echo "Error: $section is empty"
        exit 1 
    fi
    echo "✓ Created $section"
}

# Function to verify line count
verify_lines() {
    local file=$1
    local expected_start=$2
    local expected_end=$3
    local actual_lines=$(wc -l < "$file")
    local expected_lines=$((expected_end - expected_start + 1))
    
    if [[ $actual_lines -ne $expected_lines ]]; then
        echo "Error: Line count mismatch in $file"
        echo "Expected $expected_lines lines, got $actual_lines lines"
        exit 1
    fi
}

# Check if source file exists
if [[ ! -f "Katzung Basic and Clinical Pharmacology 10th ed.txt" ]]; then
    echo "Error: Source file not found"
    exit 1
fi

# Create directory for split files
mkdir -p pharmacology_sections

echo "Starting split operation..."

# Basic Principles
echo "Splitting Basic Principles sections..."
sed -n '1,291p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/01_front_matter.txt
check_file "pharmacology_sections/01_front_matter.txt" "Front Matter"
verify_lines "pharmacology_sections/01_front_matter.txt" 1 291

sed -n '292,419p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/02_introduction.txt
check_file "pharmacology_sections/02_introduction.txt" "Introduction"
verify_lines "pharmacology_sections/02_introduction.txt" 292 419

sed -n '420,499p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/03_drug_body_interactions.txt
check_file "pharmacology_sections/03_drug_body_interactions.txt" "Drug-Body Interactions"
verify_lines "pharmacology_sections/03_drug_body_interactions.txt" 420 499

sed -n '500,1109p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/04_drug_receptors.txt
check_file "pharmacology_sections/04_drug_receptors.txt" "Drug Receptors"
verify_lines "pharmacology_sections/04_drug_receptors.txt" 500 1109

sed -n '1110,2060p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/05_pharmacokinetics.txt
check_file "pharmacology_sections/05_pharmacokinetics.txt" "Pharmacokinetics"
verify_lines "pharmacology_sections/05_pharmacokinetics.txt" 1110 2060

sed -n '2061,2446p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/06_drug_biotransformation.txt
check_file "pharmacology_sections/06_drug_biotransformation.txt" "Drug Biotransformation"
verify_lines "pharmacology_sections/06_drug_biotransformation.txt" 2061 2446

sed -n '2447,2760p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/07_drug_development.txt
check_file "pharmacology_sections/07_drug_development.txt" "Drug Development"
verify_lines "pharmacology_sections/07_drug_development.txt" 2447 2760

# Autonomic Pharmacology
echo "Splitting Autonomic Pharmacology sections..."
sed -n '2761,3454p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/08_autonomic_intro.txt
check_file "pharmacology_sections/08_autonomic_intro.txt" "Autonomic Intro"
verify_lines "pharmacology_sections/08_autonomic_intro.txt" 2761 3454

sed -n '3455,4090p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/09_cholinergic_drugs.txt
check_file "pharmacology_sections/09_cholinergic_drugs.txt" "Cholinergic Drugs"
verify_lines "pharmacology_sections/09_cholinergic_drugs.txt" 3455 4090

sed -n '4091,4711p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/10_anticholinergic_drugs.txt
check_file "pharmacology_sections/10_anticholinergic_drugs.txt" "Anticholinergic Drugs"
verify_lines "pharmacology_sections/10_anticholinergic_drugs.txt" 4091 4711

sed -n '4712,5000p' "Katzung Basic and Clinical Pharmacology 10th ed.txt" > pharmacology_sections/11_adrenergic_drugs.txt
check_file "pharmacology_sections/11_adrenergic_drugs.txt" "Adrenergic Drugs"
verify_lines "pharmacology_sections/11_adrenergic_drugs.txt" 4712 5000

# Create README
echo "Creating README..."
cat << 'EOF' > pharmacology_sections/README.md
# Pharmacology Textbook Sections

## Basic Principles
1. Front Matter
2. Introduction to Pharmacology
3. Drug-Body Interactions
4. Drug Receptors & Pharmacodynamics  
5. Pharmacokinetics
6. Drug Biotransformation
7. Drug Development & Regulation

## Autonomic Pharmacology
8. Introduction to Autonomic Pharmacology
9. Cholinergic Drugs
10. Anticholinergic Drugs  
11. Adrenergic Drugs

Each section represents a logical chapter division based on content boundaries.
EOF

check_file "pharmacology_sections/README.md" "README"

echo "Split complete! Files are in ./pharmacology_sections/"
echo "All sections verified successfully"

# Make script executable
chmod +x split_pharmacology.sh
