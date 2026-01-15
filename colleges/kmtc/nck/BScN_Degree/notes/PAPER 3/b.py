import os
from PyPDF2 import PdfReader, PdfWriter

def split_pdf_by_units(input_filename):
    """
    Splits BScN_Paper3.pdf into separate units based on specific page ranges
    derived from the Table of Contents.
    """
    
    # Check if file exists
    if not os.path.exists(input_filename):
        print(f"Error: The file '{input_filename}' was not found in the current directory.")
        return

    # Define the Units and their 1-based page ranges
    # Note: Unit 1 range starts at 1 to include the Title Page and Table of Contents
    units_config = [
        {"name": "Unit_1_Introduction_to_Community_Health", "start": 1, "end": 33},
        {"name": "Unit_2_Primary_Health_Care", "start": 34, "end": 69},
        {"name": "Unit_3_Environmental_Health", "start": 70, "end": 94},
        {"name": "Unit_4_Communicable_Diseases", "start": 95, "end": 153},
        {"name": "Unit_5_Community_Diagnosis", "start": 154, "end": 180},
        {"name": "Unit_6_Special_Health_Issues", "start": 181, "end": 225},
        {"name": "Unit_7_Home_Based_Care", "start": 226, "end": 267}
    ]

    try:
        # Read the source PDF
        reader = PdfReader(input_filename)
        total_pages = len(reader.pages)
        print(f"Processing '{input_filename}' ({total_pages} pages)...")

        for unit in units_config:
            writer = PdfWriter()
            
            # Convert 1-based page numbers to 0-based index for PyPDF2
            # Start index is inclusive, End index is exclusive in Python slicing
            start_index = unit["start"] - 1
            end_index = unit["end"]

            # Safety check to ensure we don't go out of bounds
            if start_index >= total_pages:
                print(f"Skipping {unit['name']}: Start page out of range.")
                continue
            
            if end_index > total_pages:
                end_index = total_pages

            # Add pages to the new PDF writer
            for i in range(start_index, end_index):
                writer.add_page(reader.pages[i])

            # Write the new PDF file
            output_filename = f"{unit['name']}.pdf"
            with open(output_filename, "wb") as out_file:
                writer.write(out_file)
            
            print(f"Created: {output_filename} (Pages {unit['start']}-{unit['end']})")

        print("\nSplitting complete!")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    # The filename as specified
    pdf_filename = "BScN_Paper3.pdf"
    split_pdf_by_units(pdf_filename)