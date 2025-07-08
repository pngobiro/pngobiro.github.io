#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.
# set -x # Uncomment for debugging - prints each command before execution

echo "Starting medical file reorganization..."

# --- Create New Directory Structure ---
echo "Creating new directory structure..."
mkdir -p "00_Archive_Duplicates_and_Unsorted"
mkdir -p "01_Microbiology/01_General_Microbiology_and_Introduction"
mkdir -p "01_Microbiology/02_Bacteriology"
mkdir -p "01_Microbiology/03_Virology"
mkdir -p "01_Microbiology/04_Mycology" # Placeholder
mkdir -p "01_Microbiology/05_Laboratory_and_Diagnostics"
mkdir -p "01_Microbiology/Textbooks_and_Reviews"
mkdir -p "02_Immunology"
mkdir -p "03_Vaccinology_and_Immunization/01_General_Principles_KEPI_ColdChain"
mkdir -p "03_Vaccinology_and_Immunization/02_Target_Diseases_and_Schedules"
mkdir -p "03_Vaccinology_and_Immunization/03_Service_Delivery_and_Administration"
mkdir -p "04_Parasitology/Textbooks"
mkdir -p "04_Parasitology/Lecture_Notes_and_Presentations"
mkdir -p "05_Histopathology"
mkdir -p "06_Exams_Revision_and_Results/Microbiology_Exams"
mkdir -p "06_Exams_Revision_and_Results/Parasitology_Exams"
mkdir -p "06_Exams_Revision_and_Results/General_Revision_MCQs"

# --- Helper function to move files, handling potential overwrites by moving to archive ---
# Usage: move_file "source_path" "destination_path"
move_file() {
    local source_file="$1"
    local dest_path="$2"
    local dest_file_path="$dest_path/$(basename "$source_file")"

    if [ -f "$source_file" ]; then
        if [ -f "$dest_file_path" ]; then
            echo "Destination file $dest_file_path already exists. Moving $source_file to 00_Archive_Duplicates_and_Unsorted/"
            mv "$source_file" "00_Archive_Duplicates_and_Unsorted/"
        else
            echo "Moving $source_file to $dest_path/"
            mv "$source_file" "$dest_path/"
        fi
    else
        echo "Source file $source_file not found. Skipping."
    fi
}


# --- Process files from '01_Introduction_to_Microbiology' ---
echo "Processing files from 01_Introduction_to_Microbiology..."
[ -d "01_Introduction_to_Microbiology" ] && {
    move_file "01_Introduction_to_Microbiology/6-normal_flora.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/ang_12_lect_viruses.pdf" "01_Microbiology/03_Virology/"
    move_file "01_Introduction_to_Microbiology/essential_microbiology.pdf" "01_Microbiology/Textbooks_and_Reviews/"
    move_file "01_Introduction_to_Microbiology/INTRODUCTION to microbiology 1 (2).pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/introduction to Microbio & Micro-org.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/Lecture 2 Microbiology Bacteriology.ppt" "01_Microbiology/02_Bacteriology/"
    move_file "01_Introduction_to_Microbiology/medicalbacteriology.pdf" "01_Microbiology/Textbooks_and_Reviews/" # Could also be 02_Bacteriology
    move_file "01_Introduction_to_Microbiology/Medical Microbiology 2.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/Medical Virology LEC 1.pptx" "01_Microbiology/03_Virology/"
    move_file "01_Introduction_to_Microbiology/microbiology(1)-1-1.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY-1.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY.doc" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/microbiology.docx" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY LECTURE NOTES-1.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY lecture notes(2).pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/Microbiology _Lecture notes.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY NOTE.pdf" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    [ -d "01_Introduction_to_Microbiology/MICROBIOLOGY NOTES" ] && {
        move_file "01_Introduction_to_Microbiology/MICROBIOLOGY NOTES/MICROBIOLOGY NOTE.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/"
        rmdir --ignore-fail-on-non-empty "01_Introduction_to_Microbiology/MICROBIOLOGY NOTES"
    }
    move_file "01_Introduction_to_Microbiology/MICROBIOLOGY NOTES.docx" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/Microbiology.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/"
    move_file "01_Introduction_to_Microbiology/notes-introduction-to-histopathology.pdf" "05_Histopathology/"
    move_file "01_Introduction_to_Microbiology/review-of-medical-microbiology-13e-pdftahir99-vrg-1.pdf" "01_Microbiology/Textbooks_and_Reviews/"
    move_file "01_Introduction_to_Microbiology/SPIROCHETES OF-1.doc" "01_Microbiology/02_Bacteriology/"
    move_file "01_Introduction_to_Microbiology/Staphylococcus aureus.docx" "01_Microbiology/02_Bacteriology/"
}

