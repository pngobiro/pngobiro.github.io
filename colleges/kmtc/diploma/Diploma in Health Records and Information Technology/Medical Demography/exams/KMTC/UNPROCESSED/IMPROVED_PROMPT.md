# Improved PDF Extraction Prompt

Act as a Python Developer. I have a PDF file named "[INSERT YOUR PDF FILENAME HERE]" (e.g., FQE5_REVISION_PA-1.pdf). This PDF contains multiple different documents merged together. Please write a Python script using the "pypdf" library to split this PDF into separate files.

## Configuration Details

1. **Source File**: "[INSERT YOUR PDF FILENAME HERE]"
2. **Output Folder**: Create a folder named "[INSERT FOLDER NAME HERE]" to store the results.
3. **Page Indexing**: The page ranges I will provide below are "1-based" (what I see in the PDF viewer). Please convert them to Python's 0-based indexing inside the script.

## Metadata Information

The script should handle metadata with the following logic:

- **College/Institution**: User can provide a value. If left blank, auto-extract from PDF filename (e.g., "KU_FQE5.pdf" → "KU"), otherwise use "Unknown"
- **Course Code**: User can provide a value. If left blank, auto-extract from filename (e.g., "FQE5" from "FQE5_REVISION.pdf")
- **Month/Year**: User can optionally specify (e.g., January 2025, December 2024). Leave blank if not applicable.
- **Exam Session**: User can optionally specify (e.g., Main Exam, Supplementary, Revision). Leave blank if not applicable.
- **Subject Area**: User can provide a value. If left blank, auto-infer from document names in the extraction list (e.g., if documents contain "Clinical Engineering", "Electronics", "Mathematics", etc.). If no keywords match, use "General Studies".

## The Data

Create a dictionary in the script containing these filenames and page ranges:

[PASTE YOUR LIST HERE - EXAMPLE FORMAT:]

- "2023_Math_End_Term_Exam": Pages 1 to 5
- "2022_Math_CAT_1": Pages 6 to 10
- "2021_Math_Supplementary": Pages 15 to 20
- "Clinical_Engineering_I_Diagnostic": Pages 1 to 8
- "Clinical_Engineering_II_Therapeutic": Pages 9 to 18

## Requirements for the Code

- Use a `try/except` block to handle errors (like if the source file is missing, permission issues, etc.)
- Automatically create the output folder if it doesn't exist
- Add clear comments explaining where I can edit:
  - The source filename
  - The output folder name
  - The college/institution name (optional - leave blank to auto-detect)
  - The course code (optional - leave blank to auto-detect)
  - The month/year (optional - leave blank if not applicable)
  - The exam session (optional - leave blank if not applicable)
  - The subject area (optional - leave blank to auto-infer)
  - The document names and page ranges
- **Smart metadata handling**:
  - Only infer/auto-detect metadata fields that are left blank by the user
  - Extract college name from PDF filename if user field is blank (e.g., "KU_FQE5.pdf" → "KU"), use "Unknown" if not found
  - Extract course code from filename if user field is blank (e.g., "FQE5" from "FQE5_REVISION.pdf")
  - Infer subject area from document names if user field is blank (look for keywords like "Clinical Engineering", "Mathematics", "Electronics", etc.)
- Display metadata information at the start of execution (showing both user-provided and auto-detected values)
- Print a success message for each file extracted, including the number of pages
- Show a summary at the end with total documents extracted
- Use visual indicators (✓, ❌, ⚠) for better readability
- Validate page ranges and skip documents with out-of-bounds pages
- Handle edge cases gracefully with informative error messages

## How to Fill It Out (Example)

If you had a Chemistry PDF from your college, you would edit the Configuration and Metadata sections like this:

**Metadata Handling Example:**

If you leave college and subject area blank in the configuration:
```
College: "" (blank - will auto-detect from filename)
Course: "CHM301" (user-provided)
Month/Year: "January 2025" (user-provided)
Exam Session: "Main Exam" (user-provided)
Subject Area: "" (blank - will auto-infer from document names)
```

The script will display:
```
College: KU (auto-extracted from "KU_CHM301_REVISION.pdf")
Course: CHM301 (user-provided)
Month/Year: January 2025 (user-provided)
Exam Session: Main Exam (user-provided)
Subject Area: Chemistry (auto-inferred from document names containing "Organic", "Inorganic", "Chemical")
```

**The Data:**
```
- "Clinical_Engineering_I_Diagnostic": Pages 1 to 8
- "Clinical_Engineering_II_Therapeutic": Pages 9 to 18
- "Clinical_Engineering_III_Advanced": Pages 19 to 26
- "Hospital_Systems_Engineering": Pages 27 to 35
- "Electronics_and_Instrumentation": Pages 36 to 45
```

Please provide the complete, ready-to-run code with all the above requirements implemented.