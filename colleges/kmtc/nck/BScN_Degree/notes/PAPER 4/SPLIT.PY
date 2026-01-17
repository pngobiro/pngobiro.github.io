import os
from PyPDF2 import PdfReader, PdfWriter

def extract_units_from_pdf(input_filename):
    # Check if file exists
    if not os.path.exists(input_filename):
        print(f"Error: The file '{input_filename}' was not found.")
        return

    try:
        reader = PdfReader(input_filename)
        total_pages = len(reader.pages)
        print(f"Opened '{input_filename}' with {total_pages} pages.")

        # Define the units and their 1-based page ranges derived from the TOC
        # Note: Python uses 0-based indexing, so we handle the conversion in the loop.
        # Structure: (Output Filename, Start Page, End Page)
        # End Page is inclusive in this logic.
        units_config = [
            # Pages 1-2 are Cover and TOC. We can include them in a separate intro or skip.
            # Here we extract them as "Intro.pdf"
            ("00_Intro_and_TOC.pdf", 1, 2),
            
            # Unit 1: Mental Health (Starts Pg 3, Unit 2 starts Pg 43) -> Ends Pg 42
            ("01_Unit_1_Mental_Health.pdf", 3, 42),
            
            # Unit 2: Sociology (Starts Pg 43, Unit 3 starts Pg 76) -> Ends Pg 75
            ("02_Unit_2_Sociology.pdf", 43, 75),
            
            # Unit 3: Research (Starts Pg 76, Unit 4 starts Pg 114) -> Ends Pg 113
            ("03_Unit_3_Research.pdf", 76, 113),
            
            # Unit 4: Management (Starts Pg 114, Unit 5 starts Pg 150) -> Ends Pg 149
            ("04_Unit_4_Management.pdf", 114, 149),
            
            # Unit 5: Teaching (Starts Pg 150, goes to end of doc Pg 185)
            ("05_Unit_5_Teaching_Methodologies.pdf", 150, 185)
        ]

        for output_name, start_page, end_page in units_config:
            writer = PdfWriter()
            
            # Convert 1-based page numbers to 0-based index for PyPDF2
            # Range in python is exclusive at the end, so we use end_page (without -1)
            start_index = start_page - 1
            end_index = end_page
            
            # Check bounds
            if start_index >= total_pages:
                print(f"Skipping {output_name}: Start page {start_page} exceeds document length.")
                continue
                
            # Adjust end index if it exceeds actual total pages
            if end_index > total_pages:
                end_index = total_pages

            # Add pages to writer
            for i in range(start_index, end_index):
                writer.add_page(reader.pages[i])

            # Save the new PDF
            with open(output_name, "wb") as output_file:
                writer.write(output_file)
            
            print(f"Successfully created: {output_name} (Pages {start_page}-{end_index})")

        print("\nExtraction complete.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Filename defined in user request
    PDF_FILENAME = "NCK_Paper4.pdf"
    extract_units_from_pdf(PDF_FILENAME)
