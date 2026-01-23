import PyPDF2
import os

def extract_papers(source_filename):
    # Check if the source file exists
    if not os.path.exists(source_filename):
        print(f"Error: The file '{source_filename}' was not found in the current directory.")
        return

    # Create a directory to store the extracted files
    output_dir = "Extracted_NCK_Papers"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        # Open the source PDF
        with open(source_filename, 'rb') as source_file:
            reader = PyPDF2.PdfReader(source_file)
            total_pages = len(reader.pages)
            print(f"Opened '{source_filename}' successfully. Total pages: {total_pages}")

            # Dictionary mapping Output Filenames to (Start Page, End Page)
            # Note: These are 1-based page numbers as seen in the PDF viewer
            papers_map = {
                # --- April 2016 ---
                '01_April_2016_Paper_1.pdf': (2, 7),
                '02_April_2016_Paper_2.pdf': (8, 13),
                '03_April_2016_Paper_3.pdf': (14, 20),
                '04_April_2016_Paper_4.pdf': (21, 28),

                # --- July 2014 ---
                '05_July_2014_Paper_1.pdf': (29, 34),
                '06_July_2014_Paper_2.pdf': (35, 40),
                '07_July_2014_Paper_3.pdf': (41, 45),
                '08_July_2014_Paper_4.pdf': (46, 51),

                # --- January 2015 ---
                '09_Jan_2015_Paper_1.pdf': (52, 57),
                '10_Jan_2015_Paper_2.pdf': (58, 63),
                '11_Jan_2015_Paper_3.pdf': (64, 70),
                '12_Jan_2015_Paper_4.pdf': (71, 76),

                # --- August 2015 ---
                '13_Aug_2015_Paper_1.pdf': (77, 81),
                '14_Aug_2015_Paper_2.pdf': (82, 86),
                '15_Aug_2015_Paper_3.pdf': (87, 91),
                '16_Aug_2015_Paper_4.pdf': (92, 97),

                # --- July 2014 (Repeated Section in PDF) ---
                '17_July_2014_Repeat_Paper_1.pdf': (98, 102),
                '18_July_2014_Repeat_Paper_2.pdf': (103, 107),
                '19_July_2014_Repeat_Paper_3.pdf': (108, 112),
                '20_July_2014_Repeat_Paper_4.pdf': (113, 117),

                # --- Mock Exams (Dec 2013) ---
                '21_Mock_2013_Paper_1.pdf': (118, 124),
                '22_Mock_2013_Paper_2.pdf': (125, 129),
                '23_Mock_2013_Paper_3.pdf': (130, 134),
                '24_Mock_2013_Paper_4.pdf': (135, 139),
                '25_Mock_2013_Paper_5.pdf': (140, 144),
                '26_Mock_2013_Paper_6.pdf': (145, 149),
                '27_Mock_2013_Paper_7.pdf': (150, 158),
            }

            for filename, (start_page, end_page) in papers_map.items():
                writer = PyPDF2.PdfWriter()
                
                # Convert 1-based page numbers to 0-based index
                # Python ranges are inclusive of start, exclusive of end, 
                # so we use (start-1) to (end).
                start_idx = start_page - 1
                end_idx = end_page

                # Validation to ensure we don't go out of bounds
                if start_idx >= total_pages:
                    continue
                
                for i in range(start_idx, min(end_idx, total_pages)):
                    writer.add_page(reader.pages[i])

                output_path = os.path.join(output_dir, filename)
                with open(output_path, 'wb') as output_file:
                    writer.write(output_file)
                
                print(f"Extracted: {filename} (Pages {start_page}-{end_page})")

            print("\nExtraction Complete! Check the 'Extracted_NCK_Papers' folder.")

    except Exception as e:
        print(f"An error occurred processing the PDF: {e}")

# --- Main Execution ---
# Define the source file name exactly as you provided
source_pdf = "NCK PAST PAPERS 2013 2016.pdf"

extract_papers(source_pdf)