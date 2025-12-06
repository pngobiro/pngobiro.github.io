#!/bin/bash

OCR_SERVER="/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
INPUT_DIR="UNPROCESSED"
OUTPUT_FILE="combined_pastpapers.mmd"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Directory '$INPUT_DIR' not found."
    exit 1
fi

# Create or clear the combined file
> "$OUTPUT_FILE"

# Process all PDFs
find "$INPUT_DIR" -name "*.pdf" -type f | sort | while read pdf_file; do
    filename=$(basename "$pdf_file" .pdf)
    mmd_file="${INPUT_DIR}/${filename}_ocr.mmd"
    
    echo "Processing: $pdf_file"
    
    # Run OCR
    node "$OCR_SERVER" "$pdf_file" > "$mmd_file"
    
    if [ $? -eq 0 ]; then
        echo "Created: $mmd_file"
        
        # Append to combined file with a separator
        echo "----------------------------------------------------------------" >> "$OUTPUT_FILE"
        echo "START OF FILE: $filename" >> "$OUTPUT_FILE"
        echo "----------------------------------------------------------------" >> "$OUTPUT_FILE"
        cat "$mmd_file" >> "$OUTPUT_FILE"
        echo -e "\n\n" >> "$OUTPUT_FILE"
    else
        echo "Error processing $pdf_file"
    fi
done

echo "All done! Combined output saved to $OUTPUT_FILE"
