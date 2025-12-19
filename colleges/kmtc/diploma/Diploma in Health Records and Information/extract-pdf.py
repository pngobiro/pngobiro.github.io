import os
from pypdf import PdfReader, PdfWriter

# ==============================================================================
# CONFIGURATION SECTION
# ==============================================================================

# 1. Source File: The exact name of your PDF file.
SOURCE_FILENAME = "Fqe 2023 feb dip-1 - Revision materials for studying.pdf"

# 2. Output Folder: Where the separated files will be saved.
OUTPUT_FOLDER = "KMTC_FQE_Feb_2023_Split"

# 3. The Data: Filenames and their 1-based page ranges.
#    I have excluded the cover page (Pg 1) and blank separator pages 
#    (Pg 9, 19, 27, 35, 51, 57) to keep the documents professional.
PDF_SPLIT_MAP = {
    # Paper 1: Health Systems Management (Jan 24, 2023)
    "Health_Systems_Management": [2, 8],

    # Paper 2: Health Statistics (Jan 23, 2023)
    "Health_Statistics": [10, 18],

    # Paper 3: Community Health (Jan 23, 2023)
    "Community_Health": [20, 26],

    # Paper 4: Health Records Management (Jan 25, 2023)
    "Health_Records_Management": [28, 34],

    # Paper 5: Medical Demography (Jan 25, 2023)
    "Medical_Demography": [36, 43],

    # Paper 6: Epidemiology (Jan 24, 2023)
    "Epidemiology": [44, 50],

    # Paper 7: Database Management Theory (Jan 26, 2023)
    "Database_Management_Theory": [52, 56],

    # Paper 8: Database Management Practical (Dated Jan 26, 2022)
    "Database_Management_Practical": [58, 61],
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