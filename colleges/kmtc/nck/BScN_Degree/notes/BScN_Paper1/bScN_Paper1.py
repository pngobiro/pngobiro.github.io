
from pypdf import PdfReader, PdfWriter
import os

def split_pdf_merged_units(input_pdf_path):
    """
    Splits the Nursing Licensing Exam PDF into separate files by Unit.
    Parts within the same Unit (e.g., Adult Nursing Part 1 & 2) are merged 
    into a single file.
    """
    
    # Check if file exists
    if not os.path.exists(input_pdf_path):
        print(f"Error: The file '{input_pdf_path}' was not found.")
        return

    reader = PdfReader(input_pdf_path)
    total_pages = len(reader.pages)
    
    # Define the Merged Units and their inclusive page ranges (1-based from footer)
    # Note: 
    # Unit 3 (Adult Nursing) covers pages 100 to 235
    # Unit 4 (Paediatric Nursing) covers pages 236 to 343
    # Unit 5 (Critical Care & Theatre) covers pages 344 to 385
    
    units = [
        # (Output Filename, Start Page, End Page)
        ("Front_Matter", 1, 2),
        ("Unit_1_Professionalism_and_Trends", 3, 26),
        ("Unit_2_Fundamentals_in_Nursing", 27, 99),
        ("Unit_3_Adult_Nursing_Complete", 100, 235),
        ("Unit_4_Paediatric_Nursing_Complete", 236, 343),
        ("Unit_5_Critical_Care_and_Theatre", 344, 385),
        ("Unit_6_Communication_and_Counselling", 386, 425)
    ]

    print(f"Processing '{input_pdf_path}' ({total_pages} pages)...")

    for name, start_p, end_p in units:
        writer = PdfWriter()
        
        # Convert 1-based page numbers to 0-based index
        start_index = start_p - 1
        # Python slice excludes the end, so we leave this as is to capture the last page
        # We also ensure we don't try to grab pages beyond the file limit
        end_index = end_p 
        
        # Validate range
        if start_index >= total_pages:
            print(f"Skipping {name}: Start page {start_p} is out of range.")
            continue
            
        # Add pages to writer
        for i in range(start_index, min(end_index, total_pages)):
            writer.add_page(reader.pages[i])
        
        # Save the file
        output_filename = f"{name}.pdf"
        with open(output_filename, "wb") as output_file:
            writer.write(output_file)
            
        print(f"Created: {output_filename} (Pages {start_p}-{min(end_p, total_pages)})")

if __name__ == "__main__":
    # REPLACE THIS with the actual path to your downloaded PDF file
    pdf_filename = "BScN_Paper1.pdf" 
    
    split_pdf_merged_units(pdf_filename)