# --- Process files from '02_Immunology' ---
echo "Processing files from 02_Immunology..."
[ -d "02_Immunology" ] && {
    move_file "02_Immunology/MICRO B AND IMMUNOLOGY DL.pptx" "02_Immunology/" # Could also go to Microbio general
    move_file "02_Immunology/UNIT 5 IMMUNITY.docx" "02_Immunology/"
}

# --- Process files from '03_Vaccinology_and_Immunization' ---
echo "Processing files from 03_Vaccinology_and_Immunization..."
[ -d "03_Vaccinology_and_Immunization" ] && {
    move_file "03_Vaccinology_and_Immunization/Common Immunizable Diseases.pptx" "03_Vaccinology_and_Immunization/02_Target_Diseases_and_Schedules/"
    move_file "03_Vaccinology_and_Immunization/IMMUNIZATION NOTES revised.docx" "03_Vaccinology_and_Immunization/01_General_Principles_KEPI_ColdChain/"
    move_file "03_Vaccinology_and_Immunization/Immunization.pptx" "03_Vaccinology_and_Immunization/01_General_Principles_KEPI_ColdChain/"
    move_file "03_Vaccinology_and_Immunization/Immunization schedules.pptx" "03_Vaccinology_and_Immunization/02_Target_Diseases_and_Schedules/"
    move_file "03_Vaccinology_and_Immunization/YEAR 1 SEM 2 - KEPI & COLD CHAIN.docx" "03_Vaccinology_and_Immunization/01_General_Principles_KEPI_ColdChain/"
}

# --- Process files from '04_Medical_Parasitology' ---
echo "Processing files from 04_Medical_Parasitology..."
[ -d "04_Medical_Parasitology" ] && {
    move_file "04_Medical_Parasitology/MedicalParasitology (1).pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/MedicalParasitology-5.pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/MEDICAL PARASITOLOGY II. CM VOI MR MWACHANYA.docx" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/medicalparasitology.pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/Paniker’s Textbook of Medical Parasitology by CK Jayaram Paniker (z-lib.org).pdf" "04_Parasitology/Textbooks/"
    move_file "04_Medical_Parasitology/Paniker’s Textbook of MEDICAL PARASITOLOGY ( PDFDrive ).pdf" "04_Parasitology/Textbooks/"
    move_file "04_Medical_Parasitology/Parasitology-1-Copy.pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/Parasitology-1.pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/PARASITOLOGY 2.docx" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/PARASITOLOGY.docx" "04_Parasitology/Lecture_Notes_and_Presentations/"
    move_file "04_Medical_Parasitology/Parasitology.pdf" "04_Parasitology/Lecture_Notes_and_Presentations/"
}

