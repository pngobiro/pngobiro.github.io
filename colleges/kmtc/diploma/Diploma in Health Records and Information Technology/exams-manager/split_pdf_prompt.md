Role:
Act as a Senior Python Developer specializing in PDF document processing and automation.

Task:
Write a robust Python script using the pypdf library to split a single source PDF ([INSERT_FILENAME]) containing multiple different examination papers into separate PDF files.

Naming Convention:
The output filenames must follow this specific format:
Subject_Month_Year.pdf
(Example: Epidemiology_July_2021.pdf)

Process Requirements:

    Analysis: The script should allow me to define specific page ranges (or specific lists of page indices) for each exam found within the source file.

    Extraction: It must extract those pages and save them as new, individual PDF files.

    Validation: The script must check if the source file exists before running and print a summary of the files created.

Edge Case Scenarios & Logic Handling:
The script must be capable of handling the following complex scenarios often found in scanned exam bundles:

    Scenario A: Standard Sequential Ranges:

        Context: The pages are in perfect order (e.g., Pages 1-5 is Exam A, Pages 6-10 is Exam B).

        Requirement: The script should accept simple start/end tuples.

    Scenario B: Scrambled / Out-of-Order Pages:

        Context: The scanning process was disordered. For example, Exam A's cover is on Page 1, but Page 2 of the exam is actually on Page 40 of the PDF, and Page 3 is on Page 12.

        Requirement: The script must allow me to pass a specific list of page indices (e.g., [0, 39, 11]) to reorder the pages correctly in the final output file.

    Scenario C: Overlapping or Duplicate Pages:

        Context: A single page in the source PDF might be needed for two different files (e.g., a shared data sheet), or a page appears twice in the source and needs to be filtered out.

        Requirement: The logic must not "consume" pages; it should allow the same source page index to be used in multiple output files if necessary.

    Scenario D: Garbage/Noise Pages:

        Context: The PDF contains advertisement pages (e.g., "Downloaded from Studocu") or blank divider pages that should be ignored.

        Requirement: The script should only extract the specific pages defined in my list and ignore the rest.

Input Data:
Please write the script using a dictionary structure where I can easily map the Output Filename to the Page Logic.

Example structure to implement:
code Python

papers = {
    "Subject_Month_Year.pdf": [0, 1, 2, 3], # Specific indices for scrambled docs
    "Subject_Month_Year_v2.pdf": (5, 10)     # Simple range tuple for sequential docs
}

Output:
Provide the complete, runnable Python code with comments explaining how to adjust the page numbers for the different scenarios.
