import os
import fitz  # PyMuPDF
import sys
import io
from PIL import Image

def extract_images_from_pdf(pdf_path, output_dir="assets/images"):
    # 1. Setup Directory
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    # 2. Open the PDF
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF file '{pdf_path}': {e}")
        return

    print(f"Opened '{pdf_path}'. Found {len(doc)} pages.")
    
    total_saved = 0

    # 3. Iterate through pages
    for page_index in range(len(doc)):
        page = doc[page_index]
        page_number = page_index + 1
        
        # Get list of images on the page
        image_list = page.get_images(full=True)

        if image_list:
            print(f"Page {page_number}: Found {len(image_list)} images.")
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            
            # 4. Extract image bytes
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]  # e.g., 'jpeg', 'png'

            # 5. Construct Filename
            # Format: page-[PageNum]-[SequenceNum].ext
            # Zero-padded for sorting (e.g., page-01-01.jpg)
            filename = f"page-{page_number:02d}-{img_index + 1:02d}.{image_ext}"
            save_path = os.path.join(output_dir, filename)

            # 6. Save Image
            try:
                # Optional: Filter out very small icons/lines (often noise in PDFs)
                image = Image.open(io.BytesIO(image_bytes))
                width, height = image.size
                
                # Filter: Ignore images smaller than 50x50 pixels
                if width > 50 and height > 50:
                    with open(save_path, "wb") as f:
                        f.write(image_bytes)
                    print(f"  Saved: {filename}")
                    total_saved += 1
                else:
                    print(f"  Skipped small image (likely icon/line): {width}x{height}")

            except Exception as e:
                print(f"  Error saving {filename}: {e}")

    print(f"\nExtraction complete. Total images saved: {total_saved}")

if __name__ == "__main__":
    # Check for arguments
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_images.py <filename.pdf>")
    else:
        pdf_filename = sys.argv[1]
        extract_images_from_pdf(pdf_filename)