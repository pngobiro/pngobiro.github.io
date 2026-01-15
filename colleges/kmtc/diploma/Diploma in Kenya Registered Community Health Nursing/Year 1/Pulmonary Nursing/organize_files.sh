#!/bin/bash

# A robust script to reorganize respiratory system files.
#
# Features:
# - Checks if files exist before trying to move them.
# - Provides a summary of actions at the end.
# - Cleans up the 'notes' directory, even if it contains hidden files.
# - Includes a dry-run mode to preview changes.
#
# Usage:
#   ./organize_files_robust.sh         (to perform the reorganization)
#   ./organize_files_robust.sh --dry-run (to see what would be moved)

# --- Configuration ---
DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "--- RUNNING IN DRY-RUN MODE ---"
  echo "No files will be moved. Changes will only be simulated."
  echo
fi

FILES_MOVED=0
FILES_SKIPPED=0

# --- Helper Function ---
# A function to safely move a file.
# It checks if the source file exists before attempting to move.
# Usage: move_file "source/file.txt" "destination_folder"
move_file() {
  local source_file="$1"
  local dest_dir="$2"

  if [ -f "$source_file" ]; then
    echo "Moving '$source_file'  ->  '$dest_dir/'"
    if [ "$DRY_RUN" = false ]; then
      mv "$source_file" "$dest_dir/"
    fi
    ((FILES_MOVED++))
  else
    # This file might have been moved already or doesn't exist. Silently skip.
    ((FILES_SKIPPED++))
  fi
}

# --- Main Script ---

echo "Step 1: Creating directory structure..."
# The -p flag ensures no error is thrown if directories already exist.
mkdir -p "01_Anatomy_and_Physiology"
mkdir -p "02_General_Disorders_and_Pathology"
mkdir -p "03_Asthma"
mkdir -p "04_Pneumonia"
mkdir -p "05_Other_Specific_Conditions"
mkdir -p "06_Clinical_Management_and_Nursing"
mkdir -p "07_Related_Cardiopulmonary_Topics"
echo "Directory structure is ready."
echo

echo "Step 2: Moving files..."

# 01_Anatomy_and_Physiology
move_file "dphysiologyofrespiration-160713130453.pdf" "01_Anatomy_and_Physiology"
move_file "RESPIRATORY SYSTEM.docx" "01_Anatomy_and_Physiology"
move_file "notes/RESPIRATORY SYSTEM.docx" "01_Anatomy_and_Physiology"
move_file "Rs physiology.pptx" "01_Anatomy_and_Physiology"

# 02_General_Disorders_and_Pathology
move_file "notes/PULMONARY CONDITIONS.docx" "02_General_Disorders_and_Pathology"
move_file "respiratory disorders.pptx" "02_General_Disorders_and_Pathology"
move_file "RESPIRATORY SYSTEM PATHOLOGY.docx" "02_General_Disorders_and_Pathology"
move_file "YEAR 1 SEM II  respiratory diseases.docx" "02_General_Disorders_and_Pathology" # Corrected with double space

# 03_Asthma
move_file "ASTHMA IN CHILDREN.ppt" "03_Asthma"
move_file "STATUS ASTMATICUS.docx" "03_Asthma"

# 04_Pneumonia
move_file "Bronchopneumonia- SIAYA KMTC.pptx" "04_Pneumonia"
move_file "case study of pneumonia-1.docx" "04_Pneumonia"
move_file "Pneumonia.pptx" "04_Pneumonia"

# 05_Other_Specific_Conditions
move_file "4. Pulmonary Arterial Hypertension and Interstitial Lung Diseases.pdf" "05_Other_Specific_Conditions"
move_file "Acute bronchitis.ppt" "05_Other_Specific_Conditions"
move_file "ATELECTASIS.pptx" "05_Other_Specific_Conditions"

# 06_Clinical_Management_and_Nursing
move_file "07-Cough-1.doc" "06_Clinical_Management_and_Nursing"
move_file "notes/12-Respiratory-distress_May-2017.pdf" "06_Clinical_Management_and_Nursing"
move_file "13 Respiratory distress_16-Sep-09.ppt" "06_Clinical_Management_and_Nursing"
move_file "PULMONARY NURSING(10HRS)-1.pdf" "06_Clinical_Management_and_Nursing"
move_file "PULMONARY NURSING cat.docx" "06_Clinical_Management_and_Nursing"
move_file "pulmonary nursing.pdf" "06_Clinical_Management_and_Nursing"
move_file "Pulmonary Nursing phoghisio.pptx" "06_Clinical_Management_and_Nursing"
move_file "notes/Pulmonary Nursing phoghisio.pptx" "06_Clinical_Management_and_Nursing"
move_file "Pulmonary Nursing.pptx" "06_Clinical_Management_and_Nursing"

# 07_Related_Cardiopulmonary_Topics
move_file "notes/cardiopulmonaryresuscitationppt-130317014608-phpapp02.pdf" "07_Related_Cardiopulmonary_Topics"
move_file "notes/Congenital Heart Disease.pdf" "07_Related_Cardiopulmonary_Topics"
echo "File moving process finished."
echo

echo "Step 3: Cleaning up..."
if [ -d "notes" ]; then
  # Check if the directory is empty or contains only hidden files
  if [ -z "$(ls -A notes)" ]; then
    echo "Removing empty 'notes' directory."
    if [ "$DRY_RUN" = false ]; then
      rmdir notes
    fi
  else
    echo "WARNING: 'notes' directory is not empty (may contain hidden files or unhandled items)."
    echo "It will be removed."
    if [ "$DRY_RUN" = false ]; then
      rm -r notes
    fi
  fi
else
  echo "'notes' directory not found, no cleanup needed."
fi
echo "Cleanup finished."
echo

# --- Final Summary ---
echo "----------------------------------------"
echo "Reorganization Summary:"
echo "  - Files successfully processed (moved or simulated): $FILES_MOVED"
echo "  - Files skipped (already moved or not found): $FILES_SKIPPED"
echo "----------------------------------------"
echo "Operation complete."