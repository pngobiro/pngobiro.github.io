import os
from pypdf import PdfReader, PdfWriter

def extract_papers(input_pdf_name):
    # Check if file exists
    if not os.path.exists(input_pdf_name):
        print(f"Error: The file '{input_pdf_name}' was not found in this folder.")
        return

    print(f"Processing: {input_pdf_name}...")
    reader = PdfReader(input_pdf_name)
    total_pages = len(reader.pages)

    # =========================================================================
    # CONFIGURATION: Define Page Ranges Here
    # Format: "Filename_Desired": (Start_Page_Number, End_Page_Number)
    # NOTE: Use the page numbers as seen in your PDF viewer. 
    #       The script handles the conversion to 0-based index automatically.
    # =========================================================================
    
    exam_ranges = {
        # --- 2009 Exams ---
        "NCK_Jan_2009_Paper_1": (2, 5),
        "NCK_Jan_2009_Paper_2": (6, 11),
        "NCK_Jan_2009_Paper_3": (12, 16),
        "NCK_July_2009_Paper_1": (17, 21),
        "NCK_July_2009_Paper_4": (22, 23),
        
        # --- 2010 Exams ---
        "NCK_July_2010_Paper_1": (24, 25),
        
        # --- 2011 Exams ---
        "NCK_Jan_2011_Paper_2": (26, 32),
        "NCK_July_2011_Paper_1": (33, 40), # Estimated end based on next start
        "NCK_July_2011_Paper_3": (41, 45),
        "NCK_July_2011_Paper_4": (46, 50),
        
        # --- 2012 Exams ---
        "NCK_Jan_2012_Paper_3": (51, 60),
        "NCK_Aug_2012_Paper_3": (214, 224), # Based on previous context of Paper 3 area
        
        # --- 2013 Exams ---
        "NCK_Jan_2013_Paper_2": (61, 65),
        "NCK_Jan_2013_Paper_3": (66, 70),
        "NCK_Jan_2013_Paper_4": (71, 76), # Estimated end
        
        # --- Other Sections (Based on Table of Contents if needed) ---
        # Uncomment lines below if you want huge chunks instead of specific years
        # "NCK_Paper_1_All_Years": (2, 95),
        # "NCK_Paper_2_All_Years": (96, 206),
        # "NCK_Paper_3_All_Years": (207, 266),
        # "NCK_Paper_4_All_Years": (267, 321),
    }

    # =========================================================================
    # EXTRACTION LOGIC
    # =========================================================================

    for output_name, (start_page, end_page) in exam_ranges.items():
        # Validate pages
        if start_page > total_pages:
            print(f"Skipping {output_name}: Start page {start_page} is beyond total pages ({total_pages}).")
            continue
        
        writer = PdfWriter()
        
        # Python range is (start, stop), and 0-indexed.
        # We subtract 1 from start_page. We keep end_page as is because python range excludes the last number.
        # Example: Pages 2 to 5. Python index 1 to 5. (1, 2, 3, 4).
        
        start_idx = start_page - 1
        end_idx = end_page
        
        if end_idx > total_pages:
            end_idx = total_pages

        for i in range(start_idx, end_idx):
            writer.add_page(reader.pages[i])

        final_filename = f"{output_name}.pdf"
        
        with open(final_filename, "wb") as f:
            writer.write(f)
        
        print(f"Created: {final_filename} (Pages {start_page}-{end_page})")

if __name__ == "__main__":
    # Ensure this matches your specific file name
    pdf_filename = "NCK_Revision_Papers_Volume2_2009-2013_with_Answers.pdf"
    extract_papers(pdf_filename)