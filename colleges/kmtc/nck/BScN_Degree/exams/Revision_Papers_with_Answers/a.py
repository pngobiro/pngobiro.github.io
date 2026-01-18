import os
from pypdf import PdfReader, PdfWriter

# ==========================================
# CONFIGURATION: DEFINE PAGE RANGES HERE
# Format: (Start_Page_Number, "Desired_Filename.pdf")
# Note: Use the Page Number shown in your PDF viewer (1-based), not 0-based.
# The script assumes a paper ends the page before the next one begins.
# ==========================================

PAPERS_CONFIG = [
    (2,  "2009-JANUARY-PAPER1.pdf"),
    (6,  "2009-JANUARY-PAPER2.pdf"),
    (12, "2009-JANUARY-PAPER3.pdf"),
    
    # Note: Papers between pg 16 and 17 seem missing in the sample, 
    # jumping straight to July 2009.
    (17, "2009-JULY-PAPER1.pdf"),
    (22, "2009-JULY-PAPER4.pdf"),
    
    (24, "2010-JULY-PAPER1.pdf"),
    
    (26, "2011-JANUARY-PAPER2.pdf"),
    
    (33, "2011-JULY-PAPER1.pdf"),
    (37, "2011-JULY-PAPER2.pdf"), # Note: Header starts mid-page
    (41, "2011-JULY-PAPER3.pdf"), # Note: Header starts mid-page
    (46, "2011-JULY-PAPER4.pdf"),
    
    (51, "2012-JANUARY-PAPER3.pdf"),
    
    (56, "2013-JANUARY-PAPER1.pdf"),
    (61, "2013-JANUARY-PAPER2.pdf"),
    (66, "2013-JANUARY-PAPER3.pdf"),
    (71, "2013-JANUARY-PAPER4.pdf"),
    
    (77, "2007-JULY_AUG-PAPER1.pdf"),
    (82, "2007-JULY_AUG-PAPER3.pdf"),
]

def split_pdf_by_ranges(input_filename):
    if not os.path.exists(input_filename):
        print(f"Error: File '{input_filename}' not found.")
        return

    # Sort config just in case they are out of order
    sorted_config = sorted(PAPERS_CONFIG, key=lambda x: x[0])
    
    reader = PdfReader(input_filename)
    total_pages = len(reader.pages)
    
    print(f"Processing '{input_filename}' ({total_pages} pages)...")
    print("-" * 40)

    for i, (start_page_num, output_filename) in enumerate(sorted_config):
        # Determine the end page
        if i < len(sorted_config) - 1:
            # End page is the page before the next paper starts
            # If the next paper starts on page 6, this one ends on page 5.
            # If they share a page (e.g. starts mid-page), we technically duplicate the page
            # or you can adjust logic to 'next_start_page_num' to include overlap.
            # Here we assume non-overlapping simple split:
            end_page_num = sorted_config[i + 1][0] - 1
            
            # Special handling for papers starting on the same page (mid-page headers)
            # If Start Page of Next Paper == Start Page of This Paper, we have an issue.
            # Assuming standard flow here.
            if end_page_num < start_page_num:
                 # This happens if specific papers share a page (e.g., P1 ends on 37, P2 starts on 37).
                 # We force the end page to be at least the start page to capture the content.
                 end_page_num = start_page_num
        else:
            # This is the last paper, go to the end of the file
            end_page_num = total_pages

        # Convert 1-based human numbers to 0-based Python index
        start_idx = start_page_num - 1
        end_idx = end_page_num      # Slice in Python excludes the end, so this works out to include end_page_num

        # Safety Check
        if start_idx >= total_pages:
            print(f"Skipping {output_filename}: Start page {start_page_num} exceeds PDF length.")
            continue

        writer = PdfWriter()
        
        # Add pages
        # We assume the user wants the shared page (e.g. pg 37) to appear in the NEW paper.
        # If you want it in the OLD paper, adjust the logic above.
        for p in range(start_idx, min(end_idx, total_pages)):
            writer.add_page(reader.pages[p])

        with open(output_filename, "wb") as f:
            writer.write(f)

        print(f"Created: {output_filename:<30} (Pages {start_page_num} to {end_page_num})")

if __name__ == "__main__":
    # Ensure this matches your exact filename
    filename = "NCK_Complete_Papers_2006-2013.pdf"
    split_pdf_by_ranges(filename)