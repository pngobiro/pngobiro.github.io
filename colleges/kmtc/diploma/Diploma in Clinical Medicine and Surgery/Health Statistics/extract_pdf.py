import os
from pypdf import PdfReader, PdfWriter

# ==============================================================================
# CONFIGURATION SECTION
# ==============================================================================

# 1. Source File: The exact name of your PDF file.
SOURCE_FILENAME = "Final Qualifying Exam Paper_ Health Statistics (DHRIT 2021).pdf"

# 2. Output Folder: Where the separated files will be saved.
OUTPUT_FOLDER = "KMTC_Split_Papers"

# 3. The Data: Filenames and their 1-based page ranges.
#    I have extracted these ranges based on the dates visible in your screenshots.
#    Note: Page 1 was a Studocu cover page, so I skipped it.
PDF_SPLIT_MAP = {
    # Exam Date: 15th February 2021 (Pages 2 to 10)
    "KMTC_Health_Stats_Feb_2021": [2, 10],

    # Exam Date: 12th July 2021 (Pages 11 to 19)
    "KMTC_Health_Stats_July_2021": [11, 19],

    # Exam Date: 27th September 2021 (Pages 20 to 28)
    "KMTC_Health_Stats_Sep_2021": [20, 28],

    # Exam Date: 14th February 2022 (Pages 29 to 34)
    "KMTC_Health_Stats_Feb_2022": [29, 34],

    # Exam Date: 10th February 2020 (Pages 35 to 43)
    "KMTC_Health_Stats_Feb_2020": [35, 43],

    # Exam Date: 6th June 2022 (Pages 44 to 51)
    "KMTC_Health_Stats_June_2022": [44, 51],
}

# ==============================================================================
# END OF CONFIGURATION
# ==============================================================================

def split_pdf_documents():
    # Check if source file exists
    if not os.path.exists(SOURCE_FILENAME):
        print(f"❌ Error: The file '{SOURCE_FILENAME}' was not found.")
        print("   Make sure the PDF is in the same folder as this script.")
        return

    try:
        # Create output folder
        if not os.path.exists(OUTPUT_FOLDER):
            os.makedirs(OUTPUT_FOLDER)
            print(f"📂 Created output folder: '{OUTPUT_FOLDER}'")

        # Read the PDF
        reader = PdfReader(SOURCE_FILENAME)
        total_pages = len(reader.pages)
        print(f"📖 Opened '{SOURCE_FILENAME}' (Total Pages: {total_pages})")
        print("-" * 60)

        # Loop through the map and extract files
        for filename, (start_page, end_page) in PDF_SPLIT_MAP.items():
            
            # Validate page numbers
            if start_page < 1 or end_page > total_pages:
                print(f"⚠️  Skipping '{filename}': Page range {start_page}-{end_page} is out of bounds.")
                continue

            writer = PdfWriter()

            # Convert 1-based user input to Python's 0-based indexing
            # range(start, end) in Python stops before 'end', so we use end_page as the limit
            start_index = start_page - 1
            end_index = end_page 

            # Add pages to the new writer
            for i in range(start_index, end_index):
                writer.add_page(reader.pages[i])

            # Save the new PDF
            output_filename = f"{filename}.pdf"
            output_path = os.path.join(OUTPUT_FOLDER, output_filename)

            with open(output_path, "wb") as f:
                writer.write(f)

            print(f"✅ Extracted: {output_filename:<35} (Pages {start_page}-{end_page})")

        print("-" * 60)
        print(f"🎉 Process Complete! Check the '{OUTPUT_FOLDER}' folder.")

    except Exception as e:
        print(f"❌ An error occurred: {e}")

if __name__ == "__main__":
    split_pdf_documents()