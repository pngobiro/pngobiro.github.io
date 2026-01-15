import os
from pypdf import PdfReader, PdfWriter

def split_pdf_exams():
    # ==========================================
    # CONFIGURATION SECTION
    # ==========================================
    
    # 1. Source File Name
    # Ensure this matches the exact name of your PDF file
    source_filename = "1_PDFsam_3.1 papers (1).pdf"
    
    # 2. Output Folder Name
    output_folder_name = "Extracted_KMTC_Exams"
    
    # 3. The Data (Filenames and 1-based Page Ranges)
    # You can edit the names or page ranges here if needed.
    documents_to_extract = [
        # Paper 1: Digital Electronics (No specific date on cover, Pages 1-4)
        {"name": "Digital_Electronics_Exam", "start_page": 1, "end_page": 4},
        
        # Paper 2: Clinical Engineering I - June 2023 (Pages 5-8)
        {"name": "2023_June_Clinical_Engineering_I", "start_page": 5, "end_page": 8},
        
        # Paper 3: Mathematics V - June 2023 (Pages 9-11)
        {"name": "2023_June_Mathematics_V", "start_page": 9, "end_page": 11},
    ]

    # ==========================================
    # EXECUTION LOGIC
    # ==========================================
    
    print(f"Starting process for: {source_filename}...")

    try:
        # Load the source PDF
        reader = PdfReader(source_filename)
        total_pages = len(reader.pages)
        
        # Create output directory if it doesn't exist
        if not os.path.exists(output_folder_name):
            os.makedirs(output_folder_name)
            print(f"Created output folder: {output_folder_name}")

        for doc in documents_to_extract:
            writer = PdfWriter()
            filename = doc["name"]
            
            # Convert 1-based human indexing to 0-based Python indexing
            # Start page: subtract 1 to get 0-based index
            start_index = doc["start_page"] - 1
            # End page: keep as is because python range() is exclusive at the stop value
            end_index = doc["end_page"] 
            
            # Validation: Ensure we don't try to read pages that don't exist
            if start_index < 0 or end_index > total_pages:
                print(f"Skipping '{filename}': Page range {doc['start_page']}-{doc['end_page']} is out of valid bounds (Total pages: {total_pages}).")
                continue

            # Add the specific pages to the writer
            for i in range(start_index, end_index):
                writer.add_page(reader.pages[i])

            # Construct the full output path
            output_filename = f"{filename}.pdf"
            output_path = os.path.join(output_folder_name, output_filename)
            
            # Write the new PDF file
            with open(output_path, "wb") as output_file:
                writer.write(output_file)
            
            print(f"Successfully extracted: {output_filename} (Pages {doc['start_page']} to {doc['end_page']})")

        print("\nAll operations completed successfully.")

    except FileNotFoundError:
        print(f"\nError: The file '{source_filename}' was not found in this directory.")
        print("Please check the filename and ensure it is in the same folder as this script.")
    except Exception as e:
        print(f"\nAn unexpected error occurred: {e}")

if __name__ == "__main__":
    split_pdf_exams()