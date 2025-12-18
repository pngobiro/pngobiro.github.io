
import os
from pypdf import PdfReader, PdfWriter

# CONFIGURATION
# ---------------------------------------------------------
source_filename = "2.2 Electronics.pdf"
output_folder = "Electronics_Exams_Separated"

# Format: "Filename_to_save": (Start_Page, End_Page)
# I have added the specific Exam Type (End Term, Supp, Promo, CAT) to each name.
exam_ranges = {
    "01_Electronics_IV_End_Term_Feb_2022": (1, 5),
    "02_Electronics_IV_End_Term_July_2022": (6, 12),
    "03_Electronics_IV_Supplementary_April_2022": (13, 17),
    "04_Electronics_Supplementary_Oct_2021": (18, 20),
    # Pages 21-33 are handwritten notes/marking keys, skipped by default.
    "05_Electronics_End_Term_Aug_2021": (34, 37),
    "06_Electronics_End_Term_Feb_2021": (38, 40),
    "07_Electronics_Supplementary_June_2021": (41, 45),
    "08_Electronics_End_Term_March_2021": (46, 50),
    "09_Electronics_Promotional_June_2019_Paper_A": (51, 55),
    "10_Electronics_Promotional_June_2019_Paper_B": (56, 60),
    "11_Electronics_Promotional_Jan_Feb_2019": (61, 64),
    "12_Electronics_Promotional_July_2018": (65, 69),
    "13_Electronics_CAT_1": (70, 73),
}
# ---------------------------------------------------------

def split_pdf_by_ranges(source, ranges, output_dir):
    # Check if source file exists
    if not os.path.exists(source):
        print(f"Error: The file '{source}' was not found in this folder.")
        print("Please make sure the PDF is named correctly and is next to this script.")
        return

    # Create output directory
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        reader = PdfReader(source)
        total_pages = len(reader.pages)
        print(f"Processing '{source}' ({total_pages} pages)...")
        print("-" * 40)

        for name, (start, end) in ranges.items():
            writer = PdfWriter()
            
            # Check bounds
            if start < 1 or end > total_pages:
                print(f"Warning: Skipping {name} (Range {start}-{end} is out of bounds).")
                continue

            # Add pages (convert 1-based index to 0-based)
            for i in range(start - 1, end):
                writer.add_page(reader.pages[i])

            output_filename = os.path.join(output_dir, f"{name}.pdf")
            
            with open(output_filename, "wb") as out_file:
                writer.write(out_file)
            
            print(f"Extracted: {name}.pdf")
            
        print("-" * 40)
        print(f"Success! All files are in the folder: '{output_dir}'")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    split_pdf_by_ranges(source_filename, exam_ranges, output_folder)
