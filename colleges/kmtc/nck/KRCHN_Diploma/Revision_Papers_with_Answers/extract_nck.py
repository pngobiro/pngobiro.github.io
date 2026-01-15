
import os
from pypdf import PdfReader, PdfWriter

def extract_papers(input_pdf):
    if not os.path.exists(input_pdf):
        print(f"Error: File '{input_pdf}' not found.")
        return

    print(f"Reading: {input_pdf}...")
    reader = PdfReader(input_pdf)
    total_pages = len(reader.pages)

    # Dictionary format: { Start_Page_Number : "Output_Filename" }
    # Note: These are the PDF page numbers as seen in the viewer/screenshots.
    # The script automatically handles the conversion to 0-based indexing.
    exam_starts = {
        2:   "NCK_Jan_2009_Paper_1",
        6:   "NCK_Jan_2009_Paper_2",
        12:  "NCK_Jan_2009_Paper_3",
        17:  "NCK_July_2009_Paper_1",
        22:  "NCK_July_2009_Paper_4",
        24:  "NCK_July_2010_Paper_1",
        26:  "NCK_Jan_2011_Paper_2",
        33:  "NCK_July_2011_Paper_1",
        37:  "NCK_July_2011_Paper_2",
        41:  "NCK_July_2011_Paper_3",
        46:  "NCK_July_2011_Paper_4",
        51:  "NCK_Jan_2012_Paper_3",
        61:  "NCK_Jan_2013_Paper_2",
        66:  "NCK_Jan_2013_Paper_3",
        71:  "NCK_Jan_2013_Paper_4",
        77:  "NCK_July_Aug_2007_Paper_1",
        82:  "NCK_July_Aug_2007_Paper_3",
        92:  "NCK_Trial_Exam_Paper_1",
        # Large gap in screenshots here
        208: "NCK_July_2014_Paper_3",
        214: "NCK_Aug_2012_Paper_3",
        220: "NCK_Aug_2011_Paper_3",
        # Paper 4 Section
        268: "NCK_Aug_2016_Paper_4_BScN",
        275: "NCK_July_2014_Paper_4",
        281: "NCK_Aug_2011_Paper_4",
    }

    # Sort pages to ensure we process them in order
    sorted_pages = sorted(exam_starts.keys())

    for i, start_page in enumerate(sorted_pages):
        # Determine the start index (PDF pages start at 1, Python starts at 0)
        start_index = start_page - 1
        
        # Determine the end index
        if i + 1 < len(sorted_pages):
            # The end of this paper is the start of the next one
            end_index = sorted_pages[i+1] - 1
        else:
            # For the last paper in the list, extract 10 pages or until end of file
            end_index = min(start_index + 10, total_pages)

        # Skip logic if there is a massive gap (e.g., between pg 92 and 208)
        # to avoid creating a massive PDF of unrelated content
        if (end_index - start_index) > 20: 
            print(f"  -> Large gap detected after page {start_page}. Limiting extraction to 10 pages.")
            end_index = start_index + 10

        filename = f"{exam_starts[start_page]}.pdf"
        writer = PdfWriter()

        # Add pages to writer
        for p in range(start_index, end_index):
            if p < total_pages:
                writer.add_page(reader.pages[p])

        # Write the specific PDF
        with open(filename, "wb") as f:
            writer.write(f)
        
        print(f"Created: {filename} (Pages {start_page} to {end_index})")

if __name__ == "__main__":
    # Ensure the PDF name matches exactly
    source_pdf = "NCK_Revision_Papers_Volume2_2009-2013_with_Answers.pdf"
    extract_papers(source_pdf)