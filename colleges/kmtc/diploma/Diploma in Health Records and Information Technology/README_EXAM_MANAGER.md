# Exam Manager AI Agent

This tool manages the lifecycle of exam papers across multiple subjects and colleges. It automates tracking, OCR processing, and reporting in a subject-centric structure.

## New Structure

The tool expects (and `organize_subjects.py` creates) the following structure:
```
Subject Name/
├── notes/
├── books/
└── exams/
    ├── assets/               (Shared CSS/JS)
    ├── KMTC/                 (College specific folder)
    │   ├── processing-status.json
    │   ├── UNPROCESSED/      (Drop new PDFs here)
    │   └── [Category]/       (FQE, CATs, etc.)
    └── [Other Colleges]/
```

## Features

- **Unified Dashboard**: See a global view of all subjects and their status across all colleges (KMTC, MKU, etc.).
- **Auto-Discovery**: Recursively scans `UNPROCESSED` folders for new PDF files.
- **OCR Processing**: Integrated Mathpix OCR conversion from PDF to MMD.
- **Subject Validation**: Cross-references folder names with `modules.txt` using fuzzy matching to flag missing folders.

## Usage

Run the script from the root directory:

### 1. Unified Dashboard
View status of all subjects and processing queues.
```bash
./exam_manager.py dashboard
```

### 2. File Discovery & Scanning
Finds new PDFs in `UNPROCESSED` folders and registers them.
```bash
./exam_manager.py scan
# Optional: Target specific college
./exam_manager.py scan --college MKU
```

### 3. Web Navigation Generation (Dashboard)
Generates the static HTML structure (Root, Subject, and Category indices).
**Note:** Use `--force` to regenerate existing index files.
```bash
./exam_manager.py index
# Regen all indices
./exam_manager.py index --force
```

### 4. General Paper Extraction
Splits merged MMD files into individual question papers.
```bash
# Extract specific file
./exam_manager.py extract "Subject/exams/KMTC/UNPROCESSED/merged_file.mmd"
```

### 5. Content Analysis
Analyzes a PDF to determine if it's "digital born" (text-selectable) or "scanned" (image-based).
```bash
./exam_manager.py analyze "path/to/paper.pdf"
```

### 6. Course Packing
Creates a starter kit zip file for a specific subject, including folder structure and initial assets.
```bash
./exam_manager.py pack "Subject Name"
```

### 7. Asset Path Fixing
Fixes relative paths in HTML files to correctly point to the shared `assets/` directory.
```bash
./exam_manager.py fix-paths
```

### 8. Image Downloading
Downloads remote images (e.g., from Mathpix) to local storage.
```bash
./exam_manager.py download-images
```

### 9. PDF Splitting (Utility)
Splits a large PDF into smaller parts.
```bash
./exam_manager.py split --file "bundle.pdf" --out "part.pdf" --pages "1-5"
```

## Adding a New College

Adding a new college (e.g., "MKU" or "UoN") is fully supported and requires no code changes.

1.  **Create the Folder**:
    Navigate to the subject's `exams/` directory and create a folder with the college name.
    ```bash
    mkdir -p "Epidemiology/exams/MKU"
    ```

2.  **Add Content**:
    Create category folders (e.g., `FQE`, `CATs`) inside the college folder and add your papers.
    ```bash
    mkdir -p "Epidemiology/exams/MKU/FQE"
    # Copy your PDF/HTML files here
    ```

3.  **Regenerate Index**:
    Run the index command to automatically detect the new college and generate its dashboard.
    ```bash
    ./exam_manager.py index --force
    ```

    The tool will:
    - Detect the new `MKU` folder.
    - Add an "MKU" button to the Subject Dashboard.
    - Generate a dedicated dashboard for MKU.

## Using in a New Course

The Exam Manager is fully portable and can be used for any other diploma or degree course.

1.  **Copy the Tool**:
    Copy `exam_manager.py` to the root folder of the new course (e.g., `Diploma in Nursing/`).

2.  **Define Subjects**:
    Create a `modules.txt` file in the same folder and list the subjects for that course (one per line).
    ```text
    Anatomy and Physiology
    Nursing Ethics
    Pharmacology
    ...
    ```

3.  **Initialize**:
    Run the index command.
    ```bash
    ./exam_manager.py index --force
    ```

    The tool will automatically:
    - Read the new subject list.
    - Create the standard folder structure (`Subject/exams/KMTC/...`) for all subjects.
    - Generate the dashboards.

## Handling Images

If your converted HTML files contain remote images (e.g., from Mathpix or other URLs), you can automatically download and link them locally.

1.  **Download Remote Images**:
    This command scans all HTML files, finds `img src` tags with remote URLs, downloads the images to an `assets/images/` folder, and updates the HTML to point to the local file.
    ```bash
    ./exam_manager.py download-images
    ```

2.  **Fix Relative Paths**:
    After moving files or downloading images, ensure all paths are correct.
    ```bash
    ./exam_manager.py fix-paths
    ```

    This combination ensures your exam papers work offline and all diagrams/charts are preserved.

## Tracking Statuses
- `unprocessed`: New file detected.
- `mmd_generated`: OCR conversion complete.
- `html_generated`: Final HTML ready (handled by other scripts).
