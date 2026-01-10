
import os
from pypdf import PdfReader, PdfWriter

def extract_specific_papers(input_pdf_path):
    if not os.path.exists(input_pdf_path):
        print(f"Error: File '{input_pdf_path}' not found.")
        return

    print(f"Processing: {input_pdf_path}...")
    reader = PdfReader(input_pdf_path)

    # -------------------------------------------------------------------------
    # MANUAL PAGE RANGES CONFIGURATION
    # -------------------------------------------------------------------------
    # Format: "Desired_Filename": (Start_Page_Number_In_PDF, End_Page_Number_In_PDF)
    # Note: Use the actual page numbers written on the PDF footer or viewer.
    # The script automatically converts them to 0-based index.
    # -------------------------------------------------------------------------
    
    papers_to_extract = {
        # --- Paper 1 Specifics (Visible in screenshots) ---
        "NCK_Paper_1_July_2014": (3, 8),
        "NCK_Paper_1_Aug_2012": (9, 14),
        "NCK_Paper_1_Aug_2011": (15, 20),
        
        # --- Paper 2 Specifics (Visible in screenshots) ---
        "NCK_Paper_2_April_2018": (97, 103),
        "NCK_Paper_2_Aug_2016": (104, 110),
        "NCK_Paper_2_July_2014": (111, 117),
        "NCK_Paper_2_Aug_2012": (118, 123),
        
        # --- Paper 3 Specifics (Visible in screenshots) ---
        "NCK_Paper_3_July_2014": (208, 213),
        "NCK_Paper_3_Aug_2012": (214, 219),
        
        # --- Paper 4 Specifics (Visible in screenshots) ---
        "NCK_Paper_4_Aug_2016": (268, 274),
        "NCK_Paper_4_July_2014": (275, 280),
        
        # --- Full Sections based on Table of Contents (If you prefer huge bundles) ---
        # Uncomment these lines if you want the full sections instead of specific years
        # "NCK_Paper_1_Full_Bundle": (2, 95),
        # "NCK_Paper_2_Full_Bundle": (96, 206),
        # "NCK_Paper_3_Full_Bundle": (207, 266),
        # "NCK_Paper_4_Full_Bundle": (267, 321),
    }

    # -------------------------------------------------------------------------
    # EXTRACTION LOGIC
    # -------------------------------------------------------------------------
    for filename, (start_pdf_page, end_pdf_page) in papers_to_extract.items():
        writer = PdfWriter()
        
        # Convert PDF numbers to Python Index (Start -1, End is excluded in range so we keep it as is)
        # However, typically "Page 3 to 8" implies we want page 3, 4, 5, 6, 7, 8.
        # Python range(2, 8) would stop at 7. So we must use range(start-1, end).
        
        start_index = start_pdf_page - 1
        end_index = end_pdf_page 

        # Ensure we don't go out of bounds
        if start_index < 0: start_index = 0
        if end_index > len(reader.pages): end_index = len(reader.pages)

        # Add pages
        for i in range(start_index, end_index):
            try:
                writer.add_page(reader.pages[i])
            except IndexError:
                print(f"Skipping page {i+1} (Out of range)")

        # Save File
        output_name = f"{filename}.pdf"
        with open(output_name, "wb") as f:
            writer.write(f)
        
        print(f"Successfully created: {output_name} (Pages {start_pdf_page}-{end_pdf_page})")

if __name__ == "__main__":
    # Ensure this filename matches your PDF exactly
    source_file = "NCK_Revision_Papers_Volume2_2009-2013_with_Answers.pdf"
    extract_specific_papers(source_file)