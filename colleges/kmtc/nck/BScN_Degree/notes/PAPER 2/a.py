import os
from PyPDF2 import PdfReader, PdfWriter

def split_pdf_by_units(input_path, output_folder="Splitted_Units"):
    """
    Splits a PDF into units based on the provided Table of Contents page numbers.
    """
    
    # Check if file exists
    if not os.path.exists(input_path):
        print(f"Error: The file '{input_path}' was not found.")
        return

    try:
        reader = PdfReader(input_path)
        total_pages = len(reader.pages)
        print(f"Opened PDF: {input_path} ({total_pages} pages)")

        # Create output directory if it doesn't exist
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        # Definition of Units based on the Table of Contents (Page 2)
        # Structure: "Filename": [Start_Page, End_Page]
        # Note: These are the physical page numbers printed on the document.
        # Logic assumes the next unit starts immediately after the previous one ends.
        units = {
            "00_Front_Matter_and_TOC": [1, 2],
            "01_Unit_One_Intro_Reproductive_Health": [3, 34],
            "02_Unit_Two_Part_One_Pregnancy": [35, 58],
            "03_Unit_Two_Part_Two_Pregnancy": [59, 93],
            "04_Unit_Three_Part_One_Labour_Puerperium": [94, 152],
            "05_Unit_Three_Part_Two_Abnormal_Labour": [153, 212],
            "06_Unit_Four_Contraceptive_Technology": [213, 234],
            "07_Unit_Five_Gynaecology": [235, 280],
            "08_Unit_Six_STIs_and_HIV_AIDS": [281, 317]
        }

        for name, page_range in units.items():
            start_page = page_range[0]
            end_page = page_range[1]
            
            writer = PdfWriter()

            # PyPDF2 uses 0-based indexing. 
            # Example: Physical page 3 is index 2.
            # Range in python is exclusive at the end, so we use end_page directly.
            # (e.g., to get pages 1-2, we need indices 0 and 1, so range(0, 2))
            
            start_index = start_page - 1
            end_index = end_page
            
            # Safety check to ensure we don't go out of bounds
            if start_index >= total_pages:
                print(f"Skipping {name}: Start page {start_page} exceeds PDF length.")
                continue
                
            if end_index > total_pages:
                end_index = total_pages

            # Add pages to the writer
            for i in range(start_index, end_index):
                writer.add_page(reader.pages[i])

            # Save the new PDF
            output_filename = os.path.join(output_folder, f"{name}.pdf")
            with open(output_filename, "wb") as out_file:
                writer.write(out_file)
            
            print(f"Created: {output_filename} (Pages {start_page}-{end_index})")

        print("\nSplitting complete! Check the folder:", output_folder)

    except Exception as e:
        print(f"An error occurred: {e}")

# ==========================================
# CONFIGURATION
# ==========================================
# REPLACE 'your_file_name.pdf' with BScN_Paper2.pdfthe actual name of your PDF file
input_pdf_name = "BScN_Paper2.pdf" 

if __name__ == "__main__":
    split_pdf_by_units(input_pdf_name)