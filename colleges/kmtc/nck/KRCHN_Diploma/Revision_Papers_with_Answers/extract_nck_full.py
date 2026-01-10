
import os
from pypdf import PdfReader, PdfWriter

def extract_papers(input_pdf):
    if not os.path.exists(input_pdf):
        print(f"Error: File '{input_pdf}' not found.")
        return

    print(f"Reading: {input_pdf}...")
    reader = PdfReader(input_pdf)
    total_pages = len(reader.pages)

    # Dictionary format: { "Filename_Desired": (Start_Page, End_Page) }
    # NOTE: Use the page numbers as seen in the PDF viewer.
    # The script handles the 0-based index conversion.
    
    exam_ranges = {
        # --- Paper 1 Exams ---
        "NCK_Paper_1_July_2014_Set_A": (3, 8),
        "NCK_Paper_1_Aug_2012": (9, 14),
        "NCK_Paper_1_Aug_2011": (15, 20),
        "NCK_Paper_1_Trial_Exam_Set_1": (21, 26),
        "NCK_Paper_1_Trial_Exam_Set_2": (27, 30),
        "NCK_Paper_1_Trial_Exam_Set_3": (31, 35),
        "NCK_Paper_1_Trial_Exam_Set_4": (36, 39),
        "NCK_Paper_1_Trial_Exam_Set_5": (40, 45),
        "NCK_Paper_1_Trial_Exam_Set_6": (46, 50),
        "NCK_Paper_1_Trial_Exam_Set_7": (51, 54),
        "NCK_Paper_1_Trial_Exam_Set_8": (55, 58),
        "NCK_Paper_1_Trial_Exam_Set_9": (59, 62),
        "NCK_Paper_1_Trial_Exam_Set_10": (63, 66),
        "NCK_Paper_1_Trial_Exam_Set_11": (67, 71),
        "NCK_Paper_1_Trial_Exam_Set_12": (72, 76),
        "NCK_Paper_1_Trial_Exam_Set_13": (77, 81),
        "NCK_Paper_1_Trial_Exam_Set_14": (82, 86),
        "NCK_Paper_1_Trial_Exam_Set_15": (87, 91),
        "NCK_Paper_1_Trial_Exam_Set_16": (92, 95),

        # --- Paper 2 Exams ---
        "NCK_Paper_2_April_2018": (97, 103),
        "NCK_Paper_2_Aug_2016": (104, 110),
        "NCK_Paper_2_Aug_2011": (124, 129), # Based on previous context, usually follows similar pattern
        # Note: Some Paper 2 sections might be missing specific start pages in screenshots provided, 
        # but these cover the clearly visible ones.
        "NCK_Paper_2_Trial_Exam_Set_1": (131, 134),
        "NCK_Paper_2_Trial_Exam_Set_2": (135, 139),
        "NCK_Paper_2_Trial_Exam_Set_3": (140, 144),
        "NCK_Paper_2_Trial_Exam_Set_4": (145, 149),
        "NCK_Paper_2_Trial_Exam_Set_5": (150, 154),
        "NCK_Paper_2_Trial_Exam_Set_6": (155, 159),
        "NCK_Paper_2_Trial_Exam_Set_7": (160, 164),
        "NCK_Paper_2_Trial_Exam_Set_8": (165, 169),
        "NCK_Paper_2_Trial_Exam_Set_9": (170, 173),
        "NCK_Paper_2_Trial_Exam_Set_10": (174, 178),
        "NCK_Paper_2_Trial_Exam_Set_11": (179, 183),
        "NCK_Paper_2_Trial_Exam_Set_12": (184, 188),
        "NCK_Paper_2_Trial_Exam_Set_13": (189, 193),
        "NCK_Paper_2_Trial_Exam_Set_14": (194, 198),
        "NCK_Paper_2_Trial_Exam_Set_15": (199, 202),
        "NCK_Paper_2_Trial_Exam_Set_16": (203, 206),

        # --- Paper 3 Exams ---
        "NCK_Paper_3_July_2014": (208, 213),
        "NCK_Paper_3_Aug_2012": (214, 219),
        "NCK_Paper_3_Aug_2011": (220, 225),
        "NCK_Paper_3_Trial_Exam_Set_1": (226, 230),
        "NCK_Paper_3_Trial_Exam_Set_2": (231, 234),
        "NCK_Paper_3_Trial_Exam_Set_3": (235, 238),
        "NCK_Paper_3_Trial_Exam_Set_4": (239, 242),
        "NCK_Paper_3_Trial_Exam_Set_5": (243, 246),
        "NCK_Paper_3_Trial_Exam_Set_6": (247, 251),
        "NCK_Paper_3_Trial_Exam_Set_7": (252, 255),
        "NCK_Paper_3_Trial_Exam_Set_8": (256, 259),
        "NCK_Paper_3_Trial_Exam_Set_9": (260, 263),
        "NCK_Paper_3_Trial_Exam_Set_10": (264, 266),

        # --- Paper 4 Exams ---
        "NCK_Paper_4_Aug_2016": (268, 274),
        "NCK_Paper_4_July_2014": (275, 280),
        "NCK_Paper_4_Aug_2011": (281, 286),
        "NCK_Paper_4_Trial_Exam_Set_1": (293, 297),
        "NCK_Paper_4_Trial_Exam_Set_2": (298, 301),
        "NCK_Paper_4_Trial_Exam_Set_3": (302, 305),
        "NCK_Paper_4_Trial_Exam_Set_4": (306, 309),
        "NCK_Paper_4_Trial_Exam_Set_5": (310, 313),
        "NCK_Paper_4_Trial_Exam_Set_6": (314, 317),
        "NCK_Paper_4_Trial_Exam_Set_7": (318, 321),
    }

    # =========================================================================
    # EXTRACTION LOGIC
    # =========================================================================

    for output_name, (start_page, end_page) in exam_ranges.items():
        if start_page > total_pages:
            print(f"Skipping {output_name}: Start page {start_page} is beyond total pages ({total_pages}).")
            continue
        
        writer = PdfWriter()
        
        # Convert to 0-based index
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
    # Update this filename to match your exact file
    # Based on the text, likely "NCK_EXAMINATIONS_PAST_PAPERS.pdf" or similar
    # Assuming user will rename the file to "input.pdf" for simplicity
    pdf_filename = "NCK_EXAMINATIONS_PAST_PAPERS.pdf" 
    
    # If you haven't renamed it, change the variable above to the actual file name
    extract_papers(pdf_filename)
