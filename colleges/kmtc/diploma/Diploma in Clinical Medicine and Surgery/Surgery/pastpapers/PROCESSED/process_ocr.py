import os
import subprocess
import glob
import re

OCR_SERVER = "/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
INPUT_DIRS = [
    "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Clinical Medicine and Surgery/Surgery/pastpapers/UNPROCESSED",
    "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Clinical Medicine and Surgery/Surgery/pastpapers/UNPROCESSED/MKU"
]

def process_pdf(pdf_path):
    print(f"Processing: {pdf_path}")
    try:
        result = subprocess.run(
            ["node", OCR_SERVER, pdf_path],
            capture_output=True,
            text=True,
            timeout=300  # 5 minutes timeout
        )
        
        output = result.stdout
        
        # Extract MMD content
        match = re.search(r"--- Converted MMD Start ---\n(.*?)\n--- Converted MMD End ---", output, re.DOTALL)
        if match:
            mmd_content = match.group(1)
            output_path = pdf_path.replace(".pdf", "_ocr.mmd")
            with open(output_path, "w") as f:
                f.write(mmd_content)
            print(f"Created: {output_path}")
            return True
        else:
            print(f"Failed to extract MMD for {pdf_path}")
            print("Output start:", output[:200])
            return False
            
    except subprocess.TimeoutExpired:
        print(f"Timeout processing {pdf_path}")
        return False
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
        return False

def main():
    for directory in INPUT_DIRS:
        print(f"Scanning {directory}...")
        pdf_files = glob.glob(os.path.join(directory, "*.pdf"))
        for pdf_file in pdf_files:
            mmd_file = pdf_file.replace(".pdf", "_ocr.mmd")
            # Check if MMD exists and is valid (has content)
            if os.path.exists(mmd_file) and os.path.getsize(mmd_file) > 1000:
                print(f"Skipping {pdf_file} (MMD exists)")
                continue
            
            process_pdf(pdf_file)

if __name__ == "__main__":
    main()