# --- Process files from '05_Exams_and_Revision' ---
echo "Processing files from 05_Exams_and_Revision..."
[ -d "05_Exams_and_Revision" ] && {
    move_file "05_Exams_and_Revision/exams self assess.pdf" "06_Exams_Revision_and_Results/General_Revision_MCQs/"
    move_file "05_Exams_and_Revision/MCQs in Microbiology ( PDFDrive.com ).pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/Medical Microbiology 1.1 End semester.xlsx" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/MEDICAL MICROBIOLOGY RESULTS 5th june.pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/MICROBIOLOGY AND IMMUNOLOGY REVISION QUESTIONS-1.docx" "06_Exams_Revision_and_Results/Microbiology_Exams/" # Could also go to Immunology exams if separated
    move_file "05_Exams_and_Revision/MICROBIOLOGY AND IMMUNOLOGY REVISION QUESTIONS.docx" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/microbiology ge self assess.pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/MICROBIOLOGY MEGA CONTEST (MSA) result.pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/MICROBIOLOGY RESULTSS.pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/microbiology self assess.pdf" "06_Exams_Revision_and_Results/Microbiology_Exams/"
    move_file "05_Exams_and_Revision/Parasitology 1.1 End of semester.xlsx" "06_Exams_Revision_and_Results/Parasitology_Exams/"
    move_file "05_Exams_and_Revision/Parasitology end of 1st sem 2021.pdf" "06_Exams_Revision_and_Results/Parasitology_Exams/"
}

# --- Process files from the root directory ---
echo "Processing files from the root directory..."
move_file "./Common Immunizable Diseases.pptx" "03_Vaccinology_and_Immunization/02_Target_Diseases_and_Schedules/"
move_file "./IMMUNIZATION lecture 5 Missed opportunities in immunization.pptx" "03_Vaccinology_and_Immunization/03_Service_Delivery_and_Administration/" # Specific topic
move_file "./KEPI, IMMUNIZATION-1-1-1.pptx" "03_Vaccinology_and_Immunization/01_General_Principles_KEPI_ColdChain/"
move_file "./MICROBIOLOGY-1.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/" # Likely a duplicate, will go to archive if one from subfolder already moved
move_file "./MICROBIOLOGY NOTE.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/" # Likely a duplicate
move_file "./Microbiology.pptx" "01_Microbiology/01_General_Microbiology_and_Introduction/" # Likely a duplicate
move_file "./SPIROCHETES OF-1.doc" "01_Microbiology/02_Bacteriology/" # Likely a duplicate
move_file "./UNIT 3       TARGET DISEASES FOR IMMUNIZATION.docx" "03_Vaccinology_and_Immunization/02_Target_Diseases_and_Schedules/"
move_file "./UNIT 5 IMMUNITY.docx" "02_Immunology/" # Likely a duplicate
move_file "./UNIT_6_IMMUNIZATION_SERVICE_DELIVERY_AND_VACCINE_ADMINISTERATION.docx" "03_Vaccinology_and_Immunization/03_Service_Delivery_and_Administration/"

# --- Clean up old, now likely empty, top-level directories ---
# It's safer to rename them for manual inspection and deletion later.
echo "Renaming old directories for review..."
OLD_DIRS=(
"01_Introduction_to_Microbiology"
"02_Immunology"
"03_Vaccinology_and_Immunization"
"04_Medical_Parasitology"
"05_Exams_and_Revision"
)

for old_dir in "${OLD_DIRS[@]}"; do
    if [ -d "$old_dir" ]; then
        # Check if directory is empty (ignoring .DS_Store or other hidden files if any)
        if [ -z "$(ls -A "$old_dir")" ]; then
            echo "Removing empty old directory: $old_dir"
            rmdir "$old_dir"
        else
            echo "Renaming non-empty old directory $old_dir to OLD_$old_dir for manual review."
            # Check if OLD_dir already exists (e.g. from previous partial run)
            if [ -d "OLD_$old_dir" ]; then
                echo "Warning: OLD_$old_dir already exists. Not renaming $old_dir."
            else
                mv "$old_dir" "OLD_$old_dir"
            fi
        fi
    fi
done

echo "Reorganization complete."
echo "Please review '00_Archive_Duplicates_and_Unsorted/' for any files that need manual placement."
echo "Old directories, if not empty, have been renamed with an 'OLD_' prefix for your review before deletion."
echo "Final structure:"
tree -a # Show the new structure