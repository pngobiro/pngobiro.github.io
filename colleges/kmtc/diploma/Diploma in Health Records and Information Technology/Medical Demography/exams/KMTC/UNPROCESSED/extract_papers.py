import os
import sys
import re
try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    print("❌ Error: 'pypdf' library not found.")
    print("   Please install it by running: pip install pypdf")
    sys.exit(1)

# ==========================================
# PART 1: USER CONFIGURATION
# ==========================================

SOURCE_FILENAME = "FQE 2024Comprehensive Demographic Questions and Analysis.pdf"
OUTPUT_FOLDER = "KMTC_FQE_Jan_2024_Papers"

# Metadata to prepend to filenames
USER_COLLEGE      = "KMTC"
USER_COURSE_CODE  = "DHRIT" 
USER_EXAM_SESSION = "FQE"

# ==========================================
# PART 2: THE DATA (DATES ADDED HERE)
# ==========================================
# I have added the specific Month and Year found on the cover pages 
# directly into these filenames.

DOCUMENTS_TO_EXTRACT = {
    # Pages 2-8: General Questions (Date inferred as Jan 2024)
    "2024_Jan_General_Demography_Questions": [2, 8],

    # Pages 9-10: Cover Date says "19th JANUARY, 2024"
    "2024_Jan_19_Medical_Demography_Paper_1": [9, 10],

    # Pages 11-26: Cover Date says "18th JANUARY, 2024"
    "2024_Jan_18_Epidemiology_Paper": [11, 26],

    # Pages 27-41: Cover Date says "16th JANUARY, 2024"
    "2024_Jan_16_Health_Statistics_Paper": [27, 41],

    # Pages 42-46: Cover Date says "15th JANUARY, 2024"
    "2024_Jan_15_Health_Records_Management_Paper": [42, 46],

    # Pages 47-53: Cover Date says "19th JANUARY, 2024"
    "2024_Jan_19_Medical_Demography_Paper_2": [47, 53],

    # Pages 54-57: Cover Date says "17th January, 2024"
    "2024_Jan_17_Monitoring_and_Evaluation_Paper": [54, 57]
}

# ==========================================
# PART 3: EXTRACTION LOGIC
# ==========================================

def extract_pages():
    print(f"{'='*50}")
    print(f"📄 PDF EXTRACTION TOOL (With Dates)")
    print(f"{'='*50}")

    if not os.path.exists(SOURCE_FILENAME):
        print(f"❌ Error: Source file '{SOURCE_FILENAME}' not found.")
        return

    if not os.path.exists(OUTPUT_FOLDER):
        os.makedirs(OUTPUT_FOLDER)
        print(f"✓ Created output folder: {OUTPUT_FOLDER}")

    try:
        reader = PdfReader(SOURCE_FILENAME)
        total_pdf_pages = len(reader.pages)
        print(f"✓ Loaded PDF ({total_pdf_pages} pages). Processing...\n")

        success_count = 0
        
        for doc_name, (start_page, end_page) in DOCUMENTS_TO_EXTRACT.items():
            if start_page < 1 or end_page > total_pdf_pages:
                print(f"⚠️  Skipping '{doc_name}': Page range error.")
                continue

            try:
                writer = PdfWriter()
                for i in range(start_page - 1, end_page):
                    writer.add_page(reader.pages[i])

                # Construct Filename: College_Course_Session_SpecificDateAndName.pdf
                # Result example: KMTC_DHRIT_FQE_2024_Jan_19_Medical_Demography.pdf
                final_filename = f"{USER_COLLEGE}_{USER_COURSE_CODE}_{USER_EXAM_SESSION}_{doc_name}.pdf"
                output_path = os.path.join(OUTPUT_FOLDER, final_filename)

                with open(output_path, "wb") as f_out:
                    writer.write(f_out)
                
                print(f"✓ Extracted: {final_filename}")
                success_count += 1

            except Exception as e:
                print(f"❌ Failed to extract '{doc_name}': {str(e)}")

        print(f"\n{'='*50}")
        print(f"🎉 DONE! Extracted {success_count} files.")
        print(f"📂 Location: {os.path.abspath(OUTPUT_FOLDER)}")
        print(f"{'='*50}")

    except Exception as e:
        print(f"❌ Critical Error: {e}")

if __name__ == "__main__":
    extract_pages()