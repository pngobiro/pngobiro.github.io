# AI-Optimized Studocu Scraper Workflow Guide

This guide documents the steps to effectively use the AI-enhanced Studocu scraper for finding, prioritizing, and organizing educational documents.

## Prerequisites

1.  **Environment**: Ensure you are in the project directory and the virtual environment is active.
    ```bash
    source venv/bin/activate
    ```
2.  **API Key**: Verify your Google Gemini API key is set in `.env`.

## Step 1: Generate Smart Search Queries

Use the AI optimizer to generate shorter, keyword-focused queries that yield better results than long natural language sentences.

**Command:**
```bash
./venv/bin/python3 ai_query_optimizer.py --action variations --query "Your Base Topic Here"
```

**Example:**
```bash
./venv/bin/python3 ai_query_optimizer.py --action variations --query "Clinical Medicine Surgery Year 2"
```

**Output:**
The tool will list 5-7 optimized queries. Pick the best one (e.g., "Clinical Medicine Surgery KMTC").

## Step 2: Configure the Scraper

Update `config.py` with your chosen smart query.

1.  Open `config.py`.
2.  Set `SEARCH_QUERY` to your optimized query string.
    ```python
    SEARCH_QUERY = "Clinical Medicine Surgery KMTC"
    ```
3.  (Optional) Set `MAX_PAGES` if you want to limit the scrape depth (e.g., for testing).

## Step 3: Run the Scraper

Execute the scraper to fetch document metadata based on your smart query. The scraper will handle pagination and save results incrementally.

**Command:**
```bash
./venv/bin/python3 selenium_studocu_scraper.py
```

**Outputs:**
*   `studocu_[query_name]_documents.json`: Full metadata of found documents.
*   `studocu_[query_name]_documents.csv`: CSV version for spreadsheet use.

## Step 4: Prioritize Results with AI

Use the AI to analyze the scraped list and identify the most valuable documents based on **Relevance (Rank)**, **Rating**, and **Title**.

**Command:**
```bash
./venv/bin/python3 ai_query_optimizer.py --action prioritize --json-file <your_scraped_file.json> --priority high
```

**Example:**
```bash
./venv/bin/python3 ai_query_optimizer.py --action prioritize --json-file studocu_clinical_medicine_surgery_kmtc_documents.json --priority high
```

**Output:**
*   Displays top recommended documents in the terminal.
*   Saves a new file: `..._prioritized_high.json` containing the curated list.

## Step 5: Clean Titles and Metadata (New!)

Use AI to clean up messy scraped titles (e.g., removing extensions, fixing capitalization) and add subject tags.

**Command:**
```bash
./venv/bin/python3 ai_query_optimizer.py --action enhance --json-file <your_scraped_file.json>
```

**Output:**
*   Saves a new file `..._enhanced.json` with `enhanced_title` and `subject_tag` fields.

## Step 6: Download Documents (Manual)

Due to platform restrictions, you must manually download the documents identified in Step 4. Save them to the `downloads/` folder. The filename *must* start with the document ID (e.g., `12345_original_name.pdf`) so the system can track it.

## Step 7: Verify and Organize Downloads (New!)

Once downloaded, verify which files you have and rename them using the clean titles from Step 5.

**Verify Downloads:**
```bash
./venv/bin/python3 check_downloads.py --json-file <your_scraped_file.json>
```

**Rename Files (Organize):**
```bash
./venv/bin/python3 organize_downloads.py --json-file <your_enhanced_file.json> --downloads-dir ./downloads
```

**Effect:**
Renames `12345.pdf` -> `12345 - Anatomy Final Exam.pdf`.
This keeps the ID for deduplication but gives you a readable filename.
