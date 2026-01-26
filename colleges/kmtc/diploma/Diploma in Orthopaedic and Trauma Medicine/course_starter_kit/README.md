# Exam Manager AI Agent

This tool helps manage the lifecycle of exam papers across multiple subjects in your course. It automates tracking, discovery, and reporting.

## Features

- **Dashboard**: See a global view of all subjects and the status of their past papers (Total, Unprocessed, HTML Generated).
- **Auto-Discovery**: Recursively scans all subject folders for new PDF files in `UNPROCESSED` directories and adds them to the tracking system.
- **Distributed Tracking**: Uses `processing-status.json` in each subject's `pastpapers` folder to maintain state.

## Usage

Run the script from the root of your course directory:

### 1. View Dashboard
See the current status of all your subjects.
```bash
./exam_manager.py dashboard
```

### 2. Scan for New Files
Find new PDFs that you've dropped into `UNPROCESSED` folders and register them in the system.
```bash
./exam_manager.py scan
```
You can also scan a specific subject:
```bash
./exam_manager.py scan --subject "Computer Application in Health Care"
```

### 3. List Subjects
List all detected subject folders.
```bash
./exam_manager.py list
```

## Structure Management

I have incorporated the tools from `educational_pastpapers2.0.zip` to standardise your folder structure and generate HTML navigation.

### 1. Create/Reset Structure
To generate the standard folder hierarchy (Colleges -> Subjects -> Categories) and initial HTML indexes:
```bash
./exams-manager/create_structure.sh
```
This reads from `exams-manager/structure_config.sh` to determine which subjects and categories to create.

### 2. Update Indexes
After adding new HTML papers to a category folder, run this to update the navigation menus and lists:
```bash
./exams-manager/update_index.sh
```
You can also update a specific college or subject:
```bash
./exams-manager/update_index.sh "Year 1" "Computer Application in Health Care"
```

### 4. Split PDF Files
If you have large PDF files or files with mixed content (e.g., multiple subjects in one file), you can split them into smaller parts.
```bash
./exam_manager.py split --file "path/to/large_file.pdf" --out "path/to/output_part1.pdf" --pages "1-10"
```
You can specify multiple ranges:
```bash
./exam_manager.py split --file "exam_bundle.pdf" --out "subject_a.pdf" --pages "1-5, 10-15"
```

## Directory Structure


The tool expects the following structure:
```
Subject Name/
├── notes/
└── pastpapers/
    ├── processing-status.json  (Auto-created/managed)
    ├── UNPROCESSED/           (Drop new PDFs here)
    └── FQE/                   (Processed files go here)
```

## Tracking Statuses
- `unprocessed`: New file detected.
- `mmd_generated`: OCR conversion complete (handled by other scripts).
- `html_generated`: Final HTML ready.
