# Analysis of Unprocessed Surgery Past Papers

## Summary
Successfully completed OCR for all PDF files in UNPROCESSED folder.

## KMTC Papers (7 files)

### 1. **Surgery fqe 2015-1 - Questions.pdf** ✅ GOOD QUALITY
- **Type:** FQE Paper I
- **Date:** July 2016 (2015/2016 Academic Year)
- **Session:** July
- **Sections:** 
  - Section A: Short Essay (6 questions)
  - Section B: Long Essay (3 questions, answer 2)
- **Filename:** `2016j-fqe.html` (ALREADY CREATED)
- **Status:** HTML already generated

### 2. **FQE 2016 Surgery Exam: Short Essay Questions and Answers.pdf** ✅ DUPLICATE
- **Type:** FQE Paper I (Same as #1)
- **Status:** Duplicate of 2016j-fqe - SKIP

### 3. **FQE Essay 2012 SURG.pdf** ❌ POOR OCR
- **Type:** FQE (likely)
- **Date:** 2012
- **Status:** OCR quality is very poor, mostly garbled text
- **Action:** Move to NOT_RELEVANT or re-OCR

### 4. **Surgery Paper II MAY 2017.pdf** ✅ GOOD QUALITY
- **Type:** PRE-FQE (6th Semester) Paper II
- **Date:** May 4, 2017
- **Session:** May
- **Sections:**
  - Section A: MCQs (30 questions, 30%)
  - Section B: True/False (30 questions, 30%)
- **Filename:** `2017-pre-fqe-paper2.html` or move to separate PRE-FQE folder
- **Status:** READY TO PROCESS

### 5. **2_PDFsam_FQE Surgery Paper for Diploma in Clinical Medicine - June 2023.pdf** ✅ GOOD QUALITY
- **Type:** FQE
- **Date:** June 2023
- **Session:** June
- **Sections:**
  - Section 1: MCQs (40 marks)
  - Section 2: Short Answer (8 questions, 40 marks)
  - Section 3: Long Answer (1 question, 20 marks)
- **Filename:** `2023j-fqe.html`
- **Status:** READY TO PROCESS

### 6. **FQE 2021 FEB Surgery - Comprehensive Short & Long Answer Questions.pdf** ✅ GOOD QUALITY
- **Type:** FQE
- **Date:** February 24, 2021
- **Session:** February
- **Sections:**
  - Section 1: MCQs (40 marks)
  - Section 2: Short Answer (8 questions, 40 marks)
  - Section 3: Long Answer (1 question, 20 marks)
- **Filename:** `2021f-fqe.html`
- **Status:** READY TO PROCESS

### 7. **FQE For Jun -July 2023 - fqe 2023.pdf** ⚠️ MIXED CONTENT (80K)
- **Type:** MULTIPLE PAPERS IN ONE PDF
- **Contains:**
  - Surgery FQE (June 2023) - Lines 1-256
  - Health Service Management FQE (June 20, 2023) - Lines 257-496
  - Community Health FQE - Lines 497-730
  - Paediatrics and Child Health FQE (June 21, 2023) - Lines 731+
- **Action:** SPLIT into separate files, Surgery part is DUPLICATE of #5
- **Status:** NEEDS SPLITTING - Surgery portion is duplicate

## MKU Papers (8 files)

All MKU papers are from **Mount Kenya University** (different institution):
- **Type:** Surgery V exam for Diploma in Clinical Medicine
- **Date:** July 16, 2025 (FUTURE DATE - likely 2024)
- **Status:** These are from a DIFFERENT UNIVERSITY (MKU, not KMTC)
- **Action:** Move to NOT_RELEVANT folder or create separate MKU folder

## Processing Plan

### Immediate Actions:
1. ✅ Create `2021f-fqe.html` from FQE 2021 FEB
2. ✅ Create `2023j-fqe.html` from 2_PDFsam (June 2023)
3. ⚠️ Decide on PRE-FQE folder for 2017 May paper
4. ❌ Skip FQE 2012 (poor OCR)
5. ❌ Move MKU papers to NOT_RELEVANT

### Files to Generate:
- `FQE/2021f-fqe.html` ✅
- `FQE/2023j-fqe.html` ✅
- `PRE-FQE/2017-paper2.html` or `END_OF_SEMESTER/2017-paper2.html` ⚠️

### Combined Files Created:
- `combined_unprocessed.mmd` (130K) - All KMTC papers
- `combined_mku.mmd` (57K) - All MKU papers
