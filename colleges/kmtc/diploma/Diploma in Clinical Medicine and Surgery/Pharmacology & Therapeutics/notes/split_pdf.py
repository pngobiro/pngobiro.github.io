import subprocess
import sys
import math
import os

def get_page_count(filepath):
    """Gets the total page count of a PDF using pdfinfo."""
    try:
        result = subprocess.run(['pdfinfo', filepath], capture_output=True, text=True, check=True)
        for line in result.stdout.splitlines():
            if "Pages:" in line:
                return int(line.split(":")[1].strip())
    except subprocess.CalledProcessError as e:
        print(f"Error reading PDF info: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
    return 0

def split_pdf(filepath, max_pages=1000):
    """Splits a PDF into parts with a maximum number of pages per part."""
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        sys.exit(1)

    total_pages = get_page_count(filepath)
    print(f"Total pages: {total_pages}")

    if total_pages <= max_pages:
        print("PDF is small enough. No split needed.")
        return

    num_parts = math.ceil(total_pages / max_pages)
    pages_per_part = math.ceil(total_pages / num_parts)
    
    print(f"Splitting into {num_parts} parts (approx {pages_per_part} pages each).")

    base_name = os.path.splitext(filepath)[0]
    
    for i in range(num_parts):
        start_page = i * pages_per_part + 1
        end_page = min((i + 1) * pages_per_part, total_pages)
        output_file = f"{base_name} Part {i + 1}.pdf"
        
        print(f"Creating Part {i + 1}: Pages {start_page} to {end_page} -> {output_file}")
        
        cmd = [
            'gs',
            '-sDEVICE=pdfwrite',
            '-dNOPAUSE',
            '-dBATCH',
            '-dSAFER',
            f'-dFirstPage={start_page}',
            f'-dLastPage={end_page}',
            f'-sOutputFile={output_file}',
            filepath
        ]
        
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except subprocess.CalledProcessError as e:
            print(f"Error splitting PDF: {e}")
            sys.exit(1)

    print("Splitting complete.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 split_pdf.py <pdf_file>")
        sys.exit(1)
    
    pdf_file = sys.argv[1]
    split_pdf(pdf_file)
