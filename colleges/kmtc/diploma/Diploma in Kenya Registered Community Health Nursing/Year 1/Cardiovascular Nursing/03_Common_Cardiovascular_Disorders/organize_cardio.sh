#!/bin/bash

# Script to organize cardiology files into a structured directory tree.
# Run this script in the same directory where all the files are located.
# It uses 'mkdir -p' to avoid errors if directories already exist,
# and 'mv -v' to show which files are being moved.

echo "--- Starting Cardiology File Organization ---"

# 1. Create the directory structure
echo ""
echo "Step 1: Creating target directories..."
mkdir -p "01_General_Cardiovascular_Disorders"
mkdir -p "02_Hypertension"
mkdir -p "03_Ischemic_Heart_Disease"
mkdir -p "04_Heart_Failure"
mkdir -p "05_Inflammatory_and_Infectious_Conditions"
mkdir -p "06_Cardiomyopathies"
mkdir -p "07_Vascular_and_Hemodynamic_Disorders"
echo "Directories created successfully."

# 2. Move files into their respective directories
echo ""
echo "Step 2: Moving files..."

# === 01_General_Cardiovascular_Disorders ===
mv -v "CARDIOVASCULAR CONDITIONS - SEPT 2021 FINAL-1.pdf.link" "01_General_Cardiovascular_Disorders/"
mv -v "Cardiovascular diseases-David-1(0).docx" "01_General_Cardiovascular_Disorders/"
mv -v "CARDIOVASCULAR DISORDERS (G. G.)-1-1-1.docx" "01_General_Cardiovascular_Disorders/"
mv -v "CARDIOVASCULAR DISORDERS (G. G.)-1-1.docx" "01_General_Cardiovascular_Disorders/"
mv -v "CARDIOVASCULAR NOTES.doc" "01_General_Cardiovascular_Disorders/"

# === 02_Hypertension ===
mv -v "2014-JNC-8-Hypertension.pdf.link" "02_Hypertension/"
mv -v "5. hypertension management_.pdf.link" "02_Hypertension/"
mv -v "5b. HYPERTENSION.doc" "02_Hypertension/"
mv -v "HYPERTENSION-2.ppt" "02_Hypertension/"

# === 03_Ischemic_Heart_Disease ===
mv -v "Angina pectoris.pptx" "03_Ischemic_Heart_Disease/"
mv -v "ISCHAEMIC HEART DISEASE.pptx" "03_Ischemic_Heart_Disease/"

# === 04_Heart_Failure ===
mv -v "CONGESTIVE CARDIAL FAILURE.doc" "04_Heart_Failure/"
mv -v "HEART FAILURE.pptx" "04_Heart_Failure/"
mv -v "Lect. 2 HEART FAILURE-1.pdf.link" "04_Heart_Failure/"
mv -v "Lect. 2 HEART FAILURE.pdf.link" "04_Heart_Failure/"

# === 05_Inflammatory_and_Infectious_Conditions ===
mv -v "4. INFECTIVE ENDOCARDITIS BY PROF JOSHI.pdf.link" "05_Inflammatory_and_Infectious_Conditions/"
mv -v "6. HEART DISORDERS. R FEVER AND RHD.pptx" "05_Inflammatory_and_Infectious_Conditions/"
mv -v "Lect. 5 Myocarditis & Pericarditis-1.pdf.link" "05_Inflammatory_and_Infectious_Conditions/"
mv -v "Lect. 6 Infective Endocarditis.pdf.link" "05_Inflammatory_and_Infectious_Conditions/"

# === 06_Cardiomyopathies ===
mv -v "9. CARDIOMYOPATHIES.pdf.link" "06_Cardiomyopathies/"
mv -v "Lect. 7 Cardiomyopathies.pdf.link" "06_Cardiomyopathies/"

# === 07_Vascular_and_Hemodynamic_Disorders ===
mv -v "SHOCK.pdf.link" "07_Vascular_and_Hemodynamic_Disorders/"
mv -v "SHOCK1.ppt" "07_Vascular_and_Hemodynamic_Disorders/"
mv -v "THROMBOPHLEBITIS.pptx" "07_Vascular_and_Hemodynamic_Disorders/"

echo ""
echo "--- Organization complete. ---"